import i18nConfig from "@/i18nConfig";
import { cookies } from "next/headers";

export function getLocale() {
  return cookies().get("NEXT_LOCALE")?.value || i18nConfig.defaultLocale;
}
