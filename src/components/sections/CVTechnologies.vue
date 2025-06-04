<template>
  <section class="cv-technologies">
    <h3>Technologies & Scores</h3>
    <ul class="cv-technologies__list">
      <li v-for="tech in technologies" :key="tech.tech.text" class="cv-technologies__item">
        <TextWithIcon
          :text="tech.tech.text"
          :icon-definition="tech.tech.iconDefinition"
          :icon-vertical-align="tech.tech.iconVerticalAlign"
          class="cv-technologies__name"
        />
        <div class="cv-technologies__info">
          <div class="cv-technologies__progress-row">
            <div class="cv-technologies__progress-wrapper">
              <div class="cv-technologies__progress" :style="{ width: `${tech.score * 10}%` }" />
            </div>
            <span class="cv-technologies__score">{{ tech.score }}/10</span>
          </div>
          <div class="cv-technologies__description">{{ tech.description }}</div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { CvTechnologiesProps } from '@/types';
import TextWithIcon from '@/components/shared/TextWithIcon.vue';

defineProps<CvTechnologiesProps>();
</script>

<style scoped>
@reference "../../assets/tailwind.css";

.cv-technologies__list {
  @apply list-none p-0;
}

.cv-technologies__item {
  @apply md:flex md:flex-row print:flex print:flex-row items-baseline justify-between gap-4 mb-2;
}

.cv-technologies__name {
  @apply md:w-[14%] print:w-[14%] md:min-w-[80px] md:max-w-[200px];
}

.cv-technologies__info {
  @apply md:w-[86%] print:w-[86%];
}

.cv-technologies__progress-row {
  @apply flex items-center justify-between;
}

.cv-technologies__progress-wrapper {
  @apply w-[90%] h-4 mr-2 bg-gray-200 rounded-full;
  print-color-adjust: exact;
}

.cv-technologies__progress {
  @apply bg-blue-600 rounded-full h-full;
}

.cv-technologies__score {
  @apply w-[10%] min-w-[32px] text-right;
}

.cv-technologies__description {
  @apply text-sm text-gray-500 mt-1;
}
</style>
