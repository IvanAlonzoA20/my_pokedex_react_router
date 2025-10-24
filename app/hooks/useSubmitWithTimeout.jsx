import { useState } from "react";

export function useSubmitWithTimeout() {
    const [submitting, setSubmitting] = useState(false);

    function submit() {
        setSubmitting(true);
        setTimeout(() => {
            window.location.href = "/logout";
        }, 60000);
    }

    return { submitting, submit };
}