import restApi, {GET, iGetC6RestResponse} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_Groups} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iGroups} from "variables/sharedInterfaces";


export default restApi<{}, iDig_Groups, {}, iGetC6RestResponse<iGroups>>({
            axios: DropVariables.axios,
            tableName: C6.dig_groups.TABLE_NAME,
            requestMethod: GET,
            queryCallback: (request) => {
                request.success = 'Successfully received groups!'
                request.error = 'An unknown issue occurred fetching groups!'
                return {
                    [C6.SELECT]: [
                        C6.dig_groups.ENTITY_ID,
                        C6.dig_groups.GROUP_NAME,
                        [C6.GROUP_CONCAT, C6.dig_features.FEATURE_CODE],
                        [C6.GROUP_CONCAT, C6.dig_group_references.ALLOWED_TO_GRANT_GROUP_ID]
                    ],
                    [C6.JOIN]: {
                        [C6.LEFT]: {
                            [C6.dig_group_references.TABLE_NAME]: [
                                C6.dig_group_references.GROUP_ID,
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
                        C6.dig_groups.ENTITY_ID
                    ],
                    [C6.PAGINATION]: {
                        [C6.LIMIT]: 100
                    }
                }
            },
            responseCallback: (response, _request) => {
                updateRestfulObjectArray<iDig_Groups>((response?.data?.rest || []), "entity_id", "groups")
            }
        }
    )
