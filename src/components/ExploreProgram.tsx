import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ExploreCard from "./ExploreCard";

export default function ExploreProgram() {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex w-full justify-between">
        <h3 className="font-bold text-snow uppercase text-xl">
          Explore our program
        </h3>
        <div className="flex gap-5">
          <button className="border-2 rounded-2xl p-1 w-7 flex items-center justify-center hover:border-lightSalmon">
            <FaArrowLeft 
              size={12}
              color="white"
            />
          </button>
          <button className="border-2 rounded-2xl p-1 w-7 flex items-center justify-center hover:border-lightSalmon">
            <FaArrowRight 
              size={12}
              color="white"
            />
          </button>
        </div>
      </div>
      <div 
         className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-8"
      >
        <ExploreCard 
          img="./images/icons/icon-boxe.png"
          text="Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional."
          title="Strength"
        />
        <ExploreCard 
          img="./images/icons/icon-healthy.png"
          text="Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional."
          title="Strength"
        />
        <ExploreCard 
          img="./images/icons/icon-walk.png"
          text="Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional."
          title="Strength"
        />
        <ExploreCard 
          img="./images/icons/icon-sacola.png"
          text="Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional."
          title="Strength"
        />

      </div>
    </section>
  );
}