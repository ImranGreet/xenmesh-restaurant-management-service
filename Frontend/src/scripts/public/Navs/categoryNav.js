import { ref } from 'vue';

import items from "../../../DB/products.json";

const uniqueItemCategories = new Set(items.map(item => item.category));

const uniqueCategoriesArray = Array.from(uniqueItemCategories);

const foodCategories = uniqueCategoriesArray.map(category => {
    return  items.find(item => item.category === category)
});


export const useCategoryRoutes = ref(foodCategories);


