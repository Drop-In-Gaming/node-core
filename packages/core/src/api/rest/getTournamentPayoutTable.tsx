import restApi, {GET} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_Payout_Table, iDig_Tournament_Payout_Table} from "variables/C6";
import {parse} from 'php-serialized-data';
import DropVariables from "variables/DropVariables";

export interface iPayoutCustomStacks {
    label: number[],
    rate: number[],
    min: number,
    max: number,
}

export type iPayoutTable<Table = iDig_Tournament_Payout_Table | iDig_Payout_Table> = Table & {
    parsedCustomPercentage?: iPayoutCustomStacks[]
    parsedPercentage?: number[],
    min: number,
    max: number
}

export type iTournamentPayoutTable = iPayoutTable<iDig_Tournament_Payout_Table>;

export default restApi<{}, iTournamentPayoutTable>({
        axios: DropVariables.axios,
        tableName: C6.dig_tournament_payout_table.TABLE_NAME,
        requestMethod: GET,
        queryCallback: {},
        responseCallback: response => {

            // noinspection DuplicatedCode
            const table: iTournamentPayoutTable[] = response?.data?.rest?.map(row => {

                row.parsedPercentage = parse(row.percentage).toJs({
                    detectArrays: true,
                    private: true
                });

                row.parsedPercentage.map(percent => parseFloat(percent))

                row.label = row.label?.split(' to ');

                row.min = parseInt(row.min)

                row.max = parseInt(row.max)

                return row;

            }) || []

            updateRestfulObjectArray<iTournamentPayoutTable>(
                table,
                "id", "tournamentPayoutTable")

        }
    })

