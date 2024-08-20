# Meet App

This Meet app will allow users to view upcoming events for a
specific city using a servless function hosted by a cloud provider (AWS).<br/>
This application uses the Google Calendar API to fetch upcoming events.

## Key Features:

- Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App When Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.

## User Stories:

- As a user, <br/>
  I should be able to filter events by city, <br/>
  so that I can see what kind of events are happening in that specific city

- As a developer, <br/>
  I should be able to show and hide event details through the app, <br/>
  so that the user can see the specifics of the events they are viewing.

- As a developer, <br/>
  I should be able to specify number of events through the app, <br/>
  so that the user can see how many events are available.

- As a user, <br/>
  I should be able to use the app when offline, <br/>
  so that I can still use the app with no connected network.

- As a user, <br/>
  I should be able to add an app shortcut to the home screen, <br/>
  so that I can easily access the application through the home screen.

- As a developer, <br/>
  I should be able to display charts visualizing event details through the app, <br/>
  so that the user has a better user friendly experience with the event details.

## Gherkin's Scenarios:

- Scenario: User can filter events by city <br/>
  GIVEN a list of events that have been loaded, <br/>
  WHEN the user filters by cities,<br/>
  THEN the app only shows events within the user's filter

- Scenario: User can expand an event to see its details <br/>
  GIVEN the list of events has been loaded,<br/>
  WHEN user clicks on “Show details” button for an event,<br/>
  THEN the event element will be expanded to show the event details

- Scenario: The app will specify how many events there are <br/>
  GIVEN the list of events has been loaded,<br/>
  WHEN user views the the list of events,<br/>
  THEN the app will specify how many events are happening in total

- Scenario: User can use the application offline <br/>
  GIVEN that the user has network connection,<br/>
  WHEN user opens up the application,<br/>
  THEN the application should be usable with all functionality

- Scenario: User can add an App Shortcut to the Home Screen <br/>
  GIVEN the user is using the app,<br/>
  WHEN the user clicks on "add shortcut",<br/>
  THEN a shortcut will be added to the homescreen

- Scenario: User see display charts visualizing the event details <br/>
  GIVEN the list of events has been loaded ,<br/>
  WHEN the user expands the event details,<br/>
  THEN the event element will also include charts that relate to the event
