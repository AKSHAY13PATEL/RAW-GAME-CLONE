import { useQuery } from "@tanstack/react-query";
import Screenshots from "../entities/Screenshots";
import APIClient from "../services/apiClient";

const useScreenshot = (gameSlug: string) => {
  const apiClient = new APIClient<Screenshots>(
    `/games/${gameSlug}/screenshots`
  );

  return useQuery({
    queryKey: ["screenshots", gameSlug],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshot;
