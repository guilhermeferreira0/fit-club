interface AtmosphereCard {
  title: string;
  text: string;
  icon: string;
}

export default function AtmosphereCard({ title, text, icon }: AtmosphereCard) {
  return (
    <div className="flex items-start justify-start w-full gap-4">
      <img 
        src={icon} 
        alt="Icon Atmosphere" 
        className="w-10 bg-lightSalmon p-2 rounded-md"
      />
      <div>
        <h6 className="text-snow font-semibold tracking-wide">{title}</h6>
        <p className="text-darkSlateGray text-sm">{text}</p>
      </div>

    </div>
  );
}