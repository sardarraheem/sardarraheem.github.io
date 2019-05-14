(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutus/aboutus.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section about-section\" id=\"about\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"about-caption section-title-box col-md-12\">\n                <h1>About Us</h1>\n                <span class=\"title-divider\">\n                          <i class=\"fa fa-building\" aria-hidden=\"true\"></i>\n                      </span>\n                <p>\n                    We refuse to compromise on quality in our restaurant. That's why we source our fresh ingredients from local farmers' markets.\n                </p>\n            </div><!-- end about caption -->\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"about-content\">\n                    <h3>Our Chef and Staff</h3>\n                    <p>\n                        With 20 years of experience cooking in the finest restaurants, our chef is excited to present their vision to you and all our guests. Our caring and committed staff will ensure you have a fantastic experience with us.\n                    </p>\n\n                    <h3>Special Events and Catering</h3>\n                    <p>\n                        Our restaurant is available for private events: weddings, business lunches, dinners, cocktail receptions, and more. We would love to discuss how to be a part of your next event. \n                    </p>\n                    <a href=\"#contact\" class=\"vojon-btn\">Resever Now </a>\n                    <a href=\"#contact\" class=\"vojon-btn\">Learn More</a>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"about-thumb\">\n                    <img src=\"assets/img/chef-2.png\" class=\"img-responsive\" width=\"360\" height=\"427\" alt=\"\">\n                </div>\n            </div>\n        </div>\n    </div><!-- end of /.container -->\n</section>"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/aboutus/aboutus.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/allfunctionalities/allfunctionalities.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/allfunctionalities/allfunctionalities.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div> \n \n <main id=\"main\">\n  <app-mainslider></app-mainslider>\n  <app-aboutus></app-aboutus>\n   <!-- <app-services></app-services> -->\n   <app-menus></app-menus>  \n   <!-- <app-our-group></app-our-group> -->\n   <!-- <app-technologies></app-technologies> -->\n   <app-contactus></app-contactus>\n </main>\n <app-footer></app-footer> \n <!-- <app-dialog-popup></app-dialog-popup> -->\n \n</div>\n<!--<app-footer></app-footer>-->\n \n \n    \n\n  \n\n"

/***/ }),

/***/ "./src/app/allfunctionalities/allfunctionalities.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/allfunctionalities/allfunctionalities.component.ts ***!
  \********************************************************************/
/*! exports provided: AllfunctionalitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllfunctionalitiesComponent", function() { return AllfunctionalitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AllfunctionalitiesComponent = /** @class */ (function () {
    function AllfunctionalitiesComponent() {
    }
    AllfunctionalitiesComponent.prototype.ngOnInit = function () {
    };
    AllfunctionalitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-allfunctionalities',
            template: __webpack_require__(/*! ./allfunctionalities.component.html */ "./src/app/allfunctionalities/allfunctionalities.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AllfunctionalitiesComponent);
    return AllfunctionalitiesComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _allfunctionalities_allfunctionalities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allfunctionalities/allfunctionalities.component */ "./src/app/allfunctionalities/allfunctionalities.component.ts");




var routes = [{ path: "", component: _allfunctionalities_allfunctionalities_component__WEBPACK_IMPORTED_MODULE_3__["AllfunctionalitiesComponent"] },];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.styl":
/*!************************************!*\
  !*** ./src/app/app.component.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Mahrosh';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.styl */ "./src/app/app.component.styl")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _allfunctionalities_allfunctionalities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./allfunctionalities/allfunctionalities.component */ "./src/app/allfunctionalities/allfunctionalities.component.ts");
