import { NextRequest } from "next/server";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  if (!code) {
    return new Response(null, {
      status: 400,
    });
  }

  const accessTokenParams = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    client_secret: process.env.GITHUB_CLIENT_SECRET!,
    code,
  }).toString();

  const signUpRequestUrl = `http://localhost:8080/auth/${code}`;
  const response = await fetch(signUpRequestUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  });

  const json = await response.json();

  console.log(json);

  /*
    const accessTokenURL = `https://github.com/login/oauth/access_token?${accessTokenParams}`;
    const accessTokenResponse = await fetch(accessTokenURL, {
        method: "POST",
        headers: {
            Accept: "application/json",
        },
    });
    */

  return redirect("/home");
}
