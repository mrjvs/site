import { DateTime } from 'luxon';
import { For } from 'solid-js';
import { Divider } from '~/components/typography/Didivder';
import { Heading } from '~/components/typography/Heading';
import { Link } from '~/components/typography/Link';
import { PostExcerpt, TinyPost } from '~/components/utils/Post';

const newestPosts: PostExcerpt[] = [
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

export function NewestBlogPostsView() {
  return (
    <>
      <div class="flex items-end justify-between mb-3">
        <Heading noSpacing>Blog</Heading>
        <Link to="/posts">All posts</Link>
      </div>
      <Divider />
      <div class="grid grid-cols-2 gap-8 mt-7">
        <For each={newestPosts}>{(post) => <TinyPost post={post} />}</For>
      </div>
    </>
  );
}
