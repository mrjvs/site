import { makePostCollection } from '~/utils/post-collection';

import Example from './example.mdx';

export const posts = makePostCollection(({ add }) => {
  add({
    comp: () => <p>Hello email</p>,
    title: 'Email is garbage, let’s fix it',
    excerpt:
      'The age of the old message format needs to end. What will it take?',
    publishDate: new Date(),
    slug: 'email-is-garbage',
  });

  add({
    comp: () => <p>Hello structure</p>,
    title: 'Prioritize structure, not methods',
    excerpt:
      'The first iteration of code doesn’t have to be perfect, just needs clear structure.',
    publishDate: new Date(),
    slug: 'prioritize-structure',
  });

  add({
    comp: Example,
    title: 'Example post',
    excerpt: 'This is just an example post, please ignore',
    publishDate: new Date(),
    slug: 'example',
  });
});
