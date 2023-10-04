import { DeliveryClient } from '@kentico/kontent-delivery';

async function getDynamicRoutes() {
  const deliveryClient = new DeliveryClient({
    projectId: '814ddc4f-9d27-004b-4203-5fb88ed20501', // Replace with your actual Kontent project ID
  });

  // Fetch 'attentity_blog' items
  const blogResult = await deliveryClient.items()
    .type('blog_post')
    .collection('attentity') 
    .toPromise();

  const blogRoutes = blogResult.data.items.map(item => `/content-hub/${item.elements.slug.value}`);


  // Fetch 'component_page' items
  const pageResult = await deliveryClient.items()
    .type('component_built_page') 
    .collection('attentity') 
    .toPromise();

  const pageRoutes = pageResult.data.items.map(item => `/${item.elements.slug.value}`);

  // Combine both arrays of routes
  return [...blogRoutes, ...pageRoutes];
}

module.exports = getDynamicRoutes;