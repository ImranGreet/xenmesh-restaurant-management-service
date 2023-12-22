import { ref } from 'vue';

const showToaster = ref(false);

const textShowing = ref('');

const toasterSerial = ref([]);

const inCart = ref(false);

const itemAdded = function () {
  textShowing.value = 'Item added Successfully';
  let index = toasterSerial.value.length;
  toasterSerial.value.push(index + 1);
};

const corkedToaster = () => {
  toasterSerial.value.pop();
};

let closeToasterInChronologicalOrder = function () {
  toasterSerial.value.shift();
};

setInterval(() => {
  closeToasterInChronologicalOrder();
}, 5 * 1000);

const alreadyHave = function(){
  
  textShowing.value = 'Item already have ';
  let index = toasterSerial.value.length;
  toasterSerial.value.push(index + 1);
}

export { showToaster, textShowing, toasterSerial, itemAdded, corkedToaster ,alreadyHave,inCart};
