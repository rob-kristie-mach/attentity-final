<template>
    <div class="max-w-[75rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div class="mt-10 grid gap-6 grid-cols-1 sm:gap-12 lg:grid-cols-3 lg:gap-8">
           <div v-for="codename in data.icons.linkedItemCodenames" :key="codename">
            <ClassicIcon :data="getLinkedItemData(codename)" />
            </div> 
        </div>
    </div>
</template>

<script>
export default {
  name: 'ClassicIconset',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getLinkedItemData(codename) {
      // Find the corresponding linkedItem based on the codename
      return this.data.icons.linkedItems.find(item => item.system.codename === codename);
    },
  },
};
</script>