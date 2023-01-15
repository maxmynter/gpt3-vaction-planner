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
        {console.log(responses, responses.length)}
        {responses.length > 0 &&
          responses.map((response) => (
            <DisplayResponse
              response={response}
              key={response._id}
              highlightResponse={setHighlightedResponse}
              highlighted={highlightedResponse === response}
            />
          ))}
      </div>
    </>
  );
};

export default ResponsesContainer;
