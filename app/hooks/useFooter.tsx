import { FaTwitter, FaTwitch, FaYoutube } from "react-icons/fa";

export function useFooter() {
    return (
        <footer className="flex-1 bg-indigo-900 text-white py-4 text-center">
            <div className="flex justify-center gap-6 mb-2">
                <a href="https://twitter.com/AlonzoGalindo" target="_blank" rel="noopener" aria-label="Twitter">
                    <FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-600 transition" />
                </a>
                <a href="https://www.twitch.tv/exsorio" target="_blank" rel="noopener" aria-label="Twitch">
                    <FaTwitch className="w-6 h-6 text-purple-400 hover:text-purple-600 transition" />
                </a>
                <a href="https://youtube.com/@ivanalonzo9689?si=J5aOr4622w3e7xuQ" target="_blank" rel="noopener" aria-label="YouTube">
                    <FaYoutube className="w-6 h-6 text-red-400 hover:text-red-600 transition" />
                </a>
            </div>
            <div>
                Copyright @ Exsoriopolis 2024. Todos os direitos reservados.
            </div>
        </footer>
    );
}
