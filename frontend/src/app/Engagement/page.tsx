"use client";
import EmployeeScoreCard from "@/components/employeeScoreCard";
import { Select, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { SelectTrigger } from "@radix-ui/react-select";
import { Inbox, Pencil } from "lucide-react";
import { useState } from "react";

export default function EngagementPage() {
  const [selectedScoreType, setSelectedScoreType] = useState("top");
  return (
    <>
      <h1 className="text-2xl font-bold text-white">Engagement Page</h1>
      <div className="flex h-[calc(100dvh-112px)] justify-between gap-8 mt-8">
        <div className="flex h-full w-[75%] flex-col gap-8">
          <div className="flex flex-col gap-4 h-[50%]">
            <h2 className="text-xl font-medium text-white">Certificate</h2>
            <div className="flex flex-1 rounded-xl relative">
              <img src="/images/certificate-draft.png" alt="certificate" className="object-cover w-full h-[340px] rounded-xl"/>
              <div className="absolute flex justify-center items-center w-full h-full bg-black/70">
                <Pencil />
              </div>
            </div>
          </div>
          <div className="h-[50%] flex flex-col gap-4">
          <Select value={selectedScoreType} onValueChange={setSelectedScoreType}>
            <SelectTrigger className="text-xl font-medium text-white text-left outline-0">
              <SelectValue>
                {selectedScoreType === "top" ? "Top scorers" : "Least scorers"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="w-[200px] bg-black text-white">
              <SelectItem value="top">Top scorers</SelectItem>
              <SelectItem value="least">Least scorers</SelectItem>
            </SelectContent>
          </Select>
            <div className="flex flex-1 gap-8 justify-between">
            <EmployeeScoreCard
              name="Alex Hayes"
              email="hayessophia123@gmail.com"
              phone="0912345678"
              position="Receptionist"
              status="Active"
              picture="/images/profilePic.jpg"
              language="English"
              score={96}
            />

              {/* <EmployeeScoreCard/>
              <EmployeeScoreCard/> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[25%] h-full">
          <h2 className="text-xl font-medium text-white">Feedbacks</h2>
          <div className="flex flex-1 flex-col bg-zinc-900 items-center justify-center gap-8 rounded-xl">
            <Inbox />
            <p>No Feedbacks</p>
          </div>
        </div>
      </div>
    </>
  );
}
