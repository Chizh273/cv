<template>
  <section class="cv-education">
    <h3>Education</h3>
    <ul class="cv-education__list">
      <li
        v-for="edu in education"
        :key="edu.institution + edu.specialization + edu.degree"
        class="cv-education__item"
      >
        <div class="cv-education__degree-row">
          <span class="cv-education__degree">{{ edu.degree }}</span>
          <span class="cv-education__period">{{ edu.period }}</span>
        </div>
        <div class="cv-education__institution">{{ edu.institution }}</div>
        <div class="cv-education__specialization">{{ edu.specialization }}</div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { CvEducationProps } from '@/types';

defineProps<CvEducationProps>();
</script>

<style scoped>
@reference "../../assets/tailwind.css";

.cv-education__list {
  @apply list-disc pl-5 mb-2;
}
.cv-education__item {
  @apply mb-4;
}
.cv-education__degree-row {
  @apply flex items-center justify-between mb-1;
}
.cv-education__degree {
  @apply font-semibold text-base;
}
.cv-education__period {
  @apply text-xs text-gray-400 ml-2;
}
.cv-education__institution {
  @apply text-sm text-gray-600;
}
.cv-education__specialization {
  @apply text-sm text-gray-500;
}
</style>
