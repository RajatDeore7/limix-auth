const GOOGLE_SHEETS_API_URL = "https://script.google.com/macros/s/AKfycby_bxs-012oXGgRcUX47A94wyihk5Tmrlahw-kfI3V-F2_SOzvZNjPtkTe7aQl-Ap_X/exec";

export const sendDataToGoogleSheets = async (userData) => {
    try {
        const response = await fetch(GOOGLE_SHEETS_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });

        const result = await response.json();
        console.log("Google Sheets Response:", result);
    } catch (error) {
        console.error("Error sending data to Google Sheets:", error);
    }
};
