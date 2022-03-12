<template>
  <Container>
    <div class="flex">
      <div class="flex-1">
        <BlogContent :document="page" />
      </div>
      <div class="w-44 ml-16 mt-8 hidden md:block">
        <TableOfContents :items="tocFiltered" :document="page" />
      </div>
    </div>
  </Container>
</template>

<script>
export default {
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
  head() {
    return {
      bodyAttrs: {
        "data-theme": "green",
      },
      title: this.page.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description,
        },
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.page.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.page.description,
        },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.page.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.page.description,
        },
      ],
    };
  },
  computed: {
    tocFiltered() {
      return this.page.toc.filter((link) => link.depth === 2);
    },
  },
};
</script>
