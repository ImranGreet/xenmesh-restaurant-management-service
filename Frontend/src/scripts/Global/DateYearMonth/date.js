import { ref } from 'vue';
import moment from 'moment';

const lastdate = moment().endOf('month').format('YYYY-MM-DD');

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const today = date.getDate();

let currentDate = `${currentYear}-${currentMonth}-${today}`;

let endDate = `${currentYear}-${currentMonth}-${today}`;

let getExpectedDate = ref('');

export { lastdate, currentDate };
