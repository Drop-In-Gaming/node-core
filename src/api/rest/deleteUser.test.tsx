import {describe, expect, test} from '@jest/globals';
import {act, waitFor} from '@testing-library/react';
import logout from "api/hoc/logout";
import deleteUserAPI from "api/rest/deleteUser";
import DigApi from "DigApi";
import {createTestUser} from "jestHoc";


describe('Delete User', () => {

    test('Can Not Delete User That Is Not Logged In', async () => {

        expect(DigApi.digApi.state.id).toEqual(0)

        let {user_login, user_pass, id, deleteUser} = await createTestUser();

        console.log('Can Not Delete User That Is Not Logged In')

        expect(user_login).not.toBeUndefined();

        expect(user_pass).not.toBeUndefined();

        expect(DigApi.digApi.state.users).not.toBeUndefined();

        console.log('Attempt delete that should fail')
        // this should throw an error
        await act(async () => {

            const bootstrap: DigApi = DigApi.digApi;

            console.log(await logout())

            await waitFor(async () => {

                expect(bootstrap.state.backendThrowable).toEqual([]);

                expect(bootstrap.state.id).toEqual(0);

            }, {timeout: 10000, interval: 1000});

            expect(bootstrap.state.backendThrowable).toEqual([]);

            await deleteUserAPI({ID: id as number})

            console.log('backendThrowable', bootstrap.state.backendThrowable)

            expect(bootstrap.state.backendThrowable).not.toEqual([]);

            bootstrap.setState({backendThrowable: []})

        });

        // this should not throw an error as it's actually a custom test closure
        await deleteUser();

        const bootstrap: DigApi = DigApi.digApi;

        console.log('backendThrowable', bootstrap.state.backendThrowable)

        expect(bootstrap.state.backendThrowable).toEqual([]);

        const user = bootstrap.state.users?.find(user => user.user_login === user_login)

        expect(user).toEqual(undefined);


    }, 60000);

});