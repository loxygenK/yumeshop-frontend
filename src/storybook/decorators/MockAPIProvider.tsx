import { ReactNode, useMemo } from 'react';
import { Middleware, SWRConfig, SWRResponse } from 'swr';

export type MockAPIProviderProps<T> = {
  children: ReactNode;
  response: T;
};

const createMockMiddleWare =
  (response: unknown): Middleware =>
  () =>
  (): SWRResponse => ({
    data: response,
    mutate: () => Promise.resolve(response),
    isValidating: false,
  });

export const MockAPIProvider = <T,>({
  children,
  response,
}: MockAPIProviderProps<T>): JSX.Element => {
  const mockMiddleware = useMemo(
    () => createMockMiddleWare(response),
    [response],
  );

  return <SWRConfig value={{ use: [mockMiddleware] }}>{children}</SWRConfig>;
};
