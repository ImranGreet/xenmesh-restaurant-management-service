<template>
      <section class="layout__full-height flex-center flex-col bg-gray-100/60 p-6">
        <div
          class="modal__container"
          :class="{
            'toggle-screen-animation': showAnimation,
            'toggle-screen-animation': !showAnimation,
          }">
          <div class="form-title-box">
            <h2 class="form-title">{{Title}}</h2>
          </div>
          

          <slot></slot>
          
          <button
            @click="showOverlayoutOnOff"
            class="modal__close--button">
            <XMarkIcon class="w-5 h-5" />
          </button>
        </div>
      </section>
    </template>
    
    <script>
    import { ref, watch } from 'vue';
    import { XMarkIcon } from '@heroicons/vue/24/solid';
    import { showOverlayoutOnOff } from '../../../scripts/public/modal/modal';
    
    export default {
      name: 'AddProduct',
      components: {
        XMarkIcon,
      },
      props: {
        AnimationProperty: {
          type: Boolean,
          required: true,
        },
        ModalTitle:{
            type:String,
            required:false
        }
      },
      setup(props) {
       
    
        const showAnimation = ref(props.AnimationProperty);
        let Title = ref(props.ModalTitle);
    
        watch(
          () => props.AnimationProperty,
          (newVal, oldVal) => {
            showAnimation.value = newVal;
          },
        );
    
        return {
          showAnimation,
          Title,
          showOverlayoutOnOff,
        };
      },
    };
    </script>
    