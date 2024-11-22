import { Lock, PiggyBank, Zap } from "lucide-react"

interface TituloCardProps {
    children?: React.ReactNode,
}

const TituloCard = ({ children }: TituloCardProps) => {
    return (
        <>
            <p className="text-xl font-bold text-white my-2">{children}</p>
        </>
    )
}
const SubtituloCard = ({ children }: TituloCardProps) => {
    return (
        <>
            <p className="text-lg text-white">{children}</p>
        </>
    )
}

export const Popout = () => {
    return (
        <>
            <div className="flex flex-col items-center align-center justify-center my-8">
                <div className="font-semibold text-[#F2C94C]">
                    <p>Discover Our Features</p>
                </div>
                <div className="flex flex-1 text-6xl font-bold text-white max-w-xl text-center m-6">
                    <h1 >Smart Features for Modern Banking</h1>
                </div>
                <div className="flex text-center text-zinc-300 mx-8 mt-6 text-xl tracking-wide space-y-8 md:text-2xl">
                    <h3>Experience next-generation banking with our innovative features designed for your financial success.</h3>
                </div>
            </div>
        </>
    )
}

export const Main = () => {
    return (
        <>
            <div className="flex flex-col items-center align-center justify-center ">
                <Popout></Popout>

                <div className="flex flex-col justify-between -mt-2 mb-8 mx-12 max-w-7xl md:flex-row md:space-x-12 md:my-0">
                    <div className="flex flex-col mt-16 w-fit bg-zinc-600 rounded-3xl py-8 px-14 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 h-fit md:hover:-translate-y-4 duration-300">
                        <Lock className="text-yellow-400 w-9 h-9 mb-2" />
                        <TituloCard>Secure Transactions</TituloCard>
                        <SubtituloCard>End-to-end encryption for all your financial transactions</SubtituloCard>
                    </div>
                    <div className="flex flex-col mt-16 w-fit bg-zinc-600 rounded-3xl py-8 px-14 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 h-fit md:hover:-translate-y-4 duration-300">
                        <PiggyBank className="fill-pink-300 w-9 h-9 mb-2" />
                        <TituloCard>Smart Savings</TituloCard>
                        <SubtituloCard>Automated savings rules to help you reach your goals faster</SubtituloCard>
                    </div>
                    <div className="flex flex-col mt-16 w-fit bg-zinc-600 rounded-3xl py-8 px-14 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 h-fit md:hover:-translate-y-4 duration-300">
                        <Zap className="w-9 h-9 mb-2 text-yellow-500 fill-yellow-500" />
                        <TituloCard>Instant Transfers</TituloCard>
                        <SubtituloCard>Send and receive money instantly, anywhere in the world</SubtituloCard>
                    </div>
                </div>
            </div>
        </>
    )

}