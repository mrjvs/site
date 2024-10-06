import { Content } from '~/components/layouts/Content';
import { Breadcrumb } from '~/components/utils/Breadcrumb';
import { AllPostsView } from '~/views/AllPostsView';
import { FooterView } from '~/views/FooterView';

export default function Posts() {
  return (
    <Content
      footer={<FooterView />}
      navigation={
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Posts' }]} />
      }
    >
      <main>
        <AllPostsView />
      </main>
    </Content>
  );
}
