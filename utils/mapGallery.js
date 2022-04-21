/**
 * @param {Array} gallery - Array of images for the gallery
 * @returns {Array} The gallery object
 */
export default function mapGallery(gallery) {
  // If article doesn't have a gallery, return an empty array
  if (!gallery) return [];
  return gallery.map((image) => {
    return {
      id: image.id,
      title: image.title,
      caption: image.caption,
      description: image.description,
      image: {
        large: image.sizes.large,
        medium: image.sizes.medium,
        thumb: image.sizes.thumbnail,
      },
    };
  });
}
