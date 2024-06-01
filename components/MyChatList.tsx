import Link from "next/link";
import Image from "next/image";
import { getMyChatRoom } from "@/app/home/action";

async function MyChatRoom() {
  const chatRooms = await getMyChatRoom();
  return (
    <>
      {chatRooms?.map((room, index) => (
        <Link
          key={room.id}
          href={`/chat/${room.id}`}
          className="flex items-center p-2 bg-white rounded-lg shadow hover:bg-gray-100"
        >
          <Image
            src={`https://randomuser.me/api/portraits/women/${index + 30}.jpg`}
            alt={`random Avatar`}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full"
            priority
          />
          <div className="ml-4">
            <h4 className="text-md font-semibold text-black">{room.name}</h4>
            <p className="text-sm text-gray-500">{room.lastMessage}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

const MyChatList = () => (
  <div className="p-4">
    <h3 className="text-lg font-semibold mb-4 text-black">Top People</h3>
    <div className="space-y-4">
      <MyChatRoom />
    </div>
  </div>
);

export default MyChatList;
