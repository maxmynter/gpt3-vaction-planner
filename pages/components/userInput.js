import { useState } from "react";

const UserInput = ({setGptResponse}) => {
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async () => {
    setIsGenerating(true);
    console.log(input);

    const response = await fetch("../api/getGPTAnswer",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        input
      })
    })

    const responseData = await response.json()
    const {output} = responseData

    console.log(output.text);
    setGptResponse(output.text)


    setInput("");
    setIsGenerating(false)
  };

  return (
    <div className="user-input">
      <input
        className="input-field"
        onChange={handleInput}
        value={input}
        placeholder="5 days on a budget from Munich, I like to surf and hike"
      />
      <div className="inspire-button-container">
        <button
          className={
            isGenerating ? "generate-button loading" : "generate-button"
          }
          onClick={handleSubmit}
        >
          <div className="generate">
            {isGenerating ? <h3>Loading</h3> : <h3>Inspire Me</h3>}
          </div>
        </button>
      </div>
    </div>
  );
};

export default UserInput;
