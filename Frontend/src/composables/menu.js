import { ref } from 'vue';

const light = ref(false);
const brand = ref(false);
const dark = ref(false);

const darkColorSeter = function () {
    if (light.value && brand.value) {
        light.value = false;
        brand.value = false;
        dark.value = true;
    } else if (light.value || !brand.value) {
        light.value = false;
        dark.value = true;
    } else if (brand.value || !light.value) {
        brand.value = false;
        dark.value = true;
    }
};

const lightColorSeter = function () {
    if (dark.value && brand.value) {
        brand.value = false;
        dark.value = false;
        light.value = true;
    } else if (dark.value || !brand.value) {
        dark.value = false;
        light.value = true;
    } else if (brand.value || !light.value) {
        brand.value = false;
        light.value = true;
    }
};

const brandColorSeter = function () {
    if (light.value && brand.value) {
        dark.value = false;
        light.value = false;
        brand.value = true;
    } else if (dark.value || !light.value) {
        dark.value = false;
        brand.value = true;
    } else if (light || !dark) {
        light.value = false;
        brand.value = true;
    }
};

export { light, brand, dark, lightColorSeter, darkColorSeter, brandColorSeter };
