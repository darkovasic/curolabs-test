import Image from "next/image";
import logo from "@/public/logo.png";
import { Separator } from "@/components/ui/separator";
import { SelectRange } from "@/components/SelectRange";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col w-[1368px] h-[211px] bg-primary">
        <div className="flex items-center p-6">
          <div className="flex shrink-0 w-10 h-10">
            <Image src={logo} alt="Curo Labs Logo" priority />
          </div>
          <div className="flex flex-col justify-center pl-3 gap-[2px]">
            <p className="text-[18px] leading-[27px] font-semibold">
              SecondaryAccount
            </p>
            <p className="text-[12px] leading-[18px] font-normal text-secondary-foreground">
              Account ID: 127417370745
            </p>
          </div>
          <div className="flex justify-center h-8 px-8">
            <Separator orientation="vertical" className="bg-secondary" />
          </div>
          <div className="flex justify-between items-center w-full h-full">
            <div className="flex gap-6">
              <div className="flex flex-col justify-center gap-[2px]">
                <p className="text-[12px] leading-[18px] font-normal text-secondary-foreground">
                  Trading Days
                </p>
                <p className="text-[14px] leading-[21px] font-medium">5</p>
              </div>
              <div className="flex flex-col justify-center gap-[2px]">
                <p className="text-[12px] leading-[18px] font-normal text-secondary-foreground">
                  Daily DD
                </p>
                <p className="text-[14px] leading-[21px] font-medium">NaN</p>
              </div>
              <div className="flex flex-col justify-center gap-[2px]">
                <p className="text-[12px] leading-[18px] font-normal text-secondary-foreground">
                  Max Daily DD
                </p>
                <p className="text-[14px] leading-[21px] font-medium text-negative">
                  -0.05%
                </p>
              </div>
              <div className="flex flex-col justify-center gap-[2px]">
                <p className="text-[12px] leading-[18px] font-normal text-secondary-foreground">
                  Max DD
                </p>
                <p className="text-[14px] leading-[21px] font-medium text-negative">
                  -100%
                </p>
              </div>
              <div className="flex flex-col justify-center gap-[2px]">
                <p className="text-[12px] leading-[18px] font-normal text-secondary-foreground">
                  Profit Target
                </p>
                <p className="text-[14px] leading-[21px] font-medium text-negative">
                  -0.15%
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <SelectRange />
              <Button className="bg-pink">Import trades</Button>
              <Button className="bg-pink">Update objectives</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}