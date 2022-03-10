<template>
  <div>
    <h1
      class="font-bold font-display leading-12 mb-8 text-4xl text-white"
      v-if="size === '1'"
    >
      <slot />
    </h1>
    <h2
      class="font-bold font-display mb-4 text-2xl text-white"
      v-else-if="size === '2'"
    >
      <slot />
    </h2>
    <h3
      class="font-bold font-display mb-2 text-xl text-white"
      v-else-if="size === '3'"
    >
      <slot />
    </h3>
    <p class="font-bold mb-8 text-white" v-else><slot /></p>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "3",
    },
  },
};
</script>
