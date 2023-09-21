import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Trailer } from "../entities/Trailer";

const useTrailer = (gameSlug: string) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameSlug}/movies`);

  return useQuery({
    queryKey: ["trailers", gameSlug],
    queryFn: apiClient.getAll, //getAll
  });
};

export default useTrailer;
