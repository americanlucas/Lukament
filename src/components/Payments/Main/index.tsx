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
    {id: 1, name: "Netflix", price: 15.90, category: "Entertainment" },
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
          <div className="text-center text-zinc-300 font-semibold text-2xl tracking-wide space-y-8">
            <h3 className="  my-6 mx-8 text-xl md:text-2xl md:mx-0">Send money instantly to anyone, anywhere in the world.</h3>
          </div>
        </div>
        <div className="flex flex-col bg-slate-500 rounded-xl mb-12 py-4 px-6 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 w-[360px] h-fit md:flex-row md:w-[832px]">
            <div className="flex flex-col ml-4 w-[416px] md:mx-0">
                <h1 className="text-2xl my-4 font-bold ml-8 text-white md:mx-0 md:my-0">Recent Transactions</h1>
                <div className="flex flex-col max-h-96 overflow-y-auto">
                  {products.map((product) => {
                      return (
                          <div className="text-white flex flex-row space-x-4 bg-slate-500 rounded-xl mx-1 my-4 p-4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 w-[280px] h-[100px] md:w-[320px] md:h-fit">
                              <Button onClick={() => handleDeleteProduct(product.id)} className="bg-transparent shadow-none p-0 hover:bg-transparent">
                                  <X/>
                              </Button>
                              <div>
                                  <h2 className="text-lg font-semibold">{product.name}</h2>
                                  <p className="text-zinc-300">{product.category}</p>
                              </div>
                              <p className="text-red-500 absolute top-[40px] left-[150px] md:absolute md:left-[200px] md:top-8 md:text-lg">-R${product.price.toFixed(2)}</p>
                          </div>
                      )
                  })}
                </div>
            </div>
            <div className="flex flex-col ml-12 w-[416px] md:mx-0">
                <h1 className="text-2xl ml-5 font-bold text-white my-4 md:my-0 md:mx-0">Quick Transfers</h1>
                <div className="mx-1 my-4 space-y-4">
                    <Input id="name" className="w-fit placeholder:text-white placeholder:text-[16px] py-6 px-4 border-none bg-slate-500 bg-clip-padding backdrop-blur-md backdrop-filter bg-opacity-20 md:w-[400px]" placeholder="Name of the Product"/>
                    <Input id="price" type="number" className="w-fit placeholder:text-white placeholder:text-[16px] py-6 px-4 border-none bg-slate-500 bg-clip-padding backdrop-blur-md backdrop-filter bg-opacity-20 md:w-[400px]" placeholder="Price"/>
                    <Input id="category" className="w-fit placeholder:text-white placeholder:text-[16px] py-6 px-4 border-none bg-slate-500 bg-clip-padding backdrop-blur-md backdrop-filter bg-opacity-20 md:w-[400px]" placeholder="Category"/>
                </div>
                <Button onClick={handleAddProduct} className="ml-12 w-fit bg-pink-500 hover:bg-pink-600 md:w-[400px] md:mx-2">Send Money</Button>
            </div>
        </div>
      </main>
    </>
  );
};
