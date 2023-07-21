export const checkImageURL = (url) => {
  if (!url) return false;

  const pattern = /^https?:\/\/.+\.(png|jpg|jpeg|bmp|gif|webp)$/i;
  return pattern.test(url);
};
