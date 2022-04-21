import calcMinuteRead from "@/utils/calcMinuteRead";
import mapGallery from "@/utils/mapGallery";
import createURL from "@/utils/createURL";
import formatImage from "@/utils/formatImage";
import formatAuthor from "@/utils/formatAuthor";
import formatCategory from "@/utils/formatCategory";
import formatDate from "@/utils/formatDate";
import formatTags from "@/utils/formatTags";

/**
 * @param {Object} data - Map the original JSON from Wordpress into cleaner objects
 * @returns {Object} commonPost - The post type object
 */
export function postObjectModel(data) {
  if (!data) return {};
  // The "commonPost" object is what all post types have in common.
  // "Articles", "Short Stories" and "On-Top" all have the same propeties described below.

  const commonPost = {
    id: data.id,
    slug: data.slug,
    type: data.type,
    date: formatDate(data.date),
    modified: formatDate(data.modified),
    title: data.title.rendered,
    author: formatAuthor(data.acf.author),
    foreword: data.acf.foreword || "",
    category: formatCategory(data.acf.category),
    age_gate: data.acf.age_gate || false,
    layout: !data.acf.layout ? "default" : data.acf.layout.toLowerCase(),
    content: data.content.rendered,
    excerpt: data.acf.excerpt || null,
    url: createURL(data),
    minuteRead: calcMinuteRead(data.content.rendered),
    tags: formatTags(data.acf.tags),
    comments: data.comment_status === "open" ? true : false,
    image: formatImage(data.acf.featured_image, data.acf.featured_image_credit), //Check for featued image
  };

  // Article type has a image gallery
  if (data.type === "article") {
    // Add the gallery property for the article post types
    return Object.assign(
      {
        gallery: mapGallery(data.acf.gallery),
        interviewee: !data.acf.interviewee ? "" : data.acf.interviewee,
        interview: !data.acf.interview ? [] : data.acf.interview,
        showThoughts: data.acf.has_your_thoughts,
        thoughts: !data.acf.your_thoughts ? {} : data.acf.your_thoughts,
      },
      commonPost
    );
  }

  if (data.type === "short_stories") {
    delete commonPost.layout; // delete the layout and assign centered layout for poetry
    return Object.assign(
      {
        // Trying out centered layout
        // layout: commonPost.category.slug === 'poetry' ? 'centered' : 'default',
        layout: "centered",
      },
      commonPost
    );
  }

  // On-Top has a on_top list property, which has it's own nested image objects.
  // One image object for each list item
  if (data.type === "on_top") {
    return Object.assign(
      {
        on_top: data.acf.on_top.map((item) => {
          return {
            title: item.title,
            text: item.button_text,
            url: item.button_url,
            description: item.description,
            image: {
              thumb: item.image.sizes.thumbnail,
              medium: item.image.sizes.medium,
              large: item.image.sizes.large,
            },
          };
        }),
      },
      commonPost
    );
  }

  if (data.type === "news") {
    return Object.assign(
      {
        newsUrl: data.acf.url,
        date: formatDate(data.date),
      },
      commonPost
    );
  } else return commonPost;
}

/**
 * Post type for events.
 * @param {Object} data - Map the original JSON from Wordpress into cleaner objects
 * @returns {Object} - The post type object
 */
export function eventsObjectModel(data) {
  return {
    id: data.id,
    slug: data.slug,
    type: data.type,
    title: data.title.rendered,
    content: data.content.rendered,
    author: formatAuthor(data.acf.author),
    url: createURL(data),
    image: formatImage(data.acf.featured_image),
    category: formatCategory(data.acf.category),
    iframe: data.acf.iframe,
    event: {
      date: {
        start: data.acf.date.start_date,
        end: data.acf.date.end_date,
      },
      location: {
        city: data.acf.location.city,
        state: data.acf.location.state,
      },
    },
  };
}

export function categoryObjectModel(data) {
  return {
    id: data.id,
    count: data.count,
    taxonomy: data.taxonomy,
    description: data.description,
    name: data.name,
    slug: data.slug,
    image: formatImage(data.acf.logo),
  };
}

export function commentsObjectModel(data) {
  return {
    id: data.id,
    articleId: data.post,
    website: data.author_url,
    parentId: data.parent,
    authorId: data.author,
    name: data.author_name.length === 0 ? "Anonymous" : data.author_name,
    date: formatDate(data.date),
    content: data.content.rendered,
    status: data.status,
    avatar: data.author_avatar_urls["96"],
  };
}
