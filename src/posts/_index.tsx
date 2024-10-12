import { makePostCollection } from '~/utils/post-collection';

import * as EarlyReturns from './early-returns.mdx';

export const posts = makePostCollection(({ addMdx }) => {
  addMdx(EarlyReturns, false);
});
