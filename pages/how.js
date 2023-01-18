import Header from "./components/siteComponents/header";
import SectionHeader from "./components/sectionHeader";
import Footer from "./components/siteComponents/footer";

const HowItWorks = () => {
  return (
    <div className="app">
      <Header />
      <div className="white-box">
        <SectionHeader text="Still a ToDo" />
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
