import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./components/signin";
import SignUpPage from "./components/signup";
import Dashboard from "./components/dashboard";
import { SendMoney } from "./components/SendMoney";

export let isAuth;
export default function App(){


  return<>
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignInPage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/sendMoney" element={<SendMoney/>}/>
      </Routes>
    </BrowserRouter>
  </>
}