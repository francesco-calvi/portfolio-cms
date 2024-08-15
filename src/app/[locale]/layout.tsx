import Navbar from "@/components/Navbar";
import { getAuthToken } from "@/lib/actions";
import StoreProvider from "@/lib/redux/StoreProvider";
import type { Metadata } from "next";
import client from "../../../tina/__generated__/client";
import TokenProvider from "../TokenProvider";
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
  const token = getAuthToken();

  const {
    data: { nav_links },
  } = await client.queries.nav_links({
    relativePath: `${locale}/nav_links.md`,
  });

  return (
    <html lang={locale}>
      <body className="bg-black text-blue-100">
        <StoreProvider>
          <TokenProvider token={token}>
            <Navbar links={nav_links.links} />
            {children}
          </TokenProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
