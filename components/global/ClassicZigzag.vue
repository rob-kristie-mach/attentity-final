<template>
    <!-- Features -->
<div class="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto">
    <div v-if="data.alignment.value[0].codename==='image_left'">
  <!-- Grid -->
  <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
    <div>
        <img :src="data.image.value[0].url" :alt="data.image.value[0].description"/>
    </div>
    <!-- End Col -->

    <div class="mt-5 sm:mt-10 lg:mt-0">
      <div class="space-y-6 sm:space-y-8">
        <!-- Title -->
        <div class="space-y-2 md:space-y-4">
            <div v-html="data.content.value"/>
            <p v-if="data.left_button_text.value && data.left_button_text.value.length > 0" class="pt-10">
              <a :href="data.left_button_link.value" class="btn btn-primary mt-4">{{ data.left_button_text.value }}</a>
              <a :href="data.right_button_link.value" class="btn btn-outline">{{ data.right_button_text.value }}</a>
            </p>
        </div>
        <!-- End Title -->    
      </div>
    </div>
    <!-- End Col -->
    </div>
  </div>
  <div v-else>
    <!-- Grid -->
<!-- Grid -->
<div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
    <div class="md:order-last">
        <img :src="data.image.value[0].url" :alt="data.image.value[0].description"/>
    </div>
    <!-- End Col -->

    <div class="mt-5 sm:mt-10 lg:mt-0">
      <div class="space-y-6 sm:space-y-8">
        <!-- Title -->
        <div class="space-y-2 md:space-y-4">
            <div v-html="data.content.value"/>
            <p v-if="data.left_button_text.value && data.left_button_text.value.length > 0" class="pt-10">
              <a :href="data.left_button_link.value" class="btn btn-primary mt-4">{{ data.left_button_text.value }}</a>
              <a :href="data.right_button_link.value" class="btn btn-outline">{{ data.right_button_text.value }}</a>
            </p>
        </div>
        <!-- End Title -->    
      </div>
    </div>
    <!-- End Col -->
    </div>
  </div>
  <!-- End Grid -->
</div>
<!-- End Features -->
</template>
<script>
export default {
  name: 'ClassicContenttext',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>