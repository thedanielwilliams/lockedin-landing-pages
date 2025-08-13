import RiP2pLine from "../icons/p2p";
import { Header } from "../ui/header";

export function Approach() {
  return (
    <div className="w-full">
      <Header
        tag="Approach"
        title="Solve your focus challenge using LockedIN"
      />

      <div className="w-[93%] mx-auto py-12">
        <div>
          <RiP2pLine color="#72D560" />
          <h3 className="text-[#353131]">Smart Matching</h3>
        </div>
      </div>
    </div>
  );
}