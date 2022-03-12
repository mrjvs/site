<template>
  <NuxtLink :to="to" class="block">
    <article
      class="bg-bray-500 hover:bg-bray-400 transition-colors flex-col sm:flex-row flex rounded-md overflow-hidden group relative"
    >
      <slot />
      <div
        class="absolute right-7 text-xl top-24 sm:top-0 bottom-0 transition-all opacity-0 transform group-hover:opacity-100 group-hover:translate-x-2 group-hover:text-white flex justify-center items-center"
      >
        <ChevronRightIcon />
      </div>
    </article>
  </NuxtLink>
</template>

<script>
import ChevronRightIcon from "~/assets/icons/chevron-right.svg?inline";

export default {
  components: {
    ChevronRightIcon,
  },
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
