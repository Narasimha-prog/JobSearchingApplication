
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import Callback from "./oauth/Callback";

const App = () => {


  return (

    <Routes> 
      <Route path="/callback" element={<Callback />} />
       <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
