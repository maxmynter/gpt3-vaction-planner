import { useState } from "react";
import { addResponse } from "../reducers/responseReducer";
import { addResponseToTrips } from "../reducers/tripsInDBReducer";
import { useSelector, useDispatch } from "react-redux";
import UserInput from "./userInput";
import HighlightedResponse from "./highlightedResponse";
import Title from "./title";
import SectionHeader from "./sectionHeader";

const InspireSearch = () => {
  const dispatch = useDispatch();
  const currentResponses = useSelector((state) => state.responses);
  const [highlightedResponse, setHighlightedResponse] = useState(null);

  const addQueryResponse = (newResponse) => {
    setHighlightedResponse(newResponse);
    dispatch(addResponse(newResponse));
    dispatch(addResponseToTrips(newResponse));
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
