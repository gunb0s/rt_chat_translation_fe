import Head from "next/head";
import ProfileHeader from "@/components/ProfileHeader";
import ChatList from "@/components/ChatList";
import ChatRoomList from "@/components/ChatRoomList";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-200">
      <Head>
        <title>Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full max-w-5xl md:h-5/6 flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/3 bg-gray-100 p-4 flex flex-col">
          <ProfileHeader />
          <div className="flex-grow overflow-y-auto mt-4">
            <ChatList />
          </div>
        </div>
        <div className="md:w-2/3 p-4 flex items-start justify-center bg-white">
          <div className="w-full h-full p-0">
            <ChatRoomList />
          </div>
        </div>
      </div>
    </div>
  );
}
