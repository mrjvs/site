import { RouteSectionProps } from '@solidjs/router';
import { Dynamic } from 'solid-js/web';
import { Content } from '~/components/layouts/Content';
import { PostProvider } from '~/components/utils/PostProvider';
import { posts } from '~/posts/_index';
import { FooterView } from '~/views/FooterView';

export default function PostLayout(props: RouteSectionProps) {
  const page = () => posts.postMap[props.params.slug];
  return (
    <PostProvider>
      <Content footer={<FooterView />}>
        <main>
          <Dynamic component={page().comp} />
        </main>
      </Content>
    </PostProvider>
  );
}
