import React from "react";
import Header from "./Components/Header";

import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Events from "./Events/Events";

// import ContactUs from './pages/ContactUs/ContactUs';
// import SignIn from './pages/SignIn/SignIn';
// import SignUp from './pages/SignUp/SignUp';
// import AddConference from './pages/AddConference/AddConference';
// import Blog from './pages/Blogs/Blog';
// import Events from './pages/Eevent/Events';
// import Calandars from "./pages/Calendar/Calandars"

// import './App.css';

function App() {
  
  return (
    < >
      <Header  />
      <Routes>
        <Route path="/" element={<Home />} />



        <Route path='/events' element={<Events/>} />

      </Routes>
    </>
  );
}

export default App;
