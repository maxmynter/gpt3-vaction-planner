const HighlightedResponse = ({ response }) => {
  return (
    <>
      {response && (
        <div className="highlighted-response">
          <h3 className="highlighted-response-title">{response.title}</h3>
          <span className="highlighted-response-text">{response.text}</span>
        </div>
      )}
    </>
  );
};

export default HighlightedResponse;
