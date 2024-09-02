// src/App.js

import { useEffect, useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumbersOfEvents";
import { getEvents } from "./api";
import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);
  //NOE -> number of events
  const [currentNOE, setCurrentNOE] = useState(32);

  const fetchData = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, currentNOE));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <CitySearch />
      <EventList events={events} />
      <NumberOfEvents />
    </div>
  );
};

export default App;
