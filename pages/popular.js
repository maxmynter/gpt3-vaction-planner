import { useEffect, useState } from "react";
import ResponsesContainer from "./components/responsesContainer";
import Header from "./components/siteComponents/header";
import SectionHeader from "./components/sectionHeader";
import Footer from "./components/siteComponents/footer";

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
      {trips.length > 0 && (
        <div className="white-box">
          <SectionHeader text={"Trips from Others"} />
          <ResponsesContainer
            highlightedResponse={highlightedResponse}
            setHighlightedResponse={setHighlightedResponse}
            responses={trips}
          />
        </div>
      )}
      <Footer />
    </div>
  );
};
export default PopularTrips;
