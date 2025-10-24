export function useMain({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex-1 max-w-3xl mx-auto p-6 w-full">
            {children}
        </main>
    );
}
