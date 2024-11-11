import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({children, href}: NavLinkProps) { 
  
  return (
    <li 
      className="text-snow flex items-center capitalize text-sm lg:text-md cursor-pointer"
    >
      <a 
        href={`/#${href}`}
        className="hover:border-b-2"
      >
        {children}
      </a>
    </li>
  );
}