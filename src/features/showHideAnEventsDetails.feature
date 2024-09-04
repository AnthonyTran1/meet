Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default.
        Given the user hasn’t clicked on an event
        When displaying the list events
        Then the details of the events is collapsed by default

    Scenario: User can expand an event to see details.
        Given the list of events has been displayed
        When user clicks on an event
        Then the event element is expanded, showing more details

    Scenario: User can collapse an event to hide details.
        Given the user has expanded the event element
        When the user clicks to collapse the event element
        Then the event element will return to its default position