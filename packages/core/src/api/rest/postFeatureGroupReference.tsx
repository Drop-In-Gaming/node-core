import restApi, {iPostC6RestResponse, POST} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
//import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_Feature_Group_References, iDig_Features} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iGroups} from "variables/sharedInterfaces";

export default restApi<{
    feature_entity_id: number;
    group_entity_id: number;
}, iDig_Feature_Group_References, {}, iPostC6RestResponse>({
    axios: DropVariables.axios,
    tableName: C6.dig_feature_group_references.TABLE_NAME,
    requestMethod: POST,
    queryCallback: (request) => {
        request.success ??= 'Yay! That group is now associated with the feature!'
        request.error ??= 'There was an issue adding the feature to the group. Please try again.'
        return request;
    },
    responseCallback: (_response, request, id) => {

        if ('number' !== typeof id) {
            return;
        }

        updateRestfulObjectArray<iGroups>(previousState => {

            const fullGroup: iGroups | undefined = previousState.groups?.find((group: iGroups) => group.entity_id === request.group_entity_id);

            const fullFeature: iDig_Features | undefined = previousState.features?.find((feature: iDig_Features) => feature.feature_entity_id === request.feature_entity_id);

            if (undefined === fullFeature?.feature_code) {

                fullGroup?.feature_code?.push(fullFeature?.feature_code ?? '');

            }

            return fullGroup ? [fullGroup] : [];

        }, "entity_id", "groups")
    }
});

