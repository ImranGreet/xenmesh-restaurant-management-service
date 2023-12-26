import { ref } from 'vue';

let searchKeywords = ref('');

const deleteKeywords = function () {
  if (searchKeywords.value.length > 0) {
    searchKeywords.value = '';
  }
};

const handleSearchInPublic = function () {};

export { searchKeywords, deleteKeywords, handleSearchInPublic };
