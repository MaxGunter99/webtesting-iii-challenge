// Test away

//IMPORTS ⬇︎
import React from 'react';
import { render , cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';

//PREVENT MEMORY LEAKS ⬇︎
afterEach ( cleanup );

//DASHBOARD TESTING ⬇︎
describe ( '<Dashboard/>' , () => {

    //RENDERING DASHBOARD ⬇︎
    it ( 'Should render Dashboard without crashing' , () => {
        render ( <Dashboard/> );
    });

    //MATCH SNAPSHOT ⬇︎
    it ( 'Should match the Dashboard snapshot' , () => {
        const snapshot = renderer .create ( <Dashboard/> );
        expect ( snapshot.toJSON ()) .toMatchSnapshot ();
    });
});