// Test away!

//IMPORTS ⬇︎
import React from 'react';
import { render , fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import Controls from './Controls';
import 'jest-dom/extend-expect';

//PREVENT MEMORY LEAKS ⬇︎
afterEach ( cleanup );

//CONTROL TESTING ⬇︎
describe ( '<Controls/>' , () => {

    //RENDERING CONTROLS COMPONENT ⬇︎
    it ( 'Should render Controls without crashing' , () => {
        render( <Controls/> )
    });

    //MATCH SNAPSHOT ⬇︎
    it ( 'Should match the Controls snapshot' , () => {
        const snapshot = renderer .create ( <Controls/> );
        expect( snapshot .toJSON ()) .toMatchSnapshot ();
    });

    //DISPLAY CLOSE GATE IF OPEN ⬇︎
    it ( 'Should show "Close Gate" if gate is open' , () => {
        const open = true;
        const closed = false;
        const { getByText } = render( <Controls open = { open } closed = { closed } /> );
        const closeGate = getByText ( /close gate/i );
        expect ( closeGate ) .toBeTruthy ();
    });

    //DISPLAY CANT LOCK GATE IF OPEN ⬇︎
    it ( 'Should not show "Lock Gate" if gate is open' , () => {
        const open = true;
        const disabled = true;
        const { getByText } = render ( <Controls open = { open } disabled = { disabled } /> );
        const cantLock = getByText ( /lock gate/i );
        expect ( cantLock ) .toBeTruthy ();
    });

    //DISPLAY OPEN GATE IF CLOSED ⬇︎
    it ( 'Should show "Open Gate" if gate is closed & !locked' , () => {
        const closed = true;
        const open = false;
        const { getByText } = render ( <Controls closed = { closed } open = { open } /> );
        const openGate = getByText ( /open gate/i );
        expect ( openGate ) .toBeTruthy ();
    });

    //DISPLAY LOCK GATE IF CLOSED ⬇︎
    it ( 'Should show "Lock Gate" if gate is closed & !locked' , () => {
        const closed = true;
        const locked = false;
        const { getByText } = render ( <Controls locked = { locked } closed = { closed } /> );
        const lockItUp = getByText ( /lock gate/i );
        expect ( lockItUp ) .toBeTruthy ();
    });

    //DISPLAY CANT OPEN GATE IF LOCKED ⬇︎
    it ( 'Should not show "Open Gate" if gate is closed & locked' , () => {
        const closed = true;
        const locked = true;
        const { getByText } = render ( <Controls locked = { locked } closed = { closed } /> );
        const cantOpen = getByText ( /open gate/i );
        expect ( cantOpen ) .toBeTruthy ();
    });

    //ACTIONS ⬇︎

    //LOCATE BUTTONS ⬇︎
    test ( 'Locate buttons' , () => {
        const { queryByText } = render ( <Controls/> );
        const closeButton = queryByText ( 'Close Gate' );
        expect ( closeButton ) .toBeDefined ();
    });

    //CLOSE GATE BUTTON ⬇︎
    it ( 'Activates "Close Gate" button' , () => {
        const mock = jest.fn();
        const { getByText } = render ( <Controls open = { true } closed = { false } toggleClosed = { mock } /> );
        const activateCloseButton = getByText ( /close gate/i );
        fireEvent .click ( activateCloseButton )
        expect ( mock ) .toHaveBeenCalled ();
    });

    //CANT LOCK GATE IF OPEN ⬇︎
    it ( 'Cant activate "Lock Gate" button if gate is open' , () => {
        const mock = jest.fn();
        const { getByText } = render ( <Controls open = { true } closed = { false } togglelocked = { mock } /> );
        const activateLockButton = getByText ( /lock gate/i );
        fireEvent .click ( activateLockButton )
        expect ( mock ) .toHaveBeenCalledTimes (0);
    });

    //OPEN GATE BUTTON ⬇︎
    it ( 'Activates "Open Gate" button' , () => {
        const mock = jest.fn();
        const { getByText } = render ( <Controls closed = { true } open = { false } toggleClosed = { mock } /> );
        const activateOpenButton = getByText ( /open gate/i );
        fireEvent .click ( activateOpenButton )
        expect ( mock ) .toHaveBeenCalled ();
    });

    //LOCK GATE BUTTON ⬇︎
    it ( 'Activates "Lock Gate" button' , () => {
        const mock = jest.fn();
        const { getByText } = render ( <Controls closed = { true } open = { false } toggleLocked = { mock } /> );
        const activateLockGate = getByText ( /lock gate/i );
        fireEvent .click ( activateLockGate )
        expect ( mock ) .toHaveBeenCalled ();
    });

    //CANT OPEN GATE IF LOCKED ⬇︎
    it ( 'Cant activate "Open Gate" button if gate is locked' , () => {
        const mock = jest.fn();
        const { getByText } = render ( <Controls open = { false } closed = { true } locked = { true } toggleclosed = { mock } /> );
        const activateOpenGateButton = getByText ( /open gate/i );
        fireEvent .click ( activateOpenGateButton )
        expect ( mock ) .toHaveBeenCalledTimes (0);
    });

});