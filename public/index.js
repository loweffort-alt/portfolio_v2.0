import Home from "./pages/home/index.js";
import typing from "./pages/home/components/typing.js";

import Expertise from "./pages/expertise/index.js";

import Contact from "./pages/contact/index.js";
import sendEmail from "./pages/contact/emailjs.js";

import dinamicColor from "./global/background.js";
import slider from "./global/slider.js";
(function () {
  emailjs.init("user_qDxnPLfSumE8YRYdhPLD2");
})();

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  sendEmail();
});

typing();
