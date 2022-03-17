<template>
  <div v-if="allItems.length > 1" class="h-full">
    <div class="sticky top-16 overflow-y-auto h-auto">
      <nav class="py-8">
        <scrollactive
          highlight-first-item
          active-class="active"
          :offset="50"
          tag="ul"
        >
          <li v-for="link of allItems" :key="link.id" class="my-2">
            <a
              :href="`#${link.id}`"
              class="block text-sm scrollactive-item link px-4 border-transparent border-l-2 ease-in-out text-bray-200 duration-150 hover:text-bray-100"
              >{{ link.text }}</a
            >
          </li>
        </scrollactive>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply text-thm-green border-thm-green;
}
.link {
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  user-select: none;
  outline-width: 0 !important;
}
</style>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    document: {
      type: Object,
      required: true,
    },
  },
  computed: {
    allItems() {
      return [
        {
          id: "title",
          text: this.document.title,
        },
        ...this.items,
      ];
    },
  },
};
</script>
