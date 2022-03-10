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
            <Heading size="3">How to be properly dumb</Heading>
            <Paragraph>
              A course platform made from scratch for Gary Simon from
              Designcourse
            </Paragraph>
            <ArrowLink to="/projects">Continue reading</ArrowLink>
          </ArticleCard>
          <ArticleCard has-tag>
            <Heading size="3">How I made Skillform</Heading>
            <Paragraph>
              A course platform made from scratch for Gary Simon from
              Designcourse
            </Paragraph>
            <ArrowLink to="/projects">Continue reading</ArrowLink>
          </ArticleCard>
        </ArticleCardGrid>
        <LongArticleCard>
          <Heading size="3">Look through all my posts</Heading>
          <ArrowLink to="/projects">See all articles</ArrowLink>
        </LongArticleCard>
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
