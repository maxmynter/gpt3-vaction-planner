import { useState } from "react";
import UserInput from "./userInput";
import HighlightedResponse from "./highlightedResponse";
import Title from "./title";
import SectionHeader from "./sectionHeader";

const InspireSearch = () => {
  const [currentResponses, setGptResponses] = useState([]);
  const [highlightedResponse, setHighlightedResponse] = useState(null);

  const addQueryResponse = (newResponse) => {
    setHighlightedResponse(newResponse);
    setGptResponses([newResponse, ...currentResponses]);
  };
  return (
    <div className="content-container">
      <div className="white-box">
        <Title />
        <UserInput addQueryResponse={addQueryResponse} />
      </div>
      {currentResponses.length > 0 && (
        <div className="white-box">
          <SectionHeader text={"Your Trips"} />
          {currentResponses.map((response) => (
            <HighlightedResponse response={response} />
          ))}
        </div>
      )}
    </div>
  );
};

export default InspireSearch;
