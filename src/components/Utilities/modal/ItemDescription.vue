<template>
  <div class="w-full bg-inherit">
    <div class="w-96 border border-gray-300 px-4 py-2 relative">
      <div class="text-center px-3 border-b border-gray-600 shadow-md">
        <h1 class="text-xl tracking-wide">Sealomond salad from Korea</h1>
      </div>
      <div>
        <p class="text-base tracking-wide leading-7">
          If you're using multiple guards we've got you covered as well. Every
          guard will have its own set of permissions and roles that can be
          assigned to the guard's users. Read about it in the using multiple
          guards section.Because all permissions will be registered on Laravel's
          gate, you can check if a user has a permission with Laravel's default
          can function:
        </p>
      </div>
      <button class="absolute top-1 right-0 w-5 h-5">
        <XMarkIcon class="w-3 h-3" />
      </button>
    </div>
  </div>
</template>

<script>
import { XMarkIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'ItemDescription',
  components: {
    XMarkIcon,
  },
};
</script>
