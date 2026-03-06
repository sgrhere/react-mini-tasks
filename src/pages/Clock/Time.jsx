import { useEffect, useState } from "react"

function Time() {
    const[time, setTime]= useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
    },[])

    return (
        <div className='bg-[#0b0418]  flex justify-center p-5'>
            <div className='p-7 bg-[#060642] w-fit h-fit rounded-xl text-3xl text-white font-bold'>
                {time}
            </div>
        </div>
    )
}

export default Time