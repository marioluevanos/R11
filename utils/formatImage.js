/**
 * @param {Object} image
 * @param {String} credit - The image credit
 * @returns {Object} A cleaner image object with a fallback image for Open Graph meta
 */
export default function formatImage(image, credit = "") {
  const ogImage = process.env.r11.ogImage;
  if (!image) {
    return {
      /*
                If the post type doesn't have a "featured image" property, such as "short-stories", 
                then add a default open graph image. Image will be used for social sharing, social 
                platforms. Otherwise, use the featured image.
            */
      og: ogImage,
    };
  } else {
    return {
      og: ogImage,
      thumb: image.sizes.thumbnail,
      medium: image.sizes.medium_large,
      large: image.sizes.large,
      caption: image.caption || credit, // Backwards compat, checks the "caption" first, else use "credit"
      original: image.url || ogImage,

      // This is used for SEO, sizes for meta tags
      sizes: {
        medium: {
          width: image.sizes["medium-width"],
          height: image.sizes["medium-height"],
        },
      },
    };
  }
}
