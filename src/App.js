import React from "react";
import "./App.css";
import SectionContainer from "./components/SectionContainer";
import assets from "./assets";
import Feature from "./components/Feature";
import Download from "./components/Download";

const App = () => {
  return (
    <div className="app">
      <SectionContainer
        desc="Buy, store, collect nfts, exchange and earn crypto. Join 25 million+ people using ProfNef MarketPlace."
        title="Your own store of Nifty NFTs.Start selling growing."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionContainer
        title={"Smart User Interface Marketplace"}
        desc={
          "Experience the buttery UI or ProfNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        }
        mockupImg={assets.homeCards}
        reverse
      />
      <Feature />
      <SectionContainer
        title="Deployment"
        desc="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionContainer 
        title="Creative way to showcase the store"
        desc="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="banner04 bg-primary" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: ".5rem 1rem"
      }}>
        <p className="text-p white-text">Made with love by {" "}
        <span style={{fontWeight: "bold"}}>Emmanuel Holonou</span>
        </p>
      </div>
    </div>
  );
};

export default App;
