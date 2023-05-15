import {describe, expect, test} from '@jest/globals';
import DigApi from "DigApi";
import authenticateTestUser from "jestHoc";




describe('Can Create and Delete User', () => {

    test('Can Create, Authenticate, and Delete', async () => {
        const bootstrap: DigApi = DigApi.digApi;

        expect(bootstrap.state.id).toEqual(0)

        let {user_login, user_pass, deleteUser} = await authenticateTestUser();

        expect(bootstrap.state.users?.length).toEqual(1);

        expect(user_login).not.toBeUndefined();

        expect(user_pass).not.toBeUndefined();

        // this should throw an error
        await deleteUser();


    }, 91000);

});