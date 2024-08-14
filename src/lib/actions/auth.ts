import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { callApi } from "../api";

const expiresIn = 1000 * 60 * 60 * 24 * 30;
const authKey = "@auth-key";

export async function login(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");
  const params = {
    body: { username, password },
  };

  const response = await callApi("POST", "/auth/login/", params);

  if (response?.status === 200) {
    const token = response?.response.key;

    cookies().set(authKey, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(Date.now() + expiresIn),
      sameSite: "strict",
      path: "/",
    });
  }
}

export async function logout() {
  cookies().delete(authKey);
  redirect("/");
}

export function getAuthToken() {
  return cookies().get(authKey)?.value;
}
