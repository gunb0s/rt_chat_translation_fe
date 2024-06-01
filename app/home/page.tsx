import Head from "next/head";
import ProfileHeader from "@/components/ProfileHeader";
import MyChatList from "@/components/MyChatList";
import ChatRoomList from "@/components/ChatRoomList";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

export default function Home() {
  const createChatRoom = async () => {
    "use server";
    const session = await getSession();
    const response = await (
      await fetch("http://localhost:8080/chat-room", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
    ).json();

    redirect(`/chat/${response.data}`);
  };

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
            <MyChatList />
          </div>
        </div>
        <div className="md:w-2/3 p-4 flex items-start justify-center bg-white relative">
          <form action={createChatRoom}>
            <button className="absolute top-4 right-4 p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </form>
          <div className="w-full h-full p-0">
            <ChatRoomList />
          </div>
        </div>
      </div>
    </div>
  );
}
