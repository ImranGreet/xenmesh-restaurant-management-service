<template>
      <div class="w-full bg-inherit h-full"> 
         <div class="w-full h-full bg-gray-200">
              <div class="w-full h-full flex flex-col lg:flex-row justify-between items-center">
                  <form class="w-full lg:w-2/5 mx-auto border border-gray-800/20 p-4 rounded-md space-y-3">
                    <div class="w-full space-y-3 border border-inherit text-center  text-gray-600 p-2">
                       <h2 class="text-xl tracking-wide">Add  Unit</h2>
                       
                    </div>
                    <div class="w-full space-y-3 border border-inherit p-3">
                       <label for="category">Item Unit</label>
                       <input type="text" name="" id="" class="w-full px-3 py-2 focus:outline-none border-2 border-inherit" placeholder="Like KG,CM,Pieces">
                    </div>
                    
  
                    <div class="w-full space-y-3">
                      
                       <button class="w-full px-3 py-2 bg-blue-600 text-white">Submit</button>
                    </div>
                  </form>
              </div>
         </div>
      </div>
  </template>
  
  <script>
  export default {
  name:"AddUnit",
  setup(){
        return {
  
        }
  }
  }
  </script>
  
  <style>
  
  </style>