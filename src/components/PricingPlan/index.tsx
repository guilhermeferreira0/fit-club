import PricingCard from "./PricingCard";

export default function PricingPlan() {
  return (
    <section className="flex flex-col gap-8" id="service">
      <h2 className="font-bold text-snow uppercase text-xl text-center">Our pricing plan</h2>
      <p className="text-darkSlateGray text-sm text-center w-2/3 m-auto">Our pricing comes with various membership tiers, each tailored to cater to different preferences and fitness aspirations.</p>

      <div className="flex gap-7 flex-col md:flex-row justify-center">
        <PricingCard 
          title="Basic Plan"
          value={16}
          benefits={['Smart workout plan', 'At home workout']}
        />
        <PricingCard 
          title="Weekly Plan"
          value={25}
          benefits={['PRO Gyms', 'Smart Workout plan', 'At home workouts']}
        />
        <PricingCard 
          title="Monthly Plan"
          value={45}
          benefits={['ELITE Gyms & Classes', 'PRO Gyms', 'Smart Workout Plan', 'At home Workout', 'Personal Training']}
        />
      </div>
    </section>
  );
}