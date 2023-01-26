const HighlightedResponse = ({ response }) => {
  const bgImage = response ? `, url(${response.backgroundImageURL})` : "";
  const inlineStyles = {
    backgroundImage: `radial-gradient(
    rgba(1, 1, 1, 0.25),
    rgba(148, 148, 148, 0.75)
  )${bgImage}`,
  };
  return (
    <div id="highlighted-responses-container">
      {response && (
        <div className="highlighted-response" style={inlineStyles}>
          <h3 className="highlighted-response-title">{response.title}</h3>
          <span className="highlighted-response-text">{response.text}</span>
        </div>
      )}
    </div>
  );
};

export default HighlightedResponse;
