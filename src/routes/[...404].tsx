import { Content } from '~/components/layouts/Content';
import { HeroHeading } from '~/components/typography/Heading';
import { Link } from '~/components/typography/Link';
import { FooterView } from '~/views/FooterView';

export default function NotFound() {
  return (
    <Content footer={<FooterView />}>
      <div class="text-center">
        <HeroHeading class="!text-8xl">404</HeroHeading>
        <Link to="/">Back to home</Link>
      </div>
    </Content>
  );
}
