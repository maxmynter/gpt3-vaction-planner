import DisplayResponse from "./displayResponse";
import HighlightedResponse from "./highlightedResponse";

const ResponsesContainer = ({
  responses,
  highlightedResponse,
  setHighlightedResponse,
}) => {
  return (
    <div>
      <HighlightedResponse response={highlightedResponse} />
      <div className="responses-container">
        {responses !== undefined &&
          responses.length > 0 &&
          responses.map((response) => (
            <DisplayResponse
              response={response}
              key={response._id}
              highlightResponse={setHighlightedResponse}
              highlighted={highlightedResponse === response}
            />
          ))}
      </div>
    </div>
  );
};

export default ResponsesContainer;
