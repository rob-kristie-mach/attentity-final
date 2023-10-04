<template>
    <div class="w-full h-full flex py-0">
        <div class="max-w-[75rem] px-4 sm:px-6 lg:px-8 mx-auto" >
        <div class="my-0 mx-auto" >
            <div class="md:grid md:grid-cols-1 md:items-center md:gap-12 xl:gap-32">
                <div v-if="data.width.value[0].codename === 'medium'" class="lg:px-40" >
                    <div v-if="data.alignment.value[0].codename ==='left'" v-html="data.content.value" class="text-left" />
                    <div v-else-if="data.alignment.value[0].codename ==='center'" v-html="data.content.value" class="text-center" />
                </div>
                <div v-else-if="data.width.value[0].codename === 'large'" class="lg:px-20">
                    <div v-if="data.alignment.value[0].codename ==='left'" v-html="data.content.value" class="text-left" />
                    <div v-else-if="data.alignment.value[0].codename ==='center'" v-html="data.content.value" class="text-center" />
                </div>
               
                <div v-else>
                    <div v-if="data.alignment.value[0].codename ==='left'" v-html="data.content.value" class="text-left" />
                    <div v-else-if="data.alignment.value[0].codename ==='center'" v-html="data.content.value" class="text-center" />
                </div>
            </div>
        </div>
        </div>  
    </div>
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