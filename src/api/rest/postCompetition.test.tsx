import {describe, expect, test} from '@jest/globals';
import {act, waitFor} from '@testing-library/react';
import DigApi from "DigApi";
import getGameList from "./getGameList";


describe('Post A Competition', () => {

    test('Can create', async () => {

        let bootstrap: DigApi = DigApi.bootstrap;

        // @link https://reactjs.org/link/wrap-tests-with-act
        await act(async () => {

            /* fire events that update state */
            await getGameList();

            await waitFor(async () => {

                expect(bootstrap.state.games).not.toBeUndefined();

            }, {timeout: 5000});

        });

        expect(bootstrap.state.games?.length).toBeGreaterThan(12)

    }, 31000);

});
