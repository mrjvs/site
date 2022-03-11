<template>
  <Container>
    <!-- NEWEST POST -->
    <div class="max-w-2xl mt-32 mb-16">
      <Tagline>newest post</Tagline>
      <Heading size="2" class="max-w-xl">{{ firstPost.title }}</Heading>
      <Tags :items="['test', 'test2']" />
      <Paragraph>
        {{ firstPost.description }}
      </Paragraph>
      <ArrowLink :to="`/${firstPost.slug}`">Continue reading</ArrowLink>
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
            <Heading size="3">How I made Skillform</Heading>
            <Paragraph>
              A course platform made from scratch for Gary Simon from
              Designcourse
            </Paragraph>
            <ArrowLink to="/writing/skillform">Continue reading</ArrowLink>
          </ArticleCard>
          <ArticleCard>
            <Heading size="3">How I made Skillform</Heading>
            <Paragraph>
              A course platform made from scratch for Gary Simon from
              Designcourse
            </Paragraph>
            <ArrowLink to="/writing/skillform">Continue reading</ArrowLink>
          </ArticleCard>
        </ArticleCardGrid>
      </div>
    </div>

    <div v-for="(post, i) in restOfPosts" :key="post.slug">
      <Divider v-if="i !== 0" />

      <div class="max-w-2xl my-16">
        <Heading size="2" class="max-w-xl">{{ post.title }}</Heading>
        <Paragraph>
          {{ post.description }}
        </Paragraph>
        <ArrowLink :to="`/${post.slug}`">Continue reading</ArrowLink>
      </div>
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
  async asyncData({ $content, params, error }) {
    const postResults = await $content("/articles")
      .sortBy("createdAt", "desc")
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      posts: postResults,
    };
  },
  computed: {
    firstPost() {
      return this.posts[0];
    },
    restOfPosts() {
      const posts = [...this.posts];
      posts.shift();
      return posts;
    },
  },
};
</script>
