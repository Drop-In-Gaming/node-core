import {toast} from "react-toastify";
import restApi, {GET} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import getInvitations from "api/rest/getInvitations";
import getPosts, {ePost} from "api/rest/getPosts";
import getUmMeta from "api/rest/getUmMeta";
import {iUser} from "variables/sharedInterfaces";
import DropVariables from "variables/DropVariables";
import {C6, dig_wallet_transactions, um_followers, users} from "variables/C6";
import DigApi from "DigApi";
import getUserMeta from "./getUserMeta";
import getRegistrations from "./getRegistrations";

let fastCache: number[] = [];

export interface iGetUser {
    userIds?: number[],
    search?: string
}

export default restApi<iGetUser>({
    axios: DropVariables.axios,
    tableName: C6.users.TABLE_NAME,
    requestMethod: GET,
    clearCache: () => fastCache = [],
    queryCallback: (request: iGetUser = {}) => {

        const bootstrap: DigApi = DigApi.bootstrap;

        let lookUpQueue: number[] = [];

        if (undefined !== request.userIds && undefined !== request.search) {

            throw Error('Should not pass both userIds and search explicitly!');

        }

        if (undefined !== request.userIds) {

            if (request.userIds.length === 0) {

                console.log('an empty array of userIds was passed to getUsers.tsx')

                return null

            }

            let userIds: number[] = request.userIds;

            userIds.map(userId => {

                const cached = bootstrap.state.users?.find(user => user.ID === userId);

                if (false === fastCache.includes(userId)) {

                    fastCache.push(userId)

                }

                if (undefined === cached) {

                    lookUpQueue.push(userId);

                    let tempUserInfo = {
                        ID: userId
                    };

                    // this is our flag not to re-fire the ajax request for this user
                    updateRestfulObjectArray<iUser>([tempUserInfo], "ID", "users")

                } else {

                    if (Object.keys(cached).length === 1) {

                        toast.warning("DEVS: User (" + cached.ID + ") is being looked up!", DropVariables.toastOptionsDevs);

                    }

                }

            })

            if (0 === lookUpQueue.length) {

                console.log('getUsers: nothing in the lookup Queue')

                return undefined;

            } else if (DropVariables.isLocal) {

                toast.warning("DEVS: User(s) (" + lookUpQueue.join(',') + ") are being looked up!", DropVariables.toastOptionsDevs);

            }

        } else if (request.search === '') {

            throw Error('Do not pass an empty search request')

        }

        let params = {
            [C6.SELECT]: [
                C6.users.ID,
                C6.users.USER_NICENAME,
                C6.users.DISPLAY_NAME,
                C6.users.USER_STATUS,
                [
                    C6.SELECT,
                    C6.posts.TABLE_NAME,
                    null,
                    {
                        [C6.SELECT]: [
                            C6.posts.GUID
                        ],
                        [C6.WHERE]: {
                            [C6.posts.POST_EXCERPT]: 'profile_photo',
                            [C6.posts.POST_TYPE]: 'attachment',
                            [C6.posts.POST_AUTHOR]: C6.users.ID,
                        },
                        [C6.PAGINATION]: {
                            [C6.ORDER]: {
                                [C6.posts.POST_DATE]: C6.DESC
                            },
                            [C6.PAGE]: 1,
                            [C6.LIMIT]: 1
                        }
                    },
                    'profile_photo'
                ],
                [
                    C6.SELECT,
                    C6.um_friends.TABLE_NAME,
                    null,
                    {
                        [C6.SELECT]: [
                            [C6.GROUP_CONCAT, C6.um_friends.USER_ID1]
                        ],
                        [C6.WHERE]: {
                            0: {
                                [C6.um_friends.USER_ID1]: C6.users.ID,
                                [C6.um_friends.USER_ID2]: C6.users.ID,
                            },
                            [C6.um_friends.STATUS]: 1
                        }
                    },
                    'friends'
                ],
                [
                    C6.SELECT,
                    C6.um_friends.TABLE_NAME,
                    null,
                    {
                        [C6.SELECT]: [
                            [C6.GROUP_CONCAT, C6.um_friends.USER_ID2]
                        ],
                        [C6.WHERE]: {
                            0: {
                                [C6.um_friends.USER_ID1]: C6.users.ID,
                            },
                            [C6.um_friends.STATUS]: 0
                        }
                    },
                    'sentFriendRequests'
                ],
                [
                    C6.SELECT,
                    C6.um_friends.TABLE_NAME,
                    null,
                    {
                        [C6.SELECT]: [
                            [C6.GROUP_CONCAT, C6.um_friends.USER_ID1]
                        ],
                        [C6.WHERE]: {
                            0: {
                                [C6.um_friends.USER_ID2]: C6.users.ID,
                            },
                            [C6.um_friends.STATUS]: 0
                        }
                    },
                    'receivedFriendRequests'
                ],
                [
                    C6.SELECT,
                    C6.um_followers.TABLE_NAME,
                    null,
                    {
                        [C6.SELECT]: [
                            [C6.GROUP_CONCAT, C6.um_followers.USER_ID2]
                        ],
                        [C6.WHERE]: {
                            [C6.um_followers.USER_ID1]: C6.users.ID,
                        }
                    },
                    'followers'
                ],
                [
                    C6.SELECT,
                    um_followers.TABLE_NAME,
                    null,
                    {
                        [C6.SELECT]: [
                            [C6.GROUP_CONCAT, C6.um_followers.USER_ID1]
                        ],
                        [C6.WHERE]: {
                            [um_followers.USER_ID2]: C6.users.ID,
                        }
                    },
                    'following'
                ],
                [C6.GROUP_CONCAT, C6.dig_features.FEATURE_CODE],
                [C6.GROUP_CONCAT, C6.dig_groups.GROUP_NAME]
            ],
            [C6.JOIN]: {
                /*[C6.LEFT_OUTER]: {
                    [um_metadata.TABLE_NAME]: {
                        [um_metadata.USER_ID]: users.ID,
                        [um_metadata.UM_KEY]: 'profile_photo',
                    },
                }*/
                [C6.LEFT]: {
                    [C6.dig_user_groups.TABLE_NAME]: [
                        C6.users.ID,
                        C6.dig_user_groups.USER_ID
                    ],
                    [C6.dig_groups.TABLE_NAME]: [
                        C6.dig_user_groups.GROUP_ID,
                        C6.dig_groups.ENTITY_ID
                    ],
                    [C6.dig_feature_group_references.TABLE_NAME]: [
                        C6.dig_groups.ENTITY_ID,
                        C6.dig_feature_group_references.GROUP_ENTITY_ID
                    ],
                    [C6.dig_features.TABLE_NAME]: [
                        C6.dig_features.FEATURE_ENTITY_ID,
                        C6.dig_feature_group_references.FEATURE_ENTITY_ID
                    ]
                }
            },
            [C6.GROUP_BY]: [
                C6.users.ID
            ],
            [C6.WHERE]: {},
            [C6.PAGINATION]: {
                [C6.ORDER]: {
                    [C6.users.ID]: C6.DESC
                },
                [C6.LIMIT]: 0 !== lookUpQueue.length ? lookUpQueue.length : 20,
                [C6.PAGE]: 1
            },
        } as any;

        if (request.search !== undefined && request.search !== '') {

            params[C6.WHERE][0] = [
                [C6.users.DISPLAY_NAME, C6.LIKE, '%' + request.search + '%'],
                [C6.users.USER_NICENAME, C6.LIKE, '%' + request.search + '%']
            ];

        }

        if (bootstrap.state.id !== 0
            && lookUpQueue.length === 1
            && lookUpQueue[0] === bootstrap.state.id) {
            params[C6.SELECT].push(C6.users.USER_EMAIL)

            params[C6.SELECT].push([C6.SUM, dig_wallet_transactions.AMOUNT, 'funds']);

            params[C6.JOIN][C6.LEFT][dig_wallet_transactions.TABLE_NAME] = {
                [dig_wallet_transactions.USER_ID]: users.ID
            };

        }

        if (lookUpQueue.length === 1 && 0 === lookUpQueue[0]) {

            throw new Error("Invalid user ID given. The id 0 may not be queried.");

        }

        if (0 !== lookUpQueue.length) {

            if (DropVariables.isLocal) {

                toast.success("DEVS: User(s) (" + lookUpQueue.join(',') + ") request for remote.", DropVariables.toastOptionsDevs);

            }

            params[C6.WHERE][C6.users.ID] = [C6.IN, lookUpQueue];

        }

        return params;
    },
    responseCallback: response => {

        const bootstrap: DigApi = DigApi.bootstrap;

        const parseUser = (user): iUser => {

            user.funds = parseFloat(user.funds) || 0.00

            user.following = user.following?.split(',').map((userID) => parseInt(userID)) || []
            user.followers = user.followers?.split(',').map((userID) => parseInt(userID)) || []
            user.friends = user.friends?.split(',').map((userID) => parseInt(userID)) || []
            user.sentFriendRequests = user.sentFriendRequests?.split(',').map((userID) => parseInt(userID)) || []
            user.receivedFriendRequests = user.receivedFriendRequests?.split(',').map((userID) => parseInt(userID)) || []

            return user;

        };

        const restData = response?.data?.rest || [];

        if (0 === restData.length) {

            toast.error('Failed to fetch user info!', DropVariables.toastOptions)

            return;

        }

        const parsedNewUsers = restData.map(parseUser);

        console.log('parsedNewUsers updating bootstrap now', parsedNewUsers)
        updateRestfulObjectArray<iUser>(parsedNewUsers, "ID", "users")

        parsedNewUsers.map(user => {

            if (user.ID === bootstrap.state.id) {

                getInvitations()

                getUserMeta({
                    user: user
                })

                getUmMeta({
                    user: user
                })

                getPosts({
                    queryPostType: ePost.MY_IMAGES
                })

                getRegistrations({})

            }

        })

    }
});



