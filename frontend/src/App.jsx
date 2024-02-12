import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Suspense, lazy, useEffect, useState } from "react";
import Loader from "./components/Loader";

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
        <Route path="/" element={<Redirect />} />
        <Route path="/loader" element={<Loader/>} />
        <Route path="/sign-in" element={<Suspense fallback={<Loader/>}> <SignInPage/> </Suspense>}/>
        <Route path="/sign-up" element={<Suspense fallback={<Loader/>}> <SignUpPage/> </Suspense>}/>
        <Route path="/dashboard" element={<Suspense fallback={<Loader/>}> <Dashboard/> </Suspense>}/>
        <Route path="/sendMoney" element={<Suspense fallback={<Loader/>}> <SendMoney/> </Suspense>}/>
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
  </>
}


function Redirect(){
  const navigate = useNavigate();
  useEffect(()=>{
    const isAuth = localStorage.length > 0;
    isAuth ? navigate('/dashboard') : navigate('/sign-in')
  },[navigate])
  return null
}