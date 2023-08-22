import { useQuery } from "@tanstack/react-query";
import genre from "../data/genre";
import APIClient from "../services/apiClient";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

// const useGenres = () => ({ data: genre, isLoading: false, error: null });

const apiClient = new APIClient<Genre>(`/genres`);

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genre,
  });

export default useGenres;
