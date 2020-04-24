(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/page"],{

/***/ "./js/page.js":
/*!********************!*\
  !*** ./js/page.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var medium_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! medium-zoom */ "./node_modules/medium-zoom/dist/medium-zoom.esm.js");
/* harmony import */ var fitvids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fitvids */ "./node_modules/fitvids/index.js");
/* harmony import */ var fitvids__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fitvids__WEBPACK_IMPORTED_MODULE_2__);



jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  fitvids__WEBPACK_IMPORTED_MODULE_2___default()('.js-post-content');

  function adjustImageGallery() {
    var images = document.querySelectorAll('.kg-gallery-image img');

    for (var i = 0, len = images.length; i < len; i++) {
      var container = images[i].closest('.kg-gallery-image');
      var width = images[i].attributes.width.value;
      var height = images[i].attributes.height.value;
      var ratio = width / height;
      container.style.flex = "".concat(ratio, " 1 0%");
    }
  }

  adjustImageGallery();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-post-content').find('figure img').each(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('figure').hasClass('kg-bookmark-card')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('js-zoomable');
    }

    var $figcaption = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find('figcaption');

    if ($figcaption) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('alt', $figcaption.text());
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('alt', '');
    }
  });
  Object(medium_zoom__WEBPACK_IMPORTED_MODULE_1__["default"])('.js-zoomable');
});

/***/ }),

/***/ 4:
/*!**************************!*\
  !*** multi ./js/page.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/berns/Documents/programming/ghost-design/content/themes/liebling-dev/src/js/page.js */"./js/page.js");


/***/ })

},[[4,"/js/manifest","/js/vendor"]]]);