import { DateTime } from 'luxon';

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
  addItem(post: PostItem): void;
  addMdx(comp: any): void;
};

export function makePostCollection(
  cb: (ctx: PostCallbackContext) => void,
): PostCollection {
  const collection: PostCollection = {
    postMap: {},
    sortedPosts: [],
  };

  cb({
    addItem(post) {
      collection.sortedPosts.push(post);
      collection.postMap[post.slug] = post;
    },
    addMdx(comp) {
      const fm: Record<string, string> = comp.frontmatter ?? {};
      const post: PostItem = {
        title: fm.title,
        excerpt: fm.excerpt,
        publishDate: DateTime.fromISO(fm.date).toJSDate(),
        slug: fm.slug,
        comp: comp.default,
      };
      collection.sortedPosts.push(post);
      collection.postMap[post.slug] = post;
    },
  });

  collection.sortedPosts.sort(
    (a, b) => b.publishDate.getTime() - a.publishDate.getTime(),
  );

  return collection;
}
