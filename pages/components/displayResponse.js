import isInViewport from "../../utils/checkElementVisibility";

const DisplayResponse = ({ response, highlightResponse, highlighted }) => {
  const handleHighlight = (response) => {
    highlightResponse(response);
    const element = document.getElementById("highlighted-responses-container");
    if (element && !isInViewport(element)) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
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
