import { useSubmitWithTimeout } from "./useSubmitWithTimeout";

export async function action({ request }: { request: Request }) {
    const formData = Object.fromEntries(await request.formData());
    // Exemplo: retorna os dados enviados
    return { success: true, data: formData };
}

export default function ContactUsForm() {
    const { submitting, submit } = useSubmitWithTimeout();

    let statusMessage = null;
    if (submitting) {
        statusMessage = <div className="mt-4 text-blue-600 text-lg font-semibold">A enviar... Será redirecionado em 1 minuto.</div>;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submit();
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl mx-auto mt-10 mb-10 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            {/* Mapa Oporto */}
            <div className="flex-1 flex items-center justify-center min-h-[380px]">
                <iframe
                    title="Mapa Oporto"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-8.652%2C41.145%2C-8.610%2C41.170&amp;layer=mapnik"
                    className="w-full h-120 rounded-lg border shadow"
                    allowFullScreen
                ></iframe>
            </div>
            {/* Formulário */}
            <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-blue-900 mb-6">Contact Me</h1>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <input name="name" placeholder="Name" className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    <input name="email" type="email" placeholder="Email" className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    <input name="subject" placeholder="Subject" className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    <input name="phone" type="tel" placeholder="Phone" className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <textarea name="message" placeholder="Message" rows={5} className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
                        <button type="submit" className="bg-indigo-400 hover:bg-indigo-600 text-white font-bold px-8 py-4 rounded-lg shadow transition text-lg w-full max-w-xs" disabled={submitting}>Send Message</button>
                    </div>
                </form>
                {statusMessage}
            </div>
        </div>
    );
}