import { TransactionsListRoute } from "./mock";
import { Result, serviceFetcher } from "./serviceFetcher";

export type TransactionData = {
  id: string;
  date: Date;
  amount: string;
  description: string;
};

export async function fetchTransactions(): Promise<Result<TransactionData[]>> {
  return serviceFetcher(TransactionsListRoute);
}
