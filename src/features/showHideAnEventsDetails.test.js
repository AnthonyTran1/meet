import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    given("the user hasn’t clicked on an event", () => {});

    let AppComponent;
    when("displaying the list events", () => {
      AppComponent = render(<App />);
    });

    then("the details of the events is collapsed by default", async () => {
      const allEvents = await getEvents();
      const EventComponent = render(<Event event={allEvents[0]} />);
      expect(
        EventComponent.container.querySelector(".details")
      ).not.toBeInTheDocument();
    });
  });

  test("User can expand an event to see details.", ({ given, when, then }) => {
    let AppComponent;
    given("the list of events has been displayed", () => {
      AppComponent = render(<App />);
    });

    let EventComponent;
    when("user clicks on an event", async () => {
      const user = userEvent.setup();
      const allEvents = await getEvents();
      const AppDOM = AppComponent.container.firstChild;
      EventComponent = render(<Event event={allEvents[0]} />);
      await user.click(EventComponent.queryByText("show details"));
    });

    then("the event element is expanded, showing more details", () => {
      expect(
        EventComponent.container.querySelector(".details")
      ).toBeInTheDocument();
      expect(EventComponent.queryByText("hide details")).toBeInTheDocument();
    });
  });

  test("User can collapse an event to hide details.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let EventComponent;
    let user;
    given("the user has expanded the event element", async () => {
      AppComponent = render(<App />);

      user = userEvent.setup();
      const allEvents = await getEvents();
      const AppDOM = AppComponent.container.firstChild;
      EventComponent = render(<Event event={allEvents[0]} />);
      await user.click(EventComponent.queryByText("show details"));
      expect(
        EventComponent.container.querySelector(".details")
      ).toBeInTheDocument();
      expect(EventComponent.queryByText("hide details")).toBeInTheDocument();
    });

    when("the user clicks to collapse the event element", async () => {
      await user.click(EventComponent.queryByText("hide details"));
    });

    then("the event element will return to its default position", () => {
      expect(
        EventComponent.container.querySelector(".details")
      ).not.toBeInTheDocument();
      expect(
        EventComponent.queryByText("hide details")
      ).not.toBeInTheDocument();
    });
  });
});
