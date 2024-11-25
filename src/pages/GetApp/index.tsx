import Main from "@/components/GetApp/Main"
import Footer from "@/components/skeleton/Footer"
import { Header } from "@/components/skeleton/Header"


export const GetApp = () => {
    
    return(
        <>
            <div>
                <Header/>
            </div>
            <div>
                <Main/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}