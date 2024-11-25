import { Main } from "@/components/Features/Main"
import Footer from "@/components/skeleton/Footer"
import { Header } from "@/components/skeleton/Header"

export const Features = () => {
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