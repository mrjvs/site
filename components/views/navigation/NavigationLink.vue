<template>
  <NavigationItem>
    <NuxtLink
      :to="to"
      class="font-bold transition-colors text-bray-200"
      :class="{
        'link-blue hover:text-thm-blue': color === 'blue',
        'link-pink hover:text-thm-pink': color === 'pink',
        'link-green hover:text-thm-green': color === 'green',
      }"
      exact
    >
      <slot />
    </NuxtLink>
  </NavigationItem>
</template>

<style scoped>
.nuxt-link-active.link-blue {
  @apply text-thm-blue;
}
.nuxt-link-active.link-green {
  @apply text-thm-green;
}
.nuxt-link-active.link-pink {
  @apply text-thm-pink;
}
</style>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
