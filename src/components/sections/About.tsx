"use client";

import Image from "next/image";
import { useContext, useRef } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { PageBlocksAbout } from "../../../tina/__generated__/types";

import { LocaleContext } from "@/lib/context/LocaleProvider";
import Button from "../Button";

const About = (props: PageBlocksAbout) => {
  const { nation, body, title, button_text } = props;
  const age = useRef(new Date().getFullYear() - 1996);
  const locale = useContext(LocaleContext);

  return (
    <section
      id="about"
      className="min-h-screen py-8 lg:py-16 bg-black-100 rounded-t-3xl flex items-center justify-center"
    >
      <div className="mx-auto px-4 max-w-2xl lg:max-w-screen-lg">
        <div className="grid columns-2 gap-x-16">
          <h2 className="w-fit text-4xl font-bold border-b-4 border-primary-400 mb-8 lg:col-start-2">
            {title}
          </h2>
          <div className="lg:col-start-1">
            <div
              style={{ boxShadow: "inset 0 0 30px -15px" }}
              className="w-full rounded-[12px] flex flex-col space-y-4 p-4 lg:rounded-full lg:p-0"
            >
              <div className="flex gap-5 items-center w-full lg:flex-col lg:translate-x-4 lg:translate-y-4">
                <div className="relative w-12 h-12 lg:w-44 lg:h-44 rounded-full overflow-hidden">
                  <Image
                    fill
                    src="/static/images/portrait.webp"
                    alt="Immagine profilo"
                    className="object-cover"
                  />
                </div>
                <div className="lg:hidden">
                  <p className="font-semibold text-lg tracking-wider">
                    Francesco Calvi
                  </p>
                  <span className="block font-medium">
                    {age.current}, {nation}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-start-2 max-w-2xl">
            <div className="flex flex-col space-y-6 mt-4 text-lg">
              <TinaMarkdown content={body} components={components} />
            </div>

            <a
              className="block w-fit mt-4"
              href={`/static/Francesco_Calvi_CV_${locale}.pdf`}
              download
            >
              <Button text={button_text} variant="secondary" />
            </a>
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
};

const components = {
  p: (props) => (
    <p className={"text-xl [&>strong]:text-primary-300"}>{props.children}</p>
  ),
};

export default About;
