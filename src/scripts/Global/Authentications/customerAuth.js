import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

let authorized = ref(false);

let authorisedProfileShower = ref(false);

const authorizedProfileCloseDiscloser = function () {
  if (authorized.value) {
    authorisedProfileShower.value = !authorisedProfileShower.value;
  }
};

const UseCustomerAuthentication = function () {
  let username = ref('');
  let password = ref('');
  let token = ref('');
  let router = useRouter();
  let customerTokenGlobal = ref('');

  const createToken = function (paramOne, paramTwo) {
    let randomNumber = Math.random();
    token = JSON.stringify(paramOne + randomNumber + paramTwo);
    localStorage.setItem('customerToken', token);
  };

  let getCustomerToken = function (tokenName) {
    let customerTokenData = JSON.parse(localStorage.getItem(tokenName));
    customerTokenGlobal.value = customerTokenData;
    if (customerTokenGlobal.value) {
      if (!authorized.value) {
        authorized.value = true;
      }
    }
  };

  let checkDataType = function (paramOne, paramTwo) {
    if (!(typeof paramOne === 'string' || typeof paramTwo === 'string')) {
      window.alert('Data type is not supported');
      return 0;
    }
  };

  const setusernameAndPassword = function (paramOne, paramTwo) {
    checkDataType(paramOne, paramTwo);
    username.value = paramOne;
    password.value = paramTwo;
  };

  const setUsernameAndPassworAlogwithToken = function (userName, passCode) {
    if (userName.trim() === '' || passCode.trim() === '') {
      window.alert('Please Select Button From Bottom');
      return 0;
    }
    checkDataType(userName, passCode);
    username.value = userName.trim();
    password.value = passCode.trim();
    createToken(userName, passCode);
    authorized.value = true;
    getCustomerToken('customerToken');
    router.push({ name: 'public-home' });
    console.log(authorized.value, 'auth');
  };

  const clearToekn = function (tokenNameToClear) {
    localStorage.removeItem(tokenNameToClear);
    /*authorized profile close*/
    authorized.value = false;
  };

  const userLogOutAndClearToken = function () {
    clearToekn('customerToken');
    router.push({ name: 'user_login' });
  };

  return {
    username,
    password,
    authorized,
    setusernameAndPassword,
    setUsernameAndPassworAlogwithToken,
    getCustomerToken,
    userLogOutAndClearToken,
  };
};

export default UseCustomerAuthentication;
export { authorized, authorisedProfileShower, authorizedProfileCloseDiscloser };
