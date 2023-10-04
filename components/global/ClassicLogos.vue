<template>
    <div class="w-full h-full flex pt-14 pb-0 ">
        <div class="relative max-w-[75rem] w-full mx-auto px-4 lg:px-8 pb-8" >
            <div class="my-0 mx-auto" >
              <div class="flex flex-wrap items-center justify-center -m-6">
                    <div v-for="(item,logo) in data.logos.value" :key="logo" class="w-auto p-6">
                        <img :src="item.url" :alt="item.description" class=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ClassicLogos',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
