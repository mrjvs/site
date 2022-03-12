<template>
  <Tags :items="items" />
</template>

<script>
import { DateTime } from "luxon";

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      const now = DateTime.now();
      const createdAt = DateTime.fromISO(this.post.createdAt);
      const diff = now.diff(createdAt);
      const twoDaysIntervalInHours = 2 * 24;

      // if created less than 2 days ago, show relative duration
      if (diff.as("hours") <= twoDaysIntervalInHours)
        return createdAt.toRelative();
      return createdAt.toLocaleString(DateTime.DATE_MED);
    },
    items() {
      const categories = this.post.categories ?? [];
      return [...categories, this.formattedDate];
    },
  },
};
</script>
