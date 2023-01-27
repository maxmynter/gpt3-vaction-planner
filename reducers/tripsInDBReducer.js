import getRandomImageURL from "../utils/getRandomImages";

const getTripsFromDB = async () => {
  const response = await fetch("../api/getTrips", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  let tripsFromDB = await response.json();
  tripsFromDB = tripsFromDB.map((trip) => ({
    ...trip,
    backgroundImageURL: getRandomImageURL(),
  }));

  return tripsFromDB;
};

const dbTripsReducer = (state = [], action) => {
  switch (action.type) {
    case "INITIALIZE":
      return action.trips;
    case "ADD":
      return [action.response, ...state];
    default:
      return state;
  }
};

export const initializeTrips = () => {
  return async (dispatch) => {
    const trips = await getTripsFromDB();
    dispatch({ type: "INITIALIZE", trips });
  };
};

export const addResponseToTrips = (response) => {
  return {
    type: "ADD",
    response,
  };
};

export default dbTripsReducer;
