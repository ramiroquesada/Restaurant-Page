/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let container = document.getElementById(\"container\");\r\n\r\n\r\n\r\n\r\n\r\nlet header = document.createElement('div');\r\nheader.classList.add('header');\r\n\r\nlet headerHome =document.createElement('div');\r\nheaderHome.classList.add('headerHome');\r\nheaderHome.classList.add('headerSelected');\r\nheaderHome.innerHTML = '<p>Inicio</p>'\r\nheader.appendChild(headerHome);\r\n\r\nlet headerMenu = document.createElement('div');\r\nheaderMenu.classList.add('headerMenu');\r\nheaderMenu.innerHTML = '<p>Menú<p>'\r\nheader.appendChild(headerMenu);\r\n\r\nlet headerContacto = document.createElement('div');\r\nheaderContacto.classList.add('headerContacto');\r\nheaderContacto.innerHTML = '<p>Contacto</p>';\r\nheader.appendChild(headerContacto)\r\n\r\n\r\n\r\ncontainer.prepend(header)\r\n\r\n\r\n\r\n\r\n// INDEX CONTENT\r\n\r\nlet showHome = ()=>{\r\n \r\n  container.innerHTML = '';\r\n  container.prepend(header);\r\n  clearHeader();\r\n  \r\n \r\nheaderHome.classList.add('headerSelected')\r\n\r\n\r\n\r\nlet contentIndex = document.createElement('div');\r\ncontentIndex.classList.add('contentIndex');\r\ncontentIndex.setAttribute('id', 'contentIndex');\r\n\r\ncontentIndex.innerHTML = `<p class=\"bienvenidos\">Bienvenidos</p>\r\n<p class=\"matadero\">El Matadero</p>\r\n<button type=\"button\" class=\"buttonMenu\" id=\"buttonMenuOnIndex\">Ver el Menú</button>`;\r\n\r\n\r\ncontainer.append(contentIndex)\r\ncontainer.append(footer)\r\n let buttonMenuOnIndex = document.getElementById('buttonMenuOnIndex')\r\n buttonMenuOnIndex.addEventListener('click', showMenu)\r\n\r\n\r\n\r\n}\r\n\r\nheaderHome.addEventListener('click', showHome);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// MENU CONTENT\r\n\r\nlet showMenu = ()=>{\r\n\r\n\r\ncontainer.innerHTML = '';\r\ncontainer.prepend(header);\r\nclearHeader()\r\nheaderMenu.classList.add('headerSelected')\r\n\r\n\r\nlet contentMenu = document.createElement('div');\r\ncontentMenu.classList.add('contentMenu');\r\ncontentMenu.setAttribute('id', 'contentMenu');\r\n\r\ncontentMenu.innerHTML = `<div class=\"contentMenu\">\r\n<div class=\"menuItem\" id=\"menuItem1\">\r\n    <img class=\"menuImg\" src=\"/src/img/asado-tira.jpg\" alt=\"Asado de Tira\">\r\n    <p class=\"menuText\">Asado de Tira &bull; <span class=\"menuPrice\">$550</span></p>\r\n</div>\r\n<div class=\"menuItem\" id=\"menuItem2\">\r\n    <img class=\"menuImg\" src=\"/src/img/chorizo.jpg\" alt=\"Chorizo\">\r\n    <p class=\"menuText\">Chorizo &bull; <span class=\"menuPrice\">$350</span></p>\r\n</div>\r\n<div class=\"menuItem\" id=\"menuItem3\">\r\n    <img class=\"menuImg\" src=\"/src/img/colita-cuadril.jpg\" alt=\"Colita de Cuadril\">\r\n    <p class=\"menuText\">Colita de cuadril &bull; <span class=\"menuPrice\">$650</span></p>\r\n</div>\r\n<div class=\"menuItem\" id=\"menuItem4\">\r\n    <img class=\"menuImg\" src=\"/src/img/Cordero.jpg\" alt=\"Cordero\">\r\n    <p class=\"menuText\">Cordero &bull; <span class=\"menuPrice\">$400</span></p>\r\n</div>\r\n<div class=\"menuItem\" id=\"menuItem5\">\r\n    <img class=\"menuImg\" src=\"/src/img/entrecote.jpg\" alt=\"Entrecote\">\r\n    <p class=\"menuText\">Entrecote &bull; <span class=\"menuPrice\">$790</span></p>\r\n</div>\r\n<div class=\"menuItem\" id=\"menuItem6\">\r\n    <img class=\"menuImg\" src=\"/src/img/pamplona.jpg\" alt=\"Pamplona\">\r\n    <p class=\"menuText\">Pamplona &bull; <span class=\"menuPrice\">$470</span></p>\r\n</div>\r\n<div class=\"menuItem\" id=\"menuItem7\">\r\n  <img class=\"menuImg\" src=\"/src/img/hamburguesa.jpg\" alt=\"Hamburguesa\">\r\n  <p class=\"menuText\">Hamburguesa &bull; <span class=\"menuPrice\">$420</span></p>\r\n</div>\r\n<div class=\"menuItem\" id=\"menuItem8\">\r\n  <img class=\"menuImg\" src=\"/src/img/panchos.jpg\" alt=\"Pancho\">\r\n  <p class=\"menuText\">Panchos &bull; <span class=\"menuPrice\">$330</span></p>\r\n</div>\r\n</div>`;\r\n\r\n\r\ncontainer.append(contentMenu)\r\ncontainer.append(footer)\r\n\r\n}\r\n\r\nheaderMenu.addEventListener('click', showMenu);\r\n\r\n\r\n\r\n\r\n// contacto\r\n\r\n\r\nlet showContacto = ()=>{\r\n\r\ncontainer.innerHTML = '';\r\ncontainer.prepend(header);\r\nclearHeader()\r\nheaderContacto.classList.add('headerSelected')\r\n\r\nlet contentContacto = document.createElement('div');\r\ncontentContacto.classList.add('contentContacto');\r\ncontentContacto.setAttribute('id', 'contentContacto');\r\n\r\ncontentContacto.innerHTML = `<div class=\"contactoContainer\">\r\n<p class=\"contactanos\">Contactate con nosotros!</p>\r\n<div class=\"contacto\" id=\"contacto\">\r\n  <div class=\"izqArriba\">\r\n    <div class=\"inconoTexto\">\r\n      <i class=\"fa-solid fa-location-dot iconoBlanco\"></i>\r\n      <p>Eusebio E. Giménez 643, Mercedes, Soriano, Uruguay </p>\r\n    </div>\r\n    <div class=\"inconoTexto\">\r\n      <i class=\"fa-solid fa-clock iconoBlanco\"></i>\r\n      <p>Abierto todos los días de <span class=\"horario\">20:00 a 3:00</span></p>\r\n    </div>\r\n    <div class=\"inconoTexto\">\r\n      <i class=\"fa-solid fa-phone iconoBlanco\"></i>\r\n      <p>(4532)-2201 </p>\r\n    </div>\r\n    <div class=\"inconoTexto\">\r\n      <i class=\"fa-solid fa-envelope iconoBlanco\"></i>\r\n      <p class=\"horario\">ESCRIBENOS!</p>              \r\n    </div>\r\n\r\n    \r\n     <form action=\"#\" class=\"formulario\">\r\n        \r\n        <input class=\"inputContacto\" type=\"text\" id=\"nombre\" title=\"Nombre\" placeholder=\"Nombre Completo\">\r\n        <input class=\"inputContacto\" type=\"email\" name=\"email\" id=\"Email\" placeholder=\"alguien@correo.com\">\r\n        <input class=\"mensajelargo inputContacto\" type=\"text\" id=\"mensaje\" title=\"Mensaje\" placeholder=\"Escribe tu mensaje\">\r\n        <input class=\"submitButton\" type=\"submit\">\r\n     </form>\r\n    \r\n\r\n    \r\n\r\n\r\n\r\n  </div>\r\n  <div class=\"derAbajo\">\r\n    <div class=\"mapaContainer\"><iframe class=\"mapa\" title=\"mapa\" width=\"100%\" height=\"500\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=gimenez%20643%20merrcedes+(EL%20MATADERO)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed\"></iframe></div>\r\n  </div>\r\n</div>\r\n</div>`;\r\n\r\ncontainer.append(contentContacto)\r\ncontainer.append(footer)\r\n\r\n}\r\n\r\nheaderContacto.addEventListener('click', showContacto);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//  FOOTER\r\nlet footer = document.createElement('footer');\r\nfooter.classList.add('footer');\r\nfooter.setAttribute('id', 'footer')\r\nfooter.innerHTML = `<p>\r\n  Creado por\r\n  <a href=\"https://github.com/ramessj\" target=\"blank\">Ramiro Quesada</a>\r\n  • Hosteado en\r\n  <a href=\"https://github.com/ramessj/Restaurant-Page\" target=\"blank\">GitHub</a>\r\n</p>`;\r\n\r\ncontainer.append(footer);\r\n\r\n\r\n\r\n\r\n\r\n// funcion para eliminar la clase de todos los elementos del header\r\n\r\nlet clearHeader = ()=>{\r\n\r\nheaderHome.classList.remove('headerSelected');\r\nheaderMenu.classList.remove('headerSelected')\r\nheaderContacto.classList.remove('headerSelected')\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nshowHome()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;