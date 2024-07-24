import Header from "@/components/Header";
import OrderEntryPanel from "@/components/OrderEntryPanel";
import AccountInfoPanel from "@/components/AccountInfoPanel";
import CurrentPrices from "@/components/CurrentPrices";
import Trades from "@/components/Trades";
import Chart from "@/components/Chart";
import {
  getMetrics,
  getOpenTrades,
  getAccountDetails,
  getCurrentPrices,
} from "@/lib/actions";

export default async function Home() {
  const metrics = await getMetrics();
  const trades = await getOpenTrades();
  const accountDetails = await getAccountDetails();
  const currentPrices = await getCurrentPrices();
  return (
    <main className="flex min-h-screen flex-col items-start gap-16 p-24">
      <Header metrics={metrics} />
      <Chart />
      <Trades trades={trades} />
      <div className="flex gap-16">
        <OrderEntryPanel accountDetails={accountDetails} />
        <AccountInfoPanel accountDetails={accountDetails} />
        <CurrentPrices currentPrices={currentPrices} />
      </div>
    </main>
  );
}
