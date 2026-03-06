import { useState } from "react"


function Tabs() {
    const [activeTab, setActiveTab] = useState('Tab1')
    return (
        <div className="flex gap-2 font-bold h-screen justify-center items-center bg-[#090126]">
            <button className={`p-4 h-fit ${activeTab === 'Tab1' ? "bg-red-500 text-white" : "bg-gray-300"}`}
                onClick={() => setActiveTab('Tab1')}>
                Tab 1
            </button>

            <button className={`p-4 h-fit ${activeTab === 'Tab2' ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => setActiveTab('Tab2')}>
                Tab 2
            </button>

            <button className={`p-4 h-fit ${activeTab === 'Tab3' ? "bg-yellow-500 text-white" : "bg-gray-300"}`}
                onClick={() => setActiveTab('Tab3')}>
                Tab 3
            </button>
        </div>
    )
}

export default Tabs