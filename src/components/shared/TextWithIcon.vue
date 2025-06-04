<template>
  <span class="name-with-icon" :class="'name-with-icon--' + iconVerticalAlign">
    <SvgIcon
      v-if="iconDefinition"
      :icon="iconDefinition.icon"
      :alt="iconDefinition.alt"
      :title="iconDefinition.title"
      :size="iconDefinition.size"
    />
    {{ text }}
  </span>
</template>

<script setup lang="ts">
import { TextWithIconProps } from '@/types';
import SvgIcon from '@/components/shared/SvgIcon.vue';

withDefaults(defineProps<TextWithIconProps>(), {
  iconVerticalAlign: 'baseline-last'
});
</script>

<style scoped>
@reference "../../assets/tailwind.css";

.name-with-icon {
  @apply inline-flex gap-1 text-gray-700 break-words;
}

.name-with-icon--baseline {
  @apply items-baseline;
}

.name-with-icon--baseline-last {
  @apply items-baseline-last;
}

.name-with-icon--center-safe {
  @apply items-center-safe;
}

.name-with-icon--end-safe {
  @apply items-end-safe;
}

.name-with-icon--center {
  @apply items-center;
}

.name-with-icon--end {
  @apply items-end;
}
</style>
