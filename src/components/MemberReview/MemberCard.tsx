import { IoStarSharp } from "react-icons/io5";

interface MemberCardProps extends React.ComponentPropsWithoutRef<'div'> {
  text: string;
  stars: number;
  profileImage: string;
  profileName: string;
  profileJob: string;
}

export default function MemberCard({ profileJob, profileImage, profileName, stars, text }: MemberCardProps) {
  return (
    <div className="flex flex-col gap-7">
      <p className="text-snow text-justify lg:w-[70%]">{text}</p>
      <div className="flex gap-1">
        {Array.from({length: stars}).map((_, index) => (
          <IoStarSharp 
            key={index}
            color="orange"
          />
        ))}
      </div>
      <div className="flex ">
        <img 
          src={profileImage} 
          alt="Image Profile Member" 
          className="w-16 rounded-full"
        />
        <div className="ml-5">
          <h6 className="text-snow font-semibold text-lg">{profileName}</h6>
          <p className="text-lightGray font-light">{profileJob}</p>
        </div>
      </div>
    </div>
  );
}