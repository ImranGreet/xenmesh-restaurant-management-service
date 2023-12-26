import { ref } from 'vue';

let slides = ref([
  {
    id: 1,
    description: 'image1',
    image:
      'https://images.unsplash.com/photo-1700514015106-4d8480938dcb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    description: 'image2',
    image:
      'https://demo.foodking.dev/storage/23/conversions/slider_three-cover.png',
  },
  {
    id: 3,
    description: 'image3',
    image:
      'https://images.unsplash.com/photo-1674622720208-2a67da6ff4e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]);

export default slides;
