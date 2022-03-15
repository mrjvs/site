<template>
  <Container>
    <div class="mt-32 mb-32">
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
    <div class="max-w-sm mx-auto text-center">
      <Heading size="2">That's all my featured projects</Heading>
      <Paragraph>
        I only listed the projects that I find most interesting or enjoyed a
        lot. Below I linked my github, you can use that to see more of my work.
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
