<template>
  <img
    :src="resolveIcon(icon)"
    :alt="alt || icon"
    :title="title || icon"
    :class="['icon__' + size]"
  />
</template>

<script lang="ts" setup>
import { SvgIconProps } from '@/types';

withDefaults(defineProps<SvgIconProps>(), {
  size: 'small',
  alt: '',
  title: ''
});

const resolveIcon = (icon: string) => {
  return new URL(`../../assets/icons/${icon}.svg`, import.meta.url).href;
};
</script>

<style scoped>
.icon__small {
  width: 1rem;
  height: 1rem;
}

.icon__medium {
  width: 1.5rem;
  height: 1.5rem;
}

.icon__large {
  width: 2rem;
  height: 2rem;
}
</style>
