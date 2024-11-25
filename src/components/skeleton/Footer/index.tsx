import { Link } from "react-router-dom";


export default function Footer() {
    return(
        <>
            <div className="my-8">
                <h1 className="text-center text-white text-sm">
                    Developed by  
                    <Link className="px-1 text-purple-300 hover:font-bold" to="https://github.com/americanlucas">
                        &copy;AmericanLucas
                    </Link>
                </h1>
            </div>
        </>
    )
}