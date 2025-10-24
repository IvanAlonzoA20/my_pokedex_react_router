import Contact from "../hooks/contactUs.form";
import AppLayout from "../layouts/AppLayout";

export { action } from "../hooks/contactUs.form";

export default function ContactUs() {
    return (
        <AppLayout>
            <Contact />
        </AppLayout>
    );
}
