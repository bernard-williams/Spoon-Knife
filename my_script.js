// ==UserScript==
// @id          My_personal_script@https://github.com/bernard-williams/Spoon-Knife
// @name        My personal script
// @namespace   https://github.com/bernard-williams/Spoon-Knife
// @description Muj osobni testovaci script
// @author      tomas.marcanik@aukro.cz
// @license     GNU GPLv3
// @supportURL  https://github.com/bernard-williams/Spoon-Knife
// @homepageURL https://github.com/bernard-williams/Spoon-Knife
// @downloadURL https://github.com/bernard-williams/Spoon-Knife/raw/master/my_script.js
// @updateURL   https://github.com/bernard-williams/Spoon-Knife/raw/master/my_script.js
// @version     1.0
// @grant       none
// @run-at      document-end
// @include     https://github.com/*
// @include     https://www.github.com/*
// ==/UserScript==
/* global unsafeWindow */

(function(unsafeWindow) {

alert("jedu");

})(typeof unsafeWindow !== "undefined" ? unsafeWindow : window);
