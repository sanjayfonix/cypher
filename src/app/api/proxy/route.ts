import axios, { AxiosRequestConfig } from "axios";
import { NextRequest } from "next/server";

const OSINT_API_BASE_URL = "https://api.osint.industries/v2/request";
const OSINT_API_KEY = process.env.OSINT_API_KEY || "42cdda464cbcf354980afe5ee4fb8bc7";

// Handle CORS preflight requests
export async function OPTIONS(request: Request): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, api-key, accept",
      "Access-Control-Max-Age": "86400",
    },
  });
}

export async function GET(request: NextRequest): Promise<Response> {
  try {
    // Get query parameters from the request
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get("type");
    const query = searchParams.get("query");

    // Validate required parameters
    if (!type || !query) {
      return new Response(
        JSON.stringify({ error: "Missing required parameters: type and query are required" }),
        {
          status: 400,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Build the target URL with query parameters
    const targetUrl = `${OSINT_API_BASE_URL}?type=${encodeURIComponent(type)}&query=${encodeURIComponent(query)}`;

    // Make request to OSINT API
    const config: AxiosRequestConfig = {
      headers: {
        "api-key": OSINT_API_KEY,
        "accept": "application/json",
      },
    };

    const response = await axios.get(targetUrl, config);

    // Return successful response with CORS headers
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, api-key, accept",
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.error("Proxy error:", error?.response?.data || error.message);

    const status = error?.response?.status || 500;
    const message =
      error?.response?.data?.message || error?.message || "Failed to fetch data from OSINT API";

    return new Response(
      JSON.stringify({
        error: message,
        details: error?.response?.data || null,
      }),
      {
        status,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
  }
}
