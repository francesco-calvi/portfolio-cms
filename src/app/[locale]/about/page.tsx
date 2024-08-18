import AboutPageScreen from "@/screens/AboutPageScreen";
import client from "../../../../tina/__generated__/client";

export default async function AboutPage({ params: { locale } }) {
  const result = await client.queries.page({
    relativePath: `${locale}/about.md`,
  });

  return <AboutPageScreen {...result} />;
}
