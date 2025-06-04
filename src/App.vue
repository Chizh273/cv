<template>
  <main class="cv-container">
    <CVHeader :name="cvData.name" :position="cvData.position" :contacts="cvData.contacts" />
    <CVSummary :summary="cvData.summary" />
    <CVProjects :projects="cvData.projects" />
    <CvEducation :education="cvData.education" />
    <CVTechnologies :technologies="cvData.technologies" />

    <button class="cv-print-button" @click="generatePDF">Download PDF</button>
  </main>
</template>

<script setup lang="ts">
import CVHeader from '@/components/sections/CVHeader.vue';
import CVSummary from '@/components/sections/CVSummary.vue';
import CVProjects from '@/components/sections/CVProjects.vue';
import CvEducation from '@/components/sections/CVEducation.vue';
import CVTechnologies from '@/components/sections/CVTechnologies.vue';
import cvData from '@/data/data.json';

const generatePDF = () => print();
</script>

<style scoped>
@reference "./assets/main.css";

.cv-container {
  @apply max-w-3xl mx-auto my-8 p-8 bg-white rounded-xl shadow-lg font-sans print:shadow-none
    print:p-0 print:bg-transparent print:max-w-none;
}

.cv-print-button {
  @apply block mx-auto mt-8 mb-0 px-6 py-2 rounded-lg font-semibold text-base bg-gray-700 hover:bg-gray-800 text-gray-100 shadow transition-colors duration-200 print:hidden;
}
</style>
