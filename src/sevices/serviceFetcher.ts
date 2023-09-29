import { requestMock } from "./mock";

const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

export type Result<T> = { data: T };

export async function serviceFetcher<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  if (IS_DEVELOPMENT) {
    return requestMock(path, options);
  }

  const resp = await fetch(
    `${process.env.REACT_APP_SERVICE_URL}${path}`,
    options
  );

  if (resp.ok) {
    return resp.json();
  }

  const error = await resp.text();
  throw new Error(error);
}
