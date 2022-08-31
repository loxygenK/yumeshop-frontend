import { ReactNode, useMemo } from 'react';
import { Middleware, SWRConfig, SWRResponse } from 'swr';

export type MockAPIProviderProps = {
  children: ReactNode;
  response: unknown;
};

const createMockMiddleWare =
  (response: unknown): Middleware =>
  () =>
  (): SWRResponse => ({
    data: response,
    mutate: () => Promise.resolve(response),
    isValidating: false,
  });

export const MockAPIProvider = ({
  children,
  response,
}: MockAPIProviderProps): JSX.Element => {
  const mockMiddleware = useMemo(
    () => createMockMiddleWare(response),
    [response],
  );

  return <SWRConfig value={{ use: [mockMiddleware] }}>{children}</SWRConfig>;
};
