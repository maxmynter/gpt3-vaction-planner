import { useState } from "react";
import Title from "./components/title";
import UserInput from "./components/userInput";
import DisplayResponses from "./components/displayResponse";
import ResponsesContainer from "./components/responsesContainer";

const App = () => {
  const [gptResponses, setGptResponses] = useState([]);

  const addQueryResponse = (newResponse) => {
    setGptResponses([newResponse, ...gptResponses]);
  };

  return (
    <div className="app">
      <Title />
      <UserInput addQueryResponse={addQueryResponse} />
      <ResponsesContainer responses={gptResponses} />
    </div>
  );
};

export default App;
