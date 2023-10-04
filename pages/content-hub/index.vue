<template>
    <div class="blog-hub">
      
      <!-- Render components dynamically based on linkedItems -->
      <div v-for="item in linkedItems" :key="item.system.codename">
        <component :is="componentName(item)" :data="item" :nestedComponents="getNestedComponents(item)" />
      </div>
      <div class="bg-colors-grey py-10">
      <div class="max-w-[75rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
        <!--<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for ="(post,index) in blogData" :key="index" class="group h-100 shadow-md rounded-xl hover:shadow-2xl h-full flex flex-col" >
              <a :href="'/content-hub/' + post.elements.slug.value">
                <div class="aspect-w-16 aspect-h-9 ">
                    <img class="w-full object-cover rounded-t-xl" :src="post.elements.featured_image.value[0].url" alt="Image Description">
                </div>
                <div class="p-3">
                    <p class="text-xs colors-font antialiased">{{ $dayjs(post.elements.date.value).format('MMM D, YYYY') }}</p>
                    <h3 class="text-xl colors-font">{{ post.elements.title.value }}</h3>
                     <p class="text-sm colors-font antialiased">{{ post.elements.subtitle.value }}</p>
                     <p><a :href="'/content-hub/' + post.elements.slug.value">Read More</a></p>
                </div>
              </a>
              </div>
        </div>-->
        <div class="container mx-auto p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <a v-for ="(post,index) in blogData" :key="index" class="col-span-1 flex flex-col shadow-md rounded-xl hover:shadow-2xl pb-5 " :href="'/content-hub/' + post.elements.slug.value">
            <img class="w-full h-auto rounded-t-xl" :src="post.elements.featured_image.value[0].url" alt="Image Description">
            <p class="text-xs colors-font antialiased p-4">{{ $dayjs(post.elements.date.value).format('MMM D, YYYY') }}</p>
                  <h3 class="text-xl colors-font px-4">{{ post.elements.title.value }}</h3>
                  <p class="text-sm colors-font antialiased px-4">{{ post.elements.subtitle.value }}</p>

              <div class="flex flex-wrap mt-auto pt-3 text-xs  px-4">
                <a class="btn btn-primary" :href="'/content-hub/' + post.elements.slug.value">Read More</a>
              </div>
            </a>
  
</div>

</div>
</div>
      
    </div>
  </template>
  
  <script>
  import { DeliveryClient } from '@kentico/kontent-delivery';
  
  export default {
  
    
    async asyncData({ params }) {
      const deliveryClient = new DeliveryClient({
        projectId: '814ddc4f-9d27-004b-4203-5fb88ed20501', // Replace with your actual Kontent project ID
      });
  
      try {
        const response = await deliveryClient.item('content_hub') // Replace with your actual Kontent item codename
          .toPromise();
          const postresponse = await deliveryClient.items() // Replace with your actual Kontent item codename
        .type('blog_post')
        .orderParameter('elements.date[desc]')
            .toPromise();
  
        return {
            pageData: response.data.item,
            blogData: postresponse.data.items
        };
      } catch (error) {
        console.error('Error fetching data:', error);
        return { pageData: {} };
      }
    },
    // Import and resolve components dynamically
    computed: {
      linkedItems() {
        return this.pageData.elements.components.linkedItems;
      },
    },
    methods: {
      // Get the component name based on the system.type
      componentName(item) {
        const type = item.system.type;
        const componentName = type
          .replace(/__/g, '-') // Replace '__' with '-'
          .split('-') // Split by '-'
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
          .join(''); // Join words without '-'
  
        return componentName;
      },
  
      // Get nested components for a given item
      getNestedComponents(item) {
    const richTextElement = item.elements.components;
    if (!richTextElement || !richTextElement.linkedItems) {
      return []; // Return an empty array if there are no nested components
    }
  
    const nestedComponents = richTextElement.linkedItems;
    return nestedComponents.map((component) => ({
      componentType: component.system.type,
      componentCodename: component.system.codename,
      data: component.elements,
    }));
  },
    },
  
    head() {
      return {
        title: this.pageData.elements.meta_title.value,
        meta: [
          {
            property: "description",
            content: this.pageData.elements.meta_description.value,
          }
      ]
  
      }
    }
  
  };
  </script>