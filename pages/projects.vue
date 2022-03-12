<template>
  <Container>
    <div class="mt-32">
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
