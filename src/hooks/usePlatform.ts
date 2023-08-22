import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import APIClient from "../services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//const usePlatform = () => useData<Platform>("/platforms/lists/parents");

const apiClient = new APIClient<Platform>(`/platforms/lists/parents`);

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platform.length, next: null, results: platform },
  });
export default usePlatform;
