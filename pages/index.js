import Header from "./components/siteComponents/header";
import InspireSearch from "./components/inspireSearch";
import Footer from "./components/siteComponents/footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="search-container">
        <InspireSearch />
      </div>
      <Footer />
    </div>
  );
};

export default App;
