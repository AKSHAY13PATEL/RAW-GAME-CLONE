import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Game } from "../entities/Game";

const useGame = (gameSlug: string) => {
  const apiClient = new APIClient<Game>("/games/" + gameSlug);

  return useQuery<Game, Error>({
    queryKey: ["games", gameSlug],
    queryFn: () => {
      return apiClient.get();
    },
  });
};

export default useGame;
