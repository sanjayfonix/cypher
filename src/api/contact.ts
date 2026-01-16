import { API_ENDPOINTS, API_KEYS } from "../../global_cyphr_config";

export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    servicesTypeOfCase: string;
    message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
    try {
        const response = await fetch(API_ENDPOINTS.CONTACT_FORM, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": API_KEYS.CONTACT_FORM,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to submit form: ${response.status} ${errorText}`);
        }

        // Power Automate manual triggers might return 202 Accepted or 200 OK
        if (response.status === 202 || response.status === 200) {
            return { success: true };
        }

        return await response.json();
    } catch (error) {
        console.error("Error submitting contact form:", error);
        throw error;
    }
};
