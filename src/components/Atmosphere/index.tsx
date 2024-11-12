import AtmosphereCard from "./AtmosphereCard";
import { motion } from 'framer-motion';

export default function Atmosphere() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="uppercase text-snow text-2xl text-center">Why join us ?</h2>
      <p className="text-darkSlateGray text-justify">Our diverse membership base creates a friendly and supportive atmosphere, where you can make friends and stay motivated</p>

      <div className="relative w-full flex flex-col items-center justify-center">
        <img 
          src="./images/join.jpg" 
          alt="Atmosphere image" 
          className="w-full h-2/4 -z-50"
        />
        <motion.div 
          className="md:absolute -bottom-[15%] rounded-lg bg-black flex flex-col md:flex-row items-center justify-center md:w-[90%] p-5 gap-4 mt-5 md:mt-0"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <AtmosphereCard 
            icon="./images/icons/icon-person.png"
            title="Personal Trainer"
            text="Unlock your potential with our expert Personal Trainers"
          />
          <AtmosphereCard 
            icon="./images/icons/icon-cam.png"
            title="Practice Sessions"
            text="Elevate yout fitness with practice sessions"
          />
          <AtmosphereCard 
            icon="./images/icons/icon-office.png"
            title="Good Management"
            text="Supportive management, for yout fitness success"
          />
        </motion.div>
      </div>
    </section>
  );
}