const getTripsFromDB = async () => {
  const response = await fetch("../api/getTrips", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const tripsFromDB = await response.json();

  return tripsFromDB;
};

const dbTripsReducer = (state = [], action) => {
  switch (action.type) {
    case "INITIALIZE":
      return action.trips; // Error here. How to use async action in reducer?
    case "ADD":
      return state.concat(action.response);
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
  return { type: "ADD", response };
};

export default dbTripsReducer;
