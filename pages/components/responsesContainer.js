import DisplayResponse from "./displayResponse";
const ResponsesContainer = ({ responses }) => {
  return (
    <div className="responses-container">
      {responses.length > 0 &&
        responses.map((response) => (
          <DisplayResponse key={response} response={response} />
        ))}
    </div>
  );
};

export default ResponsesContainer;
