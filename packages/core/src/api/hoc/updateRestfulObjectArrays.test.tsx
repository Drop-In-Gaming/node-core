import {describe, expect, it} from '@jest/globals';
import updateRestfulObjectArray, { eUpdateInsertMethod } from "../hoc/updateRestfulObjectArrays";
import DigApi from "DigApi";
import {iUser} from "variables/sharedInterfaces";

describe('updateRestfulObjectArray', () => {
    it('replaces existing state with new data when using the  method', () => {

        const data : iUser[] = [
            { ID: 1, user_nicename: 'Alice' },
            { ID: 2, user_nicename: 'Bob' },
            { ID: 3, user_nicename: 'nick' },
        ];

        const uniqueObjectId = 'ID';
        const stateKey = 'users';

        // call the function with the REPLACE method
        updateRestfulObjectArray(data, uniqueObjectId, stateKey, eUpdateInsertMethod.REPLACE);

        // expect setStateMock to have been called with the expected state
        expect(DigApi.digApi.state.users?.find(user => user.ID === 1)).not.toEqual( undefined);
    });
});