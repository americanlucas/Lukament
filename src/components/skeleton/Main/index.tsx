import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Visa from "../../../assets/visa.png";
import Chip from "../../../assets/chip-card.png";
import Swap from "../../../assets/Swap.svg";

export const Main = () => {
  return (
    <>
      <div className="flex mt-24 justify-around max-[480px]:justify-center flex-col md:flex-row w-screen">
        <div>
          <div className="max-[480px]:flex max-[480px]:justify-center flex-col md:flex-col justify-center items-center" >
            <p className="flex text-[#F2C94C] font-semibold">
              <Swap />
              Switch to the newest and modern digital wallet
            </p>
            <h1 className="text-center text-6xl font-bold max-w-xl leading-[1.25] text-white tracking-wide md:text-start">
              Easy and Fast Payments.
            </h1>
            <p className="text-center w-9/12 my-8 text-zinc-400 md:text-start mx-0 max-w-lg">
                With integration and well-build digital wallet, control your own cards and list all your payments to pay. Set your own code key to makes all payments done with only one approve action.
            </p>
            <div className="text-white space-x-8 mx-6 flex md:mx-0">
              <Link to="/plans">
                <Button className="px-8 py-6 rounded-3xl bg-pink-600 hover:bg-pink-500" >
                    Open Account Now
                </Button>
              </Link>
                <Link className=" hover:text-fuchsia-300 duration-300 flex text-center md:items-center" to="/app">
                    Download App Now
                </Link>
            </div>
          </div>
          <div className="text-white mt-20 text-center mx-8 md:mx-0 flex justify-start ">
            <h4>Find more details and learn more about digital wallet <Link className="text-[#F2C94C] hover:underline" to="/about ">here</Link> </h4>
          </div>
        </div>
        <div className=" flex m-6">
          <div className="flex flex-col box-border mt-16 p-6 w-fit h-fit bg-zinc-600 border-2 border-zinc-200 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 md:rotate-12 w-120">
            <div className="flex pl-48 md:pl-60 pb-4 ">
              <Visa />
            </div>
            <div className="flex my-3">
              <Chip />
            </div>
            <div className="flex my-6 text-xl text-white md:text-4xl">
              <p className="font-thin">3416 9945 3580 2130</p>
            </div>
            <div className="flex space-x-8 mt-2">
              <div className="flex flex-col">
                <p className="text-white">Owner Name</p>
                <h1 className="text-white font-thin text-2xl font-Comfortaa">Lucas Americano</h1>
              </div>
              <div className="flex flex-col">
                <p className="text-white">Expiry</p>
                <h1 className="text-white font-thin text-2xl font-Comfortaa">05/25</h1>
              </div>
              <div className="flex flex-col">
                <p className="text-white">CVV</p>
                <h1 className="text-white font-thin text-2xl font-comfortaa">444</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
