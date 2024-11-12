import PricingCard from "./PricingCard";
import { motion } from 'framer-motion';

const plans = [
  {
    title: "Basic Plan",
    value: 16,
    benefits: ['Smart workout plan', 'At home workout']
  },
  {
    title: "Weekly Plan",
    value: 25,
    benefits: ['PRO Gyms', 'Smart Workout plan', 'At home workouts']
  },
  {
    title: "Monthly Plan",
    value: 45,
    benefits: ['ELITE Gyms & Classes', 'PRO Gyms', 'Smart Workout Plan', 'At home Workout', 'Personal Training']
  },
];

export default function PricingPlan() {
  return (
    <section className="flex flex-col gap-8" id="service">
      <h2 className="font-bold text-snow uppercase text-xl text-center">Our pricing plan</h2>
      <p className="text-darkSlateGray text-sm text-center w-2/3 m-auto">Our pricing comes with various membership tiers, each tailored to cater to different preferences and fitness aspirations.</p>

      <div className="flex gap-7 flex-col md:flex-row justify-center">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.1, delay: index * 0.7 }}
          >
            <PricingCard 
              title={plan.title}
              value={plan.value}
              benefits={plan.benefits}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}