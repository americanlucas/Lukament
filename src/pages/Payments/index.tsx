import { Main } from "@/components/Payments/Main"
import Footer from "@/components/skeleton/Footer"
import { Header } from "@/components/skeleton/Header"


export const Payments = () => {
    return(
        <>
            <main className="overflow-x-hidden">
                <div>
                    <Header/>
                </div>
                <div>
                    <Main/>
                </div>
                <div>
                    <Footer/>
                </div>
            </main>
        </>
    )
}