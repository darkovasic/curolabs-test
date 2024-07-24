import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PricesResponse } from "@/lib/types";

function CurrentPrices({ currentPrices }: { currentPrices: PricesResponse }) {
  const priceOptions = Object.entries(currentPrices?.prices[0]).map(
    ([currencyPair, value]) => ({
      currencyPair,
      value,
    })
  );

  return (
    <div className="w-[360px] h-fit bg-primary">
      <Select defaultValue="EURUSD">
        <SelectTrigger className="border-secondary bg-select border-none rounded-none px-6 h-16 w-full [&>span]:mr-4">
          <SelectValue className="w-full" />
        </SelectTrigger>
        <SelectContent className="w-full">
          {priceOptions.map((option, i) => (
            <SelectItem
              key={i}
              value={option.currencyPair}
              className="flex justify-between px-4 py-2 cursor-pointer w-full"
            >
              <div
                id="selectOption"
                className="flex justify-between items-center w-full"
              >
                <div className="flex items-center gap-3 w-full">
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
                <div className="text-base leading-none font-medium">
                  {option.value}
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CurrentPrices;
