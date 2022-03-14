<template>
  <Container>
    <div class="flex mb-24">
      <div class="flex-1">
        <BlogContent :document="page" type="blog" />
      </div>
      <div class="w-44 ml-16 mt-8 hidden md:block">
        <TableOfContents :items="tocFiltered" :document="page" />
      </div>
    </div>
    <LongArticleCard>
      <Heading size="3">Look through all my posts</Heading>
      <ArrowLink to="/writing">See all articles</ArrowLink>
    </LongArticleCard>
  </Container>
</template>

<script>
import { themeColorMixin } from "@/mixins/themeColor";
import { postMetaMixin } from "@/mixins/postMeta";
import { headMixin } from "@/mixins/head";
import { iconMixin } from "~/mixins/icon";

export default {
  mixins: [
    headMixin(
      themeColorMixin("green"),
      iconMixin("writing"),
      postMetaMixin("page")
    ),
  ],
  async asyncData({ $content, params, error }) {
    const postResults = await $content("/articles")
      .where({
        $or: [
          { slug: { $eq: params.post } },
          { aliases: { $contains: params.post } },
        ],
      })
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    if (postResults.length == 0)
      return error({ statusCode: 404, message: "Page not found" });

    return {
      page: postResults[0],
    };
  },
  computed: {
    tocFiltered() {
      return this.page.toc.filter((link) => link.depth === 2);
    },
  },
};
</script>
