import { ref } from "vue";

const topbarColor = ref(["default", "light", "dark", "brand"]);
const topbarColorIds = ref([]);

let foundColor = ref(true);
let topbarDefault = ref(true);

const setTopbarColor = function (colorPaletId) {
  const iconHolder = document.getElementById(colorPaletId);
   if(topbarColorIds.value.length !==0){
    
   }
};

export { setTopbarColor, foundColor, topbarColor, topbarDefault };
