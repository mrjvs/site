import { makePostCollection } from '~/utils/post-collection';

import * as HelloWorld from './hello-world.mdx';

export const posts = makePostCollection(({ addMdx }) => {
  addMdx(HelloWorld);
});
