import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"


export const Main = () => {
    return (
        <>
            <div className="flex flex-col items-center align-center justify-center my-12">
                <div className="font-semibold text-[#F2C94C]">
                    <p>Our Products</p>
                </div>
                <div className="flex flex-1 text-6xl font-bold text-white max-w-xl text-center m-6">
                    <h1>Banking Made Simple</h1>
                </div>
                <div className="text-center text-zinc-300 font-semibold text-2xl tracking-wide space-y-8">
                    <h3 className="mx-10 my-[10px] text-xl md:mx-0 md:my-0 md:text-2xl">Choose the perfect plan for your financial needs.</h3>
                </div>
            </div>
            <div className="flex flex-col justify-center m-12 space-x-0 md:flex-row md:space-x-12">
                <div className="flex flex-col mt-16 w-120 h-120 bg-zinc-300 rounded-3xl py-8 px-14 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 md:hover:-translate-y-4 duration-300">
                    <h1 className="text-2xl font-bold text-white mb-4">Basic</h1>
                    <h1 className="text-4xl font-bold text-white mb-4">Free</h1>
                    <div className="flex space-x-3 space-y-3">
                        <Check className="text-white items-center mt-3" />
                        <p className="text-white items-center">Basic digital wallet</p>
                    </div>
                    <div className="flex space-x-3 space-y-3">
                        <Check className="text-white items-center mt-3" />
                        <p className="text-white items-center">Up to 3 savings goals</p>
                    </div>
                    <div className="flex space-x-3 space-y-3">
                        <Check className="text-white items-center mt-3" />
                        <p className="text-white items-center">Standard support</p>
                    </div>
                    <Button className="mt-14 bg-pink-400 hover:bg-pink-500">Get Started</Button>
                </div>
                <div className="flex flex-col mt-16 w-120 h-120 bg-zinc-300 rounded-3xl py-8 px-14 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 md:hover:-translate-y-4 duration-300 border-2 border-pink-400">
                    <h1 className="text-2xl font-bold text-white mb-4">Pro</h1>
                    <h1 className="text-4xl font-bold text-white mb-4">$9.99/month</h1>
                    <div className="flex space-x-3 space-y-3">
                        <Check className="text-white items-center mt-3" />
                        <p className="text-white items-center">Advanced analytics</p>
                    </div>
                    <div className="flex space-x-3 space-y-3">
                        <Check className="text-white items-center mt-3" />
                        <p className="text-white items-center">Unlimited savings goals</p>
                    </div>
                    <div className="flex space-x-3 space-y-3">
                        <Check className="text-white items-center mt-3" />
                        <p className="text-white items-center">Priority support</p>
                    </div>
                    <div className="flex space-x-3 space-y-3">
                        <Check className="text-white items-center mt-3" />
                        <p className="text-white items-center">Custom cards</p>
                    </div>
                    <Button className="mt-6 bg-pink-400 hover:bg-pink-500">Get Started</Button>
                </div>
                <div className="flex flex-col mt-16 w-120 h-120 bg-zinc-300 rounded-3xl py-8 px-14 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 md:hover:-translate-y-4 duration-300">
                    <h1 className="text-2xl font-bold text-white mb-4">Enterprise</h1>
                    <h1 className="text-4xl font-bold text-white mb-4">Custom</h1>
                    <div className="flex space-x-3 space-y-3">
                        <Check className="text-white items-center mt-3" />
                        <p className="text-white items-center">Dedicated account manager</p>
                    </div>
                    <div className="flex space-x-3 space-y-3">
                        <Check className="text-white items-center mt-3" />
                        <p className="text-white items-center">Custom integration</p>
                    </div>
                    <div className="flex space-x-3 space-y-3">
                        <Check className="text-white items-center mt-3" />
                        <p className="text-white items-center">24/7 support</p>
                    </div>
                    <div className="flex space-x-3 space-y-3">
                        <Check className="text-white items-center mt-3" />
                        <p className="text-white items-center">Advanced security</p>
                    </div>
                    <Button className="mt-6 bg-pink-400 hover:bg-pink-500">Get Started</Button>
                </div>

            </div>
        </>
    )
}