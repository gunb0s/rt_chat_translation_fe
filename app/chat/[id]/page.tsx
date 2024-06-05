import ChatMessageList from "@/components/ChatMessageList";
import { notFound } from "next/navigation";
import getSession from "@/lib/session";
import axios, { AxiosResponse } from "axios";

async function getRoom(chatRoomId: string): Promise<ChatRoom> {
  const session = await getSession();

  const axiosResponse: AxiosResponse<ChatRoom> = await axios.get<ChatRoom>(
    `http://localhost:8080/chat-room/${chatRoomId}`,
    {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    },
  );

  return axiosResponse.data;
}
async function getMessages(chatRoomId: string): Promise<Message[]> {
  const session = await getSession();

  const axiosResponse = await axios.get<Message[]>(
    `http://localhost:8080/chat-room/${chatRoomId}/messages`,
    {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    },
  );

  return axiosResponse.data;
}
async function getUserProfile(): Promise<UserProfile> {
  const session = await getSession();
  const axiosResponse = await axios.get<UserProfile>(
    "http://localhost:8080/user/me",
    {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    },
  );

  return axiosResponse.data;
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
  const session = await getSession();
  if (!user) {
    return notFound();
  }

  return (
    <ChatMessageList
      chatRoomId={params.id}
      userId={user.id!}
      username={user.username}
      initialMessages={initialMessages}
      accessToken={session.accessToken!}
    />
  );
}
