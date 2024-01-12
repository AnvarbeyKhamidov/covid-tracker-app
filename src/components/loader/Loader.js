import React from 'react';
import {ClockLoader} from "react-spinners";
import "./loader.css";

function Loader(props) {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center loader">
            <ClockLoader color="#5b6261" />
            </div>
        </>
    );
}

export default Loader;