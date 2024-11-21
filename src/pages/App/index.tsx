import { Header } from "@/components/skeleton/Header"
import { Button } from "@/components/ui/button"
import { useState } from "react"


export const GetApp = () => {
    const [isOpen, setIsOpen] = useState(false)

    const HandleClick = () => {
        setIsOpen(!isOpen)
    }
    
    return(
        <>
            <div>
                <Header/>
            </div>
            <div className="flex justify-center">
                <Button onClick={HandleClick}>Apareça!</Button>
            </div>
            {isOpen && 
            
                <>
                    <div className="flex bg-white absolute top-20 h-screen p-8">
                        <h1>VAI SE FUDE PORRA</h1>
                    </div>
                </>
            
            } 
        </>
    )
}