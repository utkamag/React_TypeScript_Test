import {Routes, Route, Link} from "react-router-dom";
import React from 'react';
import App from "../App";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={App}/>
        </Routes>
    );
};

export default Router;