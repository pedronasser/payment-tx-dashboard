import { transactionsMock } from "./transactions.mock";

type MockHandler<T> = (body: any, queries: any) => Promise<T>;

export const TransactionsListRoute = "/api/v1/transactions";

const mockHandlers: Record<string, MockHandler<any>> = {
  [TransactionsListRoute]: transactionsMock,
};

export async function requestMock<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const handler = mockHandlers[path];
  if (handler) {
    // TODO: provide body and queries to mock handler
    return handler({}, {});
  }

  return Promise.reject(new Error("Invalid service path"));
}
