import { Content } from '~/components/layouts/Content';
import { HeroHeading } from '~/components/typography/Heading';
import { Paragraph } from '~/components/typography/Paragraph';
import { SocialLink } from '~/components/typography/SocialLink';
import { Avatar } from '~/components/utils/Avatar';

export default function Home() {
  return (
    <Content>
      <Avatar />
      <HeroHeading class="mb-4 mt-2">
        Working on the full experience
        <br />
        rather than one part
      </HeroHeading>
      <Paragraph class="mb-8">
        Hey, I am Jelle van Snik. I like making things that solve problems. Hey,
        I am Jelle van Snik. I like making things that solve problems. Hey, I am
        Jelle van Snik. I like making things that solve problems. Hey, I am
        Jelle van Snik. I like making things that solve problems.
      </Paragraph>
      <div class="flex items-center gap-8">
        <SocialLink icon="email" to="mailto:hello@mrjvs.com">
          hello@mrjvs.com
        </SocialLink>
        <SocialLink icon="github" to="https://github.com/mrjvs">
          mrjvs
        </SocialLink>
      </div>
    </Content>
  );
}
