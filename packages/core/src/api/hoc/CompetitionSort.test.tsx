import {describe, expect, it} from '@jest/globals';
import CompetitionSort from "./CompetitionSort";
import {iCompetitions} from "variables/sharedInterfaces";

// create test for sortCompetitionsNameAlphabetically
describe('sortCompetitionsNameAlphabetically', () => {
    it('sorts competitions by name alphabetically', () => {
        const competitions : iCompetitions[] = [
            { comp_id: 1, competition_title: 'Alice' },
            { comp_id: 2, competition_title: 'Bob' },
            { comp_id: 3, competition_title: 'nick' },
        ];

        // call the function with the REPLACE method
        const sortedCompetitions = competitions.sort(CompetitionSort.sortCompetitionsNameAlphabetical);

        // expect setStateMock to have been called with the expected state
        expect(sortedCompetitions[0].comp_id).toEqual(1);
    });
});