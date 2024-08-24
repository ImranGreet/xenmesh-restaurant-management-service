import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useRoleToManage = defineStore('set_role', () => {
  let alertMessage = ref('');
  let role = ref('');
  let showSkillital = ref(false);
  let errors = ref({});

  const createRole = async () => {
    try {
      await axios
        .post('http://127.0.0.1:8000/api/create_role', { name: role.value })
        .then(response => {
          if (response.data.success) {
            console.log('Role Created ', response.data.role);
            role.value = '';
            errors.value = {};
          }
        });
    } catch (error) {
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors;
      } else {
        console.log('Error', error);
      }
    }
  };

  return {
    role,
    errors,
    createRole,
  };
});

export default useRoleToManage;
