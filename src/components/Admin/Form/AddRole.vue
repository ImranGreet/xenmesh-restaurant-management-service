<template>
  <div class="bg-inherit px-3 py-2 w-full">
    <div
      class="w-full md:w-4/5 lg:3/4 xl:w-1/2 mx-auto border border-gray-800/25 rounded-lg bg-white p-5">
      <formTitle>Add Roles Of Your Services</formTitle>
      <form
        @submit.prevent="createRole"
        class="w-full flex flex-col justify-between items-center gap-y-5">
        <div class="px-2 py-1 w-full space-y-3">
          <label for="icon">Role Name</label>
          <input
            type="text"
            class="form__input--field"
            v-model="role"
            placeholder="Enter Role Name" />
          <small
            v-if="errors.name?.length > 0"
            class="text-red-500/60"
            >{{ errors.name[0] }}</small
          >
        </div>
        <div class="px-2 py-1 w-full space-y-3">
          <div class="flex justify-between items-center">
            <h4>Permissions</h4>
            <label class="custom-checkbox-label p-1">
              <input
                type="checkbox"
                class="custom-checkbox" />
              <span class="custom-checkbox-box"></span>
              Check All
            </label>
          </div>
          <div class="w-full h-48 overflow-y-auto px-2 custom-overflowscroll">
            <div v-if="showSkillital" class="w-full h-full flex justify-center items-center">
              <div class="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin" style="border-top-color: #3490dc;"></div>
            </div>
            <div class="grid grid-cols-3 border border-gray-300 rounded-md" v-else>
              <label
                v-for="(permission, index) in permissions"
                :key="index"
                :for="'permission-' + index"
                class="custom-checkbox-label border border-gray-300 capitalize"
                :class="{
                  'rounded-tr-md': index === 2,
                  'rounded-tl-md': index === 0,
                }">
                <input
                  @change="setPermissionToRole(permission)"
                  type="checkbox"
                  class="custom-checkbox"
                  :checked="permission.allowed"
                  :id="'permission-' + index" />
                <span class="custom-checkbox-box"></span>
                {{ permission.name }}
              </label>
            </div>
          </div>
        </div>

        <div class="px-2 py-1 w-full">
          <authsubmitBtn>Submit</authsubmitBtn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import useRoleToManage from '../../../store/RolePermission/role';
import { onMounted } from 'vue';
export default {
  name: 'AddRole',
  setup() {
    const roleStore = useRoleToManage();
    /*property*/
    const { role, errors, permissions, permissionToRole,showSkillital } =
      storeToRefs(roleStore);
    /*methods*/
    const { createRole, getPermissions } = roleStore;

    onMounted(async () => {
      await getPermissions();
    });

    const setPermissionToRole = function (permission) {
      const index = permissionToRole.value.indexOf(permission.name);
      permission.allowed = true;

      if (index === -1) {
        permissionToRole.value.push(permission);
      } else {
        permissionToRole.value.splice(index, 1);
      }
    };

    return {
      role,
      permissions,
      errors,
      permissionToRole,
      showSkillital,
      createRole,
      getPermissions,
      setPermissionToRole,
    };
  },
};
</script>


<style scoped>
/* Hide the default checkbox */
.custom-checkbox {
  display: none;
}

/* Style the custom checkbox container */
.custom-checkbox-label {
  display: flex;
  align-items: center;
  font-size: 1.15rem;
  cursor: pointer;
  padding: 6px;
}

/* Style the custom checkbox box */
.custom-checkbox-box {
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  position: relative;
}

/* Checkmark style */
.custom-checkbox-box::after {
  content: '';
  width: 8px;
  height: 14px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 0.2s ease;
  position: absolute;
  top: 0px;
}

/* When the checkbox is checked */
.custom-checkbox:checked + .custom-checkbox-box {
  background-color: #269b0f;
  border-color: #269b0f;
}

.custom-checkbox:checked + .custom-checkbox-box::after {
  opacity: 1;
}
</style>