import restApi, {iPostC6RestResponse, POST, removeInvalidKeys} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_Result_Upload, iPosts, posts} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iCompetitions} from "variables/sharedInterfaces";


export default restApi<{
    'post_author': number;
    'post_content': string;
    'post_title': string;
    'post_status': string;
    'comment_status': string;
    'ping_status': string;
    'post_name': string;
    'post_parent': number;
    'guid': string;
    'post_type': string;
    'post_mime_type': string;
    'comp_id'?: number;
    'team_id'?: number;
    'scorebox'?: number;
    uploadCallback?: (ID: number, post_content: string) => void
}, iPosts & iDig_Result_Upload, {}, iPostC6RestResponse>({
    axios: DropVariables.axios,
    tableName: [C6.posts.TABLE_NAME, C6.dig_result_upload.TABLE_NAME],
    requestMethod: POST,
    queryCallback: (request) => {
        // message should probably be more dynamic
        request.success ??= 'Successfully add the post content!'
        request.error ??= 'An unknown issue occurred adding your post content. We will be looking into this shortly.'
        return request
    },
    responseCallback: (_response, request, id) => {

        'number' === typeof id && updateRestfulObjectArray<iPosts>([
            removeInvalidKeys<iPosts>({...request, ID: id}, [posts])
        ], "ID", "posts", undefined, () => {
            request.uploadCallback?.(id, request.post_content)
        });


        // check sent data and post to result_upload or comp_evidence if applicable
        if (request.comp_id !== undefined && 'number' === typeof id) {
            if (request.scorebox !== undefined) {
                // update result_upload state
                updateRestfulObjectArray<iCompetitions>((prev): iCompetitions[] => {
                    let prevComp = prev.competitions?.find(competition => competition.comp_id === request.comp_id);

                    // the || is there because the editor yells even though we can only be here if comp_id is not undefined...
                    return [{
                        comp_id: request.comp_id || 0,
                        score_uploads: [
                            ...prevComp?.score_uploads || [],
                            {
                                comp_id: request.comp_id,
                                user_id: request.post_author,
                                team_id: request.team_id,
                                post_id: id,
                                scorebox: request.scorebox
                            }
                        ]
                    }]
                }, 'comp_id', 'competitions')

                return;
            }

            // update comp_evidence state
            updateRestfulObjectArray<iCompetitions>((prev): iCompetitions[] => {
                let prevComp = prev.competitions?.find(competition => competition.comp_id === request.comp_id);

                // the || is there because the editor yells even though we can only be here if comp_id is not undefined...
                return [{
                    comp_id: request.comp_id || 0,
                    match_dispute_uploads: [
                        ...prevComp?.match_dispute_uploads || [],
                        id
                    ]
                }]
            }, 'comp_id', 'competitions');
        }
    }
});