<template>
  <NuxtLink
    :to="to"
    class="inline-flex justify-start font-bold items-center text-thm group"
  >
    <LongArrowIcon
      v-if="reverse"
      class="text-xs mr-3 transition-transform rotate-180 transform mt-1 group-hover:-translate-x-1"
    />
    <span class="mr-3">
      <slot />
    </span>
    <LongArrowIcon
      v-if="!reverse"
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
    reverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
