import { useState } from "react"


function Tabs() {
    const [activeTab, setActiveTab] = useState('Tab1')
    return (
        <div className="flex font-bold h-screen flex-col justify-center items-center bg-[#090126]">
            <div>
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

            <div className="text-white text-xl items-start">
                <p className={`${activeTab === 'Tab1' ? "visible" : "hidden"}`}>Hello, from Tab 1</p>
                <p className={`${activeTab === 'Tab2' ? "visible" : "hidden"}`}>Hi, from Tab 2</p>
                <p className={`${activeTab === 'Tab3' ? "visible" : "hidden"}`}>Namaste, from Tab 3</p>
            </div>
        </div>
    )
}

export default Tabs