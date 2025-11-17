interface SearchParams {
  query: string;
  OstIndAKey?: string;
}

/**
 * Fetches phone search results from OSINT API via Next.js proxy route
 * This avoids CORS issues by making the request server-side
 */
export const fetchPhoneSearchResult = async (params: SearchParams) => {
  try {
    // Use Next.js API proxy route instead of direct API call
    const proxyUrl = `/api/proxy?type=phone&query=${encodeURIComponent(params.query)}`;
    
    console.log('Calling proxy route:', proxyUrl);
    
    const response = await fetch(proxyUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching phone search result:", error);
    throw error; // Re-throw to handle in component if needed
  }
};

/**
 * Fetches email search results from OSINT API via Next.js proxy route
 * This avoids CORS issues by making the request server-side
 */
export const fetchEmailSearchResult = async (params: SearchParams) => {
  try {
    // Use Next.js API proxy route instead of direct API call
    const proxyUrl = `/api/proxy?type=email&query=${encodeURIComponent(params.query)}`;
    
    console.log('Calling proxy route:', proxyUrl);
    
    const response = await fetch(proxyUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching email search result:", error);
    throw error; // Re-throw to handle in component if needed
  }
};

/**
 * Fetches name/username search results from OSINT API via Next.js proxy route
 * This avoids CORS issues by making the request server-side
 */
export const fetchNameSearchResult = async (params: SearchParams) => {
  try {
    // Use Next.js API proxy route instead of direct API call
    const proxyUrl = `/api/proxy?type=name&query=${encodeURIComponent(params.query)}`;
    
    console.log('Calling proxy route:', proxyUrl);
    
    const response = await fetch(proxyUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching name search result:", error);
    throw error; // Re-throw to handle in component if needed
  }
};