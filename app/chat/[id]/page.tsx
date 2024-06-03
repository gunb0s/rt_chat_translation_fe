import ChatMessageList from "@/components/ChatMessageList";

export default async function ChatRoom({ params }: { params: { id: string } }) {
  return <ChatMessageList chatRoomId={params.id} />;
}
