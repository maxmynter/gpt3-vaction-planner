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
          <h3>{response.title}</h3>
        </div>
      ) : null}
    </>
  );
};
export default DisplayResponse;
