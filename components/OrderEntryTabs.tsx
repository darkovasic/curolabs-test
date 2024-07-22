import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

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
            <div className="flex bg-input rounded-md h-[42px] border-[1px] border-secondary">
              <Button className="flex justify-center items-center rounded-r-none rounded-l-md bg-transparent w-[56px]">
                <svg
                  width="14"
                  height="2"
                  viewBox="0 0 14 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.5999 1L1.3999 1L12.5999 1Z" fill="#898587" />
                  <path
                    d="M12.5999 1L1.3999 1"
                    stroke="#898587"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
              <Input
                className="flex justify-center items-center text-center grow border-none rounded-none text-secondary-foreground bg-transparent"
                type="number"
                value="0.00"
                step="0.01"
                placeholder="0.00"
              ></Input>
              <Button className="flex justify-center items-center rounded-l-none rounded-r-md bg-transparent w-[56px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.0001 8.00156H1.6001H8.0001Z" fill="#898587" />
                  <path
                    d="M8.0001 1.60156V8.00156M8.0001 8.00156V14.4016M8.0001 8.00156H14.4001M8.0001 8.00156H1.6001"
                    stroke="#898587"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
