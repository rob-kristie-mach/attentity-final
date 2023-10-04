<template>
    <div class="border-colors-grey-100 border-2 shadow-md bg-colors-grey p-3 mt-3 mb-10">
      <div class="grid grid-cols-4 gap-4 text-base justify-center items-center">
        <div class="col-span-4 md:col-span-3"><p class="antialiased">{{ content }}</p></div>
        <div class="col-span-4 md:col-span-1"><a class="btn btn-primary text-xs" :href="button_link">{{ button_text }}</a></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps(['content', 'button_text', 'button_link']);
  </script>
  