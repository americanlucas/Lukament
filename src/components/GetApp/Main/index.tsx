import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

    export const ConfirmButton = () => {
    return (
        <Button className="bg-white text-black hover:bg-white hover:text-black">I Want To Lose My Card</Button>
    )
    }  
export default function Main() {


  return (
    <>
        <main className="my-[100px] flex flex-col items-center ">
            <Card className="flex flex-col bg-slate-400 rounded-xl mb-12 py-4 px-6 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 w-[400px] h-fit">
                <CardHeader className="my-2">
                    <CardTitle className="text-xl text-white ">Get App Now!!</CardTitle>
                    <CardDescription className="text-center text-slate-300">You just need to enter your card numbers in the fields below!!</CardDescription>
                </CardHeader>
                <CardContent className="my-4 flex flex-col space-y-4">
                    <Input className="text-white border-none bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 placeholder:text-white " placeholder="Card Number"/>
                    <Input className="text-white border-none bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 placeholder:text-white " placeholder="Owner Name"/>
                    <div className="flex flex-1 flex-row space-x-4 justify-between">
                        <Input className="text-white border-none bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 placeholder:text-white  flex-1 w-40" placeholder="Expiration"/>
                        <Input className="text-white border-none bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 placeholder:text-white  flex-1" placeholder="CVV"/>
                    </div>
                    <div className="flex flex-1 flex-row space-x-4 justify-center">
                        <Sheet >
                            <SheetTrigger className=" w-[300px] bg-black text-white p-2 rounded-lg hover:bg-slate-800 duration-150">
                                <p className="flex flex-1 justify-center">Send</p>
                            </SheetTrigger>
                            <SheetContent className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 w-screen">
                                <SheetHeader className="flex flex-col space-y-8">
                                    <SheetTitle className="text-white">Are you absolutely sure?</SheetTitle>
                                    <SheetDescription className="text-slate-300">
                                    This action cannot be undone. <b>You are about to have your card cloned, your whole family will see that you are a disappointment.</b>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </CardContent>
            </Card>
        </main>
    </>
  );
}
