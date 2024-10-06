import { HeroHeading } from '~/components/typography/Heading';
import { Paragraph } from '~/components/typography/Paragraph';
import { SocialLink } from '~/components/typography/SocialLink';
import { Avatar } from '~/components/utils/Avatar';

export function HeroView() {
  return (
    <>
      <Avatar />
      <HeroHeading>
        Working on the full experience
        <br />
        rather than one part
      </HeroHeading>
      <Paragraph class="mb-8">
        Hey, I am mrjvs. I am a full-stack web developer who likes to zoom in on
        UI design to make the perfect package.
        <br />I dabble in open source whenever I see a gap in good tooling or
        software.
      </Paragraph>
      <div class="flex items-center gap-8">
        <SocialLink icon="email" to="mailto:hello@mrjvs.com">
          hello@mrjvs.com
        </SocialLink>
        <SocialLink icon="github" to="https://github.com/mrjvs">
          mrjvs
        </SocialLink>
      </div>
    </>
  );
}
