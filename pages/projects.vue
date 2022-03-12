<template>
  <Container>
    <div class="mt-32 mb-32">
      <Heading size="2">My projects</Heading>
      <Paragraph
        >Sed sollicitudin risus at porta viverra.<br />
        Suspendisse quis laoreet dui.
      </Paragraph>
      <div class="my-8 space-y-3">
        <ProjectCard to="/projects">
          <ProjectCardLogo><DesigncourseLogo /></ProjectCardLogo>
          <ProjectCardContent title="Designcourse">
            <Paragraph>
              A course platform made from scratch for Gary Simon from
              Designcourse
            </Paragraph>
          </ProjectCardContent>
        </ProjectCard>
        <ProjectCard to="/projects">
          <ProjectCardLogo><DesigncourseLogo /></ProjectCardLogo>
          <ProjectCardContent title="Designcourse">
            <Paragraph>
              A course platform made from scratch for Gary Simon from
              Designcourse
            </Paragraph>
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
import DesigncourseLogo from "~/assets/icons/logos/designcourse.svg?inline";

export default {
  components: {
    DesigncourseLogo,
  },
  head: {
    bodyAttrs: {
      "data-theme": "blue",
    },
  },
};
</script>
