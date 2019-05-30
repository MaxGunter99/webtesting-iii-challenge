
TESTS BY COMPONENT ⬇︎

Controls Component {
    Rendering -
    ● Rendering Controls Component
    ● Match Snapshot

    Button Displays -
        ● Display "Close Gate" if open
        ● Display cant lock gate if open
        ● Display "Open Gate" if closed
        ● Display "Lock Gate" if closed
        ● Display cant open gate if locked

    Jest Simulated Button Actions -
        ● Locate buttons
        ● Close gate button
        ● Cant lock gate if open
        ● Open gate button
        ● Lock gate button
        ● Cant open gate if locked
}

Dashboard Component {
    Rendering -
        ● Rendering Dashboard Component
        ● Match Snapshot
}

Display Component {
    Rendering -
        ● Rendering Display Component
        ● Match Snapshot
    Gate Status Display -
        ● Display "Open" if gate is open
        ● Display "Unlocked" if gate is open
        ● Display "Closed" if gate is closed
        ● Display "Unlocked" if gate is closed & unlocked
        ● Display "Closed" if gate is locked
        ● Display "Locked" if gate is closed & locked
}