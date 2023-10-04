<template>
    <div class="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
        <div v-if="data.number_of_cards.value[0].codename ==='three'" class="grid gap-6 auto-rows-fr grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
            <div class="component component-CerCheckBox" v-for="codename in data.cards.linkedItemCodenames" :key="codename">
                <ClassicCard :data="getLinkedItemData(codename)" />                
            </div>
        </div>
        <div v-if="data.number_of_cards.value[0].codename ==='two'" class="grid gap-16 auto-rows-fr grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
            <div class="component component-CerCheckBox" v-for="codename in data.cards.linkedItemCodenames" :key="codename">
                <ClassicCard :data="getLinkedItemData(codename)" />                
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ClassicCardrow',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getLinkedItemData(codename) {
      // Find the corresponding linkedItem based on the codename
      return this.data.cards.linkedItems.find(item => item.system.codename === codename);
    },
  },
};
</script>