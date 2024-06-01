export default function ChatRoomList() {
  const chatRooms = [
    { id: 1, name: "General Chat", lastMessage: "Hey everyone!" },
    {
      id: 2,
      name: "Project Discussion",
      lastMessage: "Deadline is next week.",
    },
    { id: 3, name: "Random", lastMessage: "Anyone up for a game?" },
  ];

  return (
    <div className="flex flex-col gap-4 w-full h-full p-4">
      {chatRooms.map((room) => (
        <div key={room.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-black">{room.name}</h3>
          <p className="text-gray-600">{room.lastMessage}</p>
        </div>
      ))}
    </div>
  );
}
