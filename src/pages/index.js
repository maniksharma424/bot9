import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import MessagingChannel from "@/components/MessagingChannel";
import Inbox from "@/components/Inbox";
import MessageBox from "@/components/MessageBox";
import GeneralinfoBox from "@/components/GeneralinfoBox";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-white w-full h-screen">
      <Navbar />
      <div id="container" className="flex w-full h-[750px]">
        <MessagingChannel />
        <Inbox />
        <MessageBox />
        <GeneralinfoBox/>
      </div>
    </main>
  );
}
