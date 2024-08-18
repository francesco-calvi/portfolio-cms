// import { useTranslations } from "next-intl";

import HomepageScreen from "@/screens/HomepageScreen";
import client from "../../../tina/__generated__/client";

export default async function Home({ params: { locale } }) {
  // const t = useTranslations("HomePage");
  const result = await client.queries.page({
    relativePath: `${locale}/home.md`,
  });

  return <HomepageScreen {...result} />;
}
