import restApi, {DELETE, iDeleteC6RestResponse} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_Feature_Group_References, iDig_Features} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iGroups} from "variables/sharedInterfaces";

export default restApi<{
    featureId: number,
    groupId: number
}, iDig_Feature_Group_References, {}, iDeleteC6RestResponse>({
    axios: DropVariables.axios,
    tableName: C6.dig_feature_group_references.TABLE_NAME,
    requestMethod: DELETE,
    queryCallback: (request) => {
        request.success = 'Successfully deleted the feature from the group.'
        request.error = 'Failed to remove the feature from the group. Please try again later.'
        return {
            [C6.WHERE]: {
                [C6.dig_feature_group_references.FEATURE_ENTITY_ID]: request.featureId,
                [C6.dig_feature_group_references.GROUP_ENTITY_ID]: request.groupId,
            }
        }
    },
    responseCallback: (_response, request, id) => {

        id && updateRestfulObjectArray<iGroups>((previousState) => {

            const fullGroup: iGroups | undefined = previousState.groups?.find((group: iGroups) => group.entity_id === request.groupId);

            const fullFeature: iDig_Features | undefined = previousState.features?.find((feature: iDig_Features) => feature.feature_entity_id === request.featureId);

            const index : number|undefined = fullGroup?.feature_code?.indexOf(fullFeature?.feature_code ?? '');

            if (index && index > -1) { // only splice array when item is found
                fullGroup?.feature_code?.splice(index, 1); // 2nd parameter means remove one item only
            }

            return fullGroup ? [fullGroup] : [];

        }, "entity_id", "groups")

    }
});


