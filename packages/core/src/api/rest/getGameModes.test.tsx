import {describe, expect, test} from '@jest/globals';
import {act} from '@testing-library/react';
import DigApi from 'DigApi';
import getGameModes from "./getGameModes";

describe('Get Game mode list', () => {

    test('Assert Game Mode List Not Empty', async () => {

        let bootstrap: DigApi = DigApi.digApi;

        //let modes = [];
        await act(async () => {

            await getGameModes({
                game: {
                    game_id: 2
                },
                comp_type_id: 1
            });

            expect(bootstrap.state.backendThrowable).toEqual([]);

            expect(bootstrap.state.games?.find(game => game.game_id == 2)?.modes?.length ?? 0).toBeGreaterThan(0)

        })

    }, 31000);
});
