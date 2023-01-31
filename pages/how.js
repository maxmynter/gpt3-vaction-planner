import Header from "./components/siteComponents/header";
import SectionHeader from "./components/sectionHeader";
import Footer from "./components/siteComponents/footer";

const HowItWorks = () => {
  return (
    <div className="app">
      <Header />
      <div className="content-container">
        <div className="white-box">
          <SectionHeader text="How it works" />
          <text>
            Read the story{" "}
            <a href="https://maxmynter.hashnode.dev/building-a-gpt-3-webapp">
              here
            </a>
          </text>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
