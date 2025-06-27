export default async function handler(req, res) {
  const { url } = req.query;

  if (!url || !url.startsWith("https://linkvertise.com/")) {
    return res.status(400).json({ error: "Invalid or missing Linkvertise URL." });
  }

  try {
    const apiUrl = `https://bypass.pm/bypass2?url=${encodeURIComponent(url)}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.success || !data.destination) {
      return res.status(500).json({ error: "Bypass failed or invalid response." });
    }

    return res.status(200).json({ destination: data.destination });
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong.", detail: error.message });
  }
}
