import { render, within, screen } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;
  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  // expect(screen.getByText(allEvents[0].summary)).toBeInTheDocument();

  test("renders event title", async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByText("show details");
    await user.click(showDetailsButton);
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test("renders event start time", async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByText("show details");
    await user.click(showDetailsButton);
    expect(
      EventComponent.queryByText(allEvents[0].created)
    ).toBeInTheDocument();
  });

  test("renders event location", async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByText("show details");
    await user.click(showDetailsButton);
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test("renders event details with the title (show details)", () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    const eventDetails = EventComponent.queryByRole("list");
    expect(eventDetails).not.toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the 'show details' button", async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByText("show details");
    await user.click(showDetailsButton);
    const eventDetails = EventComponent.queryByRole("list");
    expect(eventDetails).toBeInTheDocument();
  });

  test("hides the details section when the user clicks on the 'hide details' button", async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByText("show details");
    await user.click(showDetailsButton);
    await user.click(showDetailsButton);
    const eventDetails = EventComponent.queryByRole("list");
    expect(eventDetails).not.toBeInTheDocument();
  });
});
