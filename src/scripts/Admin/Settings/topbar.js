import { ref } from 'vue';

const topbarColor = ref(['default', 'light', 'dark', 'brand']);
const topbarColorIds = ref([]);

let foundColor = ref(true);
let topbarDefault = ref(true);
let TopbardesktopColor = ref();

const setTopbarColor = function (colorPaletId) {
  const iconHolder = document.getElementById(colorPaletId);
  
};

const defaultDesktopColor = function(){
  TopbardesktopColor.value = topbarColor.value[2];
}

defaultDesktopColor();

export { setTopbarColor, foundColor, topbarColor, topbarDefault,TopbardesktopColor };
