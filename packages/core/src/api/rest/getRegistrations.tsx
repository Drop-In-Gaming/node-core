import restApi, {GET} from "api/API";
import DigApi from "DigApi";
import {C6, dig_comp_registration, dig_vendor, iDig_Comp_Registration} from "variables/C6";
import DropVariables from "variables/DropVariables";

interface iGetNotifications {
    competitionIds?: number[]
}

export default restApi<iGetNotifications, iDig_Comp_Registration>({
        axios: DropVariables.axios,
        tableName: dig_comp_registration.TABLE_NAME,
        requestMethod: GET,
        queryCallback: (request: iGetNotifications) => {


            let query = {
                [C6.SELECT]: [
                    dig_comp_registration.COMP_REGISTRATION_ID,
                    dig_comp_registration.USER_ID,
                    dig_comp_registration.COMPETITIONS_ID,
                    dig_comp_registration.TEAM_ID,
                    dig_comp_registration.POSITION,
                    dig_comp_registration.CREATED,
                    dig_comp_registration.UPDATED,
                    dig_comp_registration.VENDOR_ID,
                    dig_comp_registration.TEAM_FULL_TIMESTAMP,
                    dig_comp_registration.VENDOR_GAMERTAG,
                    dig_comp_registration.STREAMING_URL,
                    dig_comp_registration.STREAMING_PLATFORM,
                    dig_vendor.VENDOR_NAME,
                ],
                [C6.JOIN]: {
                    [C6.LEFT]: {
                        [dig_vendor.TABLE_NAME]: {
                            [dig_vendor.VENDOR_ID]: dig_comp_registration.VENDOR_ID
                        },
                    },
                },

                [C6.WHERE]: {
                    [dig_comp_registration.COMPETITIONS_ID]: [C6.IN, request.competitionIds],
                },
                [C6.GROUP_BY]: [
                    dig_comp_registration.COMP_REGISTRATION_ID,
                    dig_comp_registration.USER_ID,
                    dig_comp_registration.COMPETITIONS_ID,
                    dig_comp_registration.TEAM_ID,
                    dig_comp_registration.POSITION,
                    dig_comp_registration.CREATED,
                    dig_comp_registration.UPDATED,
                    dig_comp_registration.VENDOR_ID,
                    dig_comp_registration.VENDOR_GAMERTAG,
                    dig_comp_registration.STREAMING_URL,
                    dig_comp_registration.STREAMING_PLATFORM,
                    dig_vendor.VENDOR_NAME,
                ],
                [C6.PAGINATION]: {
                    [C6.PAGE]: 1,  // start at one
                    [C6.LIMIT]: 1000
                }
            };

            if (undefined === request.competitionIds) {

                if (0 === DigApi.digApi.state.id) {
                    throw Error("Trying to get competition registrations without a user id or specified competition ids")
                }

                query[C6.WHERE] = {
                    [dig_comp_registration.USER_ID]: DigApi.digApi.state.id
                }

            }

            return query
        },
        responseCallback: (response) => {

            const restData = response?.data?.rest || [];

            DigApi.digApi.setState((prevState) => {
                return {
                    registrations: [
                        ...prevState?.registrations?.filter(item => false === (restData?.find(value => value.comp_registration_id === item.comp_registration_id) || false)) || [],
                        ...restData
                    ]
                }
            });


        }
    });
