import DisplayResponse from "./displayResponse";
import HighlightedResponse from "./highlightedResponse";

const ResponsesContainer = ({
  responses,
  highlightedResponse,
  setHighlightedResponse,
}) => {
  return (
    <>
      <HighlightedResponse response={highlightedResponse} />
      <div className="responses-container">
        {responses.length > 0 &&
          responses.map((response) => (
            <DisplayResponse
              key={response._id} // TODO on Click scroll to Highlighted response, New return should be on upper left, fit content to highlighted, remove '"' from title
              response={response}
              highlightResponse={setHighlightedResponse}
              highlighted={highlightedResponse === response}
            />
          ))}
      </div>
    </>
  );
};

export default ResponsesContainer;
