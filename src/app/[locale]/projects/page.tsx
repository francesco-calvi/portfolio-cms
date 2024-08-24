import routes from "@/routes";
import Link from "next/link";
import client from "../../../../tina/__generated__/client";

export default async function ProjectsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const postsResponse = await client.queries.projectConnection({
    filter: { lang: { language: { name: { eq: locale } } } },
  });

  const projects = postsResponse.data.projectConnection.edges?.map(
    (project) => {
      return { ...project?.node, slug: project?.node?._sys.filename };
    }
  );

  return (
    <main className="p-4 md:p-6 max-w-screen-lg mx-auto">
      <h1 className="w-fit mx-auto mb-10 text-4xl text-center font-bold border-b-4 border-primary-400 mb-8">
        {locale === "en" ? "Projects" : "Progetti"}
      </h1>
      <ul
        className="grid gap-10"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {projects?.map((project) => (
          <li key={project.slug} className="aspect-square rounded-md">
            <Link href={`${routes.projects[locale]}/${project.slug}`}>
              <article
                className="h-full rounded-md overflow-hidden relative shadow-md shadow-primary-400 hover:shadow-primary-100 duration-100 ease-in-out"
                style={{
                  backgroundImage: `url(${project.thumbnail})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  className="h-full"
                  style={{
                    background:
                      "linear-gradient(45deg, rgba(69, 69, 69, 0.2) 0%, rgba(135, 135, 135, 0.5) 100%)",
                  }}
                >
                  <div className="flex space-x-4 items-center absolute right-0 bottom-0 p-4">
                    <h3 className="font-bold text-2xl">{project.title}</h3>
                    <button className="w-10 h-10 rounded-full bg-white text-primary-400 grid place-items-center hover:text-white hover:bg-primary-300 duration-200 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
