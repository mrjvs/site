<template>
  <div>
    <div class="blog-content line-numbers">
      <div class="main-heading">
        <ArrowLink v-if="type === 'project'" to="/projects" reverse>
          All projects
        </ArrowLink>
        <ArrowLink v-else-if="type === 'blog'" to="/writing" reverse>
          All posts
        </ArrowLink>
        <h1 id="title">{{ document.title }}</h1>
        <TagsFromPost :post="document" :has-created-at="type === 'blog'" />
        <div class="-mt-8">
          <ArrowLink v-if="type === 'project'" :href="document.link">
            Check out the project
          </ArrowLink>
        </div>
      </div>

      <NuxtContent :document="document" />
    </div>
  </div>
</template>

<style lang="scss">
.blog-content {
  /* heading overwrites */
  .main-heading {
    h1 {
      @apply mt-4;
    }
    @apply my-16;
  }

  /* headings */
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

  /* paragraphs */
  p {
    @apply mb-7;
  }

  /* dividers */
  hr {
    @apply w-full border-0 bg-bray-400 my-14;
    height: 2px;
  }

  /* links */
  .nuxt-content {
    a {
      @apply text-thm-green hover:text-opacity-75 font-bold underline;
    }
  }

  /* inline code block */
  code {
    @apply bg-bray-700 rounded-md text-opacity-75 text-bray-100 py-1 px-2 mx-2;
  }

  /* lists */
  ul {
    @apply -mt-4 mb-8 relative;

    > li {
      @apply mb-3 ml-10;

      &::before {
        @apply h-6 w-6 block absolute left-2;
        content: "";
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("/icons/list-icon.svg");
      }
    }
  }

  /* codeblock - base */
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    @apply bg-bray-500 rounded-md p-8 mb-7;

    &:hover {
      scrollbar-color: theme("colors.bray.700") transparent;
      &::-webkit-scrollbar-thumb {
        @apply bg-bray-700;
      }
    }
    scrollbar-color: transparent transparent;
    scrollbar-width: thin;
    scroll-padding: 15px;

    /* Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: tranparent;
      border-radius: 20px;
    }
  }

  /* codeblock - line numbers */
  pre[class*="language-"].line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }

  pre[class*="language-"].line-numbers > code {
    position: relative;
    white-space: inherit;
  }

  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3.5em; /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .line-numbers-rows > span {
    display: block;
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before {
    content: counter(linenumber);
    @apply text-bray-100 opacity-50;
    display: block;
    padding-right: 0.8em;
    text-align: right;
    margin-top: -1px;
    margin-bottom: 1px;
  }

  /* codeblock - toolbar */
  .nuxt-content-highlight .code-toolbar {
    @apply relative;

    .toolbar {
      @apply absolute flex justify-center items-center flex-row-reverse top-3 right-4 font-bold text-bray-100;

      .copy-to-clipboard-button {
        @apply w-5 h-5 ml-2 hover:opacity-75 mt-1;
        font-size: 0;
        background-image: url("/icons/icon-copy.svg");
        background-position: center;
        background-repeat: no-repeat;

        &::after {
          @apply w-5 h-5 inline-block;
          background-image: url("/icons/icon-checkmark.svg");
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0;
          content: "";
        }
        &[data-copy-state="copy-success"]::after {
          opacity: 1;
        }
        &[data-copy-state="copy-success"] {
          @apply cursor-default;
          opacity: 1;
          background-position-x: 100vw;
        }
      }
    }
  }
}
</style>

<script>
import Prism from "@/plugins/prism";

export default {
  props: {
    document: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: "blog",
    },
  },
  mounted() {
    Prism.highlightAll();
  },
};
</script>
