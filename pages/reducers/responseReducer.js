const responseReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_RESPONSE":
      return state.concat(action.response);
    default:
      return state;
  }
};

export const addResponse = (response) => {
  return { type: "SET_RESPONSE", response };
};

export default responseReducer;
