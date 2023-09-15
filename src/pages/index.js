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
    <main className="bg-white w-full h-screen">
      <div className="w-full h-[65px]">
        <Navbar />
      </div>
      <div id="container" className="flex w-full h-[750px]">
        <MessagingChannel />
        <Inbox messages={messages} />
        <MessageBox />
        <GeneralinfoBox />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  // Fetch messages from messages.json (assuming it's in the root directory)
  const messagesData = await import("../../src/messages.json");

  return {
    props: {
      messages: messagesData.default,
    },
  };
}
