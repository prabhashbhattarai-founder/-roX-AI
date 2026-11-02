export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body || {};

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Please enter a message." });
    }

    // Temporary response until the real model is connected.
    return res.status(200).json({
      reply: `ßroX AI received: ${message.trim()}`,
      status: "prototype"
    });
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong." });
  }
}
