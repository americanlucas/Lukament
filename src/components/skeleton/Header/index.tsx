import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";


// export interface HeaderProps {
//     titulo: string,
//     subtitulos?: Array<string>
// }

const NavLinkStyles = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "rgb(249, 168, 212)" : "white",
  textDecoration: isActive ? "underline" : "none",
});

const titulos = ["Lukament", "Get App Now"];
const subtitulos = ["Features", "Savings", "Payments", "Plans", "About"];


export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const menuClicado = {
    display: isOpen ? "none" : "block"
  }

  return (
    <>  
        <div className="max-[480px]:flex absolute top-6 ml-3 text-white md:hidden">
          <Button 
            onClick={toggleMenu}
            style={menuClicado}
            variant="ghost" 
            className=" max-[480px]:flex absolute mr-2 active:bg-pink-600 hover:bg-transparent ">
            <Menu className="absolute z-20 text-2xl" />
          </Button>
        </div>
        {isOpen && 
          <div className="max-[480px]:flex m-0 bg-zinc-400 rounded-xl  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 w-screen h-screen flex-col space-y-6 items-center text-lg text-white">
            <div>
              <button onClick={toggleMenu} className="active:text-black">
                <X className="absolute left-8 top-8"/>
              </button>
            </div>
            {subtitulos.map((subtitulo) => {
                return (
                    <>  
                        <NavLink className="relative top-60 -left-0" style={NavLinkStyles}  to={"/" + subtitulo.toLowerCase()}>
                            <h3>{subtitulo}</h3>
                        </NavLink>
                    </>
                )   
            })}
          </div>
        }
      <header className="flex flex-1 justify-between m-8">
        <div className="flex items-center space-x-4 text-2xl font-semibold text-white max-[480px]:ml-10">
          <NavLink style={NavLinkStyles} to="/">
            <h1>{titulos[0]}</h1>
          </NavLink>
        </div>
        <div className="max-[480px]:hidden flex space-x-6 items-center text-lg text-white">
          
            {subtitulos.map((subtitulo) => {
                return (
                    <>  
                        <NavLink style={NavLinkStyles}  to={"/" + subtitulo.toLowerCase()}>
                            <h3>{subtitulo}</h3>
                        </NavLink>
                    </>
                )   
            })}
        </div>
        <div className="text-2xl font-semibold text-white">
            <NavLink style={NavLinkStyles} to="/app">
                <h1>{titulos[1]}</h1>
            </NavLink>
        </div>
      </header>
    </>
  );
};
