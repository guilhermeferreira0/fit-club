import { FaArrowRight } from "react-icons/fa";

interface ExploreCardProps {
  img: string;
  title: string;
  text: string;
}

export default function ExploreCard({ img, text, title }: ExploreCardProps) {
  return (
    <section className="bg-black shadow-slate-900 shadow-lg flex flex-col gap-3 items-start border-2 border-transparent rounded-md p-4 hover:border-2 hover:border-lightSalmon hover:scale-105 transition-all">
      <img 
        src={img} 
        alt="" 
        className="w-10 bg-lightSalmon p-2 rounded-md"
      />

      <h6 className="text-snow font-bold tracking-wide">{title}</h6>

      <p className="text-snow font-light text-sm">{text}</p>

      <button className="flex justify-center text-snow items-center gap-2 hover:text-lightSalmon">
        Join Now 
        <FaArrowRight 
          size={12}
        />
      </button>
    </section>
  );
}