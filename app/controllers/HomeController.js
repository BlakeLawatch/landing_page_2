import { Pop } from "../utils/Pop.js"
import Aos from "aos";

// Public
export class HomeController {
  constructor() {
    console.log('This is the Home Controller')
    Aos.init({
      once: true,
      duration: 1000
    });
  }

  testButton() {
    Pop.success('The button Works 😎')
  }
}