import { OpenTradesResponse } from "@/lib/types";
import { Button } from "./ui/button";

function Trades({ trades }: { trades: OpenTradesResponse }) {
  return (
    <div className="h-[303px] w-[1036px] bg-primary">
      <div className="flex justify-between h-[54px] w-full py-6 px-4">
        <div className="flex gap-4">
          <div className="flex justify-center items-center gap-1">
            <div className="text-[14px] leading-[21px] font-medium">
              Open Positions
            </div>
            <div className="flex justify-center items-center w-[16px] h-[18px] bg-counter rounded text-[12px] leading-[18px]">
              4
            </div>
          </div>
          <div className="flex justify-center items-center gap-1">
            <div className="text-[14px] leading-[21px] font-medium text-secondary-foreground">
              Open Orders
            </div>
            <div className="flex justify-center items-center w-[16px] h-[18px] bg-counter rounded text-[12px] leading-[18px]">
              4
            </div>
          </div>
          <div className="flex justify-center items-center gap-1">
            <div className="text-[14px] leading-[21px] font-medium text-secondary-foreground">
              Order History
            </div>
            <div className="flex justify-center items-center w-[16px] h-[18px] bg-counter rounded text-[12px] leading-[18px]">
              4
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Trades;
