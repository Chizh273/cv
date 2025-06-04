<template>
  <section class="cv-projects">
    <h3>Projects</h3>
    <div v-for="project in projects" :key="project.title" class="project">
      <div class="project__header">
        <h4 class="project__title">{{ project.title }}</h4>
        <span class="project__period">{{ project.period }}</span>
      </div>

      <div class="project__position"><strong>Position:</strong> {{ project.position }}</div>
      <div class="project__tech-stack">
        <strong>Tech Stack:&nbsp;</strong>
        <template v-for="(tech, index) in project.tech" :key="tech.text">
          <TextWithIcon
            :text="tech.text"
            :icon-definition="tech.iconDefinition"
            :icon-vertical-align="tech.iconVerticalAlign"
          />
          <template v-if="index !== project.tech.length - 1">,&nbsp;</template>
        </template>
      </div>

      <div class="project__description">{{ project.description }}</div>

      <div v-for="list in project.lists" :key="list.title" class="project__list">
        <strong class="project__list-title">{{ list.title }}</strong>
        <ul class="project__list-items">
          <li v-for="item in list.items" :key="item" class="project__list-item" v-html="item" />
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CvProjectsProps } from '@/types';
import TextWithIcon from '@/components/shared/TextWithIcon.vue';

defineProps<CvProjectsProps>();
</script>

<style scoped>
@reference "../../assets/tailwind.css";

.cv-projects {
  @apply mb-8;
}

.project {
  @apply mb-6;
}

.project__header {
  @apply flex flex-col md:flex-row md:items-center md:justify-between mb-2;
}

.project__title {
  @apply text-xl font-bold;
}

.project__period {
  @apply text-sm text-gray-500;
}

.project__position,
.project__tech-stack {
  @apply mb-1;
}

.project__description {
  @apply mt-2 mb-2 text-justify;
}
.project__list {
  @apply mt-2;
}

.project__list-title {
  @apply text-base font-semibold mb-1;
}

.project__list-items {
  @apply list-disc pl-5 mb-2;
}

.project__list-item {
  @apply text-sm break-words;
}
</style>
