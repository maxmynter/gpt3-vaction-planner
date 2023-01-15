import { useState, useEffect } from "react";
import Title from "./components/title";
import UserInput from "./components/userInput";
import ResponsesContainer from "./components/responsesContainer";

const App = () => {
  const [gptResponses, setGptResponses] = useState([]);
  const [highlightedResponse, setHighlightedResponse] = useState(null);

  useEffect(() => {
    const getTripsFromDB = async () => {
      const response = await fetch("../api/getTrips", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      let trips = await response.json();

      console.log(trips);
      setGptResponses(trips);
    };

    getTripsFromDB();
  }, []);

  const addQueryResponse = (newResponse) => {
    setHighlightedResponse(newResponse);
    setGptResponses([newResponse, ...gptResponses]);
  };

  return (
    <div className="app">
      <Title />
      <UserInput addQueryResponse={addQueryResponse} />
      <ResponsesContainer
        highlightedResponse={highlightedResponse}
        setHighlightedResponse={setHighlightedResponse}
        responses={gptResponses}
      />
    </div>
  );
};

export default App;
