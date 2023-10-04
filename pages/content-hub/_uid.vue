<template>
	<div class="blog-post">
        <div class="blog-hero bg-colors-primary-900 pt-20 pb-20">
			<div class="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto">
				<div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
					<div class="mt-5 sm:mt-10 lg:mt-0">
						<div class="space-y-6 sm:space-y-8">
						<!-- Title -->
							<div class="space-y-2 md:space-y-4">
								<h1 class="text-colors-white text-3xl font-medium antialiased">{{pageData.title.value}}</h1> 
								<h5 class="text-colors-white font-medium antialiased">{{pageData.author.value}}</h5>
								<p class="text-colors-white antialiased">{{ $dayjs(pageData.date.value).format('MMM D, YYYY') }}</p> 
								<p class="text-colors-white pt-2 text-3xl">
									<ShareNetwork
                                        network="facebook"
                                        :url="'https://www.attentity.com/' + pageData.slug.value"
                                        :title="pageData.title.value"
                                    >
						                <font-awesome-icon :icon="['fab', 'square-facebook']"/>
					                </ShareNetwork>
                                    <ShareNetwork
                                        network="twitter"
                                        :url="'https://www.attentity.com/' + pageData.slug.value"
                                        :title="pageData.title.value"
                                        
                                    >
                                        <font-awesome-icon :icon="['fab', 'square-twitter']"/>
                                    </ShareNetwork>
                                    <ShareNetwork
                                        network="linkedin"
                                        :url="'https://www.attentity.com/' + pageData.slug.value"
                                        :title="pageData.title.value"                                
                                    >
                                        <font-awesome-icon :icon="['fab', 'linkedin']"/>
                                    </ShareNetwork>
								</p>
							</div>
						<!-- End Title -->
						</div>
					</div>
					<div>
						<img class="rounded-3xl" :src="pageData.featured_image.value[0].url" />
					</div>
					
					<!-- End Col -->
				</div>
			</div>
		</div>

        <div class="max-w-[75rem] px-4 sm:px-6 mx-auto">
		    <!-- Container to hold your parsed content -->
		    <div class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 lg:gap-x-12">
                <!-- Content -->
                <div class="lg:col-span-2">
                    <div class="py-8 lg:pr-4 lg:pr-8">
                        <div class="space-y-5 lg:space-y-8">
                            <div v-if="containsObjectTag">
                                <!-- Display the parts of content before and after the object tag, and in between, render your component -->
                                <span v-html="contentBeforeObjectTag" class="before"></span>
                                <ClassicBlogcta :content="ctaContent.content.value"  :button_text="ctaContent.button_text.value" :button_link="ctaContent.button_link.value"/> 
                                <span v-html="contentAfterObjectTag" class="after"></span>
                            </div>

                                <!-- If the object tag isn't present, simply display the content -->
                            <div v-else>
                                <span v-html="pageData.content.value" class="none"></span>
                            </div>
                        </div>                    
                    </div>
                </div>
                <!-- End Content -->
                <!-- Sidebar -->
                <div class="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
                    <div class="sticky top-20 left-0 py-8 lg:pl-4 lg:pl-8">
			            <h4>Recent Posts</h4>
			            <div class="space-y-6">
                        <!-- Media -->
                            <a class="group flex items-center gap-x-6" :href="'/content-hub/' + item.elements.slug.value" v-for="(item,index) in latestPosts" :key="index">
                                <div class="grow">
                                <span class="text-sm font-medium">
                                    {{item.elements.title.value}}
                                </span>
                                </div>

                                <div class="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                                    <img class="w-full h-full absolute top-0 left-0 object-cover rounded-lg" :src="item.elements.featured_image.value[0].url" :alt="item.elements.title.value">
                                </div>
                            </a>
			            <!-- End Media -->
                        </div>
		            </div>
		        </div>
		<!-- End Sidebar -->
		    </div>               
        </div>
	</div>
</template>
	
	<script>
	import { DeliveryClient } from '@kentico/kontent-delivery';
	//import dayjs from'dayjs';

	export default {
        data() {
            return {
            ctaContent: null,
            COMPONENT_PLACEHOLDER: 'COMPONENT_PLACEHOLDER' // Placeholder for the component
            }
        },
        computed: {
            containsObjectTag() {
        const objectTagRegex = /<object[^>]*><\/object>/g;
        return objectTagRegex.test(this.pageData.content.value);
    },
    contentBeforeObjectTag() {
        
        const objectTagRegex = /<object[^>]*><\/object>/g;
        const parts = this.pageData.content.value.split(objectTagRegex);
        return parts[0] || ""; // Content before the object tag
        
    },
    contentAfterObjectTag() {
        const objectTagRegex = /<object[^>]*><\/object>/g;
        const parts = this.pageData.content.value.split(objectTagRegex);
        return parts[1] || ""; // Content after the object tag
    }
},
        created() {
            if (this.pageData && this.pageData.content.linkedItems && this.pageData.content.linkedItems.length > 0) {
                this.ctaContent = this.pageData.content.linkedItems[0].elements; // assuming the first linkedItem is always the one you want
            }
        },
		async asyncData({ route, params }) {
			const deliveryClient = new DeliveryClient({
				projectId: '814ddc4f-9d27-004b-4203-5fb88ed20501', // Replace with your actual Kontent project ID
			});

			try {
				const response = await deliveryClient.items()
                .type('blog_post')
                .collection('attentity')
			    .equalsFilter('elements.slug', route.params.uid)
				.toPromise();

                const latest = await deliveryClient.items() // Replace with your actual Kontent item codename
				.type('blog_post')
				.orderParameter('elements.date[desc]')
                .collection('attentity')
				.limitParameter(3)
				.toPromise();
				


				return {
					pageData: response.data.items[0].elements,
                    latestPosts: latest.data.items
				};
			} 
			catch (error) {
				console.error('Error fetching data:', error);
				return { pageData: {} };
			}
		},
        head() {
    return {
      title: this.pageData.meta_title.value,
      meta: [
        {
          property: "description",
          content: this.pageData.meta_description.value,
        }
    ]

    }
  }
        
		
		
	}


	
	</script>
	