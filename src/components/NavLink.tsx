import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({children, href}: NavLinkProps) { 
  
  return (
    <li className="">
      <a href={href}>
        {children}
      </a>
    </li>
  );
}