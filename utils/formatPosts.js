/**
 * @param {Object} posts
 * @returns {Object}
 */
export default function formatPosts(posts) {
  if (!posts) {
    return [];
  } else {
    return posts.map((post) => {
      return {
        id: post.ID,
        authorId: parseInt(post.post_author),
        title: post.post_title,
        slug: post.post_name,
        type: post.post_type,
      };
    });
  }
}
