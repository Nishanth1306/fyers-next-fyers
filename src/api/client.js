export async function get(url) {
  try {
    const res = await fetch(url, { method: "GET" });
    return await res.json();
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export async function post(url, body) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (err) {
    return { success: false, error: err.message };
  }
}
