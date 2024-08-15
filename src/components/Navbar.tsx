import Link from "next/link";
import React from "react";

interface Props {
  links?: Array<{
    __typename: "Nav_linksLinks";
    name: string;
    path: string;
  } | null> | null;
}

const Navbar: React.FC<Props> = (props) => {
  const { links } = props;

  return (
    <div className="fixed top-0 w-full z-10 py-4 px-5 bg-black shadow-sm shadow-primary-300">
      <nav>
        <ul className="flex items-center space-x-4">
          {links?.map((link) => (
            <li
              key={link!.path}
              className="font-semibold hover:underline text-lg"
            >
              <Link href={link!.path}>{link!.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
