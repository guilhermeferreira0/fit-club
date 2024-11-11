import { FaCheck } from "react-icons/fa";

interface PricingCardProsp {
  title: string;
  value: number;
  benefits: string[];
}

export default function PricingCard({ title, value, benefits }: PricingCardProsp) {
  const formatedValue = value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });
  
  return (
    <section className="flex flex-col p-7 bg-black rounded-md shadow-lg shadow-slate-700 h-[70vh] justify-between border-2 border-transparent hover:border-lightSalmon">
      <div className="flex flex-col gap-7">
        <h4 className="font-bold text-snow capitalize">{title}</h4>
        <p>
          <strong className="text-snow text-2xl">{formatedValue}</strong>
        </p>
      <div className="w-full bg-snow h-[1px]"></div>

        <ul className="flex flex-col gap-4">
          {benefits.map((vl, index) => (
            <li
            key={index}
            className="flex items-center justify-start gap-3 text-snow text-sm"
            >
              <FaCheck 
                color="orange"
                className="border-2 border-lightSalmon rounded-lg w-6 h-6 p-1"
              />
              {vl}
            </li>
          ))};
        </ul>
      </div>
      
      <button className="w-full text-lightSalmon border-2 border-lightSalmon px-4 py-2 rounded-md hover:bg-lightSalmon hover:text-snow transition-all">
        Join Now
      </button>
    </section>
  );
}