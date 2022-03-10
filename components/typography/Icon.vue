<template>
  <BriefCaseIcon v-if="icon === 'briefcase'" />
  <PenIcon v-else-if="icon === 'pen'" />
  <PersonIcon v-else-if="icon === 'person'" />
  <HeartIcon v-else-if="icon === 'heart'" />
  <span v-else>?</span>
</template>

<script>
import BriefCaseIcon from "~/assets/icons/briefcase.svg?inline";
import PenIcon from "~/assets/icons/pen.svg?inline";
import PersonIcon from "~/assets/icons/person.svg?inline";
import HeartIcon from "~/assets/icons/heart.svg?inline";

export default {
  components: {
    BriefCaseIcon,
    PenIcon,
    PersonIcon,
    HeartIcon,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
