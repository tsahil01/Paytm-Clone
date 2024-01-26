import { useRecoilValue } from "recoil"
import { transfererUser } from "../sources/atoms/sendUserAtom"
import { baseBackendUrl } from "../../shared/urls"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SendMoney(){
    const navigate = useNavigate()
    const getTransfererUser = useRecoilValue(transfererUser)
    const [amount, setAmount] = useState(0)

    const fetchSendMoney = async ()=>{
        if(amount == 0){
            alert("Amount Cant be empty")
            return;
        }
        const response = await fetch(`${baseBackendUrl}/account/transfer`, {
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                to:getTransfererUser[0],
                amount
            })
        });
        const data = await response.json()
        console.log(data)
        alert(data.msg)
        navigate('/dashboard')
    }


    return<>
        <div className="flex items-center justify-center h-screen bg-slate-800 text-white">
            <div className="border-4 border-slate-600 rounded-lg p-7 flex flex-col gap-5 bg-slate-900">
                <div className="text-6xl font-bold flex justify-center pb-5">Send Money</div>
                <div className="flex flex-col gap-1">
                    <div className="text-xl font-bold">{getTransfererUser[1]}</div>
                    <input type="text" className="w-full rounded-lg  p-2 mt-2 outline-none bg-slate-800" name="" id=""  placeholder="Enter amount"
                    onChange={(e)=>{
                        setAmount(e.target.value)
                    }}/>
                </div>
                    <button className="rounded-lg bg-white text-black px-2 p-1 mt-2 outline-none border-slate-300 font-bold"
                    onClick={fetchSendMoney}>Initiate Transfer</button>
            </div>
        </div>
    </>
}