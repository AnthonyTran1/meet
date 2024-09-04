Feature: Specify Number of Events
    Scenario: When user hasn’t specified a number, 32 events are shown by default.
        Given the user has not specified a number
        When the list of event is shown
        Then the number of events shown is 32

    Scenario: User can change the number of events displayed.
        Given the app is open
        When when the user has specified a number
        Then the number of events shown is the entered number
