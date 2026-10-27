import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App/>} />
        <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}
