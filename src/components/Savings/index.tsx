import { Progress } from "../ui/progress"
import { Button } from "../ui/button"

const Glassmorphism = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col mt-16 w-120 bg-zinc-600 rounded-3xl py-8 px-14 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 h-fit">
            {children}
        </div>
    )
}

export const Main = () => {
    return (
        <>
            <main>
                <div className="flex flex-col items-center align-center justify-center mt-4">
                    <div className="flex flex-col items-center align-center justify-center my-8">
                        <div className="font-semibold text-[#F2C94C]">
                            <p>Smart Saving Solutions</p>
                        </div>
                        <div className="flex flex-1 text-6xl font-bold text-white max-w-xl text-center m-6">
                            <h1 >Save Smarter, Not Harder</h1>
                        </div>
                        <div className="text-zinc-300 text-center text-2xl tracking-wide space-y-8">
                            <h3>Automated saving tools and intelligent recommendations to help you achieve your financial goals.</h3>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center  justify-center space-x-2 mb-10 md:flex-row md:space-x-8">
                    <Glassmorphism>
                        <h1 className="text-xl text-white font-bold">Saving Goals</h1>
                        <div className="flex flex-col my-2 w-60 bg-zinc-400 rounded-xl py-4 px-6 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 h-fit md:w-80">
                            <div className="flex flex-row justify-between text-white">
                                <h2>Vacation Fund</h2>
                                <p>{38 + '%'}</p>
                            </div>
                            <Progress className="mt-4 bg-zinc-400 text-slate-200" value={38}/>
                        </div>
                        <div className="flex flex-col my-2 w-120 bg-zinc-400 rounded-xl py-4 px-6 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 h-fit">
                            <div className="flex flex-row justify-between text-white">
                                <h2>Emergency Fund</h2>
                                <p>{61 + '%' }</p>
                            </div>
                            <Progress className="mt-4 bg-zinc-400 text-slate-200" value={61}/>
                        </div>
                    </Glassmorphism>
                    <Glassmorphism>
                        <h1 className="text-xl text-white font-bold mb-4">Smart Rules</h1>
                        <div className=" flex flex-col w-60 md:w-80">
                            <div className="flex flex-col justify-between hover:-translate-y-1 duration-300 w-55 bg-zinc-400 rounded-xl py-4 px-6 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 h-fit md:w-80 md:flex-row">
                                <h2 className="my-2 text-lg text-white font-bold">Round Up Savings</h2>
                                <Button className="flex  hover:bg-slate-300 hover:text-black">
                                    Enable
                                </Button>
                            </div>
                            <div className="flex flex-col  hover:-translate-y-1 duration-300 w-55 my-4 bg-zinc-400 rounded-xl py-4 px-6 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 h-fit md:flex-row md:space-x-6">
                                <h2 className="my-2 text-lg text-white font-bold">Automatic Transfers</h2>
                                <Button className="flex hover:bg-slate-300 hover:text-black">
                                    Enable
                                </Button>
                            </div>
                        </div>
                    </Glassmorphism>
                </div>
            </main>
        </>
    )
}