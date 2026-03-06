import { useState } from "react"
import THome from "../components/Ternary/THome"
import TLogin from "../components/Ternary/TLogin"

function TernaryPage() {
  const [status, setStatus] = useState(false)

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl mt-5 underline">Let's understand about Ternary operator.</h1>
      <h1 className="text-2xl">Syntax:
        <div className="text-red-500 inline"> condition? statement-when-true : statement-when-false</div>
      </h1>

      <button className="bg-amber-300" onClick={() => setStatus(!status)}>Status change</button>
      <div>
        {status ? <THome /> : <TLogin />}
      </div>
    </div>
  )
}

export default TernaryPage