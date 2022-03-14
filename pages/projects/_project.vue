<template>
  <Container>
    <div class="flex">
      <div class="flex-1">
        <BlogContent :document="page" type="project" />
      </div>
      <div class="w-44 ml-16 mt-8 hidden md:block">
        <TableOfContents :items="tocFiltered" :document="page" />
      </div>
    </div>
  </Container>
</template>

<script>
import { themeColorMixin } from "@/mixins/themeColor";
import { postMetaMixin } from "@/mixins/postMeta";
import { headMixin } from "@/mixins/head";

export default {
  mixins: [headMixin(themeColorMixin("blue"), postMetaMixin("page"))],
  async asyncData({ $content, params, error }) {
    const postResults = await $content("/projects")
      .where({
        $or: [
          { slug: { $eq: params.project } },
          { aliases: { $contains: params.project } },
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
