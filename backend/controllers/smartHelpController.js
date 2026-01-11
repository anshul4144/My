const Groq = require("groq-sdk");

exports.smartHelp = async (req, res) => {
  try {
    const { problem } = req.body;

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY
    });

    const prompt = `
User home issue: "${problem}"

Return structured:
- Possible Reason
- Service Needed (Electrician/Plumber/Painter/Carpenter/Other)
- Suggested Fix
- Estimated Cost (INR)
- Safety Warning (if any)
`;

    const completion = await groq.chat.completions.create({
      model: "llama3-groq-70b-8192",
      messages: [{ role: "user", content: prompt }]
    });

    res.json({
      success: true,
      output: completion.choices[0].message.content
    });

  } catch (err) {
    console.log("Groq Error:", err.message);
    res.json({ success: false, message: err.message });
  }
};
