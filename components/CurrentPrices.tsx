import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ChevronDown from "./icons/ChevronDown";
import { current_prices } from "@/lib/data";

function CurrentPrices() {
  const priceOptions = Object.entries(current_prices?.prices[0]).map(
    ([currencyPair, value]) => ({
      currencyPair,
      value,
    })
  );

  return (
    <div className="w-[360px] h-fit bg-primary">
      <Select defaultValue="EURUSD">
        <SelectTrigger className="border-secondary bg-select border-none rounded-none px-6 h-16">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="w-full">
          {priceOptions.map((option, i) => (
            <SelectItem
              key={i}
              value={option.currencyPair}
              className="flex justify-between px-4 py-2 cursor-pointer w-full"
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-3">
                  <Image
                    src={`/flags/${option.currencyPair}.png`}
                    width={44}
                    height={24}
                    alt={option.currencyPair}
                  />
                  <div className="text-base leading-none font-semibold">
                    {option.currencyPair}
                  </div>
                </div>
                <div className="text-base leading-none font-medium mr-3 ">
                  {option.value}
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    // <div className="w-[360px] h-fit bg-primary">
    //   <div className="flex justify-between items-center h-[64px] px-6 py-5">
    //     <div className="flex items-center gap-3">
    //       <Image src={EURUSA} width={44} height={24} alt="EURUSA" />
    //       <div className="text-base leading-none font-semibold">EURUSD</div>
    //     </div>
    //     <div className="flex items-center gap-3">
    //       <div className="text-base leading-none font-semibold text-negative">
    //         1.06921
    //       </div>
    //       <div className="">
    //         <ChevronDown />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default CurrentPrices;
