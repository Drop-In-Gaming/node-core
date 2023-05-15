import {describe, expect, test} from '@jest/globals';
import getGameList from "api/rest/getGameList";
import {act} from '@testing-library/react';
import DigApi from "DigApi";


describe('Get Games List', () => {

    test('Asset Game List Not Empty', async () => {

        let bootstrap: DigApi = DigApi.digApi;

        // @link https://reactjs.org/link/wrap-tests-with-act
        await act(async () => {

            /* fire events that update state */
            await getGameList();

            expect(bootstrap.state.backendThrowable).toEqual([]);

            expect(bootstrap.state.games).not.toBeNull();

            expect(bootstrap.state.games).not.toBeUndefined();

        });

        expect(bootstrap.state.games?.length).toBeGreaterThan(12)

    }, 31000);

});

