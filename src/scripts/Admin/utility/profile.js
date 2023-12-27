import { ref } from 'vue';
let showUserProfile = ref(true);

const profileToggling = function () {
  showUserProfile.value = !showUserProfile.value;
};

export { showUserProfile, profileToggling };
