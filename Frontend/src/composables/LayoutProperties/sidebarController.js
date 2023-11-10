import { ref } from 'vue';
import useLeftSideBarRouterLink from '../router-link';
let sidebarLinks = ref('');
const addFalseValueInSideBarLink = function () {
    sidebarLinks.value = useLeftSideBarRouterLink.value.map((menu) => {
        return { ...menu, showPath: false };
    });
};

export { addFalseValueInSideBarLink, sidebarLinks };
