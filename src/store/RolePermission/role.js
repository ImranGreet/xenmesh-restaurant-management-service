import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useRoleToManage = defineStore('set_role', () => {
  let alertMessage = ref('');
  let role = ref('');
  let showSkillital = ref(false);

  const createRole = async () => {
    try {
      await axios
        .post('http://127.0.0.1:8000/api/create_role', { name: role.value })
        .then(response => {
          if (response.data.success) {
            console.log('Role Created ', response.data.role);
            role.value = '';
          }
        });
    } catch (error) {
      console.log('Error', error);
    }
  };

  return {
    role,
    createRole,
  };
});

export default useRoleToManage;
