<template>
    <div class="thank-you text-center py-20">
       <div v-html="pageData.elements.untitled_rich_text.value" />
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
      const response = await deliveryClient.item('thank_you') // Replace with your actual Kontent item codename
        .toPromise();

      return { pageData: response.data.item };
    } catch (error) {
      console.error('Error fetching data:', error);
      return { pageData: {} };
    }
  },
}
  </script>
  