export const getGalleryImages = async () => {
  const res = await fetch("/test.json");
  return res.json();
};
