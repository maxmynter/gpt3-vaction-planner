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
    <div className="search-container">
      <Title />
      <UserInput addQueryResponse={addQueryResponse} />
      {currentResponses.length > 0 && <SectionHeader text={"Your Trips"} />}
      {currentResponses.map((response) => (
        <HighlightedResponse response={response} />
      ))}
    </div>
  );
};

export default InspireSearch;
