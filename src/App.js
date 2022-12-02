import React from "react";
import './index.css';
import Aboutus from "./routers/Aboutus";
import Events from "./routers/Events";
import Home from "./routers/Home";
import Services from "./routers/Services";
import Shop from "./routers/Shop";
import Contact from "./routers/Contact";

import { BrowserRouter,Route, Routes } from "react-router-dom";
function App(){
    return(
       < BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
       </BrowserRouter>
    );
}
export default App;