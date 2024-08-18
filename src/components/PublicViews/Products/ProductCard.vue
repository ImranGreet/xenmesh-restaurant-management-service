<template>
  <div
    class="product-card-container"
    :class="gridView ? 'grid-view' : 'block-view'">
    <div
      :class="gridView ? 'image-container-grid' : 'image-container-full'">
      <img
        :src="image"
        loading="lazy"
        :alt="title"
        class="w-full object-cover"
        :class="gridView ? 'image-grid' : 'image-full'" />
    </div>
    <div
      class="content-container"
      :class="gridView ? 'content-grid' : 'content-full'">
      <div class="py-0 space-y-2">
        <div class="title-container">
          <h1
            v-if="title.length > 10 && innerWidth >= 300 && innerWidth <= 767"
            class="title">
            {{ title.slice(0, 8) }} ...
          </h1>

          <h1
            v-else-if="
              title.length > 20 && innerWidth >= 768 && innerWidth <= 1023
            "
            class="title">
            {{ title.slice(0, 15) }} ...
          </h1>

          <h1
            v-else-if="title.length >= 20 && innerWidth >= 1025"
            class="title">
            {{ title.slice(0, 18) }} ...
          </h1>

          <h1
            v-else
            class="title">
            {{ title }}
          </h1>

          <button
            @click="getItemDetails(id)"
            class="info-button">
            !
          </button>
        </div>

        <p
          v-if="description.length > 50"
          class="description">
          {{ description.slice(0, 50) }} ...
        </p>

        <p
          v-else
          class="description">
          {{ description }}
        </p>
      </div>

      <div class="price-container">
        <Price
          :class="discountAmount ? 'price-line-through' : 'price-no-underline'">
          ${{ price }}
        </Price>

        <Price
          :class="discountAmount ? 'price-block' : 'price-hidden'">
          ${{ Math.floor(Math.abs(price - (discountAmount * price) / 100)) }}
        </Price>

        <addToCart @click="addProductToCart(productInformation)" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Price from '../../Utilities/Price.vue';
import addToCart from '../../Utilities/addToCart.vue';
/* composables */
import { gridView, showGridItems } from '../../../scripts/public/utility';
import { addProductToCart } from '../../../scripts/public/Order/publicorder';
import { getItemDetails } from '../../../scripts/public/modal/modal';
/*inner height and window*/
import {
  innerHeight,
  innerWidth,
} from '../../../scripts/Global/innerheightwidth';

export default {
  name: 'ProductCard',
  components: {
    Price,
    addToCart,
  },
  props: {
    productInformation: {
      type: Object,
      required: true,
    },
    discount: {
      type: Number,
      required: false,
    },
  },
  setup(props) {
    const { id, title, price, image, description, composition } =
      props.productInformation;
    const discountAmount = props.discount;
    return {
      id,
      title,
      price,
      image,
      description,
      composition,
      gridView,
      discountAmount,
      innerHeight,
      innerWidth,
      showGridItems,
      addProductToCart,
      getItemDetails,
    };
  },
};
</script>
