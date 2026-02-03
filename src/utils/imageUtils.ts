import placeholder from "../assets/PlaceHolder.png";

export const getSafeImageUrl = (
  baseUrl: string,
  imagePath: string | null | undefined,
): string => {
  if (!imagePath) {
    return placeholder;
  }

  // You can also add validation for the image path format
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath; // It's already a full URL
  }

  return baseUrl + imagePath;
};

export const createImageLoader = (baseUrl: string) => {
  return (imagePath: string | null | undefined) => {
    return getSafeImageUrl(baseUrl, imagePath);
  };
};
