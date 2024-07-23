import AccountInfo from "./AccountInfo";
import Info from "@/components/icons/Info";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { AccountData } from "@/lib/types";
import Pencil from "@/components/icons/Pencil";

function AccountInfoPanel({ accountDetails }: { accountDetails: AccountData }) {
  return (
    <div className="flex flex-col w-[360px] h-[511px] bg-primary p-6 gap-4">
      <AccountInfo accountDetails={accountDetails} />
      <Separator className="bg-secondary" />
      <div className="flex flex-col gap-1 text-[12px] leading-[18px]">
        <div className="flex justify-between items-center">
          <div className="font-normal text-secondary-foreground">Leverage:</div>
          <div className="font-medium">{accountDetails.leverage}x</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center font-normal text-secondary-foreground gap-1">
            <Info /> Risk:
          </div>
          <div className="font-medium">{accountDetails.risk}%</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center font-normal text-secondary-foreground gap-1">
            <Info /> Daily Loss Limit:
          </div>
          <div className="font-medium">{accountDetails.daily_loss_limit}%</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center font-normal text-secondary-foreground gap-1">
            <Info /> Take Profit (RR):
          </div>
          <div className="font-medium">{accountDetails.take_profit_level}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center font-normal text-secondary-foreground gap-1">
            <Info /> Auto BE Level (RR):
          </div>
          <div className="font-medium">{accountDetails.auto_be_level}</div>
        </div>
      </div>
      <Separator className="bg-secondary" />
      <div className="flex flex-col gap-1 text-[12px] leading-[18px]">
        <div className="flex justify-between items-center">
          <div className="font-normal text-secondary-foreground">
            One Click Trade
          </div>
          <Switch defaultChecked />
        </div>
      </div>
      <Separator className="bg-secondary" />
      <div className="flex flex-col gap-1 text-[12px] leading-[18px]">
        <div className="flex justify-between items-center">
          <div className="font-normal text-secondary-foreground">
            Show Account on Leaderboard:
          </div>
          <Switch defaultChecked />
        </div>
      </div>
      <Separator className="bg-secondary" />
      <div className="flex flex-col gap-1 text-[12px] leading-[18px]">
        <div className="flex justify-between items-center">
          <div className="font-normal text-secondary-foreground">
            Max Lot Sizes:
          </div>
          <div className="flex justify-center items-center h-5 w-5 border-[1px] border-tab rounded-md cursor-pointer">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.26662 4.46589H5.53328V0.732552C5.53328 0.591103 5.47709 0.455448 5.37707 0.355428C5.27706 0.255409 5.1414 0.199219 4.99995 0.199219C4.8585 0.199219 4.72285 0.255409 4.62283 0.355428C4.52281 0.455448 4.46662 0.591103 4.46662 0.732552V4.46589H0.733285C0.591836 4.46589 0.45618 4.52208 0.356161 4.6221C0.256141 4.72212 0.199951 4.85777 0.199951 4.99922C0.199951 5.14067 0.256141 5.27632 0.356161 5.37634C0.45618 5.47636 0.591836 5.53255 0.733285 5.53255H4.46662V9.26589C4.46662 9.40733 4.52281 9.54299 4.62283 9.64301C4.72285 9.74303 4.8585 9.79922 4.99995 9.79922C5.1414 9.79922 5.27706 9.74303 5.37707 9.64301C5.47709 9.54299 5.53328 9.40733 5.53328 9.26589V5.53255H9.26662C9.40807 5.53255 9.54372 5.47636 9.64374 5.37634C9.74376 5.27632 9.79995 5.14067 9.79995 4.99922C9.79995 4.85777 9.74376 4.72212 9.64374 4.6221C9.54372 4.52208 9.40807 4.46589 9.26662 4.46589Z"
                fill="#E74694"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="font-normal text-secondary-foreground">
            Account Commissions:
          </div>
          <div className="flex gap-1.5">
            <div className="flex bg-counter py-[1px] px-2.5 rounded-md gap-1">
              <span className="text-tab font-medium">3</span> Rules
            </div>
            <div className="flex justify-center items-center h-5 w-5 border-[1px] border-secondary rounded-md cursor-pointer">
              <Pencil />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="font-normal text-secondary-foreground">
            Symbol Mappings:
          </div>
          <div className="flex gap-1.5">
            <div className="flex bg-counter py-[1px] px-2.5 rounded-md gap-1">
              <span className="text-tab font-medium">2</span> Rules
            </div>
            <div className="flex justify-center items-center h-5 w-5 border-[1px] border-secondary rounded-md cursor-pointer">
              <Pencil />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountInfoPanel;
