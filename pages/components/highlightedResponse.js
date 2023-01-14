const HighlightedResponse = ({ response }) => {
  return (
    <>
      {response && (
        <div className="highlighted-response">
          <span className="highlighted-response-content">{response}</span>
        </div>
      )}
    </>
  );
};

export default HighlightedResponse;
