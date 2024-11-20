import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

const Saldo = () => {
  return 1000; // or any other numeric value
}


{Saldo() < 0 ? <p className="text-red-500">{Saldo()}</p> : <p className="text-green-500">{Saldo()}</p>}
export const Main = () => {
  return (
    <>
      <main className="flex flex-col items-center align-center justify-center">
        <div className="flex flex-col items-center align-center justify-center my-8">
          <div className="font-semibold text-[#F2C94C]">
            <p>Payment Solutions</p>
          </div>
          <div className="flex flex-1 text-6xl font-bold text-white max-w-xl text-center m-6">
            <h1>Fast and Secure Payments</h1>
          </div>
          <div className="text-white font-semibold text-2xl tracking-wide space-y-8">
            <h3>Send money instantly to anyone, anywhere in the world.</h3>
          </div>
        </div>
        <div className="flex flex-row bg-zinc-400 rounded-xl mb-12 py-4 px-6 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 w-[832px] h-fit ">
            <div className="w-[416px]">
                <h1 className="text-2xl font-bold text-white">Recent Transactions</h1>
                <div>
                    <div className="text-white flex flex-row space-x-4 bg-zinc-400 rounded-xl mx-1 my-4 p-4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 w-[320px] h-fit ">
                        <Button className="bg-transparent shadow-none p-0 hover:bg-transparent">
                            <X/>
                        </Button>
                        <div>
                            <h2 className="text-lg font-semibold">Netflix Subscription</h2>
                            <p className="text-zinc-300">Entertainment</p>
                        </div>
                        <p className="text-red-500 absolute right-4 top-8 text-lg">-R$15,90</p>
                    </div>
                    <div className="text-white flex flex-row space-x-4 bg-zinc-400 rounded-xl mx-1 my-4 p-4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 w-[320px] h-fit">
                        <Button className="bg-transparent shadow-none p-0 hover:bg-transparent">
                            <X/>
                        </Button>
                        <div>
                            <h2 className="text-lg font-semibold">Grocery Store</h2>
                            <p className="text-zinc-300">Food</p>
                        </div>
                        <p className="text-red-500 absolute right-4 top-8 text-lg">-R$84.23</p>
                    </div>
                    <div className="text-white flex flex-row space-x-4 bg-zinc-400 rounded-xl mx-1 my-4 p-4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 w-[320px] h-fit">
                        <Button className="bg-transparent shadow-none p-0 hover:bg-transparent">
                            <X/>
                        </Button>
                        <div>
                            <h2 className="text-lg font-semibold">Salary Deposit</h2>
                            <p className="text-zinc-300">Income</p>
                        </div>
                        <p className="text-green-500 absolute right-4 top-8 text-lg">+$3,500.00</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-[416px]">
                <h1 className="text-2xl font-bold text-white">Quick Transfers</h1>
                <div className="mx-1 my-4 space-y-4">
                    <Input className="placeholder:text-white placeholder:text-[16px] py-6 px-4 border-none bg-zinc-400 bg-clip-padding backdrop-blur-md backdrop-filter bg-opacity-20" placeholder="Name of the Product"/>
                    <Input type="number" className="placeholder:text-white placeholder:text-[16px] py-6 px-4 border-none bg-zinc-400 bg-clip-padding backdrop-blur-md backdrop-filter bg-opacity-20" placeholder="Amount"/>
                    <Input className="placeholder:text-white placeholder:text-[16px] py-6 px-4 border-none bg-zinc-400 bg-clip-padding backdrop-blur-md backdrop-filter bg-opacity-20" placeholder="Category"/>
                </div>
                <Button className="mx-2 bg-pink-500 hover:bg-pink-600">Send Money</Button>
            </div>
        </div>
      </main>
    </>
  );
};
