import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// A list of all locales that are supported
export const locales = ["it", "en"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    // messages: (await import(`./${locale}.json`)).default,
  };
});
