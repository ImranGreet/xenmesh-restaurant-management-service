import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const usePermissionToManage = defineStore('set_permissions', () => {
  let alertMessage = ref('');
  let showSkillital = ref(false);
  let permission = ref('');
  let roles = ref([]);

  let createPermission = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/create_permission', {
        name: permission.value,
      });
      permission.value = '';
    } catch (error) {}
  };

  let getRoles = async function () {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/get_roles');
      if (response.data.success) {
        roles.value = response.data.roles;
        console.log(roles.value);
        showSkillital.value = true;
      }
    } catch (error) {}
  };

  return {
    permission,
    roles,
    createPermission,
    getRoles,
  };
});

export default usePermissionToManage;
