import { ref } from 'vue';
const fixed = ref(false);

const layoutPosition = {
    fixedLayout: function () {
        fixed.value = !fixed.value;
        console.log(fixed.value);
    },
    scrollLayout: function () {
        fixed.value = !fixed.value;
    },
};

export default layoutPosition;

export { fixed };
