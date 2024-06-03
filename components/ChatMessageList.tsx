"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { Message } from "@/app/chat/[id]/page";

interface ChatMessageListProps {
  initialMessages: Message[];
  userId: string;
  chatRoomId: string;
  username: string;
}

export default function ChatMessageList({
  initialMessages,
  userId,
  chatRoomId,
  username,
}: ChatMessageListProps) {
  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setMessage(value);
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  };

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");
    const stompClient = Stomp.over(socket);
    stompClient.connect(
      {},
      () => {
        stompClient.subscribe(`/sub/channel/${chatRoomId}`, (message) => {
          console.log(message);
        });
      },
      () => {
        console.log("Failed to connect to the server");
      },
    );
  }, [chatRoomId]);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-4 bg-white rounded-lg shadow-md h-2/3">
        <div className="flex items-center mb-4 w-full">
          <Image
            src="https://randomuser.me/api/portraits/women/35.jpg"
            alt="Chat Partner"
            width={48}
            height={48}
            className="w-12 h-12 bg-gray-300 rounded-full"
            priority
          />
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-black">{username}</h2>
            <p className="text-sm text-green-500">Active now</p>
          </div>
          <div className="ml-auto">
            <Link href="/">
              <button className="p-2 rounded-full bg-gray-200">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto mb-4 w-full">
          <div className="mb-4">
            <p className="text-sm text-gray-500">28 July 2023</p>
          </div>
          {messages.map((message) => (
            <div key={message.id}>
              {message.user.id === userId ? (
                <div className="mb-4">
                  <p className="text-lg bg-gray-200 p-2 rounded-lg inline-block text-black"></p>
                </div>
              ) : (
                <div className="mb-4 flex flex-col items-end">
                  <p className="text-lg bg-blue-200 p-2 rounded-lg inline-block text-white"></p>
                </div>
              )}
            </div>
          ))}
        </div>
        <form className="w-full mt-4" onSubmit={onSubmit}>
          <div>
            <input
              required
              type="text"
              placeholder="Type a message..."
              onChange={onChange}
              value={message}
              className="w-full text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
