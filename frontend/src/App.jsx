import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/login";

export default function App(){
  return<>
  <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<LoginPage/>}/>
      <Route path="/singup" />
      <Route path="/dashboard" />
    </Routes>
  </BrowserRouter>
  </>
}