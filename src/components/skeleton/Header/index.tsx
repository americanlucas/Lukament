import { Link } from "react-router-dom";

// export interface HeaderProps {
//     titulo: string,
//     subtitulos?: Array<string>
// }

const titulos = ["Lukament", "Get App Now"];
const subtitulos = ["Features", "Saving", "Payments", "Products", "About"];

export const Header: React.FC = () => {
  return (
    <>
      <header className="flex flex-1 justify-between m-8">
        <div className="text-2xl font-semibold text-white">
          <Link to="/">
            <h1>{titulos[0]}</h1>
          </Link>
        </div>
        <div className="flex space-x-6 items-center text-lg text-zinc-300">
          
            {subtitulos.map((subtitulo) => {
                return (
                    <>  
                        <Link  to={"/" + subtitulo.toLowerCase()}>
                            <h3>{subtitulo}</h3>
                        </Link>
                    </>
                )   
            })}
        </div>
        <div className="text-2xl font-semibold text-white">
            <Link to="/app">
                <h1>{titulos[1]}</h1>
            </Link>
        </div>
      </header>
    </>
  );
};
