import React from "react";
import NavLink from "./NavLink";

interface ILinks {
  path: string;
  title: string;
}
export default function MenuOverlay({ links }: { links: ILinks[] }) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}
