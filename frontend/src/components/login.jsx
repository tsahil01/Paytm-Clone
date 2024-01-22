import { Link } from "react-router-dom";
import App from "../App";

export default function LoginPage(){
    return<>
    <div className="h-screen flex items-center justify-center bg-slate-800">
        <div className="border- m-5 p-5 md:px-9 bg-slate-900 rounded-lg border-slate-900 text-white">
            <div className="flex justify-center pb-5">
                <div className="font-bold text-4xl">Sign Up</div>
            </div>
            <div className="flex justify-center">
                <div className="content-center">Enter your information to create a account</div>
            </div>

            {/* Form */}
            <div className="my-7">
                <div className="font-bold text-xl">First name</div>
                <input type="text" name="" id="" placeholder="John" className="w-full rounded-lg bg-slate-800 p-3 mt-2 outline-none border-slate-300" />
            </div>
            <div className="my-7">
                <div className="font-bold text-xl">Last name</div>
                <input type="text" name="" id="" placeholder="Cena" className="w-full rounded-lg bg-slate-800 p-3 mt-2 outline-none border-slate-300" />
            </div>
            <div className="my-7">
                <div className="font-bold text-xl">Email</div>
                <input type="email" name="" id="" placeholder="johncena@exampl.com" className="w-full rounded-lg bg-slate-800 p-3 mt-2 outline-none border-slate-300" />
            </div>
            <div className="my-7">
                <div className="font-bold text-xl">Password</div>
                <input type="password" name="" id="" placeholder="" className="w-full rounded-lg bg-slate-800 p-3 mt-2 outline-none border-slate-300" />
            </div>
            <div className="mt-7 mb-3">
                <button className="w-full rounded-lg bg-white text-black p-2 mt-2 outline-none border-slate-300 font-bold text-2xl">Sign Up</button>
            </div>
            <div className="flex justify-center">
                <div className="content-center">Already have account? <button className="underline">Link</button></div>
            </div>
        </div>
    </div>
    </>
}