import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Suspense, lazy } from "react";

const SignInPage = lazy(()=> import('./components/signin'))
const SignUpPage = lazy(()=> import('./components/signup'))
const Dashboard = lazy(()=> import('./components/dashboard'))
const SendMoney = lazy(()=>import("./components/SendMoney"))

export let isAuth;
export default function App(){


  return<>
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<Suspense fallback={"Loading..."}> <SignInPage/> </Suspense>}/>
        <Route path="/sign-up" element={<Suspense fallback={"Loading..."}> <SignUpPage/> </Suspense>}/>
        <Route path="/dashboard" element={<Suspense fallback={"Loading..."}> <Dashboard/> </Suspense>}/>
        <Route path="/sendMoney" element={<Suspense fallback={"Loading..."}> <SendMoney/> </Suspense>}/>
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
  </>
}