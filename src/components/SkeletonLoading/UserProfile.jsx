import { useEffect, useState } from "react"
import SkeletonLoader from "./SkeletonLoader"

function UserProfile() {
    const [user, setUser] = useState(null)
    
    useEffect(()=>{
        setTimeout(()=>{
            setUser("ram")
        },2000)
    }, [])
    
    
  return (
    <div className="p-4 border rounded shadow text-3xl">
        {user ? (<p>Hello, {user}</p>) : (<SkeletonLoader />)}
    </div>
  )
}

export default UserProfile