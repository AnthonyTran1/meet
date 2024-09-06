import { render, within, screen } from "@testing-library/react";
import NumberOfEvents from "../components/NumbersOfEvents";
import userEvent from "@testing-library/user-event";
import { extractLocations, getEvents } from "../api";
import App from "../App";

describe("<NumbersOfEvent /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
  });

  test("renders number selector", () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole("spinbutton");
    expect(numberTextBox).toBeInTheDocument();
  });

  test("Default value is 32", () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole("spinbutton");
    expect(numberTextBox.value).toBe("32");
  });

  test("render user input value (10)", async () => {
    const user = userEvent.setup();
    const numberTextBox = NumberOfEventsComponent.queryByRole("spinbutton");
    await user.type(numberTextBox, "{backspace}{backspace}10");
    expect(numberTextBox.value).toBe("10");
  });
});
