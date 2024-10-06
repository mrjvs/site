export type PostItem = {
  slug: string;
  title: string;
  excerpt: string;
  publishDate: Date;
  comp: any;
};

export type PostCollection = {
  sortedPosts: PostItem[];
  postMap: Record<string, PostItem>;
};

export type PostCallbackContext = {
  add(post: PostItem): void;
};

export function makePostCollection(
  cb: (ctx: PostCallbackContext) => void,
): PostCollection {
  const collection: PostCollection = {
    postMap: {},
    sortedPosts: [],
  };

  cb({
    add(post) {
      collection.sortedPosts.push(post);
      collection.postMap[post.slug] = post;
    },
  });

  collection.sortedPosts.sort(
    (a, b) => a.publishDate.getTime() - b.publishDate.getTime(),
  );

  return collection;
}