/* harmony import */ var _menus_menus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menus/menus.component */ "./src/app/menus/menus.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _mainslider_mainslider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mainslider/mainslider.component */ "./src/app/mainslider/mainslider.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _allfunctionalities_allfunctionalities_component__WEBPACK_IMPORTED_MODULE_5__["AllfunctionalitiesComponent"],
                _menus_menus_component__WEBPACK_IMPORTED_MODULE_6__["MenusComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _mainslider_mainslider_component__WEBPACK_IMPORTED_MODULE_8__["MainsliderComponent"],
                _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__["AboutusComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\">\n    <div class=\"container\">\n\n        <div class=\"section-title-box  col-md-12\">\n            <h1>Contact Us</h1>\n            <span class=\"title-divider\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> </span>\n            <p>\n                Do you have dietary concerns? Questions about an upcoming event? Drop us a line, and we'll get back to you soon!\n            </p>\n        </div>\n\n      <div class=\"row wow fadeInUp\">\n\n        <div class=\"col-lg-12\">\n          <div class=\"map mb-4 mb-lg-0\">\n            <iframe src=\"https://maps.google.com/maps?q=Mahrosh%20Restaurant%2C%20Far%20Moor%20Lane%2C%20Redditch&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" style=\"border:0; width: 100%; height: 312px;\" allowfullscreen></iframe>\n          </div>\n        </div>\n\n        <div class=\"col-lg-9 mx-auto mt-5\">\n          <div class=\"row\">\n            <div class=\"col-md-5 info\">\n              <i class=\"ion-ios-location-outline\"></i>\n              <p>Mahrosh Retaurant,  Blue Inn Far Moor Lane Reddtich B980SD</p>\n            </div>\n            <div class=\"col-md-4 info\">\n              <i class=\"ion-ios-email-outline\"></i>\n              <p>info@mahroshrestaurant.co.uk</p>\n            </div>\n            <div class=\"col-md-3 info\">\n              <i class=\"ion-ios-telephone-outline\"></i>\n              <p><a href=\"tel:+44 1527 525635\">+44 1527 525635</a></p>\n            </div>\n          </div>\n\n          <div class=\"form\">\n            <div id=\"sendmessage\">Your message has been sent. Thank you!</div>\n            <div id=\"errormessage\"></div>\n            <form action=\"\" method=\"post\" role=\"form\" class=\"contactForm\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-lg-6\">\n                  <input type=\"text\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 4 chars\" />\n                  <div class=\"validation\"></div>\n                </div>\n                <div class=\"form-group col-lg-6\">\n                  <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Your Email\" data-rule=\"email\" data-msg=\"Please enter a valid email\" />\n                  <div class=\"validation\"></div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" placeholder=\"Subject\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 8 chars of subject\" />\n                <div class=\"validation\"></div>\n              </div>\n              <div class=\"form-group\">\n                <textarea class=\"form-control\" name=\"message\" rows=\"5\" data-rule=\"required\" data-msg=\"Please write something for us\" placeholder=\"Message\"></textarea>\n                <div class=\"validation\"></div>\n              </div>\n              <div class=\"text-center\"><button type=\"submit\" title=\"Send Message\">Send Message</button></div>\n            </form>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </section><!-- #contact -->\n"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n    <div class=\"footer-top\">\n      <div class=\"container\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-5 col-md-6 footer-info\">\n            <h3>Mahrosh</h3>\n            <p>\n                With 20 years of experience cooking in the finest restaurants, our chef is excited to present their vision to you and all our guests. Our caring and committed staff will ensure you have a fantastic experience with us.\n                We refuse to compromise on quality in our restaurant. That's why we source our fresh ingredients from local farmers' markets.\n            </p>\n          </div>\n\n          <div class=\"col-lg-3 col-md-6 footer-links\">\n            <h4>Useful Links</h4>\n            <ul>\n              <li><a href=\"#carouselExampleIndicators\">Home</a></li>\n              <li><a href=\"#about\">About us</a></li>\n              <li><a href=\"#menu\">Menu</a></li>\n              <li><a href=\"#contact\">Contact us</a></li>\n              <!-- <li><a href=\"#\">Terms of service</a></li>\n              <li><a href=\"#\">Privacy policy</a></li> -->\n            </ul>\n          </div>\n\n          <div class=\"col-lg-4 col-md-6 footer-contact\">\n            <h4>Contact Us</h4>\n            <p>\n              Mahrosh Retaurant,  Blue Inn Far Moor Lane <br>\n              Reddtich B980SD, United Kingdom <br>\n              <strong>Phone:</strong> +44 1527 525635<br>\n              <strong>Email:</strong> info@mahroshrestaurant.co.uk<br>\n            </p>\n\n            <div class=\"social-links\">\n              <a href=\"https://twitter.com\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n              <a href=\"https://web.facebook.com\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n              <a href=\"https://www.instagram.com/\" class=\"instagram\"><i class=\"fa fa-instagram\"></i></a>\n              <a href=\"https://www.google.com\" class=\"google-plus\"><i class=\"fa fa-google-plus\"></i></a>\n              <a href=\"https://www.linkedin.com\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n            </div>\n\n          </div>\n\n          \n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <div class=\"copyright\">\n        &copy; Copyright <strong>Mahrosh</strong>. All Rights Reserved\n      </div>\n      \n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/mainslider/mainslider.component.html":
/*!******************************************************!*\
  !*** ./src/app/mainslider/mainslider.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"4\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"5\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"6\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"7\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n      <!-- Slide One - Set the background image for this slide in the line below -->\n      <div class=\"carousel-item active\" style=\"background-image: url('assets/img/grill.jpg')\">\n          <div class=\"carousel-caption d-none d-md-block\">\n              <h2 class=\"display-4\">Welcome to Mahrosh Restaurant</h2>\n              <p class=\"lead\">Join us for great home-style cooking!</p>\n          </div>\n      </div>\n      <!-- Slide Two - Set the background image for this slide in the line below -->\n      <div class=\"carousel-item\" style=\"background-image: url('assets/img/Lahori-Karahi-Recipe.jpg')\">\n          <div class=\"carousel-caption d-none d-md-block\">\n              <h2 class=\"display-4\">Indian and American Food</h2>\n              <p class=\"lead\">Join us for great dietary concerns!</p>\n          </div>\n      </div>\n      <!-- Slide Three - Set the background image for this slide in the line below -->\n      <div class=\"carousel-item\" style=\"background-image: url('assets/img/bbq-barbecue.jpg')\">\n          <div class=\"carousel-caption d-none d-md-block\">\n              <h2 class=\"display-4\">Upcoming Events</h2>\n              <p class=\"lead\">Join us for special request!</p>\n          </div>\n      </div>\n\n      <!-- Slide Four - Set the background image for this slide in the line below -->\n      <div class=\"carousel-item\" style=\"background-image: url('assets/img/banner-pouring-table.jpg')\">\n        <div class=\"carousel-caption d-none d-md-block\">\n            <h2 class=\"display-4\">Reserve a Table</h2>\n            <p class=\"lead\">We're still setting up Open Table integration. Check back soon!</p>\n        </div>\n       </div>\n\n       <!-- Slide Five - Set the background image for this slide in the line below -->\n      <div class=\"carousel-item\" style=\"background-image: url('assets/img/hero_slide_3.jpg')\">\n        <div class=\"carousel-caption d-none d-md-block\">\n            <h2 class=\"display-4\">Better yet, see us in person</h2>\n            <p class=\"lead\">We love our customers, so feel free to visit during normal business hours!</p>\n        </div>\n      </div>\n\n       <!-- Slide Six - Set the background image for this slide in the line below -->\n       <div class=\"carousel-item\" style=\"background-image: url('assets/img/FoodItem.jpeg')\">\n        <div class=\"carousel-caption d-none d-md-block\">\n            <h2 class=\"display-4\"></h2>\n            <p class=\"lead\"></p>\n        </div>\n      </div>\n\n       <!-- Slide Seven - Set the background image for this slide in the line below -->\n       <div class=\"carousel-item\" style=\"background-image: url('assets/img/SpicyFood.jpeg')\">\n        <div class=\"carousel-caption d-none d-md-block\">\n            <h2 class=\"display-4\"></h2>\n            <p class=\"lead\"></p>\n        </div>\n      </div>\n\n       <!-- Slide Eight - Set the background image for this slide in the line below -->\n       <div class=\"carousel-item\" style=\"background-image: url('assets/img/SpicyFood1.jpeg')\">\n        <div class=\"carousel-caption d-none d-md-block\">\n            <h2 class=\"display-4\"></h2>\n            <p class=\"lead\"></p>\n        </div>\n      </div>\n\n       <!-- Slide Seven - Set the background image for this slide in the line below -->\n       <div class=\"carousel-item\" style=\"background-image: url('assets/img/Mahrosh.jpeg')\">\n        <div class=\"carousel-caption d-none d-md-block\">\n            <h2 class=\"display-4\"></h2>\n            <p class=\"lead\"></p>\n        </div>\n      </div>\n      \n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n  </a>\n</section>\n"

/***/ }),

