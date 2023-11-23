<template>
   <div class="bg-inherit w-full space-y-5">
      <div class="w-full flex justify-between items-center">
            <div class="text-center">
                  <h3 class="text-gray-800 tracking-wider leading-7">
                        <slot></slot>
                  </h3>
            </div>

            <div class="flex justify-center items-center text-center gap-x-2">
                  <button><font-awesome-icon icon="fa-solid fa-table" /></button>
                  <button><font-awesome-icon icon="fa-solid fa-bars-progress" /></button>
            </div>

            <div
              class="w-full bg-inherit border border-gray-400/10 sapce-y-2 max-w-lg shadow-sm shadow-slate-200 rounded-2xl lg:hover:shadow-lg overflow-hidden lg:hover:delay-500 lg:hover:duration-300 lg:hover:ease-in-out">
                <div class="w-full h-auto flex justify-between items-center space-x-3">
                <slot></slot>
            </div>
  </div>
      </div>
   </div>
</template>

<script>

export default {
name:"CategoryMenu",
}
</script>

