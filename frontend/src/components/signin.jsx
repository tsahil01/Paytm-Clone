import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { baseBackendUrl } from "../../shared/urls";
import { useSetRecoilState } from "recoil";

export default function SignInPage(){

    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = async ()=>{
        const response = await fetch(`${baseBackendUrl}/user/signin`,{
            method: "POST",
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-type': 'application/json',
            }
        })
        const data = await response.json()
        console.log(data)

        if(data.token){
            localStorage.setItem('token', data.token)
            navigate('/dashboard')
        } else{
            alert(data.msg)
        }
    }

    return<>
    <div className="h-screen flex items-center justify-center bg-slate-950 overflow-auto">
        <div className="border- m-5 p-5 md:px-9 bg-slate-900 rounded-lg border-slate-900 lg:w-1/3 text-white">
            <div className="flex justify-center pb-5">
                <div className="font-bold text-4xl">Sign In</div>
            </div>
            <div className="flex justify-center">
                <div className="content-center">Enter your information to access your account</div>
            </div>
            
           
            <div className="my-7">
                <div className="font-bold text-xl">Username/Email</div>
                <input type="email" name="" id="username" placeholder="johncena@exampl.com" className="w-full rounded-lg bg-slate-950 p-3 mt-2 outline-none border-slate-300" 
                onChange={(e)=>setUsername(e.target.value)}/>
            </div>

            <div className="my-7">
                <div className="font-bold text-xl">Password</div>
                <input type="password" name="" id="password" placeholder="" className="w-full rounded-lg bg-slate-950 p-3 mt-2 outline-none border-slate-300" 
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
            </div>

            <div className="mt-7 mb-3">
                <button className="w-full rounded-lg bg-white text-black p-2 mt-2 outline-none border-slate-300 font-bold text-2xl"
                onClick={loginUser}>Sign In</button>
            </div>
            <div className="flex justify-center">
                <div className="content-center">Don't have an Account? <button className="underline" onClick={()=>navigate('/sign-up')}>Create account</button></div>
            </div>

        </div>
    </div>
    </>
}