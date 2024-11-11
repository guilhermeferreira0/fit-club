import { ReactNode } from "react";

export default function OrangeButton({children}: {children: ReactNode}) {
  
  return (
    <button className="text-snow bg-lightSalmon px-8 py-3 rounded-md hover:bg-coral hover:scale-105 transition-all">
      {children}
    </button>
  );
}