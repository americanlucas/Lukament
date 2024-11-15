import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Visa = () => {
  return <img src="../../../src/assets/visa.png" alt="" />;
};

const Chip = () => {
  return <img src="../../../src/assets/chip-card.png" alt="" />;
};

const Swap = () => {
  return <img src="../../../src/assets/Swap.svg" alt="" />;
};

export const Main = () => {
  return (
    <>
      <div className="flex mt-24 justify-around">
        <div>
          <div>
            <p className="flex text-[#F2C94C] font-semibold">
              <Swap />
              Switch to the newest and modern digital wallet
            </p>
            <h1 className="text-6xl font-bold max-w-xl leading-[1.25] text-white tracking-wide">
              Easy and Fast Payments With Lukament.
            </h1>
            <p className="max-w-lg my-4 text-zinc-400">
                With integration and well-build digital wallet, control your own cards and list all your payments to pay. Set your own code key to makes all payments done with only one approve action.
            </p>
            <div className="text-white space-x-8">
                <Button className="px-8 py-6 rounded-3xl bg-pink-600 hover:bg-pink-500">
                    Open Account Now
                </Button>
                <Link className=" hover:text-fuchsia-300 duration-300" to="/app">
                    Download App Now
                </Link>
            </div>
          </div>
          <div className="text-white mt-20">
            <h4>Find more details and learn more about digital wallet <Link className="text-[#F2C94C] hover:underline" to="/about ">here</Link> </h4>
          </div>
        </div>
        <div className="flex flex-col mt-16 w-120 h-80 bg-zinc-600 border border-zinc-200 rounded-3xl py-8 px-14 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
          <div className="flex pl-60 pb-4">
            <Visa />
          </div>
          <div className="flex my-3">
            <Chip />
          </div>
          <div className="flex my-6 text-3xl text-white">
            <p className="font-thin">3416 9945 3580 2130</p>
          </div>
          <div className="flex space-x-8 mt-2">
            <div className="flex flex-col">
              <p className="text-zinc-600">Owner Name</p>
              <h1 className="text-white font-thin text-2xl font-Comfortaa">Lucas Americano</h1>
            </div>
            <div className="flex flex-col">
              <p className="text-zinc-600">Expiry</p>
              <h1 className="text-white font-thin text-2xl font-Comfortaa">05/25</h1>
            </div>
            <div className="flex flex-col">
              <p className="text-zinc-600">CVV</p>
              <h1 className="text-white font-thin text-2xl font-comfortaa">444</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
