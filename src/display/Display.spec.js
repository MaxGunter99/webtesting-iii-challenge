// Test away!

//IMPORTS ⬇︎
import React from 'react';
import { render , cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import Display from './Display';
import 'jest-dom/extend-expect';

//PREVENT MEMORY LEAKS ⬇︎
afterEach ( cleanup );

//DISPLAY TESTING ⬇︎
describe ( '<Display/>' , () => {

    //RENDERING DISPLAY ⬇︎
    it ( 'Should render Display without crashing' , () => {
        render ( <Display/> );
    });

    //MATCH SNAPSHOT ⬇︎
    it ( 'Should match the Display snapshot' , () => {
        const snapshot = renderer .create(  <Display/> );
        expect( snapshot.toJSON ()) .toMatchSnapshot ();
    });

    //DISPLAY OPEN IF GATE IS OPEN ⬇︎
    it ( 'Should return "Open" if gate is open' , () => {
        const closed = false;
        const locked = false;
        const { getByText } = render( <Display closed = { closed } locked = { locked } /> );
        const open = getByText ( /open/i );
        expect ( open ) .toBeTruthy ();
    });

    //DISPLAY UNLOCKED IF GATE IS OPEN ⬇︎
    it ( 'Should return "Unlocked" if gate is open' , () => {
        const closed = false;
        const locked = false;
        const { getByText } = render( <Display closed = { closed } locked = { locked } /> );
        const unlocked = getByText ( /unlocked/i );
        expect ( unlocked ) .toBeTruthy ();
    });

    //DISPLAY CLOSED IF GATE IS CLOSED ⬇︎
    it ( 'Should return "Closed" if gate is closed' , () => {
        const closed = true;
        const locked = false;
        const { getByText } = render( <Display closed = { closed } locked = { locked } /> );
        const Gateclosed = getByText ( /closed/i );
        expect ( Gateclosed ) .toBeTruthy ();
    });

    //DISPLAY UNLOCKED IF GATE IS CLOSED & UNLOCKED ⬇︎
    it ( 'Should return "Unlocked" if gate is closed & unlocked' , () => {
        const closed = true;
        const locked = false;
        const { getByText } = render( <Display closed = { closed } locked = { locked } /> );
        const gateNotLocked = getByText ( /unlocked/i );
        expect ( gateNotLocked ) .toBeTruthy ();
    });

    //DISPLAY CLOSED IF GATE IS LOCKED ⬇︎
    it ( 'Should return "Closed" if gate is locked' , () => {
        const closed = true;
        const locked = true;
        const { getByText } = render( <Display closed = { closed } locked = { locked } /> );
        const lockedAndClosed = getByText ( /closed/i );
        expect ( lockedAndClosed ) .toBeTruthy ();
    });

    //DISPLAY LOCKED IF GATE IS LOCKED ⬇︎
    it ( 'Should return "Locked" if gate is closed & locked' , () => {
        const closed = true;
        const locked = true;
        const { getByText } = render( <Display closed = { closed } locked = { locked } /> );
        const lockedIsLocked = getByText ( /locked/i );
        expect ( lockedIsLocked ) .toBeTruthy ();
    });

});