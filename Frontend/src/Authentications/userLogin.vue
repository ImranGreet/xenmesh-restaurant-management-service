<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border border-inherit rounded-sm">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company" />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        @submit.prevent="setUsernameAndPassworAlogwithToken(username, password)"
        class="space-y-6"
        method="POST">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              name="username"
              type="text"
              v-model="username"
              autocomplete="email"
              readonly
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
            <div class="text-sm">
              <a
                href="#"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              name="password"
              type="password"
              v-model="password"
              readonly
              autocomplete="current-password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center" />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not Registered?
        {{ ' ' }}

        <router-link
          :to="{ name: 'user_registration' }"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Sign UP
        </router-link>
      </p>
      <div class="w-full flex justify-between items-center">
        <button
          @click="setusernameAndPassword('Xennifer', 'xen789456')"
          class="bg-teal-600 text-white px-3 py-1 rounded-sm border border-gray-800">
          User Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import UseCustomerAuthentication from '../scripts/Global/Authentications/customerAuth';
export default {
  name: 'userLogin',
  setup() {
    const {
      username,
      password,
      setUsernameAndPassworAlogwithToken,
      setusernameAndPassword,
    } = UseCustomerAuthentication();
    return {
      username,
      password,

      setUsernameAndPassworAlogwithToken,
      setusernameAndPassword,
    };
  },
};
</script>
