<template>
    <div>
            <h5>{{ data.elements.question.value }}</h5>
            <div v-html="data.elements.content.value" class="py-4 text-sm"></div>
    </div>
</template>

<script>
export default {
  name: 'ClassicFaqitem',
  props: {
    data: {
      type: Object,
      required: true,
    },
  }
}
</script>
