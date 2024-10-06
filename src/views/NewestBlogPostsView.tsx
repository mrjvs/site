import { For } from 'solid-js';
import { Divider } from '~/components/typography/Didivder';
import { Heading } from '~/components/typography/Heading';
import { Link } from '~/components/typography/Link';
import { TinyPost, toPostExcerpt } from '~/components/utils/Post';
import { posts } from '~/posts/_index';

export function NewestBlogPostsView() {
  const getNewestPosts = (n: number) =>
    posts.sortedPosts.slice(0, n).map(toPostExcerpt);
  return (
    <>
      <div class="flex items-end justify-between mb-3">
        <Heading noSpacing>Blog</Heading>
        <Link to="/posts">All posts</Link>
      </div>
      <Divider />
      <div class="grid grid-cols-2 gap-8 mt-7">
        <For each={getNewestPosts(2)}>{(post) => <TinyPost post={post} />}</For>
      </div>
    </>
  );
}
