import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectRange() {
  return (
    <Select defaultValue="week">
      <SelectTrigger className="w-[120px] border-secondary bg-select">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="week">This week</SelectItem>
          <SelectItem value="month">This month</SelectItem>
          <SelectItem value="year">This year</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
