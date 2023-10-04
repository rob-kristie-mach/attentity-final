<template>
	<div class="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
		<div v-if="data.columns.value[0].codename ==='two'" class="gap-6 md:gap-12">
				<div v-for="(codename,index) in data.items.linkedItemCodenames" :key="index" class="">
					<ClassicFaqitem :data="getLinkedItemData(codename)" /> 
				</div>	
			</div>
		<div v-else class="max-w-[75rem] px-4 sm:px-6 mx-auto">
			<div>
				<div v-for="(codename,index) in data.column_one_items.linkedItemCodenames" :key="index">
					<ClassicFaqitem :data="getLinkedItemData(codename)" /> 
				</div> 
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'ClassicFaqgroup',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
		getLinkedItemData(codename) {
		// Find the corresponding linkedItem based on the codename
		return this.data.items.linkedItems.find(item => item.system.codename === codename);
		},
		getLinkedItemDataTwo(codename) {
		// Find the corresponding linkedItem based on the codename
		return this.data.column_2_items.linkedItems.find(item => item.system.codename === codename);
		},
	},
};
</script>