import { NextRequest } from "next/server";
import { redirect } from "next/navigation";
import getSession from "@/lib/session";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  if (!code) {
    return new Response(null, {
      status: 400,
    });
  }

  const signUpRequestUrl = `http://localhost:8080/auth?code=${code}&resource_server=GITHUB`;
  const response = await fetch(signUpRequestUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  });

  const accessToken = await response.text();
  const session = await getSession();
  session.accessToken = accessToken;
  await session.save();

  return redirect("/home");
}
