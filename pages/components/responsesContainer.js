import { useState } from "react";
import DisplayResponse from "./displayResponse";
import HighlightedResponse from "./highlightedResponse";

const ResponsesContainer = ({ responses }) => {
  const [highlightedResponse, setHighlightedResponse] = useState(null);
  return (
    <div>
      <HighlightedResponse response={highlightedResponse} />
      <div className="responses-container">
        {responses.length > 0 &&
          responses.map((response) => (
            <DisplayResponse
              key={response}
              response={response}
              highlightResponse={setHighlightedResponse}
            />
          ))}
      </div>
    </div>
  );
};

export default ResponsesContainer;
