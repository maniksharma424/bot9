import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import MessagingChannel from "@/components/MessagingChannel";
import Inbox from "@/components/Inbox";
import MessageBox from "@/components/MessageBox";
import GeneralinfoBox from "@/components/GeneralinfoBox";

const inter = Inter({ subsets: ["latin"] });

export default function Home({messages}) {
  return (
    <main className="bg-white w-full h-screen flex flex-col">
      <div className="w-full h-[65px]">
        <Navbar />
      </div>
      <div
        id="container"
        className="flex-1 flex"
        style={{ minHeight: 0 }} // Allow the container to shrink if needed
      >
        <MessagingChannel />
        <Inbox messages={messages} />
        <MessageBox />
        <GeneralinfoBox />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const messagesData = await import("../../src/messages.json");

  return {
    props: {
      messages: messagesData.default,
    },
  };
}
