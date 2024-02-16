import { router } from './router-config.js';
import AOS from 'aos'

class App {

  router = router

}


const app = new App()
// @ts-ignore
window.app = app

