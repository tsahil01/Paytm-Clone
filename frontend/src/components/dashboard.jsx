import { useRecoilState, useRecoilValue } from "recoil"
import { balanceAtom } from "../sources/atoms/balanceAtom"
import { useEffect, useState } from "react"
import { baseBackendUrl } from "../../shared/urls"
import AllUsers from "./allUsers"

export default function Dashboard(){
    const [firstname, setFirstname] = useState("User")
    const [balance, setBalance] = useRecoilState(balanceAtom)
    
    const getData = async()=>{
        const response = await fetch(`${baseBackendUrl}/account/balance`,{
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        const data = await response.json();
        setBalance(data.balance)
        setFirstname(data.firstname)
    }

    useEffect(()=>{
        getData()
    }, [balance])
    return<>
    <div className="min-h-screen bg-slate-900 text-white">
        <nav className="flex justify-between p-5 lg:px-10 bg-slate-950 drop-shadow-2xl">
            <div className="font-black text-2xl my-auto"><span className='text-blue-600'>Payments</span> App</div>
            <div className="flex gap-3">
                <div className="text-xl font-bold m-auto hidden md:block">Hello,</div>
                <button className="flex gap-2">
                <div className="text-xl bold m-auto hidden md:block">{firstname}</div>
                <div className="m-auto border rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                    </svg>
                </div>
                </button>
            </div>
        </nav>

        <main className="lg:px-10">
            <div className="flex p-7 gap-5 justify-center">
                <div className="font-black text-xl">Your Balance: </div>
                <div className="text-xl">${Math.round(balance)}</div>
            </div>

            <AllUsers/>
        </main>
    </div>
    </>
}