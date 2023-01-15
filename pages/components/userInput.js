import { useEffect, useState } from "react";

const getRandomPlaceholder = async () => {
  const response = await fetch("../api/getSearchBarPlaceholder");
  const { placeholder } = await response.json();
  return placeholder;
};

const emptyInputNote = "You need to type :D Try something like: ";

const UserInput = ({ addQueryResponse }) => {
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    const getPlaceholderFromServer = async () => {
      setPlaceholder(await getRandomPlaceholder());
    };
    getPlaceholderFromServer();
  }, []);

  const handleInput = (event) => {
    setInput(event.target.value);
    if (placeholder.search(emptyInputNote) !== -1) {
      setPlaceholder(placeholder.slice(emptyInputNote.length + 1, -2));
    }
  };

  const handleSubmit = async () => {
    if (input.length > 0) {
      setIsGenerating(true);
      console.log(input);

      const response = await fetch("../api/getGPTAnswer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input,
        }),
      });

      const responseData = await response.json();

      const responseOfPostToDB = await fetch("../api/postTrip", {
        method: "POST",
        body: JSON.stringify(responseData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const newTripWithID = await responseOfPostToDB.json();

      console.log("responseOfPostToDB", newTripWithID);

      addQueryResponse(newTripWithID);
      setInput("");
      setIsGenerating(false);
    } else {
      const newPlaceholder = await getRandomPlaceholder();
      setPlaceholder(`${emptyInputNote}"${newPlaceholder}."`);
    }
  };

  return (
    <div className="user-interaction">
      <div className="user-input-border-wrapper">
        <div className="user-input">
          <input
            className="user-input-field"
            onChange={handleInput}
            onKeyDown={(event) => {
              if (event.code === "Enter" && !isGenerating) {
                handleSubmit();
              }
            }}
            value={input}
            placeholder={placeholder}
          />
          <button
            className={
              isGenerating
                ? "generate-button-text loading"
                : input.length > 0
                ? "generate-button-text"
                : "generate-button-empty-text"
            }
            onClick={handleSubmit}
          >
            {isGenerating ? <span> Loading </span> : <span> Inspire </span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
