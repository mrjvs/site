import { RouteDefinition, RouteSectionProps } from '@solidjs/router';
import { Dynamic } from 'solid-js/web';
import { Content } from '~/components/layouts/Content';
import { BackgroundGradient } from '~/components/utils/BackgroundGradient';
import { Breadcrumb, BreadcrumbItem } from '~/components/utils/Breadcrumb';
import { NiceDate } from '~/components/utils/NiceDate';
import { PostProvider } from '~/components/utils/PostProvider';
import { posts } from '~/posts/_index';
import { FooterView } from '~/views/FooterView';

export const route = {
  matchFilters: {
    slug: (v: string) => !!posts.postMap[v],
  },
} satisfies RouteDefinition;

export default function PostLayout(props: RouteSectionProps) {
  const page = () => posts.postMap[props.params.slug];
  const breadcrumbContent = (): BreadcrumbItem[] => [
    { label: 'Home', to: '/' },
    { label: 'Posts', to: '/posts' },
    { label: page().title },
  ];

  return (
    <PostProvider>
      <BackgroundGradient />
      <div class="relative">
        <Content
          footer={<FooterView />}
          navigation={<Breadcrumb items={breadcrumbContent()} />}
        >
          <main>
            <NiceDate date={page().publishDate} />
            <Dynamic component={page().comp} />
          </main>
        </Content>
      </div>
    </PostProvider>
  );
}
