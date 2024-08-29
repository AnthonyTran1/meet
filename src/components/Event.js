// src/components/Event.js
import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleItemClicked = (event) => {
    setShowDetails(!showDetails);
  };

  return (
    <li>
      <div onClick={handleItemClicked}>{"show details"}</div>

      {showDetails ? (
        <ul className="eventDetails">
          <div>{event.summary}</div>
          <div>{event.created}</div>
          <div>{event.location}</div>
        </ul>
      ) : null}
    </li>
  );
};

export default Event;
