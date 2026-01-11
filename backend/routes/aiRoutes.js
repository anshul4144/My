const express = require("express");
const router = express.Router();

router.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "message is required" });
  }

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.GROQAPIKEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content: "You are a smart home-service assistant.",
            },
            {
              role: "user",
              content: message,
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log("Groq response: ", data);

    const reply =
      data?.choices?.[0]?.message?.content ||
      data?.choices?.[0]?.text ||
      data?.choices?.[0]?.delta?.content ||
      "No reply from AI";

    return res.json({
      success: true,
      reply,
    });

  } catch (error) {
    console.error("Groq Error:", error.message);
    return res.status(500).json({ success: false, message: "AI failed" });
  }
});

module.exports = router;
