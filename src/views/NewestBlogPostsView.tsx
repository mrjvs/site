import { For, Show } from 'solid-js';
import { Divider } from '~/components/typography/Didivder';
import { Heading } from '~/components/typography/Heading';
import { Link } from '~/components/typography/Link';
import { Paragraph } from '~/components/typography/Paragraph';
import { TinyPost, toPostExcerpt } from '~/components/utils/Post';
import { posts } from '~/posts/_index';

export function NewestBlogPostsView() {
  const getPosts = () => posts.sortedPosts.filter((v) => v.published);
  const getNewestPosts = (n: number) =>
    getPosts().slice(0, n).map(toPostExcerpt);
  return (
    <>
      <div class="flex items-end justify-between mb-3">
        <Heading noSpacing>Blog</Heading>
        <Link to="/posts">All posts</Link>
      </div>
      <Divider />
      <Show when={getPosts().length === 0}>
        <div class="text-center flex items-center flex-col justify-center my-12">
          <Paragraph>No posts to show.</Paragraph>
        </div>
      </Show>
      <div class="grid grid-cols-2 gap-8 mt-7">
        <For each={getNewestPosts(2)}>{(post) => <TinyPost post={post} />}</For>
      </div>
    </>
  );
}
