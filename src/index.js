import React from "react";
import { render } from "react-dom";
import { HotelSearch } from "./components/HotelSearch";
import "./stylesheets/resetCSS.scss";
import "./stylesheets/index.scss";

window.React = React;

render (
    <HotelSearch/>,
    document.getElementById("AppHost")
)