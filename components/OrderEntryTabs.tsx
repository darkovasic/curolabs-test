import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import InputNumber from "./InputNumber";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";

export function OrderEntryTabs() {
  return (
    <Tabs defaultValue="lots" className="">
      <TabsList className="grid w-full grid-cols-2 h-[30px] text-white p-0 mb-[20px]">
        <TabsTrigger
          value="lots"
          className="text-[12px] leading-[18px] font-semibold rounded-l-md"
        >
          Open by Lots
        </TabsTrigger>
        <TabsTrigger
          value="sl"
          className="text-[12px] leading-[18px] font-semibold rounded-r-md"
        >
          Open by SL
        </TabsTrigger>
      </TabsList>
      <TabsContent value="lots">
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-2">
            <div className="text-[12px] leading-[18px] font-medium">
              Limit Price
            </div>
            <InputNumber />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[12px] leading-[18px] font-medium">
              <div className="flex justify-between">
                <span>Quantity</span>
                <span>$199,287.50</span>
              </div>
            </div>
            <InputNumber />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Checkbox className="bg-input rounded border-[1px] border-secondary w-4 h-4" />
              <span className="text-[12px] leading-[18px] font-normal">
                Add Set TP{" "}
                <span className="text-secondary-foreground">(Optional)</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="bg-input rounded border-[1px] border-secondary w-4 h-4" />
              <span className="text-[12px] leading-[18px] font-normal">
                Add TP{" "}
                <span className="text-secondary-foreground">(Optional)</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-center items-center bg-input rounded-md h-[42px]">
              <div className="flex justify-center items-center text-[12px] leading-[14] text-positive w-full">
                1.06915
              </div>
              <div className="h-[21px]">
                <Separator orientation="vertical" className="bg-secondary" />
              </div>
              <div className="flex justify-center items-center text-[12px] leading-[14] text-negative w-full">
                1.06939
              </div>
            </div>
            <div className="flex gap-2">
              <Button className="bg-positive w-full">Buy / Long</Button>
              <Button className="bg-negative w-full">Sell / Short</Button>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="sl">
        <div className="flex flex-col gap-2">
          <div className="text-[12px] leading-[18px] font-medium">
            Limit Price
          </div>
          <InputNumber />
        </div>
      </TabsContent>
    </Tabs>
  );
}
