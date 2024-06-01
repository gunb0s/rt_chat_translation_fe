import { getRecentChatRoom } from "@/app/home/action";
import Link from "next/link";

async function RecentChatRoom() {
  const chatRooms = await getRecentChatRoom();
  return (
    <>
      {chatRooms?.map((room) => (
        <Link
          key={room.id}
          href={`/chat/${room.id}`}
          className="p-4 bg-gray-100 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-semibold text-black">{room.name}</h3>
          <p className="text-gray-600">{room.lastMessage}</p>
        </Link>
      ))}
    </>
  );
}

export default function ChatRoomList() {
  return (
    <div className="flex flex-col gap-4 w-full h-full p-4">
      <RecentChatRoom />
    </div>
  );
}
