<template>
  <div class="product-card-container">
    <div class="w-full h-auto flex justify-between items-center space-x-3">
      <div class="image-container-grid">
        <img
          :src="image"
          alt=""
          loading="lazy"
          class="image-grid"
        />
      </div>
      <div class="content-container">
        <div class="title-container">
          <h1
            class="title"
            v-if="title.length > 20">
            {{ title.slice(0, 20) }}....
          </h1>

          <h1
            class="title"
            v-else>
            {{ title }}
          </h1>

          <button
            @click="getItemDetails(id)"
            class="info-button">
            !
          </button>
        </div>

        <p
          class="description"
          v-if="description.length > 50">
          {{ description.slice(0, 50) }} ....
        </p>

        <p
          class="description"
          v-else>
          {{ description }}
        </p>

        <div class="price-container px-2">
          <Price>${{ price }}</Price>
          <addToCart @click="addProductToCart(productInformation)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Price from '../../Utilities/Price.vue';
import addToCart from '../../Utilities/addToCart.vue';
import { addProductToCart } from '../../../scripts/public/Order/publicorder';
import { getItemDetails } from '../../../scripts/public/modal/modal';

export default {
  name: 'popular',
  components: {
    Price,
    addToCart,
  },
  props: {
    productInformation: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { title, price, image, description, id } =
      props.productInformation;
    return {
      title,
      price,
      image,
      description,
      id,
      addProductToCart,
      getItemDetails,
    };
  },
};
</script>
