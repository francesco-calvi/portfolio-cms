import { getLocale } from "@/lib/actions";
import routes from "@/routes";
import Image from "next/image";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { PageBlocksWelcome_Hero } from "../../../tina/__generated__/types";
import Button from "../Button";

const WelcomeHero = (props: PageBlocksWelcome_Hero) => {
  const { message, button_text } = props;
  const locale = getLocale();

  return (
    <section className="h-screen flex justify-center flex-col items-center">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
        <div>
          <TinaMarkdown content={message} components={components} />
        </div>

        <div className="w-full text-center md:w-fit">
          <div className="mx-auto relative w-[192px] h-[192px] grid place-items-center">
            <svg
              id="visual"
              viewBox="0 0 675 900"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
            >
              <g transform="translate(345.6001642379064 442.62758463465053)">
                <path
                  d="M157.7 -270.4C202.9 -247 237 -201.8 258.5 -153C280 -104.3 289 -52.2 279.8 -5.3C270.5 41.5 243.1 83 216.7 123.3C190.3 163.5 164.9 202.6 128.9 237C93 271.4 46.5 301.2 -1.7 304.1C-49.8 307 -99.7 283 -139.5 250.8C-179.3 218.6 -209.2 178.3 -237.1 135.2C-265 92 -291 46 -297.8 -3.9C-304.6 -53.8 -292.2 -107.7 -256.9 -138.1C-221.6 -168.6 -163.6 -175.6 -116.9 -198.2C-70.3 -220.8 -35.2 -258.9 10.5 -277.2C56.2 -295.4 112.5 -293.9 157.7 -270.4"
                  fill="#dedede"
                ></path>
              </g>
            </svg>
            <div className="absolute w-[112px] h-[112px]">
              <Image
                src="/static/images/portrait_cartoon.webp"
                fill
                unoptimized
                alt="Immagine principale"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <Link href={`${routes.projects[locale]}`}>
        <Button text={button_text} variant="primary" />
      </Link>
    </section>
  );
};

export default WelcomeHero;

const components = {
  h1: (props) => (
    <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center">
      {props.children}
    </h1>
  ),
  h2: (props) => (
    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-primary-300 text-center">
      {props.children}
    </h2>
  ),
};
