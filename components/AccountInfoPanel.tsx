import AccountInfo from "./AccountInfo";
import { Separator } from "./ui/separator";

function AccountInfoPanel() {
  return (
    <div className="flex flex-col w-[360px] h-[511px] bg-primary p-6 gap-4">
      <AccountInfo />
      <Separator className="bg-secondary" />
    </div>
  );
}

export default AccountInfoPanel;
