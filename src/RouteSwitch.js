import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from './Shop'
import Nav from "./components/Nav";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes> 
        <Route path="/" exact element={<App />} />
        <Route path='shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;