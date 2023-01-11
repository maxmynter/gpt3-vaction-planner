import { useState } from "react";
import Title from "./components/title";
import UserInput from "./components/userInput";
import DisplayResponse from "./components/displayResponse";

const App = () => {
  const [gptResponse, setGptResponse] = useState(null);
  return (
    <div className="app">
      <Title />
      <UserInput setGptResponse={setGptResponse} />
      <DisplayResponse response={gptResponse} />
    </div>
  );
};

export default App;
