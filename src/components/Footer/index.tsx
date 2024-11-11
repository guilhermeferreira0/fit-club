import { FaFacebookF, FaInstagram, FaTwitch } from "react-icons/fa";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer className="bg-lightBlack gap-24 mt-24 px-12 lg:px-60 grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))]">
      <div className="flex flex-col gap-7">
        <img 
          src="./images/logo.png" 
          alt="Fitclub Logo" 
          className="w-44"
        />
        <p className="text-snow font-light text-sm">Take the first step towards a healthier, stronger you with our unbeatable pricing plans. Let´s sweat, achieve, and conquer togethter!</p>

        <div className="text-lightSalmon flex gap-5">
          <FaFacebookF 
            className="border-2 border-lightSalmon rounded-full w-8 h-8 p-2 hover:bg-coral hover:text-black transition-all cursor-pointer"
          />
          <FaInstagram 
            className="border-2 border-lightSalmon rounded-full w-8 h-8 p-2 hover:bg-coral hover:text-black transition-all cursor-pointer"
          />
          <FaTwitch 
            className="border-2 border-lightSalmon rounded-full w-8 h-8 p-2 hover:bg-coral hover:text-black transition-all cursor-pointer"
          />
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(124px,1fr))]">
        <FooterLink 
          links={['Business', 'Franchise', 'Partnership', 'Network']}
          title="Company"
        />
        <FooterLink 
          title="About Us"
          links={['Blogs', 'Security', 'Careers']}
        />
        <FooterLink 
          title="Contact"
          links={['Contact Us', 'Privacy Policy', 'Terms & Conditions', 'BMI Calculator']}
        />
      </div>
    </footer>
  );
}