import Button from "../components/Export/DefaultExport"
import { Button1, Button2 } from "../components/Export/MultipleExport"



function ExportPage() {
    return (
        <>
            <div className="flex flex-col gap-5 justify-center items-center bg-amber-100 h-screen ">
                <Button />
                <Button1 />
                <Button2 />
            </div>
        </>
    )
}

export default ExportPage