import { ref } from "vue";


const searchForm = ref(false);

const searchFormShower = function(){
        searchForm.value = !searchForm.value;
    };

    export {
      searchForm,
      searchFormShower
    }