import restApi, {GET} from "api/API";
import {C6} from "variables/C6";
import DigApi from "DigApi";
import DropVariables from "variables/DropVariables";


export default restApi({
        axios: DropVariables.axios,
        tableName: C6.dig_subscription_model.TABLE_NAME,
        requestMethod: GET,
        queryCallback: {},
        responseCallback: response => {
            const restData = response?.data?.rest || [];
            DigApi.digApi.setState({
                subscriptions: restData,
            });
        }
    })

