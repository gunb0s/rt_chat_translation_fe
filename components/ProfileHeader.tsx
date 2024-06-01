import Image from "next/image";
import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";

async function getUser() {
  const session = await getSession();
  if (session.accessToken) {
    const response = await (
      await fetch("http://localhost:8080/user/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
    ).json();

    if (response.data) {
      return response.data;
    }
  }
  notFound();
}

async function Username() {
  //await new Promise((resolve) => setTimeout(resolve, 10000));
  const user = await getUser();
  return (
    <div className="ml-4">
      <h2 className="text-lg font-semibold text-black">{user?.username}</h2>
      <p className="text-sm text-green-500">Active now</p>
    </div>
  );
}

export default function ProfileHeader() {
  const logOut = async () => {
    "use server";
    const session = await getSession();
    session.destroy();
    redirect("/");
  };

  return (
    <div className="flex items-center p-4 bg-purple-200 rounded-lg">
      <Image
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="Profile Picture"
        width={48}
        height={48}
        className="w-12 h-12 rounded-full"
        priority
      />
      <Username />
      <div className="ml-auto">
        <form action={logOut}>
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
        </form>
      </div>
    </div>
  );
}
