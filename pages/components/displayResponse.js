const DisplayResponse = ({ response, highlightResponse }) => {
  const handleHighlight = (response) => {
    highlightResponse(response);
  };
  return (
    <>
      {response ? (
        <div className="gpt-response" onClick={() => handleHighlight(response)}>
          {response}
        </div>
      ) : null}
    </>
  );
};
export default DisplayResponse;
