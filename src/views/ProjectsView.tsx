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
          <Heading noSpacing>Favourite projects I've worked</Heading>
          <Paragraph>Sorted by significance</Paragraph>
        </TimelineBubble>

        <Breakout>
          <StampedCard>
            <Heading subtitle="Courses that are more than just video">
              DesignCourse
            </Heading>
            <Paragraph>
              An interactive digital course platform. Learn UI/UX, CSS, Web
              animations and much more from Gary Simon - an industry expert with
              20 years of experience.
            </Paragraph>
            <Paragraph>
              Maintaining and developing a platform with 16 thousand users gives
              you an insight on not just how to maintain code, but also the
              significance of hosting securely.
            </Paragraph>
            <Link to="https://designcourse.com">About DesignCourse</Link>
          </StampedCard>

          <StampedCard>
            <Heading subtitle="Collection of composable tools">NeatoJS</Heading>
            <Paragraph>
              NeatoJS is a project that I started to address issues that I had
              with existing libraries and tools in the JavaScript ecosystem.
            </Paragraph>
            <Paragraph>
              Currently consists of a config library for strongly typed and
              validated runtime configuration, and a flexible documentation tool
              that looks good out of the box.
            </Paragraph>

            <Link to="https://neatojs.com">About NeatoJS</Link>
          </StampedCard>
          
          <StampedCard>
            <Heading subtitle="Reliable and high quality uptime tracker">Statulo</Heading>
            <Paragraph>
              Statulo is a project I started with a buddy because most uptime trackers I tried were either too limited, too expensive, or don't feel nice to use.
            </Paragraph>
            <Paragraph>
              It’s still early, but the goal is simple: Cheap, reliable and it must feel nice to use.
            </Paragraph>
          
            <Link to="https://github.com/statulo/statulo">About Statulo</Link>
          </StampedCard>
        </Breakout>
      </Timeline>
    </>
  );
}
