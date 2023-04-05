import {describe, expect, test} from '@jest/globals';
import DigApi from "DigApi";
import authenticateTestUser from "jestHoc";


describe('Test users can authenticate', () => {

    test('Assert new user can authenticate', async () => {

        expect(DigApi.bootstrap.state.id).toEqual(0)

        const {deleteUser, id} = await authenticateTestUser();

        console.log('Deleting user:', id);

        await deleteUser();

        console.log("Deleted user: ", DigApi.bootstrap.state.id);

    }, 120000);

});
