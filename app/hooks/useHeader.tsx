
import { Link } from "react-router";
import { useMenu } from "./useMenu";

export function useHeader() {
    return (
        <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 shadow-md">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                {useMenu()}
            </div>
        </header>
    );
}
