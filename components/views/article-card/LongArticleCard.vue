<template>
  <div
    class="bg-bray-500 rounded-md px-8 py-4 article-card-long space-y-2 sm:space-y-0 flex-col sm:flex-row flex justify-between theme-green"
  >
    <slot />
  </div>
</template>

<style>
.article-card-long * {
  @apply mb-0 mt-0;
}
.article-card-long > p.paragraph {
  @apply mb-4;
}
</style>
