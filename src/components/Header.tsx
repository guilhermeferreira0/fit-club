import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import NavLink from "./NavLink";
import OrangeButton from "./OrangeButton";

const links = ['home', 'program', 'service', 'about', 'community'];

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  return (
    <header className='w-full flex items-center py-6'>
      <img 
        src="./images/logo.png" 
        alt="FitClub Logo" 
        className="w-50"
      />

      <nav className="w-full flex items-end relative z-50">
        <div className={`md:opacity-0 md:touch-none md:cursor-default h-24 flex items-center cursor-pointer absolute -top-10 right-10 z-30 ${menuIsOpen ? 'max-md:fixed top-2' : ''}`}
        onClick={() => setMenuIsOpen(prev => !prev)}>
          {menuIsOpen ?  
            <MdClose 
              size={24}
            />
            :
            <MdMenu 
              size={24}
            />
          }
        </div>
        <ul
          className={`flex gap-3 md:gap-7 w-full justify-evenly
          max-md:flex-col max-md:fixed max-md:top-0 max-md:backdrop-blur-xl max-md:min-h-screen max-md:w-64 max-md:py-20 max-md:px-5 ${menuIsOpen ? 'max-md:-right-0' : 'max-md:-right-64'} transition-all`}
          onClick={() => setMenuIsOpen(false)}
        >
          {links.map((link, index) => (
            
            <NavLink
              key={index}
              href={link}
            >
              {link}
            </NavLink>
          ))}
          <OrangeButton>
            Join Now
          </OrangeButton>
        </ul>
      </nav>
    </header>
  );
}