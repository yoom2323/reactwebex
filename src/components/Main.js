import React from "react";
import Body10_partners from "./Body10_partners";
import Body1_value from "./Body1_value";
import Body2_video from "./Body2_video";
import Body3_pocket from "./Body3_pocket";
import Body4_count from "./Body4_count";
import Body5_project from "./Body5_project";
import Body6_check from "./Body6_check";
import Body7_map from "./Body7_map";
import Body8_ask from "./Body8_ask";
import Body9_submit from "./Body9_submit";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

function Main(props) {
  return (
    <>
      <Navigation />
      <Header />
      <Body1_value />
      <Body2_video />
      <Body3_pocket />
      <Body4_count />
      <Body5_project />
      <Body6_check />
      <Body7_map />
      <Body8_ask />
      <Body9_submit />
      <Body10_partners />
      <Footer />
    </>
  );
}

export default Main;
