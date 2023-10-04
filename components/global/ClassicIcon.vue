<template>
    <div v-if="data.elements.alignment.value[0].codename === 'center'" class="text-center mx-auto">
        <div class="icon-img mx-auto" style="height:60px;" v-if="data.elements.image.value && data.elements.image.value.length > 0">
            <img  :src="data.elements.image.value[0].url" :alt="data.elements.heading.value" class="mx-auto"/>
        </div>
        <h3 class="font-bold mt-3 text-3xl">{{ data.elements.heading.value }}</h3>
        <div v-html="data.elements.content.value"></div>
    </div>
    <div v-else class="flex">
      <img v-if="data.elements.image.value && data.elements.image.value.length > 0" :src="data.elements.image.value[0].url" :alt="data.elements.heading.value" class="flex-shrink-0 mt-2 h-8 w-8"/>
          <div class="ml-5 sm:ml-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
              {{ data.elements.heading.value }}
            </h3>
            <div v-html="data.elements.content.value"></div>
          </div>

    </div>
</template>

<script>
export default {
  name: 'ClassicIcon',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>