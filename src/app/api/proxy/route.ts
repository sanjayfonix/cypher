import axios, { AxiosRequestConfig } from "axios";

export async function GET(request: Request): Promise<Response> {
  const targetUrl = "https://api.osint.industries/v2/request?"; // your client's API endpoint

  try {
    const config: AxiosRequestConfig = {
      headers: {
        'api-key': `42cdda464cbcf354980afe5ee4fb8bc7`, // optional if required
        "accept": "application/json",
      },
     
    };

    const response = await axios.get(targetUrl, config);

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "accept, api-key",
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.error("Proxy error:", error?.response?.data || error.message);

    const status = error?.response?.status || 500;
    const message =
      error?.response?.data?.message || "Failed to fetch data from API";

    return new Response(JSON.stringify({ error: message }), {
      status,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }
}
