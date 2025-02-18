import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import Markdown from "react-markdown";
import axios from "axios";

function App() {
  const [code, setCode] = useState(`function sum(){\n  return 1 + 1;\n}`);
  const [review, setReview] = useState("");

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  async function reviewCode() {
    try {
      const response = await axios.post("http://localhost:5000/ai/get-review", { code });
      setReview(response.data);
    } catch (error) {
      setReview("🚨 Error: Unable to fetch review. Please try again.");
      console.error("Review API Error:", error);
    }
  }

  return (
    <div className="flex flex-col md:flex-row p-6 gap-4 items-start h-screen w-full bg-[#1E201E]">
      {/* Code Editor Section */}
      <div className="relative rounded-md h-1/2 md:h-[99%] w-full md:w-1/2 bg-black p-4 shadow-lg">
        <div className="h-full w-full rounded-md overflow-auto p-4">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => Prism.highlight(code, Prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              border: "none",
              background: "transparent",
              color: "#ffffff",
              fontFamily: "Fira Code, monospace",
              fontSize: "16px",
              lineHeight: "20px",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <button
          onClick={reviewCode}
          className="absolute bottom-[1.5rem] left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#FFF2F2] text-[#2D336B] rounded-md cursor-pointer select-none hover:bg-[#FFDADA] transition"
        >
          🚀 Review Code
        </button>
      </div>

      {/* Review Section (Chatbot Style) */}
      <div className="rounded-md h-1/2 md:h-[99%] w-full md:w-1/2 bg-[#31363F] text-white p-4 shadow-lg flex flex-col">
        <div className="h-full w-full overflow-auto p-4 rounded-md">
          <div className="space-y-4">
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
