import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Message {
  user: string;
  content: string;
}

interface Props {
  messages: Message[];
}
const GptChatWindow: React.FC<Props> = ({ messages }) => {
  return (
    <>
      <Card className="w-full min-w-min min-h-[40vh] overflow-auto">
        {messages.map((message, index) => (
          <CardContent key={index} className="lg:px-20 p-10 text-left text-sm">
            <CardTitle>{message.user}</CardTitle>
            <CardDescription>{message.content}</CardDescription>
          </CardContent>
        ))}
      </Card>
    </>
  );
};

export default GptChatWindow;
