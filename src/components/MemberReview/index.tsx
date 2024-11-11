import { RiDoubleQuotesR } from "react-icons/ri";
import MemberCard from "./MemberCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function MemberReview() {

  return (
    <section className="relative flex px-80 py-20 gap-7 -mx-64 bg-black lg:px-60" id="community">
      <RiDoubleQuotesR 
        color="orange"
        size={180}
      />
      <div className="flex flex-col gap-8">
        <h2 className="uppercase text-snow text-xl text-start font-semibold">Member review</h2>
        <div className="flex gap-8">
          <MemberCard 
            profileJob="Software Developer"
            profileImage="./images/member.jpg"
            profileName="Jane Cooper"
            stars={5}
            text="What truly sets this gym apart is their expert team of triners. The triners are knowledgeable, approachablem, and genuinely invested in helping members achieve their fitness goals. They take the time to understand individual needs and create personalized workout plans, ensuring maximum results and safety."
          />
        </div>
      </div>
      <div className="absolute bottom-20 right-6 flex items-center justify-center gap-5 lg:right-60">
        <button>
          <FaArrowLeft 
              size={20}
              color="orange"
              />
        </button>
        <button>
          <FaArrowRight 
              size={20}
              color="orange"
            />
        </button>
      </div>
    </section>
  );
}