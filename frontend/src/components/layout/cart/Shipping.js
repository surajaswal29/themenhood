import React from "react";

// component imports
import Header from "../header/header"; //page header
import MetaData from "../metaData"; //set page title

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../../actions/cartAction"; //Redux Cart Action

//country-state-city package
import { country, state, city } from "country-state-city";

// CSS File
import "./Shipping.css";

const Shipping = () => {
  return <Header />;
};

export default Shipping;