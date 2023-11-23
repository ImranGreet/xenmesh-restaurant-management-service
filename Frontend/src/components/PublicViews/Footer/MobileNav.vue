<template>
  <div class="w-full bg-inherit ">
      <div class="w-full space-y-4 px-4 ">
            <div class="w-full flex justify-between items-center">
                  <router-link to="#">
                        <h1 class="text-xl tracking-wide leading-normal">Xenmesh</h1>
                      </router-link>

                      <div class="flex flex-col justify-start items-center text-center">
                   <button
                          class="border border-pink-600 rounded-2xl px-3 py-0.5 bg-pink-800 text-white">
                          Branch
                        </button>
                        <small>Gulsan</small>
                      </div>
            </div>

            <form class="inline-block relative w-full">
                  <input
                    type="text"
                    name=""
                    id=""
                    class="px-2 py-1 text-start pl-8 rounded-full border border-gray-300 focus:outline-none w-full" />
                  <MagnifyingGlassIcon class="w-4 h-4 absolute top-2 left-3"/>
                  <button class="absolute top-2 right-3 hidden">
                    <XMarkIcon class="w-4 h-4 border border-gray-700 text-red-500 rounded-full "/>
                  </button>
            </form>

      </div>
  </div>
</template>

<script>
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/vue/24/outline'

export default {
name:"MobileNav",
components:{
      MagnifyingGlassIcon,
      XMarkIcon
}
}
</script>

<style>

</style>