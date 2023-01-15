import { useState } from "react";
import UserInput from "./userInput";
import ResponsesContainer from "./responsesContainer";
import Title from "./title";
import SectionHeader from "./sectionHeader";

const InspireSearch = () => {
  const [gptResponses, setGptResponses] = useState([]);
  const [highlightedResponse, setHighlightedResponse] = useState(null);

  const addQueryResponse = (newResponse) => {
    setHighlightedResponse(newResponse);
    setGptResponses([newResponse, ...gptResponses]);
  };
  return (
    <>
      <Title />
      <UserInput addQueryResponse={addQueryResponse} />
      {gptResponses.length > 0 && <SectionHeader text={"Your Trips"} />}
      <ResponsesContainer
        highlightedResponse={highlightedResponse}
        setHighlightedResponse={setHighlightedResponse}
        responses={gptResponses}
      />
    </>
  );
};

export default InspireSearch;
