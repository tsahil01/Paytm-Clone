import {atom} from 'recoil'
import { baseBackendUrl } from '../../../shared/urls'


const fetchAllUsers = async()=>{
    const response = await fetch(`${baseBackendUrl}/user/all-users`,{
        method: "GET",
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    const data = await response.json()
    console.log(data)
    return (data.users)
}
export const usersAtom = atom({
    key:"userAtom",
    default: fetchAllUsers()
})



