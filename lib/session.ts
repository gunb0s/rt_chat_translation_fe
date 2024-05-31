import { cookies } from "next/headers";
import { getIronSession } from "iron-session";

interface SessionContent {
  accessToken?: string;
}

export default function getSession() {
  return getIronSession<SessionContent>(cookies(), {
    cookieName: "watermelon-chat",
    password: process.env.COOKIE_PASSWORD!,
  });
}
