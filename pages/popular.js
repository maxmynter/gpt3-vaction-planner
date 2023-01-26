import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ResponsesContainer from "./components/responsesContainer";
import Header from "./components/siteComponents/header";
import SectionHeader from "./components/sectionHeader";
import Footer from "./components/siteComponents/footer";
import { initializeTrips } from "./reducers/tripsInDBReducer";

const PopularTrips = () => {
  const dispatch = useDispatch();
  const trips = useSelector((state) => state.trips);
  const newResponses = useSelector((state) => state.responses);
  const [highlightedResponse, setHighlightedResponse] = useState(null);

  useEffect(() => {
    if (trips.length <= 0 || trips === newResponses) {
      dispatch(initializeTrips());
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <div className="content-container">
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
      </div>
      <Footer />
    </div>
  );
};
export default PopularTrips;
