const responseReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_RESPONSE":
      return [action.response].concat(state);
    default:
      return state;
  }
};

export const addResponse = (response) => {
  return { type: "SET_RESPONSE", response };
};

export default responseReducer;
