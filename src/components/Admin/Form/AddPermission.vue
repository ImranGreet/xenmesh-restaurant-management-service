<template>
      <div class="bg-inherit px-3 py-2 w-full">
        <div
          class="w-full md:w-4/5 lg:3/4 xl:w-1/2 mx-auto border border-gray-800/25 rounded-lg bg-white p-5">
          <formTitle>Add Permission Of Your Services</formTitle>
          <form
            @submit.prevent="createPermission"
            class="w-full flex flex-col justify-between items-center gap-y-5">
            <div class="px-2 py-1 w-full space-y-3">
              <label for="icon">Permission Name</label>
              <input
                type="text"
                class="form__input--field"
                v-model="permission"
                placeholder="Enter Role Name" />
            </div>
            <div class="px-2 py-1 w-full space-y-3">
              <h4>Roles</h4>
              <div class="w-full h-36 overflow-y-auto px-2">
                <div class="flex justify-start gap-x-2">
                  <label for="create order">
                    <input
                      type="checkbox"
                      name=""
                      id="" />
                    <span class="ml-1">Admin</span>
                  </label>
                  <label for="create order">
                    <input
                      type="checkbox"
                      name=""
                      id="" />
                    <span class="ml-1">Manager</span>
                  </label>
                  <label for="create order">
                    <input
                      type="checkbox"
                      name=""
                      id="" />
                    <span class="ml-1">Accountant</span>
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
     import usePermissionToManage from "../../../store/RolePermission/Permission"
    export default {
      name: 'AddPermission',
      setup() {
        const permissionStore = usePermissionToManage();
        /*property*/
        const { permission } = storeToRefs(permissionStore);
        /*methods*/
        const { createPermission } = permissionStore;
    
        return { permission, createPermission };
      },
    };
    </script>
    