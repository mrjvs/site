<template>
  <nav>
    <ul
      class="flex-col bg-bray-700 bg-opacity-50 rounded-md sm:flex-row sm:bg-transparent flex items-stretch sm:items-center py-2 sm:py-0 my-6 sm:my-8"
    >
      <NavigationItem>
        <div class="py-3 px-4 sm:px-0 sm:mr-10">
          <slot name="brand"><NavigationBrand /></slot>
        </div>
        <div class="flex sm:hidden flex-1 justify-end">
          <button
            class="mx-4 flex-shrink-0 h-10 w-10 rounded-full flex justify-center items-center bg-transparent transition-colors hover:bg-bray-300 focus:text-white"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            <Icon v-if="mobileNavOpen" icon="close" />
            <Icon v-else icon="hamburger" />
          </button>
        </div>
      </NavigationItem>
      <div
        class="hidden sm:flex flex-col sm:flex-row items-start sm:items-center"
      >
        <slot />
      </div>
      <div v-if="mobileNavOpen" class="flex flex-col items-start sm:hidden">
        <slot />
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileNavOpen: false,
    };
  },
};
</script>
