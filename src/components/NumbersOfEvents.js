import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [numberOfEvents, setnumberOfEvents] = useState("32");
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setnumberOfEvents(value);
    // setCurrentNOE(value);

    let infoText;
    if (value < 0) {
      infoText = "Only positive numbers are allowed";
    } else {
      infoText = "";
      // setnumberOfEvents(value);
      setCurrentNOE(value);
    }
    setErrorAlert(infoText);
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
