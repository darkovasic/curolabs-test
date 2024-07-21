import { OpenTradesResponse } from "@/lib/types";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import { TradeTable } from "./TradeTable";

function Trades({ trades }: { trades: OpenTradesResponse }) {
  return (
    <div className="w-[1036px] bg-primary">
      <div className="flex justify-between h-[54px] w-full px-4">
        <div className="flex gap-4 h-full">
          <div className="flex justify-center items-center gap-1 border-b-[2px] border-b-tab pt-[2px]">
            <div className="text-[14px] leading-[21px] font-medium">
              Open Positions
            </div>
            <div className="flex justify-center items-center w-[16px] h-[18px] bg-counter rounded text-[12px] leading-[18px]">
              {trades?.open_trades.length}
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
        <div className="flex items-center">
          <div className="flex items-center gap-2 h-full">
            <Button className="border-[1px] border-positive text-positive text-[12px] leading-[18px] font-medium h-[26px] py-1 px-3">
              Sync Open Trades
            </Button>
            <Button className="border-[1px] border-positive text-positive text-[12px] leading-[18px] font-medium h-[26px]">
              Close Profits
            </Button>
            <Button className="border-[1px] border-negative text-negative text-[12px] leading-[18px] font-medium h-[26px]">
              Close Losses
            </Button>
            <Button className="border-[1px] border-negative text-negative text-[12px] leading-[18px] font-medium h-[26px]">
              Close All
            </Button>
          </div>
          <div className="flex items-center h-full">
            <div className="flex justify-center px-4 h-[21px]">
              <Separator orientation="vertical" className="bg-secondary" />
            </div>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.9 7L2.09998 7L11.9 7Z" fill="#898587" />
              <path
                d="M11.9 7L2.09998 7"
                stroke="#898587"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <TradeTable />
    </div>
  );
}

export default Trades;
