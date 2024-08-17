import { createApp, version } from 'vue';
import '../src/assets/tailwind.css';
import '../src/assets/custom.css';
import router from './routes';
import { createPinia } from 'pinia';
import { plugin, defaultConfig } from '@formkit/vue';

import App from './App.vue';

/*Global Components*/
import Submitbutton from '../src/components/Admin/Auth/Submitbutton.vue';
import FormHeadLine from '../src/components/Admin/Auth/FormHeadLine.vue';
import ShowButton from '../src/components/Utilities/FormUtility/ShowButton.vue';
import Pagination from './components/Utilities/FormUtility/Pagination.vue';
import {
  PencilSquareIcon,
  ShieldCheckIcon,
  TrashIcon,
} from '@heroicons/vue/24/outline';

/*Global Components*/

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faUserSecret,
  faBars,
  faMagnifyingGlass,
  faGear,
  faMoon,
  faExpand,
  faCompress,
  faUser,
  faGlobe,
  faLock,
  faPowerOff,
  faComment,
  faCircleUser,
  faX,
  faTableCells,
  faBarsProgress,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

import { faBell, faCreditCard } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(
  faUserSecret,
  faBars,
  faMagnifyingGlass,
  faBell,
  faGear,
  faMoon,
  faExpand,
  faCompress,
  faUser,
  faGlobe,
  faLock,
  faPowerOff,
  faCreditCard,
  faComment,
  faCircleUser,
  faX,
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faTableCells,
  faBarsProgress,
  faUtensils,
);

const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('authsubmitBtn', Submitbutton);
app.component('Pagination', Pagination);
app.component('formTitle', FormHeadLine);
app.component('ShowButton', ShowButton);
app.component('PencilSquareIcon', PencilSquareIcon);
app.component('ShieldCheckIcon', ShieldCheckIcon);
app.component('TrashIcon', TrashIcon);

app.use(plugin, defaultConfig);
app.use(createPinia(App));
app.mount('#app');
