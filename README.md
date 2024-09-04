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

- As a user, <br/>
  I should be able to specify number of events through the app, <br/>
  so that the I can see that many events are available at a time.

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

### Feature 1: Filter Events By City Scenario

- Scenario: When user hasn’t searched for a city, show upcoming events from all cities.<br/>
  GIVEN the user hasn't selected any filters, <br/>
  WHEN the user checks to see what events are avaliable,<br/>
  THEN the app show all avaiable events.

- Scenario: User should see a list of suggestions when they search for a city.<br/>
  GIVEN the user filtered events by city, <br/>
  WHEN the user views the list of events,<br/>
  THEN the app lists events only within that city

- Scenario: User can select a city from the suggested list.<br/>
  GIVEN the user hasnt' selected any filters, <br/>
  WHEN the user looks for cities to check events for,<br/>
  THEN the app will display suggested cities with events

### Feature 2: Show/Hide Event Details

- Scenario: An event element is collapsed by default.<br/>
  GIVEN the user hasn't clicked on an event, <br/>
  WHEN displaying the list events,<br/>
  THEN the details of the events is collapsed by default

- Scenario: User can expand an event to see details.<br/>
  GIVEN the list of events has been displayed, <br/>
  WHEN user clicks on an event,<br/>
  THEN the event element is expanded, showing more details

- Scenario: User can collapse an event to hide details.<br/>
  GIVEN the user has expanded the event element, <br/>
  WHEN the user clicks to collapse the event element,<br/>
  THEN the event element will return to its default position

### Feature 3: Specify Number of Events

- Scenario: When user hasn’t specified a number, 32 events are shown by default.<br/>
  GIVEN the user has not specified a number, <br/>
  WHEN the list of event is shown,<br/>
  THEN the number of events shown is 32 (default)

- Scenario: User can change the number of events displayed.<br/>
  GIVEN the app is open, <br/>
  WHEN when the user has specified a number,<br/>
  THEN the number of events shown is the entered number.

### Feature 4: Use the App When Offline

- Scenario: Show cached data when there’s no internet connection.<br/>
  GIVEN the user has no internet connection and the user has recently used the app, <br/>
  WHEN displaying the list of events,<br/>
  THEN the app will show cached events

- Scenario: Show error when user changes search settings (city, number of events).<br/>
  GIVEN the user is using the app offline, <br/>
  WHEN the user changes the search settings,<br/>
  THEN the app will display an error message

### Feature 5: Add an App Shortcut to the Home Screen

- Scenario: User can install the meet app as a shortcut on their device home screen.<br/>
  GIVEN the user has not installed the app onto their device, <br/>
  WHEN the user installs the app onto their device,<br/>
  THEN a shortcut to the meet up will display onto their home screen

### Feature 6: Display Charts Visualizing Event Details

- Scenario: Show a chart with the number of upcoming events in each city.<br/>
  GIVEN the user has selected a city, <br/>
  WHEN display the list of events,<br/>
  THEN a chart will display along with the number of upcoming events
