import ChatMessageList from "@/components/ChatMessageList";
import { notFound } from "next/navigation";
import getSession from "@/lib/session";

async function getRoom(chatRoomId: string): Promise<ChatRoom> {
  const session = await getSession();
  const response = await fetch(
    `http://localhost:8080/chat-room/${chatRoomId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    },
  );
  const json = await response.json();
  return json.data;
}
async function getMessages(chatRoomId: string): Promise<Message[]> {
  const session = await getSession();
  const response = await fetch(
    `http://localhost:8080/chat-room/${chatRoomId}/messages`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    },
  );
  const json = await response.json();
  return json.data;
}
async function getUserProfile(): Promise<UserProfile> {
  const session = await getSession();
  const response = await (
    await fetch("http://localhost:8080/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })
  ).json();

  return response.data;
}

interface ChatRoom {
  id: string;
  name?: string;
}

export interface Message {
  id: number;
  sender: UserProfile;
  createdAt: Date;
  payload: string;
}

interface UserProfile {
  id: string;
  username: string;
}

export default async function ChatRoom({ params }: { params: { id: string } }) {
  const room = await getRoom(params.id);
  if (!room) {
    return notFound();
  }
  const initialMessages = await getMessages(params.id);
  const user = await getUserProfile();
  if (!user) {
    return notFound();
  }

  return (
    <ChatMessageList
      chatRoomId={params.id}
      userId={user.id!}
      username={user.username}
      initialMessages={initialMessages}
    />
  );
}