/***/ "./src/app/mainslider/mainslider.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mainslider/mainslider.component.ts ***!
  \****************************************************/
/*! exports provided: MainsliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainsliderComponent", function() { return MainsliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainsliderComponent = /** @class */ (function () {
    function MainsliderComponent() {
    }
    MainsliderComponent.prototype.ngOnInit = function () {
    };
    MainsliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainslider',
            template: __webpack_require__(/*! ./mainslider.component.html */ "./src/app/mainslider/mainslider.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainsliderComponent);
    return MainsliderComponent;
}());



/***/ }),

/***/ "./src/app/menus/menus.component.html":
/*!********************************************!*\
  !*** ./src/app/menus/menus.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"menu\" class=\"clearfix\">\n  <div class=\"container\">\n\n      <div class=\"section-title-box  col-md-12\">\n          <h1>Our Menu</h1>\n          <span class=\"title-divider\"><i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i> </span>\n          <p>\n            We have different menus like Starters (Cobb Salad & Cheese Sampler), Entrees (Seared Ahi Tuna & Pasta al Pomodoro)\n            and Dessert (Vanilla Cheesecake & Apple Pie).\n          </p>\n      </div>\n\n   <!--  <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <ul id=\"portfolio-flters\">\n          <li data-filter=\".filter-breakfast\">BREAKFAST</li>\n          <li data-filter=\".filter-lunch\">LUNCH</li>\n          <li data-filter=\".filter-dinner\">DINNER</li>\n          <li data-filter=\".filter-dessert\">DESSERT</li>\n          <li data-filter=\"*\" class=\"filter-active\">ALL DISHES</li>\n        </ul>\n      </div>\n    </div> -->\n\n    <div class=\"row portfolio-container\">\n\n      <div class=\"col-lg-4 col-md-6 portfolio-item filter-breakfast\">\n        <div class=\"portfolio-wrap\">\n          <a href=\"assets/img/MahroshMenu1.jpeg\" class=\"link-preview\" data-lightbox=\"portfolio\">\n             <img src=\"assets/img/MahroshMenu1.jpeg\" class=\"img-fluid\" alt=\"\">\n          </a>\n        </div>        \n          <div class=\"project-des\">\n              <p>Menu 1</p>\n          </div>\n      </div>\n\n      <div class=\"col-lg-4 col-md-6 portfolio-item filter-lunch\">\n        <div class=\"portfolio-wrap\">\n        <a href=\"assets/img/MahroshMenu2.jpeg\" class=\"link-preview\" data-lightbox=\"portfolio\">\n          <img src=\"assets/img/MahroshMenu2.jpeg\" class=\"img-fluid\" alt=\"\">\n          </a>\n        </div>\n  <div class=\"project-des\">\n            <p>Menu 2</p>\n  </div>\n  </div>\n     <!--  <div class=\"col-lg-4 col-md-6 portfolio-item filter-breakfast\" data-wow-delay=\"0.1s\">\n        <div class=\"portfolio-wrap\">\n          <a href=\"assets/img/Menu2Mahrosh.jpeg\" class=\"link-preview\" data-lightbox=\"portfolio\">\n              <img src=\"assets/img/Menu2Mahrosh.jpeg\" class=\"img-fluid\" alt=\"\">\n          </a>\n        </div>\n  <div class=\"project-des\">\n            <p>Menu 3</p>\n  </div>\n      </div> -->\n     <!--  <div class=\"col-lg-4 col-md-6 portfolio-item filter-dessert\" data-wow-delay=\"0.2s\">\n        <div class=\"portfolio-wrap\">\n        <a href=\"assets/img/MenuMahrosh.jpeg\" class=\"link-preview\" data-lightbox=\"portfolio\">\n          <img src=\"assets/img/MenuMahrosh.jpeg\" class=\"img-fluid\" alt=\"\">\n          </a>\n        </div>\n  <div class=\"project-des\">\n            <p>Menu 4</p>\n  </div>\n      </div> -->\n      <!-- <div class=\"col-lg-4 col-md-6 portfolio-item filter-dinner\">\n        <div class=\"portfolio-wrap\">\n          <a href=\"assets/img/Menu2Mahrosh.jpeg\" class=\"link-preview\" data-lightbox=\"portfolio\"> \n             <img src=\"assets/img/Menu2Mahrosh.jpeg\" class=\"img-fluid\" alt=\"\">\n          </a>\n        </div>\n  <div class=\"project-des\">\n            <p>Menu 5</p>\n  </div>\n      </div> -->\n      <!-- <div class=\"col-lg-4 col-md-6 portfolio-item filter-lunch\" data-wow-delay=\"0.1s\">\n        <div class=\"portfolio-wrap\">\n        <a href=\"assets/img/MenuMahrosh.jpeg\" class=\"link-preview\" data-lightbox=\"portfolio\">\n          <img src=\"assets/img/MenuMahrosh.jpeg\" class=\"img-fluid\" alt=\"\">\n          </a>\n        </div>\n  <div class=\"project-des\">\n            <p>Menu 6</p>\n  </div>\n      </div> -->\n     <!--  <div class=\"col-lg-4 col-md-6 portfolio-item filter-breakfast\" data-wow-delay=\"0.2s\">\n        <div class=\"portfolio-wrap\">\n        <a href=\"assets/img/web3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\">\n          <img src=\"assets/img/web3.jpg\" class=\"img-fluid\" alt=\"\">\n        </a>\n        </div>\n  <div class=\"project-des\">\n            <p>Menu 7</p>\n  </div>\n      </div> -->\n      <!-- <div class=\"col-lg-4 col-md-6 portfolio-item filter-dinner\">\n        <div class=\"portfolio-wrap\">\n            <a href=\"assets/img/web3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\">\n              <img src=\"assets/img/web3.jpg\" class=\"img-fluid\" alt=\"\">\n            </a>\n        </div>\n  <div class=\"project-des\">\n            <p>Menu 8</p>\n  </div>\n      </div> -->\n      <!-- <div class=\"col-lg-4 col-md-6 portfolio-item filter-dessert\" data-wow-delay=\"0.1s\">\n        <div class=\"portfolio-wrap\">\n            <a href=\"assets/img/web3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\">\n              <img src=\"assets/img/web3.jpg\" class=\"img-fluid\" alt=\"\">\n            </a>\n        </div>\n  <div class=\"project-des\">\n            <p>Menu 9</p>\n  </div>\n      </div> -->\n      \n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/menus/menus.component.ts":
/*!******************************************!*\
  !*** ./src/app/menus/menus.component.ts ***!
  \******************************************/
/*! exports provided: MenusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusComponent", function() { return MenusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenusComponent = /** @class */ (function () {
    function MenusComponent() {
    }
    MenusComponent.prototype.ngOnInit = function () {
    };
    MenusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menus',
            template: __webpack_require__(/*! ./menus.component.html */ "./src/app/menus/menus.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenusComponent);
    return MenusComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Mahrosh Restaurant\Mahrosh\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map