<template>
  <Container>
    <!-- NEWEST POST -->
    <div class="max-w-2xl mt-32 mb-16">
      <Tagline>latest post</Tagline>
      <Heading size="2" class="max-w-xl">{{ firstPost.title }}</Heading>
      <TagsFromPost :post="firstPost" has-created-at />
      <Paragraph>
        {{ firstPost.description }}
      </Paragraph>
      <ArrowLink :to="`/${firstPost.slug}`">Continue reading</ArrowLink>
    </div>

    <Divider />

    <!-- WRITING CATEGORIES -->
    <div class="my-16">
      <Heading size="2">My development journeys</Heading>
      <Paragraph>
        Come and tag along with me as I go <br />
        through my development journeys.
      </Paragraph>
      <div class="my-8">
        <ArticleCardGrid>
          <ArticleCard v-for="category in categories" :key="category.category">
            <Heading size="3">{{ category.title }}</Heading>
            <Paragraph>
              {{ category.description }}
            </Paragraph>
            <ArrowLink :to="`/writing/${category.category}`">
              See the posts
            </ArrowLink>
          </ArticleCard>
        </ArticleCardGrid>
      </div>
    </div>

    <!-- REST OF POSTS -->
    <div v-for="post in restOfPosts" :key="post.slug">
      <Divider />

      <div class="max-w-2xl my-16">
        <Heading size="2" class="max-w-xl">{{ post.title }}</Heading>
        <TagsFromPost :post="post" has-created-at />
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
import { iconMixin } from "~/mixins/icon";
import { themeColorMixin } from "~/mixins/themeColor";

export default {
  mixins: [headMixin(themeColorMixin("green"), iconMixin("writing"))],
  async asyncData({ $content, params, error }) {
    const categories = await $content("/categories")
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    const postResults = await $content("/articles")
      .sortBy("createdAt", "desc")
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      posts: postResults,
      categories,
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
