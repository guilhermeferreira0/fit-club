import OrangeButton from "./OrangeButton";
import { motion } from 'framer-motion';

export default function MainSection() {
  return (
    <section className="flex flex-col md:flex-row" id="home">
      <motion.div 
        className="flex flex-col gap-5 justify-center items-start"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h4 
          className="text-lightSalmon uppercase font-semibold text-sm"
        >
          Best fitness in the town
        </h4>
        <h1
          id="text-transparent"
          className="uppercase text-[3em] text-transparent tracking-wider font-bold"
        >
          Make <strong className="text-snow">Your body shape</strong> 
        </h1>

        <p className="text-snow text-justify">Unleash your potential and embark on a journey towards a stronger, fitter, and more confident you. Sign up for 'Make Your Body Shape' now and witness the incredible transformation your body is capable of!</p>
        <OrangeButton>
          Get Started
        </OrangeButton>
      </motion.div>


      <motion.div 
        className="relative w-full"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <img 
          src="./images/header.png" 
          alt="Body Strong image" 
          className="w-80 m-auto"
        />
        <span 
          className="uppercase absolute -bottom-10  text-[4em] md:text-[6.7em] lg:text-[9em] -z-10 text-black font-extrabold md:right-[56%]"
        >
          Fitness
        </span>
      </motion.div>

    </section>
  );
}