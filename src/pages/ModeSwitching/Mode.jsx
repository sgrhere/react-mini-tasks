import { useState } from "react"
import { CiLight } from "react-icons/ci"
import { MdDarkMode } from "react-icons/md"

function Mode() {
    const [darkMode, setDarkMode] = useState(true)
    return (
        <div className={`h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
            <div>
                {darkMode ? <CiLight onClick={() => setDarkMode(!darkMode)} /> :
                    <MdDarkMode onClick={() => setDarkMode(!darkMode)} />}
            </div>
        </div>
    )
}

export default Mode