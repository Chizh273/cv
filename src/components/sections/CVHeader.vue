<template>
  <header class="cv-header cv-header--grid">
    <div class="cv-header__left">
      <h1 class="cv-header__title">{{ name }}</h1>
      <h2 class="cv-header__position">{{ position }}</h2>
    </div>

    <div class="cv-header__contacts">
      <div
        v-for="contact in contacts"
        :key="contact.label.text + contact.value"
        class="cv-header__contact-item"
      >
        <TextWithIcon
          :text="contact.label.text"
          :icon-definition="contact.label.iconDefinition"
          :icon-vertical-align="contact.label.iconVerticalAlign"
        />
        <span v-html="contact.value" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { CvHeaderProps } from '@/types';
import TextWithIcon from '@/components/shared/TextWithIcon.vue';

defineProps<CvHeaderProps>();
</script>

<style scoped>
@reference "../../assets/tailwind.css";

.cv-header--grid {
  @apply flex flex-col sm:flex-row md:justify-between md:items-center gap-4 mb-8 print:flex-row print:justify-between print:items-center;
}

.cv-header__left {
  @apply flex flex-col items-start;
}

.cv-header__title {
  @apply text-3xl font-bold leading-tight;
}

.cv-header__position {
  @apply text-lg text-gray-600 mt-1;
}

.cv-header__contacts {
  @apply flex flex-col gap-1 text-xs text-gray-500;
}

.cv-header__contact-item {
  @apply flex items-center gap-1;
}
</style>
