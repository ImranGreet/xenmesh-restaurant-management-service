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
                class="custom-checkbox"
                 />
              <span class="custom-checkbox-box"></span>
              Check All
            </label>
          </div>
          <div class="w-full h-48 overflow-y-auto px-2 custom-overflowscroll">
            <div class="grid grid-cols-3 border border-gray-300 rounded-md">

              <label
              v-for="permission,index in permissions" :key="index"
               :for="'permission-' + index"
              class="custom-checkbox-label border border-gray-300 capitalize"
              :class="{'rounded-tr-md':index===2,'rounded-tl-md':index===0}">
                <input
                  type="checkbox"
                  class="custom-checkbox"
                  :checked="permission.allowed"
                  :id="'permission-' + index"/>
                <span class="custom-checkbox-box"></span>
                {{ permission.permissionName }}
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
export default {
  name: 'AddRole',
  setup() {
    const roleStore = useRoleToManage();
    /*property*/
    const { role, errors } = storeToRefs(roleStore);
    /*methods*/
    const { createRole } = roleStore;

    const permissions = [
      { id: 1, permissionName: 'view menu', allowed: true },
      { id: 2, permissionName: 'edit menu', allowed: true },
      { id: 3, permissionName: 'view orders', allowed: false },
      { id: 4, permissionName: 'edit orders', allowed: true },
      { id: 5, permissionName: 'manage reservations', allowed: false },
      { id: 6, permissionName: 'process payments', allowed: true },
      { id: 7, permissionName: 'manage_staff', allowed: false },
      { id: 8, permissionName: 'view reports', allowed: true },
      { id: 9, permissionName: 'manage inventory', allowed: true },
      { id: 10, permissionName: 'customer feedback', allowed: false },
    ];

    return { role, permissions, errors, createRole };
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