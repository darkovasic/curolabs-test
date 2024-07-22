import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export function OrderEntryTabs() {
  return (
    <Tabs defaultValue="lots" className="">
      <TabsList className="grid w-full grid-cols-2 h-[30px] text-white p-0">
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
      <TabsContent value="lots"></TabsContent>
    </Tabs>
  );
}
