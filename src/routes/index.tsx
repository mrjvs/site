import { Content } from '~/components/layouts/Content';
import { FooterView } from '~/views/FooterView';
import { HeroView } from '~/views/HeroView';
import { NewestBlogPostsView } from '~/views/NewestBlogPostsView';
import { ProjectsView } from '~/views/ProjectsView';

export default function Home() {
  return (
    <Content footer={<FooterView />}>
      <main>
        <HeroView />
      </main>
      <section class="mt-24">
        <NewestBlogPostsView />
      </section>
      <section class="mt-32">
        <ProjectsView />
      </section>
    </Content>
  );
}
