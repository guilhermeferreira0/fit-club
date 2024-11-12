import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ExploreCard from "./ExploreCard";
import { motion } from "framer-motion";

const programs = [
  {
    img: "./images/icons/icon-boxe.png",
    text: "Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional.",
    title: "Strength"
  },
  {
    img: "./images/icons/icon-boxe.png",
    text: "Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional.",
    title: "Strength"
  },
  {
    img: "./images/icons/icon-boxe.png",
    text: "Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional.",
    title: "Strength"
  },
];

export default function ExploreProgram() {
  return (
    <section className="flex flex-col gap-12 w-[97.6%]" id="program">
      <div className="flex justify-between">
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
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.1, delay: index * 0.7 }}
          >
            <ExploreCard 
              img={program.img}
              text={program.text}
              title={program.title}
            />
          </motion.div>
        ))}

      </div>
    </section>
  );
}