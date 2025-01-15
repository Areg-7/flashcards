// pages/api/speech.ts
import textToSpeech from "@google-cloud/text-to-speech";
import fs from "fs";
import util from "util";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const client = new textToSpeech.TextToSpeechClient({
  keyFilename: path.join(process.cwd(), "google-credentials.json"), // Path to your credentials
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required." });
  }

  // Configure the request
  const request = {
    input: { text },
    voice: { languageCode: "en-US", name: "en-US-Wavenet-D" }, // Male motivational voice
    audioConfig: { audioEncoding: "MP3" },
  };

  try {
    const [response] = await client.synthesizeSpeech(request);

    const filePath = path.join(process.cwd(), "public", "audio", `${Date.now()}.mp3`);
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(filePath, response.audioContent, "binary");

    res.status(200).json({ audioUrl: `/audio/${path.basename(filePath)}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
