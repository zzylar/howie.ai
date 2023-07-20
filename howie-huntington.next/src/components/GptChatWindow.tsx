import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const GptChatWindow = () => {
  const data =
    "sdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; jsdflkj sl;dfjsaldjf alsdfj lasdfl; j";
  return (
    <>
      <Card className="w-full min-w-min min-h-[50vh] md:min-h-full overflow-auto">
        <CardContent className="lg:px-20 p-10 text-left text-sm">
          <p>{data}</p>
          <p>{data}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default GptChatWindow;
