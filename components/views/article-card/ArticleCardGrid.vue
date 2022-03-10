<template>
  <div class="article-card-grid -mx-2 flex">
    <slot />
  </div>
</template>

<style scoped>
.article-card-grid > * {
  @apply mx-2 mb-4 w-1/2 flex-1;
}
</style>
