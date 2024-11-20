import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
} 


export const Main = () => {

  const [products, setProducts] = useState<Product[]>([
    {id: 1, name: "Netflix Subscription", price: 15.90, category: "Entertainment" },
    {id: 2, name: "Grocery Store", price: 84.23, category: "Food" },
    {id: 3, name: "Salary Deposit", price: 3500, category: "Income" },
  ]);

  const handleAddProduct = () => {
    const name = document.getElementById("name") as HTMLInputElement;
    const price = document.getElementById("price") as HTMLInputElement;
    const category = document.getElementById("category") as HTMLInputElement;
    const newProduct = { id: products.length + 1, name: name.value, price: parseFloat(price.value), category: category.value };
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  console.log(products);

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
                <div className="max-h-96 overflow-y-auto">
                  {products.map((product) => {
                      return (
                          <div className="text-white flex flex-row space-x-4 bg-zinc-400 rounded-xl mx-1 my-4 p-4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 w-[320px] h-fit">
                              <Button onClick={() => handleDeleteProduct(product.id)} className="bg-transparent shadow-none p-0 hover:bg-transparent">
                                  <X/>
                              </Button>
                              <div>
                                  <h2 className="text-lg font-semibold">{product.name}</h2>
                                  <p className="text-zinc-300">{product.category}</p>
                              </div>
                              <p className="text-red-500 absolute right-4 top-8 text-lg">-R${product.price.toFixed(2)}</p>
                          </div>
                      )
                  })}
                </div>
            </div>
            <div className="flex flex-col w-[416px]">
                <h1 className="text-2xl font-bold text-white">Quick Transfers</h1>
                <div className="mx-1 my-4 space-y-4">
                    <Input id="name" className="placeholder:text-white placeholder:text-[16px] py-6 px-4 border-none bg-zinc-400 bg-clip-padding backdrop-blur-md backdrop-filter bg-opacity-20" placeholder="Name of the Product"/>
                    <Input id="price" type="number" className="placeholder:text-white placeholder:text-[16px] py-6 px-4 border-none bg-zinc-400 bg-clip-padding backdrop-blur-md backdrop-filter bg-opacity-20" placeholder="Price"/>
                    <Input id="category" className="placeholder:text-white placeholder:text-[16px] py-6 px-4 border-none bg-zinc-400 bg-clip-padding backdrop-blur-md backdrop-filter bg-opacity-20" placeholder="Category"/>
                </div>
                <Button onClick={handleAddProduct} className="mx-2 bg-pink-500 hover:bg-pink-600">Send Money</Button>
            </div>
        </div>
      </main>
    </>
  );
};
