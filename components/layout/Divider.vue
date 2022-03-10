<template>
  <div class="w-full relative h-12">
    <hr class="w-full h-div border-0 bg-bray-400" />
    <div
      class="absolute left-0 right-0 -top-6 flex justify-center items-center"
      :class="{
        'theme-green': color === 'green',
        'theme-pink': color === 'pink',
        'theme-blue': color === 'blue',
      }"
    >
      <div
        v-if="icon.length !== 0"
        class="bg-bray-400 rounded-full h-11 w-11 flex justify-center items-center text-thm"
      >
        <Icon :icon="icon" class="text-thm" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.h-div {
  height: 2px;
}
</style>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
  },
};
</script>
