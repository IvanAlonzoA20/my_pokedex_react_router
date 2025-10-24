import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Loading() {
    return (
        <div className="flex justify-center items-center h-full">
            <AiOutlineLoading3Quarters className="animate-spin text-blue-500 h-7 w-7" />
        </div>
    );
}