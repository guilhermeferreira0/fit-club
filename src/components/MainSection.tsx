import OrangeButton from "./OrangeButton";

export default function MainSection() {
  return (
    <section className="flex flex-col md:flex-row" id="home">
      <div className="flex flex-col gap-5 justify-center items-start">
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
      </div>

      <div className="relative w-full">
        <img 
          src="./images/header.png" 
          alt="Body Strong image" 
          className="w-80 m-auto"
        />
        <span className="uppercase absolute -bottom-10 text-[9em] -z-10 text-black font-extrabold md:right-[56%]">Fitness</span>
      </div>

    </section>
  );
}