import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./components/signin";
import SignUpPage from "./components/signup";
import Dashboard from "./components/dashboard";
import { SendMoney } from "./components/SendMoney";

export default function App(){
  return<>
  <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<SignInPage/>}/>
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/sendMoney" element={<SendMoney/>}/>
    </Routes>
  </BrowserRouter>
  </>
}