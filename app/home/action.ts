import getSession from "@/lib/session";
import axios from "axios";

export interface ChatRoomUser {
  id: number;
  username: string;
}

export interface ChatRoom {
  id: number;
  users: ChatRoomUser[];
  name?: string;
  lastMessage?: string;
}

export const getRoomTitle = async (room: ChatRoom) => {
  const session = await getSession();
  const username = session.username;

  return room.name
    ? room.name
    : room.users
        .slice(0, 3)
        .map((user) => user.username)
        .filter((name) => name !== username)
        .join(", ")
        .concat("...");
};

export async function getRecentChatRoom(): Promise<ChatRoom[]> {
  const session = await getSession();

  const axiosResponse = await axios.get<{ data: ChatRoom[] }>(
    "http://localhost:8080/chat-room/recent",
    {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    },
  );

  return axiosResponse.data.data;
}

export async function getMyChatRoom(): Promise<ChatRoom[]> {
  const session = await getSession();

  const axiosResponse = await axios.get<{
    data: ChatRoom[];
  }>("http://localhost:8080/chat-room/my", {
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
    },
  });

  return axiosResponse.data.data;
}
