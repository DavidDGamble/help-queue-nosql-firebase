import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
//Added for routers and auth---vvvvv
import SignIn from './SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(){
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<TicketControl />} />
      </Routes>
    </Router>
  );
}

export default App;