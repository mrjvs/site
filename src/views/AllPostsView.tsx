import { For, Show } from 'solid-js';
import { Paragraph } from '~/components/typography/Paragraph';
import { LargePost, toPostExcerpt } from '~/components/utils/Post';
import { posts } from '~/posts/_index';

export function AllPostsView() {
  const getPosts = () =>
    posts.sortedPosts.filter((v) => v.published).map(toPostExcerpt);
  return (
    <>
      <Show when={getPosts().length === 0}>
        <div class="text-center flex items-center flex-col justify-center my-12">
          <Paragraph>No posts to show.</Paragraph>
        </div>
      </Show>
      <div class="grid grid-cols-1 gap-16">
        <For each={getPosts()}>{(post) => <LargePost post={post} />}</For>
      </div>
    </>
  );
}
