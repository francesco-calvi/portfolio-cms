import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { PageBlocksServices } from "../../../tina/__generated__/types";

import Button from "../Button";
import ServiceCard from "../ServiceCard";

const Services = (props: PageBlocksServices) => {
  const { title, description, button, services } = props;

  return (
    <section className="min-h-screen py-8 lg:py-16 flex items-center justify-center">
      <div className="mx-auto px-4 max-w-2xl lg:max-w-screen-lg">
        <h2 className="w-fit text-4xl font-bold border-b-4 border-primary-400 mb-8 lg:col-start-2">
          {title}
        </h2>
        <TinaMarkdown content={description} components={components} />

        <div className="my-12 grid gap-4 lg:grid-cols-2">
          {services?.map((service) =>
            service ? (
              <ServiceCard key={service.__typename} {...service} />
            ) : null
          )}
        </div>

        <Link className="block w-fit mt-4 mx-auto" href={`/${button?.path}`}>
          <Button text={button?.name} variant="primary" />
        </Link>
      </div>
    </section>
  );
};

const components = {
  p: (props) => (
    <p className={"text-xl [&>strong]:text-primary-300"}>{props.children}</p>
  ),
};

export default Services;
