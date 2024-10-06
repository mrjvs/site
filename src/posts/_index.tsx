import { makePostCollection } from '~/utils/post-collection';

import * as HelloWorld from './hello-world.mdx';
import * as EmailGarbage from './email-garbage.mdx';
import * as PrioritizeStructure from './prioritize-structure.mdx';

export const posts = makePostCollection((props) => {
  props.addMdx(HelloWorld);
  props.addMdx(EmailGarbage);
  props.addMdx(PrioritizeStructure);
});
