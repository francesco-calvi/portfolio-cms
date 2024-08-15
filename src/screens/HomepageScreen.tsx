import WelcomeHero from "@/components/WelcomeHero";
import React from "react";
import { PageQuery } from "../../tina/__generated__/types";

interface Props {
  data: PageQuery;
  errors?:
    | {
        message: string;
        locations: { line: number; column: number }[];
        path: string[];
      }[]
    | undefined;
  variables: { relativePath: string };
  query: string;
}

const HomepageScreen: React.FC<Props> = (props) => {
  const { data } = props;
  const { page } = data;

  return (
    <main>
      {page.blocks?.map((block) => {
        switch (block?.__typename) {
          case "PageBlocksWelcome_hero": {
            return <WelcomeHero {...block} />;
          }
        }
      })}
    </main>
  );
};

export default HomepageScreen;
