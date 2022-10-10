import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";

import landingPage from "json/LandingPages.json";
export default class LandingPages extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={landingPage.hero}
      </>
    );
  }
}
