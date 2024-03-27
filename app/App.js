// import Aos from 'aos';
// import { router } from './router-config.js';

const { AOS } = require("./aos.js");

function goToLanguages() {
  let elem = document.getElementById("languages");
  elem?.scrollIntoView({ behavior: "smooth" })
}

function goToApplications() {
  let elem = document.getElementById("applications");
  elem?.scrollIntoView({ behavior: "smooth" })
}

function goToMyStory() {
  let elem = document.getElementById("myStory");
  elem?.scrollIntoView({ behavior: "smooth" });

}

function aos_init() {
  AOS.init({
    duration: 1000,
    once: true
  });
}
$(window).on('load', function () {
  aos_init();
});

// function aos_init() {
//   Aos.init({
//     duration: 1000,
//     once: true
//   });
// }
// // aos_init();
// // $(window).on('load', function() {
// // });



// const app = new App()
// // @ts-ignore
// window.app = app



