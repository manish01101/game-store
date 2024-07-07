const getCroppedImageUrl = (url: string) => {
  if (!url)
    return "https://i.pinimg.com/736x/5f/b9/b8/5fb9b88dd66004e2d21ca4ca50f341dd.jpg";

  const index = url.indexOf("media/") + "media/".length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
