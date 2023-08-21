import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import apiClient from "../services/apiClient";
import { fetchResponse } from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

//const usePlatform = () => useData<Platform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => {
      return apiClient
        .get<fetchResponse<Platform>>(`/platforms/lists/parents`)
        .then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platform.length, results: platform },
  });
export default usePlatform;
