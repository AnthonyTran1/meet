import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

const feature = loadFeature("./src/features/specifyNOE.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 events are shown by default.", ({
    given,
    when,
    then,
  }) => {
    given("the user has not specified a number", () => {});

    let AppComponent;
    when("the list of event is shown", () => {
      AppComponent = render(<App />);
    });

    then("the number of events shown is 32", () => {
      const AppDOM = AppComponent.container.firstChild;
      const numberTextBox = AppComponent.queryByRole("spinbutton");
      expect(numberTextBox.value).toBe("32");
    });
  });

  test("User can change the number of events displayed.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the app is open", () => {
      AppComponent = render(<App />);
    });

    let numberTextBox;
    let AppDOM;
    when("when the user has specified a number", async () => {
      const user = userEvent.setup();
      AppDOM = AppComponent.container.firstChild;
      numberTextBox = AppComponent.queryByRole("spinbutton");
      await user.type(numberTextBox, "{backspace}{backspace}10");
    });

    then("the number of events shown is the entered number", async () => {
      expect(numberTextBox.value).toBe("10");
      const EventListDOM = AppDOM.querySelector("#event-list");
      const EventListItems = within(EventListDOM).queryAllByRole("listitem");
      expect(EventListItems).toHaveLength(10);
    });
  });
});
