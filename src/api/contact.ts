export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    servicesTypeOfCase: string;
    message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
    const url = "https://753b6b0e9116e25d8e785d3a19ef41.09.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/f1e28b17d4894bb795086de95a0a524d/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=DFelXMiZ-QGp0XLkt5i3Ia9phvxA3pF1-Nmec56MjJk";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "02ee146e-63e6-f011-8544-6045bd04aa30", // Use env variable or placeholder
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
