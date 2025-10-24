import { Link } from "react-router";

export function useMenu() {
    return (
        <nav className="flex items-center justify-between w-full py-4 px-8">
            <div className="flex gap-10 items-center">
                <Link to="/" className="font-bold text-lg text-white-900 hover:text-blue-800 transition">Home</Link>
                <Link to="/pokedex" className="font-bold text-lg text-white-900 hover:text-blue-800 transition">Pokedex</Link>
            </div>
            <div>
                <Link to="/contact" className="px-6 py-3 bg-indigo-900 text-white font-bold rounded shadow hover:bg-indigo-800 transition">CONTACT ME</Link>
            </div>
        </nav>
    );
}
