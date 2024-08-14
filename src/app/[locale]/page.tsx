// import { useTranslations } from "next-intl";

import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../../tina/__generated__/client";

export default async function Home({ params: { locale } }) {
  // const t = useTranslations("HomePage");
  const { data } = await client.queries.post({
    relativePath: `${locale}/welcome.md`,
  });
  const { body } = data.post;

  return (
    <main className="min-h-full p-24">
      <TinaMarkdown content={body} components={components} />
    </main>
  );
}

const components = {
  h1: (props) => <h1 className="font-bold text-4xl">{props.children}</h1>,
  p: (props) => <p className="text-lg mb-10">{props.children}</p>,
};
