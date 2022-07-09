import React from "react";

import { Route, Routes } from "react-router-dom";

import './index.css';
import Aboutus from "./routers/Aboutus";
import Events from "./routers/Events";
import Home from "./routers/Home";
import Services from "./routers/Services";
import Shop from "./routers/Shop";
import Contact from "./routers/Contact";
import Login from "./routers/Login";
import Signup from "./routers/Signup";



function App(){
    return(
<Routes>
    <Route path="/" element={<Signup />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/aboutus" element={<Aboutus />} />
    <Route path="/events" element={<Events />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services" element={<Services />} />
    <Route path="/shop" element={<Shop />} />
</Routes>
    );
}
export default App;