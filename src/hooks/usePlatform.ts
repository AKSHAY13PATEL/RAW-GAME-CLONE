import usePlatforms from "./usePlatforms";

const usePlatform = (selectedPlatformId?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find(
    (platform) => platform.id === selectedPlatformId
  );
};

export default usePlatform;
