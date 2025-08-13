import { RiP2pLine } from "../icons/p2p";
import { Goals } from "../icons/goals";
import { GameHandle } from "../icons/gameHandle";
import { Header } from "../ui/header";
import Image from "next/image";

const data = [
  {
    id: 1,
    icon: RiP2pLine,
    title: "Smart Matching",
    description:
      "Get paired with the perfect accountability partner based on your goals and schedule.",
  },
  {
    id: 2,
    icon: Goals,
    title: "Goal Tracking",
    description:
      "Break down big goals into manageable sessions with visual progress tracking.",
  },
  {
    id: 3,
    icon: GameHandle,
    title: "Gamified Progress",
    description:
      "Earn badges, climb leaderboards, and unlock exclusive rewards as you level up.",
  },
];

export function Features() {
  return (
    <div className="w-full" id="features">
      <Header
        tag="Features"
        title="Everything You Need to Lock In"
        description="Powerful features designed to turn your solo grind into a shared journey of success."
      />

      <div className="w-[93%] mx-auto py-12 mt-8">
        <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-start">
          <div className="w-full md:max-w-[480px] bg-[#F5F5F5] border border-[#E7E4E4] rounded-xl">
            <div className="w-full h-[254px] rounded-2xl">

            </div>
          </div>

          <div className="w-full md:max-w-[808px] bg-[#F5F5F5] border border-[#E7E4E4] rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}