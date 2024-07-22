import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trade, OpenTradesResponse } from "@/lib/types";
import { formatDate, formatTime, formatCurrency } from "@/lib/utils";
import Pencil from "./icons/Pencil";

export function TradeTable({ trades }: { trades: OpenTradesResponse }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="text-[10px] leading-[12px] font-semibold uppercase bg-card border-b-secondary border-t-secondary border-t-[1px] h-8">
          <TableHead className="w-[94px]">Open (GMT)</TableHead>
          <TableHead className="w-[94px]">Symbol</TableHead>
          <TableHead className="w-[94px]">Position</TableHead>
          <TableHead className="w-[94px]">Entry</TableHead>
          <TableHead className="w-[94px]">Size</TableHead>
          <TableHead className="w-[94px]">TP</TableHead>
          <TableHead className="w-[94px]">SL</TableHead>
          <TableHead className="w-[94px]">Fees</TableHead>
          <TableHead className="w-[94px]">ROI</TableHead>
          <TableHead className="w-[94px]">P/L</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {trades?.open_trades.map((trade: Trade, i: number) => (
          <TableRow
            key={i}
            className="text-[12px] leading-[18px] font-normal border-b-secondary h-[54px]"
          >
            <TableCell>
              <div>{formatDate(trade.open_time)}</div>
              <div className="text-accent-foreground">
                {formatTime(trade.open_time)}
              </div>
            </TableCell>
            <TableCell>{trade.symbol}</TableCell>
            <TableCell
              className={`uppercase ${
                trade.position_type === "short"
                  ? "text-negative"
                  : "text-positive"
              }`}
            >
              {trade.position_type}
            </TableCell>
            <TableCell>{trade.entry}</TableCell>
            <TableCell>{trade.quantity}</TableCell>
            <TableCell>{trade.tp}</TableCell>
            <TableCell>{trade.sl}</TableCell>
            <TableCell>{trade.fees}</TableCell>
            <TableCell
              className={`${trade.roi < 0 ? "text-negative" : "text-positive"}`}
            >
              {trade.roi}%
            </TableCell>
            <TableCell
              className={`${trade.pl < 0 ? "text-negative" : "text-positive"}`}
            >
              {formatCurrency(trade.pl)}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1">
                <div className="flex justify-center items-center w-7 h-7 bg-card rounded-md border-[1px] border-secondary cursor-pointer">
                  <Pencil />
                </div>
                <div className="flex justify-center items-center w-7 h-7 bg-card rounded-md border-[1px] border-secondary cursor-pointer">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2 1.17648H9.3708L9.2682 0.975303C9.11952 0.681592 8.88992 0.434564 8.60542 0.262195C8.32091 0.0898251 7.99285 -0.000998521 7.6584 9.46075e-06H4.3416C4.00714 -0.00106694 3.67905 0.0897285 3.39453 0.262106C3.11001 0.434483 2.88042 0.681548 2.7318 0.975303L2.6292 1.17648H1.8C1.32261 1.17648 0.864773 1.3624 0.527208 1.69335C0.189642 2.0243 0 2.47315 0 2.94118V8.82353C0 9.13555 0.126428 9.43479 0.351472 9.65542C0.576515 9.87605 0.88174 10 1.2 10H10.8C11.1183 10 11.4235 9.87605 11.6485 9.65542C11.8736 9.43479 12 9.13555 12 8.82353V2.94118C12 2.47315 11.8104 2.0243 11.4728 1.69335C11.1352 1.3624 10.6774 1.17648 10.2 1.17648ZM8.1 5.29412C8.1 5.70132 7.97684 6.09937 7.74609 6.43794C7.51534 6.77651 7.18736 7.0404 6.80364 7.19623C6.41991 7.35205 5.99767 7.39283 5.59031 7.31339C5.18295 7.23394 4.80877 7.03786 4.51508 6.74993C4.22139 6.462 4.02138 6.09515 3.94035 5.69578C3.85932 5.29641 3.90091 4.88245 4.05985 4.50625C4.2188 4.13005 4.48796 3.8085 4.8333 3.58227C5.17865 3.35605 5.58466 3.2353 6 3.2353C6.55695 3.2353 7.0911 3.45221 7.48492 3.83832C7.87875 4.22442 8.1 4.74809 8.1 5.29412Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
