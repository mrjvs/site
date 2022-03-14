<template>
  <Container>
    <div v-for="(post, i) in posts" :key="post.slug">
      <Divider v-if="i !== 0" />

      <div class="max-w-2xl my-16">
        <Heading size="2" class="max-w-xl">{{ post.title }}</Heading>
        <TagsFromPost :post="post" />
        <Paragraph>
          {{ post.description }}
        </Paragraph>
        <ArrowLink :to="`/${post.slug}`">Continue reading</ArrowLink>
      </div>
    </div>
  </Container>
</template>

<script>
import { headMixin } from "~/mixins/head";
import { themeColorMixin } from "~/mixins/themeColor";

export default {
  mixins: [headMixin(themeColorMixin("green"))],
  async asyncData({ $content, params, error }) {
    const postResults = await $content("/articles")
      .where({ categories: { $contains: params.category } })
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    if (postResults.length == 0)
      return error({ statusCode: 404, message: "Page not found" });

    return {
      posts: postResults,
    };
  },
};
</script>
