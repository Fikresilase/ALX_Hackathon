import { BriefcaseBusiness, Languages, Mail, Phone } from "lucide-react";

interface EmployeeScoreCardProps {
  name: string;
  email: string;
  phone: string;
  position: string;
  status: "Active" | "Inactive";
  picture: string;
  language: string;
  score: number;
}

export default function EmployeeScoreCard({
  name,
  email,
  phone,
  position,
  status,
  picture,
  language,
  score,
}: EmployeeScoreCardProps) {
  return (
    <div className="flex flex-col gap-4 p-4 w-1/3 rounded-lg bg-zinc-900">
      <div className="flex gap-4 items-center">
        <img src={picture} className="object-cover rounded-full size-24" alt={`${name} profile`} />
        <div className="flex flex-col gap-2">
          <p className="text-lg text-white font-black">{name}</p>
          <div className="flex items-center gap-2">
            <Mail className="size-4 text-[#4cb657]" />
            <p className="text-sm text-white">{email}</p>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="size-4 text-[#4cb657]" />
            <p className="text-sm text-white">{phone}</p>
          </div>
        </div>
      </div>

      <div className="flex text-sm items-center gap-4">
        <span className={`size-3 rounded-full ${status === "Active" ? "bg-green-500" : "bg-red-500"}`}></span>
        <p className="text-white">{status}</p>
        <p>|</p>
        <BriefcaseBusiness className="size-4 text-[#4cb657]" />
        <p className="text-white">{position}</p>
      </div>

      <div className="flex items-center w-full gap-18 justify-center">
        <div className="flex flex-col gap-4 items-center">
          <Languages className="size-12 text-[#4cb657]" />
          <p className="font-black text-xl">{language}</p>
        </div>
        <div className="flex flex-col justify-center items-center size-36 rounded-full bg-zinc-800">
          <p className="text-xs">score</p>
          <p className="font-bold text-5xl text-green-500">{score}</p>
        </div>
      </div>
    </div>
  );
}
