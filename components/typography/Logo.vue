<template>
  <DesigncourseLogo v-if="logo === 'designcourse'" />
  <Icon v-else icon="question" />
</template>

<script>
import DesigncourseLogo from "~/assets/logos/designcourse.svg?inline";

export default {
  components: {
    DesigncourseLogo,
  },
  props: {
    logo: {
      type: String,
      required: true,
    },
  },
};
</script>
