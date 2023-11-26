import { createApp } from "vue";
import "../src/assets/tailwind.css";
import router from "./routes";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";
import VueAnimXyz from "@animxyz/vue3";
import "@animxyz/core"; //
import App from "./App.vue";

/*Global Components*/
import Submitbutton from "../src/components/Admin/Auth/Submitbutton.vue";
import FormHeadLine from "../src/components/Admin/Auth/FormHeadLine.vue";

// import DeleteBtn from "../src/components/Admin/Utilities/actionButtons/DeleteBtn.vue";
// import EditBtn from "../src/components/Admin/Utilities/actionButtons/EditBtn.vue";
// import publishBtn from "../src/components/Admin/Utilities/actionButtons/PublishedBtn.vue";
// import publishNotBtn from "../src/components/Admin/Utilities/actionButtons/PublishedNot.vue";

/*Global Components*/

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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
  
  
  
} from "@fortawesome/free-solid-svg-icons";

import { faBell, faCreditCard} from "@fortawesome/free-regular-svg-icons";
import { faFacebook ,faTwitter,faYoutube,faInstagram} from "@fortawesome/free-brands-svg-icons";


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
  faBarsProgress
);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("authsubmitBtn", Submitbutton);
app.component("formTitle", FormHeadLine);
app.use(VueAnimXyz);
app.use(plugin, defaultConfig);
app.use(createPinia(App));
app.mount("#app");
