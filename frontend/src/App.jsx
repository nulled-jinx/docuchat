import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { PaperAirplaneIcon, UploadIcon } from "@heroicons/react/outline";

function App() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const uploadFile = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);
    const res = await axios.post(
      "http://localhost:5000/api/chat/upload",
      formData
    );
    setText(res.data.text);
    setIsUploaded(true);
    setLoading(false);
  };

  const askQuestion = async () => {
    if (!question) return;
    setLoading(true);
    const res = await axios.post("http://localhost:5000/api/chat/ask", {
      text,
      question,
    });
    setAnswer(res.data.answer);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12 bg-no-repeat">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-glass border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-primary mb-3">DocuChat</h1>
        <p className=" text-gray-300 mb-2 text-[14px] font-bold">
          Upload any PDF and start a conversation.
        </p>
        <p className="text-gray-400 mb-6 text-[14px]">
          Get instant answers, smart summaries, and key insights — powered by{" "}
          <span className="text-indigo-400 font-bold">AI</span>.
        </p>

        <div className="flex items-center space-x-4 mb-6">
          <input
            type="file"
            accept="application/pdf"
            className="text-sm bg-gray-800 border border-gray-600 p-2 rounded-lg w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white cursor-pointer"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button
            onClick={uploadFile}
            className="bg-primary hover:bg-indigo-600 p-3 rounded-xl transition cursor-pointer flex items-center justify-between gap-1"
          >
            Upload
            <UploadIcon width={24} />
          </button>
        </div>

        {isUploaded && (
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Ask a question about the document..."
              className="flex-1 bg-black/30 text-white px-4 py-2 rounded-xl border border-gray-600 backdrop-blur-xs focus:outline-none"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button
              onClick={askQuestion}
              className="bg-primary p-3 rounded-xl hover:bg-indigo-600 transition cursor-pointer flex items-center justify-between gap-1"
            >
              Send
              <PaperAirplaneIcon
                className="h-5 w-5 text-white"
                cursor={"pointer"}
              />
            </button>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 p-4 bg-black/20 border border-white/10 rounded-lg min-h-[120px]"
        >
          {loading ? (
            <p className="text-gray-400 animate-pulse">Thinking...</p>
          ) : answer ? (
            <p className="text-white whitespace-pre-wrap">{answer}</p>
          ) : (
            <p className="text-gray-500">Your answer will appear here.</p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
