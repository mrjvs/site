<template>
  <Container>
    <!-- NEWEST POST -->
    <div class="max-w-2xl mt-32 mb-16">
      <Tagline>newest post</Tagline>
      <Heading size="2" class="max-w-xl"> How to be properly dumb </Heading>
      <Tags :items="['test', 'test2']" />
      <Paragraph>
        Sed sollicitudin risus at porta viverra. Suspendisse quis laoreet dui.
        In hac habitasse platea dictumst. Suspendisse et felis quis felis
        elementum fringilla. Aenean facilisis congue.
      </Paragraph>
      <ArrowLink to="/projects">Continue reading</ArrowLink>
    </div>

    <Divider />

    <!-- WRITING CATEGORIES -->
    <div class="my-16">
      <Heading size="2">My writing</Heading>
      <Paragraph
        >Sed sollicitudin risus at porta viverra.<br />
        Suspendisse quis laoreet dui.
      </Paragraph>
      <div class="my-8">
        <ArticleCardGrid>
          <ArticleCard>
            <Heading size="3">How to be properly dumb</Heading>
            <Paragraph>
              A course platform made from scratch for Gary Simon from
              Designcourse
            </Paragraph>
            <ArrowLink to="/projects">Continue reading</ArrowLink>
          </ArticleCard>
          <ArticleCard>
            <Heading size="3">How I made Skillform</Heading>
            <Paragraph>
              A course platform made from scratch for Gary Simon from
              Designcourse
            </Paragraph>
            <ArrowLink to="/projects">Continue reading</ArrowLink>
          </ArticleCard>
        </ArticleCardGrid>
      </div>
    </div>

    <Divider />

    <div class="max-w-2xl my-16">
      <Heading size="2" class="max-w-xl"> How to be properly dumb </Heading>
      <Paragraph>
        Sed sollicitudin risus at porta viverra. Suspendisse quis laoreet dui.
        In hac habitasse platea dictumst. Suspendisse et felis quis felis
        elementum fringilla. Aenean facilisis congue.
      </Paragraph>
      <ArrowLink to="/projects">Continue reading</ArrowLink>
    </div>

    <Divider />

    <div class="max-w-2xl my-16">
      <Heading size="2" class="max-w-xl"> How to be properly dumb </Heading>
      <Paragraph>
        Sed sollicitudin risus at porta viverra. Suspendisse quis laoreet dui.
        In hac habitasse platea dictumst. Suspendisse et felis quis felis
        elementum fringilla. Aenean facilisis congue.
      </Paragraph>
      <ArrowLink to="/projects">Continue reading</ArrowLink>
    </div>
  </Container>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      "data-theme": "green",
    },
  },
};
</script>
