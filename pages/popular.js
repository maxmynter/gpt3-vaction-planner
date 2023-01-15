import { useEffect, useState } from "react";
import ResponsesContainer from "./components/responsesContainer";
import Header from "./components/header";
import SectionHeader from "./components/sectionHeader";

const PopularTrips = () => {
  const [trips, setTrips] = useState([]);
  const [highlightedResponse, setHighlightedResponse] = useState(null);

  useEffect(() => {
    const getTripsFromDB = async () => {
      const response = await fetch("../api/getTrips", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      let tripsFromDB = await response.json();

      setTrips(tripsFromDB);
    };

    getTripsFromDB();
  }, []);
  return (
    <div className="app">
      <Header />
      <SectionHeader text={"Trips from Others"} />
      <ResponsesContainer
        highlightedResponse={highlightedResponse}
        setHighlightedResponse={setHighlightedResponse}
        responses={trips}
      />
    </div>
  );
};
export default PopularTrips;
