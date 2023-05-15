import restApi, {GET, RequestGetPutDeleteBody} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import DigApi from "DigApi";
import {C6, iPosts} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iWpPost} from "variables/sharedInterfaces";


function getRulePostIds(): Array<any> {
    return [
        C6.SELECT,
        C6.dig_mode_game.TABLE_NAME,
        null,
        {
            [C6.SELECT]: [
                [C6.DISTINCT, C6.dig_mode_game.RULES_POST_ID]
            ],
            [C6.WHERE]: {
                [C6.dig_mode_game.RULES_POST_ID]: [C6.IS_NOT, C6.NULL],
            }
        }
    ];
}

export enum ePost {
    INTEL,
    GAME_RULES,
    PRIVACY,
    COOKIES,
    TERMS,
    MY_CONTENT,
    MY_IMAGES,
}

export default restApi<{
    postId?: number,
    queryPostType: ePost,
    datetime?: string
}, iPosts>({
    axios: DropVariables.axios,
    tableName: C6.posts.TABLE_NAME,
    requestMethod: GET,
    queryCallback: (request) => {

        const {posts} = DigApi.digApi.state;

        if (null === posts) {

            return undefined;

        }

        if (posts === undefined) {

            DigApi.digApi.setState({
                posts: null
            })

        }

        let query: RequestGetPutDeleteBody = {
            [C6.SELECT]: [
                [C6.GROUP_CONCAT, C6.terms.NAME, 'categories'],
                ...Object.keys(C6.posts.COLUMNS)
            ],
            [C6.WHERE]: {},
            [C6.JOIN]: {
                [C6.LEFT]: {
                    [C6.term_relationships.TABLE_NAME]: {
                        [C6.term_relationships.OBJECT_ID]: C6.posts.ID
                    },
                    [C6.term_taxonomy.TABLE_NAME]: {
                        [C6.term_taxonomy.TERM_TAXONOMY_ID]: C6.term_relationships.TERM_TAXONOMY_ID
                    },
                    [C6.terms.TABLE_NAME]: {
                        [C6.terms.TERM_ID]: C6.term_taxonomy.TERM_ID
                    }
                }
            },
            [C6.GROUP_BY]: [
                C6.posts.POST_DATE,
                C6.posts.ID,
                C6.terms.NAME
            ],
            [C6.PAGINATION]: {
                [C6.ORDER]: {
                    [C6.posts.POST_DATE]: C6.DESC
                },
                [C6.LIMIT]: 500
            }
        };


        switch (request.queryPostType) {
            default:
            case ePost.INTEL:
                request.queryPostType ??= ePost.INTEL;
                query[C6.WHERE] = {
                    [C6.posts.POST_TYPE]: 'post',
                    [C6.posts.POST_STATUS]: 'publish',
                    [C6.term_taxonomy.TAXONOMY]: 'category'
                }
                break;
            case ePost.MY_CONTENT:
                query[C6.WHERE] = {
                    0: [C6.posts.POST_TYPE, C6.NOT_EQUAL, 'attachment'],
                    [C6.posts.POST_AUTHOR]: DigApi.digApi.state.id
                }
                query[C6.PAGINATION][C6.LIMIT] = 1000;
                break;
            case ePost.MY_IMAGES:
                query[C6.WHERE] = {
                    [C6.posts.POST_TYPE]: 'attachment',
                    [C6.posts.POST_AUTHOR]: DigApi.digApi.state.id,

                }
                query[C6.PAGINATION][C6.LIMIT] = 10;
                break;
            case ePost.GAME_RULES:
                query[C6.WHERE] = {
                    [C6.posts.ID]: [C6.IN, [getRulePostIds()]]
                }
                break;
            case ePost.PRIVACY:
                //    post_title LIKE '%PRIVACY%'
                query[C6.WHERE] = {
                    [C6.posts.POST_TITLE]: [C6.LIKE, '%PRIVACY%']
                }
                query[C6.PAGINATION][C6.LIMIT] = 1;
                break;
            case ePost.TERMS:
                query[C6.WHERE] = {
                    [C6.posts.POST_TITLE]: [C6.LIKE, '%terms%']
                }
                query[C6.PAGINATION][C6.LIMIT] = 1;
                break;
            case ePost.COOKIES:
                query[C6.WHERE] = {
                    [C6.posts.POST_TITLE]: [C6.LIKE, '%cookies%']
                }
                query[C6.PAGINATION][C6.LIMIT] = 1;
                break;
        }


        if (undefined !== request.postId) {

            query[C6.WHERE][C6.posts.ID] = request.postId

        }

        if (undefined !== request.datetime) {

            query[C6.WHERE][C6.posts.POST_DATE] = request.datetime

        }

        return query

    },
    responseCallback: (response, request) => {

        const parsePost = (apiData) => {

            apiData.categories = apiData.categories?.split(',')

            apiData.postType = request.queryPostType

            return apiData;

        };

        let posts = response.data.rest;

        posts = posts.map(parsePost)

        updateRestfulObjectArray<iWpPost>(posts, "ID", "posts")

    }
});

