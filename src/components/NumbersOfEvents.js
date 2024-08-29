import { useState } from "react";

const NumberOfEvents = () => {
  const [numberOfEvents, setnumberOfEvents] = useState("32");
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setnumberOfEvents(value);
  };

  return (
    <div id="search-number">
      <input
        type="number"
        value={numberOfEvents}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
