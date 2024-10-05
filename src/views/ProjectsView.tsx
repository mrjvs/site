import { Breakout } from '~/components/layouts/Container';
import { StampedCard } from '~/components/layouts/StampedCard';
import { Timeline, TimelineBubble } from '~/components/layouts/Timeline';
import { Heading } from '~/components/typography/Heading';
import { Link } from '~/components/typography/Link';
import { Paragraph } from '~/components/typography/Paragraph';

export function ProjectsView() {
  return (
    <>
      <Timeline>
        <TimelineBubble>
          <Heading noSpacing>Favourite projects I’ve worked</Heading>
          <Paragraph>My proudest work, displayed first</Paragraph>
        </TimelineBubble>

        <Breakout>
          <StampedCard>
            <Heading subtitle="Courses that are more than just video">
              Designcourse
            </Heading>
            <Paragraph>
              An interactive digital course platform. Learn UI/UX, CSS, Web
              animations and much more from Gary Simon - an industry expert with
              20 years of experience.
            </Paragraph>
            <Paragraph>
              Maintaining and developing a platform with 16 thousand users gave
              me an opportunity to learn lots of things, not just code but also
              maintaining and securing servers.
            </Paragraph>
            <Link to="#test">About Designcourse</Link>
          </StampedCard>

          <StampedCard>
            <Heading subtitle="Collection of composable tools">NeatoJS</Heading>
            <Paragraph>
              When developing applications in NodeJS you will discover a bunch
              of annoyances that haven’t been properly solved. NeatoJS is here
              to fill that gap.
            </Paragraph>
            <Link to="#test">About NeatoJS</Link>
          </StampedCard>
        </Breakout>

        <TimelineBubble class="mt-12">
          <Heading noSpacing>Past projects</Heading>
          <Paragraph>
            These projects are no longer active, but I still hold them dear.
          </Paragraph>
        </TimelineBubble>

        <Breakout>
          <StampedCard>
            <Heading subtitle="Courses that are more than just video">
              Designcourse
            </Heading>
            <Paragraph>
              An interactive digital course platform. Learn UI/UX, CSS, Web
              animations and much more from Gary Simon - an industry expert with
              20 years of experience.
            </Paragraph>
            <Paragraph>
              Maintaining and developing a platform with 16 thousand users gave
              me an opportunity to learn lots of things, not just code but also
              maintaining and securing servers.
            </Paragraph>
            <Link to="#test">About Designcourse</Link>
          </StampedCard>

          <StampedCard>
            <Heading subtitle="Collection of composable tools">NeatoJS</Heading>
            <Paragraph>
              When developing applications in NodeJS you will discover a bunch
              of annoyances that haven’t been properly solved. NeatoJS is here
              to fill that gap.
            </Paragraph>
            <Link to="#test">About NeatoJS</Link>
          </StampedCard>
        </Breakout>
      </Timeline>
    </>
  );
}
