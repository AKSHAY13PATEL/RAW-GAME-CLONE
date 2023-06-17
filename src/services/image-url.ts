import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const index = url.indexOf("media/");
  const croppedImageUrl =
    url.slice(0, index + 6) + "crop/600/400/" + url.slice(index + 6);
  return croppedImageUrl;
};

export default getCroppedImageUrl;
