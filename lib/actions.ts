export async function getMetrics() {
  const res = await fetch("http://13.41.72.245/fetch_metrics");

  if (!res.ok) {
    throw new Error("Failed to fetch metrics");
  }

  return res.json();
}

export async function getOpenTrades() {
  const res = await fetch("http://13.41.72.245/open_positions");

  if (!res.ok) {
    throw new Error("Failed to fetch open positions");
  }

  return res.json();
}

export async function getAccountDetails() {
  const res = await fetch("http://13.41.72.245/account_details");

  if (!res.ok) {
    throw new Error("Failed to fetch account details");
  }

  return res.json();
}
