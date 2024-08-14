import { getAuthToken } from "@/lib/actions";
import StoreProvider from "@/lib/redux/StoreProvider";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import TokenProvider from "../TokenProvider";
import "../globals.css";

export const metadata: Metadata = {
  title: "Al.ta Cucina Template",
  description: "Generated using Al.ta Cucina template",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const token = getAuthToken();

  return (
    <html lang={locale}>
      <body>
        <StoreProvider>
          <TokenProvider token={token}>
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
          </TokenProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
