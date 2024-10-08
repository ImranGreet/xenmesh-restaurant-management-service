import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useRoleToManage = defineStore('set_role', () => {
  let alertMessage = ref('');
  let role = ref('');
  let showSkillital = ref(true);
  let permissions = ref([]);
  let permissionToRole = ref([]);
  let errors = ref({});

  const createRole = async () => {
    try {
      await axios
        .post('http://127.0.0.1:8000/api/create_role', {
          name: role.value,
          permissions: permissionToRole.value,
        })
        .then(response => {
          if (response.data.success) {
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

  const getPermissions = async () => {
    try {
      const response = await axios.get(
        'http://127.0.0.1:8000/api/get_permissions',
      );

      if (response.data.success) {
        permissions.value = response.data.permission;
        permissions.value.forEach(permission => {
          permission.allowed = false;
        });
        showSkillital.value = false;
      }
    } catch (error) {
      console.error('Error fetching permissions:', error); // Log the error for debugging
    }
  };

  return {
    role,
    errors,
    permissions,
    permissionToRole,
    showSkillital,
    createRole,
    getPermissions,
  };
});

export default useRoleToManage;
