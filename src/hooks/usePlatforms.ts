import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import APIClient from "../services/apiClient";
import Platform from "../entities/Platform";

//const usePlatform = () => useData<Platform>("/platforms/lists/parents");

const apiClient = new APIClient<Platform>(`/platforms/lists/parents`);

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platform,
  });
export default usePlatforms;
