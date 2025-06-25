export default async function handler(req, res) {
  const target = req.query.url;
  if (!target) {
    return res.status(400).json({ error: "Missing 'url' query parameter" });
  }

  try {
    const response = await fetch(target, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const text = await response.text();
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch content", details: err.message });
  }
}
