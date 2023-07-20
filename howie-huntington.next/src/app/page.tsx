// root/src/app/page.tsx
import GptChatWindow from "@/components/GptChatWindow";
import GptTextInput from "@/components/GptTextInput";

export default function Home() {
  return (
    <>
      <section className="w-full h-full flex bg-white pt-14">
        <div className="flex h-5/6 justify-center w-full">
          <div className="flex p-14 w-full h-full flex-col">
            <GptChatWindow />
            <div className="mt-10 h-14">
              <GptTextInput />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
