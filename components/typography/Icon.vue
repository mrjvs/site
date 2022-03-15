<template>
  <BriefCaseIcon v-if="icon === 'briefcase'" />
  <PenIcon v-else-if="icon === 'pen'" />
  <PersonIcon v-else-if="icon === 'person'" />
  <HeartIcon v-else-if="icon === 'heart'" />
  <ExclamationIcon v-else-if="icon === 'exclamation'" />
  <QuestionIcon v-else-if="icon === 'question'" />
  <HamburgerIcon v-else-if="icon === 'hamburger'" />
  <CloseIcon v-else-if="icon === 'close'" />
  <span v-else>?</span>
</template>

<script>
import BriefCaseIcon from "~/assets/icons/briefcase.svg?inline";
import PenIcon from "~/assets/icons/pen.svg?inline";
import PersonIcon from "~/assets/icons/person.svg?inline";
import HeartIcon from "~/assets/icons/heart.svg?inline";
import ExclamationIcon from "~/assets/icons/exclamation.svg?inline";
import QuestionIcon from "~/assets/icons/question.svg?inline";
import HamburgerIcon from "~/assets/icons/hamburger.svg?inline";
import CloseIcon from "~/assets/icons/close.svg?inline";

export default {
  components: {
    BriefCaseIcon,
    PenIcon,
    PersonIcon,
    HeartIcon,
    ExclamationIcon,
    QuestionIcon,
    HamburgerIcon,
    CloseIcon,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
