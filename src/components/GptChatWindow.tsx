import React, { useRef, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Message {
  role: string;
  content: string;
}

interface Props {
  messages: Message[];
}
const GptChatWindow: React.FC<Props> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Card className="w-full min-w-m max-h-[40vh] min-h-[40vh] overflow-auto">
        {messages.map((message, index) => (
          <CardContent key={index} className={`lg:px-20 pt-6 text-left text-sm`}>
            <CardTitle>{message.role}</CardTitle>
            <CardDescription>{message.content}</CardDescription>
          </CardContent>
        ))}
        <div ref={messagesEndRef} /> {/* This div will scroll into view whenever a new message is added */}
      </Card>
    </>
  );
};

export default GptChatWindow;
