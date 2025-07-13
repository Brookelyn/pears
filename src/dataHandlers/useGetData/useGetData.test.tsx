import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook } from "@testing-library/react";
import { useGetDataFetcher } from "./useGetDataFetcher";
import { useGetData } from "./useGetData";

jest.mock("./useGetDataFetcher", () => ({
  useGetDataFetcher: jest.fn(),
}));

const mockUseGetDataFetcher = useGetDataFetcher as jest.Mock;

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

it("calls the expected call handler", () => {
  mockUseGetDataFetcher.mockReturnValue({ myKey: "my value" });
   renderHook(() => useGetData(), { wrapper });

  expect(mockUseGetDataFetcher).toHaveBeenCalledTimes(1)
});
