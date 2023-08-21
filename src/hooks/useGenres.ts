import { useQuery } from "@tanstack/react-query";
import apiClient, { fetchResponse } from "../services/apiClient";
import genre from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

// const useGenres = () => ({ data: genre, isLoading: false, error: null });
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => {
      return apiClient
        .get<fetchResponse<Genre>>(`/genres`)
        .then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genre.length, results: genre },
  });

export default useGenres;
