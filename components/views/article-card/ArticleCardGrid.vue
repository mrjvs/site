<template>
  <div class="article-card-grid -mx-2 flex">
    <slot />
  </div>
</template>

<style scoped>
.article-card-grid > * {
  @apply mx-2 mb-4 w-1/2 flex-1;
}
@media screen and (max-width: 700px) {
  .article-card-grid {
    @apply flex-col mx-0;
  }
  .article-card-grid > * {
    @apply mx-0 w-full;
  }
}
</style>
