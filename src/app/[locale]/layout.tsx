import type { Metadata } from "next";
import client from "../../../tina/__generated__/client";

import Navbar from "@/components/Navbar";
import LocaleProvider from "@/lib/context/LocaleProvider";
import StoreProvider from "@/lib/redux/StoreProvider";
import "../globals.css";

export const metadata: Metadata = {
  title: "Francesco Calvi",
  description:
    "Francesco Calvi è uno sviluppatore frontend con anni di esperienza alle spalle, guarda i progetti migliori.",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const {
    data: { nav_links },
  } = await client.queries.nav_links({
    relativePath: `${locale}/nav_links.md`,
  });

  return (
    <html lang={locale}>
      <body className="bg-black text-blue-100">
        <StoreProvider>
          <LocaleProvider locale={locale}>
            <Navbar links={nav_links.links} />
            {children}
          </LocaleProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
