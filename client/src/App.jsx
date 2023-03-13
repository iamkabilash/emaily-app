import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Dashboard from "./Components/Dashboard";
import SurveyNew from "./Components/SurveyNew";
import Header from "./Components/Header";

import { connect } from "react-redux";
import * as actions from "./actions";

function App(props) {
  useEffect(() => {
    props.fetchUser();
  }, [props]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/surveys" element={<Dashboard />} />
        <Route path="/surveys/new" element={<SurveyNew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default connect(null, actions)(App);
