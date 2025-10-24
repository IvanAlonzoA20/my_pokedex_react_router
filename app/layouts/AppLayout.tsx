import { useHeader } from "../hooks/useHeader";
import { useFooter } from "../hooks/useFooter";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
            {useHeader()}
            <main className="flex-1 mx-auto w-full">
                {children}
            </main>
            {useFooter()}
        </div>
    );
}