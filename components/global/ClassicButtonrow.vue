<template>
    <div class="max-w-[75rem] px-4 sm:px-6 mx-auto">
        <div class="grid grid-cols-12">
            <div class="col-span-12 text-center pt-8">
              <p>
           <a :class="getButtonColor(data.color.value[0].codename)" class="btn" :href="data.button_link.value" >{{data.button_text.value}}</a>
           </p>
            </div>
        </div>
    </div>
</template>

<script>
import { getButtonColor } from '/utils/dynamicOptions'
export default {
  name: 'ClassicButtonrow',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getButtonColor,
  }
};
</script>