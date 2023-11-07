import { ref } from 'vue';

const darkColor = ref(false);
const lightColor = ref(false);
const brandColor = ref(false);

const darkColorSeter = function () {
    if (lightColor.value && brandColor.value) {
        lightColor.value = false;
        brandColor.value = false;
        darkColor.value = true;
    } else if (lightColor.value || !brandColor.value) {
        lightColor.value = false;
        darkColor.value = true;
    } else if (brandColor.value || !lightColor.value) {
        brandColor.value = false;
        darkColor.value = true;
    }
};

const lightColorSeter = function () {
    if (darkColor.value && brandColor.value) {
        darkColor.value = false;
        brandColor.value = false;
        lightColor.value = true;
    } else if (darkColor.value || !brandColor.value) {
        darkColor.value = false;
        lightColor.value = true;
    } else if (brandColor.value || !darkColor.value) {
        brandColor.value = false;
        lightColor.value = true;
    }
};

const brandColorSeter = function () {
    if (lightColor.value && brandColor.value) {
        darkColor.value = false;
        lightColor.value = false;
        brandColor.value = true;
    } else if (darkColor.value || !lightColor.value) {
        darkColor.value = false;
        brandColor.value = true;
    } else if (lightColor.value || !darkColor.value) {
        lightColor.value = false;
        brandColor.value = true;
    }
};

export { brandColor, lightColor, darkColor, brandColorSeter, lightColorSeter, darkColorSeter };
