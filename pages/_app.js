import "./styles.css";
import responseReducer from "./reducers/responseReducer";
import dbTripsReducer from "./reducers/tripsInDBReducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    responses: responseReducer,
    trips: dbTripsReducer,
  },
});

function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default App;
