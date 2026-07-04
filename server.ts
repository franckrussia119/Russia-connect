import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  const distPath = path.join(process.cwd(), "dist");

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  const sendTelegramMessage = async (text: string) => {
    const token = process.env.TELEGRAM_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    if (!token || !chatId) {
      console.log("Telegram Token or Chat ID not configured. Message would have been:\n", text);
      return { success: true, simulated: true };
    }
    
    try {
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "HTML"
        })
      });
      if (!response.ok) {
        const errText = await response.text();
        console.error("Telegram API response error:", errText);
        return { success: false, error: "Telegram API error" };
      }
      return { success: true };
    } catch (err) {
      console.error("Failed to send Telegram message:", err);
      return { success: false, error: "Network error sending to Telegram" };
    }
  };

  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, city, subject, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required" });
    }

    const text = `<b>📩 WEBSITE CONTACT - RussiaConnect</b>\n\n` +
      `<b>Name:</b> ${name}\n` +
      `<b>Email:</b> ${email}\n` +
      `<b>Phone:</b> ${phone || "N/A"}\n` +
      `<b>City:</b> ${city || "N/A"}\n` +
      `<b>Subject:</b> ${subject || "General question"}\n` +
      `<b>Message:</b>\n${message}`;

    const result = await sendTelegramMessage(text);
    return res.json({ success: true, ...result });
  });

  app.post("/api/waitlist", async (req, res) => {
    const { name, email, cityCountry, role } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    const text = `<b>📩 NEW WAITLIST SIGNUP - RussiaConnect</b>\n\n` +
      `<b>Name:</b> ${name}\n` +
      `<b>Email:</b> ${email}\n` +
      `<b>City/Country:</b> ${cityCountry || "N/A"}\n` +
      `<b>Role:</b> ${role || "Both"}`;

    const result = await sendTelegramMessage(text);
    return res.json({ success: true, ...result });
  });

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  } else {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`RussiaConnect website running on port ${PORT}`);
  });
}

startServer().catch(err => {
  console.error("Failed to start:", err);
  process.exit(1);
});
