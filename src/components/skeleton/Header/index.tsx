import {  NavLink } from "react-router-dom";


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
  return (
    <>
      <header className="flex flex-1 justify-between m-8">
        <div className="text-2xl font-semibold text-white">
          <NavLink style={NavLinkStyles} to="/">
            <h1>{titulos[0]}</h1>
          </NavLink>
        </div>
        <div className="flex space-x-6 items-center text-lg text-white">
          
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
