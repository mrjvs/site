<template>
  <Container>
    <div class="mt-32 mb-32">
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
    <div class="max-w-sm mx-auto text-center">
      <Heading size="2">That's all my featured projects</Heading>
      <Paragraph>
        What can I say? It's a hard page to write. I'll get it done some day
        though. For now all I can give you is a link back home
      </Paragraph>
      <ArrowLink to="/">Check my github</ArrowLink>
    </div>
  </Container>
</template>

<script>
import { headMixin } from "~/mixins/head";
import { iconMixin } from "~/mixins/icon";
import { themeColorMixin } from "~/mixins/themeColor";

export default {
  mixins: [headMixin(themeColorMixin("blue"), iconMixin("projects"))],
  async asyncData({ $content, params, error }) {
    const projects = await $content("/projects")
      .sortBy("createdAt", "desc")
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      projects,
    };
  },
};
</script>
