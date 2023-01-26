import { useState } from "react";
import isInViewport from "../../utils/checkElementVisibility";

const DisplayResponse = ({ response, highlightResponse, highlighted }) => {
  const [hover, setHover] = useState(false);
  let style = {};

  if (response) {
    style = hover
      ? {
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0), rgba(253, 252, 252, 0.5)),
    url(${response.backgroundImageURL})`,
        }
      : {
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 1, 0.25)),
    url(${response.backgroundImageURL})`,
        };
  }

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
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={highlighted ? "gpt-response-highlighted" : "gpt-response"}
          style={style}
          onClick={() => handleHighlight(response)}
        >
          <h3>{response.title}</h3>
        </div>
      ) : null}
    </>
  );
};
export default DisplayResponse;
