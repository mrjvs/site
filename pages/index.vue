<template>
  <Container>
    <!-- HERO -->
    <div class="max-w-2xl mt-32 mb-32">
      <Heading size="1" class="max-w-xl">
        I'm Jelle van Snik, I specialize in full stack web development
      </Heading>
      <Paragraph>
        Sed sollicitudin risus at porta viverra. Suspendisse quis laoreet dui.
        In hac habitasse platea dictumst. Suspendisse et felis quis felis
        elementum fringilla. Aenean facilisis congue.
      </Paragraph>
      <Paragraph>
        viverra. Suspendisse nisi turpis, lobortis sed libero sodales, pharetra
        tempor ex. Sed in rutrum tortor. Ut maximus leo fermentum mattis
        lobortis.
      </Paragraph>
    </div>

    <Divider icon="briefcase" color="blue" />

    <!-- PROJECTS -->
    <div class="mt-24 mb-32">
      <Heading size="2">My projects</Heading>
      <Paragraph
        >Sed sollicitudin risus at porta viverra.<br />
        Suspendisse quis laoreet dui.
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
      <Paragraph
        >Sed sollicitudin risus at porta viverra.<br />
        Suspendisse quis laoreet dui.
      </Paragraph>
      <div class="my-8">
        <ArticleCardGrid>
          <ArticleCard tag="newest post">
            <Heading size="3">{{ latestPost.title }}</Heading>
            <Paragraph>
              {{ latestPost.description }}
            </Paragraph>
            <ArrowLink :to="`/${latestPost.slug}`">Continue reading</ArrowLink>
          </ArticleCard>
          <ArticleCard has-tag>
            <Heading size="3">How I made Skillform</Heading>
            <Paragraph>
              A course platform made from scratch for Gary Simon from
              Designcourse
            </Paragraph>
            <ArrowLink to="/writing/skillform">Continue reading</ArrowLink>
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
import { themeColorMixin } from "~/mixins/themeColor";

export default {
  mixins: [headMixin(themeColorMixin("blue"))],
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

    return {
      latestPost: post[0],
      projects,
    };
  },
};
</script>
