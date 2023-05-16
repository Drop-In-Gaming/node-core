import {expect} from "@jest/globals";
import {act, waitFor} from "@testing-library/react";
import {randomUUID} from "crypto";
import deleteUserAPI from "api/rest/deleteUser";
import postAuthenticate from "api/rest/postAuthenticate";
import postUser from "api/rest/postUser";
import DigApi from "DigApi";

export default async function authenticateTestUser() {

    expect(DigApi.digApi.state.id).toEqual(0)

    const {user_login, user_pass, id, deleteUser, login} = await createTestUser();

    expect(DigApi.digApi.state.id).toEqual(id)

    return {
        user_login, user_pass,
        deleteUser, id, login
    };

}

export async function createTestUser() {

    let bootstrap: DigApi = DigApi.digApi;

    const userName = randomUUID();

    const userPassword = randomUUID() + '11!aAAa';

    const userEmail =  userName + '@example.com';

    console.log('Creating user: ', userName, userPassword);

    // @link https://reactjs.org/link/wrap-tests-with-act
    await act(async () => {

        expect(bootstrap.state.backendThrowable).toEqual([]);

        /* fire events that update state */
        const postDataReturn = await postUser({
            user_login: userName,
            user_nicename: userName,
            user_pass: userPassword,
            user_email: userEmail,
        });

        expect(typeof postDataReturn).toEqual('object');

        if (typeof postDataReturn !== 'object' ||  postDataReturn === null) {

            throw new Error('Could not parse post data')

        }

        const ID = postDataReturn.data?.created;

        expect(ID).toBeGreaterThan(0);

        // we posted a new user, but we're waiting on getUser to update the state of bootstrap
        await waitFor(async () => {

            expect(bootstrap.state.authenticating).toEqual(false);

            expect(bootstrap.state.backendThrowable).toEqual([]);

            expect(bootstrap.state.posts).not.toBeUndefined();

            expect(bootstrap.state.invitations).not.toBeUndefined();

            expect(bootstrap.state.registrations).not.toBeUndefined();

            expect(bootstrap.state.users).not.toBeUndefined();

            const user = bootstrap.state.users?.find(user => user.ID === ID)

            console.log('user', user, userName)

            expect(user).not.toBeUndefined();

            expect(user?.ID).toBeGreaterThan(0);

            expect(user?.ID).toEqual(bootstrap.state.id);

            expect(user?.following).not.toEqual(undefined);

            expect(user?.userMeta).not.toEqual(undefined);

            expect(user?.umMeta).not.toEqual(undefined);

        }, {timeout: 40000, interval: 1000});

    });

    expect(bootstrap.state.id).toBeGreaterThan(0)

    expect(bootstrap.state.users?.length).toBeGreaterThan(0)

    const user = bootstrap.state.users?.find(user => user.ID === bootstrap.state.id)

    if (undefined === user) {

        throw new Error('Could not parse ID')

    }

    const ID = bootstrap.state.id;

    const login = async () => {

        await act(async () => {

            expect(DigApi.digApi.state.id).toEqual(0);

            await postAuthenticate({
                user: {
                    user_login: userEmail,
                    user_pass: userPassword,
                }
            })

            expect(bootstrap.state.backendThrowable).toEqual([]);

            await waitFor(async () => {

                expect(bootstrap.state.backendThrowable).toEqual([]);

                expect(DigApi.digApi.state.id).toEqual(user?.ID);

            }, {timeout: 3000});

        });
    };

    return {
        user_login: userName,
        user_pass: userPassword,
        id: ID,
        login: login,
        deleteUser: async () => {

            if (DigApi.digApi.state.id !== ID) {

                    await login();

            }

            expect(DigApi.digApi.state.id).toEqual(ID);

            await act(async () => {

                await deleteUserAPI({ID: ID})

                await waitFor(async () => {

                    // this is that error
                    expect(bootstrap.state.backendThrowable).toEqual([]);

                    expect(bootstrap.state.users).toEqual([]);

                    expect(bootstrap.state.id).toEqual(0);

                }, {timeout: 30000});

            });

        }
    };

}
