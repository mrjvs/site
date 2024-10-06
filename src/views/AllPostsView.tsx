import { For } from 'solid-js';
import { LargePost, toPostExcerpt } from '~/components/utils/Post';
import { posts } from '~/posts/_index';

export function AllPostsView() {
  const getPosts = () => posts.sortedPosts.map(toPostExcerpt);
  return (
    <>
      <div class="grid grid-cols-1 gap-16">
        <For each={getPosts()}>{(post) => <LargePost post={post} />}</For>
      </div>
    </>
  );
}
