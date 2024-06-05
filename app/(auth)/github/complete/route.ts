import { NextRequest } from "next/server";
import { redirect } from "next/navigation";
import getSession from "@/lib/session";
import axios from "axios";

interface UserAuth {
  accessToken: string;
  userId: string;
  username: string;
}
export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  if (!code) {
    return new Response(null, {
      status: 400,
    });
  }

  const signUpRequestUrl = `http://localhost:8080/auth?code=${code}&resource_server=GITHUB`;
  const {
    data: { data },
  } = await axios.post<{ data: UserAuth }>(signUpRequestUrl, {
    headers: {
      Accept: "application/json",
    },
  });

  const session = await getSession();
  session.accessToken = data.accessToken;
  session.userId = data.userId;
  session.username = data.username;
  await session.save();

  return redirect("/home");
}
