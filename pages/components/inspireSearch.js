import { useEffect, useState } from "react";
import { addResponse } from "../reducers/responseReducer";
import { addResponseToTrips } from "../reducers/tripsInDBReducer";
import { initializeTrips } from "../reducers/tripsInDBReducer";
import getRandomImageURL from "../../utils/getRandomImages";
import { useSelector, useDispatch } from "react-redux";
import UserInput from "./userInput";
import HighlightedResponse from "./highlightedResponse";
import Title from "./title";
import SectionHeader from "./sectionHeader";

const InspireSearch = () => {
  const dispatch = useDispatch();
  const currentResponses = useSelector((state) => state.responses);
  const tripsInDB = useSelector((state) => state.trips);
  const [highlightedResponse, setHighlightedResponse] = useState(null);

  useEffect(() => {
    // Load trips for popular page already when hitting main page.
    if (tripsInDB.length === 0) {
      dispatch(initializeTrips());
    }
  }, []);

  const addQueryResponse = (newResponse) => {
    const response = {
      backgroundImageURL: getRandomImageURL(),
      ...newResponse,
    };
    setHighlightedResponse(response);
    dispatch(addResponse(response));
    dispatch(addResponseToTrips(response));
  };

  return (
    <>
      <div className="white-box">
        <Title />
        <UserInput addQueryResponse={addQueryResponse} />
      </div>
      {currentResponses.length > 0 && (
        <div className="white-box">
          <SectionHeader text={"Your Trips"} />
          {currentResponses.map((response) => (
            <HighlightedResponse response={response} />
          ))}
        </div>
      )}
    </>
  );
};

export default InspireSearch;
