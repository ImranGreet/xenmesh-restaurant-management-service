import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

let authorized = ref(false);

const UseCustomerAuthentication = function () {
  let username = ref('');
  let password = ref('');
  let token = ref('');
  let router = useRouter();
  let customerTokenGlobal = ref('');

  const createToken = function (paramOne, paramTwo) {
    let randomNumber = Math.random();
    token = paramOne + randomNumber + paramTwo;
    localStorage.setItem('customerToken', token);
  };

  let getCustomerToken = function (tokenName) {
    let customerTokenData = JSON.parse(localStorage.getItem(tokenName));
    customerTokenGlobal.value = customerTokenData;
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
    router.push({ name: 'public-home' });
  };

  return {
    username,
    password,
    authorized,
    setusernameAndPassword,
    setUsernameAndPassworAlogwithToken,
    getCustomerToken,
  };
};

export default UseCustomerAuthentication;
export { authorized };
