const express = require("express");
const router = express.Router();
const { parsePdf } = require("../services/pdfParse");
const { getAnswerFromAI } = require("../services/aiService");
const path = require("path");
const fs = require("fs");

router.post("/upload", async (req, res) => {
  const file = req.files.file;
  const filePath = path.join(__dirname, "../uploads", file.name);
  await file.mv(filePath);
  const text = await parsePdf(filePath);
  res.json({ text });
});

router.post("/ask", async (req, res) => {
  const { text, question } = req.body;
  const answer = await getAnswerFromAI(text, question);
  res.json({ answer });
});

module.exports = router;
