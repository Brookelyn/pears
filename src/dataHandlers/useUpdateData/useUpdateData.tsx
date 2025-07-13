import { useMutation } from "@tanstack/react-query"
import { useUpdateDataFetcher } from "./useUpdateDataFetcher"

export const useUpdateData = () => {
	return useMutation({
		mutationFn: useUpdateDataFetcher
	})
}