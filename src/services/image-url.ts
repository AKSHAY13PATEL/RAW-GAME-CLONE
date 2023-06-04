const getCroppedImageUrl = (url: string) => {
  const index = url.indexOf("media/");
  const croppedImageUrl =
    url.slice(0, index + 6) + "crop/600/400/" + url.slice(index + 6);
  return croppedImageUrl;
};

export default getCroppedImageUrl;
