import { RiDoubleQuotesR } from "react-icons/ri";
import MemberCard from "./MemberCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

enum HandleClickDirectionProps {
  left,
  right
}

const members = [
  {
    profileJob: "Software Developer",
    profileImage: "./images/member.jpg",
    profileName: "Jane Cooper",
    stars: 5,
    text: "What truly sets this gym apart is their expert team of triners. The triners are knowledgeable, approachablem, and genuinely invested in helping members achieve their fitness goals. They take the time to understand individual needs and create personalized workout plans, ensuring maximum results and safety.",
  },
  {
    profileJob: "Backend Developer",
    profileImage: "./images/member.jpg",
    profileName: "Jack Cooper",
    stars: 2,
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores magni consequuntur doloremque, sunt expedita excepturi rerum illo minus quisquam porro repellat commodi culpa, inventore dolore cupiditate voluptatibus maxime possimus obcaecati.',
  },
  {
    profileJob: "Frontend Developer",
    profileImage: "./images/member.jpg",
    profileName: "John Doe",
    stars: 4,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id voluptas sequi ipsam molestias',
  },
];

export default function MemberReview() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleClick = (direction: HandleClickDirectionProps) => {
    if (direction === HandleClickDirectionProps.left) {
      if (scrollIndex === 0) return;
      setScrollIndex(prev => prev - 1);
      return;
    }
    
    if (scrollIndex === (members.length - 1)) {
      setScrollIndex(0);
      return;
    }

    setScrollIndex(prev => prev + 1);
  }

  return (
    <section className="flex flex-col md:flex-row px-80 py-20 gap-7 -mx-64 bg-black lg:px-60" id="community">
      <RiDoubleQuotesR 
        color="orange"
        size={180}
      />
      <div className="flex flex-col gap-8">
        <h2 className="uppercase text-snow text-xl text-start font-semibold">Member review</h2>
        <div className="flex gap-8">
          {members.map((member, index) => (
            <MemberCard 
              active={scrollIndex === index}
              profileJob={member.profileJob}
              profileImage={member.profileImage}
              profileName={member.profileName}
              stars={member.stars}
              text={member.text}
            />
          ))}
        </div>
      </div>
      <div className="flex items-end justify-center gap-5 lg:right-60">
        <button 
          className="text-lightSalmon hover:text-orange-500"
          onClick={handleClick.bind({}, HandleClickDirectionProps.left)}
        >
          <FaArrowLeft 
              size={20}
              />
        </button>
        <button
          className="text-lightSalmon hover:text-orange-500"
          onClick={handleClick.bind({}, HandleClickDirectionProps.right)}
        >
          <FaArrowRight 
              size={20}
            />
        </button>
      </div>
    </section>
  );
}