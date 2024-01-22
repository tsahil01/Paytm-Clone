import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./components/signin";
import SignUpPage from "./components/signup";
import Dashboard from "./components/dashboard";

export default function App(){
  return<>
  <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<SignInPage/>}/>
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>
  </>
}