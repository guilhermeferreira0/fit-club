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
    img: "./images/icons/icon-healthy.png",
    text: "It encompasses a range of activities that improve health, strength, flexibility, and overall well-being.",
    title: "Physical Fitness"
  },
  {
    img: "./images/icons/icon-walk.png",
    text: "Through a combination of workout routines and expert guidance, wel`ll empower you to reach your goals.",
    title: "Fat Lose"
  },
  {
    img: "./images/icons/icon-sacola.png",
    text: "Designed for individuals, our program offers an effective approach to gaining weight in a sustainable manner.",
    title: "Weight Gain"
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
          <button className="border-2 rounded-2xl p-1 w-7 flex items-center justify-center text-snow hover:text-lightSalmon hover:border-lightSalmon">
            <FaArrowLeft 
              size={12}
            />
          </button>
          <button className="border-2 rounded-2xl p-1 w-7 flex items-center justify-center text-snow hover:text-lightSalmon hover:border-lightSalmon">
            <FaArrowRight 
              size={12}
            />
          </button>
        </div>
      </div>
      <div 
         className="w-full grid grid-cols-[repeat(auto-fit,minmax(232px,1fr))] gap-7"
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