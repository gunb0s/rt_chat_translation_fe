import getSession from "@/lib/session";

export interface ChatRoom {
  id: number;
  usernames: string[];
  name?: string;
  lastMessage: string;
}

export async function getRecentChatRoom(): Promise<ChatRoom[]> {
  const session = await getSession();
  const promise = await fetch("http://localhost:8080/chat-room/recent", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
    },
  });
  const response = await promise.json();

  return response.data;
}

export async function getMyChatRoom(): Promise<ChatRoom[]> {
  const session = await getSession();
  const promise = await fetch("http://localhost:8080/chat-room/my", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
    },
  });
  const response = await promise.json();

  return response.data;
}
