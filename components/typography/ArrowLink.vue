<template>
  <NuxtLink
    :to="to"
    class="inline-flex justify-start font-bold items-center text-thm group"
  >
    <span class="mr-3">
      <slot />
    </span>
    <LongArrowIcon
      class="text-xs transition-transform transform mt-1 group-hover:translate-x-1"
    />
  </NuxtLink>
</template>

<script>
import LongArrowIcon from "~/assets/icons/long-arrow.svg?inline";

export default {
  components: {
    LongArrowIcon,
  },
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
