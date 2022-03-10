<template>
  <div
    class="bg-bray-500 rounded-md px-8 py-4 article-card-long flex justify-between theme-green"
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
