const axios = require("axios");
require("dotenv").config();

async function getAnswerFromAI(context, question) {
  const prompt = `You are reading the following document:\n\n${context}\n\nNow answer the question:\n${question}`;

  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "mistralai/mistral-7b-instruct",
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "http://localhost",
        "X-Title": "MistralApp",
      },
    }
  );

  return response.data.choices[0].message.content.trim();
}

module.exports = { getAnswerFromAI };
