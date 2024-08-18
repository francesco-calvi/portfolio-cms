import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WelcomeHero from "@/components/sections/WelcomeHero";
import React, { Fragment, ReactElement } from "react";
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

  const renderBlock = (block) => {
    let res: null | ReactElement = null;
    switch (block?.__typename) {
      case "PageBlocksWelcome_hero": {
        res = <WelcomeHero {...block} />;
        break;
      }
      case "PageBlocksAbout": {
        res = <About {...block} />;
        break;
      }
      case "PageBlocksServices": {
        res = <Services {...block} />;
        break;
      }
    }
    return <Fragment key={block.__typename}>{res}</Fragment>;
  };

  return <main>{page.blocks?.map(renderBlock)}</main>;
};

export default HomepageScreen;
