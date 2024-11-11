interface FooterLinkProps {
  title: string;
  links: string[];
}


export default function FooterLink({ links, title }: FooterLinkProps) {
  return (
    <div className="mb-10">
      <h6 className="text-snow font-semibold tracking-wide ">{title}</h6>
      <ul className="flex flex-col gap-5 mt-8">
        {links.map((link, index) => (
          <li
            key={index}
          >
            <a 
              href="/"
              className="text-snow font-light text-sm hover:text-coral transition-all"  
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}