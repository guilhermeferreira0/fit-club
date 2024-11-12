import OrangeButton from "./OrangeButton";
import { motion } from 'framer-motion';

export default function BookClass() {
  return (
    <motion.section 
      className="flex flex-col md:flex-row gap-5" id="about"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}  
    >
      <div className="relative w-[80%] md:w-2/4 flex justify-center items-center md:items-end md:justify-end">
        <img 
          src="./images/class-1.jpg" 
          alt="Book Image" 
          className="rounded-md h-full w-[90%] bg-contain"
        />
        <img 
          src="./images/class-2.jpg" 
          alt="Book Image" 
          className="w-2/4 absolute left-0 top-[80%] md:top-[70%] lg:top-[80%] rounded-md"
        />
      </div>
      <div className="flex flex-col gap-6 items-start mt-20 md:mt-0 md:w-2/4">
        <h2 className="uppercase text-snow text-3xl">The class you will get here</h2>
        <p className="text-darkSlateGray text-justify text-sm xl:text-lg">Led by our team of expert and motivational instructors, 'The Class You Will Get Here' is a high-energy, results-driven session that combines a perfect blend of cardio, strength training, and functional exercises. Each class is carefully curated to keep you engaged and challenged ensuring you never hit a plateau in your fitness endeavors.</p>

        <OrangeButton>
          Book a Class
        </OrangeButton>
      </div>
    </motion.section>
  );
}