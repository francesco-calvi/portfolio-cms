"use client";

import Image from "next/image";
import { useRef } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
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

export default function AboutPageScreen(props: Props) {
  const { data } = props;
  const { page } = data;
  const block = page?.blocks?.[0] as any;

  const age = useRef(new Date().getFullYear() - 1996);

  return (
    <section id="about" className="py-20">
      <div className="mx-auto px-4">
        <div className="relative lg:w-[480px] lg:h-[70vh] lg:max-h-[500px]">
          <h2 className="text-4xl mb-6">{page.title}</h2>
          <div
            style={{ boxShadow: "inset 0 0 30px -15px" }}
            className="w-full rounded-[12px] flex flex-col space-y-4 p-4"
          >
            <div className="flex gap-5 items-center w-full pl-1">
              <div className="relative w-12 h-12">
                <Image
                  fill
                  src="/static/images/portrait.webp"
                  alt="Immagine profilo"
                  className="object-cover rounded-full w-full h-full opacity-90"
                  priority
                />
              </div>
              <div>
                <p className="font-semibold text-lg tracking-wider">
                  Francesco Calvi
                </p>
                <span className="block font-medium">
                  {age.current}, {block.nation}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-6 mt-4 text-lg">
            <TinaMarkdown content={block.body} />
          </div>
        </div>

        {/* <div className="mt-16">
          <h2 className="text-4xl mb-6">
            <span className="text-primary">My</span> skills
          </h2>
          <div className="grid hidden lg:grid grid-cols-4 gap-4">
            {renderLogos}
          </div>
          <div className="block lg:hidden">
            <div className="items flex items-center gap-5 w-fit">
              {renderLogos}
              {renderLogos}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
