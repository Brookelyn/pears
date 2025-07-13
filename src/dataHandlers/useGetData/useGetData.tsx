import { useQuery } from "@tanstack/react-query";
import { useGetDataFetcher } from "./useGetDataFetcher";


export const useGetData = () => useQuery({ queryKey: ["dataGetter"], queryFn: useGetDataFetcher });