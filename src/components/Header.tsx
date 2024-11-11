import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const links = ['home', 'program', 'service', 'about', 'community'];

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  return (
    <header className='w-full bg-darkSlateGray flex items-center p-4'>
      <img 
        src="./images/logo.png" 
        alt="FitClub Logo" 
        className="w-50"
      />

      <nav className="w-full flex flex-col items-end">
        <div className={`sm:opacity-0 sm:touch-none sm:cursor-default h-24 flex items-center cursor-pointer absolute top-0 right-10 z-30 ${menuIsOpen ? 'max-sm:fixed' : ''}`}
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
          className={`flex flex-col fixed h-screen gap-4 w-2/4 py-20 px-5 backdrop-blur-sm ${menuIsOpen ? '-right-0' : '-right-2/4'} sm:gap-10 sm:flex-row sm:right-32 sm:py-0 sm:backdrop-blur-0`}
          onClick={() => setMenuIsOpen(false)}
        >
          {links.map(link => (
            <li>
              <a href={`/${link}`}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}