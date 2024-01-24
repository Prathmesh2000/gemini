export function getStrapiMedia(media) {
  const { url } = media.data.attributes;
  const imageUrl = `${process.env.BASE_URL}${url}`;
  return imageUrl;
}
