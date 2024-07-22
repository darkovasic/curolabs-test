interface DailySummary {
  date: string;
  num_losing_trades: number;
  num_trades: number;
  num_winning_trades: number;
  total_fees: number;
  total_loss: number;
  total_lots: number;
  total_pl: number;
  total_profit: number;
  total_roi: number;
}

export interface AccountSummary {
  account_id: number;
  average_loss: number;
  average_pl: number;
  average_profit: number;
  balance: number;
  daily_dd: number;
  daily_summary: DailySummary[];
  equity: number;
  losing_days: number;
  losing_trades: number;
  max_daily_dd: number;
  max_dd: number;
  max_loss: number;
  max_win: number;
  min_trading_days: number;
  net_pl: number;
  profit_factor: number;
  profit_target: number;
  starting_balance: number;
  status: string;
  total_dd: number;
  total_fees: number;
  total_trades: number;
  trade_expectancy: number;
  trading_days: number;
  win_rate: number;
  winning_days: number;
  winning_trades: number;
}

export interface Trade {
  account_id: number;
  balance: number;
  entry: number;
  equity: number;
  exit: number;
  exit_time: string;
  fees: number;
  open_time: string;
  order_id: string;
  pl: number;
  position_type: string;
  quantity: number;
  roi: number;
  sl: number;
  status: string;
  symbol: string;
  tp: number;
}

export interface OpenTradesResponse {
  open_trades: Trade[];
  status: string;
}

interface Commission {
  asset_class: string;
  price_per_lot: number;
}

interface SymbolMapping {
  mapping: string;
  symbol: string;
}

export interface AccountData {
  account_id: number;
  account_name: string;
  auto_be_level: number;
  balance: number;
  commissions: Commission[];
  daily_loss_limit: number;
  equity: number;
  exchange: string;
  leverage: number;
  max_lot_sizes: any[]; // Adjust type if max_lot_sizes has a specific structure
  one_click: boolean;
  risk: number;
  show_leaderboard: boolean;
  starting_balance: number;
  status: string;
  symbol_mappings: SymbolMapping[];
  take_profit_level: number;
}