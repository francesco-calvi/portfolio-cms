import Button from "@/components/Button";
import Image from "next/image";
import { notFound } from "next/navigation";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../../../../tina/__generated__/client";
import { ProjectQuery } from "../../../../../tina/__generated__/types";

interface Props {
  data: ProjectQuery;
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

export default async function ProjectPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const { locale, slug } = params;

  let result: Props | null = null;
  try {
    result = await client.queries.project({
      relativePath: `${locale}/${slug}.md`,
    });    
    if (result?.errors || !result) throw new Error("Error while fetching");
  } catch (error) {
    console.log(error);
    return notFound();
  }

  const {
    data: { project },
  } = result;
  const { title, description, image, link } = project;
  const hasVideo = image.includes("video");

  return (
    <main className="max-w-screen-lg mx-auto py-10 lg:py-14 px-4 text-lg">
      <h1 className="text-5xl lg:text-7xl text-center font-bold mb-16">
        {title}
      </h1>
      {hasVideo ? (
        <video controls muted className="w-full aspect-video">
          <source src={image} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={image}
          alt="Immagine principale"
          width={1200}
          height={600}
          className="object-contain"
        />
      )}
      {link && (
        <a className="block mx-auto w-fit mt-20" href={link} target="_blank">
          <Button variant={"primary"} text="Visita il sito" />
        </a>
      )}
      <TinaMarkdown content={description} components={components} />
    </main>
  );
}

const components = {
  h2: (props) => (
    <h2 className="text-3xl lg:text-4xl font-bold mt-20">{props.children}</h2>
  ),
  h3: (props) => (
    <h3 className="text-2xl lg:text-3xl font-bold mt-20 first-of-type:mt-10">
      {props.children}
    </h3>
  ),
  ul: (props) => (
    <ul className="list-disc pl-4 lg:pl-6 my-6 [&>strong]:font-bold">
      {props.children}
    </ul>
  ),
  p: (props) => {
    const content = props.children.props.content[0];
    if (content.type === "img") {
      return (
        <Image
          className="w-auto h-auto mx-auto my-10 max-w-3xl last-of-type:mb-0"
          src={content.url}
          alt={""}
          width={1200}
          height={600}
          unoptimized
        />
      );
    }
    if (content.type === "a" && !!content.url) {
      return (
        <video controls muted>
          <source src={content.url} type="video/mp4" />
        </video>
      );
    }
    return (
      <p className="my-6 [&>a]:text-primary-300 [&>a]:underline [&>a]:font-semibold">
        {props.children}
      </p>
    );
  },
};
