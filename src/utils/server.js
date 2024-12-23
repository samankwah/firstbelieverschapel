import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAIApi(
  new Configuration({ apiKey: "your_openai_api_key" })
);

app.post("/api/chatbot", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `You are a chatbot for a church. Answer the following question clearly and concisely:\n\n${message}`,
      max_tokens: 100,
    });
    res.json({ reply: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    res.status(500).json({ error: "Failed to fetch response from chatbot." });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
