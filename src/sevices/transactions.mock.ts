import { TransactionData } from "./transactions";

export async function transactionsMock(
  body = {},
  queries = {}
): Promise<{ data: TransactionData[] }> {
  return Promise.resolve({
    data: [
      {
        id: "1",
        amount: "100.00",
        date: new Date("2021-01-01"),
        description: "test",
      },
      {
        id: "2",
        amount: "200.00",
        date: new Date("2021-01-02"),
        description: "example",
      },
    ],
  });
}
