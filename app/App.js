import Aos from 'aos';
import { router } from './router-config.js';


class App {

  router = router


}
// function aos_init() {
//   Aos.init({
//     duration: 1000,
//     once: true
//   });
// }
// aos_init();
// $(window).on('load', function() {
// });


const app = new App()
// @ts-ignore
window.app = app



