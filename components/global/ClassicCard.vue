<template>
    <div class="h-full">
    
    <div v-if="data.elements.text_alignment.value[0]. codename==='center'" class="mb-4 h-100 shadow hover:shadow-lg h-full flex flex-col text-center">
        <div class="p-4 flex-1">
            <div class=" mb-8">
            <img class="mx-auto" :src="data.elements.image.value[0].url" :alt="data.elements.image.value[0].description"/>
        </div>
            <div v-html="data.elements.content.value" />
        </div>
    </div>

    <div v-if="data.elements.text_alignment.value[0]. codename==='left'" class="mb-4 h-100 shadow hover:shadow-lg h-full flex flex-col text-left classic-card-full">
        <div class="flex-1">
            <div class=" object-cover mb-8">
            <img :src="data.elements.image.value[0].url" :alt="data.elements.image.value[0].description"/>
        </div>
            <div v-html="data.elements.content.value" class="p-6"/>
        </div>
    </div>
</div>

</template>

<script>
export default {
name: 'ClassicCard',
props: {
data: {
  type: Object,
  required: true,
},
},
};
</script>