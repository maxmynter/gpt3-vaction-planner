const DisplayResponse = ({ response, highlightResponse, highlighted }) => {
  const handleHighlight = (response) => {
    highlightResponse(response);
  };
  return (
    <>
      {response ? (
        <div
          className={highlighted ? "gpt-response-highlighted" : "gpt-response"}
          onClick={() => handleHighlight(response)}
        >
          {response}
        </div>
      ) : null}
    </>
  );
};
export default DisplayResponse;
