import Header from "@/components/Header";
import OrderEntryPanel from "@/components/OrderEntryPanel";
import Trades from "@/components/Trades";
import { getMetrics, getOpenTrades } from "@/lib/actions";

export default async function Home() {
  const metrics = await getMetrics();
  const trades = await getOpenTrades();
  return (
    <main className="flex min-h-screen flex-col items-start gap-16 p-24">
      <Header metrics={metrics} />
      <Trades trades={trades} />
      <div className="flex gap-16">
        <OrderEntryPanel />
      </div>
    </main>
  );
}
