// root/src/app/page.tsx

"use client";
import GptChatWindow from "@/components/GptChatWindow";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

interface Message {
  role: string;
  content: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "Assistant",
      content:
        "Hello, I'm Howie's AI assistant, trained on his professional background. Ask me anything!",
    },
  ]);

  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  async function createIndexAndEmbeddings() {
    try {
      const result = await fetch("/api/setup", {
        method: "POST",
      });
      const json = await result.json();
      console.log("result: ", json);
    } catch (err) {
      console.log("err:", err);
    }
  }
  async function sendQuery() {
    if (!query) return;
    setResult("");
    setMessages((messages) => [...messages, { role: "User", content: query.trim() }]);
    const assistantMessage = { role: "Assistant", content: "" };
    setLoading(true);
    try {
      const result = await fetch("/api/read", {
        method: "POST",
        body: JSON.stringify(query),
      });
      const json = await result.json();
      console.log("result: ", json);
      assistantMessage.content = json.data;
      setMessages((messages) => [...messages, assistantMessage]);
      setQuery('');
      setLoading(false);
    } catch (err) {
      console.log("err:", err);
      setLoading(false);
    }
  }
  return (
    <>
      <div className="pt-20 pl-4 pr-4">
        <>
          <div className="pb-4 overflow-auto h-1/3">
            <GptChatWindow messages={messages} />
          </div>
          <div className="flex-shrink-0 pt-0 relative">
            {" "}
            {/* Add a relative positioning context here */}
            <TextareaAutosize
              className="flex min-h-[50px] overflow-auto w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-white"
              maxRows={10}
              maxLength={250}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendQuery();
                }
              }}
            />
            <button
              onClick={sendQuery}
              disabled={!query}
              className={`absolute right-2 bottom-2 w-6 h-6 rounded-sm ${
                query ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </>
        {/* remove this button from the UI once the final embeddings are created ... */}
        {/* <button onClick={createIndexAndEmbeddings}>
          Create index and embeddings
        </button> */}
      </div>
      {loading && <p>Asking AI ...</p>}

    </>
  );
}
