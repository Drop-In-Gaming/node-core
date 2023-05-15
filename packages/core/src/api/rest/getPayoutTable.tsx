import {parse} from "php-serialized-data";
import restApi, {GET} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {iPayoutTable} from "api/rest/getTournamentPayoutTable";
import {C6, iDig_Payout_Table} from "variables/C6";
import DropVariables from "variables/DropVariables";


export type iCustomPayoutTable = iPayoutTable<iDig_Payout_Table>;

export default restApi<{}, iCustomPayoutTable>({
        axios: DropVariables.axios,
        tableName: C6.dig_payout_table.TABLE_NAME,
        requestMethod: GET,
        queryCallback: {},
        responseCallback: response => {

            const table: iCustomPayoutTable[] = response?.data?.rest?.map(row => {

                 row.parsedCustomPercentage = parse(row.percentage).toJs({
                    detectArrays: true,
                    private: true
                });

                row.parsedCustomPercentage?.map(row => {

                    row.label = row.label
                        ?.split(' to ')

                    const [min, max] = 'string' === typeof row.label ? [row.label, undefined] : row.label;

                    row.min = parseInt(min)

                    row.max = parseInt(max)

                    row.rate = row.rate?.map(rate => parseFloat(rate))

                })

                return row;
            }) || []

            updateRestfulObjectArray<iCustomPayoutTable>(
                table,
                "id", "payoutTable")

        }
    })

