<template>
  <NuxtLink
    v-if="to && to.length > 0"
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
  <a
    v-else
    :href="href"
    target="_blank"
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
  </a>
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
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
