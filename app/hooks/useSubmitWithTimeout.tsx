import { useState } from "react";

export interface UseSubmitWithTimeoutResult {
    submitting: boolean;
    submit: () => void;
}

export function useSubmitWithTimeout(): UseSubmitWithTimeoutResult {
    const [submitting, setSubmitting] = useState<boolean>(false);

    function submit() {
        setSubmitting(true);
        setTimeout(() => {
            window.location.href = "/logout";
        }, 60000);
    }

    return { submitting, submit };
}
