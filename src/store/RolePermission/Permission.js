import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const usePermissionToManage = defineStore('set_permissions', () => {
  let alertMessage = ref('');
  let showSkillital = ref(false);
  let permission = ref('');
 
    

  let createPermission = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/create_permission', {
        name: permission.value,
      });
      permission.value = '';
    } catch (error) {}
  };

  return {
    permission,
    permissions,
    createPermission,
  };
});

export default usePermissionToManage;
