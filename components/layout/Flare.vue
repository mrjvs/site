<template>
  <div>
    <div class="top-0 left-0 right-0 absolute flare" />
  </div>
</template>

<style scoped>
.flare {
  height: 40rem;
  opacity: 0.1;

  user-select: none;
  pointer-events: none;
  background: linear-gradient(
    166deg,
    var(--theme-color-dark) 4%,
    transparent 37%
  );
}
</style>
