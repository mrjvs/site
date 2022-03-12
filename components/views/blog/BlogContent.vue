<template>
  <div>
    <div class="blog-content">
      <div class="main-heading">
        <ArrowLink to="/writing" reverse>Back to all posts</ArrowLink>
        <h1 id="title">{{ document.title }}</h1>
        <TagsFromPost :post="document" />
      </div>

      <NuxtContent :document="document" />
    </div>
  </div>
</template>

<style lang="scss">
.blog-content {
  .main-heading {
    h1 {
      @apply mt-4;
    }
    @apply my-16;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-bold font-display text-white text-lg mb-4 mt-12;
  }
  h1 {
    @apply leading-8 md:leading-12 mb-8 text-2xl md:text-4xl;
  }
  h2 {
    @apply leading-8 md:leading-12 mb-8 mt-24 text-3xl;
  }
  p {
    @apply mb-7;
  }

  hr {
    @apply w-full border-0 bg-bray-400 my-10;
    height: 2px;
  }
}
</style>

<script>
export default {
  props: {
    document: {
      type: Object,
      required: true,
    },
  },
};
</script>
