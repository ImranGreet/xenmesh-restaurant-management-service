import {ref} from "vue";

let innerHeight =ref();
let innerWidth = ref();



window.addEventListener("resize",()=>{
  innerHeight.value = window.innerHeight; 
  innerWidth.value = window.innerWidth;
});

export{
      innerHeight,
      innerWidth
}