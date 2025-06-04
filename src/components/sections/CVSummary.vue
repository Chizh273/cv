<template>
  <section class="cv-summary">
    {{ summary }}
  </section>
</template>

<script setup lang="ts">
import { CvSummaryProps } from '@/types';

defineProps<CvSummaryProps>();
</script>

<style scoped>
@reference "../../assets/tailwind.css";

.cv-summary {
  @apply text-justify mb-8;
}
</style>
