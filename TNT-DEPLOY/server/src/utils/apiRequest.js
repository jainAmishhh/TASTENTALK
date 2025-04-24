// src/utils/apiRequest.js
export const apiRequest = async (url, method, body = null) => {
  try {
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : null,
    });

    const data = await res.json();
    console.log("API response:", data); // ✅ Debug info
    return data;
  } catch (err) {
    console.error("API error:", err); // ✅ Show full error in console
    throw err;
  }
};
