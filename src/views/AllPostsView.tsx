import { DateTime } from 'luxon';
import { For } from 'solid-js';
import { PostExcerpt, LargePost } from '~/components/utils/Post';

const allPosts: PostExcerpt[] = [
  {
    title: 'Email is garbage, let’s fix it',
    excerpt:
      'The age of the old message format needs to end. What will it take?',
    publishDate: new Date(),
    url: '#',
  },
  {
    title: 'Prioritize structure, not methods',
    excerpt:
      'The first iteration of code doesn’t have to be perfect, just needs clear structure.',
    publishDate: DateTime.now().minus({ seconds: 30 }).toJSDate(),
    url: '#',
  },
];

export function AllPostsView() {
  return (
    <>
      <div class="grid grid-cols-1 gap-16">
        <For each={allPosts}>{(post) => <LargePost post={post} />}</For>
      </div>
    </>
  );
}
