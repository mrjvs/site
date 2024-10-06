import { Content } from '~/components/layouts/Content';
import { AllPostsView } from '~/views/AllPostsView';
import { FooterView } from '~/views/FooterView';

export default function Posts() {
  return (
    <Content footer={<FooterView />}>
      <main>
        <AllPostsView />
      </main>
    </Content>
  );
}
