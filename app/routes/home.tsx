
import AppLayout from "../layouts/AppLayout";
import { metaInfo } from "../hooks/useMeta";

export const meta = () => metaInfo("Home", "Bem-vindo ao Exsoriopolis!");

import { Link } from "react-router";

export default function Home() {
    return (
        <AppLayout>
            <section className="p-20 w-full flex-1 flex flex-col min-h-screen  flex-col-reverse lg:flex-row items-center justify-center gap-16 py-16 bg-white rounded-xl shadow-lg">
                <div className="flex-1 flex justify-center items-center px-8">
                    <img src="/central_landing_page.png" alt="Web Developer" className="w-full max-w-[480px]" />
                </div>
                <div className="flex-1 flex flex-col justify-center items-start px-8">
                    <h1 className="text-5xl font-extrabold text-blue-900 mb-6 leading-tight">Find your Pokémon!</h1>
                    <p className="text-xl text-gray-700 mb-8">Just catch 'em all!</p>
                    <Link to="/pokedex" className="inline-block px-8 py-4 bg-blue-800 text-white rounded-lg shadow hover:bg-blue-900 text-lg font-bold transition">Check them all</Link>
                </div>
            </section>
        </AppLayout>
    );
}
