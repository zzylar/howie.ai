// root/src/app/page.tsx

"use client";
import GptChatWindow from "@/components/GptChatWindow";
import GptTextInput from "@/components/GptTextInput";
import { useEffect, useState } from "react";

interface Message {
  user: string;
  content: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/chat");
        const response = await res.json();
        setMessages(response.data);
      } catch (error) {
        console.error("Error:", error);
        setMessages([{ user: "Error", content: "An error occurred" }]);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <div className="p-14 pb-8">
        <GptChatWindow messages={messages} />
      </div>
      <div className="flex-shrink-0 p-14 pt-0">
        <GptTextInput />
      </div>
    </>
  );
}
