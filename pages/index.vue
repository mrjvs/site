<template>
  <Container>
    <!-- HERO -->
    <div class="max-w-2xl mt-32 mb-32">
      <Heading size="1" class="max-w-xl">
        I'm Jelle van Snik, I specialise in full stack development
      </Heading>
      <Paragraph>
        I am a Dutch developer with a keen attention to detail, looking at
        applications from all angles. My passions lie in UI design and crafting
        scalable infrastructure.
      </Paragraph>
      <Paragraph>
        Aside from development, I love to play musical instruments and I spend
        far too much time finding new indie-games to play.
      </Paragraph>
      <Paragraph>
        Currently a student at Codam Coding College, upping my knowledge on
        lower level programming. The curriculum contains exciting projects such
        as creating your own OS kernel and making a gameboy emulator - both from
        scratch. Both of which I'm unreasonably excited for.
      </Paragraph>
    </div>

    <Divider icon="briefcase" color="blue" />

    <!-- PROJECTS -->
    <div class="mt-24 mb-32">
      <Heading size="2">My projects</Heading>
      <Paragraph>
        Carefully picked projects, emphasising<br />
        the ones I enjoyed the most
      </Paragraph>
      <div class="my-8 space-y-3">
        <ProjectCard
          v-for="(project, i) in projects"
          :key="i"
          :to="`/projects/${project.slug}`"
        >
          <ProjectCardLogo><Logo :logo="project.logo" /></ProjectCardLogo>
          <ProjectCardContent :title="project.title">
            <Paragraph>{{ project.description }}</Paragraph>
          </ProjectCardContent>
        </ProjectCard>
      </div>
    </div>

    <Divider icon="pen" color="green" />

    <!-- WRITING -->
    <div class="mt-24">
      <Heading size="2">My writing</Heading>
      <Paragraph>
        I like to pass on my knowledge,<br />
        my thoughts and my mistakes
      </Paragraph>
      <div class="my-8">
        <ArticleCardGrid>
          <ArticleCard tag="latest post">
            <Heading size="3">{{ latestPost.title }}</Heading>
            <Paragraph>
              {{ latestPost.description }}
            </Paragraph>
            <ArrowLink :to="`/${latestPost.slug}`">Continue reading</ArrowLink>
          </ArticleCard>
          <ArticleCard has-tag>
            <Heading size="3">{{ featuredCategory.title }}</Heading>
            <Paragraph>
              {{ featuredCategory.description }}
            </Paragraph>
            <ArrowLink :to="`/writing/${featuredCategory.category}`">
              See all posts
            </ArrowLink>
          </ArticleCard>
        </ArticleCardGrid>
        <LongArticleCard>
          <Heading size="3">Look through all my posts</Heading>
          <ArrowLink to="/writing">See all articles</ArrowLink>
        </LongArticleCard>
      </div>
    </div>
  </Container>
</template>

<script>
import { headMixin } from "~/mixins/head";
import { iconMixin } from "~/mixins/icon";
import { themeColorMixin } from "~/mixins/themeColor";

export default {
  mixins: [headMixin(themeColorMixin("blue"), iconMixin("about"))],
  async asyncData({ $content, params, error }) {
    const post = await $content("/articles")
      .sortBy("createdAt", "desc")
      .limit(1)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    const projects = await $content("/projects")
      .sortBy("createdAt", "desc")
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    const featuredCategory = await $content("/categories")
      .where({ featured: { $eq: true } })
      .limit(1)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      latestPost: post[0],
      projects,
      featuredCategory: featuredCategory[0],
    };
  },
};
</script>
