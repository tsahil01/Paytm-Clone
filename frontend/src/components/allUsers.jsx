import { useEffect } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { usersAtom } from "../sources/atoms/usersAtom"
import { transfererUser } from "../sources/atoms/sendUserAtom"
import { useNavigate } from "react-router-dom"
import { baseBackendUrl } from "../../shared/urls"

export default function AllUsers(){
    const navigate = useNavigate()
    const[allUsers, setallUsers] = useRecoilState(usersAtom)
    const setTransfererUserId = useSetRecoilState(transfererUser)

    const fetchAllUsers = async()=>{
        const response = await fetch(`${baseBackendUrl}/user/all-users`,{
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        const data = await response.json()
        setallUsers(data.users)
    }

    useEffect(()=>{
        fetchAllUsers()
    },[])

    return<>
    <div className="flex flex-col p-7 gap-2">
        <div className="font-black text-xl w-full">Users:</div>
        <input type="text"className="md:w-1/3 rounded-lg bg-slate-900 p-3 mt-2 outline-none" placeholder="Search User" />
        {allUsers.map((user)=>{
            return<>
            <div className="flex justify-between mt-2">
                <div className="font-bold my-auto">{user.firstname} {user.lastname}</div>
                <button className="rounded-lg bg-white text-black px-2 p-1 mt-2 outline-none border-slate-300 font-bold"
                onClick={()=>{
                    setTransfererUserId([user._id, `${user.firstname} ${user.lastname}`])
                    navigate('/sendMoney')
                    
                }}>Send Money</button>
            </div>
            </>
        })}
            
        
    </div>
    </>
}