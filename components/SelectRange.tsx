import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectRange() {
  return (
    <Select defaultValue="month">
      <SelectTrigger className="w-[132px] border-secondary bg-select [&>span]:mr-4">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="week">This week</SelectItem>
        <SelectItem value="month">This month</SelectItem>
        <SelectItem value="year">This year</SelectItem>
      </SelectContent>
    </Select>
  );
}
