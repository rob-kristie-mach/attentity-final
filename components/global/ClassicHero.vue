<template>
    <div class="classic-hero" :style ="{backgroundImage: 'url(' + data.background_image.value[0].url + ')'}">
        <div class="w-full h-full flex  justify-center items-center backdrop-brightness-75 pt-32 pb-32 " >
        <div class="relative max-w-[75rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" >
            <div class="grid lg:grid-cols-5 gap-4 md:gap-8 xl:gap-20 md:items-center">
                <div class="lg:col-span-3">
                    <div v-html="data.sub_heading.value" />
                        <p class="mt-5" v-if="data.left_button_text.value && data.left_button_text.value.length > 0">
                            <a :href="data.left_button_link.value" class="btn btn-primary mr-3">{{data.left_button_text.value}}</a>
                            <a v-if="data.right_button_text.value && data.right_button_text.value.length > 0" :href="data.right_button_link.value" class="btn btn-white">{{data.right_button_text.value}}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ClassicHero',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

