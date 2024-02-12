import { useEffect, useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { usersAtom } from "../sources/atoms/usersAtom"
import { transfererUser } from "../sources/atoms/sendUserAtom"
import { useNavigate } from "react-router-dom"

export default function AllUsers(){
    let timeout;
    const navigate = useNavigate()
    const users = useRecoilValue(usersAtom)
    const setTransfererUserId = useSetRecoilState(transfererUser)

    const [inputValue, setInputValue] = useState("")
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
    // Filter users based on inputValue when it changes
    const filtered = users.filter((user) =>
      user.firstname.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [inputValue, users]);

  function debounce(value){
    clearTimeout(timeout)
    timeout = setTimeout(()=>{
        setInputValue(value)
    }, 500)
  }

    return<>
    <div className="flex flex-col p-7 gap-2">
        <div className="font-black text-xl w-full">Users:</div>
        <input type="text"className="md:w-1/3 rounded-lg bg-slate-950 p-3 mt-2 outline-none" placeholder="Search User" onChange={(e) =>
             debounce(e.target.value)}/>
        {filteredUsers.map((user)=>{
            return<>
            <div className="flex justify-between mt-2" key={user._id}>
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