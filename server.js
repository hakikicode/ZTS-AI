// backend/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors());
app.use(express.json());

app.post('/api/query', async (req, res) => {
  try {
    const { query } = req.body;
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'system', content: 'You are a Zero Trust Security assistant.' }, { role: 'user', content: query }],
    });
    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: 'Error processing request' });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
