(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(0);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(1);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(17);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(70);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(33));
__export(__webpack_require__(34));
__export(__webpack_require__(11));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(3);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(68);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(7);
var Subject_1 = __webpack_require__(13);
__webpack_require__(12);
__webpack_require__(53);
__webpack_require__(54);
__webpack_require__(51);
__webpack_require__(52);
__webpack_require__(50);
var video_services_1 = __webpack_require__(5);
var video_details_enums_1 = __webpack_require__(9);
var VideoDetailsComponent = (function () {
    function VideoDetailsComponent(route, videoService, oEmbedService) {
        this.route = route;
        this.videoService = videoService;
        this.oEmbedService = oEmbedService;
        this.videoOrigins = video_details_enums_1.VideoOriginEnum;
        this.videoUrl = new Subject_1.Subject();
    }
    VideoDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.videoService.GetVideo(params['id']); })
            .subscribe(function (video) {
            _this.video = video;
            _this.previewVideo(video.url, video.videoOrigin.toString());
        });
        this.videoUrl
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe(function (url) { return _this.previewVideo(url, ""); });
    };
    //using Subject<string> to debounce url validation/video preview
    VideoDetailsComponent.prototype.validateVideoUrl = function (event) {
        this.videoUrl.next(event);
    };
    VideoDetailsComponent.prototype.previewVideo = function (url, providerName) {
        var _this = this;
        console.log("Preview video, url= " + url + ", provider=" + providerName);
        if (url === undefined || url === "") {
            return;
        }
        this.video.url = url;
        this.oEmbedService.checkVideoOEmbed(url)
            .subscribe(function (res) {
            _this.preview = res;
            _this.video.thumbUrl = res.thumbnail_url;
            console.log(_this.preview);
        }, function (err) {
            console.log(err);
        });
    };
    VideoDetailsComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log('model: ' + this.video);
        console.log('form: ' + form.value);
        if (this.video.id != null && this.video.id != "0") {
            this.videoService.updateVideo(this.video).subscribe(function (res) {
                _this.video = res;
                console.log('successfully saved video with ID: ' + _this.video.id);
            }, function (error) { return console.log('error on saving video'); });
        }
        else {
            this.videoService.createVideo(this.video).subscribe(function (res) {
                _this.video = res;
                console.log('successfully saved video with ID: ' + _this.video.id);
            }, function (error) { return console.log('error on saving video'); });
        }
    };
    return VideoDetailsComponent;
}());
VideoDetailsComponent = __decorate([
    core_1.Component({
        selector: 'video-details',
        template: __webpack_require__(47),
        styles: ["\n  \tul { padding:0; width:480; margin:20px auto; list-style-type: none;}\n  \tli { display:inline;}\n        .tn{ \n\t   margin:2px 0px;\n\t   box-shadow:#999 1px 1px 3px 1px; \n\t   cursor: pointer \n        }\n  \t.modal-content {\n\t    width: 670px !important;\n\t}\n  "]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, video_services_1.VideoService, video_services_1.oEmbedService])
], VideoDetailsComponent);
exports.VideoDetailsComponent = VideoDetailsComponent;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VideoOriginEnum;
(function (VideoOriginEnum) {
    VideoOriginEnum[VideoOriginEnum["Unknown"] = 0] = "Unknown";
    VideoOriginEnum[VideoOriginEnum["YouTube"] = 1] = "YouTube";
    VideoOriginEnum[VideoOriginEnum["Vimeo"] = 2] = "Vimeo";
    VideoOriginEnum[VideoOriginEnum["Channel9"] = 3] = "Channel9";
})(VideoOriginEnum || (VideoOriginEnum = {}));
exports.VideoOriginEnum = VideoOriginEnum;
var VideoDisplayMode;
(function (VideoDisplayMode) {
    VideoDisplayMode[VideoDisplayMode["Create"] = 0] = "Create";
    VideoDisplayMode[VideoDisplayMode["Read"] = 1] = "Read";
    VideoDisplayMode[VideoDisplayMode["CompactRead"] = 2] = "CompactRead";
    VideoDisplayMode[VideoDisplayMode["Edit"] = 3] = "Edit";
})(VideoDisplayMode || (VideoDisplayMode = {}));
exports.VideoDisplayMode = VideoDisplayMode;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(3);
//ng2
var core_1 = __webpack_require__(1); //View
var video_services_1 = __webpack_require__(5);
var video_oembed_service_1 = __webpack_require__(11);
//import {VideoDetailsComponent} from '../video-details/video-details.component';
var VideoListComponent = (function () {
    function VideoListComponent(http, videoService, oembedService) {
        this.http = http;
        this.videoService = videoService;
        this.oembedService = oembedService;
    }
    VideoListComponent.prototype.ngOnInit = function () {
        this.videos = this.videoService.GetVideos();
    };
    // constructor(
    //     private _router: Router//,
    //   //  private _videoService: VideoService
    //     ) { 
    //         // this._videoService.getVideos()
    //         // .subscribe(
    //         // res => this.videos.push(res),
    //         // error => console.log(error)
    //         // );
    //     }
    //from-code approach
    VideoListComponent.prototype.onVideoSelected = function (selection) {
        this.selectedVideo = selection;
        console.log('selected video with id: ' + selection.id);
        // this._router.navigate(['Video', { mode: 'watch', id: selection.id }]);
    };
    return VideoListComponent;
}());
VideoListComponent = __decorate([
    core_1.Component({
        selector: 'video-list',
        //providers: [... HTTP_PROVIDERS, VideoService, VideoDetailsComponent],
        //directives: [VideoDetailsComponent],
        template: __webpack_require__(48),
        styles: ["\n  \tul { padding:0; width:480; margin:20px auto; list-style-type: none;}\n  \tli { display:inline;}\n        .tn{ \n\t   margin:2px 0px;\n\t   box-shadow:#999 1px 1px 3px 1px; \n\t   cursor: pointer \n        }\n    li a { text-decoreation: none; }\n  \t.modal-content {\n\t    width: 670px !important;\n\t}\n  "]
    }),
    __metadata("design:paramtypes", [http_1.Http, video_services_1.VideoService, video_oembed_service_1.oEmbedService])
], VideoListComponent);
exports.VideoListComponent = VideoListComponent;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(3);
__webpack_require__(12);
var oembed_vimeo_1 = __webpack_require__(35);
var oembed_youtube_1 = __webpack_require__(36);
var oEmbedService = (function () {
    function oEmbedService(http) {
        this.http = http;
        this.providers = {};
        this.providers["Vimeo"] = new oembed_vimeo_1.oEmbedVimeo();
        ;
        this.providers["YouTube"] = new oembed_youtube_1.oEmbedYouTube();
    }
    oEmbedService.prototype.recognizeProvider = function (url) {
        var providerName = '';
        for (var key in this.providers) {
            var oEmbedProvider = this.providers[key];
            var x = typeof (oEmbedProvider);
            if (oEmbedProvider.matchProviderByUrl(url)) {
                providerName = oEmbedProvider.providerName;
                return providerName;
            }
        }
        return providerName;
    };
    oEmbedService.prototype.checkVideoOEmbed = function (url, providerName) {
        if (providerName === void 0) { providerName = ""; }
        if (url == "" || url == null || url == undefined) {
            throw new RangeError("Url cannot be empty");
        }
        if (providerName == "") {
            providerName = this.recognizeProvider(url);
        }
        if (providerName == "") {
            throw new RangeError("Couldn't match the video provider by URL");
        }
        console.log("calling get content by url, for: " + url);
        var oEmbedUrl = this.providers[providerName].getContentUrl(url);
        return this.http.get(oEmbedUrl)
            .map(function (res) { return res.json(); });
        // .do(res => res => console.log('Retrieved oEmbed content: ' + JSON.stringify(res)));
    };
    return oEmbedService;
}());
oEmbedService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], oEmbedService);
exports.oEmbedService = oEmbedService;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(122);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(27);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(4);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(6);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(8);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(98);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
var semver = __webpack_require__(64);
var __core__ = __webpack_require__(1);
var coreVersion = __core__ && __core__.VERSION && __core__.VERSION.full;

// Only patch if you're on Angular >= 2.1.1 and < the next major version (including prerelease)
if (coreVersion && semver.satisfies(coreVersion, '^2.1.1')) {
    var __compiler__ = __webpack_require__(16);
    var __core_private__ = __core__.__core_private__;

    var patch = false;
    if (!__core_private__['ViewUtils']) {
        patch = true;
        __core_private__['ViewUtils'] = __core_private__['view_utils'];
    }

    if (!__compiler__.__compiler_private__) {
        patch = true;
        __compiler__.__compiler_private__ = {
            SelectorMatcher: __compiler__.SelectorMatcher,
            CssSelector: __compiler__.CssSelector
        }
    }

    var __universal__ = __webpack_require__(24);
    if (patch) {
        __universal__.ViewUtils = __core_private__['view_utils'];
        __universal__.CssSelector = __compiler__.CssSelector
        __universal__.SelectorMatcher = __compiler__.SelectorMatcher
    }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(7);
var angular2_universal_1 = __webpack_require__(4);
var app_component_1 = __webpack_require__(25);
var navmenu_component_1 = __webpack_require__(30);
var home_component_1 = __webpack_require__(29);
var fetchdata_component_1 = __webpack_require__(28);
var counter_component_1 = __webpack_require__(27);
var videos_module_1 = __webpack_require__(39);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [
            app_component_1.AppComponent,
            navmenu_component_1.NavMenuComponent,
            counter_component_1.CounterComponent,
            fetchdata_component_1.FetchDataComponent,
            home_component_1.HomeComponent
        ],
        imports: [
            angular2_universal_1.UniversalModule,
            videos_module_1.VideosModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'counter', component: counter_component_1.CounterComponent },
                { path: 'fetch-data', component: fetchdata_component_1.FetchDataComponent },
                { path: '**', redirectTo: 'home' }
            ])
        ]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(37);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(69);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(71);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @license Angular v2.4.8
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
     true ? factory(exports, __webpack_require__(1), __webpack_require__(59), __webpack_require__(13), __webpack_require__(2), __webpack_require__(67)) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/operator/toPromise', 'rxjs/Subject', 'rxjs/Observable', 'rxjs/observable/fromPromise'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}),global.ng.core,global.Rx.Observable.prototype,global.Rx,global.Rx,global.Rx.Observable));
}(this, function (exports,_angular_core,rxjs_operator_toPromise,rxjs_Subject,rxjs_Observable,rxjs_observable_fromPromise) { 'use strict';

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Base class for control directives.
     *
     * Only used internally in the forms module.
     *
     * \@stable
     * @abstract
     */
    var AbstractControlDirective = (function () {
        function AbstractControlDirective() {
        }
        Object.defineProperty(AbstractControlDirective.prototype, "control", {
            /**
             * @return {?}
             */
            get: function () { throw new Error('unimplemented'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "value", {
            /**
             * @return {?}
             */
            get: function () { return this.control ? this.control.value : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
            /**
             * @return {?}
             */
            get: function () { return this.control ? this.control.valid : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
            /**
             * @return {?}
             */
            get: function () { return this.control ? this.control.invalid : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "pending", {
            /**
             * @return {?}
             */
            get: function () { return this.control ? this.control.pending : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
            /**
             * @return {?}
             */
            get: function () { return this.control ? this.control.errors : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
            /**
             * @return {?}
             */
            get: function () { return this.control ? this.control.pristine : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
            /**
             * @return {?}
             */
            get: function () { return this.control ? this.control.dirty : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
            /**
             * @return {?}
             */
            get: function () { return this.control ? this.control.touched : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
            /**
             * @return {?}
             */
            get: function () { return this.control ? this.control.untouched : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
            /**
             * @return {?}
             */
            get: function () { return this.control ? this.control.disabled : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
            /**
             * @return {?}
             */
            get: function () { return this.control ? this.control.enabled : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
            /**
             * @return {?}
             */
            get: function () { return this.control ? this.control.statusChanges : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
            /**
             * @return {?}
             */
            get: function () { return this.control ? this.control.valueChanges : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "path", {
            /**
             * @return {?}
             */
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?=} value
         * @return {?}
         */
        AbstractControlDirective.prototype.reset = function (value) {
            if (value === void 0) { value = undefined; }
            if (this.control)
                this.control.reset(value);
        };
        /**
         * @param {?} errorCode
         * @param {?=} path
         * @return {?}
         */
        AbstractControlDirective.prototype.hasError = function (errorCode, path) {
            if (path === void 0) { path = null; }
            return this.control ? this.control.hasError(errorCode, path) : false;
        };
        /**
         * @param {?} errorCode
         * @param {?=} path
         * @return {?}
         */
        AbstractControlDirective.prototype.getError = function (errorCode, path) {
            if (path === void 0) { path = null; }
            return this.control ? this.control.getError(errorCode, path) : null;
        };
        return AbstractControlDirective;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$1 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * A directive that contains multiple {\@link NgControl}s.
     *
     * Only used by the forms module.
     *
     * \@stable
     */
    var ControlContainer = (function (_super) {
        __extends$1(ControlContainer, _super);
        function ControlContainer() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(ControlContainer.prototype, "formDirective", {
            /**
             * Get the form to which this container belongs.
             * @return {?}
             */
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlContainer.prototype, "path", {
            /**
             * Get the path to this container.
             * @return {?}
             */
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        return ControlContainer;
    }(AbstractControlDirective));

    /**
     * @param {?} obj
     * @return {?}
     */
    function isPresent(obj) {
        return obj != null;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function isBlank(obj) {
        return obj == null;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function looseIdentical(a, b) {
        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
    }
    /**
     * @param {?} o
     * @return {?}
     */
    function isJsObject(o) {
        return o !== null && (typeof o === 'function' || typeof o === 'object');
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function isPrimitive(obj) {
        return !isJsObject(obj);
    }

    /**
     * Wraps Javascript Objects
     */
    var StringMapWrapper = (function () {
        function StringMapWrapper() {
        }
        /**
         * @param {?} m1
         * @param {?} m2
         * @return {?}
         */
        StringMapWrapper.merge = function (m1, m2) {
            var /** @type {?} */ m = {};
            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
                var k = _a[_i];
                m[k] = m1[k];
            }
            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
                var k = _c[_b];
                m[k] = m2[k];
            }
            return m;
        };
        /**
         * @param {?} m1
         * @param {?} m2
         * @return {?}
         */
        StringMapWrapper.equals = function (m1, m2) {
            var /** @type {?} */ k1 = Object.keys(m1);
            var /** @type {?} */ k2 = Object.keys(m2);
            if (k1.length != k2.length) {
                return false;
            }
            for (var /** @type {?} */ i = 0; i < k1.length; i++) {
                var /** @type {?} */ key = k1[i];
                if (m1[key] !== m2[key]) {
                    return false;
                }
            }
            return true;
        };
        return StringMapWrapper;
    }());
    var ListWrapper = (function () {
        function ListWrapper() {
        }
        /**
         * @param {?} arr
         * @param {?} condition
         * @return {?}
         */
        ListWrapper.findLast = function (arr, condition) {
            for (var /** @type {?} */ i = arr.length - 1; i >= 0; i--) {
                if (condition(arr[i])) {
                    return arr[i];
                }
            }
            return null;
        };
        /**
         * @param {?} list
         * @param {?} items
         * @return {?}
         */
        ListWrapper.removeAll = function (list, items) {
            for (var /** @type {?} */ i = 0; i < items.length; ++i) {
                var /** @type {?} */ index = list.indexOf(items[i]);
                if (index > -1) {
                    list.splice(index, 1);
                }
            }
        };
        /**
         * @param {?} list
         * @param {?} el
         * @return {?}
         */
        ListWrapper.remove = function (list, el) {
            var /** @type {?} */ index = list.indexOf(el);
            if (index > -1) {
                list.splice(index, 1);
                return true;
            }
            return false;
        };
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        ListWrapper.equals = function (a, b) {
            if (a.length != b.length)
                return false;
            for (var /** @type {?} */ i = 0; i < a.length; ++i) {
                if (a[i] !== b[i])
                    return false;
            }
            return true;
        };
        /**
         * @param {?} list
         * @return {?}
         */
        ListWrapper.flatten = function (list) {
            return list.reduce(function (flat, item) {
                var /** @type {?} */ flatItem = Array.isArray(item) ? ListWrapper.flatten(item) : item;
                return ((flat)).concat(flatItem);
            }, []);
        };
        return ListWrapper;
    }());

    var /** @type {?} */ isPromise = _angular_core.__core_private__.isPromise;
    var /** @type {?} */ isObservable = _angular_core.__core_private__.isObservable;

    /**
     * @param {?} value
     * @return {?}
     */
    function isEmptyInputValue(value) {
        // we don't check for string here so it also works with arrays
        return value == null || value.length === 0;
    }
    /**
     * Providers for validators to be used for {@link FormControl}s in a form.
     *
     * Provide this using `multi: true` to add validators.
     *
     * ### Example
     *
     * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
     * @stable
     */
    var /** @type {?} */ NG_VALIDATORS = new _angular_core.OpaqueToken('NgValidators');
    /**
     * Providers for asynchronous validators to be used for {@link FormControl}s
     * in a form.
     *
     * Provide this using `multi: true` to add validators.
     *
     * See {@link NG_VALIDATORS} for more details.
     *
     * @stable
     */
    var /** @type {?} */ NG_ASYNC_VALIDATORS = new _angular_core.OpaqueToken('NgAsyncValidators');
    /**
     * Provides a set of validators used by form controls.
     *
     * A validator is a function that processes a {\@link FormControl} or collection of
     * controls and returns a map of errors. A null map means that validation has passed.
     *
     * ### Example
     *
     * ```typescript
     * var loginControl = new FormControl("", Validators.required)
     * ```
     *
     * \@stable
     */
    var Validators = (function () {
        function Validators() {
        }
        /**
         * Validator that requires controls to have a non-empty value.
         * @param {?} control
         * @return {?}
         */
        Validators.required = function (control) {
            return isEmptyInputValue(control.value) ? { 'required': true } : null;
        };
        /**
         * Validator that requires control value to be true.
         * @param {?} control
         * @return {?}
         */
        Validators.requiredTrue = function (control) {
            return control.value === true ? null : { 'required': true };
        };
        /**
         * Validator that requires controls to have a value of a minimum length.
         * @param {?} minLength
         * @return {?}
         */
        Validators.minLength = function (minLength) {
            return function (control) {
                if (isEmptyInputValue(control.value)) {
                    return null; // don't validate empty values to allow optional controls
                }
                var /** @type {?} */ length = control.value ? control.value.length : 0;
                return length < minLength ?
                    { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                    null;
            };
        };
        /**
         * Validator that requires controls to have a value of a maximum length.
         * @param {?} maxLength
         * @return {?}
         */
        Validators.maxLength = function (maxLength) {
            return function (control) {
                var /** @type {?} */ length = control.value ? control.value.length : 0;
                return length > maxLength ?
                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                    null;
            };
        };
        /**
         * Validator that requires a control to match a regex to its value.
         * @param {?} pattern
         * @return {?}
         */
        Validators.pattern = function (pattern) {
            if (!pattern)
                return Validators.nullValidator;
            var /** @type {?} */ regex;
            var /** @type {?} */ regexStr;
            if (typeof pattern === 'string') {
                regexStr = "^" + pattern + "$";
                regex = new RegExp(regexStr);
            }
            else {
                regexStr = pattern.toString();
                regex = pattern;
            }
            return function (control) {
                if (isEmptyInputValue(control.value)) {
                    return null; // don't validate empty values to allow optional controls
                }
                var /** @type {?} */ value = control.value;
                return regex.test(value) ? null :
                    { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
            };
        };
        /**
         * No-op validator.
         * @param {?} c
         * @return {?}
         */
        Validators.nullValidator = function (c) { return null; };
        /**
         * Compose multiple validators into a single function that returns the union
         * of the individual error maps.
         * @param {?} validators
         * @return {?}
         */
        Validators.compose = function (validators) {
            if (!validators)
                return null;
            var /** @type {?} */ presentValidators = validators.filter(isPresent);
            if (presentValidators.length == 0)
                return null;
            return function (control) {
                return _mergeErrors(_executeValidators(control, presentValidators));
            };
        };
        /**
         * @param {?} validators
         * @return {?}
         */
        Validators.composeAsync = function (validators) {
            if (!validators)
                return null;
            var /** @type {?} */ presentValidators = validators.filter(isPresent);
            if (presentValidators.length == 0)
                return null;
            return function (control) {
                var /** @type {?} */ promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
                return Promise.all(promises).then(_mergeErrors);
            };
        };
        return Validators;
    }());
    /**
     * @param {?} obj
     * @return {?}
     */
    function _convertToPromise(obj) {
        return isPromise(obj) ? obj : rxjs_operator_toPromise.toPromise.call(obj);
    }
    /**
     * @param {?} control
     * @param {?} validators
     * @return {?}
     */
    function _executeValidators(control, validators) {
        return validators.map(function (v) { return v(control); });
    }
    /**
     * @param {?} control
     * @param {?} validators
     * @return {?}
     */
    function _executeAsyncValidators(control, validators) {
        return validators.map(function (v) { return v(control); });
    }
    /**
     * @param {?} arrayOfErrors
     * @return {?}
     */
    function _mergeErrors(arrayOfErrors) {
        var /** @type {?} */ res = arrayOfErrors.reduce(function (res, errors) {
            return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
        }, {});
        return Object.keys(res).length === 0 ? null : res;
    }

    /**
     * Used to provide a {@link ControlValueAccessor} for form controls.
     *
     * See {@link DefaultValueAccessor} for how to implement one.
     * @stable
     */
    var /** @type {?} */ NG_VALUE_ACCESSOR = new _angular_core.OpaqueToken('NgValueAccessor');

    var /** @type {?} */ CHECKBOX_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
        multi: true,
    };
    /**
     * The accessor for writing a value and listening to changes on a checkbox input element.
     *
     *  ### Example
     *  ```
     *  <input type="checkbox" name="rememberLogin" ngModel>
     *  ```
     *
     *  \@stable
     */
    var CheckboxControlValueAccessor = (function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function CheckboxControlValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        /**
         * @param {?} value
         * @return {?}
         */
        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        /**
         * @param {?} fn
         * @return {?}
         */
        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        CheckboxControlValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                        host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                        providers: [CHECKBOX_VALUE_ACCESSOR]
                    },] },
        ];
        /** @nocollapse */
        CheckboxControlValueAccessor.ctorParameters = function () { return [
            { type: _angular_core.Renderer, },
            { type: _angular_core.ElementRef, },
        ]; };
        return CheckboxControlValueAccessor;
    }());

    var /** @type {?} */ DEFAULT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
        multi: true
    };
    /**
     * The default accessor for writing a value and listening to changes that is used by the
     * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
     *
     *  ### Example
     *  ```
     *  <input type="text" name="searchQuery" ngModel>
     *  ```
     *
     *  \@stable
     */
    var DefaultValueAccessor = (function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function DefaultValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        /**
         * @param {?} value
         * @return {?}
         */
        DefaultValueAccessor.prototype.writeValue = function (value) {
            var /** @type {?} */ normalizedValue = value == null ? '' : value;
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        /**
         * @param {?} fn
         * @return {?}
         */
        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        DefaultValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                        // TODO: vsavkin replace the above selector with the one below it once
                        // https://github.com/angular/angular/issues/3011 is implemented
                        // selector: '[ngControl],[ngModel],[ngFormControl]',
                        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                        providers: [DEFAULT_VALUE_ACCESSOR]
                    },] },
        ];
        /** @nocollapse */
        DefaultValueAccessor.ctorParameters = function () { return [
            { type: _angular_core.Renderer, },
            { type: _angular_core.ElementRef, },
        ]; };
        return DefaultValueAccessor;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @param {?} validator
     * @return {?}
     */
    function normalizeValidator(validator) {
        if (((validator)).validate) {
            return function (c) { return ((validator)).validate(c); };
        }
        else {
            return (validator);
        }
    }
    /**
     * @param {?} validator
     * @return {?}
     */
    function normalizeAsyncValidator(validator) {
        if (((validator)).validate) {
            return function (c) { return ((validator)).validate(c); };
        }
        else {
            return (validator);
        }
    }

    var /** @type {?} */ NUMBER_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
        multi: true
    };
    /**
     * The accessor for writing a number value and listening to changes that is used by the
     * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
     *
     *  ### Example
     *  ```
     *  <input type="number" [(ngModel)]="age">
     *  ```
     */
    var NumberValueAccessor = (function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function NumberValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        /**
         * @param {?} value
         * @return {?}
         */
        NumberValueAccessor.prototype.writeValue = function (value) {
            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
            var /** @type {?} */ normalizedValue = value == null ? '' : value;
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NumberValueAccessor.prototype.registerOnChange = function (fn) {
            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        NumberValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                        host: {
                            '(change)': 'onChange($event.target.value)',
                            '(input)': 'onChange($event.target.value)',
                            '(blur)': 'onTouched()'
                        },
                        providers: [NUMBER_VALUE_ACCESSOR]
                    },] },
        ];
        /** @nocollapse */
        NumberValueAccessor.ctorParameters = function () { return [
            { type: _angular_core.Renderer, },
            { type: _angular_core.ElementRef, },
        ]; };
        return NumberValueAccessor;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$2 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * @return {?}
     */
    function unimplemented() {
        throw new Error('unimplemented');
    }
    /**
     * A base class that all control directive extend.
     * It binds a {\@link FormControl} object to a DOM element.
     *
     * Used internally by Angular forms.
     *
     * \@stable
     * @abstract
     */
    var NgControl = (function (_super) {
        __extends$2(NgControl, _super);
        function NgControl() {
            _super.apply(this, arguments);
            /** @internal */
            this._parent = null;
            this.name = null;
            this.valueAccessor = null;
            /** @internal */
            this._rawValidators = [];
            /** @internal */
            this._rawAsyncValidators = [];
        }
        Object.defineProperty(NgControl.prototype, "validator", {
            /**
             * @return {?}
             */
            get: function () { return (unimplemented()); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgControl.prototype, "asyncValidator", {
            /**
             * @return {?}
             */
            get: function () { return (unimplemented()); },
            enumerable: true,
            configurable: true
        });
        /**
         * @abstract
         * @param {?} newValue
         * @return {?}
         */
        NgControl.prototype.viewToModelUpdate = function (newValue) { };
        return NgControl;
    }(AbstractControlDirective));

    var /** @type {?} */ RADIO_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
        multi: true
    };
    /**
     * Internal class used by Angular to uncheck radio buttons with the matching name.
     */
    var RadioControlRegistry = (function () {
        function RadioControlRegistry() {
            this._accessors = [];
        }
        /**
         * @param {?} control
         * @param {?} accessor
         * @return {?}
         */
        RadioControlRegistry.prototype.add = function (control, accessor) {
            this._accessors.push([control, accessor]);
        };
        /**
         * @param {?} accessor
         * @return {?}
         */
        RadioControlRegistry.prototype.remove = function (accessor) {
            for (var /** @type {?} */ i = this._accessors.length - 1; i >= 0; --i) {
                if (this._accessors[i][1] === accessor) {
                    this._accessors.splice(i, 1);
                    return;
                }
            }
        };
        /**
         * @param {?} accessor
         * @return {?}
         */
        RadioControlRegistry.prototype.select = function (accessor) {
            var _this = this;
            this._accessors.forEach(function (c) {
                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                    c[1].fireUncheck(accessor.value);
                }
            });
        };
        /**
         * @param {?} controlPair
         * @param {?} accessor
         * @return {?}
         */
        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
            if (!controlPair[0].control)
                return false;
            return controlPair[0]._parent === accessor._control._parent &&
                controlPair[1].name === accessor.name;
        };
        RadioControlRegistry.decorators = [
            { type: _angular_core.Injectable },
        ];
        /** @nocollapse */
        RadioControlRegistry.ctorParameters = function () { return []; };
        return RadioControlRegistry;
    }());
    /**
     * \@whatItDoes Writes radio control values and listens to radio control changes.
     *
     * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
     * to keep the view synced with the {\@link FormControl} model.
     *
     * \@howToUse
     *
     * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
     * value accessor will be active on any radio control that has a form directive. You do
     * **not** need to add a special selector to activate it.
     *
     * ### How to use radio buttons with form directives
     *
     * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
     * in the same group have the same `name` attribute.  Radio buttons with different `name`
     * attributes do not affect each other.
     *
     * {\@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
     *
     * When using radio buttons in a reactive form, radio buttons in the same group should have the
     * same `formControlName`. You can also add a `name` attribute, but it's optional.
     *
     * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
     *
     *  * **npm package**: `\@angular/forms`
     *
     *  \@stable
     */
    var RadioControlValueAccessor = (function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         * @param {?} _registry
         * @param {?} _injector
         */
        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._registry = _registry;
            this._injector = _injector;
            this.onChange = function () { };
            this.onTouched = function () { };
        }
        /**
         * @return {?}
         */
        RadioControlValueAccessor.prototype.ngOnInit = function () {
            this._control = this._injector.get(NgControl);
            this._checkName();
            this._registry.add(this._control, this);
        };
        /**
         * @return {?}
         */
        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
        /**
         * @param {?} value
         * @return {?}
         */
        RadioControlValueAccessor.prototype.writeValue = function (value) {
            this._state = value === this.value;
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
            var _this = this;
            this._fn = fn;
            this.onChange = function () {
                fn(_this.value);
                _this._registry.select(_this);
            };
        };
        /**
         * @param {?} value
         * @return {?}
         */
        RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
        /**
         * @param {?} fn
         * @return {?}
         */
        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        /**
         * @return {?}
         */
        RadioControlValueAccessor.prototype._checkName = function () {
            if (this.name && this.formControlName && this.name !== this.formControlName) {
                this._throwNameError();
            }
            if (!this.name && this.formControlName)
                this.name = this.formControlName;
        };
        /**
         * @return {?}
         */
        RadioControlValueAccessor.prototype._throwNameError = function () {
            throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
        };
        RadioControlValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                        host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                        providers: [RADIO_VALUE_ACCESSOR]
                    },] },
        ];
        /** @nocollapse */
        RadioControlValueAccessor.ctorParameters = function () { return [
            { type: _angular_core.Renderer, },
            { type: _angular_core.ElementRef, },
            { type: RadioControlRegistry, },
            { type: _angular_core.Injector, },
        ]; };
        RadioControlValueAccessor.propDecorators = {
            'name': [{ type: _angular_core.Input },],
            'formControlName': [{ type: _angular_core.Input },],
            'value': [{ type: _angular_core.Input },],
        };
        return RadioControlValueAccessor;
    }());

    var /** @type {?} */ RANGE_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return RangeValueAccessor; }),
        multi: true
    };
    /**
     * The accessor for writing a range value and listening to changes that is used by the
     * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
     *
     *  ### Example
     *  ```
     *  <input type="range" [(ngModel)]="age" >
     *  ```
     */
    var RangeValueAccessor = (function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function RangeValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        /**
         * @param {?} value
         * @return {?}
         */
        RangeValueAccessor.prototype.writeValue = function (value) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        RangeValueAccessor.prototype.registerOnChange = function (fn) {
            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        RangeValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                        host: {
                            '(change)': 'onChange($event.target.value)',
                            '(input)': 'onChange($event.target.value)',
                            '(blur)': 'onTouched()'
                        },
                        providers: [RANGE_VALUE_ACCESSOR]
                    },] },
        ];
        /** @nocollapse */
        RangeValueAccessor.ctorParameters = function () { return [
            { type: _angular_core.Renderer, },
            { type: _angular_core.ElementRef, },
        ]; };
        return RangeValueAccessor;
    }());

    var /** @type {?} */ SELECT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
        multi: true
    };
    /**
     * @param {?} id
     * @param {?} value
     * @return {?}
     */
    function _buildValueString(id, value) {
        if (id == null)
            return "" + value;
        if (!isPrimitive(value))
            value = 'Object';
        return (id + ": " + value).slice(0, 50);
    }
    /**
     * @param {?} valueString
     * @return {?}
     */
    function _extractId(valueString) {
        return valueString.split(':')[0];
    }
    /**
     * \@whatItDoes Writes values and listens to changes on a select element.
     *
     * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
     * to keep the view synced with the {\@link FormControl} model.
     *
     * \@howToUse
     *
     * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
     * value accessor will be active on any select control that has a form directive. You do
     * **not** need to add a special selector to activate it.
     *
     * ### How to use select controls with form directives
     *
     * To use a select in a template-driven form, simply add an `ngModel` and a `name`
     * attribute to the main `<select>` tag.
     *
     * If your option values are simple strings, you can bind to the normal `value` property
     * on the option.  If your option values happen to be objects (and you'd like to save the
     * selection in your form as an object), use `ngValue` instead:
     *
     * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
     *
     * In reactive forms, you'll also want to add your form directive (`formControlName` or
     * `formControl`) on the main `<select>` tag. Like in the former example, you have the
     * choice of binding to the  `value` or `ngValue` property on the select's options.
     *
     * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
     *
     * Note: We listen to the 'change' event because 'input' events aren't fired
     * for selects in Firefox and IE:
     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
     *
     * * **npm package**: `\@angular/forms`
     *
     * \@stable
     */
    var SelectControlValueAccessor = (function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function SelectControlValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            /** @internal */
            this._optionMap = new Map();
            /** @internal */
            this._idCounter = 0;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        /**
         * @param {?} value
         * @return {?}
         */
        SelectControlValueAccessor.prototype.writeValue = function (value) {
            this.value = value;
            var /** @type {?} */ id = this._getOptionId(value);
            if (id == null) {
                this._renderer.setElementProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
            }
            var /** @type {?} */ valueString = _buildValueString(id, value);
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
            var _this = this;
            this.onChange = function (valueString) {
                _this.value = valueString;
                fn(_this._getOptionValue(valueString));
            };
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        /**
         * \@internal
         * @return {?}
         */
        SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        SelectControlValueAccessor.prototype._getOptionId = function (value) {
            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
                var id = _a[_i];
                if (looseIdentical(this._optionMap.get(id), value))
                    return id;
            }
            return null;
        };
        /**
         * \@internal
         * @param {?} valueString
         * @return {?}
         */
        SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
            var /** @type {?} */ id = _extractId(valueString);
            return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
        };
        SelectControlValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                        providers: [SELECT_VALUE_ACCESSOR]
                    },] },
        ];
        /** @nocollapse */
        SelectControlValueAccessor.ctorParameters = function () { return [
            { type: _angular_core.Renderer, },
            { type: _angular_core.ElementRef, },
        ]; };
        return SelectControlValueAccessor;
    }());
    /**
     * \@whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * \@howToUse
     *
     * See docs for {\@link SelectControlValueAccessor} for usage examples.
     *
     * \@stable
     */
    var NgSelectOption = (function () {
        /**
         * @param {?} _element
         * @param {?} _renderer
         * @param {?} _select
         */
        function NgSelectOption(_element, _renderer, _select) {
            this._element = _element;
            this._renderer = _renderer;
            this._select = _select;
            if (this._select)
                this.id = this._select._registerOption();
        }
        Object.defineProperty(NgSelectOption.prototype, "ngValue", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                if (this._select == null)
                    return;
                this._select._optionMap.set(this.id, value);
                this._setElementValue(_buildValueString(this.id, value));
                this._select.writeValue(this._select.value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectOption.prototype, "value", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._setElementValue(value);
                if (this._select)
                    this._select.writeValue(this._select.value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        NgSelectOption.prototype._setElementValue = function (value) {
            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
        };
        /**
         * @return {?}
         */
        NgSelectOption.prototype.ngOnDestroy = function () {
            if (this._select) {
                this._select._optionMap.delete(this.id);
                this._select.writeValue(this._select.value);
            }
        };
        NgSelectOption.decorators = [
            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
        ];
        /** @nocollapse */
        NgSelectOption.ctorParameters = function () { return [
            { type: _angular_core.ElementRef, },
            { type: _angular_core.Renderer, },
            { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
        ]; };
        NgSelectOption.propDecorators = {
            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
            'value': [{ type: _angular_core.Input, args: ['value',] },],
        };
        return NgSelectOption;
    }());

    var /** @type {?} */ SELECT_MULTIPLE_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
        multi: true
    };
    /**
     * @param {?} id
     * @param {?} value
     * @return {?}
     */
    function _buildValueString$1(id, value) {
        if (id == null)
            return "" + value;
        if (typeof value === 'string')
            value = "'" + value + "'";
        if (!isPrimitive(value))
            value = 'Object';
        return (id + ": " + value).slice(0, 50);
    }
    /**
     * @param {?} valueString
     * @return {?}
     */
    function _extractId$1(valueString) {
        return valueString.split(':')[0];
    }
    /**
     * The accessor for writing a value and listening to changes on a select element.
     *
     * \@stable
     */
    var SelectMultipleControlValueAccessor = (function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            /** @internal */
            this._optionMap = new Map();
            /** @internal */
            this._idCounter = 0;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        /**
         * @param {?} value
         * @return {?}
         */
        SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
            var _this = this;
            this.value = value;
            var /** @type {?} */ optionSelectedStateSetter;
            if (Array.isArray(value)) {
                // convert values to ids
                var /** @type {?} */ ids_1 = value.map(function (v) { return _this._getOptionId(v); });
                optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
            }
            else {
                optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
            }
            this._optionMap.forEach(optionSelectedStateSetter);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
            var _this = this;
            this.onChange = function (_) {
                var /** @type {?} */ selected = [];
                if (_.hasOwnProperty('selectedOptions')) {
                    var /** @type {?} */ options = _.selectedOptions;
                    for (var /** @type {?} */ i = 0; i < options.length; i++) {
                        var /** @type {?} */ opt = options.item(i);
                        var /** @type {?} */ val = _this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
                else {
                    var /** @type {?} */ options = (_.options);
                    for (var /** @type {?} */ i = 0; i < options.length; i++) {
                        var /** @type {?} */ opt = options.item(i);
                        if (opt.selected) {
                            var /** @type {?} */ val = _this._getOptionValue(opt.value);
                            selected.push(val);
                        }
                    }
                }
                _this.value = selected;
                fn(selected);
            };
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
            var /** @type {?} */ id = (this._idCounter++).toString();
            this._optionMap.set(id, value);
            return id;
        };
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
                var id = _a[_i];
                if (looseIdentical(this._optionMap.get(id)._value, value))
                    return id;
            }
            return null;
        };
        /**
         * \@internal
         * @param {?} valueString
         * @return {?}
         */
        SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
            var /** @type {?} */ id = _extractId$1(valueString);
            return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
        };
        SelectMultipleControlValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                        host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
                    },] },
        ];
        /** @nocollapse */
        SelectMultipleControlValueAccessor.ctorParameters = function () { return [
            { type: _angular_core.Renderer, },
            { type: _angular_core.ElementRef, },
        ]; };
        return SelectMultipleControlValueAccessor;
    }());
    /**
     * Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * ### Example
     *
     * ```
     * <select multiple name="city" ngModel>
     *   <option *ngFor="let c of cities" [value]="c"></option>
     * </select>
     * ```
     */
    var NgSelectMultipleOption = (function () {
        /**
         * @param {?} _element
         * @param {?} _renderer
         * @param {?} _select
         */
        function NgSelectMultipleOption(_element, _renderer, _select) {
            this._element = _element;
            this._renderer = _renderer;
            this._select = _select;
            if (this._select) {
                this.id = this._select._registerOption(this);
            }
        }
        Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                if (this._select == null)
                    return;
                this._value = value;
                this._setElementValue(_buildValueString$1(this.id, value));
                this._select.writeValue(this._select.value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                if (this._select) {
                    this._value = value;
                    this._setElementValue(_buildValueString$1(this.id, value));
                    this._select.writeValue(this._select.value);
                }
                else {
                    this._setElementValue(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        NgSelectMultipleOption.prototype._setElementValue = function (value) {
            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
        };
        /**
         * \@internal
         * @param {?} selected
         * @return {?}
         */
        NgSelectMultipleOption.prototype._setSelected = function (selected) {
            this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
        };
        /**
         * @return {?}
         */
        NgSelectMultipleOption.prototype.ngOnDestroy = function () {
            if (this._select) {
                this._select._optionMap.delete(this.id);
                this._select.writeValue(this._select.value);
            }
        };
        NgSelectMultipleOption.decorators = [
            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
        ];
        /** @nocollapse */
        NgSelectMultipleOption.ctorParameters = function () { return [
            { type: _angular_core.ElementRef, },
            { type: _angular_core.Renderer, },
            { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
        ]; };
        NgSelectMultipleOption.propDecorators = {
            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
            'value': [{ type: _angular_core.Input, args: ['value',] },],
        };
        return NgSelectMultipleOption;
    }());

    /**
     * @param {?} name
     * @param {?} parent
     * @return {?}
     */
    function controlPath(name, parent) {
        return parent.path.concat([name]);
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */
    function setUpControl(control, dir) {
        if (!control)
            _throwError(dir, 'Cannot find control with');
        if (!dir.valueAccessor)
            _throwError(dir, 'No value accessor for form control with');
        control.validator = Validators.compose([control.validator, dir.validator]);
        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
        dir.valueAccessor.writeValue(control.value);
        // view -> model
        dir.valueAccessor.registerOnChange(function (newValue) {
            dir.viewToModelUpdate(newValue);
            control.markAsDirty();
            control.setValue(newValue, { emitModelToViewChange: false });
        });
        // touched
        dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
        control.registerOnChange(function (newValue, emitModelEvent) {
            // control -> view
            dir.valueAccessor.writeValue(newValue);
            // control -> ngModel
            if (emitModelEvent)
                dir.viewToModelUpdate(newValue);
        });
        if (dir.valueAccessor.setDisabledState) {
            control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
        }
        // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
        dir._rawValidators.forEach(function (validator) {
            if (((validator)).registerOnValidatorChange)
                ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
        });
        dir._rawAsyncValidators.forEach(function (validator) {
            if (((validator)).registerOnValidatorChange)
                ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
        });
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */
    function cleanUpControl(control, dir) {
        dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
        dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
        dir._rawValidators.forEach(function (validator) {
            if (validator.registerOnValidatorChange) {
                validator.registerOnValidatorChange(null);
            }
        });
        dir._rawAsyncValidators.forEach(function (validator) {
            if (validator.registerOnValidatorChange) {
                validator.registerOnValidatorChange(null);
            }
        });
        if (control)
            control._clearChangeFns();
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */
    function setUpFormContainer(control, dir) {
        if (isBlank(control))
            _throwError(dir, 'Cannot find control with');
        control.validator = Validators.compose([control.validator, dir.validator]);
        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    }
    /**
     * @param {?} dir
     * @return {?}
     */
    function _noControlError(dir) {
        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
    }
    /**
     * @param {?} dir
     * @param {?} message
     * @return {?}
     */
    function _throwError(dir, message) {
        var /** @type {?} */ messageEnd;
        if (dir.path.length > 1) {
            messageEnd = "path: '" + dir.path.join(' -> ') + "'";
        }
        else if (dir.path[0]) {
            messageEnd = "name: '" + dir.path + "'";
        }
        else {
            messageEnd = 'unspecified name attribute';
        }
        throw new Error(message + " " + messageEnd);
    }
    /**
     * @param {?} validators
     * @return {?}
     */
    function composeValidators(validators) {
        return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
    }
    /**
     * @param {?} validators
     * @return {?}
     */
    function composeAsyncValidators(validators) {
        return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
            null;
    }
    /**
     * @param {?} changes
     * @param {?} viewModel
     * @return {?}
     */
    function isPropertyUpdated(changes, viewModel) {
        if (!changes.hasOwnProperty('model'))
            return false;
        var /** @type {?} */ change = changes['model'];
        if (change.isFirstChange())
            return true;
        return !looseIdentical(viewModel, change.currentValue);
    }
    var /** @type {?} */ BUILTIN_ACCESSORS = [
        CheckboxControlValueAccessor,
        RangeValueAccessor,
        NumberValueAccessor,
        SelectControlValueAccessor,
        SelectMultipleControlValueAccessor,
        RadioControlValueAccessor,
    ];
    /**
     * @param {?} valueAccessor
     * @return {?}
     */
    function isBuiltInAccessor(valueAccessor) {
        return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
    }
    /**
     * @param {?} dir
     * @param {?} valueAccessors
     * @return {?}
     */
    function selectValueAccessor(dir, valueAccessors) {
        if (!valueAccessors)
            return null;
        var /** @type {?} */ defaultAccessor;
        var /** @type {?} */ builtinAccessor;
        var /** @type {?} */ customAccessor;
        valueAccessors.forEach(function (v) {
            if (v.constructor === DefaultValueAccessor) {
                defaultAccessor = v;
            }
            else if (isBuiltInAccessor(v)) {
                if (builtinAccessor)
                    _throwError(dir, 'More than one built-in value accessor matches form control with');
                builtinAccessor = v;
            }
            else {
                if (customAccessor)
                    _throwError(dir, 'More than one custom value accessor matches form control with');
                customAccessor = v;
            }
        });
        if (customAccessor)
            return customAccessor;
        if (builtinAccessor)
            return builtinAccessor;
        if (defaultAccessor)
            return defaultAccessor;
        _throwError(dir, 'No valid value accessor for form control with');
        return null;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * This is a base class for code shared between {\@link NgModelGroup} and {\@link FormGroupName}.
     *
     * \@stable
     */
    var AbstractFormGroupDirective = (function (_super) {
        __extends(AbstractFormGroupDirective, _super);
        function AbstractFormGroupDirective() {
            _super.apply(this, arguments);
        }
        /**
         * @return {?}
         */
        AbstractFormGroupDirective.prototype.ngOnInit = function () {
            this._checkParentType();
            this.formDirective.addFormGroup(this);
        };
        /**
         * @return {?}
         */
        AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
            if (this.formDirective) {
                this.formDirective.removeFormGroup(this);
            }
        };
        Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
            /**
             * Get the {\@link FormGroup} backing this binding.
             * @return {?}
             */
            get: function () { return this.formDirective.getFormGroup(this); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
            /**
             * Get the path to this control group.
             * @return {?}
             */
            get: function () { return controlPath(this.name, this._parent); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
            /**
             * Get the {\@link Form} to which this group belongs.
             * @return {?}
             */
            get: function () { return this._parent ? this._parent.formDirective : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
            /**
             * @return {?}
             */
            get: function () { return composeValidators(this._validators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
            /**
             * @return {?}
             */
            get: function () { return composeAsyncValidators(this._asyncValidators); },
            enumerable: true,
            configurable: true
        });
        /**
         * \@internal
         * @return {?}
         */
        AbstractFormGroupDirective.prototype._checkParentType = function () { };
        return AbstractFormGroupDirective;
    }(ControlContainer));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$3 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var AbstractControlStatus = (function () {
        /**
         * @param {?} cd
         */
        function AbstractControlStatus(cd) {
            this._cd = cd;
        }
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
            /**
             * @return {?}
             */
            get: function () { return this._cd.control ? this._cd.control.untouched : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
            /**
             * @return {?}
             */
            get: function () { return this._cd.control ? this._cd.control.touched : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
            /**
             * @return {?}
             */
            get: function () { return this._cd.control ? this._cd.control.pristine : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
            /**
             * @return {?}
             */
            get: function () { return this._cd.control ? this._cd.control.dirty : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
            /**
             * @return {?}
             */
            get: function () { return this._cd.control ? this._cd.control.valid : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
            /**
             * @return {?}
             */
            get: function () { return this._cd.control ? this._cd.control.invalid : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
            /**
             * @return {?}
             */
            get: function () { return this._cd.control ? this._cd.control.pending : false; },
            enumerable: true,
            configurable: true
        });
        return AbstractControlStatus;
    }());
    var /** @type {?} */ ngControlStatusHost = {
        '[class.ng-untouched]': 'ngClassUntouched',
        '[class.ng-touched]': 'ngClassTouched',
        '[class.ng-pristine]': 'ngClassPristine',
        '[class.ng-dirty]': 'ngClassDirty',
        '[class.ng-valid]': 'ngClassValid',
        '[class.ng-invalid]': 'ngClassInvalid',
        '[class.ng-pending]': 'ngClassPending',
    };
    /**
     * Directive automatically applied to Angular form controls that sets CSS classes
     * based on control status (valid/invalid/dirty/etc).
     *
     * \@stable
     */
    var NgControlStatus = (function (_super) {
        __extends$3(NgControlStatus, _super);
        /**
         * @param {?} cd
         */
        function NgControlStatus(cd) {
            _super.call(this, cd);
        }
        NgControlStatus.decorators = [
            { type: _angular_core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
        ];
        /** @nocollapse */
        NgControlStatus.ctorParameters = function () { return [
            { type: NgControl, decorators: [{ type: _angular_core.Self },] },
        ]; };
        return NgControlStatus;
    }(AbstractControlStatus));
    /**
     * Directive automatically applied to Angular form groups that sets CSS classes
     * based on control status (valid/invalid/dirty/etc).
     *
     * \@stable
     */
    var NgControlStatusGroup = (function (_super) {
        __extends$3(NgControlStatusGroup, _super);
        /**
         * @param {?} cd
         */
        function NgControlStatusGroup(cd) {
            _super.call(this, cd);
        }
        NgControlStatusGroup.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                        host: ngControlStatusHost
                    },] },
        ];
        /** @nocollapse */
        NgControlStatusGroup.ctorParameters = function () { return [
            { type: ControlContainer, decorators: [{ type: _angular_core.Self },] },
        ]; };
        return NgControlStatusGroup;
    }(AbstractControlStatus));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$5 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * Use by directives and components to emit custom Events.
     *
     * ### Examples
     *
     * In the following example, `Zippy` alternatively emits `open` and `close` events when its
     * title gets clicked:
     *
     * ```
     * \@Component({
     *   selector: 'zippy',
     *   template: `
     *   <div class="zippy">
     *     <div (click)="toggle()">Toggle</div>
     *     <div [hidden]="!visible">
     *       <ng-content></ng-content>
     *     </div>
     *  </div>`})
     * export class Zippy {
     *   visible: boolean = true;
     *   \@Output() open: EventEmitter<any> = new EventEmitter();
     *   \@Output() close: EventEmitter<any> = new EventEmitter();
     *
     *   toggle() {
     *     this.visible = !this.visible;
     *     if (this.visible) {
     *       this.open.emit(null);
     *     } else {
     *       this.close.emit(null);
     *     }
     *   }
     * }
     * ```
     *
     * The events payload can be accessed by the parameter `$event` on the components output event
     * handler:
     *
     * ```
     * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
     * ```
     *
     * Uses Rx.Observable but provides an adapter to make it work as specified here:
     * https://github.com/jhusain/observable-spec
     *
     * Once a reference implementation of the spec is available, switch to it.
     * \@stable
     */
    var EventEmitter = (function (_super) {
        __extends$5(EventEmitter, _super);
        /**
         * Creates an instance of [EventEmitter], which depending on [isAsync],
         * delivers events synchronously or asynchronously.
         * @param {?=} isAsync
         */
        function EventEmitter(isAsync) {
            if (isAsync === void 0) { isAsync = false; }
            _super.call(this);
            this.__isAsync = isAsync;
        }
        /**
         * @param {?=} value
         * @return {?}
         */
        EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
        /**
         * @param {?=} generatorOrNext
         * @param {?=} error
         * @param {?=} complete
         * @return {?}
         */
        EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
            var /** @type {?} */ schedulerFn;
            var /** @type {?} */ errorFn = function (err) { return null; };
            var /** @type {?} */ completeFn = function () { return null; };
            if (generatorOrNext && typeof generatorOrNext === 'object') {
                schedulerFn = this.__isAsync ? function (value) {
                    setTimeout(function () { return generatorOrNext.next(value); });
                } : function (value) { generatorOrNext.next(value); };
                if (generatorOrNext.error) {
                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
                        function (err) { generatorOrNext.error(err); };
                }
                if (generatorOrNext.complete) {
                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
                        function () { generatorOrNext.complete(); };
                }
            }
            else {
                schedulerFn = this.__isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
                    function (value) { generatorOrNext(value); };
                if (error) {
                    errorFn =
                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
                }
                if (complete) {
                    completeFn =
                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
                }
            }
            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
        };
        return EventEmitter;
    }(rxjs_Subject.Subject));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$6 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
     */
    var /** @type {?} */ VALID = 'VALID';
    /**
     * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
     */
    var /** @type {?} */ INVALID = 'INVALID';
    /**
     * Indicates that a FormControl is pending, i.e. that async validation is occurring and
     * errors are not yet available for the input value.
     */
    var /** @type {?} */ PENDING = 'PENDING';
    /**
     * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
     * calculations of validity or value.
     */
    var /** @type {?} */ DISABLED = 'DISABLED';
    /**
     * @param {?} control
     * @param {?} path
     * @param {?} delimiter
     * @return {?}
     */
    function _find(control, path, delimiter) {
        if (path == null)
            return null;
        if (!(path instanceof Array)) {
            path = ((path)).split(delimiter);
        }
        if (path instanceof Array && (path.length === 0))
            return null;
        return ((path)).reduce(function (v, name) {
            if (v instanceof FormGroup) {
                return v.controls[name] || null;
            }
            if (v instanceof FormArray) {
                return v.at(/** @type {?} */ (name)) || null;
            }
            return null;
        }, control);
    }
    /**
     * @param {?} r
     * @return {?}
     */
    function toObservable(r) {
        return isPromise(r) ? rxjs_observable_fromPromise.fromPromise(r) : r;
    }
    /**
     * @param {?} validator
     * @return {?}
     */
    function coerceToValidator(validator) {
        return Array.isArray(validator) ? composeValidators(validator) : validator;
    }
    /**
     * @param {?} asyncValidator
     * @return {?}
     */
    function coerceToAsyncValidator(asyncValidator) {
        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
    }
    /**
     * \@whatItDoes This is the base class for {\@link FormControl}, {\@link FormGroup}, and
     * {\@link FormArray}.
     *
     * It provides some of the shared behavior that all controls and groups of controls have, like
     * running validators, calculating status, and resetting state. It also defines the properties
     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
     * instantiated directly.
     *
     * \@stable
     * @abstract
     */
    var AbstractControl = (function () {
        /**
         * @param {?} validator
         * @param {?} asyncValidator
         */
        function AbstractControl(validator, asyncValidator) {
            this.validator = validator;
            this.asyncValidator = asyncValidator;
            /** @internal */
            this._onCollectionChange = function () { };
            this._pristine = true;
            this._touched = false;
            /** @internal */
            this._onDisabledChange = [];
        }
        Object.defineProperty(AbstractControl.prototype, "value", {
            /**
             * The value of the control.
             * @return {?}
             */
            get: function () { return this._value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "parent", {
            /**
             * The parent control.
             * @return {?}
             */
            get: function () { return this._parent; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "status", {
            /**
             * The validation status of the control. There are four possible
             * validation statuses:
             *
             * * **VALID**:  control has passed all validation checks
             * * **INVALID**: control has failed at least one validation check
             * * **PENDING**: control is in the midst of conducting a validation check
             * * **DISABLED**: control is exempt from validation checks
             *
             * These statuses are mutually exclusive, so a control cannot be
             * both valid AND invalid or invalid AND disabled.
             * @return {?}
             */
            get: function () { return this._status; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "valid", {
            /**
             * A control is `valid` when its `status === VALID`.
             *
             * In order to have this status, the control must have passed all its
             * validation checks.
             * @return {?}
             */
            get: function () { return this._status === VALID; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "invalid", {
            /**
             * A control is `invalid` when its `status === INVALID`.
             *
             * In order to have this status, the control must have failed
             * at least one of its validation checks.
             * @return {?}
             */
            get: function () { return this._status === INVALID; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "pending", {
            /**
             * A control is `pending` when its `status === PENDING`.
             *
             * In order to have this status, the control must be in the
             * middle of conducting a validation check.
             * @return {?}
             */
            get: function () { return this._status == PENDING; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "disabled", {
            /**
             * A control is `disabled` when its `status === DISABLED`.
             *
             * Disabled controls are exempt from validation checks and
             * are not included in the aggregate value of their ancestor
             * controls.
             * @return {?}
             */
            get: function () { return this._status === DISABLED; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "enabled", {
            /**
             * A control is `enabled` as long as its `status !== DISABLED`.
             *
             * In other words, it has a status of `VALID`, `INVALID`, or
             * `PENDING`.
             * @return {?}
             */
            get: function () { return this._status !== DISABLED; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "errors", {
            /**
             * Returns any errors generated by failing validation. If there
             * are no errors, it will return null.
             * @return {?}
             */
            get: function () { return this._errors; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "pristine", {
            /**
             * A control is `pristine` if the user has not yet changed
             * the value in the UI.
             *
             * Note that programmatic changes to a control's value will
             * *not* mark it dirty.
             * @return {?}
             */
            get: function () { return this._pristine; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "dirty", {
            /**
             * A control is `dirty` if the user has changed the value
             * in the UI.
             *
             * Note that programmatic changes to a control's value will
             * *not* mark it dirty.
             * @return {?}
             */
            get: function () { return !this.pristine; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "touched", {
            /**
             * A control is marked `touched` once the user has triggered
             * a `blur` event on it.
             * @return {?}
             */
            get: function () { return this._touched; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "untouched", {
            /**
             * A control is `untouched` if the user has not yet triggered
             * a `blur` event on it.
             * @return {?}
             */
            get: function () { return !this._touched; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "valueChanges", {
            /**
             * Emits an event every time the value of the control changes, in
             * the UI or programmatically.
             * @return {?}
             */
            get: function () { return this._valueChanges; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "statusChanges", {
            /**
             * Emits an event every time the validation status of the control
             * is re-calculated.
             * @return {?}
             */
            get: function () { return this._statusChanges; },
            enumerable: true,
            configurable: true
        });
        /**
         * Sets the synchronous validators that are active on this control.  Calling
         * this will overwrite any existing sync validators.
         * @param {?} newValidator
         * @return {?}
         */
        AbstractControl.prototype.setValidators = function (newValidator) {
            this.validator = coerceToValidator(newValidator);
        };
        /**
         * Sets the async validators that are active on this control. Calling this
         * will overwrite any existing async validators.
         * @param {?} newValidator
         * @return {?}
         */
        AbstractControl.prototype.setAsyncValidators = function (newValidator) {
            this.asyncValidator = coerceToAsyncValidator(newValidator);
        };
        /**
         * Empties out the sync validator list.
         * @return {?}
         */
        AbstractControl.prototype.clearValidators = function () { this.validator = null; };
        /**
         * Empties out the async validator list.
         * @return {?}
         */
        AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
        /**
         * Marks the control as `touched`.
         *
         * This will also mark all direct ancestors as `touched` to maintain
         * the model.
         * @param {?=} __0
         * @return {?}
         */
        AbstractControl.prototype.markAsTouched = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._touched = true;
            if (this._parent && !onlySelf) {
                this._parent.markAsTouched({ onlySelf: onlySelf });
            }
        };
        /**
         * Marks the control as `untouched`.
         *
         * If the control has any children, it will also mark all children as `untouched`
         * to maintain the model, and re-calculate the `touched` status of all parent
         * controls.
         * @param {?=} __0
         * @return {?}
         */
        AbstractControl.prototype.markAsUntouched = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._touched = false;
            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
            if (this._parent && !onlySelf) {
                this._parent._updateTouched({ onlySelf: onlySelf });
            }
        };
        /**
         * Marks the control as `dirty`.
         *
         * This will also mark all direct ancestors as `dirty` to maintain
         * the model.
         * @param {?=} __0
         * @return {?}
         */
        AbstractControl.prototype.markAsDirty = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._pristine = false;
            if (this._parent && !onlySelf) {
                this._parent.markAsDirty({ onlySelf: onlySelf });
            }
        };
        /**
         * Marks the control as `pristine`.
         *
         * If the control has any children, it will also mark all children as `pristine`
         * to maintain the model, and re-calculate the `pristine` status of all parent
         * controls.
         * @param {?=} __0
         * @return {?}
         */
        AbstractControl.prototype.markAsPristine = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._pristine = true;
            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
            if (this._parent && !onlySelf) {
                this._parent._updatePristine({ onlySelf: onlySelf });
            }
        };
        /**
         * Marks the control as `pending`.
         * @param {?=} __0
         * @return {?}
         */
        AbstractControl.prototype.markAsPending = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._status = PENDING;
            if (this._parent && !onlySelf) {
                this._parent.markAsPending({ onlySelf: onlySelf });
            }
        };
        /**
         * Disables the control. This means the control will be exempt from validation checks and
         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
         *
         * If the control has children, all children will be disabled to maintain the model.
         * @param {?=} __0
         * @return {?}
         */
        AbstractControl.prototype.disable = function (_a) {
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            this._status = DISABLED;
            this._errors = null;
            this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
            this._updateValue();
            if (emitEvent !== false) {
                this._valueChanges.emit(this._value);
                this._statusChanges.emit(this._status);
            }
            this._updateAncestors(onlySelf);
            this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
        };
        /**
         * Enables the control. This means the control will be included in validation checks and
         * the aggregate value of its parent. Its status is re-calculated based on its value and
         * its validators.
         *
         * If the control has children, all children will be enabled.
         * @param {?=} __0
         * @return {?}
         */
        AbstractControl.prototype.enable = function (_a) {
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            this._status = VALID;
            this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
            this._updateAncestors(onlySelf);
            this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
        };
        /**
         * @param {?} onlySelf
         * @return {?}
         */
        AbstractControl.prototype._updateAncestors = function (onlySelf) {
            if (this._parent && !onlySelf) {
                this._parent.updateValueAndValidity();
                this._parent._updatePristine();
                this._parent._updateTouched();
            }
        };
        /**
         * @param {?} parent
         * @return {?}
         */
        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
        /**
         * Sets the value of the control. Abstract method (implemented in sub-classes).
         * @abstract
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */
        AbstractControl.prototype.setValue = function (value, options) { };
        /**
         * Patches the value of the control. Abstract method (implemented in sub-classes).
         * @abstract
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */
        AbstractControl.prototype.patchValue = function (value, options) { };
        /**
         * Resets the control. Abstract method (implemented in sub-classes).
         * @abstract
         * @param {?=} value
         * @param {?=} options
         * @return {?}
         */
        AbstractControl.prototype.reset = function (value, options) { };
        /**
         * Re-calculates the value and validation status of the control.
         *
         * By default, it will also update the value and validity of its ancestors.
         * @param {?=} __0
         * @return {?}
         */
        AbstractControl.prototype.updateValueAndValidity = function (_a) {
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            this._setInitialStatus();
            this._updateValue();
            if (this.enabled) {
                this._errors = this._runValidator();
                this._status = this._calculateStatus();
                if (this._status === VALID || this._status === PENDING) {
                    this._runAsyncValidator(emitEvent);
                }
            }
            if (emitEvent !== false) {
                this._valueChanges.emit(this._value);
                this._statusChanges.emit(this._status);
            }
            if (this._parent && !onlySelf) {
                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
            }
        };
        /**
         * \@internal
         * @param {?=} __0
         * @return {?}
         */
        AbstractControl.prototype._updateTreeValidity = function (_a) {
            var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
        };
        /**
         * @return {?}
         */
        AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
        /**
         * @return {?}
         */
        AbstractControl.prototype._runValidator = function () {
            return this.validator ? this.validator(this) : null;
        };
        /**
         * @param {?} emitEvent
         * @return {?}
         */
        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
            var _this = this;
            if (this.asyncValidator) {
                this._status = PENDING;
                this._cancelExistingSubscription();
                var /** @type {?} */ obs = toObservable(this.asyncValidator(this));
                if (!(isObservable(obs))) {
                    throw new Error("expected the following validator to return Promise or Observable: " + this.asyncValidator + ". If you are using FormBuilder; did you forget to brace your validators in an array?");
                }
                this._asyncValidationSubscription =
                    obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
            }
        };
        /**
         * @return {?}
         */
        AbstractControl.prototype._cancelExistingSubscription = function () {
            if (this._asyncValidationSubscription) {
                this._asyncValidationSubscription.unsubscribe();
            }
        };
        /**
         * Sets errors on a form control.
         *
         * This is used when validations are run manually by the user, rather than automatically.
         *
         * Calling `setErrors` will also update the validity of the parent control.
         *
         * ### Example
         *
         * ```
         * const login = new FormControl("someLogin");
         * login.setErrors({
         *   "notUnique": true
         * });
         *
         * expect(login.valid).toEqual(false);
         * expect(login.errors).toEqual({"notUnique": true});
         *
         * login.setValue("someOtherLogin");
         *
         * expect(login.valid).toEqual(true);
         * ```
         * @param {?} errors
         * @param {?=} __1
         * @return {?}
         */
        AbstractControl.prototype.setErrors = function (errors, _a) {
            var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
            this._errors = errors;
            this._updateControlsErrors(emitEvent !== false);
        };
        /**
         * Retrieves a child control given the control's name or path.
         *
         * Paths can be passed in as an array or a string delimited by a dot.
         *
         * To get a control nested within a `person` sub-group:
         *
         * * `this.form.get('person.name');`
         *
         * -OR-
         *
         * * `this.form.get(['person', 'name']);`
         * @param {?} path
         * @return {?}
         */
        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
        /**
         * Returns true if the control with the given path has the error specified. Otherwise
         * returns null or undefined.
         *
         * If no path is given, it checks for the error on the present control.
         * @param {?} errorCode
         * @param {?=} path
         * @return {?}
         */
        AbstractControl.prototype.getError = function (errorCode, path) {
            if (path === void 0) { path = null; }
            var /** @type {?} */ control = path ? this.get(path) : this;
            return control && control._errors ? control._errors[errorCode] : null;
        };
        /**
         * Returns true if the control with the given path has the error specified. Otherwise
         * returns false.
         *
         * If no path is given, it checks for the error on the present control.
         * @param {?} errorCode
         * @param {?=} path
         * @return {?}
         */
        AbstractControl.prototype.hasError = function (errorCode, path) {
            if (path === void 0) { path = null; }
            return !!this.getError(errorCode, path);
        };
        Object.defineProperty(AbstractControl.prototype, "root", {
            /**
             * Retrieves the top-level ancestor of this control.
             * @return {?}
             */
            get: function () {
                var /** @type {?} */ x = this;
                while (x._parent) {
                    x = x._parent;
                }
                return x;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * \@internal
         * @param {?} emitEvent
         * @return {?}
         */
        AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
            this._status = this._calculateStatus();
            if (emitEvent) {
                this._statusChanges.emit(this._status);
            }
            if (this._parent) {
                this._parent._updateControlsErrors(emitEvent);
            }
        };
        /**
         * \@internal
         * @return {?}
         */
        AbstractControl.prototype._initObservables = function () {
            this._valueChanges = new EventEmitter();
            this._statusChanges = new EventEmitter();
        };
        /**
         * @return {?}
         */
        AbstractControl.prototype._calculateStatus = function () {
            if (this._allControlsDisabled())
                return DISABLED;
            if (this._errors)
                return INVALID;
            if (this._anyControlsHaveStatus(PENDING))
                return PENDING;
            if (this._anyControlsHaveStatus(INVALID))
                return INVALID;
            return VALID;
        };
        /**
         * \@internal
         * @abstract
         * @return {?}
         */
        AbstractControl.prototype._updateValue = function () { };
        /**
         * \@internal
         * @abstract
         * @param {?} cb
         * @return {?}
         */
        AbstractControl.prototype._forEachChild = function (cb) { };
        /**
         * \@internal
         * @abstract
         * @param {?} condition
         * @return {?}
         */
        AbstractControl.prototype._anyControls = function (condition) { };
        /**
         * \@internal
         * @abstract
         * @return {?}
         */
        AbstractControl.prototype._allControlsDisabled = function () { };
        /**
         * \@internal
         * @param {?} status
         * @return {?}
         */
        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
            return this._anyControls(function (control) { return control.status === status; });
        };
        /**
         * \@internal
         * @return {?}
         */
        AbstractControl.prototype._anyControlsDirty = function () {
            return this._anyControls(function (control) { return control.dirty; });
        };
        /**
         * \@internal
         * @return {?}
         */
        AbstractControl.prototype._anyControlsTouched = function () {
            return this._anyControls(function (control) { return control.touched; });
        };
        /**
         * \@internal
         * @param {?=} __0
         * @return {?}
         */
        AbstractControl.prototype._updatePristine = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._pristine = !this._anyControlsDirty();
            if (this._parent && !onlySelf) {
                this._parent._updatePristine({ onlySelf: onlySelf });
            }
        };
        /**
         * \@internal
         * @param {?=} __0
         * @return {?}
         */
        AbstractControl.prototype._updateTouched = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._touched = this._anyControlsTouched();
            if (this._parent && !onlySelf) {
                this._parent._updateTouched({ onlySelf: onlySelf });
            }
        };
        /**
         * \@internal
         * @param {?} formState
         * @return {?}
         */
        AbstractControl.prototype._isBoxedValue = function (formState) {
            return typeof formState === 'object' && formState !== null &&
                Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
        };
        /**
         * \@internal
         * @param {?} fn
         * @return {?}
         */
        AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
        return AbstractControl;
    }());
    /**
     * \@whatItDoes Tracks the value and validation status of an individual form control.
     *
     * It is one of the three fundamental building blocks of Angular forms, along with
     * {\@link FormGroup} and {\@link FormArray}.
     *
     * \@howToUse
     *
     * When instantiating a {\@link FormControl}, you can pass in an initial value as the
     * first argument. Example:
     *
     * ```ts
     * const ctrl = new FormControl('some value');
     * console.log(ctrl.value);     // 'some value'
     * ```
     *
     * You can also initialize the control with a form state object on instantiation,
     * which includes both the value and whether or not the control is disabled.
     * You can't use the value key without the disabled key; both are required
     * to use this way of initialization.
     *
     * ```ts
     * const ctrl = new FormControl({value: 'n/a', disabled: true});
     * console.log(ctrl.value);     // 'n/a'
     * console.log(ctrl.status);   // 'DISABLED'
     * ```
     *
     * To include a sync validator (or an array of sync validators) with the control,
     * pass it in as the second argument. Async validators are also supported, but
     * have to be passed in separately as the third arg.
     *
     * ```ts
     * const ctrl = new FormControl('', Validators.required);
     * console.log(ctrl.value);     // ''
     * console.log(ctrl.status);   // 'INVALID'
     * ```
     *
     * See its superclass, {\@link AbstractControl}, for more properties and methods.
     *
     * * **npm package**: `\@angular/forms`
     *
     * \@stable
     */
    var FormControl = (function (_super) {
        __extends$6(FormControl, _super);
        /**
         * @param {?=} formState
         * @param {?=} validator
         * @param {?=} asyncValidator
         */
        function FormControl(formState, validator, asyncValidator) {
            if (formState === void 0) { formState = null; }
            if (validator === void 0) { validator = null; }
            if (asyncValidator === void 0) { asyncValidator = null; }
            _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
            /** @internal */
            this._onChange = [];
            this._applyFormState(formState);
            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
            this._initObservables();
        }
        /**
         * Set the value of the form control to `value`.
         *
         * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
         * and not its parent component. This defaults to false.
         *
         * If `emitEvent` is `true`, this
         * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
         * to true (as it falls through to `updateValueAndValidity`).
         *
         * If `emitModelToViewChange` is `true`, the view will be notified about the new value
         * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
         * specified.
         *
         * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
         * model.  This is the default behavior if `emitViewToModelChange` is not specified.
         * @param {?} value
         * @param {?=} __1
         * @return {?}
         */
        FormControl.prototype.setValue = function (value, _a) {
            var _this = this;
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
            this._value = value;
            if (this._onChange.length && emitModelToViewChange !== false) {
                this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange !== false); });
            }
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        };
        /**
         * Patches the value of a control.
         *
         * This function is functionally the same as {\@link FormControl.setValue} at this level.
         * It exists for symmetry with {\@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
         * where it does behave differently.
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */
        FormControl.prototype.patchValue = function (value, options) {
            if (options === void 0) { options = {}; }
            this.setValue(value, options);
        };
        /**
         * Resets the form control. This means by default:
         *
         * * it is marked as `pristine`
         * * it is marked as `untouched`
         * * value is set to null
         *
         * You can also reset to a specific form state by passing through a standalone
         * value or a form state object that contains both a value and a disabled state
         * (these are the only two properties that cannot be calculated).
         *
         * Ex:
         *
         * ```ts
         * this.control.reset('Nancy');
         *
         * console.log(this.control.value);  // 'Nancy'
         * ```
         *
         * OR
         *
         * ```
         * this.control.reset({value: 'Nancy', disabled: true});
         *
         * console.log(this.control.value);  // 'Nancy'
         * console.log(this.control.status);  // 'DISABLED'
         * ```
         * @param {?=} formState
         * @param {?=} __1
         * @return {?}
         */
        FormControl.prototype.reset = function (formState, _a) {
            if (formState === void 0) { formState = null; }
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            this._applyFormState(formState);
            this.markAsPristine({ onlySelf: onlySelf });
            this.markAsUntouched({ onlySelf: onlySelf });
            this.setValue(this._value, { onlySelf: onlySelf, emitEvent: emitEvent });
        };
        /**
         * \@internal
         * @return {?}
         */
        FormControl.prototype._updateValue = function () { };
        /**
         * \@internal
         * @param {?} condition
         * @return {?}
         */
        FormControl.prototype._anyControls = function (condition) { return false; };
        /**
         * \@internal
         * @return {?}
         */
        FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
        /**
         * Register a listener for change events.
         * @param {?} fn
         * @return {?}
         */
        FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
        /**
         * \@internal
         * @return {?}
         */
        FormControl.prototype._clearChangeFns = function () {
            this._onChange = [];
            this._onDisabledChange = [];
            this._onCollectionChange = function () { };
        };
        /**
         * Register a listener for disabled events.
         * @param {?} fn
         * @return {?}
         */
        FormControl.prototype.registerOnDisabledChange = function (fn) {
            this._onDisabledChange.push(fn);
        };
        /**
         * \@internal
         * @param {?} cb
         * @return {?}
         */
        FormControl.prototype._forEachChild = function (cb) { };
        /**
         * @param {?} formState
         * @return {?}
         */
        FormControl.prototype._applyFormState = function (formState) {
            if (this._isBoxedValue(formState)) {
                this._value = formState.value;
                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                    this.enable({ onlySelf: true, emitEvent: false });
            }
            else {
                this._value = formState;
            }
        };
        return FormControl;
    }(AbstractControl));
    /**
     * \@whatItDoes Tracks the value and validity state of a group of {\@link FormControl}
     * instances.
     *
     * A `FormGroup` aggregates the values of each child {\@link FormControl} into one object,
     * with each control name as the key.  It calculates its status by reducing the statuses
     * of its children. For example, if one of the controls in a group is invalid, the entire
     * group becomes invalid.
     *
     * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
     * along with {\@link FormControl} and {\@link FormArray}.
     *
     * \@howToUse
     *
     * When instantiating a {\@link FormGroup}, pass in a collection of child controls as the first
     * argument. The key for each child will be the name under which it is registered.
     *
     * ### Example
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('Nancy', Validators.minLength(2)),
     *   last: new FormControl('Drew'),
     * });
     *
     * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
     * console.log(form.status);  // 'VALID'
     * ```
     *
     * You can also include group-level validators as the second arg, or group-level async
     * validators as the third arg. These come in handy when you want to perform validation
     * that considers the value of more than one child control.
     *
     * ### Example
     *
     * ```
     * const form = new FormGroup({
     *   password: new FormControl('', Validators.minLength(2)),
     *   passwordConfirm: new FormControl('', Validators.minLength(2)),
     * }, passwordMatchValidator);
     *
     *
     * function passwordMatchValidator(g: FormGroup) {
     *    return g.get('password').value === g.get('passwordConfirm').value
     *       ? null : {'mismatch': true};
     * }
     * ```
     *
     * * **npm package**: `\@angular/forms`
     *
     * \@stable
     */
    var FormGroup = (function (_super) {
        __extends$6(FormGroup, _super);
        /**
         * @param {?} controls
         * @param {?=} validator
         * @param {?=} asyncValidator
         */
        function FormGroup(controls, validator, asyncValidator) {
            if (validator === void 0) { validator = null; }
            if (asyncValidator === void 0) { asyncValidator = null; }
            _super.call(this, validator, asyncValidator);
            this.controls = controls;
            this._initObservables();
            this._setUpControls();
            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        }
        /**
         * Registers a control with the group's list of controls.
         *
         * This method does not update value or validity of the control, so for
         * most cases you'll want to use {\@link FormGroup.addControl} instead.
         * @param {?} name
         * @param {?} control
         * @return {?}
         */
        FormGroup.prototype.registerControl = function (name, control) {
            if (this.controls[name])
                return this.controls[name];
            this.controls[name] = control;
            control.setParent(this);
            control._registerOnCollectionChange(this._onCollectionChange);
            return control;
        };
        /**
         * Add a control to this group.
         * @param {?} name
         * @param {?} control
         * @return {?}
         */
        FormGroup.prototype.addControl = function (name, control) {
            this.registerControl(name, control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Remove a control from this group.
         * @param {?} name
         * @return {?}
         */
        FormGroup.prototype.removeControl = function (name) {
            if (this.controls[name])
                this.controls[name]._registerOnCollectionChange(function () { });
            delete (this.controls[name]);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Replace an existing control.
         * @param {?} name
         * @param {?} control
         * @return {?}
         */
        FormGroup.prototype.setControl = function (name, control) {
            if (this.controls[name])
                this.controls[name]._registerOnCollectionChange(function () { });
            delete (this.controls[name]);
            if (control)
                this.registerControl(name, control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Check whether there is an enabled control with the given name in the group.
         *
         * It will return false for disabled controls. If you'd like to check for
         * existence in the group only, use {\@link AbstractControl.get} instead.
         * @param {?} controlName
         * @return {?}
         */
        FormGroup.prototype.contains = function (controlName) {
            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
        };
        /**
         *  Sets the value of the {\@link FormGroup}. It accepts an object that matches
         *  the structure of the group, with control names as keys.
         *
         * This method performs strict checks, so it will throw an error if you try
         * to set the value of a control that doesn't exist or if you exclude the
         * value of a control.
         *
         *  ### Example
         *
         *  ```
         *  const form = new FormGroup({
         *     first: new FormControl(),
         *     last: new FormControl()
         *  });
         *  console.log(form.value);   // {first: null, last: null}
         *
         *  form.setValue({first: 'Nancy', last: 'Drew'});
         *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
         *
         *  ```
         * @param {?} value
         * @param {?=} __1
         * @return {?}
         */
        FormGroup.prototype.setValue = function (value, _a) {
            var _this = this;
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            this._checkAllValuesPresent(value);
            Object.keys(value).forEach(function (name) {
                _this._throwIfControlMissing(name);
                _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: emitEvent });
            });
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        };
        /**
         *  Patches the value of the {\@link FormGroup}. It accepts an object with control
         *  names as keys, and will do its best to match the values to the correct controls
         *  in the group.
         *
         *  It accepts both super-sets and sub-sets of the group without throwing an error.
         *
         *  ### Example
         *
         *  ```
         *  const form = new FormGroup({
         *     first: new FormControl(),
         *     last: new FormControl()
         *  });
         *  console.log(form.value);   // {first: null, last: null}
         *
         *  form.patchValue({first: 'Nancy'});
         *  console.log(form.value);   // {first: 'Nancy', last: null}
         *
         *  ```
         * @param {?} value
         * @param {?=} __1
         * @return {?}
         */
        FormGroup.prototype.patchValue = function (value, _a) {
            var _this = this;
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            Object.keys(value).forEach(function (name) {
                if (_this.controls[name]) {
                    _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: emitEvent });
                }
            });
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        };
        /**
         * Resets the {\@link FormGroup}. This means by default:
         *
         * * The group and all descendants are marked `pristine`
         * * The group and all descendants are marked `untouched`
         * * The value of all descendants will be null or null maps
         *
         * You can also reset to a specific form state by passing in a map of states
         * that matches the structure of your form, with control names as keys. The state
         * can be a standalone value or a form state object with both a value and a disabled
         * status.
         *
         * ### Example
         *
         * ```ts
         * this.form.reset({first: 'name', last: 'last name'});
         *
         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
         * ```
         *
         * - OR -
         *
         * ```
         * this.form.reset({
         *   first: {value: 'name', disabled: true},
         *   last: 'last'
         * });
         *
         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
         * console.log(this.form.get('first').status);  // 'DISABLED'
         * ```
         * @param {?=} value
         * @param {?=} __1
         * @return {?}
         */
        FormGroup.prototype.reset = function (value, _a) {
            if (value === void 0) { value = {}; }
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            this._forEachChild(function (control, name) {
                control.reset(value[name], { onlySelf: true, emitEvent: emitEvent });
            });
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
            this._updatePristine({ onlySelf: onlySelf });
            this._updateTouched({ onlySelf: onlySelf });
        };
        /**
         * The aggregate value of the {\@link FormGroup}, including any disabled controls.
         *
         * If you'd like to include all values regardless of disabled status, use this method.
         * Otherwise, the `value` property is the best way to get the value of the group.
         * @return {?}
         */
        FormGroup.prototype.getRawValue = function () {
            return this._reduceChildren({}, function (acc, control, name) {
                acc[name] = control instanceof FormControl ? control.value : ((control)).getRawValue();
                return acc;
            });
        };
        /**
         * \@internal
         * @param {?} name
         * @return {?}
         */
        FormGroup.prototype._throwIfControlMissing = function (name) {
            if (!Object.keys(this.controls).length) {
                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }
            if (!this.controls[name]) {
                throw new Error("Cannot find form control with name: " + name + ".");
            }
        };
        /**
         * \@internal
         * @param {?} cb
         * @return {?}
         */
        FormGroup.prototype._forEachChild = function (cb) {
            var _this = this;
            Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
        };
        /**
         * \@internal
         * @return {?}
         */
        FormGroup.prototype._setUpControls = function () {
            var _this = this;
            this._forEachChild(function (control) {
                control.setParent(_this);
                control._registerOnCollectionChange(_this._onCollectionChange);
            });
        };
        /**
         * \@internal
         * @return {?}
         */
        FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
        /**
         * \@internal
         * @param {?} condition
         * @return {?}
         */
        FormGroup.prototype._anyControls = function (condition) {
            var _this = this;
            var /** @type {?} */ res = false;
            this._forEachChild(function (control, name) {
                res = res || (_this.contains(name) && condition(control));
            });
            return res;
        };
        /**
         * \@internal
         * @return {?}
         */
        FormGroup.prototype._reduceValue = function () {
            var _this = this;
            return this._reduceChildren({}, function (acc, control, name) {
                if (control.enabled || _this.disabled) {
                    acc[name] = control.value;
                }
                return acc;
            });
        };
        /**
         * \@internal
         * @param {?} initValue
         * @param {?} fn
         * @return {?}
         */
        FormGroup.prototype._reduceChildren = function (initValue, fn) {
            var /** @type {?} */ res = initValue;
            this._forEachChild(function (control, name) { res = fn(res, control, name); });
            return res;
        };
        /**
         * \@internal
         * @return {?}
         */
        FormGroup.prototype._allControlsDisabled = function () {
            for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
                var controlName = _a[_i];
                if (this.controls[controlName].enabled) {
                    return false;
                }
            }
            return Object.keys(this.controls).length > 0 || this.disabled;
        };
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        FormGroup.prototype._checkAllValuesPresent = function (value) {
            this._forEachChild(function (control, name) {
                if (value[name] === undefined) {
                    throw new Error("Must supply a value for form control with name: '" + name + "'.");
                }
            });
        };
        return FormGroup;
    }(AbstractControl));
    /**
     * \@whatItDoes Tracks the value and validity state of an array of {\@link FormControl},
     * {\@link FormGroup} or {\@link FormArray} instances.
     *
     * A `FormArray` aggregates the values of each child {\@link FormControl} into an array.
     * It calculates its status by reducing the statuses of its children. For example, if one of
     * the controls in a `FormArray` is invalid, the entire array becomes invalid.
     *
     * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
     * along with {\@link FormControl} and {\@link FormGroup}.
     *
     * \@howToUse
     *
     * When instantiating a {\@link FormArray}, pass in an array of child controls as the first
     * argument.
     *
     * ### Example
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl('Nancy', Validators.minLength(2)),
     *   new FormControl('Drew'),
     * ]);
     *
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * console.log(arr.status);  // 'VALID'
     * ```
     *
     * You can also include array-level validators as the second arg, or array-level async
     * validators as the third arg. These come in handy when you want to perform validation
     * that considers the value of more than one child control.
     *
     * ### Adding or removing controls
     *
     * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
     * in `FormArray` itself. These methods ensure the controls are properly tracked in the
     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
     * the `FormArray` directly, as that will result in strange and unexpected behavior such
     * as broken change detection.
     *
     * * **npm package**: `\@angular/forms`
     *
     * \@stable
     */
    var FormArray = (function (_super) {
        __extends$6(FormArray, _super);
        /**
         * @param {?} controls
         * @param {?=} validator
         * @param {?=} asyncValidator
         */
        function FormArray(controls, validator, asyncValidator) {
            if (validator === void 0) { validator = null; }
            if (asyncValidator === void 0) { asyncValidator = null; }
            _super.call(this, validator, asyncValidator);
            this.controls = controls;
            this._initObservables();
            this._setUpControls();
            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        }
        /**
         * Get the {\@link AbstractControl} at the given `index` in the array.
         * @param {?} index
         * @return {?}
         */
        FormArray.prototype.at = function (index) { return this.controls[index]; };
        /**
         * Insert a new {\@link AbstractControl} at the end of the array.
         * @param {?} control
         * @return {?}
         */
        FormArray.prototype.push = function (control) {
            this.controls.push(control);
            this._registerControl(control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Insert a new {\@link AbstractControl} at the given `index` in the array.
         * @param {?} index
         * @param {?} control
         * @return {?}
         */
        FormArray.prototype.insert = function (index, control) {
            this.controls.splice(index, 0, control);
            this._registerControl(control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Remove the control at the given `index` in the array.
         * @param {?} index
         * @return {?}
         */
        FormArray.prototype.removeAt = function (index) {
            if (this.controls[index])
                this.controls[index]._registerOnCollectionChange(function () { });
            this.controls.splice(index, 1);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Replace an existing control.
         * @param {?} index
         * @param {?} control
         * @return {?}
         */
        FormArray.prototype.setControl = function (index, control) {
            if (this.controls[index])
                this.controls[index]._registerOnCollectionChange(function () { });
            this.controls.splice(index, 1);
            if (control) {
                this.controls.splice(index, 0, control);
                this._registerControl(control);
            }
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        Object.defineProperty(FormArray.prototype, "length", {
            /**
             * Length of the control array.
             * @return {?}
             */
            get: function () { return this.controls.length; },
            enumerable: true,
            configurable: true
        });
        /**
         *  Sets the value of the {\@link FormArray}. It accepts an array that matches
         *  the structure of the control.
         *
         * This method performs strict checks, so it will throw an error if you try
         * to set the value of a control that doesn't exist or if you exclude the
         * value of a control.
         *
         *  ### Example
         *
         *  ```
         *  const arr = new FormArray([
         *     new FormControl(),
         *     new FormControl()
         *  ]);
         *  console.log(arr.value);   // [null, null]
         *
         *  arr.setValue(['Nancy', 'Drew']);
         *  console.log(arr.value);   // ['Nancy', 'Drew']
         *  ```
         * @param {?} value
         * @param {?=} __1
         * @return {?}
         */
        FormArray.prototype.setValue = function (value, _a) {
            var _this = this;
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            this._checkAllValuesPresent(value);
            value.forEach(function (newValue, index) {
                _this._throwIfControlMissing(index);
                _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: emitEvent });
            });
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        };
        /**
         *  Patches the value of the {\@link FormArray}. It accepts an array that matches the
         *  structure of the control, and will do its best to match the values to the correct
         *  controls in the group.
         *
         *  It accepts both super-sets and sub-sets of the array without throwing an error.
         *
         *  ### Example
         *
         *  ```
         *  const arr = new FormArray([
         *     new FormControl(),
         *     new FormControl()
         *  ]);
         *  console.log(arr.value);   // [null, null]
         *
         *  arr.patchValue(['Nancy']);
         *  console.log(arr.value);   // ['Nancy', null]
         *  ```
         * @param {?} value
         * @param {?=} __1
         * @return {?}
         */
        FormArray.prototype.patchValue = function (value, _a) {
            var _this = this;
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            value.forEach(function (newValue, index) {
                if (_this.at(index)) {
                    _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: emitEvent });
                }
            });
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        };
        /**
         * Resets the {\@link FormArray}. This means by default:
         *
         * * The array and all descendants are marked `pristine`
         * * The array and all descendants are marked `untouched`
         * * The value of all descendants will be null or null maps
         *
         * You can also reset to a specific form state by passing in an array of states
         * that matches the structure of the control. The state can be a standalone value
         * or a form state object with both a value and a disabled status.
         *
         * ### Example
         *
         * ```ts
         * this.arr.reset(['name', 'last name']);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * ```
         *
         * - OR -
         *
         * ```
         * this.arr.reset([
         *   {value: 'name', disabled: true},
         *   'last'
         * ]);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * console.log(this.arr.get(0).status);  // 'DISABLED'
         * ```
         * @param {?=} value
         * @param {?=} __1
         * @return {?}
         */
        FormArray.prototype.reset = function (value, _a) {
            if (value === void 0) { value = []; }
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            this._forEachChild(function (control, index) {
                control.reset(value[index], { onlySelf: true, emitEvent: emitEvent });
            });
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
            this._updatePristine({ onlySelf: onlySelf });
            this._updateTouched({ onlySelf: onlySelf });
        };
        /**
         * The aggregate value of the array, including any disabled controls.
         *
         * If you'd like to include all values regardless of disabled status, use this method.
         * Otherwise, the `value` property is the best way to get the value of the array.
         * @return {?}
         */
        FormArray.prototype.getRawValue = function () {
            return this.controls.map(function (control) {
                return control instanceof FormControl ? control.value : ((control)).getRawValue();
            });
        };
        /**
         * \@internal
         * @param {?} index
         * @return {?}
         */
        FormArray.prototype._throwIfControlMissing = function (index) {
            if (!this.controls.length) {
                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }
            if (!this.at(index)) {
                throw new Error("Cannot find form control at index " + index);
            }
        };
        /**
         * \@internal
         * @param {?} cb
         * @return {?}
         */
        FormArray.prototype._forEachChild = function (cb) {
            this.controls.forEach(function (control, index) { cb(control, index); });
        };
        /**
         * \@internal
         * @return {?}
         */
        FormArray.prototype._updateValue = function () {
            var _this = this;
            this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
                .map(function (control) { return control.value; });
        };
        /**
         * \@internal
         * @param {?} condition
         * @return {?}
         */
        FormArray.prototype._anyControls = function (condition) {
            return this.controls.some(function (control) { return control.enabled && condition(control); });
        };
        /**
         * \@internal
         * @return {?}
         */
        FormArray.prototype._setUpControls = function () {
            var _this = this;
            this._forEachChild(function (control) { return _this._registerControl(control); });
        };
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        FormArray.prototype._checkAllValuesPresent = function (value) {
            this._forEachChild(function (control, i) {
                if (value[i] === undefined) {
                    throw new Error("Must supply a value for form control at index: " + i + ".");
                }
            });
        };
        /**
         * \@internal
         * @return {?}
         */
        FormArray.prototype._allControlsDisabled = function () {
            for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
                var control = _a[_i];
                if (control.enabled)
                    return false;
            }
            return this.controls.length > 0 || this.disabled;
        };
        /**
         * @param {?} control
         * @return {?}
         */
        FormArray.prototype._registerControl = function (control) {
            control.setParent(this);
            control._registerOnCollectionChange(this._onCollectionChange);
        };
        return FormArray;
    }(AbstractControl));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$4 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var /** @type {?} */ formDirectiveProvider = {
        provide: ControlContainer,
        useExisting: _angular_core.forwardRef(function () { return NgForm; })
    };
    var /** @type {?} */ resolvedPromise = Promise.resolve(null);
    /**
     * \@whatItDoes Creates a top-level {\@link FormGroup} instance and binds it to a form
     * to track aggregate form value and validation status.
     *
     * \@howToUse
     *
     * As soon as you import the `FormsModule`, this directive becomes active by default on
     * all `<form>` tags.  You don't need to add a special selector.
     *
     * You can export the directive into a local template variable using `ngForm` as the key
     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
     * {\@link FormGroup} instance are duplicated on the directive itself, so a reference to it
     * will give you access to the aggregate value and validity status of the form, as well as
     * user interaction properties like `dirty` and `touched`.
     *
     * To register child controls with the form, you'll want to use {\@link NgModel} with a
     * `name` attribute.  You can also use {\@link NgModelGroup} if you'd like to create
     * sub-groups within the form.
     *
     * You can listen to the directive's `ngSubmit` event to be notified when the user has
     * triggered a form submission. The `ngSubmit` event will be emitted with the original form
     * submission event.
     *
     * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * * **npm package**: `\@angular/forms`
     *
     * * **NgModule**: `FormsModule`
     *
     *  \@stable
     */
    var NgForm = (function (_super) {
        __extends$4(NgForm, _super);
        /**
         * @param {?} validators
         * @param {?} asyncValidators
         */
        function NgForm(validators, asyncValidators) {
            _super.call(this);
            this._submitted = false;
            this.ngSubmit = new EventEmitter();
            this.form =
                new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        }
        Object.defineProperty(NgForm.prototype, "submitted", {
            /**
             * @return {?}
             */
            get: function () { return this._submitted; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "formDirective", {
            /**
             * @return {?}
             */
            get: function () { return this; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "control", {
            /**
             * @return {?}
             */
            get: function () { return this.form; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "path", {
            /**
             * @return {?}
             */
            get: function () { return []; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "controls", {
            /**
             * @return {?}
             */
            get: function () { return this.form.controls; },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} dir
         * @return {?}
         */
        NgForm.prototype.addControl = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var /** @type {?} */ container = _this._findContainer(dir.path);
                dir._control = (container.registerControl(dir.name, dir.control));
                setUpControl(dir.control, dir);
                dir.control.updateValueAndValidity({ emitEvent: false });
            });
        };
        /**
         * @param {?} dir
         * @return {?}
         */
        NgForm.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
        /**
         * @param {?} dir
         * @return {?}
         */
        NgForm.prototype.removeControl = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var /** @type {?} */ container = _this._findContainer(dir.path);
                if (container) {
                    container.removeControl(dir.name);
                }
            });
        };
        /**
         * @param {?} dir
         * @return {?}
         */
        NgForm.prototype.addFormGroup = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var /** @type {?} */ container = _this._findContainer(dir.path);
                var /** @type {?} */ group = new FormGroup({});
                setUpFormContainer(group, dir);
                container.registerControl(dir.name, group);
                group.updateValueAndValidity({ emitEvent: false });
            });
        };
        /**
         * @param {?} dir
         * @return {?}
         */
        NgForm.prototype.removeFormGroup = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var /** @type {?} */ container = _this._findContainer(dir.path);
                if (container) {
                    container.removeControl(dir.name);
                }
            });
        };
        /**
         * @param {?} dir
         * @return {?}
         */
        NgForm.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
        /**
         * @param {?} dir
         * @param {?} value
         * @return {?}
         */
        NgForm.prototype.updateModel = function (dir, value) {
            var _this = this;
            resolvedPromise.then(function () {
                var /** @type {?} */ ctrl = (_this.form.get(dir.path));
                ctrl.setValue(value);
            });
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgForm.prototype.onSubmit = function ($event) {
            this._submitted = true;
            this.ngSubmit.emit($event);
            return false;
        };
        /**
         * @return {?}
         */
        NgForm.prototype.onReset = function () { this.resetForm(); };
        /**
         * @param {?=} value
         * @return {?}
         */
        NgForm.prototype.resetForm = function (value) {
            if (value === void 0) { value = undefined; }
            this.form.reset(value);
            this._submitted = false;
        };
        /**
         * \@internal
         * @param {?} path
         * @return {?}
         */
        NgForm.prototype._findContainer = function (path) {
            path.pop();
            return path.length ? (this.form.get(path)) : this.form;
        };
        NgForm.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
                        providers: [formDirectiveProvider],
                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                        outputs: ['ngSubmit'],
                        exportAs: 'ngForm'
                    },] },
        ];
        /** @nocollapse */
        NgForm.ctorParameters = function () { return [
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        ]; };
        return NgForm;
    }(ControlContainer));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var /** @type {?} */ Examples = {
        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
    };

    var TemplateDrivenErrors = (function () {
        function TemplateDrivenErrors() {
        }
        /**
         * @return {?}
         */
        TemplateDrivenErrors.modelParentException = function () {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + Examples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + Examples.ngModelWithFormGroup);
        };
        /**
         * @return {?}
         */
        TemplateDrivenErrors.formGroupNameException = function () {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Examples.ngModelGroup);
        };
        /**
         * @return {?}
         */
        TemplateDrivenErrors.missingNameException = function () {
            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
        };
        /**
         * @return {?}
         */
        TemplateDrivenErrors.modelGroupParentException = function () {
            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Examples.ngModelGroup);
        };
        return TemplateDrivenErrors;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$8 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var /** @type {?} */ modelGroupProvider = {
        provide: ControlContainer,
        useExisting: _angular_core.forwardRef(function () { return NgModelGroup; })
    };
    /**
     * \@whatItDoes Creates and binds a {\@link FormGroup} instance to a DOM element.
     *
     * \@howToUse
     *
     * This directive can only be used as a child of {\@link NgForm} (or in other words,
     * within `<form>` tags).
     *
     * Use this directive if you'd like to create a sub-group within a form. This can
     * come in handy if you want to validate a sub-group of your form separately from
     * the rest of your form, or if some values in your domain model make more sense to
     * consume together in a nested object.
     *
     * Pass in the name you'd like this sub-group to have and it will become the key
     * for the sub-group in the form's full value. You can also export the directive into
     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
     *
     * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
     *
     * * **npm package**: `\@angular/forms`
     *
     * * **NgModule**: `FormsModule`
     *
     * \@stable
     */
    var NgModelGroup = (function (_super) {
        __extends$8(NgModelGroup, _super);
        /**
         * @param {?} parent
         * @param {?} validators
         * @param {?} asyncValidators
         */
        function NgModelGroup(parent, validators, asyncValidators) {
            _super.call(this);
            this._parent = parent;
            this._validators = validators;
            this._asyncValidators = asyncValidators;
        }
        /**
         * \@internal
         * @return {?}
         */
        NgModelGroup.prototype._checkParentType = function () {
            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                TemplateDrivenErrors.modelGroupParentException();
            }
        };
        NgModelGroup.decorators = [
            { type: _angular_core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
        ];
        /** @nocollapse */
        NgModelGroup.ctorParameters = function () { return [
            { type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        ]; };
        NgModelGroup.propDecorators = {
            'name': [{ type: _angular_core.Input, args: ['ngModelGroup',] },],
        };
        return NgModelGroup;
    }(AbstractFormGroupDirective));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$7 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var /** @type {?} */ formControlBinding = {
        provide: NgControl,
        useExisting: _angular_core.forwardRef(function () { return NgModel; })
    };
    /**
     * `ngModel` forces an additional change detection run when its inputs change:
     * E.g.:
     * ```
     * <div>{{myModel.valid}}</div>
     * <input [(ngModel)]="myValue" #myModel="ngModel">
     * ```
     * I.e. `ngModel` can export itself on the element and then be used in the template.
     * Normally, this would result in expressions before the `input` that use the exported directive
     * to have and old value as they have been
     * dirty checked before. As this is a very common case for `ngModel`, we added this second change
     * detection run.
     *
     * Notes:
     * - this is just one extra run no matter how many `ngModel` have been changed.
     * - this is a general problem when using `exportAs` for directives!
     */
    var /** @type {?} */ resolvedPromise$1 = Promise.resolve(null);
    /**
     * \@whatItDoes Creates a {\@link FormControl} instance from a domain model and binds it
     * to a form control element.
     *
     * The {\@link FormControl} instance will track the value, user interaction, and
     * validation status of the control and keep the view synced with the model. If used
     * within a parent form, the directive will also register itself with the form as a child
     * control.
     *
     * \@howToUse
     *
     * This directive can be used by itself or as part of a larger form. All you need is the
     * `ngModel` selector to activate it.
     *
     * It accepts a domain model as an optional {\@link \@Input}. If you have a one-way binding
     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
     * class will set the value in the view. If you have a two-way binding with `[()]` syntax
     * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
     * the domain model in your class as well.
     *
     * If you wish to inspect the properties of the associated {\@link FormControl} (like
     * validity state), you can also export the directive into a local template variable using
     * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
     * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
     * will fall through to the control anyway, so you can access them directly. You can see a
     * full list of properties directly available in {\@link AbstractControlDirective}.
     *
     * The following is an example of a simple standalone control using `ngModel`:
     *
     * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
     *
     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
     * so that the control can be registered with the parent form under that name.
     *
     * It's worth noting that in the context of a parent form, you often can skip one-way or
     * two-way binding because the parent form will sync the value for you. You can access
     * its properties by exporting it into a local template variable using `ngForm` (ex:
     * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
     *
     * If you do need to populate initial values into your form, using a one-way binding for
     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
     * than the domain model's value on submit.
     *
     * Take a look at an example of using `ngModel` within a form:
     *
     * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * To see `ngModel` examples with different form control types, see:
     *
     * * Radio buttons: {\@link RadioControlValueAccessor}
     * * Selects: {\@link SelectControlValueAccessor}
     *
     * **npm package**: `\@angular/forms`
     *
     * **NgModule**: `FormsModule`
     *
     *  \@stable
     */
    var NgModel = (function (_super) {
        __extends$7(NgModel, _super);
        /**
         * @param {?} parent
         * @param {?} validators
         * @param {?} asyncValidators
         * @param {?} valueAccessors
         */
        function NgModel(parent, validators, asyncValidators, valueAccessors) {
            _super.call(this);
            /** @internal */
            this._control = new FormControl();
            /** @internal */
            this._registered = false;
            this.update = new EventEmitter();
            this._parent = parent;
            this._rawValidators = validators || [];
            this._rawAsyncValidators = asyncValidators || [];
            this.valueAccessor = selectValueAccessor(this, valueAccessors);
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        NgModel.prototype.ngOnChanges = function (changes) {
            this._checkForErrors();
            if (!this._registered)
                this._setUpControl();
            if ('isDisabled' in changes) {
                this._updateDisabled(changes);
            }
            if (isPropertyUpdated(changes, this.viewModel)) {
                this._updateValue(this.model);
                this.viewModel = this.model;
            }
        };
        /**
         * @return {?}
         */
        NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
        Object.defineProperty(NgModel.prototype, "control", {
            /**
             * @return {?}
             */
            get: function () { return this._control; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "path", {
            /**
             * @return {?}
             */
            get: function () {
                return this._parent ? controlPath(this.name, this._parent) : [this.name];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "formDirective", {
            /**
             * @return {?}
             */
            get: function () { return this._parent ? this._parent.formDirective : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "validator", {
            /**
             * @return {?}
             */
            get: function () { return composeValidators(this._rawValidators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "asyncValidator", {
            /**
             * @return {?}
             */
            get: function () {
                return composeAsyncValidators(this._rawAsyncValidators);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} newValue
         * @return {?}
         */
        NgModel.prototype.viewToModelUpdate = function (newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
        };
        /**
         * @return {?}
         */
        NgModel.prototype._setUpControl = function () {
            this._isStandalone() ? this._setUpStandalone() :
                this.formDirective.addControl(this);
            this._registered = true;
        };
        /**
         * @return {?}
         */
        NgModel.prototype._isStandalone = function () {
            return !this._parent || (this.options && this.options.standalone);
        };
        /**
         * @return {?}
         */
        NgModel.prototype._setUpStandalone = function () {
            setUpControl(this._control, this);
            this._control.updateValueAndValidity({ emitEvent: false });
        };
        /**
         * @return {?}
         */
        NgModel.prototype._checkForErrors = function () {
            if (!this._isStandalone()) {
                this._checkParentType();
            }
            this._checkName();
        };
        /**
         * @return {?}
         */
        NgModel.prototype._checkParentType = function () {
            if (!(this._parent instanceof NgModelGroup) &&
                this._parent instanceof AbstractFormGroupDirective) {
                TemplateDrivenErrors.formGroupNameException();
            }
            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                TemplateDrivenErrors.modelParentException();
            }
        };
        /**
         * @return {?}
         */
        NgModel.prototype._checkName = function () {
            if (this.options && this.options.name)
                this.name = this.options.name;
            if (!this._isStandalone() && !this.name) {
                TemplateDrivenErrors.missingNameException();
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NgModel.prototype._updateValue = function (value) {
            var _this = this;
            resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgModel.prototype._updateDisabled = function (changes) {
            var _this = this;
            var /** @type {?} */ disabledValue = changes['isDisabled'].currentValue;
            var /** @type {?} */ isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
            resolvedPromise$1.then(function () {
                if (isDisabled && !_this.control.disabled) {
                    _this.control.disable();
                }
                else if (!isDisabled && _this.control.disabled) {
                    _this.control.enable();
                }
            });
        };
        NgModel.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[ngModel]:not([formControlName]):not([formControl])',
                        providers: [formControlBinding],
                        exportAs: 'ngModel'
                    },] },
        ];
        /** @nocollapse */
        NgModel.ctorParameters = function () { return [
            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
        ]; };
        NgModel.propDecorators = {
            'name': [{ type: _angular_core.Input },],
            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
            'options': [{ type: _angular_core.Input, args: ['ngModelOptions',] },],
            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
        };
        return NgModel;
    }(NgControl));

    var ReactiveErrors = (function () {
        function ReactiveErrors() {
        }
        /**
         * @return {?}
         */
        ReactiveErrors.controlParentException = function () {
            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formControlName);
        };
        /**
         * @return {?}
         */
        ReactiveErrors.ngModelGroupException = function () {
            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + Examples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + Examples.ngModelGroup);
        };
        /**
         * @return {?}
         */
        ReactiveErrors.missingFormException = function () {
            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + Examples.formControlName);
        };
        /**
         * @return {?}
         */
        ReactiveErrors.groupParentException = function () {
            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formGroupName);
        };
        /**
         * @return {?}
         */
        ReactiveErrors.arrayParentException = function () {
            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + Examples.formArrayName);
        };
        /**
         * @return {?}
         */
        ReactiveErrors.disabledAttrWarning = function () {
            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
        };
        return ReactiveErrors;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$9 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var /** @type {?} */ formControlBinding$1 = {
        provide: NgControl,
        useExisting: _angular_core.forwardRef(function () { return FormControlDirective; })
    };
    /**
     * \@whatItDoes Syncs a standalone {\@link FormControl} instance to a form control element.
     *
     * In other words, this directive ensures that any values written to the {\@link FormControl}
     * instance programmatically will be written to the DOM element (model -> view). Conversely,
     * any values written to the DOM element through user input will be reflected in the
     * {\@link FormControl} instance (view -> model).
     *
     * \@howToUse
     *
     * Use this directive if you'd like to create and manage a {\@link FormControl} instance directly.
     * Simply create a {\@link FormControl}, save it to your component class, and pass it into the
     * {\@link FormControlDirective}.
     *
     * This directive is designed to be used as a standalone control.  Unlike {\@link FormControlName},
     * it does not require that your {\@link FormControl} instance be part of any parent
     * {\@link FormGroup}, and it won't be registered to any {\@link FormGroupDirective} that
     * exists above it.
     *
     * **Get the value**: the `value` property is always synced and available on the
     * {\@link FormControl} instance. See a full list of available properties in
     * {\@link AbstractControl}.
     *
     * **Set the value**: You can pass in an initial value when instantiating the {\@link FormControl},
     * or you can set it programmatically later using {\@link AbstractControl.setValue} or
     * {\@link AbstractControl.patchValue}.
     *
     * **Listen to value**: If you want to listen to changes in the value of the control, you can
     * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
     * {\@link AbstractControl.statusChanges} to be notified when the validation status is
     * re-calculated.
     *
     * ### Example
     *
     * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
     *
     * * **npm package**: `\@angular/forms`
     *
     * * **NgModule**: `ReactiveFormsModule`
     *
     *  \@stable
     */
    var FormControlDirective = (function (_super) {
        __extends$9(FormControlDirective, _super);
        /**
         * @param {?} validators
         * @param {?} asyncValidators
         * @param {?} valueAccessors
         */
        function FormControlDirective(validators, asyncValidators, valueAccessors) {
            _super.call(this);
            this.update = new EventEmitter();
            this._rawValidators = validators || [];
            this._rawAsyncValidators = asyncValidators || [];
            this.valueAccessor = selectValueAccessor(this, valueAccessors);
        }
        Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
            /**
             * @param {?} isDisabled
             * @return {?}
             */
            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        FormControlDirective.prototype.ngOnChanges = function (changes) {
            if (this._isControlChanged(changes)) {
                setUpControl(this.form, this);
                if (this.control.disabled && this.valueAccessor.setDisabledState) {
                    this.valueAccessor.setDisabledState(true);
                }
                this.form.updateValueAndValidity({ emitEvent: false });
            }
            if (isPropertyUpdated(changes, this.viewModel)) {
                this.form.setValue(this.model);
                this.viewModel = this.model;
            }
        };
        Object.defineProperty(FormControlDirective.prototype, "path", {
            /**
             * @return {?}
             */
            get: function () { return []; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "validator", {
            /**
             * @return {?}
             */
            get: function () { return composeValidators(this._rawValidators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
            /**
             * @return {?}
             */
            get: function () {
                return composeAsyncValidators(this._rawAsyncValidators);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "control", {
            /**
             * @return {?}
             */
            get: function () { return this.form; },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} newValue
         * @return {?}
         */
        FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        FormControlDirective.prototype._isControlChanged = function (changes) {
            return changes.hasOwnProperty('form');
        };
        FormControlDirective.decorators = [
            { type: _angular_core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
        ];
        /** @nocollapse */
        FormControlDirective.ctorParameters = function () { return [
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
        ]; };
        FormControlDirective.propDecorators = {
            'form': [{ type: _angular_core.Input, args: ['formControl',] },],
            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
        };
        return FormControlDirective;
    }(NgControl));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$11 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var /** @type {?} */ formDirectiveProvider$1 = {
        provide: ControlContainer,
        useExisting: _angular_core.forwardRef(function () { return FormGroupDirective; })
    };
    /**
     * \@whatItDoes Binds an existing {\@link FormGroup} to a DOM element.
     *
     * \@howToUse
     *
     * This directive accepts an existing {\@link FormGroup} instance. It will then use this
     * {\@link FormGroup} instance to match any child {\@link FormControl}, {\@link FormGroup},
     * and {\@link FormArray} instances to child {\@link FormControlName}, {\@link FormGroupName},
     * and {\@link FormArrayName} directives.
     *
     * **Set value**: You can set the form's initial value when instantiating the
     * {\@link FormGroup}, or you can set it programmatically later using the {\@link FormGroup}'s
     * {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue} methods.
     *
     * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
     * to the {\@link FormGroup}'s {\@link AbstractControl.valueChanges} event.  You can also listen to
     * its {\@link AbstractControl.statusChanges} event to be notified when the validation status is
     * re-calculated.
     *
     * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
     * triggered a form submission. The `ngSubmit` event will be emitted with the original form
     * submission event.
     *
     * ### Example
     *
     * In this example, we create form controls for first name and last name.
     *
     * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * **npm package**: `\@angular/forms`
     *
     * **NgModule**: {\@link ReactiveFormsModule}
     *
     *  \@stable
     */
    var FormGroupDirective = (function (_super) {
        __extends$11(FormGroupDirective, _super);
        /**
         * @param {?} _validators
         * @param {?} _asyncValidators
         */
        function FormGroupDirective(_validators, _asyncValidators) {
            _super.call(this);
            this._validators = _validators;
            this._asyncValidators = _asyncValidators;
            this._submitted = false;
            this.directives = [];
            this.form = null;
            this.ngSubmit = new EventEmitter();
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        FormGroupDirective.prototype.ngOnChanges = function (changes) {
            this._checkFormPresent();
            if (changes.hasOwnProperty('form')) {
                this._updateValidators();
                this._updateDomValue();
                this._updateRegistrations();
            }
        };
        Object.defineProperty(FormGroupDirective.prototype, "submitted", {
            /**
             * @return {?}
             */
            get: function () { return this._submitted; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
            /**
             * @return {?}
             */
            get: function () { return this; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupDirective.prototype, "control", {
            /**
             * @return {?}
             */
            get: function () { return this.form; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupDirective.prototype, "path", {
            /**
             * @return {?}
             */
            get: function () { return []; },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} dir
         * @return {?}
         */
        FormGroupDirective.prototype.addControl = function (dir) {
            var /** @type {?} */ ctrl = this.form.get(dir.path);
            setUpControl(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
            this.directives.push(dir);
            return ctrl;
        };
        /**
         * @param {?} dir
         * @return {?}
         */
        FormGroupDirective.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
        /**
         * @param {?} dir
         * @return {?}
         */
        FormGroupDirective.prototype.removeControl = function (dir) { ListWrapper.remove(this.directives, dir); };
        /**
         * @param {?} dir
         * @return {?}
         */
        FormGroupDirective.prototype.addFormGroup = function (dir) {
            var /** @type {?} */ ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
        };
        /**
         * @param {?} dir
         * @return {?}
         */
        FormGroupDirective.prototype.removeFormGroup = function (dir) { };
        /**
         * @param {?} dir
         * @return {?}
         */
        FormGroupDirective.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
        /**
         * @param {?} dir
         * @return {?}
         */
        FormGroupDirective.prototype.addFormArray = function (dir) {
            var /** @type {?} */ ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
        };
        /**
         * @param {?} dir
         * @return {?}
         */
        FormGroupDirective.prototype.removeFormArray = function (dir) { };
        /**
         * @param {?} dir
         * @return {?}
         */
        FormGroupDirective.prototype.getFormArray = function (dir) { return (this.form.get(dir.path)); };
        /**
         * @param {?} dir
         * @param {?} value
         * @return {?}
         */
        FormGroupDirective.prototype.updateModel = function (dir, value) {
            var /** @type {?} */ ctrl = (this.form.get(dir.path));
            ctrl.setValue(value);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        FormGroupDirective.prototype.onSubmit = function ($event) {
            this._submitted = true;
            this.ngSubmit.emit($event);
            return false;
        };
        /**
         * @return {?}
         */
        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
        /**
         * @param {?=} value
         * @return {?}
         */
        FormGroupDirective.prototype.resetForm = function (value) {
            if (value === void 0) { value = undefined; }
            this.form.reset(value);
            this._submitted = false;
        };
        /**
         * \@internal
         * @return {?}
         */
        FormGroupDirective.prototype._updateDomValue = function () {
            var _this = this;
            this.directives.forEach(function (dir) {
                var /** @type {?} */ newCtrl = _this.form.get(dir.path);
                if (dir._control !== newCtrl) {
                    cleanUpControl(dir._control, dir);
                    if (newCtrl)
                        setUpControl(newCtrl, dir);
                    dir._control = newCtrl;
                }
            });
            this.form._updateTreeValidity({ emitEvent: false });
        };
        /**
         * @return {?}
         */
        FormGroupDirective.prototype._updateRegistrations = function () {
            var _this = this;
            this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
            if (this._oldForm)
                this._oldForm._registerOnCollectionChange(function () { });
            this._oldForm = this.form;
        };
        /**
         * @return {?}
         */
        FormGroupDirective.prototype._updateValidators = function () {
            var /** @type {?} */ sync = composeValidators(this._validators);
            this.form.validator = Validators.compose([this.form.validator, sync]);
            var /** @type {?} */ async = composeAsyncValidators(this._asyncValidators);
            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
        };
        /**
         * @return {?}
         */
        FormGroupDirective.prototype._checkFormPresent = function () {
            if (!this.form) {
                ReactiveErrors.missingFormException();
            }
        };
        FormGroupDirective.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[formGroup]',
                        providers: [formDirectiveProvider$1],
                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                        exportAs: 'ngForm'
                    },] },
        ];
        /** @nocollapse */
        FormGroupDirective.ctorParameters = function () { return [
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        ]; };
        FormGroupDirective.propDecorators = {
            'form': [{ type: _angular_core.Input, args: ['formGroup',] },],
            'ngSubmit': [{ type: _angular_core.Output },],
        };
        return FormGroupDirective;
    }(ControlContainer));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$12 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var /** @type {?} */ formGroupNameProvider = {
        provide: ControlContainer,
        useExisting: _angular_core.forwardRef(function () { return FormGroupName; })
    };
    /**
     * \@whatItDoes Syncs a nested {\@link FormGroup} to a DOM element.
     *
     * \@howToUse
     *
     * This directive can only be used with a parent {\@link FormGroupDirective} (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the nested {\@link FormGroup} you want to link, and
     * will look for a {\@link FormGroup} registered with that name in the parent
     * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
     *
     * Nested form groups can come in handy when you want to validate a sub-group of a
     * form separately from the rest or when you'd like to group the values of certain
     * controls into their own nested object.
     *
     * **Access the group**: You can access the associated {\@link FormGroup} using the
     * {\@link AbstractControl.get} method. Ex: `this.form.get('name')`.
     *
     * You can also access individual controls within the group using dot syntax.
     * Ex: `this.form.get('name.first')`
     *
     * **Get the value**: the `value` property is always synced and available on the
     * {\@link FormGroup}. See a full list of available properties in {\@link AbstractControl}.
     *
     * **Set the value**: You can set an initial value for each child control when instantiating
     * the {\@link FormGroup}, or you can set it programmatically later using
     * {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}.
     *
     * **Listen to value**: If you want to listen to changes in the value of the group, you can
     * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
     * {\@link AbstractControl.statusChanges} to be notified when the validation status is
     * re-calculated.
     *
     * ### Example
     *
     * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
     *
     * * **npm package**: `\@angular/forms`
     *
     * * **NgModule**: `ReactiveFormsModule`
     *
     * \@stable
     */
    var FormGroupName = (function (_super) {
        __extends$12(FormGroupName, _super);
        /**
         * @param {?} parent
         * @param {?} validators
         * @param {?} asyncValidators
         */
        function FormGroupName(parent, validators, asyncValidators) {
            _super.call(this);
            this._parent = parent;
            this._validators = validators;
            this._asyncValidators = asyncValidators;
        }
        /**
         * \@internal
         * @return {?}
         */
        FormGroupName.prototype._checkParentType = function () {
            if (_hasInvalidParent(this._parent)) {
                ReactiveErrors.groupParentException();
            }
        };
        FormGroupName.decorators = [
            { type: _angular_core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
        ];
        /** @nocollapse */
        FormGroupName.ctorParameters = function () { return [
            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        ]; };
        FormGroupName.propDecorators = {
            'name': [{ type: _angular_core.Input, args: ['formGroupName',] },],
        };
        return FormGroupName;
    }(AbstractFormGroupDirective));
    var /** @type {?} */ formArrayNameProvider = {
        provide: ControlContainer,
        useExisting: _angular_core.forwardRef(function () { return FormArrayName; })
    };
    /**
     * \@whatItDoes Syncs a nested {\@link FormArray} to a DOM element.
     *
     * \@howToUse
     *
     * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the nested {\@link FormArray} you want to link, and
     * will look for a {\@link FormArray} registered with that name in the parent
     * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
     *
     * Nested form arrays can come in handy when you have a group of form controls but
     * you're not sure how many there will be. Form arrays allow you to create new
     * form controls dynamically.
     *
     * **Access the array**: You can access the associated {\@link FormArray} using the
     * {\@link AbstractControl.get} method on the parent {\@link FormGroup}.
     * Ex: `this.form.get('cities')`.
     *
     * **Get the value**: the `value` property is always synced and available on the
     * {\@link FormArray}. See a full list of available properties in {\@link AbstractControl}.
     *
     * **Set the value**: You can set an initial value for each child control when instantiating
     * the {\@link FormArray}, or you can set the value programmatically later using the
     * {\@link FormArray}'s {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}
     * methods.
     *
     * **Listen to value**: If you want to listen to changes in the value of the array, you can
     * subscribe to the {\@link FormArray}'s {\@link AbstractControl.valueChanges} event.  You can also
     * listen to its {\@link AbstractControl.statusChanges} event to be notified when the validation
     * status is re-calculated.
     *
     * **Add new controls**: You can add new controls to the {\@link FormArray} dynamically by
     * calling its {\@link FormArray.push} method.
     *  Ex: `this.form.get('cities').push(new FormControl());`
     *
     * ### Example
     *
     * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
     *
     * * **npm package**: `\@angular/forms`
     *
     * * **NgModule**: `ReactiveFormsModule`
     *
     * \@stable
     */
    var FormArrayName = (function (_super) {
        __extends$12(FormArrayName, _super);
        /**
         * @param {?} parent
         * @param {?} validators
         * @param {?} asyncValidators
         */
        function FormArrayName(parent, validators, asyncValidators) {
            _super.call(this);
            this._parent = parent;
            this._validators = validators;
            this._asyncValidators = asyncValidators;
        }
        /**
         * @return {?}
         */
        FormArrayName.prototype.ngOnInit = function () {
            this._checkParentType();
            this.formDirective.addFormArray(this);
        };
        /**
         * @return {?}
         */
        FormArrayName.prototype.ngOnDestroy = function () {
            if (this.formDirective) {
                this.formDirective.removeFormArray(this);
            }
        };
        Object.defineProperty(FormArrayName.prototype, "control", {
            /**
             * @return {?}
             */
            get: function () { return this.formDirective.getFormArray(this); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "formDirective", {
            /**
             * @return {?}
             */
            get: function () {
                return this._parent ? (this._parent.formDirective) : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "path", {
            /**
             * @return {?}
             */
            get: function () { return controlPath(this.name, this._parent); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "validator", {
            /**
             * @return {?}
             */
            get: function () { return composeValidators(this._validators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
            /**
             * @return {?}
             */
            get: function () { return composeAsyncValidators(this._asyncValidators); },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        FormArrayName.prototype._checkParentType = function () {
            if (_hasInvalidParent(this._parent)) {
                ReactiveErrors.arrayParentException();
            }
        };
        FormArrayName.decorators = [
            { type: _angular_core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
        ];
        /** @nocollapse */
        FormArrayName.ctorParameters = function () { return [
            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        ]; };
        FormArrayName.propDecorators = {
            'name': [{ type: _angular_core.Input, args: ['formArrayName',] },],
        };
        return FormArrayName;
    }(ControlContainer));
    /**
     * @param {?} parent
     * @return {?}
     */
    function _hasInvalidParent(parent) {
        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
            !(parent instanceof FormArrayName);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$10 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var /** @type {?} */ controlNameBinding = {
        provide: NgControl,
        useExisting: _angular_core.forwardRef(function () { return FormControlName; })
    };
    /**
     * \@whatItDoes Syncs a {\@link FormControl} in an existing {\@link FormGroup} to a form control
     * element by name.
     *
     * In other words, this directive ensures that any values written to the {\@link FormControl}
     * instance programmatically will be written to the DOM element (model -> view). Conversely,
     * any values written to the DOM element through user input will be reflected in the
     * {\@link FormControl} instance (view -> model).
     *
     * \@howToUse
     *
     * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the {\@link FormControl} instance you want to
     * link, and will look for a {\@link FormControl} registered with that name in the
     * closest {\@link FormGroup} or {\@link FormArray} above it.
     *
     * **Access the control**: You can access the {\@link FormControl} associated with
     * this directive by using the {\@link AbstractControl.get} method.
     * Ex: `this.form.get('first');`
     *
     * **Get value**: the `value` property is always synced and available on the {\@link FormControl}.
     * See a full list of available properties in {\@link AbstractControl}.
     *
     *  **Set value**: You can set an initial value for the control when instantiating the
     *  {\@link FormControl}, or you can set it programmatically later using
     *  {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}.
     *
     * **Listen to value**: If you want to listen to changes in the value of the control, you can
     * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
     * {\@link AbstractControl.statusChanges} to be notified when the validation status is
     * re-calculated.
     *
     * ### Example
     *
     * In this example, we create form controls for first name and last name.
     *
     * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * To see `formControlName` examples with different form control types, see:
     *
     * * Radio buttons: {\@link RadioControlValueAccessor}
     * * Selects: {\@link SelectControlValueAccessor}
     *
     * **npm package**: `\@angular/forms`
     *
     * **NgModule**: {\@link ReactiveFormsModule}
     *
     *  \@stable
     */
    var FormControlName = (function (_super) {
        __extends$10(FormControlName, _super);
        /**
         * @param {?} parent
         * @param {?} validators
         * @param {?} asyncValidators
         * @param {?} valueAccessors
         */
        function FormControlName(parent, validators, asyncValidators, valueAccessors) {
            _super.call(this);
            this._added = false;
            this.update = new EventEmitter();
            this._parent = parent;
            this._rawValidators = validators || [];
            this._rawAsyncValidators = asyncValidators || [];
            this.valueAccessor = selectValueAccessor(this, valueAccessors);
        }
        Object.defineProperty(FormControlName.prototype, "isDisabled", {
            /**
             * @param {?} isDisabled
             * @return {?}
             */
            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        FormControlName.prototype.ngOnChanges = function (changes) {
            if (!this._added)
                this._setUpControl();
            if (isPropertyUpdated(changes, this.viewModel)) {
                this.viewModel = this.model;
                this.formDirective.updateModel(this, this.model);
            }
        };
        /**
         * @return {?}
         */
        FormControlName.prototype.ngOnDestroy = function () {
            if (this.formDirective) {
                this.formDirective.removeControl(this);
            }
        };
        /**
         * @param {?} newValue
         * @return {?}
         */
        FormControlName.prototype.viewToModelUpdate = function (newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
        };
        Object.defineProperty(FormControlName.prototype, "path", {
            /**
             * @return {?}
             */
            get: function () { return controlPath(this.name, this._parent); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "formDirective", {
            /**
             * @return {?}
             */
            get: function () { return this._parent ? this._parent.formDirective : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "validator", {
            /**
             * @return {?}
             */
            get: function () { return composeValidators(this._rawValidators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "asyncValidator", {
            /**
             * @return {?}
             */
            get: function () {
                return composeAsyncValidators(this._rawAsyncValidators);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "control", {
            /**
             * @return {?}
             */
            get: function () { return this._control; },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        FormControlName.prototype._checkParentType = function () {
            if (!(this._parent instanceof FormGroupName) &&
                this._parent instanceof AbstractFormGroupDirective) {
                ReactiveErrors.ngModelGroupException();
            }
            else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
                !(this._parent instanceof FormArrayName)) {
                ReactiveErrors.controlParentException();
            }
        };
        /**
         * @return {?}
         */
        FormControlName.prototype._setUpControl = function () {
            this._checkParentType();
            this._control = this.formDirective.addControl(this);
            if (this.control.disabled && this.valueAccessor.setDisabledState) {
                this.valueAccessor.setDisabledState(true);
            }
            this._added = true;
        };
        FormControlName.decorators = [
            { type: _angular_core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
        ];
        /** @nocollapse */
        FormControlName.ctorParameters = function () { return [
            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
        ]; };
        FormControlName.propDecorators = {
            'name': [{ type: _angular_core.Input, args: ['formControlName',] },],
            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
        };
        return FormControlName;
    }(NgControl));

    var __extends$13 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var /** @type {?} */ REQUIRED_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: _angular_core.forwardRef(function () { return RequiredValidator; }),
        multi: true
    };
    var /** @type {?} */ CHECKBOX_REQUIRED_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: _angular_core.forwardRef(function () { return CheckboxRequiredValidator; }),
        multi: true
    };
    /**
     * A Directive that adds the `required` validator to any controls marked with the
     * `required` attribute, via the {\@link NG_VALIDATORS} binding.
     *
     * ### Example
     *
     * ```
     * <input name="fullName" ngModel required>
     * ```
     *
     * \@stable
     */
    var RequiredValidator = (function () {
        function RequiredValidator() {
        }
        Object.defineProperty(RequiredValidator.prototype, "required", {
            /**
             * @return {?}
             */
            get: function () { return this._required; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._required = value != null && value !== false && "" + value !== 'false';
                if (this._onChange)
                    this._onChange();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} c
         * @return {?}
         */
        RequiredValidator.prototype.validate = function (c) {
            return this.required ? Validators.required(c) : null;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        RequiredValidator.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                        providers: [REQUIRED_VALIDATOR],
                        host: { '[attr.required]': 'required ? "" : null' }
                    },] },
        ];
        /** @nocollapse */
        RequiredValidator.ctorParameters = function () { return []; };
        RequiredValidator.propDecorators = {
            'required': [{ type: _angular_core.Input },],
        };
        return RequiredValidator;
    }());
    /**
     * A Directive that adds the `required` validator to checkbox controls marked with the
     * `required` attribute, via the {\@link NG_VALIDATORS} binding.
     *
     * ### Example
     *
     * ```
     * <input type="checkbox" name="active" ngModel required>
     * ```
     *
     * \@experimental
     */
    var CheckboxRequiredValidator = (function (_super) {
        __extends$13(CheckboxRequiredValidator, _super);
        function CheckboxRequiredValidator() {
            _super.apply(this, arguments);
        }
        /**
         * @param {?} c
         * @return {?}
         */
        CheckboxRequiredValidator.prototype.validate = function (c) {
            return this.required ? Validators.requiredTrue(c) : null;
        };
        CheckboxRequiredValidator.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                        providers: [CHECKBOX_REQUIRED_VALIDATOR],
                        host: { '[attr.required]': 'required ? "" : null' }
                    },] },
        ];
        /** @nocollapse */
        CheckboxRequiredValidator.ctorParameters = function () { return []; };
        return CheckboxRequiredValidator;
    }(RequiredValidator));
    /**
     * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
     *
     * ## Example:
     *
     * {@example common/forms/ts/validators/validators.ts region='min'}
     */
    var /** @type {?} */ MIN_LENGTH_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: _angular_core.forwardRef(function () { return MinLengthValidator; }),
        multi: true
    };
    /**
     * A directive which installs the {\@link MinLengthValidator} for any `formControlName`,
     * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
     *
     * \@stable
     */
    var MinLengthValidator = (function () {
        function MinLengthValidator() {
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        MinLengthValidator.prototype.ngOnChanges = function (changes) {
            if ('minlength' in changes) {
                this._createValidator();
                if (this._onChange)
                    this._onChange();
            }
        };
        /**
         * @param {?} c
         * @return {?}
         */
        MinLengthValidator.prototype.validate = function (c) {
            return this.minlength == null ? null : this._validator(c);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        /**
         * @return {?}
         */
        MinLengthValidator.prototype._createValidator = function () {
            this._validator = Validators.minLength(parseInt(this.minlength, 10));
        };
        MinLengthValidator.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                        providers: [MIN_LENGTH_VALIDATOR],
                        host: { '[attr.minlength]': 'minlength ? minlength : null' }
                    },] },
        ];
        /** @nocollapse */
        MinLengthValidator.ctorParameters = function () { return []; };
        MinLengthValidator.propDecorators = {
            'minlength': [{ type: _angular_core.Input },],
        };
        return MinLengthValidator;
    }());
    /**
     * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
     *
     * ## Example:
     *
     * {@example common/forms/ts/validators/validators.ts region='max'}
     */
    var /** @type {?} */ MAX_LENGTH_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: _angular_core.forwardRef(function () { return MaxLengthValidator; }),
        multi: true
    };
    /**
     * A directive which installs the {\@link MaxLengthValidator} for any `formControlName,
     * `formControl`,
     * or control with `ngModel` that also has a `maxlength` attribute.
     *
     * \@stable
     */
    var MaxLengthValidator = (function () {
        function MaxLengthValidator() {
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        MaxLengthValidator.prototype.ngOnChanges = function (changes) {
            if ('maxlength' in changes) {
                this._createValidator();
                if (this._onChange)
                    this._onChange();
            }
        };
        /**
         * @param {?} c
         * @return {?}
         */
        MaxLengthValidator.prototype.validate = function (c) {
            return this.maxlength != null ? this._validator(c) : null;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        /**
         * @return {?}
         */
        MaxLengthValidator.prototype._createValidator = function () {
            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
        };
        MaxLengthValidator.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                        providers: [MAX_LENGTH_VALIDATOR],
                        host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
                    },] },
        ];
        /** @nocollapse */
        MaxLengthValidator.ctorParameters = function () { return []; };
        MaxLengthValidator.propDecorators = {
            'maxlength': [{ type: _angular_core.Input },],
        };
        return MaxLengthValidator;
    }());
    var /** @type {?} */ PATTERN_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: _angular_core.forwardRef(function () { return PatternValidator; }),
        multi: true
    };
    /**
     * A Directive that adds the `pattern` validator to any controls marked with the
     * `pattern` attribute, via the {\@link NG_VALIDATORS} binding. Uses attribute value
     * as the regex to validate Control value against.  Follows pattern attribute
     * semantics; i.e. regex must match entire Control value.
     *
     * ### Example
     *
     * ```
     * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
     * ```
     * \@stable
     */
    var PatternValidator = (function () {
        function PatternValidator() {
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        PatternValidator.prototype.ngOnChanges = function (changes) {
            if ('pattern' in changes) {
                this._createValidator();
                if (this._onChange)
                    this._onChange();
            }
        };
        /**
         * @param {?} c
         * @return {?}
         */
        PatternValidator.prototype.validate = function (c) { return this._validator(c); };
        /**
         * @param {?} fn
         * @return {?}
         */
        PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        /**
         * @return {?}
         */
        PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
        PatternValidator.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                        providers: [PATTERN_VALIDATOR],
                        host: { '[attr.pattern]': 'pattern ? pattern : null' }
                    },] },
        ];
        /** @nocollapse */
        PatternValidator.ctorParameters = function () { return []; };
        PatternValidator.propDecorators = {
            'pattern': [{ type: _angular_core.Input },],
        };
        return PatternValidator;
    }());

    /**
     * \@whatItDoes Creates an {\@link AbstractControl} from a user-specified configuration.
     *
     * It is essentially syntactic sugar that shortens the `new FormGroup()`,
     * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
     * forms.
     *
     * \@howToUse
     *
     * To use, inject `FormBuilder` into your component class. You can then call its methods
     * directly.
     *
     * {\@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
     *
     *  * **npm package**: `\@angular/forms`
     *
     *  * **NgModule**: {\@link ReactiveFormsModule}
     *
     * \@stable
     */
    var FormBuilder = (function () {
        function FormBuilder() {
        }
        /**
         * Construct a new {\@link FormGroup} with the given map of configuration.
         * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
         *
         * See the {\@link FormGroup} constructor for more details.
         * @param {?} controlsConfig
         * @param {?=} extra
         * @return {?}
         */
        FormBuilder.prototype.group = function (controlsConfig, extra) {
            if (extra === void 0) { extra = null; }
            var /** @type {?} */ controls = this._reduceControls(controlsConfig);
            var /** @type {?} */ validator = isPresent(extra) ? extra['validator'] : null;
            var /** @type {?} */ asyncValidator = isPresent(extra) ? extra['asyncValidator'] : null;
            return new FormGroup(controls, validator, asyncValidator);
        };
        /**
         * Construct a new {\@link FormControl} with the given `formState`,`validator`, and
         * `asyncValidator`.
         *
         * `formState` can either be a standalone value for the form control or an object
         * that contains both a value and a disabled status.
         *
         * @param {?} formState
         * @param {?=} validator
         * @param {?=} asyncValidator
         * @return {?}
         */
        FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
            if (validator === void 0) { validator = null; }
            if (asyncValidator === void 0) { asyncValidator = null; }
            return new FormControl(formState, validator, asyncValidator);
        };
        /**
         * Construct a {\@link FormArray} from the given `controlsConfig` array of
         * configuration, with the given optional `validator` and `asyncValidator`.
         * @param {?} controlsConfig
         * @param {?=} validator
         * @param {?=} asyncValidator
         * @return {?}
         */
        FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
            var _this = this;
            if (validator === void 0) { validator = null; }
            if (asyncValidator === void 0) { asyncValidator = null; }
            var /** @type {?} */ controls = controlsConfig.map(function (c) { return _this._createControl(c); });
            return new FormArray(controls, validator, asyncValidator);
        };
        /**
         * \@internal
         * @param {?} controlsConfig
         * @return {?}
         */
        FormBuilder.prototype._reduceControls = function (controlsConfig) {
            var _this = this;
            var /** @type {?} */ controls = {};
            Object.keys(controlsConfig).forEach(function (controlName) {
                controls[controlName] = _this._createControl(controlsConfig[controlName]);
            });
            return controls;
        };
        /**
         * \@internal
         * @param {?} controlConfig
         * @return {?}
         */
        FormBuilder.prototype._createControl = function (controlConfig) {
            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
                controlConfig instanceof FormArray) {
                return controlConfig;
            }
            else if (Array.isArray(controlConfig)) {
                var /** @type {?} */ value = controlConfig[0];
                var /** @type {?} */ validator = controlConfig.length > 1 ? controlConfig[1] : null;
                var /** @type {?} */ asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
                return this.control(value, validator, asyncValidator);
            }
            else {
                return this.control(controlConfig);
            }
        };
        FormBuilder.decorators = [
            { type: _angular_core.Injectable },
        ];
        /** @nocollapse */
        FormBuilder.ctorParameters = function () { return []; };
        return FormBuilder;
    }());

    /**
     * @stable
     */
    var /** @type {?} */ VERSION = new _angular_core.Version('2.4.8');

    var /** @type {?} */ SHARED_FORM_DIRECTIVES = [
        NgSelectOption,
        NgSelectMultipleOption,
        DefaultValueAccessor,
        NumberValueAccessor,
        RangeValueAccessor,
        CheckboxControlValueAccessor,
        SelectControlValueAccessor,
        SelectMultipleControlValueAccessor,
        RadioControlValueAccessor,
        NgControlStatus,
        NgControlStatusGroup,
        RequiredValidator,
        MinLengthValidator,
        MaxLengthValidator,
        PatternValidator,
        CheckboxRequiredValidator,
    ];
    var /** @type {?} */ TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
    var /** @type {?} */ REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
    /**
     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
     */
    var InternalFormsSharedModule = (function () {
        function InternalFormsSharedModule() {
        }
        InternalFormsSharedModule.decorators = [
            { type: _angular_core.NgModule, args: [{
                        declarations: SHARED_FORM_DIRECTIVES,
                        exports: SHARED_FORM_DIRECTIVES,
                    },] },
        ];
        /** @nocollapse */
        InternalFormsSharedModule.ctorParameters = function () { return []; };
        return InternalFormsSharedModule;
    }());

    /**
     * The ng module for forms.
     * \@stable
     */
    var FormsModule = (function () {
        function FormsModule() {
        }
        FormsModule.decorators = [
            { type: _angular_core.NgModule, args: [{
                        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                        providers: [RadioControlRegistry],
                        exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
                    },] },
        ];
        /** @nocollapse */
        FormsModule.ctorParameters = function () { return []; };
        return FormsModule;
    }());
    /**
     * The ng module for reactive forms.
     * \@stable
     */
    var ReactiveFormsModule = (function () {
        function ReactiveFormsModule() {
        }
        ReactiveFormsModule.decorators = [
            { type: _angular_core.NgModule, args: [{
                        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
                        providers: [FormBuilder, RadioControlRegistry],
                        exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
                    },] },
        ];
        /** @nocollapse */
        ReactiveFormsModule.ctorParameters = function () { return []; };
        return ReactiveFormsModule;
    }());

    exports.AbstractControlDirective = AbstractControlDirective;
    exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
    exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
    exports.ControlContainer = ControlContainer;
    exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
    exports.DefaultValueAccessor = DefaultValueAccessor;
    exports.NgControl = NgControl;
    exports.NgControlStatus = NgControlStatus;
    exports.NgControlStatusGroup = NgControlStatusGroup;
    exports.NgForm = NgForm;
    exports.NgModel = NgModel;
    exports.NgModelGroup = NgModelGroup;
    exports.RadioControlValueAccessor = RadioControlValueAccessor;
    exports.FormControlDirective = FormControlDirective;
    exports.FormControlName = FormControlName;
    exports.FormGroupDirective = FormGroupDirective;
    exports.FormArrayName = FormArrayName;
    exports.FormGroupName = FormGroupName;
    exports.NgSelectOption = NgSelectOption;
    exports.SelectControlValueAccessor = SelectControlValueAccessor;
    exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
    exports.CheckboxRequiredValidator = CheckboxRequiredValidator;
    exports.MaxLengthValidator = MaxLengthValidator;
    exports.MinLengthValidator = MinLengthValidator;
    exports.PatternValidator = PatternValidator;
    exports.RequiredValidator = RequiredValidator;
    exports.FormBuilder = FormBuilder;
    exports.AbstractControl = AbstractControl;
    exports.FormArray = FormArray;
    exports.FormControl = FormControl;
    exports.FormGroup = FormGroup;
    exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
    exports.NG_VALIDATORS = NG_VALIDATORS;
    exports.Validators = Validators;
    exports.VERSION = VERSION;
    exports.FormsModule = FormsModule;
    exports.ReactiveFormsModule = ReactiveFormsModule;

}));

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var platform_browser_1 = __webpack_require__(14);
var core_1 = __webpack_require__(1);
var compiler_1 = __webpack_require__(16);
var BROWSER_SANITIZATION_PROVIDERS = platform_browser_1.__platform_browser_private__.BROWSER_SANITIZATION_PROVIDERS, SharedStylesHost = platform_browser_1.__platform_browser_private__.SharedStylesHost, DomSharedStylesHost = platform_browser_1.__platform_browser_private__.DomSharedStylesHost, DomRootRenderer = platform_browser_1.__platform_browser_private__.DomRootRenderer, DomEventsPlugin = platform_browser_1.__platform_browser_private__.DomEventsPlugin, KeyEventsPlugin = platform_browser_1.__platform_browser_private__.KeyEventsPlugin, DomAdapter = platform_browser_1.__platform_browser_private__.DomAdapter, setRootDomAdapter = platform_browser_1.__platform_browser_private__.setRootDomAdapter, getDOM = platform_browser_1.__platform_browser_private__.getDOM, HammerGesturesPlugin = platform_browser_1.__platform_browser_private__.HammerGesturesPlugin;
exports.BROWSER_SANITIZATION_PROVIDERS = BROWSER_SANITIZATION_PROVIDERS;
exports.SharedStylesHost = SharedStylesHost;
exports.DomSharedStylesHost = DomSharedStylesHost;
exports.DomRootRenderer = DomRootRenderer;
exports.DomEventsPlugin = DomEventsPlugin;
exports.KeyEventsPlugin = KeyEventsPlugin;
exports.DomAdapter = DomAdapter;
exports.setRootDomAdapter = setRootDomAdapter;
exports.HammerGesturesPlugin = HammerGesturesPlugin;
var ViewUtils = core_1.__core_private__.ViewUtils, AnimationKeyframe = core_1.__core_private__.AnimationKeyframe, AnimationPlayer = core_1.__core_private__.AnimationPlayer, AnimationStyles = core_1.__core_private__.AnimationStyles, RenderDebugInfo = core_1.__core_private__.RenderDebugInfo;
exports.ViewUtils = ViewUtils;
exports.AnimationKeyframe = AnimationKeyframe;
exports.AnimationPlayer = AnimationPlayer;
exports.AnimationStyles = AnimationStyles;
exports.RenderDebugInfo = RenderDebugInfo;
var SelectorMatcher = compiler_1.__compiler_private__.SelectorMatcher, CssSelector = compiler_1.__compiler_private__.CssSelector;
exports.SelectorMatcher = SelectorMatcher;
exports.CssSelector = CssSelector;
var __empty = null;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = __empty;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: __webpack_require__(42),
        styles: [__webpack_require__(65)]
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var enum_keys_pipe_1 = __webpack_require__(31);
var safe_html_pipe_1 = __webpack_require__(32);
var CommonModule = (function () {
    function CommonModule() {
    }
    return CommonModule;
}());
CommonModule = __decorate([
    core_1.NgModule({
        declarations: [enum_keys_pipe_1.EnumKeysPipe, safe_html_pipe_1.SafePipe],
        exports: [enum_keys_pipe_1.EnumKeysPipe, safe_html_pipe_1.SafePipe]
    })
], CommonModule);
exports.CommonModule = CommonModule;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var CounterComponent = (function () {
    function CounterComponent() {
        this.currentCount = 0;
    }
    CounterComponent.prototype.incrementCounter = function () {
        this.currentCount++;
    };
    return CounterComponent;
}());
CounterComponent = __decorate([
    core_1.Component({
        selector: 'counter',
        template: __webpack_require__(43)
    })
], CounterComponent);
exports.CounterComponent = CounterComponent;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(3);
var FetchDataComponent = (function () {
    function FetchDataComponent(http) {
    }
    return FetchDataComponent;
}());
FetchDataComponent = __decorate([
    core_1.Component({
        selector: 'fetchdata',
        template: __webpack_require__(44)
    }),
    __metadata("design:paramtypes", [http_1.Http])
], FetchDataComponent);
exports.FetchDataComponent = FetchDataComponent;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: __webpack_require__(45)
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var NavMenuComponent = (function () {
    function NavMenuComponent() {
    }
    return NavMenuComponent;
}());
NavMenuComponent = __decorate([
    core_1.Component({
        selector: 'nav-menu',
        template: __webpack_require__(46),
        styles: [__webpack_require__(66)]
    })
], NavMenuComponent);
exports.NavMenuComponent = NavMenuComponent;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
//http://stackoverflow.com/questions/35750059/select-based-on-enum-in-angular2
var EnumKeysPipe = (function () {
    function EnumKeysPipe() {
    }
    EnumKeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var enumMember in value) {
            var isValueProperty = parseInt(enumMember, 10) >= 0;
            if (isValueProperty) {
                keys.push({ key: enumMember, value: value[enumMember] });
            }
        }
        return keys;
    };
    return EnumKeysPipe;
}());
EnumKeysPipe = __decorate([
    core_1.Pipe({ name: 'keys' })
], EnumKeysPipe);
exports.EnumKeysPipe = EnumKeysPipe;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(14);
//https://forum.ionicframework.com/t/inserting-html-via-angular-2-use-of-domsanitizationservice-bypasssecuritytrusthtml/62562/2
var SafePipe = (function () {
    function SafePipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error("Unable to bypass security for invalid type: " + type);
        }
    };
    return SafePipe;
}());
SafePipe = __decorate([
    core_1.Pipe({
        name: 'safe'
    }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], SafePipe);
exports.SafePipe = SafePipe;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(3);
var VideoService = (function () {
    function VideoService(http) {
        this.http = http;
        this.videoApiUrl = '/api/videos';
    }
    VideoService.prototype.GetVideos = function () {
        return this.http.get(this.videoApiUrl)
            .map(function (res) { return res.json(); });
    };
    VideoService.prototype.GetVideo = function (id) {
        if (id == null || id == "0") {
            return this.http.get(this.videoApiUrl + "/Empty")
                .map(function (res) { return res.json(); })
                .do(function (res) { return console.log('Retrieved video: ' + JSON.stringify(res)); });
        }
        return this.http.get(this.videoApiUrl + "/" + id)
            .map(function (res) { return res.json(); })
            .do(function (res) { return console.log('Retrieved video: ' + JSON.stringify(res)); });
        // .catch(this.handleGetVideoError);
    };
    VideoService.prototype.createVideo = function (data) {
        // if (!VideoValidationService.validateVideo(data))
        //     return;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var jsoned = JSON.stringify(data);
        console.log('service, create video.Video json: ' + jsoned);
        return this.http.post('/api/videos/postvideo', jsoned, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VideoService.prototype.updateVideo = function (data) {
        // if (!VideoValidationService.validateVideo(data))
        //     return;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var jsoned = JSON.stringify(data);
        console.log('service, create video.Video json: ' + jsoned);
        return this.http.put('/api/videos/editvideo', jsoned, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return VideoService;
}());
VideoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], VideoService);
exports.VideoService = VideoService;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var video_details_enums_1 = __webpack_require__(9);
var VideoValidationService = (function () {
    function VideoValidationService() {
    }
    VideoValidationService.validateVideo = function (entity) {
        var result = true;
        // if (!entity.id) {
        //     console.log('validation: id is empty for video: ' + entity);
        //     result = false;
        //}
        // if (!entity.title) {
        //     console.log('validation: title is empty for video: ' + entity);
        //     result = false;
        // }
        // if (VideoValidationService.recognizeVideoByUrl(entity.url) == VideoOriginEnum.Unknown) {
        //     console.log('validation: url of the video is incorrect: ' + entity.url);
        //     result = false;
        // }
        // //rating must be an integer between 0 and 5
        // if (!entity || entity.rating < 0 || entity.rating > 5) {
        //     result = false;
        //     console.log('validation: wrong rating for video: ' + entity);
        // }
        return result;
    };
    // static ratingValidator(control: Control): { [s: string]: boolean } {
    //     let ratingValue: number = control.value;
    //     if (ratingValue < 0 || ratingValue > 5) {
    //         return { ratingOutOfBounds: true };
    //     }
    // }
    // static urlValidator(control: Control): { [s: string]: boolean } {
    //     let result: { [s: string]: boolean } = {};
    //     //only recognized Urls are allowed
    //     let url: string = control.value;
    //     console.log('in urlValidator');
    //     if (!url) {
    //         console.log('no url provided');
    //         result = { emptyUrl: true };
    //     }
    //     else {
    //         let service = this;            
    //         if (VideoValidationService.recognizeVideoByUrl(url) == VideoOriginEnum.Unknown) {
    //             console.log('unrecognized url format');
    //             result = { invalidUrl: true };
    //         }
    //     }
    //     return result;
    // }
    //why this has to be static?
    VideoValidationService.recognizeVideoByUrl = function (url) {
        //http://stackoverflow.com/questions/5830387/how-to-find-all-youtube-video-ids-in-a-string-using-a-regex/5831191#5831191
        var ytUrlRegExp = /(https?:\/\/)?(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig;
        //http://stackoverflow.com/questions/13286785/get-video-id-from-vimeo-url
        var vmUrlRegExp = /(https?:\/\/)?(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
        //#todo
        //let ch9UrlRegExp: RegExp = /http?/;
        if (url && url.match(ytUrlRegExp)) {
            console.log('youtube url matched');
            return video_details_enums_1.VideoOriginEnum.YouTube;
        }
        if (url && url.match(vmUrlRegExp)) {
            console.log('vimeo url matched');
            return video_details_enums_1.VideoOriginEnum.Vimeo;
        }
        // if (url.match(ch9UrlRegExp)) {
        //     console.log('channel9 url matched');            
        //     return VideoOrigin.Channel9;
        // }
        return video_details_enums_1.VideoOriginEnum.Unknown;
    };
    return VideoValidationService;
}());
VideoValidationService = __decorate([
    core_1.Injectable()
], VideoValidationService);
exports.VideoValidationService = VideoValidationService;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var oEmbedVimeo = (function () {
    function oEmbedVimeo() {
        this.providerName = "Vimeo";
    }
    oEmbedVimeo.prototype.matchProviderByUrl = function (url) {
        //http://stackoverflow.com/questions/13286785/get-video-id-from-vimeo-url
        var vmUrlRegExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
        return url.match(vmUrlRegExp) ? true : false;
    };
    oEmbedVimeo.prototype.getContentUrl = function (url) {
        var oEmbedBaseUrl = "https://vimeo.com/api/oembed.json?url=";
        var finalUrl = oEmbedBaseUrl + url;
        return finalUrl;
    };
    return oEmbedVimeo;
}());
exports.oEmbedVimeo = oEmbedVimeo;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var oEmbedYouTube = (function () {
    function oEmbedYouTube() {
        this.providerName = "YouTube";
    }
    oEmbedYouTube.prototype.matchProviderByUrl = function (url) {
        //http://stackoverflow.com/questions/5830387/how-to-find-all-youtube-video-ids-in-a-string-using-a-regex/5831191#5831191
        var ytUrlRegExp = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig;
        return (url.match(ytUrlRegExp)) ? true : false;
    };
    oEmbedYouTube.prototype.getContentUrl = function (url) {
        var oEmbedBaseUrl = "http://www.youtube.com/oembed?url=";
        var finalUrl = oEmbedBaseUrl + url;
        return finalUrl;
    };
    return oEmbedYouTube;
}());
exports.oEmbedYouTube = oEmbedYouTube;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(10));
__export(__webpack_require__(8));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(7);
var videos_components_1 = __webpack_require__(37);
var routes = [
    { path: 'video-list', component: videos_components_1.VideoListComponent },
    { path: 'video-details', component: videos_components_1.VideoDetailsComponent },
    { path: 'video-details/:id', component: videos_components_1.VideoDetailsComponent }
];
var VideosRoutingModule = (function () {
    function VideosRoutingModule() {
    }
    return VideosRoutingModule;
}());
VideosRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], VideosRoutingModule);
exports.VideosRoutingModule = VideosRoutingModule;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var common_module_1 = __webpack_require__(26);
var forms_1 = __webpack_require__(23);
var angular2_universal_1 = __webpack_require__(4);
var video_list_component_1 = __webpack_require__(10);
var video_details_component_1 = __webpack_require__(8);
var videos_routing_module_1 = __webpack_require__(38);
var video_services_1 = __webpack_require__(5);
var VideosModule = (function () {
    function VideosModule() {
    }
    return VideosModule;
}());
VideosModule = __decorate([
    core_1.NgModule({
        imports: [
            angular2_universal_1.UniversalModule,
            common_module_1.CommonModule,
            videos_routing_module_1.VideosRoutingModule,
            forms_1.FormsModule
        ],
        declarations: [
            video_list_component_1.VideoListComponent,
            video_details_component_1.VideoDetailsComponent
        ],
        providers: [video_services_1.VideoService, video_services_1.oEmbedService]
        //,     exports: [RouterModule],
    })
], VideosModule);
exports.VideosModule = VideosModule;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n", ""]);

// exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-3'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='col-sm-9 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular 2 component.</p>\r\n\r\n<p>Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button (click)=\"incrementCounter()\">Increment</button>\r\n";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<h1>Videos Sample</h1>\r\n\r\n<p>This component shows a simple fetching of Web API data.</p>\r\n\r\n<p *ngIf=\"!videos\"><em>Loading...</em></p>\r\n\r\n<table class='table' *ngIf=\"videos\">\r\n    <thead>\r\n        <tr>\r\n            <th>Created</th>\r\n            <th>Category</th>\r\n            <th>Name</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let video of videos\">\r\n            <td>{{ video.createdDate }}</td>\r\n            <td>{{ video.category }}</td>\r\n            <td>{{ video.name }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<h1>Hello, world!</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\r\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\r\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\r\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\r\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\r\n</ul>\r\n";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/home']\">DotNetVideosCore</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/home']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/counter']\">\r\n                        <span class='glyphicon glyphicon-education'></span> Counter\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/fetch-data']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/video-list']\">\r\n                        <span class='glyphicon glyphicon-film'></span> Videos\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<h3>Video Details</h3>\r\n<div *ngIf=\"video\">\r\n<form #form=\"ngForm\" novalidate (submit)=\"onSubmit(form)\" >    \r\n    <fieldset class=\"form-group\">\r\n        <label for=\"videoTitle\">Title: </label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"video.title\" name=\"video.title\" placeholder=\"Title\" id=\"videoTitle\" />        \r\n    </fieldset>\r\n    <fieldset class=\"form-group\">\r\n        <label for=\"videoUrl\">Url:</label>\r\n        <input type=\"text\" class=\"form-control\" [ngModel]=\"video.url\" (ngModelChange)=\"validateVideoUrl($event)\" name=\"video.url\" placeholder=\"Url\" id=\"videoUrl\" />\r\n    </fieldset>    \r\n    <fieldset class=\"form-group\">\r\n        <label for=\"videoOrigin\">Origin:</label>\r\n       <select class=\"form-control\" [(ngModel)]=\"video.videoOrigin\" name=\"video.videoOrigin\">\r\n                <option *ngFor=\"let origin of videoOrigins | keys\" [value]=\"origin.key\">{{origin.value}}</option>\r\n            </select>\r\n    </fieldset>\r\n    <fieldset class=\"form-group\">\r\n        <label>Thumbnail Image:</label>\r\n        <img [src] = \"video.thumbUrl\" />\r\n    </fieldset>\r\n    <button class=\"btn btn-primary\" type=\"submit\">Ok</button>\r\n    {{ form.value | json}}\r\n    {{ video | json }}\r\n</form>\r\n</div>\r\n<div class=\"container\" [innerHtml]=\"preview?.html | safe: 'html'\">\r\n\r\n    <hr />\r\n    <!--<div *ngIf=\"displayMode === 'watch'\">\r\n        <video-watch [video]=\"videoDetails\">\r\n        </video-watch>\r\n    </div>\r\n    <div *ngIf=\"displayMode !== 'watch'\">\r\n        <form [ngFormModel]=\"videoForm\" id=\"video-details-add\" *ngIf=\"videoDetails\" (ngSubmit)=\"saveVideo(videoForm.value)\">\r\n            \r\n            <fieldset class=\"form-group\">\r\n                <label>Rating: </label>\r\n                <input class=\"form-control\" placeholder=\"rating\" [(ngModel)]=\"videoDetails.rating\" ngControl=\"rating\" />\r\n                <span *ngIf=\"!videoForm.controls.rating?.valid\">\r\n                The rating must be between 0 and 5!\r\n            </span>\r\n            </fieldset>\r\n            <fieldset class=\"form-group\">\r\n                <label>url: </label>\r\n                <input class=\"form-control\" placeholder=\"url\" [(ngModel)]=\"videoDetails.url\" ngControl=\"url\" />\r\n                <ul *ngIf=\"!videoForm.controls.url?.valid\">\r\n                    The URL is invalid. Possible issues:<br />\r\n                    <li *ngIf=\"videoForm.controls.url?.emptyUrl\">\r\n                        The URL cannot be empty\r\n                    </li>\r\n                    <li *ngIf=\"videoForm.controls.url?.invalidUrl\">\r\n                        The URL format was not recognized by the system.\r\n                    </li>\r\n                </ul>\r\n            </fieldset>\r\n            <fieldset>\r\n                <label for=\"VideoOrigin\">Source:</label>\r\n                <select class=\"form-control\" [(ngModel)]=\"videoDetails.videoOrigin\" ngControl=\"videoOrigin\">\r\n                <option *ngFor=\"let origin of videoOrigins | keys\" [value]=\"origin.key\">{{origin.value}}</option>\r\n            </select>\r\n            </fieldset>\r\n\r\n            <button type=\"submit\" class=\"ui button\">Submit</button>\r\n        </form>\r\n    </div>-->\r\n</div>";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"videos\">\r\n    <!--(click)=\"onVideoSelected(video)\"-->\r\n\r\n    <h1> Hello from video-list component </h1>\r\n    <ul>\r\n        <li *ngFor=\"let video of videos | async\">\r\n            <!--<div *ngIf=\"video.Url\">-->\r\n            <a class=\"img-thumbnail\" [routerLink]=\"['/video-details/', video.id]\">\r\n                <img [src]=\"video.thumbUrl\"  /> <br /> \r\n                {{video.title}} <br /> ({{video.id}})\r\n                </a>\r\n    <!--</div>-->\r\n</li>\r\n\r\n\r\n</ul>\r\n\r\n<div class=\"row\">\r\n    <a [routerLink]=\"['/video-details/', 0]\">Add\r\n                        </a>\r\n    <!--<div class=\"col-sm-6 col-md-3\" *ngFor=\" let video of videos \">\r\n            <div class=\"thumbnail\">\r\n                <p *ngIf=\"!videos\"><em>Loading...</em></p>-->\r\n\r\n    <!--<table class='table'>\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Created</th>\r\n                            <th>Category</th>\r\n                            <th>Name</th>\r\n                            <th>Edit</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let video of videos\">\r\n                            <td>{{ video.createdDate }}</td>\r\n                            <td>{{ video.category }}</td>\r\n                            <td>{{ video.name }}</td>\r\n                            <td><a [routerLink]=\"['/video-details', video.name]\">Details </a></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>-->\r\n\r\n\r\n    <!--<img *ngIf=\"video.thumbUrl\" [src]=\"video.thumbUrl\" />\r\n                <div class=\"caption\">\r\n                    <h3>\r\n                        <a [routerLink] = \"['Video', {mode: 'watch', id: video._id}]\">\r\n                        {{video.title}}\r\n                        </a>\r\n                        </h3>\r\n                    <p>Length: {{video.length}}</p>\r\n                    <p>Watched: {{video.watchedCount}}</p>\r\n                    <p>Rating: {{video.rating}}</p>\r\n                    <p><a [href]=\"video.localUrl\" class=\"btn btn-primary\" role=\"button\">Watch</a> <a [href]=\"video.url\" class=\"btn btn-default\"\r\n                            role=\"button\">Watch</a></p>\r\n                </div>-->\r\n    <!--</div>\r\n        </div>-->\r\n</div>\r\n</div>";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(2);
var catch_1 = __webpack_require__(68);
Observable_1.Observable.prototype.catch = catch_1._catch;
Observable_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(2);
var debounceTime_1 = __webpack_require__(55);
Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(2);
var distinctUntilChanged_1 = __webpack_require__(56);
Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(2);
var do_1 = __webpack_require__(57);
Observable_1.Observable.prototype.do = do_1._do;
Observable_1.Observable.prototype._do = do_1._do;
//# sourceMappingURL=do.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(2);
var switchMap_1 = __webpack_require__(58);
Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(6);
var async_1 = __webpack_require__(63);
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
}
exports.debounceTime = debounceTime;
var DebounceTimeOperator = (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceTimeSubscriber = (function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        _super.call(this, destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            this.destination.next(this.lastValue);
            this.lastValue = null;
            this.hasValue = false;
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(6);
var tryCatch_1 = __webpack_require__(69);
var errorObject_1 = __webpack_require__(73);
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
}
exports.distinctUntilChanged = distinctUntilChanged;
var DistinctUntilChangedOperator = (function () {
    function DistinctUntilChangedOperator(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DistinctUntilChangedSubscriber = (function (_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.hasKey = false;
        if (typeof compare === 'function') {
            this.compare = compare;
        }
    }
    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function (value) {
        var keySelector = this.keySelector;
        var key = value;
        if (keySelector) {
            key = tryCatch_1.tryCatch(this.keySelector)(value);
            if (key === errorObject_1.errorObject) {
                return this.destination.error(errorObject_1.errorObject.e);
            }
        }
        var result = false;
        if (this.hasKey) {
            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
            if (result === errorObject_1.errorObject) {
                return this.destination.error(errorObject_1.errorObject.e);
            }
        }
        else {
            this.hasKey = true;
        }
        if (Boolean(result) === false) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(6);
/* tslint:enable:max-line-length */
/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 *
 * <span class="informal">Intercepts each emission on the source and runs a
 * function, but returns an output which is identical to the source.</span>
 *
 * <img src="./img/do.png" width="100%">
 *
 * Returns a mirrored Observable of the source Observable, but modified so that
 * the provided Observer is called to perform a side effect for every value,
 * error, and completion emitted by the source. Any errors that are thrown in
 * the aforementioned Observer or handlers are safely sent down the error path
 * of the output Observable.
 *
 * This operator is useful for debugging your Observables for the correct values
 * or performing other side effects.
 *
 * Note: this is different to a `subscribe` on the Observable. If the Observable
 * returned by `do` is not subscribed, the side effects specified by the
 * Observer will never happen. `do` therefore simply spies on existing
 * execution, it does not trigger an execution to happen like `subscribe` does.
 *
 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks
 *   .do(ev => console.log(ev))
 *   .map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link map}
 * @see {@link subscribe}
 *
 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
 * callback for `next`.
 * @param {function} [error] Callback for errors in the source.
 * @param {function} [complete] Callback for the completion of the source.
 * @return {Observable} An Observable identical to the source, but runs the
 * specified Observer or callback(s) for each item.
 * @method do
 * @name do
 * @owner Observable
 */
function _do(nextOrObserver, error, complete) {
    return this.lift(new DoOperator(nextOrObserver, error, complete));
}
exports._do = _do;
var DoOperator = (function () {
    function DoOperator(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    DoOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DoSubscriber = (function (_super) {
    __extends(DoSubscriber, _super);
    function DoSubscriber(destination, nextOrObserver, error, complete) {
        _super.call(this, destination);
        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
        safeSubscriber.syncErrorThrowable = true;
        this.add(safeSubscriber);
        this.safeSubscriber = safeSubscriber;
    }
    DoSubscriber.prototype._next = function (value) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.next(value);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.next(value);
        }
    };
    DoSubscriber.prototype._error = function (err) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.error(err);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.error(err);
        }
    };
    DoSubscriber.prototype._complete = function () {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.complete();
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.complete();
        }
    };
    return DoSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=do.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(70);
var subscribeToResult_1 = __webpack_require__(72);
/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project, resultSelector) {
    return this.lift(new SwitchMapOperator(project, resultSelector));
}
exports.switchMap = switchMap;
var SwitchMapOperator = (function () {
    function SwitchMapOperator(project, resultSelector) {
        this.project = project;
        this.resultSelector = resultSelector;
    }
    SwitchMapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchMapOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchMapSubscriber = (function (_super) {
    __extends(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project, resultSelector) {
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.index = 0;
    }
    SwitchMapSubscriber.prototype._next = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result, value, index);
    };
    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    SwitchMapSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (this.resultSelector) {
            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            this.destination.next(innerValue);
        }
    };
    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
        var result;
        try {
            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return SwitchMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=switchMap.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * Converts an Observable sequence to a ES2015 compliant promise.
 *
 * @example
 * // Using normal ES2015
 * let source = Rx.Observable
 *   .just(42)
 *   .toPromise();
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * // Rejected Promise
 * // Using normal ES2015
 * let source = Rx.Observable
 *   .throw(new Error('woops'))
 *   .toPromise();
 *
 * source
 *   .then((value) => console.log('Value: %s', value))
 *   .catch((err) => console.log('Error: %s', err));
 * // => Error: Error: woops
 *
 * // Setting via the config
 * Rx.config.Promise = RSVP.Promise;
 *
 * let source = Rx.Observable
 *   .of(42)
 *   .toPromise();
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * // Setting via the method
 * let source = Rx.Observable
 *   .just(42)
 *   .toPromise(RSVP.Promise);
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * @param PromiseCtor promise The constructor of the promise. If not provided,
 * it will look for a constructor first in Rx.config.Promise then fall back to
 * the native Promise constructor if available.
 * @return {Promise<T>} An ES2015 compatible promise with the last value from
 * the observable sequence.
 * @method toPromise
 * @owner Observable
 */
function toPromise(PromiseCtor) {
    var _this = this;
    if (!PromiseCtor) {
        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
            PromiseCtor = root_1.root.Rx.config.Promise;
        }
        else if (root_1.root.Promise) {
            PromiseCtor = root_1.root.Promise;
        }
    }
    if (!PromiseCtor) {
        throw new Error('no Promise impl found');
    }
    return new PromiseCtor(function (resolve, reject) {
        var value;
        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
    });
}
exports.toPromise = toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(71);
/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__(15);
var Action_1 = __webpack_require__(60);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // clear the interval id
        return root_1.root.clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.delay = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scheduler_1 = __webpack_require__(49);
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AsyncAction_1 = __webpack_require__(61);
var AsyncScheduler_1 = __webpack_require__(62);
/**
 *
 * Async Scheduler
 *
 * <span class="informal">Schedule task as if you used setTimeout(task, duration)</span>
 *
 * `async` scheduler schedules tasks asynchronously, by putting them on the JavaScript
 * event loop queue. It is best used to delay tasks in time or to schedule tasks repeating
 * in intervals.
 *
 * If you just want to "defer" task, that is to perform it right after currently
 * executing synchronous code ends (commonly achieved by `setTimeout(deferredTask, 0)`),
 * better choice will be the {@link asap} scheduler.
 *
 * @example <caption>Use async scheduler to delay task</caption>
 * const task = () => console.log('it works!');
 *
 * Rx.Scheduler.async.schedule(task, 2000);
 *
 * // After 2 seconds logs:
 * // "it works!"
 *
 *
 * @example <caption>Use async scheduler to repeat task in intervals</caption>
 * function task(state) {
 *   console.log(state);
 *   this.schedule(state + 1, 1000); // `this` references currently executing Action,
 *                                   // which we reschedule with new state and delay
 * }
 *
 * Rx.Scheduler.async.schedule(task, 3000, 0);
 *
 * // Logs:
 * // 0 after 3s
 * // 1 after 4s
 * // 2 after 5s
 * // 3 after 6s
 *
 * @static true
 * @name async
 * @owner Scheduler
 */
exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
//# sourceMappingURL=async.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports) {

exports = module.exports = SemVer;

// The debug function is excluded entirely from the minified version.
/* nomin */ var debug;
/* nomin */ if (typeof process === 'object' &&
    /* nomin */ process.env &&
    /* nomin */ process.env.NODE_DEBUG &&
    /* nomin */ /\bsemver\b/i.test(process.env.NODE_DEBUG))
  /* nomin */ debug = function() {
    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
    /* nomin */ args.unshift('SEMVER');
    /* nomin */ console.log.apply(console, args);
    /* nomin */ };
/* nomin */ else
  /* nomin */ debug = function() {};

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0';

var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var R = 0;

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')';

var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')';

var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')';


// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';


// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?';

src[FULL] = '^' + FULLPLAIN + '$';

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?';

var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';

var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)';

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?';

var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?';

var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';

var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';

var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++;
src[LONECARET] = '(?:\\^)';

var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';

var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';


// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3';


// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$';

var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$';

// Star ranges basically just allow anything at all.
var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*';

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i]);
  if (!re[i])
    re[i] = new RegExp(src[i]);
}

exports.parse = parse;
function parse(version, loose) {
  if (version instanceof SemVer)
    return version;

  if (typeof version !== 'string')
    return null;

  if (version.length > MAX_LENGTH)
    return null;

  var r = loose ? re[LOOSE] : re[FULL];
  if (!r.test(version))
    return null;

  try {
    return new SemVer(version, loose);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;
function valid(version, loose) {
  var v = parse(version, loose);
  return v ? v.version : null;
}


exports.clean = clean;
function clean(version, loose) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, loose) {
  if (version instanceof SemVer) {
    if (version.loose === loose)
      return version;
    else
      version = version.version;
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH)
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')

  if (!(this instanceof SemVer))
    return new SemVer(version, loose);

  debug('SemVer', version, loose);
  this.loose = loose;
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

  if (!m)
    throw new TypeError('Invalid Version: ' + version);

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
    throw new TypeError('Invalid major version')

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
    throw new TypeError('Invalid minor version')

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
    throw new TypeError('Invalid patch version')

  // numberify any prerelease numeric ids
  if (!m[4])
    this.prerelease = [];
  else
    this.prerelease = m[4].split('.').map(function(id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id;
        if (num >= 0 && num < MAX_SAFE_INTEGER)
          return num;
      }
      return id;
    });

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function() {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length)
    this.version += '-' + this.prerelease.join('.');
  return this.version;
};

SemVer.prototype.toString = function() {
  return this.version;
};

SemVer.prototype.compare = function(other) {
  debug('SemVer.compare', this.version, this.loose, other);
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length)
    return -1;
  else if (!this.prerelease.length && other.prerelease.length)
    return 1;
  else if (!this.prerelease.length && !other.prerelease.length)
    return 0;

  var i = 0;
  do {
    var a = this.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);
    if (a === undefined && b === undefined)
      return 0;
    else if (b === undefined)
      return 1;
    else if (a === undefined)
      return -1;
    else if (a === b)
      continue;
    else
      return compareIdentifiers(a, b);
  } while (++i);
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function(release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;
    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0)
        this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
        this.major++;
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0)
        this.minor++;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0)
        this.patch++;
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0)
        this.prerelease = [0];
      else {
        var i = this.prerelease.length;
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++;
            i = -2;
          }
        }
        if (i === -1) // didn't increment anything
          this.prerelease.push(0);
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1]))
            this.prerelease = [identifier, 0];
        } else
          this.prerelease = [identifier, 0];
      }
      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }
  this.format();
  this.raw = this.version;
  return this;
};

exports.inc = inc;
function inc(version, release, loose, identifier) {
  if (typeof(loose) === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;
function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    if (v1.prerelease.length || v2.prerelease.length) {
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return 'pre'+key;
          }
        }
      }
      return 'prerelease';
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return key;
        }
      }
    }
  }
}

exports.compareIdentifiers = compareIdentifiers;

var numeric = /^[0-9]+$/;
function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return (anum && !bnum) ? -1 :
         (bnum && !anum) ? 1 :
         a < b ? -1 :
         a > b ? 1 :
         0;
}

exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;
function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;
function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;
function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;
function compare(a, b, loose) {
  return new SemVer(a, loose).compare(b);
}

exports.compareLoose = compareLoose;
function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;
function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;
function sort(list, loose) {
  return list.sort(function(a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;
function rsort(list, loose) {
  return list.sort(function(a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;
function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;
function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;
function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;
function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;
function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;
function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;
function cmp(a, op, b, loose) {
  var ret;
  switch (op) {
    case '===':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a === b;
      break;
    case '!==':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a !== b;
      break;
    case '': case '=': case '==': ret = eq(a, b, loose); break;
    case '!=': ret = neq(a, b, loose); break;
    case '>': ret = gt(a, b, loose); break;
    case '>=': ret = gte(a, b, loose); break;
    case '<': ret = lt(a, b, loose); break;
    case '<=': ret = lte(a, b, loose); break;
    default: throw new TypeError('Invalid operator: ' + op);
  }
  return ret;
}

exports.Comparator = Comparator;
function Comparator(comp, loose) {
  if (comp instanceof Comparator) {
    if (comp.loose === loose)
      return comp;
    else
      comp = comp.value;
  }

  if (!(this instanceof Comparator))
    return new Comparator(comp, loose);

  debug('comparator', comp, loose);
  this.loose = loose;
  this.parse(comp);

  if (this.semver === ANY)
    this.value = '';
  else
    this.value = this.operator + this.semver.version;

  debug('comp', this);
}

var ANY = {};
Comparator.prototype.parse = function(comp) {
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m)
    throw new TypeError('Invalid comparator: ' + comp);

  this.operator = m[1];
  if (this.operator === '=')
    this.operator = '';

  // if it literally is just '>' or '' then allow anything.
  if (!m[2])
    this.semver = ANY;
  else
    this.semver = new SemVer(m[2], this.loose);
};

Comparator.prototype.toString = function() {
  return this.value;
};

Comparator.prototype.test = function(version) {
  debug('Comparator.test', version, this.loose);

  if (this.semver === ANY)
    return true;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  return cmp(version, this.operator, this.semver, this.loose);
};


exports.Range = Range;
function Range(range, loose) {
  if ((range instanceof Range) && range.loose === loose)
    return range;

  if (!(this instanceof Range))
    return new Range(range, loose);

  this.loose = loose;

  // First, split based on boolean or ||
  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
    return this.parseRange(range.trim());
  }, this).filter(function(c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.format = function() {
  this.range = this.set.map(function(comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function() {
  return this.range;
};

Range.prototype.parseRange = function(range) {
  var loose = this.loose;
  range = range.trim();
  debug('range', range, loose);
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range);
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[COMPARATORTRIM]);

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace);

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace);

  // normalize spaces
  range = range.split(/\s+/).join(' ');

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function(comp) {
    return parseComparator(comp, loose);
  }).join(' ').split(/\s+/);
  if (this.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function(comp) {
      return !!comp.match(compRe);
    });
  }
  set = set.map(function(comp) {
    return new Comparator(comp, loose);
  });

  return set;
};

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators(range, loose) {
  return new Range(range, loose).set.map(function(comp) {
    return comp.map(function(c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator(comp, loose) {
  debug('comp', comp);
  comp = replaceCarets(comp, loose);
  debug('caret', comp);
  comp = replaceTildes(comp, loose);
  debug('tildes', comp);
  comp = replaceXRanges(comp, loose);
  debug('xrange', comp);
  comp = replaceStars(comp, loose);
  debug('stars', comp);
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceTilde(comp, loose);
  }).join(' ');
}

function replaceTilde(comp, loose) {
  var r = loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p))
      // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    else if (pr) {
      debug('replaceTilde pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      ret = '>=' + M + '.' + m + '.' + p + pr +
            ' <' + M + '.' + (+m + 1) + '.0';
    } else
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0';

    debug('tilde return', ret);
    return ret;
  });
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceCaret(comp, loose);
  }).join(' ');
}

function replaceCaret(comp, loose) {
  debug('caret', comp, loose);
  var r = loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p)) {
      if (M === '0')
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      else
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
    } else if (pr) {
      debug('replaceCaret pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p + pr +
              ' <' + (+M + 1) + '.0.0';
    } else {
      debug('no pr');
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0';
    }

    debug('caret return', ret);
    return ret;
  });
}

function replaceXRanges(comp, loose) {
  debug('replaceXRanges', comp, loose);
  return comp.split(/\s+/).map(function(comp) {
    return replaceXRange(comp, loose);
  }).join(' ');
}

function replaceXRange(comp, loose) {
  comp = comp.trim();
  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX)
      gtlt = '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // replace X with 0
      if (xm)
        m = 0;
      if (xp)
        p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else if (xp) {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';
        if (xm)
          M = +M + 1;
        else
          m = +m + 1;
      }

      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    debug('xRange return', ret);

    return ret;
  });
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars(comp, loose) {
  debug('replaceStars', comp, loose);
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '');
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace($0,
                       from, fM, fm, fp, fpr, fb,
                       to, tM, tm, tp, tpr, tb) {

  if (isX(fM))
    from = '';
  else if (isX(fm))
    from = '>=' + fM + '.0.0';
  else if (isX(fp))
    from = '>=' + fM + '.' + fm + '.0';
  else
    from = '>=' + from;

  if (isX(tM))
    to = '';
  else if (isX(tm))
    to = '<' + (+tM + 1) + '.0.0';
  else if (isX(tp))
    to = '<' + tM + '.' + (+tm + 1) + '.0';
  else if (tpr)
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
  else
    to = '<=' + to;

  return (from + ' ' + to).trim();
}


// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function(version) {
  if (!version)
    return false;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version))
      return true;
  }
  return false;
};

function testSet(set, version) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version))
      return false;
  }

  if (version.prerelease.length) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var i = 0; i < set.length; i++) {
      debug(set[i].semver);
      if (set[i].semver === ANY)
        continue;

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch)
          return true;
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false;
  }

  return true;
}

exports.satisfies = satisfies;
function satisfies(version, range, loose) {
  try {
    range = new Range(range, loose);
  } catch (er) {
    return false;
  }
  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;
function maxSatisfying(versions, range, loose) {
  return versions.filter(function(version) {
    return satisfies(version, range, loose);
  }).sort(function(a, b) {
    return rcompare(a, b, loose);
  })[0] || null;
}

exports.minSatisfying = minSatisfying;
function minSatisfying(versions, range, loose) {
  return versions.filter(function(version) {
    return satisfies(version, range, loose);
  }).sort(function(a, b) {
    return compare(a, b, loose);
  })[0] || null;
}

exports.validRange = validRange;
function validRange(range, loose) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, loose).range || '*';
  } catch (er) {
    return null;
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr(version, range, loose) {
  return outside(version, range, '<', loose);
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr(version, range, loose) {
  return outside(version, range, '>', loose);
}

exports.outside = outside;
function outside(version, range, hilo, loose) {
  version = new SemVer(version, loose);
  range = new Range(range, loose);

  var gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, loose)) {
    return false;
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];

    var high = null;
    var low = null;

    comparators.forEach(function(comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, loose)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, loose)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}

exports.prerelease = prerelease;
function prerelease(version, loose) {
  var parsed = parse(version, loose);
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null;
}


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(40);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(41);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(127);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(129);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(141);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(26);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(28);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(32);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(57);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(21);
__webpack_require__(18);
__webpack_require__(20);
var aspnet_prerendering_1 = __webpack_require__(22);
var core_1 = __webpack_require__(1);
var angular2_universal_1 = __webpack_require__(4);
var app_module_1 = __webpack_require__(19);
core_1.enableProdMode();
var platform = angular2_universal_1.platformNodeDynamic();
exports.default = aspnet_prerendering_1.createServerRenderer(function (params) {
    return new Promise(function (resolve, reject) {
        var requestZone = Zone.current.fork({
            name: 'angular-universal request',
            properties: {
                baseUrl: '/',
                requestUrl: params.url,
                originUrl: params.origin,
                preboot: false,
                document: '<app></app>'
            },
            onHandleError: function (parentZone, currentZone, targetZone, error) {
                // If any error occurs while rendering the module, reject the whole operation
                reject(error);
                return true;
            }
        });
        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
            resolve({ html: html });
        }, reject);
    });
});


/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTQ0MGM1OWIyNGQ4NDI3NmM0MWMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvYnVuZGxlcy9jb3JlLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmFibGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9idW5kbGVzL2h0dHAudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby92aWRlby5zZXJ2aWNlcy50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvU3Vic2NyaWJlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvYnVuZGxlcy9yb3V0ZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby1kZXRhaWxzL3ZpZGVvLWRldGFpbHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvLWRldGFpbHMvdmlkZW8tZGV0YWlscy5lbnVtcy50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby1saXN0L3ZpZGVvLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvLW9lbWJlZC92aWRlby1vZW1iZWQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL21hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL1N1YmplY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvdXRpbC9yb290LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvbXBpbGVyL2J1bmRsZXMvY29tcGlsZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXIyLXVuaXZlcnNhbC1wYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy96b25lLmpzL2Rpc3Qvem9uZS1ub2RlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMvbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9+L0Bhbmd1bGFyL2Zvcm1zL2J1bmRsZXMvZm9ybXMudW1kLmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21tb24vY29tbW9uLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcGlwZXMvZW51bS5rZXlzLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9waXBlcy9zYWZlLmh0bWwucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby1kZXRhaWxzL3ZpZGVvLWRldGFpbHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby1kZXRhaWxzL3ZpZGVvLnZhbGlkYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby1vZW1iZWQvb2VtYmVkLXZpbWVvLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvLW9lbWJlZC9vZW1iZWQteW91dHViZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby92aWRlb3MuY29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlb3Mtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC92aWRlb3MvdmlkZW9zLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC92aWRlb3MvdmlkZW8tZGV0YWlscy92aWRlby1kZXRhaWxzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9+L3J4anMvU2NoZWR1bGVyLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL2FkZC9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvYWRkL29wZXJhdG9yL2RvLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9vcGVyYXRvci9kZWJvdW5jZVRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9vcGVyYXRvci9kby5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvb3BlcmF0b3Ivc3dpdGNoTWFwLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9vcGVyYXRvci90b1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3NjaGVkdWxlci9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3NjaGVkdWxlci9Bc3luY0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvc2NoZWR1bGVyL0FzeW5jU2NoZWR1bGVyLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9zY2hlZHVsZXIvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zZW12ZXIvc2VtdmVyLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzPzk4MTciLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz8zOWE3Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvb3BlcmF0b3IvY2F0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy91dGlsL3RyeUNhdGNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvT3V0ZXJTdWJzY3JpYmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvU3Vic2NyaXB0aW9uLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL3V0aWwvZXJyb3JPYmplY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9ib290LXNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7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QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxnRDs7Ozs7OztBQzNHQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVDtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOEI7Ozs7Ozs7QUNoSEE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxhQUFhO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNULFNBQVM7QUFDVCxTQUFTO0FBQ1QsU0FBUztBQUNUO0FBQ0EsV0FBVyxvREFBb0Q7QUFDL0Q7QUFDQTtBQUNBLFdBQVcsb0ZBQW9GO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxxQzs7Ozs7OztBQzNJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGtCQUFrQixFQUFFLGtCQUFrQixvQkFBb0IsRUFBRSxlQUFlLHVCQUF1QixFQUFFO0FBQzFJLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUM7Ozs7Ozs7QUN2RUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxnQkFBZ0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxrQzs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFdBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsdUM7Ozs7Ozs7QUM3SUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGtDQUFrQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQzs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsV0FBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7QUM5Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQsc0NBQXNDO0FBQ3RDLG9DQUFvQztBQUNwQyxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pyQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7OztBQ1BBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7QUNBQSx3QkFBc0M7QUFDdEMsd0JBQWtDO0FBQ2xDLHdCQUFpQjtBQUNqQixvREFBeUU7QUFDekUsb0NBQStDO0FBQy9DLGtEQUF5RDtBQUN6RCwyQ0FBNkM7QUFFN0MscUJBQWMsRUFBRSxDQUFDO0FBQ2pCLElBQU0sUUFBUSxHQUFHLHdDQUFtQixFQUFFLENBQUM7QUFFdkMsa0JBQWUsMENBQW9CLENBQUMsZ0JBQU07SUFDdEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFlLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDN0MsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDbEMsSUFBSSxFQUFFLDJCQUEyQjtZQUNqQyxVQUFVLEVBQUU7Z0JBQ1IsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osVUFBVSxFQUFFLE1BQU0sQ0FBQyxHQUFHO2dCQUN0QixTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU07Z0JBQ3hCLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFFBQVEsRUFBRSxhQUFhO2FBQzFCO1lBQ0QsYUFBYSxFQUFFLFVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsS0FBSztnQkFDdEQsNkVBQTZFO2dCQUM3RSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQWtCLGNBQU0sZUFBUSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBSTtZQUN4RixPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDZixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU0NDBjNTliMjRkODQyNzZjNDFjIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi92ZW5kb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIuL3ZlbmRvclwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmFibGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9idW5kbGVzL2h0dHAudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg3MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgKiBmcm9tICcuLi92aWRlby1kZXRhaWxzL3ZpZGVvLWRldGFpbHMuc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4uL3ZpZGVvLWRldGFpbHMvdmlkZW8udmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi4vdmlkZW8tb2VtYmVkL3ZpZGVvLW9lbWJlZC5zZXJ2aWNlJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvL3ZpZGVvLnNlcnZpY2VzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvU3Vic2NyaWJlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNjgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvYnVuZGxlcy9yb3V0ZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVzLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcblxyXG5pbXBvcnQgeyBJVmlkZW8sIG9FbWJlZCB9IGZyb20gJy4uL3ZpZGVvL3ZpZGVvLmludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBWaWRlb1NlcnZpY2UsIG9FbWJlZFNlcnZpY2UgfSBmcm9tICcuLi92aWRlby92aWRlby5zZXJ2aWNlcyc7XHJcblxyXG5pbXBvcnQgeyBWaWRlb09yaWdpbkVudW0gfSBmcm9tICcuL3ZpZGVvLWRldGFpbHMuZW51bXMnO1xyXG5pbXBvcnQgeyBFbnVtS2V5c1BpcGUgfSBmcm9tICcuLi8uLi9waXBlcy9lbnVtLmtleXMucGlwZSc7XHJcbmltcG9ydCB7IFNhZmVQaXBlIH0gZnJvbSAnLi4vLi4vcGlwZXMvc2FmZS5odG1sLnBpcGUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoXHJcbiAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6ICd2aWRlby1kZXRhaWxzJyxcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi92aWRlby1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICAgICAgc3R5bGVzOiBbYFxyXG4gIFx0dWwgeyBwYWRkaW5nOjA7IHdpZHRoOjQ4MDsgbWFyZ2luOjIwcHggYXV0bzsgbGlzdC1zdHlsZS10eXBlOiBub25lO31cclxuICBcdGxpIHsgZGlzcGxheTppbmxpbmU7fVxyXG4gICAgICAgIC50bnsgXHJcblx0ICAgbWFyZ2luOjJweCAwcHg7XHJcblx0ICAgYm94LXNoYWRvdzojOTk5IDFweCAxcHggM3B4IDFweDsgXHJcblx0ICAgY3Vyc29yOiBwb2ludGVyIFxyXG4gICAgICAgIH1cclxuICBcdC5tb2RhbC1jb250ZW50IHtcclxuXHQgICAgd2lkdGg6IDY3MHB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG4gIGBdXHJcbiAgICB9KVxyXG5leHBvcnQgY2xhc3MgVmlkZW9EZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwcml2YXRlIHZpZGVvOiBJVmlkZW87XHJcbiAgICBwcml2YXRlIHZpZGVvT3JpZ2lucyA9IFZpZGVvT3JpZ2luRW51bTtcclxuICAgIHByaXZhdGUgdmlkZW9VcmwgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgICBwcml2YXRlIHByZXZpZXc6IG9FbWJlZDtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgdmlkZW9TZXJ2aWNlOiBWaWRlb1NlcnZpY2UsIHByaXZhdGUgb0VtYmVkU2VydmljZTogb0VtYmVkU2VydmljZSkgeyB9IFxyXG5cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtc1xyXG4gICAgICAgICAgICAuc3dpdGNoTWFwKChwYXJhbXM6IFBhcmFtcykgPT4gdGhpcy52aWRlb1NlcnZpY2UuR2V0VmlkZW8ocGFyYW1zWydpZCddKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgodmlkZW86IElWaWRlbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlbyA9IHZpZGVvO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3VmlkZW8odmlkZW8udXJsLCB2aWRlby52aWRlb09yaWdpbi50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy52aWRlb1VybFxyXG4gICAgICAgICAgICAuZGVib3VuY2VUaW1lKDEwMDApXHJcbiAgICAgICAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodXJsID0+IHRoaXMucHJldmlld1ZpZGVvKHVybCwgXCJcIikpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL3VzaW5nIFN1YmplY3Q8c3RyaW5nPiB0byBkZWJvdW5jZSB1cmwgdmFsaWRhdGlvbi92aWRlbyBwcmV2aWV3XHJcbiAgICB2YWxpZGF0ZVZpZGVvVXJsKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnZpZGVvVXJsLm5leHQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZpZXdWaWRlbyh1cmwgOiBzdHJpbmcsIHByb3ZpZGVyTmFtZTogc3RyaW5nKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlByZXZpZXcgdmlkZW8sIHVybD0gXCIgKyB1cmwgKyBcIiwgcHJvdmlkZXI9XCIgKyBwcm92aWRlck5hbWUpO1xyXG4gICAgICAgIGlmICh1cmwgPT09IHVuZGVmaW5lZCB8fCB1cmwgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZpZGVvLnVybCA9IHVybDtcclxuICAgICAgICB0aGlzLm9FbWJlZFNlcnZpY2UuY2hlY2tWaWRlb09FbWJlZCh1cmwpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpZXcgPSByZXM7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW8udGh1bWJVcmwgPSByZXMudGh1bWJuYWlsX3VybCBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJldmlldyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChmb3JtOiBOZ0Zvcm0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbW9kZWw6ICcgKyB0aGlzLnZpZGVvKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZm9ybTogJyArIGZvcm0udmFsdWUpO1xyXG4gICAgICAgIGlmICh0aGlzLnZpZGVvLmlkICE9IG51bGwgJiYgdGhpcy52aWRlby5pZCAhPSBcIjBcIikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvU2VydmljZS51cGRhdGVWaWRlbyh0aGlzLnZpZGVvKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlbyA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2Vzc2Z1bGx5IHNhdmVkIHZpZGVvIHdpdGggSUQ6ICcgKyB0aGlzLnZpZGVvLmlkKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coJ2Vycm9yIG9uIHNhdmluZyB2aWRlbycpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvU2VydmljZS5jcmVhdGVWaWRlbyh0aGlzLnZpZGVvKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlbyA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2Vzc2Z1bGx5IHNhdmVkIHZpZGVvIHdpdGggSUQ6ICcgKyB0aGlzLnZpZGVvLmlkKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coJ2Vycm9yIG9uIHNhdmluZyB2aWRlbycpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvLWRldGFpbHMvdmlkZW8tZGV0YWlscy5jb21wb25lbnQudHMiLCJlbnVtIFZpZGVvT3JpZ2luRW51bSB7XHJcbiAgICBVbmtub3duID0gMCxcclxuICAgIFlvdVR1YmUgPSAxLFxyXG4gICAgVmltZW8sXHJcbiAgICBDaGFubmVsOSxcclxuICAgIFxyXG59XHJcblxyXG5lbnVtIFZpZGVvRGlzcGxheU1vZGUge1xyXG4gIENyZWF0ZSxcclxuICBSZWFkLFxyXG4gIENvbXBhY3RSZWFkLFxyXG4gIEVkaXRcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7VmlkZW9PcmlnaW5FbnVtLCBWaWRlb0Rpc3BsYXlNb2RlfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvLWRldGFpbHMvdmlkZW8tZGV0YWlscy5lbnVtcy50cyIsImltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIFZpZGVvIHtcclxuICAgIGNyZWF0ZWREYXRlOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeTogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuLy9uZzJcclxuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGUsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7IC8vVmlld1xyXG5pbXBvcnQge05nRm9yfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7VmlkZW9TZXJ2aWNlfSBmcm9tICcuLi92aWRlby92aWRlby5zZXJ2aWNlcyc7XHJcbmltcG9ydCB7b0VtYmVkU2VydmljZX0gZnJvbSAnLi4vdmlkZW8tb2VtYmVkL3ZpZGVvLW9lbWJlZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSVZpZGVvIH0gZnJvbSAnLi4vdmlkZW8vdmlkZW8uaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbi8vaW1wb3J0IHtWaWRlb0RldGFpbHNDb21wb25lbnR9IGZyb20gJy4uL3ZpZGVvLWRldGFpbHMvdmlkZW8tZGV0YWlscy5jb21wb25lbnQnO1xyXG5AQ29tcG9uZW50KFxyXG4gICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiAndmlkZW8tbGlzdCcsXHJcbiAgICAgICAgLy9wcm92aWRlcnM6IFsuLi4gSFRUUF9QUk9WSURFUlMsIFZpZGVvU2VydmljZSwgVmlkZW9EZXRhaWxzQ29tcG9uZW50XSxcclxuICAgICAgICAvL2RpcmVjdGl2ZXM6IFtWaWRlb0RldGFpbHNDb21wb25lbnRdLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3ZpZGVvLWxpc3QuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICBzdHlsZXM6IFtgXHJcbiAgXHR1bCB7IHBhZGRpbmc6MDsgd2lkdGg6NDgwOyBtYXJnaW46MjBweCBhdXRvOyBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7fVxyXG4gIFx0bGkgeyBkaXNwbGF5OmlubGluZTt9XHJcbiAgICAgICAgLnRueyBcclxuXHQgICBtYXJnaW46MnB4IDBweDtcclxuXHQgICBib3gtc2hhZG93OiM5OTkgMXB4IDFweCAzcHggMXB4OyBcclxuXHQgICBjdXJzb3I6IHBvaW50ZXIgXHJcbiAgICAgICAgfVxyXG4gICAgbGkgYSB7IHRleHQtZGVjb3JlYXRpb246IG5vbmU7IH1cclxuICBcdC5tb2RhbC1jb250ZW50IHtcclxuXHQgICAgd2lkdGg6IDY3MHB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG4gIGBdXHJcbiAgICB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpZGVvTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHsgXHJcbiAgICAgICAgdGhpcy52aWRlb3MgPSB0aGlzLnZpZGVvU2VydmljZS5HZXRWaWRlb3MoKTtcclxuICAgIH1cclxuICAgIC8vcHVibGljIHZpZGVvczogQXJyYXk8SVZpZGVvPiA9IFtdO1xyXG4gICAgcHVibGljIHNlbGVjdGVkVmlkZW86IElWaWRlbztcclxuICAgIHB1YmxpYyB2aWRlb3M6IE9ic2VydmFibGU8SVZpZGVvPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgdmlkZW9TZXJ2aWNlOiBWaWRlb1NlcnZpY2UsIHByaXZhdGUgb2VtYmVkU2VydmljZTogb0VtYmVkU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0cnVjdG9yKFxyXG4gICAgLy8gICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLy8sXHJcbiAgICAvLyAgIC8vICBwcml2YXRlIF92aWRlb1NlcnZpY2U6IFZpZGVvU2VydmljZVxyXG4gICAgLy8gICAgICkgeyBcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuX3ZpZGVvU2VydmljZS5nZXRWaWRlb3MoKVxyXG4gICAgLy8gICAgICAgICAvLyAuc3Vic2NyaWJlKFxyXG4gICAgLy8gICAgICAgICAvLyByZXMgPT4gdGhpcy52aWRlb3MucHVzaChyZXMpLFxyXG4gICAgLy8gICAgICAgICAvLyBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIC8vICAgICAgICAgLy8gKTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy9mcm9tLWNvZGUgYXBwcm9hY2hcclxuICAgIG9uVmlkZW9TZWxlY3RlZChzZWxlY3Rpb246IElWaWRlbykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWaWRlbyA9IHNlbGVjdGlvbjtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgdmlkZW8gd2l0aCBpZDogJyArIHNlbGVjdGlvbi5pZCk7XHJcbiAgICAgICAvLyB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydWaWRlbycsIHsgbW9kZTogJ3dhdGNoJywgaWQ6IHNlbGVjdGlvbi5pZCB9XSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC92aWRlb3MvdmlkZW8tbGlzdC92aWRlby1saXN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuaW1wb3J0IHsgb0VtYmVkLCBvRW1iZWREaWN0aW9uYXJ5IH0gZnJvbSAnLi4vdmlkZW8tb2VtYmVkL3ZpZGVvLW9lbWJlZC5pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgb0VtYmVkVmltZW8gfSBmcm9tICcuL29lbWJlZC12aW1lbyc7XHJcbmltcG9ydCB7IG9FbWJlZFlvdVR1YmUgfSBmcm9tICcuL29lbWJlZC15b3V0dWJlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIG9FbWJlZFNlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSBwcm92aWRlcnMgOiBvRW1iZWREaWN0aW9uYXJ5ID0ge31cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCApIHtcclxuICAgICAgICB0aGlzLnByb3ZpZGVyc1tcIlZpbWVvXCJdID0gbmV3IG9FbWJlZFZpbWVvKCk7O1xyXG4gICAgICAgIHRoaXMucHJvdmlkZXJzW1wiWW91VHViZVwiXSA9IG5ldyBvRW1iZWRZb3VUdWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjb2duaXplUHJvdmlkZXIodXJsOiBzdHJpbmcpIDogc3RyaW5nIHtcclxuICAgICAgICB2YXIgcHJvdmlkZXJOYW1lID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnByb3ZpZGVycykge1xyXG5cclxuICAgICAgICAgICAgbGV0IG9FbWJlZFByb3ZpZGVyIDogb0VtYmVkID0gdGhpcy5wcm92aWRlcnNba2V5XTtcclxuICAgICAgICAgICAgdmFyIHggPSB0eXBlb2Yob0VtYmVkUHJvdmlkZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9FbWJlZFByb3ZpZGVyLm1hdGNoUHJvdmlkZXJCeVVybCh1cmwpKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHByb3ZpZGVyTmFtZSA9IG9FbWJlZFByb3ZpZGVyLnByb3ZpZGVyTmFtZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm92aWRlck5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcHJvdmlkZXJOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVmlkZW9PRW1iZWQodXJsOiBzdHJpbmcsIHByb3ZpZGVyTmFtZSA9IFwiXCIpOiBPYnNlcnZhYmxlPG9FbWJlZD4ge1xyXG4gICAgICAgIGlmICh1cmwgPT0gXCJcIiB8fCB1cmwgPT0gbnVsbCB8fCB1cmwgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVcmwgY2Fubm90IGJlIGVtcHR5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvdmlkZXJOYW1lID09IFwiXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlck5hbWUgPSB0aGlzLnJlY29nbml6ZVByb3ZpZGVyKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm92aWRlck5hbWUgPT0gXCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiQ291bGRuJ3QgbWF0Y2ggdGhlIHZpZGVvIHByb3ZpZGVyIGJ5IFVSTFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYWxsaW5nIGdldCBjb250ZW50IGJ5IHVybCwgZm9yOiBcIiArIHVybCk7XHJcblxyXG4gICAgICAgIGxldCBvRW1iZWRVcmwgPSB0aGlzLnByb3ZpZGVyc1twcm92aWRlck5hbWVdLmdldENvbnRlbnRVcmwodXJsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQob0VtYmVkVXJsKVxyXG4gICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgICAgLy8gLmRvKHJlcyA9PiByZXMgPT4gY29uc29sZS5sb2coJ1JldHJpZXZlZCBvRW1iZWQgY29udGVudDogJyArIEpTT04uc3RyaW5naWZ5KHJlcykpKTtcclxuXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvLW9lbWJlZC92aWRlby1vZW1iZWQuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEyMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL21hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDI3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9TdWJqZWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL3V0aWwvcm9vdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21waWxlci9idW5kbGVzL2NvbXBpbGVyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDk4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogVEhJUyBJUyBURU1QT1JBUlkgVE8gUEFUQ0ggMi4xLjErIENvcmUgYnVnc1xuICovXG52YXIgc2VtdmVyID0gcmVxdWlyZSgnc2VtdmVyJyk7XG52YXIgX19jb3JlX18gPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG52YXIgY29yZVZlcnNpb24gPSBfX2NvcmVfXyAmJiBfX2NvcmVfXy5WRVJTSU9OICYmIF9fY29yZV9fLlZFUlNJT04uZnVsbDtcblxuLy8gT25seSBwYXRjaCBpZiB5b3UncmUgb24gQW5ndWxhciA+PSAyLjEuMSBhbmQgPCB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIChpbmNsdWRpbmcgcHJlcmVsZWFzZSlcbmlmIChjb3JlVmVyc2lvbiAmJiBzZW12ZXIuc2F0aXNmaWVzKGNvcmVWZXJzaW9uLCAnXjIuMS4xJykpIHtcbiAgICB2YXIgX19jb21waWxlcl9fID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tcGlsZXInKTtcbiAgICB2YXIgX19jb3JlX3ByaXZhdGVfXyA9IF9fY29yZV9fLl9fY29yZV9wcml2YXRlX187XG5cbiAgICB2YXIgcGF0Y2ggPSBmYWxzZTtcbiAgICBpZiAoIV9fY29yZV9wcml2YXRlX19bJ1ZpZXdVdGlscyddKSB7XG4gICAgICAgIHBhdGNoID0gdHJ1ZTtcbiAgICAgICAgX19jb3JlX3ByaXZhdGVfX1snVmlld1V0aWxzJ10gPSBfX2NvcmVfcHJpdmF0ZV9fWyd2aWV3X3V0aWxzJ107XG4gICAgfVxuXG4gICAgaWYgKCFfX2NvbXBpbGVyX18uX19jb21waWxlcl9wcml2YXRlX18pIHtcbiAgICAgICAgcGF0Y2ggPSB0cnVlO1xuICAgICAgICBfX2NvbXBpbGVyX18uX19jb21waWxlcl9wcml2YXRlX18gPSB7XG4gICAgICAgICAgICBTZWxlY3Rvck1hdGNoZXI6IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXIsXG4gICAgICAgICAgICBDc3NTZWxlY3RvcjogX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX191bml2ZXJzYWxfXyA9IHJlcXVpcmUoJ2FuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfXycpO1xuICAgIGlmIChwYXRjaCkge1xuICAgICAgICBfX3VuaXZlcnNhbF9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX19bJ3ZpZXdfdXRpbHMnXTtcbiAgICAgICAgX191bml2ZXJzYWxfXy5Dc3NTZWxlY3RvciA9IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxuICAgICAgICBfX3VuaXZlcnNhbF9fLlNlbGVjdG9yTWF0Y2hlciA9IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXJcbiAgICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuZ3VsYXIyLXVuaXZlcnNhbC1wYXRjaC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAvYXBwLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGZXRjaERhdGFDb21wb25lbnQgfSBmcm9tICcuL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ291bnRlckNvbXBvbmVudCB9IGZyb20gJy4vY291bnRlci9jb3VudGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZpZGVvc01vZHVsZSB9IGZyb20gJy4vdmlkZW9zL3ZpZGVvcy5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxyXG4gICAgICAgIENvdW50ZXJDb21wb25lbnQsXHJcbiAgICAgICAgRmV0Y2hEYXRhQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWVDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgVW5pdmVyc2FsTW9kdWxlLCAvLyBNdXN0IGJlIGZpcnN0IGltcG9ydC4gVGhpcyBhdXRvbWF0aWNhbGx5IGltcG9ydHMgQnJvd3Nlck1vZHVsZSwgSHR0cE1vZHVsZSwgYW5kIEpzb25wTW9kdWxlIHRvby5cclxuICAgICAgICBWaWRlb3NNb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnY291bnRlcicsIGNvbXBvbmVudDogQ291bnRlckNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdmZXRjaC1kYXRhJywgY29tcG9uZW50OiBGZXRjaERhdGFDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaG9tZScgfVxyXG4gICAgICAgIF0pXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMzcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy96b25lLmpzL2Rpc3Qvem9uZS1ub2RlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNjkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzL25vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg3MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlIEFuZ3VsYXIgdjIuNC44XG4gKiAoYykgMjAxMC0yMDE3IEdvb2dsZSwgSW5jLiBodHRwczovL2FuZ3VsYXIuaW8vXG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKSwgcmVxdWlyZSgncnhqcy9vcGVyYXRvci90b1Byb21pc2UnKSwgcmVxdWlyZSgncnhqcy9TdWJqZWN0JyksIHJlcXVpcmUoJ3J4anMvT2JzZXJ2YWJsZScpLCByZXF1aXJlKCdyeGpzL29ic2VydmFibGUvZnJvbVByb21pc2UnKSkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnLCAnQGFuZ3VsYXIvY29yZScsICdyeGpzL29wZXJhdG9yL3RvUHJvbWlzZScsICdyeGpzL1N1YmplY3QnLCAncnhqcy9PYnNlcnZhYmxlJywgJ3J4anMvb2JzZXJ2YWJsZS9mcm9tUHJvbWlzZSddLCBmYWN0b3J5KSA6XG4gICAgKGZhY3RvcnkoKGdsb2JhbC5uZyA9IGdsb2JhbC5uZyB8fCB7fSwgZ2xvYmFsLm5nLmZvcm1zID0gZ2xvYmFsLm5nLmZvcm1zIHx8IHt9KSxnbG9iYWwubmcuY29yZSxnbG9iYWwuUnguT2JzZXJ2YWJsZS5wcm90b3R5cGUsZ2xvYmFsLlJ4LGdsb2JhbC5SeCxnbG9iYWwuUnguT2JzZXJ2YWJsZSkpO1xufSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cyxfYW5ndWxhcl9jb3JlLHJ4anNfb3BlcmF0b3JfdG9Qcm9taXNlLHJ4anNfU3ViamVjdCxyeGpzX09ic2VydmFibGUscnhqc19vYnNlcnZhYmxlX2Zyb21Qcm9taXNlKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBCYXNlIGNsYXNzIGZvciBjb250cm9sIGRpcmVjdGl2ZXMuXG4gICAgICpcbiAgICAgKiBPbmx5IHVzZWQgaW50ZXJuYWxseSBpbiB0aGUgZm9ybXMgbW9kdWxlLlxuICAgICAqXG4gICAgICogXFxAc3RhYmxlXG4gICAgICogQGFic3RyYWN0XG4gICAgICovXG4gICAgdmFyIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSgpIHtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHRocm93IG5ldyBFcnJvcigndW5pbXBsZW1lbnRlZCcpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC52YWx1ZSA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ2YWxpZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnZhbGlkIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcImludmFsaWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5pbnZhbGlkIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInBlbmRpbmdcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5wZW5kaW5nIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcImVycm9yc1wiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmVycm9ycyA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJwcmlzdGluZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnByaXN0aW5lIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcImRpcnR5XCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuZGlydHkgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwidG91Y2hlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnRvdWNoZWQgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwidW50b3VjaGVkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wudW50b3VjaGVkIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcImRpc2FibGVkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuZGlzYWJsZWQgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiZW5hYmxlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmVuYWJsZWQgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwic3RhdHVzQ2hhbmdlc1wiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnN0YXR1c0NoYW5nZXMgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwidmFsdWVDaGFuZ2VzXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInBhdGhcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/PX0gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7IHZhbHVlID0gdW5kZWZpbmVkOyB9XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sKVxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbC5yZXNldCh2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGVycm9yQ29kZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBwYXRoXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLmhhc0Vycm9yID0gZnVuY3Rpb24gKGVycm9yQ29kZSwgcGF0aCkge1xuICAgICAgICAgICAgaWYgKHBhdGggPT09IHZvaWQgMCkgeyBwYXRoID0gbnVsbDsgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5oYXNFcnJvcihlcnJvckNvZGUsIHBhdGgpIDogZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGVycm9yQ29kZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBwYXRoXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLmdldEVycm9yID0gZnVuY3Rpb24gKGVycm9yQ29kZSwgcGF0aCkge1xuICAgICAgICAgICAgaWYgKHBhdGggPT09IHZvaWQgMCkgeyBwYXRoID0gbnVsbDsgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5nZXRFcnJvcihlcnJvckNvZGUsIHBhdGgpIDogbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZTtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkMSA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEEgZGlyZWN0aXZlIHRoYXQgY29udGFpbnMgbXVsdGlwbGUge1xcQGxpbmsgTmdDb250cm9sfXMuXG4gICAgICpcbiAgICAgKiBPbmx5IHVzZWQgYnkgdGhlIGZvcm1zIG1vZHVsZS5cbiAgICAgKlxuICAgICAqIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBDb250cm9sQ29udGFpbmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDEoQ29udHJvbENvbnRhaW5lciwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gQ29udHJvbENvbnRhaW5lcigpIHtcbiAgICAgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250cm9sQ29udGFpbmVyLnByb3RvdHlwZSwgXCJmb3JtRGlyZWN0aXZlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IHRoZSBmb3JtIHRvIHdoaWNoIHRoaXMgY29udGFpbmVyIGJlbG9uZ3MuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udHJvbENvbnRhaW5lci5wcm90b3R5cGUsIFwicGF0aFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCB0aGUgcGF0aCB0byB0aGlzIGNvbnRhaW5lci5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBDb250cm9sQ29udGFpbmVyO1xuICAgIH0oQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlKSk7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IG9ialxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNQcmVzZW50KG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICE9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gb2JqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc0JsYW5rKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqID09IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gYVxuICAgICAqIEBwYXJhbSB7P30gYlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gbG9vc2VJZGVudGljYWwoYSwgYikge1xuICAgICAgICByZXR1cm4gYSA9PT0gYiB8fCB0eXBlb2YgYSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGIgPT09ICdudW1iZXInICYmIGlzTmFOKGEpICYmIGlzTmFOKGIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IG9cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzSnNPYmplY3Qobykge1xuICAgICAgICByZXR1cm4gbyAhPT0gbnVsbCAmJiAodHlwZW9mIG8gPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG8gPT09ICdvYmplY3QnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBvYmpcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzUHJpbWl0aXZlKG9iaikge1xuICAgICAgICByZXR1cm4gIWlzSnNPYmplY3Qob2JqKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyBKYXZhc2NyaXB0IE9iamVjdHNcbiAgICAgKi9cbiAgICB2YXIgU3RyaW5nTWFwV3JhcHBlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFN0cmluZ01hcFdyYXBwZXIoKSB7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gbTFcbiAgICAgICAgICogQHBhcmFtIHs/fSBtMlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU3RyaW5nTWFwV3JhcHBlci5tZXJnZSA9IGZ1bmN0aW9uIChtMSwgbTIpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG0gPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhtMSk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgbVtrXSA9IG0xW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBfYyA9IE9iamVjdC5rZXlzKG0yKTsgX2IgPCBfYy5sZW5ndGg7IF9iKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgayA9IF9jW19iXTtcbiAgICAgICAgICAgICAgICBtW2tdID0gbTJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gbTFcbiAgICAgICAgICogQHBhcmFtIHs/fSBtMlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU3RyaW5nTWFwV3JhcHBlci5lcXVhbHMgPSBmdW5jdGlvbiAobTEsIG0yKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBrMSA9IE9iamVjdC5rZXlzKG0xKTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGsyID0gT2JqZWN0LmtleXMobTIpO1xuICAgICAgICAgICAgaWYgKGsxLmxlbmd0aCAhPSBrMi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciAvKiogQHR5cGUgez99ICovIGkgPSAwOyBpIDwgazEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBrZXkgPSBrMVtpXTtcbiAgICAgICAgICAgICAgICBpZiAobTFba2V5XSAhPT0gbTJba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBTdHJpbmdNYXBXcmFwcGVyO1xuICAgIH0oKSk7XG4gICAgdmFyIExpc3RXcmFwcGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gTGlzdFdyYXBwZXIoKSB7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gYXJyXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29uZGl0aW9uXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBMaXN0V3JhcHBlci5maW5kTGFzdCA9IGZ1bmN0aW9uIChhcnIsIGNvbmRpdGlvbikge1xuICAgICAgICAgICAgZm9yICh2YXIgLyoqIEB0eXBlIHs/fSAqLyBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbihhcnJbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGxpc3RcbiAgICAgICAgICogQHBhcmFtIHs/fSBpdGVtc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTGlzdFdyYXBwZXIucmVtb3ZlQWxsID0gZnVuY3Rpb24gKGxpc3QsIGl0ZW1zKSB7XG4gICAgICAgICAgICBmb3IgKHZhciAvKiogQHR5cGUgez99ICovIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpbmRleCA9IGxpc3QuaW5kZXhPZihpdGVtc1tpXSk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gbGlzdFxuICAgICAgICAgKiBAcGFyYW0gez99IGVsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBMaXN0V3JhcHBlci5yZW1vdmUgPSBmdW5jdGlvbiAobGlzdCwgZWwpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGluZGV4ID0gbGlzdC5pbmRleE9mKGVsKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBhXG4gICAgICAgICAqIEBwYXJhbSB7P30gYlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTGlzdFdyYXBwZXIuZXF1YWxzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGlmIChhLmxlbmd0aCAhPSBiLmxlbmd0aClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciAvKiogQHR5cGUgez99ICovIGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmIChhW2ldICE9PSBiW2ldKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gbGlzdFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTGlzdFdyYXBwZXIuZmxhdHRlbiA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdC5yZWR1Y2UoZnVuY3Rpb24gKGZsYXQsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBmbGF0SXRlbSA9IEFycmF5LmlzQXJyYXkoaXRlbSkgPyBMaXN0V3JhcHBlci5mbGF0dGVuKGl0ZW0pIDogaXRlbTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKChmbGF0KSkuY29uY2F0KGZsYXRJdGVtKTtcbiAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIExpc3RXcmFwcGVyO1xuICAgIH0oKSk7XG5cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpc1Byb21pc2UgPSBfYW5ndWxhcl9jb3JlLl9fY29yZV9wcml2YXRlX18uaXNQcm9taXNlO1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIGlzT2JzZXJ2YWJsZSA9IF9hbmd1bGFyX2NvcmUuX19jb3JlX3ByaXZhdGVfXy5pc09ic2VydmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc0VtcHR5SW5wdXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAvLyB3ZSBkb24ndCBjaGVjayBmb3Igc3RyaW5nIGhlcmUgc28gaXQgYWxzbyB3b3JrcyB3aXRoIGFycmF5c1xuICAgICAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZS5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVycyBmb3IgdmFsaWRhdG9ycyB0byBiZSB1c2VkIGZvciB7QGxpbmsgRm9ybUNvbnRyb2x9cyBpbiBhIGZvcm0uXG4gICAgICpcbiAgICAgKiBQcm92aWRlIHRoaXMgdXNpbmcgYG11bHRpOiB0cnVlYCB0byBhZGQgdmFsaWRhdG9ycy5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlXG4gICAgICpcbiAgICAgKiB7QGV4YW1wbGUgY29yZS9mb3Jtcy90cy9uZ192YWxpZGF0b3JzL25nX3ZhbGlkYXRvcnMudHMgcmVnaW9uPSduZ192YWxpZGF0b3JzJ31cbiAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gTkdfVkFMSURBVE9SUyA9IG5ldyBfYW5ndWxhcl9jb3JlLk9wYXF1ZVRva2VuKCdOZ1ZhbGlkYXRvcnMnKTtcbiAgICAvKipcbiAgICAgKiBQcm92aWRlcnMgZm9yIGFzeW5jaHJvbm91cyB2YWxpZGF0b3JzIHRvIGJlIHVzZWQgZm9yIHtAbGluayBGb3JtQ29udHJvbH1zXG4gICAgICogaW4gYSBmb3JtLlxuICAgICAqXG4gICAgICogUHJvdmlkZSB0aGlzIHVzaW5nIGBtdWx0aTogdHJ1ZWAgdG8gYWRkIHZhbGlkYXRvcnMuXG4gICAgICpcbiAgICAgKiBTZWUge0BsaW5rIE5HX1ZBTElEQVRPUlN9IGZvciBtb3JlIGRldGFpbHMuXG4gICAgICpcbiAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gTkdfQVNZTkNfVkFMSURBVE9SUyA9IG5ldyBfYW5ndWxhcl9jb3JlLk9wYXF1ZVRva2VuKCdOZ0FzeW5jVmFsaWRhdG9ycycpO1xuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIGEgc2V0IG9mIHZhbGlkYXRvcnMgdXNlZCBieSBmb3JtIGNvbnRyb2xzLlxuICAgICAqXG4gICAgICogQSB2YWxpZGF0b3IgaXMgYSBmdW5jdGlvbiB0aGF0IHByb2Nlc3NlcyBhIHtcXEBsaW5rIEZvcm1Db250cm9sfSBvciBjb2xsZWN0aW9uIG9mXG4gICAgICogY29udHJvbHMgYW5kIHJldHVybnMgYSBtYXAgb2YgZXJyb3JzLiBBIG51bGwgbWFwIG1lYW5zIHRoYXQgdmFsaWRhdGlvbiBoYXMgcGFzc2VkLlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB2YXIgbG9naW5Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFwiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWQpXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBcXEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgVmFsaWRhdG9ycyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFZhbGlkYXRvcnMoKSB7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2xzIHRvIGhhdmUgYSBub24tZW1wdHkgdmFsdWUuXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCA9IGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNFbXB0eUlucHV0VmFsdWUoY29udHJvbC52YWx1ZSkgPyB7ICdyZXF1aXJlZCc6IHRydWUgfSA6IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9sIHZhbHVlIHRvIGJlIHRydWUuXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZFRydWUgPSBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2wudmFsdWUgPT09IHRydWUgPyBudWxsIDogeyAncmVxdWlyZWQnOiB0cnVlIH07XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgdmFsdWUgb2YgYSBtaW5pbXVtIGxlbmd0aC5cbiAgICAgICAgICogQHBhcmFtIHs/fSBtaW5MZW5ndGhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoID0gZnVuY3Rpb24gKG1pbkxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRW1wdHlJbnB1dFZhbHVlKGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBkb24ndCB2YWxpZGF0ZSBlbXB0eSB2YWx1ZXMgdG8gYWxsb3cgb3B0aW9uYWwgY29udHJvbHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbGVuZ3RoID0gY29udHJvbC52YWx1ZSA/IGNvbnRyb2wudmFsdWUubGVuZ3RoIDogMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVuZ3RoIDwgbWluTGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgeyAnbWlubGVuZ3RoJzogeyAncmVxdWlyZWRMZW5ndGgnOiBtaW5MZW5ndGgsICdhY3R1YWxMZW5ndGgnOiBsZW5ndGggfSB9IDpcbiAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgdmFsdWUgb2YgYSBtYXhpbXVtIGxlbmd0aC5cbiAgICAgICAgICogQHBhcmFtIHs/fSBtYXhMZW5ndGhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoID0gZnVuY3Rpb24gKG1heExlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbGVuZ3RoID0gY29udHJvbC52YWx1ZSA/IGNvbnRyb2wudmFsdWUubGVuZ3RoIDogMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVuZ3RoID4gbWF4TGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgeyAnbWF4bGVuZ3RoJzogeyAncmVxdWlyZWRMZW5ndGgnOiBtYXhMZW5ndGgsICdhY3R1YWxMZW5ndGgnOiBsZW5ndGggfSB9IDpcbiAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBhIGNvbnRyb2wgdG8gbWF0Y2ggYSByZWdleCB0byBpdHMgdmFsdWUuXG4gICAgICAgICAqIEBwYXJhbSB7P30gcGF0dGVyblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgVmFsaWRhdG9ycy5wYXR0ZXJuID0gZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcmVnZXg7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZWdleFN0cjtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZWdleFN0ciA9IFwiXlwiICsgcGF0dGVybiArIFwiJFwiO1xuICAgICAgICAgICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChyZWdleFN0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWdleFN0ciA9IHBhdHRlcm4udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICByZWdleCA9IHBhdHRlcm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eUlucHV0VmFsdWUoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIGRvbid0IHZhbGlkYXRlIGVtcHR5IHZhbHVlcyB0byBhbGxvdyBvcHRpb25hbCBjb250cm9sc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QodmFsdWUpID8gbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgIHsgJ3BhdHRlcm4nOiB7ICdyZXF1aXJlZFBhdHRlcm4nOiByZWdleFN0ciwgJ2FjdHVhbFZhbHVlJzogdmFsdWUgfSB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5vLW9wIHZhbGlkYXRvci5cbiAgICAgICAgICogQHBhcmFtIHs/fSBjXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3IgPSBmdW5jdGlvbiAoYykgeyByZXR1cm4gbnVsbDsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbXBvc2UgbXVsdGlwbGUgdmFsaWRhdG9ycyBpbnRvIGEgc2luZ2xlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdW5pb25cbiAgICAgICAgICogb2YgdGhlIGluZGl2aWR1YWwgZXJyb3IgbWFwcy5cbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBWYWxpZGF0b3JzLmNvbXBvc2UgPSBmdW5jdGlvbiAodmFsaWRhdG9ycykge1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0b3JzKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcHJlc2VudFZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLmZpbHRlcihpc1ByZXNlbnQpO1xuICAgICAgICAgICAgaWYgKHByZXNlbnRWYWxpZGF0b3JzLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9tZXJnZUVycm9ycyhfZXhlY3V0ZVZhbGlkYXRvcnMoY29udHJvbCwgcHJlc2VudFZhbGlkYXRvcnMpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFZhbGlkYXRvcnMuY29tcG9zZUFzeW5jID0gZnVuY3Rpb24gKHZhbGlkYXRvcnMpIHtcbiAgICAgICAgICAgIGlmICghdmFsaWRhdG9ycylcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHByZXNlbnRWYWxpZGF0b3JzID0gdmFsaWRhdG9ycy5maWx0ZXIoaXNQcmVzZW50KTtcbiAgICAgICAgICAgIGlmIChwcmVzZW50VmFsaWRhdG9ycy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHByb21pc2VzID0gX2V4ZWN1dGVBc3luY1ZhbGlkYXRvcnMoY29udHJvbCwgcHJlc2VudFZhbGlkYXRvcnMpLm1hcChfY29udmVydFRvUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKF9tZXJnZUVycm9ycyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gVmFsaWRhdG9ycztcbiAgICB9KCkpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gb2JqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY29udmVydFRvUHJvbWlzZShvYmopIHtcbiAgICAgICAgcmV0dXJuIGlzUHJvbWlzZShvYmopID8gb2JqIDogcnhqc19vcGVyYXRvcl90b1Byb21pc2UudG9Qcm9taXNlLmNhbGwob2JqKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZXhlY3V0ZVZhbGlkYXRvcnMoY29udHJvbCwgdmFsaWRhdG9ycykge1xuICAgICAgICByZXR1cm4gdmFsaWRhdG9ycy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYoY29udHJvbCk7IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9leGVjdXRlQXN5bmNWYWxpZGF0b3JzKGNvbnRyb2wsIHZhbGlkYXRvcnMpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvcnMubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiB2KGNvbnRyb2wpOyB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBhcnJheU9mRXJyb3JzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfbWVyZ2VFcnJvcnMoYXJyYXlPZkVycm9ycykge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZXMgPSBhcnJheU9mRXJyb3JzLnJlZHVjZShmdW5jdGlvbiAocmVzLCBlcnJvcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1ByZXNlbnQoZXJyb3JzKSA/IFN0cmluZ01hcFdyYXBwZXIubWVyZ2UocmVzLCBlcnJvcnMpIDogcmVzO1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhyZXMpLmxlbmd0aCA9PT0gMCA/IG51bGwgOiByZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlZCB0byBwcm92aWRlIGEge0BsaW5rIENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmb3IgZm9ybSBjb250cm9scy5cbiAgICAgKlxuICAgICAqIFNlZSB7QGxpbmsgRGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZvciBob3cgdG8gaW1wbGVtZW50IG9uZS5cbiAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gTkdfVkFMVUVfQUNDRVNTT1IgPSBuZXcgX2FuZ3VsYXJfY29yZS5PcGFxdWVUb2tlbignTmdWYWx1ZUFjY2Vzc29yJyk7XG5cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlLFxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIGFjY2Vzc29yIGZvciB3cml0aW5nIGEgdmFsdWUgYW5kIGxpc3RlbmluZyB0byBjaGFuZ2VzIG9uIGEgY2hlY2tib3ggaW5wdXQgZWxlbWVudC5cbiAgICAgKlxuICAgICAqICAjIyMgRXhhbXBsZVxuICAgICAqICBgYGBcbiAgICAgKiAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZW1lbWJlckxvZ2luXCIgbmdNb2RlbD5cbiAgICAgKiAgYGBgXG4gICAgICpcbiAgICAgKiAgXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAgICAgICAgICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvcihfcmVuZGVyZXIsIF9lbGVtZW50UmVmKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlciA9IF9yZW5kZXJlcjtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYgPSBfZWxlbWVudFJlZjtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoXykgeyB9O1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLndyaXRlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjaGVja2VkJywgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPbkNoYW5nZSA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uVG91Y2hlZCA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5zZXREaXNhYmxlZFN0YXRlID0gZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICAgICAgICB9O1xuICAgICAgICBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFt0eXBlPWNoZWNrYm94XVtmb3JtQ29udHJvbE5hbWVdLGlucHV0W3R5cGU9Y2hlY2tib3hdW2Zvcm1Db250cm9sXSxpbnB1dFt0eXBlPWNoZWNrYm94XVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LmNoZWNrZWQpJywgJyhibHVyKSc6ICdvblRvdWNoZWQoKScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW0NIRUNLQk9YX1ZBTFVFX0FDQ0VTU09SXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuUmVuZGVyZXIsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRWxlbWVudFJlZiwgfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgcmV0dXJuIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3I7XG4gICAgfSgpKTtcblxuICAgIHZhciAvKiogQHR5cGUgez99ICovIERFRkFVTFRfVkFMVUVfQUNDRVNTT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIERlZmF1bHRWYWx1ZUFjY2Vzc29yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGFjY2Vzc29yIGZvciB3cml0aW5nIGEgdmFsdWUgYW5kIGxpc3RlbmluZyB0byBjaGFuZ2VzIHRoYXQgaXMgdXNlZCBieSB0aGVcbiAgICAgKiB7XFxAbGluayBOZ01vZGVsfSwge1xcQGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfSBkaXJlY3RpdmVzLlxuICAgICAqXG4gICAgICogICMjIyBFeGFtcGxlXG4gICAgICogIGBgYFxuICAgICAqICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoUXVlcnlcIiBuZ01vZGVsPlxuICAgICAqICBgYGBcbiAgICAgKlxuICAgICAqICBcXEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgRGVmYXVsdFZhbHVlQWNjZXNzb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAgICAgICAgICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gRGVmYXVsdFZhbHVlQWNjZXNzb3IoX3JlbmRlcmVyLCBfZWxlbWVudFJlZikge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmID0gX2VsZW1lbnRSZWY7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKF8pIHsgfTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBEZWZhdWx0VmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUud3JpdGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbm9ybWFsaXplZFZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCBub3JtYWxpemVkVmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRGVmYXVsdFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRGVmYXVsdFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25Ub3VjaGVkID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMub25Ub3VjaGVkID0gZm47IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIERlZmF1bHRWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5zZXREaXNhYmxlZFN0YXRlID0gZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICAgICAgICB9O1xuICAgICAgICBEZWZhdWx0VmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSlbZm9ybUNvbnRyb2xOYW1lXSx0ZXh0YXJlYVtmb3JtQ29udHJvbE5hbWVdLGlucHV0Om5vdChbdHlwZT1jaGVja2JveF0pW2Zvcm1Db250cm9sXSx0ZXh0YXJlYVtmb3JtQ29udHJvbF0saW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSlbbmdNb2RlbF0sdGV4dGFyZWFbbmdNb2RlbF0sW25nRGVmYXVsdENvbnRyb2xdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHZzYXZraW4gcmVwbGFjZSB0aGUgYWJvdmUgc2VsZWN0b3Igd2l0aCB0aGUgb25lIGJlbG93IGl0IG9uY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzMwMTEgaXMgaW1wbGVtZW50ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdG9yOiAnW25nQ29udHJvbF0sW25nTW9kZWxdLFtuZ0Zvcm1Db250cm9sXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICcoaW5wdXQpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJywgJyhibHVyKSc6ICdvblRvdWNoZWQoKScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW0RFRkFVTFRfVkFMVUVfQUNDRVNTT1JdXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgRGVmYXVsdFZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuUmVuZGVyZXIsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRWxlbWVudFJlZiwgfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgcmV0dXJuIERlZmF1bHRWYWx1ZUFjY2Vzc29yO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbGlkYXRvcih2YWxpZGF0b3IpIHtcbiAgICAgICAgaWYgKCgodmFsaWRhdG9yKSkudmFsaWRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYykgeyByZXR1cm4gKCh2YWxpZGF0b3IpKS52YWxpZGF0ZShjKTsgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAodmFsaWRhdG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplQXN5bmNWYWxpZGF0b3IodmFsaWRhdG9yKSB7XG4gICAgICAgIGlmICgoKHZhbGlkYXRvcikpLnZhbGlkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHsgcmV0dXJuICgodmFsaWRhdG9yKSkudmFsaWRhdGUoYyk7IH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKHZhbGlkYXRvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBOVU1CRVJfVkFMVUVfQUNDRVNTT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE51bWJlclZhbHVlQWNjZXNzb3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIGFjY2Vzc29yIGZvciB3cml0aW5nIGEgbnVtYmVyIHZhbHVlIGFuZCBsaXN0ZW5pbmcgdG8gY2hhbmdlcyB0aGF0IGlzIHVzZWQgYnkgdGhlXG4gICAgICoge1xcQGxpbmsgTmdNb2RlbH0sIHtcXEBsaW5rIEZvcm1Db250cm9sRGlyZWN0aXZlfSwgYW5kIHtcXEBsaW5rIEZvcm1Db250cm9sTmFtZX0gZGlyZWN0aXZlcy5cbiAgICAgKlxuICAgICAqICAjIyMgRXhhbXBsZVxuICAgICAqICBgYGBcbiAgICAgKiAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cImFnZVwiPlxuICAgICAqICBgYGBcbiAgICAgKi9cbiAgICB2YXIgTnVtYmVyVmFsdWVBY2Nlc3NvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICAgICAgICAgKiBAcGFyYW0gez99IF9lbGVtZW50UmVmXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBOdW1iZXJWYWx1ZUFjY2Vzc29yKF9yZW5kZXJlciwgX2VsZW1lbnRSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyID0gX3JlbmRlcmVyO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZiA9IF9lbGVtZW50UmVmO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChfKSB7IH07XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTnVtYmVyVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUud3JpdGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgLy8gVGhlIHZhbHVlIG5lZWRzIHRvIGJlIG5vcm1hbGl6ZWQgZm9yIElFOSwgb3RoZXJ3aXNlIGl0IGlzIHNldCB0byAnbnVsbCcgd2hlbiBudWxsXG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBub3JtYWxpemVkVmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIG5vcm1hbGl6ZWRWYWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOdW1iZXJWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7IGZuKHZhbHVlID09ICcnID8gbnVsbCA6IHBhcnNlRmxvYXQodmFsdWUpKTsgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE51bWJlclZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25Ub3VjaGVkID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMub25Ub3VjaGVkID0gZm47IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE51bWJlclZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnNldERpc2FibGVkU3RhdGUgPSBmdW5jdGlvbiAoaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWJlclZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W3R5cGU9bnVtYmVyXVtmb3JtQ29udHJvbE5hbWVdLGlucHV0W3R5cGU9bnVtYmVyXVtmb3JtQ29udHJvbF0saW5wdXRbdHlwZT1udW1iZXJdW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcoaW5wdXQpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW05VTUJFUl9WQUxVRV9BQ0NFU1NPUl1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBOdW1iZXJWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlJlbmRlcmVyLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkVsZW1lbnRSZWYsIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIHJldHVybiBOdW1iZXJWYWx1ZUFjY2Vzc29yO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQyID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1bmltcGxlbWVudGVkKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VuaW1wbGVtZW50ZWQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBiYXNlIGNsYXNzIHRoYXQgYWxsIGNvbnRyb2wgZGlyZWN0aXZlIGV4dGVuZC5cbiAgICAgKiBJdCBiaW5kcyBhIHtcXEBsaW5rIEZvcm1Db250cm9sfSBvYmplY3QgdG8gYSBET00gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFVzZWQgaW50ZXJuYWxseSBieSBBbmd1bGFyIGZvcm1zLlxuICAgICAqXG4gICAgICogXFxAc3RhYmxlXG4gICAgICogQGFic3RyYWN0XG4gICAgICovXG4gICAgdmFyIE5nQ29udHJvbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQyKE5nQ29udHJvbCwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gTmdDb250cm9sKCkge1xuICAgICAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudmFsdWVBY2Nlc3NvciA9IG51bGw7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9yYXdWYWxpZGF0b3JzID0gW107XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9yYXdBc3luY1ZhbGlkYXRvcnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdDb250cm9sLnByb3RvdHlwZSwgXCJ2YWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh1bmltcGxlbWVudGVkKCkpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nQ29udHJvbC5wcm90b3R5cGUsIFwiYXN5bmNWYWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh1bmltcGxlbWVudGVkKCkpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcGFyYW0gez99IG5ld1ZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ0NvbnRyb2wucHJvdG90eXBlLnZpZXdUb01vZGVsVXBkYXRlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IH07XG4gICAgICAgIHJldHVybiBOZ0NvbnRyb2w7XG4gICAgfShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUpKTtcblxuICAgIHZhciAvKiogQHR5cGUgez99ICovIFJBRElPX1ZBTFVFX0FDQ0VTU09SID0ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEludGVybmFsIGNsYXNzIHVzZWQgYnkgQW5ndWxhciB0byB1bmNoZWNrIHJhZGlvIGJ1dHRvbnMgd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZS5cbiAgICAgKi9cbiAgICB2YXIgUmFkaW9Db250cm9sUmVnaXN0cnkgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBSYWRpb0NvbnRyb2xSZWdpc3RyeSgpIHtcbiAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgICAgICogQHBhcmFtIHs/fSBhY2Nlc3NvclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sUmVnaXN0cnkucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChjb250cm9sLCBhY2Nlc3Nvcikge1xuICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzLnB1c2goW2NvbnRyb2wsIGFjY2Vzc29yXSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGFjY2Vzc29yXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xSZWdpc3RyeS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGFjY2Vzc29yKSB7XG4gICAgICAgICAgICBmb3IgKHZhciAvKiogQHR5cGUgez99ICovIGkgPSB0aGlzLl9hY2Nlc3NvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYWNjZXNzb3JzW2ldWzFdID09PSBhY2Nlc3Nvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBhY2Nlc3NvclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sUmVnaXN0cnkucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uIChhY2Nlc3Nvcikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLl9pc1NhbWVHcm91cChjLCBhY2Nlc3NvcikgJiYgY1sxXSAhPT0gYWNjZXNzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY1sxXS5maXJlVW5jaGVjayhhY2Nlc3Nvci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xQYWlyXG4gICAgICAgICAqIEBwYXJhbSB7P30gYWNjZXNzb3JcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhZGlvQ29udHJvbFJlZ2lzdHJ5LnByb3RvdHlwZS5faXNTYW1lR3JvdXAgPSBmdW5jdGlvbiAoY29udHJvbFBhaXIsIGFjY2Vzc29yKSB7XG4gICAgICAgICAgICBpZiAoIWNvbnRyb2xQYWlyWzBdLmNvbnRyb2wpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xQYWlyWzBdLl9wYXJlbnQgPT09IGFjY2Vzc29yLl9jb250cm9sLl9wYXJlbnQgJiZcbiAgICAgICAgICAgICAgICBjb250cm9sUGFpclsxXS5uYW1lID09PSBhY2Nlc3Nvci5uYW1lO1xuICAgICAgICB9O1xuICAgICAgICBSYWRpb0NvbnRyb2xSZWdpc3RyeS5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdGFibGUgfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIFJhZGlvQ29udHJvbFJlZ2lzdHJ5LmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgICAgIHJldHVybiBSYWRpb0NvbnRyb2xSZWdpc3RyeTtcbiAgICB9KCkpO1xuICAgIC8qKlxuICAgICAqIFxcQHdoYXRJdERvZXMgV3JpdGVzIHJhZGlvIGNvbnRyb2wgdmFsdWVzIGFuZCBsaXN0ZW5zIHRvIHJhZGlvIGNvbnRyb2wgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIFVzZWQgYnkge1xcQGxpbmsgTmdNb2RlbH0sIHtcXEBsaW5rIEZvcm1Db250cm9sRGlyZWN0aXZlfSwgYW5kIHtcXEBsaW5rIEZvcm1Db250cm9sTmFtZX1cbiAgICAgKiB0byBrZWVwIHRoZSB2aWV3IHN5bmNlZCB3aXRoIHRoZSB7XFxAbGluayBGb3JtQ29udHJvbH0gbW9kZWwuXG4gICAgICpcbiAgICAgKiBcXEBob3dUb1VzZVxuICAgICAqXG4gICAgICogSWYgeW91IGhhdmUgaW1wb3J0ZWQgdGhlIHtcXEBsaW5rIEZvcm1zTW9kdWxlfSBvciB0aGUge1xcQGxpbmsgUmVhY3RpdmVGb3Jtc01vZHVsZX0sIHRoaXNcbiAgICAgKiB2YWx1ZSBhY2Nlc3NvciB3aWxsIGJlIGFjdGl2ZSBvbiBhbnkgcmFkaW8gY29udHJvbCB0aGF0IGhhcyBhIGZvcm0gZGlyZWN0aXZlLiBZb3UgZG9cbiAgICAgKiAqKm5vdCoqIG5lZWQgdG8gYWRkIGEgc3BlY2lhbCBzZWxlY3RvciB0byBhY3RpdmF0ZSBpdC5cbiAgICAgKlxuICAgICAqICMjIyBIb3cgdG8gdXNlIHJhZGlvIGJ1dHRvbnMgd2l0aCBmb3JtIGRpcmVjdGl2ZXNcbiAgICAgKlxuICAgICAqIFRvIHVzZSByYWRpbyBidXR0b25zIGluIGEgdGVtcGxhdGUtZHJpdmVuIGZvcm0sIHlvdSdsbCB3YW50IHRvIGVuc3VyZSB0aGF0IHJhZGlvIGJ1dHRvbnNcbiAgICAgKiBpbiB0aGUgc2FtZSBncm91cCBoYXZlIHRoZSBzYW1lIGBuYW1lYCBhdHRyaWJ1dGUuICBSYWRpbyBidXR0b25zIHdpdGggZGlmZmVyZW50IGBuYW1lYFxuICAgICAqIGF0dHJpYnV0ZXMgZG8gbm90IGFmZmVjdCBlYWNoIG90aGVyLlxuICAgICAqXG4gICAgICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvcmFkaW9CdXR0b25zL3JhZGlvX2J1dHRvbl9leGFtcGxlLnRzIHJlZ2lvbj0nVGVtcGxhdGVEcml2ZW4nfVxuICAgICAqXG4gICAgICogV2hlbiB1c2luZyByYWRpbyBidXR0b25zIGluIGEgcmVhY3RpdmUgZm9ybSwgcmFkaW8gYnV0dG9ucyBpbiB0aGUgc2FtZSBncm91cCBzaG91bGQgaGF2ZSB0aGVcbiAgICAgKiBzYW1lIGBmb3JtQ29udHJvbE5hbWVgLiBZb3UgY2FuIGFsc28gYWRkIGEgYG5hbWVgIGF0dHJpYnV0ZSwgYnV0IGl0J3Mgb3B0aW9uYWwuXG4gICAgICpcbiAgICAgKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9yZWFjdGl2ZVJhZGlvQnV0dG9ucy9yZWFjdGl2ZV9yYWRpb19idXR0b25fZXhhbXBsZS50cyByZWdpb249J1JlYWN0aXZlJ31cbiAgICAgKlxuICAgICAqICAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gICAgICpcbiAgICAgKiAgXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAgICAgICAgICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICAgICAgICAgKiBAcGFyYW0gez99IF9yZWdpc3RyeVxuICAgICAgICAgKiBAcGFyYW0gez99IF9pbmplY3RvclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvcihfcmVuZGVyZXIsIF9lbGVtZW50UmVmLCBfcmVnaXN0cnksIF9pbmplY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmID0gX2VsZW1lbnRSZWY7XG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RyeSA9IF9yZWdpc3RyeTtcbiAgICAgICAgICAgIHRoaXMuX2luamVjdG9yID0gX2luamVjdG9yO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250cm9sID0gdGhpcy5faW5qZWN0b3IuZ2V0KE5nQ29udHJvbCk7XG4gICAgICAgICAgICB0aGlzLl9jaGVja05hbWUoKTtcbiAgICAgICAgICAgIHRoaXMuX3JlZ2lzdHJ5LmFkZCh0aGlzLl9jb250cm9sLCB0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fcmVnaXN0cnkucmVtb3ZlKHRoaXMpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUud3JpdGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB2YWx1ZSA9PT0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjaGVja2VkJywgdGhpcy5fc3RhdGUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPbkNoYW5nZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuX2ZuID0gZm47XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZuKF90aGlzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcmVnaXN0cnkuc2VsZWN0KF90aGlzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5maXJlVW5jaGVjayA9IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLndyaXRlVmFsdWUodmFsdWUpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPblRvdWNoZWQgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuc2V0RGlzYWJsZWRTdGF0ZSA9IGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fY2hlY2tOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubmFtZSAmJiB0aGlzLmZvcm1Db250cm9sTmFtZSAmJiB0aGlzLm5hbWUgIT09IHRoaXMuZm9ybUNvbnRyb2xOYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGhyb3dOYW1lRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5uYW1lICYmIHRoaXMuZm9ybUNvbnRyb2xOYW1lKVxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IHRoaXMuZm9ybUNvbnRyb2xOYW1lO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl90aHJvd05hbWVFcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgIElmIHlvdSBkZWZpbmUgYm90aCBhIG5hbWUgYW5kIGEgZm9ybUNvbnRyb2xOYW1lIGF0dHJpYnV0ZSBvbiB5b3VyIHJhZGlvIGJ1dHRvbiwgdGhlaXIgdmFsdWVzXFxuICAgICAgbXVzdCBtYXRjaC4gRXg6IDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJmb29kXFxcIiBuYW1lPVxcXCJmb29kXFxcIj5cXG4gICAgXCIpO1xuICAgICAgICB9O1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFt0eXBlPXJhZGlvXVtmb3JtQ29udHJvbE5hbWVdLGlucHV0W3R5cGU9cmFkaW9dW2Zvcm1Db250cm9sXSxpbnB1dFt0eXBlPXJhZGlvXVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgpJywgJyhibHVyKSc6ICdvblRvdWNoZWQoKScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW1JBRElPX1ZBTFVFX0FDQ0VTU09SXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuUmVuZGVyZXIsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRWxlbWVudFJlZiwgfSxcbiAgICAgICAgICAgIHsgdHlwZTogUmFkaW9Db250cm9sUmVnaXN0cnksIH0sXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0b3IsIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnbmFtZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQgfSxdLFxuICAgICAgICAgICAgJ2Zvcm1Db250cm9sTmFtZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQgfSxdLFxuICAgICAgICAgICAgJ3ZhbHVlJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yO1xuICAgIH0oKSk7XG5cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBSQU5HRV9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gUmFuZ2VWYWx1ZUFjY2Vzc29yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBhY2Nlc3NvciBmb3Igd3JpdGluZyBhIHJhbmdlIHZhbHVlIGFuZCBsaXN0ZW5pbmcgdG8gY2hhbmdlcyB0aGF0IGlzIHVzZWQgYnkgdGhlXG4gICAgICoge1xcQGxpbmsgTmdNb2RlbH0sIHtcXEBsaW5rIEZvcm1Db250cm9sRGlyZWN0aXZlfSwgYW5kIHtcXEBsaW5rIEZvcm1Db250cm9sTmFtZX0gZGlyZWN0aXZlcy5cbiAgICAgKlxuICAgICAqICAjIyMgRXhhbXBsZVxuICAgICAqICBgYGBcbiAgICAgKiAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIFsobmdNb2RlbCldPVwiYWdlXCIgPlxuICAgICAqICBgYGBcbiAgICAgKi9cbiAgICB2YXIgUmFuZ2VWYWx1ZUFjY2Vzc29yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICAgICAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIFJhbmdlVmFsdWVBY2Nlc3NvcihfcmVuZGVyZXIsIF9lbGVtZW50UmVmKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlciA9IF9yZW5kZXJlcjtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYgPSBfZWxlbWVudFJlZjtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoXykgeyB9O1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhbmdlVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUud3JpdGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgcGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFuZ2VWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7IGZuKHZhbHVlID09ICcnID8gbnVsbCA6IHBhcnNlRmxvYXQodmFsdWUpKTsgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhbmdlVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPblRvdWNoZWQgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFuZ2VWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5zZXREaXNhYmxlZFN0YXRlID0gZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICAgICAgICB9O1xuICAgICAgICBSYW5nZVZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W3R5cGU9cmFuZ2VdW2Zvcm1Db250cm9sTmFtZV0saW5wdXRbdHlwZT1yYW5nZV1bZm9ybUNvbnRyb2xdLGlucHV0W3R5cGU9cmFuZ2VdW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcoaW5wdXQpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW1JBTkdFX1ZBTFVFX0FDQ0VTU09SXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIFJhbmdlVmFsdWVBY2Nlc3Nvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5SZW5kZXJlciwgfSxcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5FbGVtZW50UmVmLCB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICByZXR1cm4gUmFuZ2VWYWx1ZUFjY2Vzc29yO1xuICAgIH0oKSk7XG5cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBTRUxFQ1RfVkFMVUVfQUNDRVNTT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gaWRcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfYnVpbGRWYWx1ZVN0cmluZyhpZCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGlkID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gXCJcIiArIHZhbHVlO1xuICAgICAgICBpZiAoIWlzUHJpbWl0aXZlKHZhbHVlKSlcbiAgICAgICAgICAgIHZhbHVlID0gJ09iamVjdCc7XG4gICAgICAgIHJldHVybiAoaWQgKyBcIjogXCIgKyB2YWx1ZSkuc2xpY2UoMCwgNTApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlU3RyaW5nXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZXh0cmFjdElkKHZhbHVlU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVN0cmluZy5zcGxpdCgnOicpWzBdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBcXEB3aGF0SXREb2VzIFdyaXRlcyB2YWx1ZXMgYW5kIGxpc3RlbnMgdG8gY2hhbmdlcyBvbiBhIHNlbGVjdCBlbGVtZW50LlxuICAgICAqXG4gICAgICogVXNlZCBieSB7XFxAbGluayBOZ01vZGVsfSwge1xcQGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfVxuICAgICAqIHRvIGtlZXAgdGhlIHZpZXcgc3luY2VkIHdpdGggdGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfSBtb2RlbC5cbiAgICAgKlxuICAgICAqIFxcQGhvd1RvVXNlXG4gICAgICpcbiAgICAgKiBJZiB5b3UgaGF2ZSBpbXBvcnRlZCB0aGUge1xcQGxpbmsgRm9ybXNNb2R1bGV9IG9yIHRoZSB7XFxAbGluayBSZWFjdGl2ZUZvcm1zTW9kdWxlfSwgdGhpc1xuICAgICAqIHZhbHVlIGFjY2Vzc29yIHdpbGwgYmUgYWN0aXZlIG9uIGFueSBzZWxlY3QgY29udHJvbCB0aGF0IGhhcyBhIGZvcm0gZGlyZWN0aXZlLiBZb3UgZG9cbiAgICAgKiAqKm5vdCoqIG5lZWQgdG8gYWRkIGEgc3BlY2lhbCBzZWxlY3RvciB0byBhY3RpdmF0ZSBpdC5cbiAgICAgKlxuICAgICAqICMjIyBIb3cgdG8gdXNlIHNlbGVjdCBjb250cm9scyB3aXRoIGZvcm0gZGlyZWN0aXZlc1xuICAgICAqXG4gICAgICogVG8gdXNlIGEgc2VsZWN0IGluIGEgdGVtcGxhdGUtZHJpdmVuIGZvcm0sIHNpbXBseSBhZGQgYW4gYG5nTW9kZWxgIGFuZCBhIGBuYW1lYFxuICAgICAqIGF0dHJpYnV0ZSB0byB0aGUgbWFpbiBgPHNlbGVjdD5gIHRhZy5cbiAgICAgKlxuICAgICAqIElmIHlvdXIgb3B0aW9uIHZhbHVlcyBhcmUgc2ltcGxlIHN0cmluZ3MsIHlvdSBjYW4gYmluZCB0byB0aGUgbm9ybWFsIGB2YWx1ZWAgcHJvcGVydHlcbiAgICAgKiBvbiB0aGUgb3B0aW9uLiAgSWYgeW91ciBvcHRpb24gdmFsdWVzIGhhcHBlbiB0byBiZSBvYmplY3RzIChhbmQgeW91J2QgbGlrZSB0byBzYXZlIHRoZVxuICAgICAqIHNlbGVjdGlvbiBpbiB5b3VyIGZvcm0gYXMgYW4gb2JqZWN0KSwgdXNlIGBuZ1ZhbHVlYCBpbnN0ZWFkOlxuICAgICAqXG4gICAgICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvc2VsZWN0Q29udHJvbC9zZWxlY3RfY29udHJvbF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgKlxuICAgICAqIEluIHJlYWN0aXZlIGZvcm1zLCB5b3UnbGwgYWxzbyB3YW50IHRvIGFkZCB5b3VyIGZvcm0gZGlyZWN0aXZlIChgZm9ybUNvbnRyb2xOYW1lYCBvclxuICAgICAqIGBmb3JtQ29udHJvbGApIG9uIHRoZSBtYWluIGA8c2VsZWN0PmAgdGFnLiBMaWtlIGluIHRoZSBmb3JtZXIgZXhhbXBsZSwgeW91IGhhdmUgdGhlXG4gICAgICogY2hvaWNlIG9mIGJpbmRpbmcgdG8gdGhlICBgdmFsdWVgIG9yIGBuZ1ZhbHVlYCBwcm9wZXJ0eSBvbiB0aGUgc2VsZWN0J3Mgb3B0aW9ucy5cbiAgICAgKlxuICAgICAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL3JlYWN0aXZlU2VsZWN0Q29udHJvbC9yZWFjdGl2ZV9zZWxlY3RfY29udHJvbF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgKlxuICAgICAqIE5vdGU6IFdlIGxpc3RlbiB0byB0aGUgJ2NoYW5nZScgZXZlbnQgYmVjYXVzZSAnaW5wdXQnIGV2ZW50cyBhcmVuJ3QgZmlyZWRcbiAgICAgKiBmb3Igc2VsZWN0cyBpbiBGaXJlZm94IGFuZCBJRTpcbiAgICAgKiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMDI0MzUwXG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvNDY2MDA0NS9cbiAgICAgKlxuICAgICAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAgICAgKlxuICAgICAqIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICAgICAgICAgKiBAcGFyYW0gez99IF9lbGVtZW50UmVmXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcihfcmVuZGVyZXIsIF9lbGVtZW50UmVmKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlciA9IF9yZW5kZXJlcjtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYgPSBfZWxlbWVudFJlZjtcbiAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgIHRoaXMuX29wdGlvbk1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgIHRoaXMuX2lkQ291bnRlciA9IDA7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKF8pIHsgfTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUud3JpdGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gaWQgPSB0aGlzLl9nZXRPcHRpb25JZCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzZWxlY3RlZEluZGV4JywgLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdmFsdWVTdHJpbmcgPSBfYnVpbGRWYWx1ZVN0cmluZyhpZCwgdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdmFsdWVTdHJpbmcpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudmFsdWUgPSB2YWx1ZVN0cmluZztcbiAgICAgICAgICAgICAgICBmbihfdGhpcy5fZ2V0T3B0aW9uVmFsdWUodmFsdWVTdHJpbmcpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPblRvdWNoZWQgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnNldERpc2FibGVkU3RhdGUgPSBmdW5jdGlvbiAoaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9yZWdpc3Rlck9wdGlvbiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh0aGlzLl9pZENvdW50ZXIrKykudG9TdHJpbmcoKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fZ2V0T3B0aW9uSWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBBcnJheS5mcm9tKHRoaXMuX29wdGlvbk1hcC5rZXlzKCkpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBpZiAobG9vc2VJZGVudGljYWwodGhpcy5fb3B0aW9uTWFwLmdldChpZCksIHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlU3RyaW5nXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2dldE9wdGlvblZhbHVlID0gZnVuY3Rpb24gKHZhbHVlU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpZCA9IF9leHRyYWN0SWQodmFsdWVTdHJpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbk1hcC5oYXMoaWQpID8gdGhpcy5fb3B0aW9uTWFwLmdldChpZCkgOiB2YWx1ZVN0cmluZztcbiAgICAgICAgfTtcbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdDpub3QoW211bHRpcGxlXSlbZm9ybUNvbnRyb2xOYW1lXSxzZWxlY3Q6bm90KFttdWx0aXBsZV0pW2Zvcm1Db250cm9sXSxzZWxlY3Q6bm90KFttdWx0aXBsZV0pW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJywgJyhibHVyKSc6ICdvblRvdWNoZWQoKScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW1NFTEVDVF9WQUxVRV9BQ0NFU1NPUl1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5SZW5kZXJlciwgfSxcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5FbGVtZW50UmVmLCB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICByZXR1cm4gU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3I7XG4gICAgfSgpKTtcbiAgICAvKipcbiAgICAgKiBcXEB3aGF0SXREb2VzIE1hcmtzIGA8b3B0aW9uPmAgYXMgZHluYW1pYywgc28gQW5ndWxhciBjYW4gYmUgbm90aWZpZWQgd2hlbiBvcHRpb25zIGNoYW5nZS5cbiAgICAgKlxuICAgICAqIFxcQGhvd1RvVXNlXG4gICAgICpcbiAgICAgKiBTZWUgZG9jcyBmb3Ige1xcQGxpbmsgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZvciB1c2FnZSBleGFtcGxlcy5cbiAgICAgKlxuICAgICAqIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBOZ1NlbGVjdE9wdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IF9lbGVtZW50XG4gICAgICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICAgICAqIEBwYXJhbSB7P30gX3NlbGVjdFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gTmdTZWxlY3RPcHRpb24oX2VsZW1lbnQsIF9yZW5kZXJlciwgX3NlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudCA9IF9lbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3QgPSBfc2VsZWN0O1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdClcbiAgICAgICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5fc2VsZWN0Ll9yZWdpc3Rlck9wdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ1NlbGVjdE9wdGlvbi5wcm90b3R5cGUsIFwibmdWYWx1ZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdCA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0Ll9vcHRpb25NYXAuc2V0KHRoaXMuaWQsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRFbGVtZW50VmFsdWUoX2J1aWxkVmFsdWVTdHJpbmcodGhpcy5pZCwgdmFsdWUpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ1NlbGVjdE9wdGlvbi5wcm90b3R5cGUsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldEVsZW1lbnRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdTZWxlY3RPcHRpb24ucHJvdG90eXBlLl9zZXRFbGVtZW50VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ1NlbGVjdE9wdGlvbi5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0Ll9vcHRpb25NYXAuZGVsZXRlKHRoaXMuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdC53cml0ZVZhbHVlKHRoaXMuX3NlbGVjdC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE5nU2VsZWN0T3B0aW9uLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbeyBzZWxlY3RvcjogJ29wdGlvbicgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBOZ1NlbGVjdE9wdGlvbi5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5FbGVtZW50UmVmLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlJlbmRlcmVyLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvciwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSG9zdCB9LF0gfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgTmdTZWxlY3RPcHRpb24ucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnbmdWYWx1ZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnbmdWYWx1ZScsXSB9LF0sXG4gICAgICAgICAgICAndmFsdWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ3ZhbHVlJyxdIH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE5nU2VsZWN0T3B0aW9uO1xuICAgIH0oKSk7XG5cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBTRUxFQ1RfTVVMVElQTEVfVkFMVUVfQUNDRVNTT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBpZFxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9idWlsZFZhbHVlU3RyaW5nJDEoaWQsIHZhbHVlKSB7XG4gICAgICAgIGlmIChpZCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyB2YWx1ZTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICB2YWx1ZSA9IFwiJ1wiICsgdmFsdWUgKyBcIidcIjtcbiAgICAgICAgaWYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkpXG4gICAgICAgICAgICB2YWx1ZSA9ICdPYmplY3QnO1xuICAgICAgICByZXR1cm4gKGlkICsgXCI6IFwiICsgdmFsdWUpLnNsaWNlKDAsIDUwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVN0cmluZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2V4dHJhY3RJZCQxKHZhbHVlU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVN0cmluZy5zcGxpdCgnOicpWzBdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgYWNjZXNzb3IgZm9yIHdyaXRpbmcgYSB2YWx1ZSBhbmQgbGlzdGVuaW5nIHRvIGNoYW5nZXMgb24gYSBzZWxlY3QgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICAgICAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IoX3JlbmRlcmVyLCBfZWxlbWVudFJlZikge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmID0gX2VsZW1lbnRSZWY7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25NYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9pZENvdW50ZXIgPSAwO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChfKSB7IH07XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUud3JpdGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG9wdGlvblNlbGVjdGVkU3RhdGVTZXR0ZXI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IHZhbHVlcyB0byBpZHNcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpZHNfMSA9IHZhbHVlLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gX3RoaXMuX2dldE9wdGlvbklkKHYpOyB9KTtcbiAgICAgICAgICAgICAgICBvcHRpb25TZWxlY3RlZFN0YXRlU2V0dGVyID0gZnVuY3Rpb24gKG9wdCwgbykgeyBvcHQuX3NldFNlbGVjdGVkKGlkc18xLmluZGV4T2Yoby50b1N0cmluZygpKSA+IC0xKTsgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wdGlvblNlbGVjdGVkU3RhdGVTZXR0ZXIgPSBmdW5jdGlvbiAob3B0LCBvKSB7IG9wdC5fc2V0U2VsZWN0ZWQoZmFsc2UpOyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fb3B0aW9uTWFwLmZvckVhY2gob3B0aW9uU2VsZWN0ZWRTdGF0ZVNldHRlcik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChfKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gc2VsZWN0ZWQgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoXy5oYXNPd25Qcm9wZXJ0eSgnc2VsZWN0ZWRPcHRpb25zJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gb3B0aW9ucyA9IF8uc2VsZWN0ZWRPcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciAvKiogQHR5cGUgez99ICovIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gb3B0ID0gb3B0aW9ucy5pdGVtKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdmFsID0gX3RoaXMuX2dldE9wdGlvblZhbHVlKG9wdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5wdXNoKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG9wdGlvbnMgPSAoXy5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgLyoqIEB0eXBlIHs/fSAqLyBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG9wdCA9IG9wdGlvbnMuaXRlbShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHQuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWwgPSBfdGhpcy5fZ2V0T3B0aW9uVmFsdWUob3B0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5wdXNoKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMudmFsdWUgPSBzZWxlY3RlZDtcbiAgICAgICAgICAgICAgICBmbihzZWxlY3RlZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPblRvdWNoZWQgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuc2V0RGlzYWJsZWRTdGF0ZSA9IGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9yZWdpc3Rlck9wdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gaWQgPSAodGhpcy5faWRDb3VudGVyKyspLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25NYXAuc2V0KGlkLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fZ2V0T3B0aW9uSWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBBcnJheS5mcm9tKHRoaXMuX29wdGlvbk1hcC5rZXlzKCkpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBpZiAobG9vc2VJZGVudGljYWwodGhpcy5fb3B0aW9uTWFwLmdldChpZCkuX3ZhbHVlLCB2YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVN0cmluZ1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2dldE9wdGlvblZhbHVlID0gZnVuY3Rpb24gKHZhbHVlU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpZCA9IF9leHRyYWN0SWQkMSh2YWx1ZVN0cmluZyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9uTWFwLmhhcyhpZCkgPyB0aGlzLl9vcHRpb25NYXAuZ2V0KGlkKS5fdmFsdWUgOiB2YWx1ZVN0cmluZztcbiAgICAgICAgfTtcbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0W211bHRpcGxlXVtmb3JtQ29udHJvbE5hbWVdLHNlbGVjdFttdWx0aXBsZV1bZm9ybUNvbnRyb2xdLHNlbGVjdFttdWx0aXBsZV1bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldCknLCAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbU0VMRUNUX01VTFRJUExFX1ZBTFVFX0FDQ0VTU09SXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuUmVuZGVyZXIsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRWxlbWVudFJlZiwgfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgcmV0dXJuIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3I7XG4gICAgfSgpKTtcbiAgICAvKipcbiAgICAgKiBNYXJrcyBgPG9wdGlvbj5gIGFzIGR5bmFtaWMsIHNvIEFuZ3VsYXIgY2FuIGJlIG5vdGlmaWVkIHdoZW4gb3B0aW9ucyBjaGFuZ2UuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogPHNlbGVjdCBtdWx0aXBsZSBuYW1lPVwiY2l0eVwiIG5nTW9kZWw+XG4gICAgICogICA8b3B0aW9uICpuZ0Zvcj1cImxldCBjIG9mIGNpdGllc1wiIFt2YWx1ZV09XCJjXCI+PC9vcHRpb24+XG4gICAgICogPC9zZWxlY3Q+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgdmFyIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBfZWxlbWVudFxuICAgICAgICAgKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICAgICAgICAgKiBAcGFyYW0gez99IF9zZWxlY3RcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24oX2VsZW1lbnQsIF9yZW5kZXJlciwgX3NlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudCA9IF9lbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3QgPSBfc2VsZWN0O1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLl9zZWxlY3QuX3JlZ2lzdGVyT3B0aW9uKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZSwgXCJuZ1ZhbHVlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0ID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldEVsZW1lbnRWYWx1ZShfYnVpbGRWYWx1ZVN0cmluZyQxKHRoaXMuaWQsIHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5wcm90b3R5cGUsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2V0RWxlbWVudFZhbHVlKF9idWlsZFZhbHVlU3RyaW5nJDEodGhpcy5pZCwgdmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldEVsZW1lbnRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZS5fc2V0RWxlbWVudFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez99IHNlbGVjdGVkXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZS5fc2V0U2VsZWN0ZWQgPSBmdW5jdGlvbiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3QuX29wdGlvbk1hcC5kZWxldGUodGhpcy5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdvcHRpb24nIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5FbGVtZW50UmVmLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlJlbmRlcmVyLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5Ib3N0IH0sXSB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ25nVmFsdWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ25nVmFsdWUnLF0gfSxdLFxuICAgICAgICAgICAgJ3ZhbHVlJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWyd2YWx1ZScsXSB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IG5hbWVcbiAgICAgKiBAcGFyYW0gez99IHBhcmVudFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gY29udHJvbFBhdGgobmFtZSwgcGFyZW50KSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQucGF0aC5jb25jYXQoW25hbWVdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldFVwQ29udHJvbChjb250cm9sLCBkaXIpIHtcbiAgICAgICAgaWYgKCFjb250cm9sKVxuICAgICAgICAgICAgX3Rocm93RXJyb3IoZGlyLCAnQ2Fubm90IGZpbmQgY29udHJvbCB3aXRoJyk7XG4gICAgICAgIGlmICghZGlyLnZhbHVlQWNjZXNzb3IpXG4gICAgICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdObyB2YWx1ZSBhY2Nlc3NvciBmb3IgZm9ybSBjb250cm9sIHdpdGgnKTtcbiAgICAgICAgY29udHJvbC52YWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2UoW2NvbnRyb2wudmFsaWRhdG9yLCBkaXIudmFsaWRhdG9yXSk7XG4gICAgICAgIGNvbnRyb2wuYXN5bmNWYWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyhbY29udHJvbC5hc3luY1ZhbGlkYXRvciwgZGlyLmFzeW5jVmFsaWRhdG9yXSk7XG4gICAgICAgIGRpci52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUoY29udHJvbC52YWx1ZSk7XG4gICAgICAgIC8vIHZpZXcgLT4gbW9kZWxcbiAgICAgICAgZGlyLnZhbHVlQWNjZXNzb3IucmVnaXN0ZXJPbkNoYW5nZShmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGRpci52aWV3VG9Nb2RlbFVwZGF0ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgICAgICBjb250cm9sLnNldFZhbHVlKG5ld1ZhbHVlLCB7IGVtaXRNb2RlbFRvVmlld0NoYW5nZTogZmFsc2UgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0b3VjaGVkXG4gICAgICAgIGRpci52YWx1ZUFjY2Vzc29yLnJlZ2lzdGVyT25Ub3VjaGVkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpOyB9KTtcbiAgICAgICAgY29udHJvbC5yZWdpc3Rlck9uQ2hhbmdlKGZ1bmN0aW9uIChuZXdWYWx1ZSwgZW1pdE1vZGVsRXZlbnQpIHtcbiAgICAgICAgICAgIC8vIGNvbnRyb2wgLT4gdmlld1xuICAgICAgICAgICAgZGlyLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICAvLyBjb250cm9sIC0+IG5nTW9kZWxcbiAgICAgICAgICAgIGlmIChlbWl0TW9kZWxFdmVudClcbiAgICAgICAgICAgICAgICBkaXIudmlld1RvTW9kZWxVcGRhdGUobmV3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRpci52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnRyb2wucmVnaXN0ZXJPbkRpc2FibGVkQ2hhbmdlKGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7IGRpci52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZCk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlLXJ1biB2YWxpZGF0aW9uIHdoZW4gdmFsaWRhdG9yIGJpbmRpbmcgY2hhbmdlcywgZS5nLiBtaW5sZW5ndGg9MyAtPiBtaW5sZW5ndGg9NFxuICAgICAgICBkaXIuX3Jhd1ZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICBpZiAoKCh2YWxpZGF0b3IpKS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKVxuICAgICAgICAgICAgICAgICgodmFsaWRhdG9yKSkucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmdW5jdGlvbiAoKSB7IHJldHVybiBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXIuX3Jhd0FzeW5jVmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIGlmICgoKHZhbGlkYXRvcikpLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UpXG4gICAgICAgICAgICAgICAgKCh2YWxpZGF0b3IpKS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjbGVhblVwQ29udHJvbChjb250cm9sLCBkaXIpIHtcbiAgICAgICAgZGlyLnZhbHVlQWNjZXNzb3IucmVnaXN0ZXJPbkNoYW5nZShmdW5jdGlvbiAoKSB7IHJldHVybiBfbm9Db250cm9sRXJyb3IoZGlyKTsgfSk7XG4gICAgICAgIGRpci52YWx1ZUFjY2Vzc29yLnJlZ2lzdGVyT25Ub3VjaGVkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9ub0NvbnRyb2xFcnJvcihkaXIpOyB9KTtcbiAgICAgICAgZGlyLl9yYXdWYWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRvci5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkaXIuX3Jhd0FzeW5jVmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNvbnRyb2wpXG4gICAgICAgICAgICBjb250cm9sLl9jbGVhckNoYW5nZUZucygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0VXBGb3JtQ29udGFpbmVyKGNvbnRyb2wsIGRpcikge1xuICAgICAgICBpZiAoaXNCbGFuayhjb250cm9sKSlcbiAgICAgICAgICAgIF90aHJvd0Vycm9yKGRpciwgJ0Nhbm5vdCBmaW5kIGNvbnRyb2wgd2l0aCcpO1xuICAgICAgICBjb250cm9sLnZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZShbY29udHJvbC52YWxpZGF0b3IsIGRpci52YWxpZGF0b3JdKTtcbiAgICAgICAgY29udHJvbC5hc3luY1ZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZUFzeW5jKFtjb250cm9sLmFzeW5jVmFsaWRhdG9yLCBkaXIuYXN5bmNWYWxpZGF0b3JdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9ub0NvbnRyb2xFcnJvcihkaXIpIHtcbiAgICAgICAgcmV0dXJuIF90aHJvd0Vycm9yKGRpciwgJ1RoZXJlIGlzIG5vIEZvcm1Db250cm9sIGluc3RhbmNlIGF0dGFjaGVkIHRvIGZvcm0gY29udHJvbCBlbGVtZW50IHdpdGgnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgKiBAcGFyYW0gez99IG1lc3NhZ2VcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF90aHJvd0Vycm9yKGRpciwgbWVzc2FnZSkge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBtZXNzYWdlRW5kO1xuICAgICAgICBpZiAoZGlyLnBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbWVzc2FnZUVuZCA9IFwicGF0aDogJ1wiICsgZGlyLnBhdGguam9pbignIC0+ICcpICsgXCInXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlyLnBhdGhbMF0pIHtcbiAgICAgICAgICAgIG1lc3NhZ2VFbmQgPSBcIm5hbWU6ICdcIiArIGRpci5wYXRoICsgXCInXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZXNzYWdlRW5kID0gJ3Vuc3BlY2lmaWVkIG5hbWUgYXR0cmlidXRlJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSArIFwiIFwiICsgbWVzc2FnZUVuZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gY29tcG9zZVZhbGlkYXRvcnModmFsaWRhdG9ycykge1xuICAgICAgICByZXR1cm4gaXNQcmVzZW50KHZhbGlkYXRvcnMpID8gVmFsaWRhdG9ycy5jb21wb3NlKHZhbGlkYXRvcnMubWFwKG5vcm1hbGl6ZVZhbGlkYXRvcikpIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHZhbGlkYXRvcnMpIHtcbiAgICAgICAgcmV0dXJuIGlzUHJlc2VudCh2YWxpZGF0b3JzKSA/IFZhbGlkYXRvcnMuY29tcG9zZUFzeW5jKHZhbGlkYXRvcnMubWFwKG5vcm1hbGl6ZUFzeW5jVmFsaWRhdG9yKSkgOlxuICAgICAgICAgICAgbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICogQHBhcmFtIHs/fSB2aWV3TW9kZWxcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzUHJvcGVydHlVcGRhdGVkKGNoYW5nZXMsIHZpZXdNb2RlbCkge1xuICAgICAgICBpZiAoIWNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ21vZGVsJykpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNoYW5nZSA9IGNoYW5nZXNbJ21vZGVsJ107XG4gICAgICAgIGlmIChjaGFuZ2UuaXNGaXJzdENoYW5nZSgpKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiAhbG9vc2VJZGVudGljYWwodmlld01vZGVsLCBjaGFuZ2UuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gQlVJTFRJTl9BQ0NFU1NPUlMgPSBbXG4gICAgICAgIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFJhbmdlVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgTnVtYmVyVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgXTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlQWNjZXNzb3JcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzQnVpbHRJbkFjY2Vzc29yKHZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAgcmV0dXJuIEJVSUxUSU5fQUNDRVNTT1JTLnNvbWUoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHZhbHVlQWNjZXNzb3IuY29uc3RydWN0b3IgPT09IGE7IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVBY2Nlc3NvcnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNlbGVjdFZhbHVlQWNjZXNzb3IoZGlyLCB2YWx1ZUFjY2Vzc29ycykge1xuICAgICAgICBpZiAoIXZhbHVlQWNjZXNzb3JzKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGRlZmF1bHRBY2Nlc3NvcjtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gYnVpbHRpbkFjY2Vzc29yO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjdXN0b21BY2Nlc3NvcjtcbiAgICAgICAgdmFsdWVBY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgaWYgKHYuY29uc3RydWN0b3IgPT09IERlZmF1bHRWYWx1ZUFjY2Vzc29yKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdEFjY2Vzc29yID0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzQnVpbHRJbkFjY2Vzc29yKHYpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJ1aWx0aW5BY2Nlc3NvcilcbiAgICAgICAgICAgICAgICAgICAgX3Rocm93RXJyb3IoZGlyLCAnTW9yZSB0aGFuIG9uZSBidWlsdC1pbiB2YWx1ZSBhY2Nlc3NvciBtYXRjaGVzIGZvcm0gY29udHJvbCB3aXRoJyk7XG4gICAgICAgICAgICAgICAgYnVpbHRpbkFjY2Vzc29yID0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21BY2Nlc3NvcilcbiAgICAgICAgICAgICAgICAgICAgX3Rocm93RXJyb3IoZGlyLCAnTW9yZSB0aGFuIG9uZSBjdXN0b20gdmFsdWUgYWNjZXNzb3IgbWF0Y2hlcyBmb3JtIGNvbnRyb2wgd2l0aCcpO1xuICAgICAgICAgICAgICAgIGN1c3RvbUFjY2Vzc29yID0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjdXN0b21BY2Nlc3NvcilcbiAgICAgICAgICAgIHJldHVybiBjdXN0b21BY2Nlc3NvcjtcbiAgICAgICAgaWYgKGJ1aWx0aW5BY2Nlc3NvcilcbiAgICAgICAgICAgIHJldHVybiBidWlsdGluQWNjZXNzb3I7XG4gICAgICAgIGlmIChkZWZhdWx0QWNjZXNzb3IpXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdEFjY2Vzc29yO1xuICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdObyB2YWxpZCB2YWx1ZSBhY2Nlc3NvciBmb3IgZm9ybSBjb250cm9sIHdpdGgnKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIGEgYmFzZSBjbGFzcyBmb3IgY29kZSBzaGFyZWQgYmV0d2VlbiB7XFxAbGluayBOZ01vZGVsR3JvdXB9IGFuZCB7XFxAbGluayBGb3JtR3JvdXBOYW1lfS5cbiAgICAgKlxuICAgICAqIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUoKSB7XG4gICAgICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrUGFyZW50VHlwZSgpO1xuICAgICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLmFkZEZvcm1Hcm91cCh0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlbW92ZUZvcm1Hcm91cCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IHRoZSB7XFxAbGluayBGb3JtR3JvdXB9IGJhY2tpbmcgdGhpcyBiaW5kaW5nLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmZvcm1EaXJlY3RpdmUuZ2V0Rm9ybUdyb3VwKHRoaXMpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IHRoZSBwYXRoIHRvIHRoaXMgY29udHJvbCBncm91cC5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udHJvbFBhdGgodGhpcy5uYW1lLCB0aGlzLl9wYXJlbnQpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJmb3JtRGlyZWN0aXZlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IHRoZSB7XFxAbGluayBGb3JtfSB0byB3aGljaCB0aGlzIGdyb3VwIGJlbG9uZ3MuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3BhcmVudCA/IHRoaXMuX3BhcmVudC5mb3JtRGlyZWN0aXZlIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUsIFwidmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl92YWxpZGF0b3JzKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiYXN5bmNWYWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModGhpcy5fYXN5bmNWYWxpZGF0b3JzKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLl9jaGVja1BhcmVudFR5cGUgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIHJldHVybiBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZTtcbiAgICB9KENvbnRyb2xDb250YWluZXIpKTtcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICB2YXIgQWJzdHJhY3RDb250cm9sU3RhdHVzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2RcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEFic3RyYWN0Q29udHJvbFN0YXR1cyhjZCkge1xuICAgICAgICAgICAgdGhpcy5fY2QgPSBjZDtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sU3RhdHVzLnByb3RvdHlwZSwgXCJuZ0NsYXNzVW50b3VjaGVkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jZC5jb250cm9sID8gdGhpcy5fY2QuY29udHJvbC51bnRvdWNoZWQgOiBmYWxzZTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xTdGF0dXMucHJvdG90eXBlLCBcIm5nQ2xhc3NUb3VjaGVkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jZC5jb250cm9sID8gdGhpcy5fY2QuY29udHJvbC50b3VjaGVkIDogZmFsc2U7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sU3RhdHVzLnByb3RvdHlwZSwgXCJuZ0NsYXNzUHJpc3RpbmVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2NkLmNvbnRyb2wgPyB0aGlzLl9jZC5jb250cm9sLnByaXN0aW5lIDogZmFsc2U7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sU3RhdHVzLnByb3RvdHlwZSwgXCJuZ0NsYXNzRGlydHlcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2NkLmNvbnRyb2wgPyB0aGlzLl9jZC5jb250cm9sLmRpcnR5IDogZmFsc2U7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sU3RhdHVzLnByb3RvdHlwZSwgXCJuZ0NsYXNzVmFsaWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2NkLmNvbnRyb2wgPyB0aGlzLl9jZC5jb250cm9sLnZhbGlkIDogZmFsc2U7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sU3RhdHVzLnByb3RvdHlwZSwgXCJuZ0NsYXNzSW52YWxpZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wuaW52YWxpZCA6IGZhbHNlOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbFN0YXR1cy5wcm90b3R5cGUsIFwibmdDbGFzc1BlbmRpbmdcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2NkLmNvbnRyb2wgPyB0aGlzLl9jZC5jb250cm9sLnBlbmRpbmcgOiBmYWxzZTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBBYnN0cmFjdENvbnRyb2xTdGF0dXM7XG4gICAgfSgpKTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBuZ0NvbnRyb2xTdGF0dXNIb3N0ID0ge1xuICAgICAgICAnW2NsYXNzLm5nLXVudG91Y2hlZF0nOiAnbmdDbGFzc1VudG91Y2hlZCcsXG4gICAgICAgICdbY2xhc3MubmctdG91Y2hlZF0nOiAnbmdDbGFzc1RvdWNoZWQnLFxuICAgICAgICAnW2NsYXNzLm5nLXByaXN0aW5lXSc6ICduZ0NsYXNzUHJpc3RpbmUnLFxuICAgICAgICAnW2NsYXNzLm5nLWRpcnR5XSc6ICduZ0NsYXNzRGlydHknLFxuICAgICAgICAnW2NsYXNzLm5nLXZhbGlkXSc6ICduZ0NsYXNzVmFsaWQnLFxuICAgICAgICAnW2NsYXNzLm5nLWludmFsaWRdJzogJ25nQ2xhc3NJbnZhbGlkJyxcbiAgICAgICAgJ1tjbGFzcy5uZy1wZW5kaW5nXSc6ICduZ0NsYXNzUGVuZGluZycsXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXJlY3RpdmUgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIEFuZ3VsYXIgZm9ybSBjb250cm9scyB0aGF0IHNldHMgQ1NTIGNsYXNzZXNcbiAgICAgKiBiYXNlZCBvbiBjb250cm9sIHN0YXR1cyAodmFsaWQvaW52YWxpZC9kaXJ0eS9ldGMpLlxuICAgICAqXG4gICAgICogXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIE5nQ29udHJvbFN0YXR1cyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQzKE5nQ29udHJvbFN0YXR1cywgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2RcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIE5nQ29udHJvbFN0YXR1cyhjZCkge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgY2QpO1xuICAgICAgICB9XG4gICAgICAgIE5nQ29udHJvbFN0YXR1cy5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdbZm9ybUNvbnRyb2xOYW1lXSxbbmdNb2RlbF0sW2Zvcm1Db250cm9sXScsIGhvc3Q6IG5nQ29udHJvbFN0YXR1c0hvc3QgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBOZ0NvbnRyb2xTdGF0dXMuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IE5nQ29udHJvbCwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sXSB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICByZXR1cm4gTmdDb250cm9sU3RhdHVzO1xuICAgIH0oQWJzdHJhY3RDb250cm9sU3RhdHVzKSk7XG4gICAgLyoqXG4gICAgICogRGlyZWN0aXZlIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byBBbmd1bGFyIGZvcm0gZ3JvdXBzIHRoYXQgc2V0cyBDU1MgY2xhc3Nlc1xuICAgICAqIGJhc2VkIG9uIGNvbnRyb2wgc3RhdHVzICh2YWxpZC9pbnZhbGlkL2RpcnR5L2V0YykuXG4gICAgICpcbiAgICAgKiBcXEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgTmdDb250cm9sU3RhdHVzR3JvdXAgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkMyhOZ0NvbnRyb2xTdGF0dXNHcm91cCwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2RcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIE5nQ29udHJvbFN0YXR1c0dyb3VwKGNkKSB7XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBjZCk7XG4gICAgICAgIH1cbiAgICAgICAgTmdDb250cm9sU3RhdHVzR3JvdXAuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ1tmb3JtR3JvdXBOYW1lXSxbZm9ybUFycmF5TmFtZV0sW25nTW9kZWxHcm91cF0sW2Zvcm1Hcm91cF0sZm9ybTpub3QoW25nTm9Gb3JtXSksW25nRm9ybV0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogbmdDb250cm9sU3RhdHVzSG9zdFxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE5nQ29udHJvbFN0YXR1c0dyb3VwLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBDb250cm9sQ29udGFpbmVyLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSxdIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIHJldHVybiBOZ0NvbnRyb2xTdGF0dXNHcm91cDtcbiAgICB9KEFic3RyYWN0Q29udHJvbFN0YXR1cykpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkNSA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVzZSBieSBkaXJlY3RpdmVzIGFuZCBjb21wb25lbnRzIHRvIGVtaXQgY3VzdG9tIEV2ZW50cy5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlc1xuICAgICAqXG4gICAgICogSW4gdGhlIGZvbGxvd2luZyBleGFtcGxlLCBgWmlwcHlgIGFsdGVybmF0aXZlbHkgZW1pdHMgYG9wZW5gIGFuZCBgY2xvc2VgIGV2ZW50cyB3aGVuIGl0c1xuICAgICAqIHRpdGxlIGdldHMgY2xpY2tlZDpcbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIFxcQENvbXBvbmVudCh7XG4gICAgICogICBzZWxlY3RvcjogJ3ppcHB5JyxcbiAgICAgKiAgIHRlbXBsYXRlOiBgXG4gICAgICogICA8ZGl2IGNsYXNzPVwiemlwcHlcIj5cbiAgICAgKiAgICAgPGRpdiAoY2xpY2spPVwidG9nZ2xlKClcIj5Ub2dnbGU8L2Rpdj5cbiAgICAgKiAgICAgPGRpdiBbaGlkZGVuXT1cIiF2aXNpYmxlXCI+XG4gICAgICogICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAqICAgICA8L2Rpdj5cbiAgICAgKiAgPC9kaXY+YH0pXG4gICAgICogZXhwb3J0IGNsYXNzIFppcHB5IHtcbiAgICAgKiAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAqICAgXFxAT3V0cHV0KCkgb3BlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICogICBcXEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICpcbiAgICAgKiAgIHRvZ2dsZSgpIHtcbiAgICAgKiAgICAgdGhpcy52aXNpYmxlID0gIXRoaXMudmlzaWJsZTtcbiAgICAgKiAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAqICAgICAgIHRoaXMub3Blbi5lbWl0KG51bGwpO1xuICAgICAqICAgICB9IGVsc2Uge1xuICAgICAqICAgICAgIHRoaXMuY2xvc2UuZW1pdChudWxsKTtcbiAgICAgKiAgICAgfVxuICAgICAqICAgfVxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIFRoZSBldmVudHMgcGF5bG9hZCBjYW4gYmUgYWNjZXNzZWQgYnkgdGhlIHBhcmFtZXRlciBgJGV2ZW50YCBvbiB0aGUgY29tcG9uZW50cyBvdXRwdXQgZXZlbnRcbiAgICAgKiBoYW5kbGVyOlxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogPHppcHB5IChvcGVuKT1cIm9uT3BlbigkZXZlbnQpXCIgKGNsb3NlKT1cIm9uQ2xvc2UoJGV2ZW50KVwiPjwvemlwcHk+XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBVc2VzIFJ4Lk9ic2VydmFibGUgYnV0IHByb3ZpZGVzIGFuIGFkYXB0ZXIgdG8gbWFrZSBpdCB3b3JrIGFzIHNwZWNpZmllZCBoZXJlOlxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qaHVzYWluL29ic2VydmFibGUtc3BlY1xuICAgICAqXG4gICAgICogT25jZSBhIHJlZmVyZW5jZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgc3BlYyBpcyBhdmFpbGFibGUsIHN3aXRjaCB0byBpdC5cbiAgICAgKiBcXEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgRXZlbnRFbWl0dGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDUoRXZlbnRFbWl0dGVyLCBfc3VwZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBbRXZlbnRFbWl0dGVyXSwgd2hpY2ggZGVwZW5kaW5nIG9uIFtpc0FzeW5jXSxcbiAgICAgICAgICogZGVsaXZlcnMgZXZlbnRzIHN5bmNocm9ub3VzbHkgb3IgYXN5bmNocm9ub3VzbHkuXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IGlzQXN5bmNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEV2ZW50RW1pdHRlcihpc0FzeW5jKSB7XG4gICAgICAgICAgICBpZiAoaXNBc3luYyA9PT0gdm9pZCAwKSB7IGlzQXN5bmMgPSBmYWxzZTsgfVxuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9faXNBc3luYyA9IGlzQXN5bmM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAodmFsdWUpIHsgX3N1cGVyLnByb3RvdHlwZS5uZXh0LmNhbGwodGhpcywgdmFsdWUpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/PX0gZ2VuZXJhdG9yT3JOZXh0XG4gICAgICAgICAqIEBwYXJhbSB7Pz19IGVycm9yXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IGNvbXBsZXRlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChnZW5lcmF0b3JPck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gc2NoZWR1bGVyRm47XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBlcnJvckZuID0gZnVuY3Rpb24gKGVycikgeyByZXR1cm4gbnVsbDsgfTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNvbXBsZXRlRm4gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9O1xuICAgICAgICAgICAgaWYgKGdlbmVyYXRvck9yTmV4dCAmJiB0eXBlb2YgZ2VuZXJhdG9yT3JOZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlckZuID0gdGhpcy5fX2lzQXN5bmMgPyBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBnZW5lcmF0b3JPck5leHQubmV4dCh2YWx1ZSk7IH0pO1xuICAgICAgICAgICAgICAgIH0gOiBmdW5jdGlvbiAodmFsdWUpIHsgZ2VuZXJhdG9yT3JOZXh0Lm5leHQodmFsdWUpOyB9O1xuICAgICAgICAgICAgICAgIGlmIChnZW5lcmF0b3JPck5leHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JGbiA9IHRoaXMuX19pc0FzeW5jID8gZnVuY3Rpb24gKGVycikgeyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdlbmVyYXRvck9yTmV4dC5lcnJvcihlcnIpOyB9KTsgfSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyKSB7IGdlbmVyYXRvck9yTmV4dC5lcnJvcihlcnIpOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ2VuZXJhdG9yT3JOZXh0LmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlRm4gPSB0aGlzLl9faXNBc3luYyA/IGZ1bmN0aW9uICgpIHsgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBnZW5lcmF0b3JPck5leHQuY29tcGxldGUoKTsgfSk7IH0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkgeyBnZW5lcmF0b3JPck5leHQuY29tcGxldGUoKTsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZXJGbiA9IHRoaXMuX19pc0FzeW5jID8gZnVuY3Rpb24gKHZhbHVlKSB7IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2VuZXJhdG9yT3JOZXh0KHZhbHVlKTsgfSk7IH0gOlxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodmFsdWUpIHsgZ2VuZXJhdG9yT3JOZXh0KHZhbHVlKTsgfTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JGbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9faXNBc3luYyA/IGZ1bmN0aW9uIChlcnIpIHsgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBlcnJvcihlcnIpOyB9KTsgfSA6IGZ1bmN0aW9uIChlcnIpIHsgZXJyb3IoZXJyKTsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlRm4gPVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2lzQXN5bmMgPyBmdW5jdGlvbiAoKSB7IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcGxldGUoKTsgfSk7IH0gOiBmdW5jdGlvbiAoKSB7IGNvbXBsZXRlKCk7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuc3Vic2NyaWJlLmNhbGwodGhpcywgc2NoZWR1bGVyRm4sIGVycm9yRm4sIGNvbXBsZXRlRm4pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRXZlbnRFbWl0dGVyO1xuICAgIH0ocnhqc19TdWJqZWN0LlN1YmplY3QpKTtcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDYgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgdGhhdCBhIEZvcm1Db250cm9sIGlzIHZhbGlkLCBpLmUuIHRoYXQgbm8gZXJyb3JzIGV4aXN0IGluIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKi9cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBWQUxJRCA9ICdWQUxJRCc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoYXQgYSBGb3JtQ29udHJvbCBpcyBpbnZhbGlkLCBpLmUuIHRoYXQgYW4gZXJyb3IgZXhpc3RzIGluIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKi9cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBJTlZBTElEID0gJ0lOVkFMSUQnO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IGEgRm9ybUNvbnRyb2wgaXMgcGVuZGluZywgaS5lLiB0aGF0IGFzeW5jIHZhbGlkYXRpb24gaXMgb2NjdXJyaW5nIGFuZFxuICAgICAqIGVycm9ycyBhcmUgbm90IHlldCBhdmFpbGFibGUgZm9yIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKi9cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBQRU5ESU5HID0gJ1BFTkRJTkcnO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IGEgRm9ybUNvbnRyb2wgaXMgZGlzYWJsZWQsIGkuZS4gdGhhdCB0aGUgY29udHJvbCBpcyBleGVtcHQgZnJvbSBhbmNlc3RvclxuICAgICAqIGNhbGN1bGF0aW9ucyBvZiB2YWxpZGl0eSBvciB2YWx1ZS5cbiAgICAgKi9cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBESVNBQkxFRCA9ICdESVNBQkxFRCc7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICogQHBhcmFtIHs/fSBwYXRoXG4gICAgICogQHBhcmFtIHs/fSBkZWxpbWl0ZXJcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9maW5kKGNvbnRyb2wsIHBhdGgsIGRlbGltaXRlcikge1xuICAgICAgICBpZiAocGF0aCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICghKHBhdGggaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgICAgIHBhdGggPSAoKHBhdGgpKS5zcGxpdChkZWxpbWl0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoIGluc3RhbmNlb2YgQXJyYXkgJiYgKHBhdGgubGVuZ3RoID09PSAwKSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gKChwYXRoKSkucmVkdWNlKGZ1bmN0aW9uICh2LCBuYW1lKSB7XG4gICAgICAgICAgICBpZiAodiBpbnN0YW5jZW9mIEZvcm1Hcm91cCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2LmNvbnRyb2xzW25hbWVdIHx8IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodiBpbnN0YW5jZW9mIEZvcm1BcnJheSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2LmF0KC8qKiBAdHlwZSB7P30gKi8gKG5hbWUpKSB8fCBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sIGNvbnRyb2wpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHJcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRvT2JzZXJ2YWJsZShyKSB7XG4gICAgICAgIHJldHVybiBpc1Byb21pc2UocikgPyByeGpzX29ic2VydmFibGVfZnJvbVByb21pc2UuZnJvbVByb21pc2UocikgOiByO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gY29lcmNlVG9WYWxpZGF0b3IodmFsaWRhdG9yKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbGlkYXRvcikgPyBjb21wb3NlVmFsaWRhdG9ycyh2YWxpZGF0b3IpIDogdmFsaWRhdG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb2VyY2VUb0FzeW5jVmFsaWRhdG9yKGFzeW5jVmFsaWRhdG9yKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFzeW5jVmFsaWRhdG9yKSA/IGNvbXBvc2VBc3luY1ZhbGlkYXRvcnMoYXN5bmNWYWxpZGF0b3IpIDogYXN5bmNWYWxpZGF0b3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFxcQHdoYXRJdERvZXMgVGhpcyBpcyB0aGUgYmFzZSBjbGFzcyBmb3Ige1xcQGxpbmsgRm9ybUNvbnRyb2x9LCB7XFxAbGluayBGb3JtR3JvdXB9LCBhbmRcbiAgICAgKiB7XFxAbGluayBGb3JtQXJyYXl9LlxuICAgICAqXG4gICAgICogSXQgcHJvdmlkZXMgc29tZSBvZiB0aGUgc2hhcmVkIGJlaGF2aW9yIHRoYXQgYWxsIGNvbnRyb2xzIGFuZCBncm91cHMgb2YgY29udHJvbHMgaGF2ZSwgbGlrZVxuICAgICAqIHJ1bm5pbmcgdmFsaWRhdG9ycywgY2FsY3VsYXRpbmcgc3RhdHVzLCBhbmQgcmVzZXR0aW5nIHN0YXRlLiBJdCBhbHNvIGRlZmluZXMgdGhlIHByb3BlcnRpZXNcbiAgICAgKiB0aGF0IGFyZSBzaGFyZWQgYmV0d2VlbiBhbGwgc3ViLWNsYXNzZXMsIGxpa2UgYHZhbHVlYCwgYHZhbGlkYCwgYW5kIGBkaXJ0eWAuIEl0IHNob3VsZG4ndCBiZVxuICAgICAqIGluc3RhbnRpYXRlZCBkaXJlY3RseS5cbiAgICAgKlxuICAgICAqIFxcQHN0YWJsZVxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqL1xuICAgIHZhciBBYnN0cmFjdENvbnRyb2wgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JcbiAgICAgICAgICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQWJzdHJhY3RDb250cm9sKHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgICAgICAgICAgdGhpcy5hc3luY1ZhbGlkYXRvciA9IGFzeW5jVmFsaWRhdG9yO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICAgICAgdGhpcy5fcHJpc3RpbmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fdG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fb25EaXNhYmxlZENoYW5nZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInZhbHVlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInBhcmVudFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSBwYXJlbnQgY29udHJvbC5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcGFyZW50OyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwic3RhdHVzXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIHZhbGlkYXRpb24gc3RhdHVzIG9mIHRoZSBjb250cm9sLiBUaGVyZSBhcmUgZm91ciBwb3NzaWJsZVxuICAgICAgICAgICAgICogdmFsaWRhdGlvbiBzdGF0dXNlczpcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiAqICoqVkFMSUQqKjogIGNvbnRyb2wgaGFzIHBhc3NlZCBhbGwgdmFsaWRhdGlvbiBjaGVja3NcbiAgICAgICAgICAgICAqICogKipJTlZBTElEKio6IGNvbnRyb2wgaGFzIGZhaWxlZCBhdCBsZWFzdCBvbmUgdmFsaWRhdGlvbiBjaGVja1xuICAgICAgICAgICAgICogKiAqKlBFTkRJTkcqKjogY29udHJvbCBpcyBpbiB0aGUgbWlkc3Qgb2YgY29uZHVjdGluZyBhIHZhbGlkYXRpb24gY2hlY2tcbiAgICAgICAgICAgICAqICogKipESVNBQkxFRCoqOiBjb250cm9sIGlzIGV4ZW1wdCBmcm9tIHZhbGlkYXRpb24gY2hlY2tzXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogVGhlc2Ugc3RhdHVzZXMgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZSwgc28gYSBjb250cm9sIGNhbm5vdCBiZVxuICAgICAgICAgICAgICogYm90aCB2YWxpZCBBTkQgaW52YWxpZCBvciBpbnZhbGlkIEFORCBkaXNhYmxlZC5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc3RhdHVzOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwidmFsaWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBIGNvbnRyb2wgaXMgYHZhbGlkYCB3aGVuIGl0cyBgc3RhdHVzID09PSBWQUxJRGAuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogSW4gb3JkZXIgdG8gaGF2ZSB0aGlzIHN0YXR1cywgdGhlIGNvbnRyb2wgbXVzdCBoYXZlIHBhc3NlZCBhbGwgaXRzXG4gICAgICAgICAgICAgKiB2YWxpZGF0aW9uIGNoZWNrcy5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc3RhdHVzID09PSBWQUxJRDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcImludmFsaWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBIGNvbnRyb2wgaXMgYGludmFsaWRgIHdoZW4gaXRzIGBzdGF0dXMgPT09IElOVkFMSURgLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEluIG9yZGVyIHRvIGhhdmUgdGhpcyBzdGF0dXMsIHRoZSBjb250cm9sIG11c3QgaGF2ZSBmYWlsZWRcbiAgICAgICAgICAgICAqIGF0IGxlYXN0IG9uZSBvZiBpdHMgdmFsaWRhdGlvbiBjaGVja3MuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N0YXR1cyA9PT0gSU5WQUxJRDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInBlbmRpbmdcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBIGNvbnRyb2wgaXMgYHBlbmRpbmdgIHdoZW4gaXRzIGBzdGF0dXMgPT09IFBFTkRJTkdgLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEluIG9yZGVyIHRvIGhhdmUgdGhpcyBzdGF0dXMsIHRoZSBjb250cm9sIG11c3QgYmUgaW4gdGhlXG4gICAgICAgICAgICAgKiBtaWRkbGUgb2YgY29uZHVjdGluZyBhIHZhbGlkYXRpb24gY2hlY2suXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N0YXR1cyA9PSBQRU5ESU5HOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwiZGlzYWJsZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBIGNvbnRyb2wgaXMgYGRpc2FibGVkYCB3aGVuIGl0cyBgc3RhdHVzID09PSBESVNBQkxFRGAuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogRGlzYWJsZWQgY29udHJvbHMgYXJlIGV4ZW1wdCBmcm9tIHZhbGlkYXRpb24gY2hlY2tzIGFuZFxuICAgICAgICAgICAgICogYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgYWdncmVnYXRlIHZhbHVlIG9mIHRoZWlyIGFuY2VzdG9yXG4gICAgICAgICAgICAgKiBjb250cm9scy5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc3RhdHVzID09PSBESVNBQkxFRDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcImVuYWJsZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBIGNvbnRyb2wgaXMgYGVuYWJsZWRgIGFzIGxvbmcgYXMgaXRzIGBzdGF0dXMgIT09IERJU0FCTEVEYC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBJbiBvdGhlciB3b3JkcywgaXQgaGFzIGEgc3RhdHVzIG9mIGBWQUxJRGAsIGBJTlZBTElEYCwgb3JcbiAgICAgICAgICAgICAqIGBQRU5ESU5HYC5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc3RhdHVzICE9PSBESVNBQkxFRDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcImVycm9yc1wiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybnMgYW55IGVycm9ycyBnZW5lcmF0ZWQgYnkgZmFpbGluZyB2YWxpZGF0aW9uLiBJZiB0aGVyZVxuICAgICAgICAgICAgICogYXJlIG5vIGVycm9ycywgaXQgd2lsbCByZXR1cm4gbnVsbC5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZXJyb3JzOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwicHJpc3RpbmVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBIGNvbnRyb2wgaXMgYHByaXN0aW5lYCBpZiB0aGUgdXNlciBoYXMgbm90IHlldCBjaGFuZ2VkXG4gICAgICAgICAgICAgKiB0aGUgdmFsdWUgaW4gdGhlIFVJLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIE5vdGUgdGhhdCBwcm9ncmFtbWF0aWMgY2hhbmdlcyB0byBhIGNvbnRyb2wncyB2YWx1ZSB3aWxsXG4gICAgICAgICAgICAgKiAqbm90KiBtYXJrIGl0IGRpcnR5LlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wcmlzdGluZTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcImRpcnR5XCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQSBjb250cm9sIGlzIGBkaXJ0eWAgaWYgdGhlIHVzZXIgaGFzIGNoYW5nZWQgdGhlIHZhbHVlXG4gICAgICAgICAgICAgKiBpbiB0aGUgVUkuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogTm90ZSB0aGF0IHByb2dyYW1tYXRpYyBjaGFuZ2VzIHRvIGEgY29udHJvbCdzIHZhbHVlIHdpbGxcbiAgICAgICAgICAgICAqICpub3QqIG1hcmsgaXQgZGlydHkuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICF0aGlzLnByaXN0aW5lOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwidG91Y2hlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgY29udHJvbCBpcyBtYXJrZWQgYHRvdWNoZWRgIG9uY2UgdGhlIHVzZXIgaGFzIHRyaWdnZXJlZFxuICAgICAgICAgICAgICogYSBgYmx1cmAgZXZlbnQgb24gaXQuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3RvdWNoZWQ7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJ1bnRvdWNoZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBIGNvbnRyb2wgaXMgYHVudG91Y2hlZGAgaWYgdGhlIHVzZXIgaGFzIG5vdCB5ZXQgdHJpZ2dlcmVkXG4gICAgICAgICAgICAgKiBhIGBibHVyYCBldmVudCBvbiBpdC5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gIXRoaXMuX3RvdWNoZWQ7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJ2YWx1ZUNoYW5nZXNcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbWl0cyBhbiBldmVudCBldmVyeSB0aW1lIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCBjaGFuZ2VzLCBpblxuICAgICAgICAgICAgICogdGhlIFVJIG9yIHByb2dyYW1tYXRpY2FsbHkuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3ZhbHVlQ2hhbmdlczsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInN0YXR1c0NoYW5nZXNcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbWl0cyBhbiBldmVudCBldmVyeSB0aW1lIHRoZSB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgY29udHJvbFxuICAgICAgICAgICAgICogaXMgcmUtY2FsY3VsYXRlZC5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc3RhdHVzQ2hhbmdlczsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSBzeW5jaHJvbm91cyB2YWxpZGF0b3JzIHRoYXQgYXJlIGFjdGl2ZSBvbiB0aGlzIGNvbnRyb2wuICBDYWxsaW5nXG4gICAgICAgICAqIHRoaXMgd2lsbCBvdmVyd3JpdGUgYW55IGV4aXN0aW5nIHN5bmMgdmFsaWRhdG9ycy5cbiAgICAgICAgICogQHBhcmFtIHs/fSBuZXdWYWxpZGF0b3JcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuc2V0VmFsaWRhdG9ycyA9IGZ1bmN0aW9uIChuZXdWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yID0gY29lcmNlVG9WYWxpZGF0b3IobmV3VmFsaWRhdG9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIGFzeW5jIHZhbGlkYXRvcnMgdGhhdCBhcmUgYWN0aXZlIG9uIHRoaXMgY29udHJvbC4gQ2FsbGluZyB0aGlzXG4gICAgICAgICAqIHdpbGwgb3ZlcndyaXRlIGFueSBleGlzdGluZyBhc3luYyB2YWxpZGF0b3JzLlxuICAgICAgICAgKiBAcGFyYW0gez99IG5ld1ZhbGlkYXRvclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5zZXRBc3luY1ZhbGlkYXRvcnMgPSBmdW5jdGlvbiAobmV3VmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmFzeW5jVmFsaWRhdG9yID0gY29lcmNlVG9Bc3luY1ZhbGlkYXRvcihuZXdWYWxpZGF0b3IpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogRW1wdGllcyBvdXQgdGhlIHN5bmMgdmFsaWRhdG9yIGxpc3QuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmNsZWFyVmFsaWRhdG9ycyA9IGZ1bmN0aW9uICgpIHsgdGhpcy52YWxpZGF0b3IgPSBudWxsOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogRW1wdGllcyBvdXQgdGhlIGFzeW5jIHZhbGlkYXRvciBsaXN0LlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5jbGVhckFzeW5jVmFsaWRhdG9ycyA9IGZ1bmN0aW9uICgpIHsgdGhpcy5hc3luY1ZhbGlkYXRvciA9IG51bGw7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXJrcyB0aGUgY29udHJvbCBhcyBgdG91Y2hlZGAuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgd2lsbCBhbHNvIG1hcmsgYWxsIGRpcmVjdCBhbmNlc3RvcnMgYXMgYHRvdWNoZWRgIHRvIG1haW50YWluXG4gICAgICAgICAqIHRoZSBtb2RlbC5cbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18wXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLm1hcmtBc1RvdWNoZWQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBvbmx5U2VsZiA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkub25seVNlbGY7XG4gICAgICAgICAgICB0aGlzLl90b3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm1hcmtBc1RvdWNoZWQoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXJrcyB0aGUgY29udHJvbCBhcyBgdW50b3VjaGVkYC5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgdGhlIGNvbnRyb2wgaGFzIGFueSBjaGlsZHJlbiwgaXQgd2lsbCBhbHNvIG1hcmsgYWxsIGNoaWxkcmVuIGFzIGB1bnRvdWNoZWRgXG4gICAgICAgICAqIHRvIG1haW50YWluIHRoZSBtb2RlbCwgYW5kIHJlLWNhbGN1bGF0ZSB0aGUgYHRvdWNoZWRgIHN0YXR1cyBvZiBhbGwgcGFyZW50XG4gICAgICAgICAqIGNvbnRyb2xzLlxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzBcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUubWFya0FzVW50b3VjaGVkID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgb25seVNlbGYgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLm9ubHlTZWxmO1xuICAgICAgICAgICAgdGhpcy5fdG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sKSB7IGNvbnRyb2wubWFya0FzVW50b3VjaGVkKHsgb25seVNlbGY6IHRydWUgfSk7IH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVRvdWNoZWQoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXJrcyB0aGUgY29udHJvbCBhcyBgZGlydHlgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIHdpbGwgYWxzbyBtYXJrIGFsbCBkaXJlY3QgYW5jZXN0b3JzIGFzIGBkaXJ0eWAgdG8gbWFpbnRhaW5cbiAgICAgICAgICogdGhlIG1vZGVsLlxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzBcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUubWFya0FzRGlydHkgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBvbmx5U2VsZiA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkub25seVNlbGY7XG4gICAgICAgICAgICB0aGlzLl9wcmlzdGluZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQubWFya0FzRGlydHkoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXJrcyB0aGUgY29udHJvbCBhcyBgcHJpc3RpbmVgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB0aGUgY29udHJvbCBoYXMgYW55IGNoaWxkcmVuLCBpdCB3aWxsIGFsc28gbWFyayBhbGwgY2hpbGRyZW4gYXMgYHByaXN0aW5lYFxuICAgICAgICAgKiB0byBtYWludGFpbiB0aGUgbW9kZWwsIGFuZCByZS1jYWxjdWxhdGUgdGhlIGBwcmlzdGluZWAgc3RhdHVzIG9mIGFsbCBwYXJlbnRcbiAgICAgICAgICogY29udHJvbHMuXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5tYXJrQXNQcmlzdGluZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG9ubHlTZWxmID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5vbmx5U2VsZjtcbiAgICAgICAgICAgIHRoaXMuX3ByaXN0aW5lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCkgeyBjb250cm9sLm1hcmtBc1ByaXN0aW5lKHsgb25seVNlbGY6IHRydWUgfSk7IH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVByaXN0aW5lKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogTWFya3MgdGhlIGNvbnRyb2wgYXMgYHBlbmRpbmdgLlxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzBcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUubWFya0FzUGVuZGluZyA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG9ubHlTZWxmID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5vbmx5U2VsZjtcbiAgICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IFBFTkRJTkc7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5tYXJrQXNQZW5kaW5nKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogRGlzYWJsZXMgdGhlIGNvbnRyb2wuIFRoaXMgbWVhbnMgdGhlIGNvbnRyb2wgd2lsbCBiZSBleGVtcHQgZnJvbSB2YWxpZGF0aW9uIGNoZWNrcyBhbmRcbiAgICAgICAgICogZXhjbHVkZWQgZnJvbSB0aGUgYWdncmVnYXRlIHZhbHVlIG9mIGFueSBwYXJlbnQuIEl0cyBzdGF0dXMgaXMgYERJU0FCTEVEYC5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgdGhlIGNvbnRyb2wgaGFzIGNoaWxkcmVuLCBhbGwgY2hpbGRyZW4gd2lsbCBiZSBkaXNhYmxlZCB0byBtYWludGFpbiB0aGUgbW9kZWwuXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgb25seVNlbGYgPSBfYi5vbmx5U2VsZiwgZW1pdEV2ZW50ID0gX2IuZW1pdEV2ZW50O1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gRElTQUJMRUQ7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcnMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sKSB7IGNvbnRyb2wuZGlzYWJsZSh7IG9ubHlTZWxmOiB0cnVlIH0pOyB9KTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlKCk7XG4gICAgICAgICAgICBpZiAoZW1pdEV2ZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlQ2hhbmdlcy5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0dXNDaGFuZ2VzLmVtaXQodGhpcy5fc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUFuY2VzdG9ycyhvbmx5U2VsZik7XG4gICAgICAgICAgICB0aGlzLl9vbkRpc2FibGVkQ2hhbmdlLmZvckVhY2goZnVuY3Rpb24gKGNoYW5nZUZuKSB7IHJldHVybiBjaGFuZ2VGbih0cnVlKTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmFibGVzIHRoZSBjb250cm9sLiBUaGlzIG1lYW5zIHRoZSBjb250cm9sIHdpbGwgYmUgaW5jbHVkZWQgaW4gdmFsaWRhdGlvbiBjaGVja3MgYW5kXG4gICAgICAgICAqIHRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgaXRzIHBhcmVudC4gSXRzIHN0YXR1cyBpcyByZS1jYWxjdWxhdGVkIGJhc2VkIG9uIGl0cyB2YWx1ZSBhbmRcbiAgICAgICAgICogaXRzIHZhbGlkYXRvcnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSBjb250cm9sIGhhcyBjaGlsZHJlbiwgYWxsIGNoaWxkcmVuIHdpbGwgYmUgZW5hYmxlZC5cbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18wXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIG9ubHlTZWxmID0gX2Iub25seVNlbGYsIGVtaXRFdmVudCA9IF9iLmVtaXRFdmVudDtcbiAgICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IFZBTElEO1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sKSB7IGNvbnRyb2wuZW5hYmxlKHsgb25seVNlbGY6IHRydWUgfSk7IH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQW5jZXN0b3JzKG9ubHlTZWxmKTtcbiAgICAgICAgICAgIHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UuZm9yRWFjaChmdW5jdGlvbiAoY2hhbmdlRm4pIHsgcmV0dXJuIGNoYW5nZUZuKGZhbHNlKTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IG9ubHlTZWxmXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl91cGRhdGVBbmNlc3RvcnMgPSBmdW5jdGlvbiAob25seVNlbGYpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVByaXN0aW5lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVUb3VjaGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHBhcmVudFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5zZXRQYXJlbnQgPSBmdW5jdGlvbiAocGFyZW50KSB7IHRoaXMuX3BhcmVudCA9IHBhcmVudDsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLiBBYnN0cmFjdCBtZXRob2QgKGltcGxlbWVudGVkIGluIHN1Yi1jbGFzc2VzKS5cbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykgeyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUGF0Y2hlcyB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wuIEFic3RyYWN0IG1ldGhvZCAoaW1wbGVtZW50ZWQgaW4gc3ViLWNsYXNzZXMpLlxuICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLnBhdGNoVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc2V0cyB0aGUgY29udHJvbC4gQWJzdHJhY3QgbWV0aG9kIChpbXBsZW1lbnRlZCBpbiBzdWItY2xhc3NlcykuXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcGFyYW0gez89fSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZS1jYWxjdWxhdGVzIHRoZSB2YWx1ZSBhbmQgdmFsaWRhdGlvbiBzdGF0dXMgb2YgdGhlIGNvbnRyb2wuXG4gICAgICAgICAqXG4gICAgICAgICAqIEJ5IGRlZmF1bHQsIGl0IHdpbGwgYWxzbyB1cGRhdGUgdGhlIHZhbHVlIGFuZCB2YWxpZGl0eSBvZiBpdHMgYW5jZXN0b3JzLlxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzBcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIG9ubHlTZWxmID0gX2Iub25seVNlbGYsIGVtaXRFdmVudCA9IF9iLmVtaXRFdmVudDtcbiAgICAgICAgICAgIHRoaXMuX3NldEluaXRpYWxTdGF0dXMoKTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXJyb3JzID0gdGhpcy5fcnVuVmFsaWRhdG9yKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gdGhpcy5fY2FsY3VsYXRlU3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXR1cyA9PT0gVkFMSUQgfHwgdGhpcy5fc3RhdHVzID09PSBQRU5ESU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3J1bkFzeW5jVmFsaWRhdG9yKGVtaXRFdmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVtaXRFdmVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZUNoYW5nZXMuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdHVzQ2hhbmdlcy5lbWl0KHRoaXMuX3N0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IG9ubHlTZWxmLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fdXBkYXRlVHJlZVZhbGlkaXR5ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgZW1pdEV2ZW50ID0gKF9hID09PSB2b2lkIDAgPyB7IGVtaXRFdmVudDogdHJ1ZSB9IDogX2EpLmVtaXRFdmVudDtcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY3RybCkgeyByZXR1cm4gY3RybC5fdXBkYXRlVHJlZVZhbGlkaXR5KHsgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7IH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3NldEluaXRpYWxTdGF0dXMgPSBmdW5jdGlvbiAoKSB7IHRoaXMuX3N0YXR1cyA9IHRoaXMuX2FsbENvbnRyb2xzRGlzYWJsZWQoKSA/IERJU0FCTEVEIDogVkFMSUQ7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fcnVuVmFsaWRhdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yID8gdGhpcy52YWxpZGF0b3IodGhpcykgOiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBlbWl0RXZlbnRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3J1bkFzeW5jVmFsaWRhdG9yID0gZnVuY3Rpb24gKGVtaXRFdmVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLmFzeW5jVmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gUEVORElORztcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW5jZWxFeGlzdGluZ1N1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG9icyA9IHRvT2JzZXJ2YWJsZSh0aGlzLmFzeW5jVmFsaWRhdG9yKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBpZiAoIShpc09ic2VydmFibGUob2JzKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZXhwZWN0ZWQgdGhlIGZvbGxvd2luZyB2YWxpZGF0b3IgdG8gcmV0dXJuIFByb21pc2Ugb3IgT2JzZXJ2YWJsZTogXCIgKyB0aGlzLmFzeW5jVmFsaWRhdG9yICsgXCIuIElmIHlvdSBhcmUgdXNpbmcgRm9ybUJ1aWxkZXI7IGRpZCB5b3UgZm9yZ2V0IHRvIGJyYWNlIHlvdXIgdmFsaWRhdG9ycyBpbiBhbiBhcnJheT9cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2FzeW5jVmFsaWRhdGlvblN1YnNjcmlwdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgIG9icy5zdWJzY3JpYmUoeyBuZXh0OiBmdW5jdGlvbiAocmVzKSB7IHJldHVybiBfdGhpcy5zZXRFcnJvcnMocmVzLCB7IGVtaXRFdmVudDogZW1pdEV2ZW50IH0pOyB9IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2NhbmNlbEV4aXN0aW5nU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2FzeW5jVmFsaWRhdGlvblN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FzeW5jVmFsaWRhdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBlcnJvcnMgb24gYSBmb3JtIGNvbnRyb2wuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgaXMgdXNlZCB3aGVuIHZhbGlkYXRpb25zIGFyZSBydW4gbWFudWFsbHkgYnkgdGhlIHVzZXIsIHJhdGhlciB0aGFuIGF1dG9tYXRpY2FsbHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIENhbGxpbmcgYHNldEVycm9yc2Agd2lsbCBhbHNvIHVwZGF0ZSB0aGUgdmFsaWRpdHkgb2YgdGhlIHBhcmVudCBjb250cm9sLlxuICAgICAgICAgKlxuICAgICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICogY29uc3QgbG9naW4gPSBuZXcgRm9ybUNvbnRyb2woXCJzb21lTG9naW5cIik7XG4gICAgICAgICAqIGxvZ2luLnNldEVycm9ycyh7XG4gICAgICAgICAqICAgXCJub3RVbmlxdWVcIjogdHJ1ZVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogZXhwZWN0KGxvZ2luLnZhbGlkKS50b0VxdWFsKGZhbHNlKTtcbiAgICAgICAgICogZXhwZWN0KGxvZ2luLmVycm9ycykudG9FcXVhbCh7XCJub3RVbmlxdWVcIjogdHJ1ZX0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBsb2dpbi5zZXRWYWx1ZShcInNvbWVPdGhlckxvZ2luXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBleHBlY3QobG9naW4udmFsaWQpLnRvRXF1YWwodHJ1ZSk7XG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKiBAcGFyYW0gez99IGVycm9yc1xuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzFcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuc2V0RXJyb3JzID0gZnVuY3Rpb24gKGVycm9ycywgX2EpIHtcbiAgICAgICAgICAgIHZhciBlbWl0RXZlbnQgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLmVtaXRFdmVudDtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9ycyA9IGVycm9ycztcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvbnRyb2xzRXJyb3JzKGVtaXRFdmVudCAhPT0gZmFsc2UpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmV0cmlldmVzIGEgY2hpbGQgY29udHJvbCBnaXZlbiB0aGUgY29udHJvbCdzIG5hbWUgb3IgcGF0aC5cbiAgICAgICAgICpcbiAgICAgICAgICogUGF0aHMgY2FuIGJlIHBhc3NlZCBpbiBhcyBhbiBhcnJheSBvciBhIHN0cmluZyBkZWxpbWl0ZWQgYnkgYSBkb3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRvIGdldCBhIGNvbnRyb2wgbmVzdGVkIHdpdGhpbiBhIGBwZXJzb25gIHN1Yi1ncm91cDpcbiAgICAgICAgICpcbiAgICAgICAgICogKiBgdGhpcy5mb3JtLmdldCgncGVyc29uLm5hbWUnKTtgXG4gICAgICAgICAqXG4gICAgICAgICAqIC1PUi1cbiAgICAgICAgICpcbiAgICAgICAgICogKiBgdGhpcy5mb3JtLmdldChbJ3BlcnNvbicsICduYW1lJ10pO2BcbiAgICAgICAgICogQHBhcmFtIHs/fSBwYXRoXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBfZmluZCh0aGlzLCBwYXRoLCAnLicpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjb250cm9sIHdpdGggdGhlIGdpdmVuIHBhdGggaGFzIHRoZSBlcnJvciBzcGVjaWZpZWQuIE90aGVyd2lzZVxuICAgICAgICAgKiByZXR1cm5zIG51bGwgb3IgdW5kZWZpbmVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiBubyBwYXRoIGlzIGdpdmVuLCBpdCBjaGVja3MgZm9yIHRoZSBlcnJvciBvbiB0aGUgcHJlc2VudCBjb250cm9sLlxuICAgICAgICAgKiBAcGFyYW0gez99IGVycm9yQ29kZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBwYXRoXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmdldEVycm9yID0gZnVuY3Rpb24gKGVycm9yQ29kZSwgcGF0aCkge1xuICAgICAgICAgICAgaWYgKHBhdGggPT09IHZvaWQgMCkgeyBwYXRoID0gbnVsbDsgfVxuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udHJvbCA9IHBhdGggPyB0aGlzLmdldChwYXRoKSA6IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbCAmJiBjb250cm9sLl9lcnJvcnMgPyBjb250cm9sLl9lcnJvcnNbZXJyb3JDb2RlXSA6IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbnRyb2wgd2l0aCB0aGUgZ2l2ZW4gcGF0aCBoYXMgdGhlIGVycm9yIHNwZWNpZmllZC4gT3RoZXJ3aXNlXG4gICAgICAgICAqIHJldHVybnMgZmFsc2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIG5vIHBhdGggaXMgZ2l2ZW4sIGl0IGNoZWNrcyBmb3IgdGhlIGVycm9yIG9uIHRoZSBwcmVzZW50IGNvbnRyb2wuXG4gICAgICAgICAqIEBwYXJhbSB7P30gZXJyb3JDb2RlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHBhdGhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuaGFzRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3JDb2RlLCBwYXRoKSB7XG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7IHBhdGggPSBudWxsOyB9XG4gICAgICAgICAgICByZXR1cm4gISF0aGlzLmdldEVycm9yKGVycm9yQ29kZSwgcGF0aCk7XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInJvb3RcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXRyaWV2ZXMgdGhlIHRvcC1sZXZlbCBhbmNlc3RvciBvZiB0aGlzIGNvbnRyb2wuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB4ID0gdGhpcztcbiAgICAgICAgICAgICAgICB3aGlsZSAoeC5fcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSB4Ll9wYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez99IGVtaXRFdmVudFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fdXBkYXRlQ29udHJvbHNFcnJvcnMgPSBmdW5jdGlvbiAoZW1pdEV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSB0aGlzLl9jYWxjdWxhdGVTdGF0dXMoKTtcbiAgICAgICAgICAgIGlmIChlbWl0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0dXNDaGFuZ2VzLmVtaXQodGhpcy5fc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZUNvbnRyb2xzRXJyb3JzKGVtaXRFdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5faW5pdE9ic2VydmFibGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWVDaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzQ2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9jYWxjdWxhdGVTdGF0dXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYWxsQ29udHJvbHNEaXNhYmxlZCgpKVxuICAgICAgICAgICAgICAgIHJldHVybiBESVNBQkxFRDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9lcnJvcnMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAodGhpcy5fYW55Q29udHJvbHNIYXZlU3RhdHVzKFBFTkRJTkcpKVxuICAgICAgICAgICAgICAgIHJldHVybiBQRU5ESU5HO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2FueUNvbnRyb2xzSGF2ZVN0YXR1cyhJTlZBTElEKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIHJldHVybiBWQUxJRDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fdXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICogQHBhcmFtIHs/fSBjYlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fZm9yRWFjaENoaWxkID0gZnVuY3Rpb24gKGNiKSB7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb25kaXRpb25cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2FueUNvbnRyb2xzID0gZnVuY3Rpb24gKGNvbmRpdGlvbikgeyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9hbGxDb250cm9sc0Rpc2FibGVkID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/fSBzdGF0dXNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2FueUNvbnRyb2xzSGF2ZVN0YXR1cyA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbnlDb250cm9scyhmdW5jdGlvbiAoY29udHJvbCkgeyByZXR1cm4gY29udHJvbC5zdGF0dXMgPT09IHN0YXR1czsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fYW55Q29udHJvbHNEaXJ0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbnlDb250cm9scyhmdW5jdGlvbiAoY29udHJvbCkgeyByZXR1cm4gY29udHJvbC5kaXJ0eTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fYW55Q29udHJvbHNUb3VjaGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FueUNvbnRyb2xzKGZ1bmN0aW9uIChjb250cm9sKSB7IHJldHVybiBjb250cm9sLnRvdWNoZWQ7IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18wXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl91cGRhdGVQcmlzdGluZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG9ubHlTZWxmID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5vbmx5U2VsZjtcbiAgICAgICAgICAgIHRoaXMuX3ByaXN0aW5lID0gIXRoaXMuX2FueUNvbnRyb2xzRGlydHkoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVQcmlzdGluZSh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fdXBkYXRlVG91Y2hlZCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG9ubHlTZWxmID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5vbmx5U2VsZjtcbiAgICAgICAgICAgIHRoaXMuX3RvdWNoZWQgPSB0aGlzLl9hbnlDb250cm9sc1RvdWNoZWQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVUb3VjaGVkKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/fSBmb3JtU3RhdGVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2lzQm94ZWRWYWx1ZSA9IGZ1bmN0aW9uIChmb3JtU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZm9ybVN0YXRlID09PSAnb2JqZWN0JyAmJiBmb3JtU3RhdGUgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhmb3JtU3RhdGUpLmxlbmd0aCA9PT0gMiAmJiAndmFsdWUnIGluIGZvcm1TdGF0ZSAmJiAnZGlzYWJsZWQnIGluIGZvcm1TdGF0ZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSA9IGZuOyB9O1xuICAgICAgICByZXR1cm4gQWJzdHJhY3RDb250cm9sO1xuICAgIH0oKSk7XG4gICAgLyoqXG4gICAgICogXFxAd2hhdEl0RG9lcyBUcmFja3MgdGhlIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXR1cyBvZiBhbiBpbmRpdmlkdWFsIGZvcm0gY29udHJvbC5cbiAgICAgKlxuICAgICAqIEl0IGlzIG9uZSBvZiB0aGUgdGhyZWUgZnVuZGFtZW50YWwgYnVpbGRpbmcgYmxvY2tzIG9mIEFuZ3VsYXIgZm9ybXMsIGFsb25nIHdpdGhcbiAgICAgKiB7XFxAbGluayBGb3JtR3JvdXB9IGFuZCB7XFxAbGluayBGb3JtQXJyYXl9LlxuICAgICAqXG4gICAgICogXFxAaG93VG9Vc2VcbiAgICAgKlxuICAgICAqIFdoZW4gaW5zdGFudGlhdGluZyBhIHtcXEBsaW5rIEZvcm1Db250cm9sfSwgeW91IGNhbiBwYXNzIGluIGFuIGluaXRpYWwgdmFsdWUgYXMgdGhlXG4gICAgICogZmlyc3QgYXJndW1lbnQuIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGNvbnN0IGN0cmwgPSBuZXcgRm9ybUNvbnRyb2woJ3NvbWUgdmFsdWUnKTtcbiAgICAgKiBjb25zb2xlLmxvZyhjdHJsLnZhbHVlKTsgICAgIC8vICdzb21lIHZhbHVlJ1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogWW91IGNhbiBhbHNvIGluaXRpYWxpemUgdGhlIGNvbnRyb2wgd2l0aCBhIGZvcm0gc3RhdGUgb2JqZWN0IG9uIGluc3RhbnRpYXRpb24sXG4gICAgICogd2hpY2ggaW5jbHVkZXMgYm90aCB0aGUgdmFsdWUgYW5kIHdoZXRoZXIgb3Igbm90IHRoZSBjb250cm9sIGlzIGRpc2FibGVkLlxuICAgICAqIFlvdSBjYW4ndCB1c2UgdGhlIHZhbHVlIGtleSB3aXRob3V0IHRoZSBkaXNhYmxlZCBrZXk7IGJvdGggYXJlIHJlcXVpcmVkXG4gICAgICogdG8gdXNlIHRoaXMgd2F5IG9mIGluaXRpYWxpemF0aW9uLlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjb25zdCBjdHJsID0gbmV3IEZvcm1Db250cm9sKHt2YWx1ZTogJ24vYScsIGRpc2FibGVkOiB0cnVlfSk7XG4gICAgICogY29uc29sZS5sb2coY3RybC52YWx1ZSk7ICAgICAvLyAnbi9hJ1xuICAgICAqIGNvbnNvbGUubG9nKGN0cmwuc3RhdHVzKTsgICAvLyAnRElTQUJMRUQnXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBUbyBpbmNsdWRlIGEgc3luYyB2YWxpZGF0b3IgKG9yIGFuIGFycmF5IG9mIHN5bmMgdmFsaWRhdG9ycykgd2l0aCB0aGUgY29udHJvbCxcbiAgICAgKiBwYXNzIGl0IGluIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIEFzeW5jIHZhbGlkYXRvcnMgYXJlIGFsc28gc3VwcG9ydGVkLCBidXRcbiAgICAgKiBoYXZlIHRvIGJlIHBhc3NlZCBpbiBzZXBhcmF0ZWx5IGFzIHRoZSB0aGlyZCBhcmcuXG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGNvbnN0IGN0cmwgPSBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAqIGNvbnNvbGUubG9nKGN0cmwudmFsdWUpOyAgICAgLy8gJydcbiAgICAgKiBjb25zb2xlLmxvZyhjdHJsLnN0YXR1cyk7ICAgLy8gJ0lOVkFMSUQnXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBTZWUgaXRzIHN1cGVyY2xhc3MsIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0sIGZvciBtb3JlIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuXG4gICAgICpcbiAgICAgKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gICAgICpcbiAgICAgKiBcXEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgRm9ybUNvbnRyb2wgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkNihGb3JtQ29udHJvbCwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IGZvcm1TdGF0ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSB2YWxpZGF0b3JcbiAgICAgICAgICogQHBhcmFtIHs/PX0gYXN5bmNWYWxpZGF0b3JcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEZvcm1Db250cm9sKGZvcm1TdGF0ZSwgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcikge1xuICAgICAgICAgICAgaWYgKGZvcm1TdGF0ZSA9PT0gdm9pZCAwKSB7IGZvcm1TdGF0ZSA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IgPT09IHZvaWQgMCkgeyB2YWxpZGF0b3IgPSBudWxsOyB9XG4gICAgICAgICAgICBpZiAoYXN5bmNWYWxpZGF0b3IgPT09IHZvaWQgMCkgeyBhc3luY1ZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGNvZXJjZVRvVmFsaWRhdG9yKHZhbGlkYXRvciksIGNvZXJjZVRvQXN5bmNWYWxpZGF0b3IoYXN5bmNWYWxpZGF0b3IpKTtcbiAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlID0gW107XG4gICAgICAgICAgICB0aGlzLl9hcHBseUZvcm1TdGF0ZShmb3JtU3RhdGUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgICAgICB0aGlzLl9pbml0T2JzZXJ2YWJsZXMoKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSB2YWx1ZSBvZiB0aGUgZm9ybSBjb250cm9sIHRvIGB2YWx1ZWAuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIGBvbmx5U2VsZmAgaXMgYHRydWVgLCB0aGlzIGNoYW5nZSB3aWxsIG9ubHkgYWZmZWN0IHRoZSB2YWxpZGF0aW9uIG9mIHRoaXMgYEZvcm1Db250cm9sYFxuICAgICAgICAgKiBhbmQgbm90IGl0cyBwYXJlbnQgY29tcG9uZW50LiBUaGlzIGRlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiBgZW1pdEV2ZW50YCBpcyBgdHJ1ZWAsIHRoaXNcbiAgICAgICAgICogY2hhbmdlIHdpbGwgY2F1c2UgYSBgdmFsdWVDaGFuZ2VzYCBldmVudCBvbiB0aGUgYEZvcm1Db250cm9sYCB0byBiZSBlbWl0dGVkLiBUaGlzIGRlZmF1bHRzXG4gICAgICAgICAqIHRvIHRydWUgKGFzIGl0IGZhbGxzIHRocm91Z2ggdG8gYHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHlgKS5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgYGVtaXRNb2RlbFRvVmlld0NoYW5nZWAgaXMgYHRydWVgLCB0aGUgdmlldyB3aWxsIGJlIG5vdGlmaWVkIGFib3V0IHRoZSBuZXcgdmFsdWVcbiAgICAgICAgICogdmlhIGFuIGBvbkNoYW5nZWAgZXZlbnQuIFRoaXMgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3IgaWYgYGVtaXRNb2RlbFRvVmlld0NoYW5nZWAgaXMgbm90XG4gICAgICAgICAqIHNwZWNpZmllZC5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgYGVtaXRWaWV3VG9Nb2RlbENoYW5nZWAgaXMgYHRydWVgLCBhbiBuZ01vZGVsQ2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgdG8gdXBkYXRlIHRoZVxuICAgICAgICAgKiBtb2RlbC4gIFRoaXMgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3IgaWYgYGVtaXRWaWV3VG9Nb2RlbENoYW5nZWAgaXMgbm90IHNwZWNpZmllZC5cbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzFcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgX2EpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgb25seVNlbGYgPSBfYi5vbmx5U2VsZiwgZW1pdEV2ZW50ID0gX2IuZW1pdEV2ZW50LCBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2UgPSBfYi5lbWl0TW9kZWxUb1ZpZXdDaGFuZ2UsIGVtaXRWaWV3VG9Nb2RlbENoYW5nZSA9IF9iLmVtaXRWaWV3VG9Nb2RlbENoYW5nZTtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5fb25DaGFuZ2UubGVuZ3RoICYmIGVtaXRNb2RlbFRvVmlld0NoYW5nZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkNoYW5nZS5mb3JFYWNoKGZ1bmN0aW9uIChjaGFuZ2VGbikgeyByZXR1cm4gY2hhbmdlRm4oX3RoaXMuX3ZhbHVlLCBlbWl0Vmlld1RvTW9kZWxDaGFuZ2UgIT09IGZhbHNlKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogb25seVNlbGYsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUGF0Y2hlcyB0aGUgdmFsdWUgb2YgYSBjb250cm9sLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGZ1bmN0aW9uYWxseSB0aGUgc2FtZSBhcyB7XFxAbGluayBGb3JtQ29udHJvbC5zZXRWYWx1ZX0gYXQgdGhpcyBsZXZlbC5cbiAgICAgICAgICogSXQgZXhpc3RzIGZvciBzeW1tZXRyeSB3aXRoIHtcXEBsaW5rIEZvcm1Hcm91cC5wYXRjaFZhbHVlfSBvbiBgRm9ybUdyb3Vwc2AgYW5kIGBGb3JtQXJyYXlzYCxcbiAgICAgICAgICogd2hlcmUgaXQgZG9lcyBiZWhhdmUgZGlmZmVyZW50bHkuXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLnBhdGNoVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKHZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc2V0cyB0aGUgZm9ybSBjb250cm9sLiBUaGlzIG1lYW5zIGJ5IGRlZmF1bHQ6XG4gICAgICAgICAqXG4gICAgICAgICAqICogaXQgaXMgbWFya2VkIGFzIGBwcmlzdGluZWBcbiAgICAgICAgICogKiBpdCBpcyBtYXJrZWQgYXMgYHVudG91Y2hlZGBcbiAgICAgICAgICogKiB2YWx1ZSBpcyBzZXQgdG8gbnVsbFxuICAgICAgICAgKlxuICAgICAgICAgKiBZb3UgY2FuIGFsc28gcmVzZXQgdG8gYSBzcGVjaWZpYyBmb3JtIHN0YXRlIGJ5IHBhc3NpbmcgdGhyb3VnaCBhIHN0YW5kYWxvbmVcbiAgICAgICAgICogdmFsdWUgb3IgYSBmb3JtIHN0YXRlIG9iamVjdCB0aGF0IGNvbnRhaW5zIGJvdGggYSB2YWx1ZSBhbmQgYSBkaXNhYmxlZCBzdGF0ZVxuICAgICAgICAgKiAodGhlc2UgYXJlIHRoZSBvbmx5IHR3byBwcm9wZXJ0aWVzIHRoYXQgY2Fubm90IGJlIGNhbGN1bGF0ZWQpLlxuICAgICAgICAgKlxuICAgICAgICAgKiBFeDpcbiAgICAgICAgICpcbiAgICAgICAgICogYGBgdHNcbiAgICAgICAgICogdGhpcy5jb250cm9sLnJlc2V0KCdOYW5jeScpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zb2xlLmxvZyh0aGlzLmNvbnRyb2wudmFsdWUpOyAgLy8gJ05hbmN5J1xuICAgICAgICAgKiBgYGBcbiAgICAgICAgICpcbiAgICAgICAgICogT1JcbiAgICAgICAgICpcbiAgICAgICAgICogYGBgXG4gICAgICAgICAqIHRoaXMuY29udHJvbC5yZXNldCh7dmFsdWU6ICdOYW5jeScsIGRpc2FibGVkOiB0cnVlfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKHRoaXMuY29udHJvbC52YWx1ZSk7ICAvLyAnTmFuY3knXG4gICAgICAgICAqIGNvbnNvbGUubG9nKHRoaXMuY29udHJvbC5zdGF0dXMpOyAgLy8gJ0RJU0FCTEVEJ1xuICAgICAgICAgKiBgYGBcbiAgICAgICAgICogQHBhcmFtIHs/PX0gZm9ybVN0YXRlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKGZvcm1TdGF0ZSwgX2EpIHtcbiAgICAgICAgICAgIGlmIChmb3JtU3RhdGUgPT09IHZvaWQgMCkgeyBmb3JtU3RhdGUgPSBudWxsOyB9XG4gICAgICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgb25seVNlbGYgPSBfYi5vbmx5U2VsZiwgZW1pdEV2ZW50ID0gX2IuZW1pdEV2ZW50O1xuICAgICAgICAgICAgdGhpcy5fYXBwbHlGb3JtU3RhdGUoZm9ybVN0YXRlKTtcbiAgICAgICAgICAgIHRoaXMubWFya0FzUHJpc3RpbmUoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgICAgICB0aGlzLm1hcmtBc1VudG91Y2hlZCh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5fdmFsdWUsIHsgb25seVNlbGY6IG9ubHlTZWxmLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUuX3VwZGF0ZVZhbHVlID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb25kaXRpb25cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sLnByb3RvdHlwZS5fYW55Q29udHJvbHMgPSBmdW5jdGlvbiAoY29uZGl0aW9uKSB7IHJldHVybiBmYWxzZTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUuX2FsbENvbnRyb2xzRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmRpc2FibGVkOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgYSBsaXN0ZW5lciBmb3IgY2hhbmdlIGV2ZW50cy5cbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5fb25DaGFuZ2UucHVzaChmbik7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLl9jbGVhckNoYW5nZUZucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlID0gW107XG4gICAgICAgICAgICB0aGlzLl9vbkRpc2FibGVkQ2hhbmdlID0gW107XG4gICAgICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciBhIGxpc3RlbmVyIGZvciBkaXNhYmxlZCBldmVudHMuXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sLnByb3RvdHlwZS5yZWdpc3Rlck9uRGlzYWJsZWRDaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UucHVzaChmbik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez99IGNiXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUuX2ZvckVhY2hDaGlsZCA9IGZ1bmN0aW9uIChjYikgeyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmb3JtU3RhdGVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sLnByb3RvdHlwZS5fYXBwbHlGb3JtU3RhdGUgPSBmdW5jdGlvbiAoZm9ybVN0YXRlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNCb3hlZFZhbHVlKGZvcm1TdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZSA9IGZvcm1TdGF0ZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBmb3JtU3RhdGUuZGlzYWJsZWQgPyB0aGlzLmRpc2FibGUoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZSB9KSA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlKHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZSA9IGZvcm1TdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEZvcm1Db250cm9sO1xuICAgIH0oQWJzdHJhY3RDb250cm9sKSk7XG4gICAgLyoqXG4gICAgICogXFxAd2hhdEl0RG9lcyBUcmFja3MgdGhlIHZhbHVlIGFuZCB2YWxpZGl0eSBzdGF0ZSBvZiBhIGdyb3VwIG9mIHtcXEBsaW5rIEZvcm1Db250cm9sfVxuICAgICAqIGluc3RhbmNlcy5cbiAgICAgKlxuICAgICAqIEEgYEZvcm1Hcm91cGAgYWdncmVnYXRlcyB0aGUgdmFsdWVzIG9mIGVhY2ggY2hpbGQge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGludG8gb25lIG9iamVjdCxcbiAgICAgKiB3aXRoIGVhY2ggY29udHJvbCBuYW1lIGFzIHRoZSBrZXkuICBJdCBjYWxjdWxhdGVzIGl0cyBzdGF0dXMgYnkgcmVkdWNpbmcgdGhlIHN0YXR1c2VzXG4gICAgICogb2YgaXRzIGNoaWxkcmVuLiBGb3IgZXhhbXBsZSwgaWYgb25lIG9mIHRoZSBjb250cm9scyBpbiBhIGdyb3VwIGlzIGludmFsaWQsIHRoZSBlbnRpcmVcbiAgICAgKiBncm91cCBiZWNvbWVzIGludmFsaWQuXG4gICAgICpcbiAgICAgKiBgRm9ybUdyb3VwYCBpcyBvbmUgb2YgdGhlIHRocmVlIGZ1bmRhbWVudGFsIGJ1aWxkaW5nIGJsb2NrcyB1c2VkIHRvIGRlZmluZSBmb3JtcyBpbiBBbmd1bGFyLFxuICAgICAqIGFsb25nIHdpdGgge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGFuZCB7XFxAbGluayBGb3JtQXJyYXl9LlxuICAgICAqXG4gICAgICogXFxAaG93VG9Vc2VcbiAgICAgKlxuICAgICAqIFdoZW4gaW5zdGFudGlhdGluZyBhIHtcXEBsaW5rIEZvcm1Hcm91cH0sIHBhc3MgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkIGNvbnRyb2xzIGFzIHRoZSBmaXJzdFxuICAgICAqIGFyZ3VtZW50LiBUaGUga2V5IGZvciBlYWNoIGNoaWxkIHdpbGwgYmUgdGhlIG5hbWUgdW5kZXIgd2hpY2ggaXQgaXMgcmVnaXN0ZXJlZC5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICogICBmaXJzdDogbmV3IEZvcm1Db250cm9sKCdOYW5jeScsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAgICAgKiAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgnRHJldycpLFxuICAgICAqIH0pO1xuICAgICAqXG4gICAgICogY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAgLy8ge2ZpcnN0OiAnTmFuY3knLCBsYXN0OyAnRHJldyd9XG4gICAgICogY29uc29sZS5sb2coZm9ybS5zdGF0dXMpOyAgLy8gJ1ZBTElEJ1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogWW91IGNhbiBhbHNvIGluY2x1ZGUgZ3JvdXAtbGV2ZWwgdmFsaWRhdG9ycyBhcyB0aGUgc2Vjb25kIGFyZywgb3IgZ3JvdXAtbGV2ZWwgYXN5bmNcbiAgICAgKiB2YWxpZGF0b3JzIGFzIHRoZSB0aGlyZCBhcmcuIFRoZXNlIGNvbWUgaW4gaGFuZHkgd2hlbiB5b3Ugd2FudCB0byBwZXJmb3JtIHZhbGlkYXRpb25cbiAgICAgKiB0aGF0IGNvbnNpZGVycyB0aGUgdmFsdWUgb2YgbW9yZSB0aGFuIG9uZSBjaGlsZCBjb250cm9sLlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgKiAgIHBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAgICAgKiAgIHBhc3N3b3JkQ29uZmlybTogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKSksXG4gICAgICogfSwgcGFzc3dvcmRNYXRjaFZhbGlkYXRvcik7XG4gICAgICpcbiAgICAgKlxuICAgICAqIGZ1bmN0aW9uIHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IoZzogRm9ybUdyb3VwKSB7XG4gICAgICogICAgcmV0dXJuIGcuZ2V0KCdwYXNzd29yZCcpLnZhbHVlID09PSBnLmdldCgncGFzc3dvcmRDb25maXJtJykudmFsdWVcbiAgICAgKiAgICAgICA/IG51bGwgOiB7J21pc21hdGNoJzogdHJ1ZX07XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICAgICAqXG4gICAgICogXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIEZvcm1Hcm91cCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQ2KEZvcm1Hcm91cCwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbHNcbiAgICAgICAgICogQHBhcmFtIHs/PX0gdmFsaWRhdG9yXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IGFzeW5jVmFsaWRhdG9yXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBGb3JtR3JvdXAoY29udHJvbHMsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IgPT09IHZvaWQgMCkgeyB2YWxpZGF0b3IgPSBudWxsOyB9XG4gICAgICAgICAgICBpZiAoYXN5bmNWYWxpZGF0b3IgPT09IHZvaWQgMCkgeyBhc3luY1ZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICAgICAgICAgICAgdGhpcy5jb250cm9scyA9IGNvbnRyb2xzO1xuICAgICAgICAgICAgdGhpcy5faW5pdE9ic2VydmFibGVzKCk7XG4gICAgICAgICAgICB0aGlzLl9zZXRVcENvbnRyb2xzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXJzIGEgY29udHJvbCB3aXRoIHRoZSBncm91cCdzIGxpc3Qgb2YgY29udHJvbHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGRvZXMgbm90IHVwZGF0ZSB2YWx1ZSBvciB2YWxpZGl0eSBvZiB0aGUgY29udHJvbCwgc28gZm9yXG4gICAgICAgICAqIG1vc3QgY2FzZXMgeW91J2xsIHdhbnQgdG8gdXNlIHtcXEBsaW5rIEZvcm1Hcm91cC5hZGRDb250cm9sfSBpbnN0ZWFkLlxuICAgICAgICAgKiBAcGFyYW0gez99IG5hbWVcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLnJlZ2lzdGVyQ29udHJvbCA9IGZ1bmN0aW9uIChuYW1lLCBjb250cm9sKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sc1tuYW1lXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sc1tuYW1lXTtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHNbbmFtZV0gPSBjb250cm9sO1xuICAgICAgICAgICAgY29udHJvbC5zZXRQYXJlbnQodGhpcyk7XG4gICAgICAgICAgICBjb250cm9sLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZSh0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2w7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgYSBjb250cm9sIHRvIHRoaXMgZ3JvdXAuXG4gICAgICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuYWRkQ29udHJvbCA9IGZ1bmN0aW9uIChuYW1lLCBjb250cm9sKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ29udHJvbChuYW1lLCBjb250cm9sKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYSBjb250cm9sIGZyb20gdGhpcyBncm91cC5cbiAgICAgICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLnJlbW92ZUNvbnRyb2wgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHNbbmFtZV0pXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sc1tuYW1lXS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgICAgIGRlbGV0ZSAodGhpcy5jb250cm9sc1tuYW1lXSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVwbGFjZSBhbiBleGlzdGluZyBjb250cm9sLlxuICAgICAgICAgKiBAcGFyYW0gez99IG5hbWVcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLnNldENvbnRyb2wgPSBmdW5jdGlvbiAobmFtZSwgY29udHJvbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHNbbmFtZV0pXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sc1tuYW1lXS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgICAgIGRlbGV0ZSAodGhpcy5jb250cm9sc1tuYW1lXSk7XG4gICAgICAgICAgICBpZiAoY29udHJvbClcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ29udHJvbChuYW1lLCBjb250cm9sKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayB3aGV0aGVyIHRoZXJlIGlzIGFuIGVuYWJsZWQgY29udHJvbCB3aXRoIHRoZSBnaXZlbiBuYW1lIGluIHRoZSBncm91cC5cbiAgICAgICAgICpcbiAgICAgICAgICogSXQgd2lsbCByZXR1cm4gZmFsc2UgZm9yIGRpc2FibGVkIGNvbnRyb2xzLiBJZiB5b3UnZCBsaWtlIHRvIGNoZWNrIGZvclxuICAgICAgICAgKiBleGlzdGVuY2UgaW4gdGhlIGdyb3VwIG9ubHksIHVzZSB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuZ2V0fSBpbnN0ZWFkLlxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xOYW1lXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKGNvbnRyb2xOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250cm9scy5oYXNPd25Qcm9wZXJ0eShjb250cm9sTmFtZSkgJiYgdGhpcy5jb250cm9sc1tjb250cm9sTmFtZV0uZW5hYmxlZDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUge1xcQGxpbmsgRm9ybUdyb3VwfS4gSXQgYWNjZXB0cyBhbiBvYmplY3QgdGhhdCBtYXRjaGVzXG4gICAgICAgICAqICB0aGUgc3RydWN0dXJlIG9mIHRoZSBncm91cCwgd2l0aCBjb250cm9sIG5hbWVzIGFzIGtleXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIHBlcmZvcm1zIHN0cmljdCBjaGVja3MsIHNvIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgeW91IHRyeVxuICAgICAgICAgKiB0byBzZXQgdGhlIHZhbHVlIG9mIGEgY29udHJvbCB0aGF0IGRvZXNuJ3QgZXhpc3Qgb3IgaWYgeW91IGV4Y2x1ZGUgdGhlXG4gICAgICAgICAqIHZhbHVlIG9mIGEgY29udHJvbC5cbiAgICAgICAgICpcbiAgICAgICAgICogICMjIyBFeGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICBgYGBcbiAgICAgICAgICogIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgICogICAgIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICAgICAgICogICAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgpXG4gICAgICAgICAqICB9KTtcbiAgICAgICAgICogIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogbnVsbCwgbGFzdDogbnVsbH1cbiAgICAgICAgICpcbiAgICAgICAgICogIGZvcm0uc2V0VmFsdWUoe2ZpcnN0OiAnTmFuY3knLCBsYXN0OiAnRHJldyd9KTtcbiAgICAgICAgICogIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogJ05hbmN5JywgbGFzdDogJ0RyZXcnfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgYGBgXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18xXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBfYSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQ7XG4gICAgICAgICAgICB0aGlzLl9jaGVja0FsbFZhbHVlc1ByZXNlbnQodmFsdWUpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fdGhyb3dJZkNvbnRyb2xNaXNzaW5nKG5hbWUpO1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbnRyb2xzW25hbWVdLnNldFZhbHVlKHZhbHVlW25hbWVdLCB7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IG9ubHlTZWxmLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBQYXRjaGVzIHRoZSB2YWx1ZSBvZiB0aGUge1xcQGxpbmsgRm9ybUdyb3VwfS4gSXQgYWNjZXB0cyBhbiBvYmplY3Qgd2l0aCBjb250cm9sXG4gICAgICAgICAqICBuYW1lcyBhcyBrZXlzLCBhbmQgd2lsbCBkbyBpdHMgYmVzdCB0byBtYXRjaCB0aGUgdmFsdWVzIHRvIHRoZSBjb3JyZWN0IGNvbnRyb2xzXG4gICAgICAgICAqICBpbiB0aGUgZ3JvdXAuXG4gICAgICAgICAqXG4gICAgICAgICAqICBJdCBhY2NlcHRzIGJvdGggc3VwZXItc2V0cyBhbmQgc3ViLXNldHMgb2YgdGhlIGdyb3VwIHdpdGhvdXQgdGhyb3dpbmcgYW4gZXJyb3IuXG4gICAgICAgICAqXG4gICAgICAgICAqICAjIyMgRXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgYGBgXG4gICAgICAgICAqICBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAgICAqICAgICBmaXJzdDogbmV3IEZvcm1Db250cm9sKCksXG4gICAgICAgICAqICAgICBsYXN0OiBuZXcgRm9ybUNvbnRyb2woKVxuICAgICAgICAgKiAgfSk7XG4gICAgICAgICAqICBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6IG51bGwsIGxhc3Q6IG51bGx9XG4gICAgICAgICAqXG4gICAgICAgICAqICBmb3JtLnBhdGNoVmFsdWUoe2ZpcnN0OiAnTmFuY3knfSk7XG4gICAgICAgICAqICBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6ICdOYW5jeScsIGxhc3Q6IG51bGx9XG4gICAgICAgICAqXG4gICAgICAgICAqICBgYGBcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzFcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUucGF0Y2hWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgX2EpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgb25seVNlbGYgPSBfYi5vbmx5U2VsZiwgZW1pdEV2ZW50ID0gX2IuZW1pdEV2ZW50O1xuICAgICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuY29udHJvbHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29udHJvbHNbbmFtZV0ucGF0Y2hWYWx1ZSh2YWx1ZVtuYW1lXSwgeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogb25seVNlbGYsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVzZXRzIHRoZSB7XFxAbGluayBGb3JtR3JvdXB9LiBUaGlzIG1lYW5zIGJ5IGRlZmF1bHQ6XG4gICAgICAgICAqXG4gICAgICAgICAqICogVGhlIGdyb3VwIGFuZCBhbGwgZGVzY2VuZGFudHMgYXJlIG1hcmtlZCBgcHJpc3RpbmVgXG4gICAgICAgICAqICogVGhlIGdyb3VwIGFuZCBhbGwgZGVzY2VuZGFudHMgYXJlIG1hcmtlZCBgdW50b3VjaGVkYFxuICAgICAgICAgKiAqIFRoZSB2YWx1ZSBvZiBhbGwgZGVzY2VuZGFudHMgd2lsbCBiZSBudWxsIG9yIG51bGwgbWFwc1xuICAgICAgICAgKlxuICAgICAgICAgKiBZb3UgY2FuIGFsc28gcmVzZXQgdG8gYSBzcGVjaWZpYyBmb3JtIHN0YXRlIGJ5IHBhc3NpbmcgaW4gYSBtYXAgb2Ygc3RhdGVzXG4gICAgICAgICAqIHRoYXQgbWF0Y2hlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgZm9ybSwgd2l0aCBjb250cm9sIG5hbWVzIGFzIGtleXMuIFRoZSBzdGF0ZVxuICAgICAgICAgKiBjYW4gYmUgYSBzdGFuZGFsb25lIHZhbHVlIG9yIGEgZm9ybSBzdGF0ZSBvYmplY3Qgd2l0aCBib3RoIGEgdmFsdWUgYW5kIGEgZGlzYWJsZWRcbiAgICAgICAgICogc3RhdHVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiBgYGB0c1xuICAgICAgICAgKiB0aGlzLmZvcm0ucmVzZXQoe2ZpcnN0OiAnbmFtZScsIGxhc3Q6ICdsYXN0IG5hbWUnfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKHRoaXMuZm9ybS52YWx1ZSk7ICAvLyB7Zmlyc3Q6ICduYW1lJywgbGFzdDogJ2xhc3QgbmFtZSd9XG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKlxuICAgICAgICAgKiAtIE9SIC1cbiAgICAgICAgICpcbiAgICAgICAgICogYGBgXG4gICAgICAgICAqIHRoaXMuZm9ybS5yZXNldCh7XG4gICAgICAgICAqICAgZmlyc3Q6IHt2YWx1ZTogJ25hbWUnLCBkaXNhYmxlZDogdHJ1ZX0sXG4gICAgICAgICAqICAgbGFzdDogJ2xhc3QnXG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zb2xlLmxvZyh0aGlzLmZvcm0udmFsdWUpOyAgLy8ge2ZpcnN0OiAnbmFtZScsIGxhc3Q6ICdsYXN0IG5hbWUnfVxuICAgICAgICAgKiBjb25zb2xlLmxvZyh0aGlzLmZvcm0uZ2V0KCdmaXJzdCcpLnN0YXR1cyk7ICAvLyAnRElTQUJMRUQnXG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKiBAcGFyYW0gez89fSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzFcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAodmFsdWUsIF9hKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyB2YWx1ZSA9IHt9OyB9XG4gICAgICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgb25seVNlbGYgPSBfYi5vbmx5U2VsZiwgZW1pdEV2ZW50ID0gX2IuZW1pdEV2ZW50O1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC5yZXNldCh2YWx1ZVtuYW1lXSwgeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiBvbmx5U2VsZiwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVQcmlzdGluZSh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVRvdWNoZWQoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYWdncmVnYXRlIHZhbHVlIG9mIHRoZSB7XFxAbGluayBGb3JtR3JvdXB9LCBpbmNsdWRpbmcgYW55IGRpc2FibGVkIGNvbnRyb2xzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB5b3UnZCBsaWtlIHRvIGluY2x1ZGUgYWxsIHZhbHVlcyByZWdhcmRsZXNzIG9mIGRpc2FibGVkIHN0YXR1cywgdXNlIHRoaXMgbWV0aG9kLlxuICAgICAgICAgKiBPdGhlcndpc2UsIHRoZSBgdmFsdWVgIHByb3BlcnR5IGlzIHRoZSBiZXN0IHdheSB0byBnZXQgdGhlIHZhbHVlIG9mIHRoZSBncm91cC5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuZ2V0UmF3VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVkdWNlQ2hpbGRyZW4oe30sIGZ1bmN0aW9uIChhY2MsIGNvbnRyb2wsIG5hbWUpIHtcbiAgICAgICAgICAgICAgICBhY2NbbmFtZV0gPSBjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wgPyBjb250cm9sLnZhbHVlIDogKChjb250cm9sKSkuZ2V0UmF3VmFsdWUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez99IG5hbWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX3Rocm93SWZDb250cm9sTWlzc2luZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMuY29udHJvbHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgICAgVGhlcmUgYXJlIG5vIGZvcm0gY29udHJvbHMgcmVnaXN0ZXJlZCB3aXRoIHRoaXMgZ3JvdXAgeWV0LiAgSWYgeW91J3JlIHVzaW5nIG5nTW9kZWwsXFxuICAgICAgICB5b3UgbWF5IHdhbnQgdG8gY2hlY2sgbmV4dCB0aWNrIChlLmcuIHVzZSBzZXRUaW1lb3V0KS5cXG4gICAgICBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29udHJvbHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBmb3JtIGNvbnRyb2wgd2l0aCBuYW1lOiBcIiArIG5hbWUgKyBcIi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez99IGNiXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLl9mb3JFYWNoQ2hpbGQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2xzKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IHJldHVybiBjYihfdGhpcy5jb250cm9sc1trXSwgayk7IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX3NldFVwQ29udHJvbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC5zZXRQYXJlbnQoX3RoaXMpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2wuX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKF90aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5fdXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoKSB7IHRoaXMuX3ZhbHVlID0gdGhpcy5fcmVkdWNlVmFsdWUoKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29uZGl0aW9uXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLl9hbnlDb250cm9scyA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZXMgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCwgbmFtZSkge1xuICAgICAgICAgICAgICAgIHJlcyA9IHJlcyB8fCAoX3RoaXMuY29udGFpbnMobmFtZSkgJiYgY29uZGl0aW9uKGNvbnRyb2wpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLl9yZWR1Y2VWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVkdWNlQ2hpbGRyZW4oe30sIGZ1bmN0aW9uIChhY2MsIGNvbnRyb2wsIG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbC5lbmFibGVkIHx8IF90aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY1tuYW1lXSA9IGNvbnRyb2wudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7P30gaW5pdFZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX3JlZHVjZUNoaWxkcmVuID0gZnVuY3Rpb24gKGluaXRWYWx1ZSwgZm4pIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHJlcyA9IGluaXRWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCwgbmFtZSkgeyByZXMgPSBmbihyZXMsIGNvbnRyb2wsIG5hbWUpOyB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5fYWxsQ29udHJvbHNEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2xzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udHJvbE5hbWUgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHNbY29udHJvbE5hbWVdLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2xzKS5sZW5ndGggPiAwIHx8IHRoaXMuZGlzYWJsZWQ7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLl9jaGVja0FsbFZhbHVlc1ByZXNlbnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCwgbmFtZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3Qgc3VwcGx5IGEgdmFsdWUgZm9yIGZvcm0gY29udHJvbCB3aXRoIG5hbWU6ICdcIiArIG5hbWUgKyBcIicuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRm9ybUdyb3VwO1xuICAgIH0oQWJzdHJhY3RDb250cm9sKSk7XG4gICAgLyoqXG4gICAgICogXFxAd2hhdEl0RG9lcyBUcmFja3MgdGhlIHZhbHVlIGFuZCB2YWxpZGl0eSBzdGF0ZSBvZiBhbiBhcnJheSBvZiB7XFxAbGluayBGb3JtQ29udHJvbH0sXG4gICAgICoge1xcQGxpbmsgRm9ybUdyb3VwfSBvciB7XFxAbGluayBGb3JtQXJyYXl9IGluc3RhbmNlcy5cbiAgICAgKlxuICAgICAqIEEgYEZvcm1BcnJheWAgYWdncmVnYXRlcyB0aGUgdmFsdWVzIG9mIGVhY2ggY2hpbGQge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGludG8gYW4gYXJyYXkuXG4gICAgICogSXQgY2FsY3VsYXRlcyBpdHMgc3RhdHVzIGJ5IHJlZHVjaW5nIHRoZSBzdGF0dXNlcyBvZiBpdHMgY2hpbGRyZW4uIEZvciBleGFtcGxlLCBpZiBvbmUgb2ZcbiAgICAgKiB0aGUgY29udHJvbHMgaW4gYSBgRm9ybUFycmF5YCBpcyBpbnZhbGlkLCB0aGUgZW50aXJlIGFycmF5IGJlY29tZXMgaW52YWxpZC5cbiAgICAgKlxuICAgICAqIGBGb3JtQXJyYXlgIGlzIG9uZSBvZiB0aGUgdGhyZWUgZnVuZGFtZW50YWwgYnVpbGRpbmcgYmxvY2tzIHVzZWQgdG8gZGVmaW5lIGZvcm1zIGluIEFuZ3VsYXIsXG4gICAgICogYWxvbmcgd2l0aCB7XFxAbGluayBGb3JtQ29udHJvbH0gYW5kIHtcXEBsaW5rIEZvcm1Hcm91cH0uXG4gICAgICpcbiAgICAgKiBcXEBob3dUb1VzZVxuICAgICAqXG4gICAgICogV2hlbiBpbnN0YW50aWF0aW5nIGEge1xcQGxpbmsgRm9ybUFycmF5fSwgcGFzcyBpbiBhbiBhcnJheSBvZiBjaGlsZCBjb250cm9scyBhcyB0aGUgZmlyc3RcbiAgICAgKiBhcmd1bWVudC5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBjb25zdCBhcnIgPSBuZXcgRm9ybUFycmF5KFtcbiAgICAgKiAgIG5ldyBGb3JtQ29udHJvbCgnTmFuY3knLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKSksXG4gICAgICogICBuZXcgRm9ybUNvbnRyb2woJ0RyZXcnKSxcbiAgICAgKiBdKTtcbiAgICAgKlxuICAgICAqIGNvbnNvbGUubG9nKGFyci52YWx1ZSk7ICAgLy8gWydOYW5jeScsICdEcmV3J11cbiAgICAgKiBjb25zb2xlLmxvZyhhcnIuc3RhdHVzKTsgIC8vICdWQUxJRCdcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIFlvdSBjYW4gYWxzbyBpbmNsdWRlIGFycmF5LWxldmVsIHZhbGlkYXRvcnMgYXMgdGhlIHNlY29uZCBhcmcsIG9yIGFycmF5LWxldmVsIGFzeW5jXG4gICAgICogdmFsaWRhdG9ycyBhcyB0aGUgdGhpcmQgYXJnLiBUaGVzZSBjb21lIGluIGhhbmR5IHdoZW4geW91IHdhbnQgdG8gcGVyZm9ybSB2YWxpZGF0aW9uXG4gICAgICogdGhhdCBjb25zaWRlcnMgdGhlIHZhbHVlIG9mIG1vcmUgdGhhbiBvbmUgY2hpbGQgY29udHJvbC5cbiAgICAgKlxuICAgICAqICMjIyBBZGRpbmcgb3IgcmVtb3ZpbmcgY29udHJvbHNcbiAgICAgKlxuICAgICAqIFRvIGNoYW5nZSB0aGUgY29udHJvbHMgaW4gdGhlIGFycmF5LCB1c2UgdGhlIGBwdXNoYCwgYGluc2VydGAsIG9yIGByZW1vdmVBdGAgbWV0aG9kc1xuICAgICAqIGluIGBGb3JtQXJyYXlgIGl0c2VsZi4gVGhlc2UgbWV0aG9kcyBlbnN1cmUgdGhlIGNvbnRyb2xzIGFyZSBwcm9wZXJseSB0cmFja2VkIGluIHRoZVxuICAgICAqIGZvcm0ncyBoaWVyYXJjaHkuIERvIG5vdCBtb2RpZnkgdGhlIGFycmF5IG9mIGBBYnN0cmFjdENvbnRyb2xgcyB1c2VkIHRvIGluc3RhbnRpYXRlXG4gICAgICogdGhlIGBGb3JtQXJyYXlgIGRpcmVjdGx5LCBhcyB0aGF0IHdpbGwgcmVzdWx0IGluIHN0cmFuZ2UgYW5kIHVuZXhwZWN0ZWQgYmVoYXZpb3Igc3VjaFxuICAgICAqIGFzIGJyb2tlbiBjaGFuZ2UgZGV0ZWN0aW9uLlxuICAgICAqXG4gICAgICogKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICAgICAqXG4gICAgICogXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIEZvcm1BcnJheSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQ2KEZvcm1BcnJheSwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbHNcbiAgICAgICAgICogQHBhcmFtIHs/PX0gdmFsaWRhdG9yXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IGFzeW5jVmFsaWRhdG9yXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBGb3JtQXJyYXkoY29udHJvbHMsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IgPT09IHZvaWQgMCkgeyB2YWxpZGF0b3IgPSBudWxsOyB9XG4gICAgICAgICAgICBpZiAoYXN5bmNWYWxpZGF0b3IgPT09IHZvaWQgMCkgeyBhc3luY1ZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICAgICAgICAgICAgdGhpcy5jb250cm9scyA9IGNvbnRyb2xzO1xuICAgICAgICAgICAgdGhpcy5faW5pdE9ic2VydmFibGVzKCk7XG4gICAgICAgICAgICB0aGlzLl9zZXRVcENvbnRyb2xzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSB7XFxAbGluayBBYnN0cmFjdENvbnRyb2x9IGF0IHRoZSBnaXZlbiBgaW5kZXhgIGluIHRoZSBhcnJheS5cbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5hdCA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gdGhpcy5jb250cm9sc1tpbmRleF07IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnNlcnQgYSBuZXcge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sfSBhdCB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICAgICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9scy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJDb250cm9sKGNvbnRyb2wpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluc2VydCBhIG5ldyB7XFxAbGluayBBYnN0cmFjdENvbnRyb2x9IGF0IHRoZSBnaXZlbiBgaW5kZXhgIGluIHRoZSBhcnJheS5cbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKGluZGV4LCBjb250cm9sKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzLnNwbGljZShpbmRleCwgMCwgY29udHJvbCk7XG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RlckNvbnRyb2woY29udHJvbCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBjb250cm9sIGF0IHRoZSBnaXZlbiBgaW5kZXhgIGluIHRoZSBhcnJheS5cbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5yZW1vdmVBdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHNbaW5kZXhdKVxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHNbaW5kZXhdLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZShmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgdGhpcy5jb250cm9scy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlcGxhY2UgYW4gZXhpc3RpbmcgY29udHJvbC5cbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUuc2V0Q29udHJvbCA9IGZ1bmN0aW9uIChpbmRleCwgY29udHJvbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHNbaW5kZXhdKVxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHNbaW5kZXhdLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZShmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgdGhpcy5jb250cm9scy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xzLnNwbGljZShpbmRleCwgMCwgY29udHJvbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJDb250cm9sKGNvbnRyb2wpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1BcnJheS5wcm90b3R5cGUsIFwibGVuZ3RoXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTGVuZ3RoIG9mIHRoZSBjb250cm9sIGFycmF5LlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2xzLmxlbmd0aDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHtcXEBsaW5rIEZvcm1BcnJheX0uIEl0IGFjY2VwdHMgYW4gYXJyYXkgdGhhdCBtYXRjaGVzXG4gICAgICAgICAqICB0aGUgc3RydWN0dXJlIG9mIHRoZSBjb250cm9sLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBwZXJmb3JtcyBzdHJpY3QgY2hlY2tzLCBzbyBpdCB3aWxsIHRocm93IGFuIGVycm9yIGlmIHlvdSB0cnlcbiAgICAgICAgICogdG8gc2V0IHRoZSB2YWx1ZSBvZiBhIGNvbnRyb2wgdGhhdCBkb2Vzbid0IGV4aXN0IG9yIGlmIHlvdSBleGNsdWRlIHRoZVxuICAgICAgICAgKiB2YWx1ZSBvZiBhIGNvbnRyb2wuXG4gICAgICAgICAqXG4gICAgICAgICAqICAjIyMgRXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgYGBgXG4gICAgICAgICAqICBjb25zdCBhcnIgPSBuZXcgRm9ybUFycmF5KFtcbiAgICAgICAgICogICAgIG5ldyBGb3JtQ29udHJvbCgpLFxuICAgICAgICAgKiAgICAgbmV3IEZvcm1Db250cm9sKClcbiAgICAgICAgICogIF0pO1xuICAgICAgICAgKiAgY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbbnVsbCwgbnVsbF1cbiAgICAgICAgICpcbiAgICAgICAgICogIGFyci5zZXRWYWx1ZShbJ05hbmN5JywgJ0RyZXcnXSk7XG4gICAgICAgICAqICBjb25zb2xlLmxvZyhhcnIudmFsdWUpOyAgIC8vIFsnTmFuY3knLCAnRHJldyddXG4gICAgICAgICAqICBgYGBcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzFcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIF9hKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIG9ubHlTZWxmID0gX2Iub25seVNlbGYsIGVtaXRFdmVudCA9IF9iLmVtaXRFdmVudDtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrQWxsVmFsdWVzUHJlc2VudCh2YWx1ZSk7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChuZXdWYWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fdGhyb3dJZkNvbnRyb2xNaXNzaW5nKGluZGV4KTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hdChpbmRleCkuc2V0VmFsdWUobmV3VmFsdWUsIHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogb25seVNlbGYsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFBhdGNoZXMgdGhlIHZhbHVlIG9mIHRoZSB7XFxAbGluayBGb3JtQXJyYXl9LiBJdCBhY2NlcHRzIGFuIGFycmF5IHRoYXQgbWF0Y2hlcyB0aGVcbiAgICAgICAgICogIHN0cnVjdHVyZSBvZiB0aGUgY29udHJvbCwgYW5kIHdpbGwgZG8gaXRzIGJlc3QgdG8gbWF0Y2ggdGhlIHZhbHVlcyB0byB0aGUgY29ycmVjdFxuICAgICAgICAgKiAgY29udHJvbHMgaW4gdGhlIGdyb3VwLlxuICAgICAgICAgKlxuICAgICAgICAgKiAgSXQgYWNjZXB0cyBib3RoIHN1cGVyLXNldHMgYW5kIHN1Yi1zZXRzIG9mIHRoZSBhcnJheSB3aXRob3V0IHRocm93aW5nIGFuIGVycm9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIyMjIEV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogIGBgYFxuICAgICAgICAgKiAgY29uc3QgYXJyID0gbmV3IEZvcm1BcnJheShbXG4gICAgICAgICAqICAgICBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICAgICAgICogICAgIG5ldyBGb3JtQ29udHJvbCgpXG4gICAgICAgICAqICBdKTtcbiAgICAgICAgICogIGNvbnNvbGUubG9nKGFyci52YWx1ZSk7ICAgLy8gW251bGwsIG51bGxdXG4gICAgICAgICAqXG4gICAgICAgICAqICBhcnIucGF0Y2hWYWx1ZShbJ05hbmN5J10pO1xuICAgICAgICAgKiAgY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbJ05hbmN5JywgbnVsbF1cbiAgICAgICAgICogIGBgYFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5wYXRjaFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBfYSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQ7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChuZXdWYWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuYXQoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmF0KGluZGV4KS5wYXRjaFZhbHVlKG5ld1ZhbHVlLCB7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiBvbmx5U2VsZiwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXNldHMgdGhlIHtcXEBsaW5rIEZvcm1BcnJheX0uIFRoaXMgbWVhbnMgYnkgZGVmYXVsdDpcbiAgICAgICAgICpcbiAgICAgICAgICogKiBUaGUgYXJyYXkgYW5kIGFsbCBkZXNjZW5kYW50cyBhcmUgbWFya2VkIGBwcmlzdGluZWBcbiAgICAgICAgICogKiBUaGUgYXJyYXkgYW5kIGFsbCBkZXNjZW5kYW50cyBhcmUgbWFya2VkIGB1bnRvdWNoZWRgXG4gICAgICAgICAqICogVGhlIHZhbHVlIG9mIGFsbCBkZXNjZW5kYW50cyB3aWxsIGJlIG51bGwgb3IgbnVsbCBtYXBzXG4gICAgICAgICAqXG4gICAgICAgICAqIFlvdSBjYW4gYWxzbyByZXNldCB0byBhIHNwZWNpZmljIGZvcm0gc3RhdGUgYnkgcGFzc2luZyBpbiBhbiBhcnJheSBvZiBzdGF0ZXNcbiAgICAgICAgICogdGhhdCBtYXRjaGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGNvbnRyb2wuIFRoZSBzdGF0ZSBjYW4gYmUgYSBzdGFuZGFsb25lIHZhbHVlXG4gICAgICAgICAqIG9yIGEgZm9ybSBzdGF0ZSBvYmplY3Qgd2l0aCBib3RoIGEgdmFsdWUgYW5kIGEgZGlzYWJsZWQgc3RhdHVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiBgYGB0c1xuICAgICAgICAgKiB0aGlzLmFyci5yZXNldChbJ25hbWUnLCAnbGFzdCBuYW1lJ10pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zb2xlLmxvZyh0aGlzLmFyci52YWx1ZSk7ICAvLyBbJ25hbWUnLCAnbGFzdCBuYW1lJ11cbiAgICAgICAgICogYGBgXG4gICAgICAgICAqXG4gICAgICAgICAqIC0gT1IgLVxuICAgICAgICAgKlxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICogdGhpcy5hcnIucmVzZXQoW1xuICAgICAgICAgKiAgIHt2YWx1ZTogJ25hbWUnLCBkaXNhYmxlZDogdHJ1ZX0sXG4gICAgICAgICAqICAgJ2xhc3QnXG4gICAgICAgICAqIF0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zb2xlLmxvZyh0aGlzLmFyci52YWx1ZSk7ICAvLyBbJ25hbWUnLCAnbGFzdCBuYW1lJ11cbiAgICAgICAgICogY29uc29sZS5sb2codGhpcy5hcnIuZ2V0KDApLnN0YXR1cyk7ICAvLyAnRElTQUJMRUQnXG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKiBAcGFyYW0gez89fSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzFcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAodmFsdWUsIF9hKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyB2YWx1ZSA9IFtdOyB9XG4gICAgICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgb25seVNlbGYgPSBfYi5vbmx5U2VsZiwgZW1pdEV2ZW50ID0gX2IuZW1pdEV2ZW50O1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2wucmVzZXQodmFsdWVbaW5kZXhdLCB7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IG9ubHlTZWxmLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVByaXN0aW5lKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVG91Y2hlZCh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgdGhlIGFycmF5LCBpbmNsdWRpbmcgYW55IGRpc2FibGVkIGNvbnRyb2xzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB5b3UnZCBsaWtlIHRvIGluY2x1ZGUgYWxsIHZhbHVlcyByZWdhcmRsZXNzIG9mIGRpc2FibGVkIHN0YXR1cywgdXNlIHRoaXMgbWV0aG9kLlxuICAgICAgICAgKiBPdGhlcndpc2UsIHRoZSBgdmFsdWVgIHByb3BlcnR5IGlzIHRoZSBiZXN0IHdheSB0byBnZXQgdGhlIHZhbHVlIG9mIHRoZSBhcnJheS5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUuZ2V0UmF3VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250cm9scy5tYXAoZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sID8gY29udHJvbC52YWx1ZSA6ICgoY29udHJvbCkpLmdldFJhd1ZhbHVlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7P30gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUuX3Rocm93SWZDb250cm9sTWlzc2luZyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbnRyb2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgICAgVGhlcmUgYXJlIG5vIGZvcm0gY29udHJvbHMgcmVnaXN0ZXJlZCB3aXRoIHRoaXMgYXJyYXkgeWV0LiAgSWYgeW91J3JlIHVzaW5nIG5nTW9kZWwsXFxuICAgICAgICB5b3UgbWF5IHdhbnQgdG8gY2hlY2sgbmV4dCB0aWNrIChlLmcuIHVzZSBzZXRUaW1lb3V0KS5cXG4gICAgICBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuYXQoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgZm9ybSBjb250cm9sIGF0IGluZGV4IFwiICsgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/fSBjYlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5fZm9yRWFjaENoaWxkID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzLmZvckVhY2goZnVuY3Rpb24gKGNvbnRyb2wsIGluZGV4KSB7IGNiKGNvbnRyb2wsIGluZGV4KTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5fdXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLmNvbnRyb2xzLmZpbHRlcihmdW5jdGlvbiAoY29udHJvbCkgeyByZXR1cm4gY29udHJvbC5lbmFibGVkIHx8IF90aGlzLmRpc2FibGVkOyB9KVxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGNvbnRyb2wpIHsgcmV0dXJuIGNvbnRyb2wudmFsdWU7IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb25kaXRpb25cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUuX2FueUNvbnRyb2xzID0gZnVuY3Rpb24gKGNvbmRpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHMuc29tZShmdW5jdGlvbiAoY29udHJvbCkgeyByZXR1cm4gY29udHJvbC5lbmFibGVkICYmIGNvbmRpdGlvbihjb250cm9sKTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5fc2V0VXBDb250cm9scyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wpIHsgcmV0dXJuIF90aGlzLl9yZWdpc3RlckNvbnRyb2woY29udHJvbCk7IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5fY2hlY2tBbGxWYWx1ZXNQcmVzZW50ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wsIGkpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IHN1cHBseSBhIHZhbHVlIGZvciBmb3JtIGNvbnRyb2wgYXQgaW5kZXg6IFwiICsgaSArIFwiLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLl9hbGxDb250cm9sc0Rpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuY29udHJvbHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRyb2wgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuZW5hYmxlZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHMubGVuZ3RoID4gMCB8fCB0aGlzLmRpc2FibGVkO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLl9yZWdpc3RlckNvbnRyb2wgPSBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgY29udHJvbC5zZXRQYXJlbnQodGhpcyk7XG4gICAgICAgICAgICBjb250cm9sLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZSh0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRm9ybUFycmF5O1xuICAgIH0oQWJzdHJhY3RDb250cm9sKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQ0ID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZm9ybURpcmVjdGl2ZVByb3ZpZGVyID0ge1xuICAgICAgICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE5nRm9ybTsgfSlcbiAgICB9O1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIHJlc29sdmVkUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICAvKipcbiAgICAgKiBcXEB3aGF0SXREb2VzIENyZWF0ZXMgYSB0b3AtbGV2ZWwge1xcQGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZSBhbmQgYmluZHMgaXQgdG8gYSBmb3JtXG4gICAgICogdG8gdHJhY2sgYWdncmVnYXRlIGZvcm0gdmFsdWUgYW5kIHZhbGlkYXRpb24gc3RhdHVzLlxuICAgICAqXG4gICAgICogXFxAaG93VG9Vc2VcbiAgICAgKlxuICAgICAqIEFzIHNvb24gYXMgeW91IGltcG9ydCB0aGUgYEZvcm1zTW9kdWxlYCwgdGhpcyBkaXJlY3RpdmUgYmVjb21lcyBhY3RpdmUgYnkgZGVmYXVsdCBvblxuICAgICAqIGFsbCBgPGZvcm0+YCB0YWdzLiAgWW91IGRvbid0IG5lZWQgdG8gYWRkIGEgc3BlY2lhbCBzZWxlY3Rvci5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gZXhwb3J0IHRoZSBkaXJlY3RpdmUgaW50byBhIGxvY2FsIHRlbXBsYXRlIHZhcmlhYmxlIHVzaW5nIGBuZ0Zvcm1gIGFzIHRoZSBrZXlcbiAgICAgKiAoZXg6IGAjbXlGb3JtPVwibmdGb3JtXCJgKS4gVGhpcyBpcyBvcHRpb25hbCwgYnV0IHVzZWZ1bC4gIE1hbnkgcHJvcGVydGllcyBmcm9tIHRoZSB1bmRlcmx5aW5nXG4gICAgICoge1xcQGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZSBhcmUgZHVwbGljYXRlZCBvbiB0aGUgZGlyZWN0aXZlIGl0c2VsZiwgc28gYSByZWZlcmVuY2UgdG8gaXRcbiAgICAgKiB3aWxsIGdpdmUgeW91IGFjY2VzcyB0byB0aGUgYWdncmVnYXRlIHZhbHVlIGFuZCB2YWxpZGl0eSBzdGF0dXMgb2YgdGhlIGZvcm0sIGFzIHdlbGwgYXNcbiAgICAgKiB1c2VyIGludGVyYWN0aW9uIHByb3BlcnRpZXMgbGlrZSBgZGlydHlgIGFuZCBgdG91Y2hlZGAuXG4gICAgICpcbiAgICAgKiBUbyByZWdpc3RlciBjaGlsZCBjb250cm9scyB3aXRoIHRoZSBmb3JtLCB5b3UnbGwgd2FudCB0byB1c2Uge1xcQGxpbmsgTmdNb2RlbH0gd2l0aCBhXG4gICAgICogYG5hbWVgIGF0dHJpYnV0ZS4gIFlvdSBjYW4gYWxzbyB1c2Uge1xcQGxpbmsgTmdNb2RlbEdyb3VwfSBpZiB5b3UnZCBsaWtlIHRvIGNyZWF0ZVxuICAgICAqIHN1Yi1ncm91cHMgd2l0aGluIHRoZSBmb3JtLlxuICAgICAqXG4gICAgICogWW91IGNhbiBsaXN0ZW4gdG8gdGhlIGRpcmVjdGl2ZSdzIGBuZ1N1Ym1pdGAgZXZlbnQgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdXNlciBoYXNcbiAgICAgKiB0cmlnZ2VyZWQgYSBmb3JtIHN1Ym1pc3Npb24uIFRoZSBgbmdTdWJtaXRgIGV2ZW50IHdpbGwgYmUgZW1pdHRlZCB3aXRoIHRoZSBvcmlnaW5hbCBmb3JtXG4gICAgICogc3VibWlzc2lvbiBldmVudC5cbiAgICAgKlxuICAgICAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL3NpbXBsZUZvcm0vc2ltcGxlX2Zvcm1fZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAgICpcbiAgICAgKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gICAgICpcbiAgICAgKiAqICoqTmdNb2R1bGUqKjogYEZvcm1zTW9kdWxlYFxuICAgICAqXG4gICAgICogIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBOZ0Zvcm0gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkNChOZ0Zvcm0sIF9zdXBlcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgICAgICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvcnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIE5nRm9ybSh2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnMpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fc3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5nU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgdGhpcy5mb3JtID1cbiAgICAgICAgICAgICAgICBuZXcgRm9ybUdyb3VwKHt9LCBjb21wb3NlVmFsaWRhdG9ycyh2YWxpZGF0b3JzKSwgY29tcG9zZUFzeW5jVmFsaWRhdG9ycyhhc3luY1ZhbGlkYXRvcnMpKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdGb3JtLnByb3RvdHlwZSwgXCJzdWJtaXR0ZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N1Ym1pdHRlZDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ0Zvcm0ucHJvdG90eXBlLCBcImZvcm1EaXJlY3RpdmVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdGb3JtLnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmZvcm07IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdGb3JtLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ0Zvcm0ucHJvdG90eXBlLCBcImNvbnRyb2xzXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHM7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUuYWRkQ29udHJvbCA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXNvbHZlZFByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udGFpbmVyID0gX3RoaXMuX2ZpbmRDb250YWluZXIoZGlyLnBhdGgpO1xuICAgICAgICAgICAgICAgIGRpci5fY29udHJvbCA9IChjb250YWluZXIucmVnaXN0ZXJDb250cm9sKGRpci5uYW1lLCBkaXIuY29udHJvbCkpO1xuICAgICAgICAgICAgICAgIHNldFVwQ29udHJvbChkaXIuY29udHJvbCwgZGlyKTtcbiAgICAgICAgICAgICAgICBkaXIuY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUuZ2V0Q29udHJvbCA9IGZ1bmN0aW9uIChkaXIpIHsgcmV0dXJuICh0aGlzLmZvcm0uZ2V0KGRpci5wYXRoKSk7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5yZW1vdmVDb250cm9sID0gZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJlc29sdmVkUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb250YWluZXIgPSBfdGhpcy5fZmluZENvbnRhaW5lcihkaXIucGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ29udHJvbChkaXIubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5hZGRGb3JtR3JvdXAgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNvbnRhaW5lciA9IF90aGlzLl9maW5kQ29udGFpbmVyKGRpci5wYXRoKTtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBncm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICAgICAgICAgICAgICAgIHNldFVwRm9ybUNvbnRhaW5lcihncm91cCwgZGlyKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIucmVnaXN0ZXJDb250cm9sKGRpci5uYW1lLCBncm91cCk7XG4gICAgICAgICAgICAgICAgZ3JvdXAudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLnJlbW92ZUZvcm1Hcm91cCA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXNvbHZlZFByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udGFpbmVyID0gX3RoaXMuX2ZpbmRDb250YWluZXIoZGlyLnBhdGgpO1xuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNvbnRyb2woZGlyLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUuZ2V0Rm9ybUdyb3VwID0gZnVuY3Rpb24gKGRpcikgeyByZXR1cm4gKHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUudXBkYXRlTW9kZWwgPSBmdW5jdGlvbiAoZGlyLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJlc29sdmVkUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjdHJsID0gKF90aGlzLmZvcm0uZ2V0KGRpci5wYXRoKSk7XG4gICAgICAgICAgICAgICAgY3RybC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5jb250cm9sLnNldFZhbHVlKHZhbHVlKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gJGV2ZW50XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgdGhpcy5fc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubmdTdWJtaXQuZW1pdCgkZXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUub25SZXNldCA9IGZ1bmN0aW9uICgpIHsgdGhpcy5yZXNldEZvcm0oKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLnJlc2V0Rm9ybSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHsgdmFsdWUgPSB1bmRlZmluZWQ7IH1cbiAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl9zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7P30gcGF0aFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5fZmluZENvbnRhaW5lciA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgICAgICBwYXRoLnBvcCgpO1xuICAgICAgICAgICAgcmV0dXJuIHBhdGgubGVuZ3RoID8gKHRoaXMuZm9ybS5nZXQocGF0aCkpIDogdGhpcy5mb3JtO1xuICAgICAgICB9O1xuICAgICAgICBOZ0Zvcm0uZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm06bm90KFtuZ05vRm9ybV0pOm5vdChbZm9ybUdyb3VwXSksbmdGb3JtLFtuZ0Zvcm1dJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW2Zvcm1EaXJlY3RpdmVQcm92aWRlcl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICcoc3VibWl0KSc6ICdvblN1Ym1pdCgkZXZlbnQpJywgJyhyZXNldCknOiAnb25SZXNldCgpJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0czogWyduZ1N1Ym1pdCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0QXM6ICduZ0Zvcm0nXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgTmdGb3JtLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICByZXR1cm4gTmdGb3JtO1xuICAgIH0oQ29udHJvbENvbnRhaW5lcikpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIEV4YW1wbGVzID0ge1xuICAgICAgICBmb3JtQ29udHJvbE5hbWU6IFwiXFxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XFxcIm15R3JvdXBcXFwiPlxcbiAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XFxcImZpcnN0TmFtZVxcXCI+XFxuICAgIDwvZGl2PlxcblxcbiAgICBJbiB5b3VyIGNsYXNzOlxcblxcbiAgICB0aGlzLm15R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcXG4gICAgICAgZmlyc3ROYW1lOiBuZXcgRm9ybUNvbnRyb2woKVxcbiAgICB9KTtcIixcbiAgICAgICAgZm9ybUdyb3VwTmFtZTogXCJcXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cXFwibXlHcm91cFxcXCI+XFxuICAgICAgIDxkaXYgZm9ybUdyb3VwTmFtZT1cXFwicGVyc29uXFxcIj5cXG4gICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cXFwiZmlyc3ROYW1lXFxcIj5cXG4gICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICBJbiB5b3VyIGNsYXNzOlxcblxcbiAgICB0aGlzLm15R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcXG4gICAgICAgcGVyc29uOiBuZXcgRm9ybUdyb3VwKHsgZmlyc3ROYW1lOiBuZXcgRm9ybUNvbnRyb2woKSB9KVxcbiAgICB9KTtcIixcbiAgICAgICAgZm9ybUFycmF5TmFtZTogXCJcXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cXFwibXlHcm91cFxcXCI+XFxuICAgICAgPGRpdiBmb3JtQXJyYXlOYW1lPVxcXCJjaXRpZXNcXFwiPlxcbiAgICAgICAgPGRpdiAqbmdGb3I9XFxcImxldCBjaXR5IG9mIGNpdHlBcnJheS5jb250cm9sczsgbGV0IGk9aW5kZXhcXFwiPlxcbiAgICAgICAgICA8aW5wdXQgW2Zvcm1Db250cm9sTmFtZV09XFxcImlcXFwiPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICBJbiB5b3VyIGNsYXNzOlxcblxcbiAgICB0aGlzLmNpdHlBcnJheSA9IG5ldyBGb3JtQXJyYXkoW25ldyBGb3JtQ29udHJvbCgnU0YnKV0pO1xcbiAgICB0aGlzLm15R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcXG4gICAgICBjaXRpZXM6IHRoaXMuY2l0eUFycmF5XFxuICAgIH0pO1wiLFxuICAgICAgICBuZ01vZGVsR3JvdXA6IFwiXFxuICAgIDxmb3JtPlxcbiAgICAgICA8ZGl2IG5nTW9kZWxHcm91cD1cXFwicGVyc29uXFxcIj5cXG4gICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVxcXCJwZXJzb24ubmFtZVxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIj5cXG4gICAgICAgPC9kaXY+XFxuICAgIDwvZm9ybT5cIixcbiAgICAgICAgbmdNb2RlbFdpdGhGb3JtR3JvdXA6IFwiXFxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XFxcIm15R3JvdXBcXFwiPlxcbiAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVxcXCJmaXJzdE5hbWVcXFwiPlxcbiAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcInNob3dNb3JlQ29udHJvbHNcXFwiIFtuZ01vZGVsT3B0aW9uc109XFxcIntzdGFuZGFsb25lOiB0cnVlfVxcXCI+XFxuICAgIDwvZGl2PlxcbiAgXCJcbiAgICB9O1xuXG4gICAgdmFyIFRlbXBsYXRlRHJpdmVuRXJyb3JzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gVGVtcGxhdGVEcml2ZW5FcnJvcnMoKSB7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5tb2RlbFBhcmVudEV4Y2VwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgIG5nTW9kZWwgY2Fubm90IGJlIHVzZWQgdG8gcmVnaXN0ZXIgZm9ybSBjb250cm9scyB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBUcnkgdXNpbmdcXG4gICAgICBmb3JtR3JvdXAncyBwYXJ0bmVyIGRpcmVjdGl2ZSBcXFwiZm9ybUNvbnRyb2xOYW1lXFxcIiBpbnN0ZWFkLiAgRXhhbXBsZTpcXG5cXG4gICAgICBcIiArIEV4YW1wbGVzLmZvcm1Db250cm9sTmFtZSArIFwiXFxuXFxuICAgICAgT3IsIGlmIHlvdSdkIGxpa2UgdG8gYXZvaWQgcmVnaXN0ZXJpbmcgdGhpcyBmb3JtIGNvbnRyb2wsIGluZGljYXRlIHRoYXQgaXQncyBzdGFuZGFsb25lIGluIG5nTW9kZWxPcHRpb25zOlxcblxcbiAgICAgIEV4YW1wbGU6XFxuXFxuICAgICAgXCIgKyBFeGFtcGxlcy5uZ01vZGVsV2l0aEZvcm1Hcm91cCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMuZm9ybUdyb3VwTmFtZUV4Y2VwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgIG5nTW9kZWwgY2Fubm90IGJlIHVzZWQgdG8gcmVnaXN0ZXIgZm9ybSBjb250cm9scyB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cE5hbWUgb3IgZm9ybUFycmF5TmFtZSBkaXJlY3RpdmUuXFxuXFxuICAgICAgT3B0aW9uIDE6IFVzZSBmb3JtQ29udHJvbE5hbWUgaW5zdGVhZCBvZiBuZ01vZGVsIChyZWFjdGl2ZSBzdHJhdGVneSk6XFxuXFxuICAgICAgXCIgKyBFeGFtcGxlcy5mb3JtR3JvdXBOYW1lICsgXCJcXG5cXG4gICAgICBPcHRpb24gMjogIFVwZGF0ZSBuZ01vZGVsJ3MgcGFyZW50IGJlIG5nTW9kZWxHcm91cCAodGVtcGxhdGUtZHJpdmVuIHN0cmF0ZWd5KTpcXG5cXG4gICAgICBcIiArIEV4YW1wbGVzLm5nTW9kZWxHcm91cCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMubWlzc2luZ05hbWVFeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJZiBuZ01vZGVsIGlzIHVzZWQgd2l0aGluIGEgZm9ybSB0YWcsIGVpdGhlciB0aGUgbmFtZSBhdHRyaWJ1dGUgbXVzdCBiZSBzZXQgb3IgdGhlIGZvcm1cXG4gICAgICBjb250cm9sIG11c3QgYmUgZGVmaW5lZCBhcyAnc3RhbmRhbG9uZScgaW4gbmdNb2RlbE9wdGlvbnMuXFxuXFxuICAgICAgRXhhbXBsZSAxOiA8aW5wdXQgWyhuZ01vZGVsKV09XFxcInBlcnNvbi5maXJzdE5hbWVcXFwiIG5hbWU9XFxcImZpcnN0XFxcIj5cXG4gICAgICBFeGFtcGxlIDI6IDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwicGVyc29uLmZpcnN0TmFtZVxcXCIgW25nTW9kZWxPcHRpb25zXT1cXFwie3N0YW5kYWxvbmU6IHRydWV9XFxcIj5cIik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMubW9kZWxHcm91cFBhcmVudEV4Y2VwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgIG5nTW9kZWxHcm91cCBjYW5ub3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuXFxuXFxuICAgICAgT3B0aW9uIDE6IFVzZSBmb3JtR3JvdXBOYW1lIGluc3RlYWQgb2YgbmdNb2RlbEdyb3VwIChyZWFjdGl2ZSBzdHJhdGVneSk6XFxuXFxuICAgICAgXCIgKyBFeGFtcGxlcy5mb3JtR3JvdXBOYW1lICsgXCJcXG5cXG4gICAgICBPcHRpb24gMjogIFVzZSBhIHJlZ3VsYXIgZm9ybSB0YWcgaW5zdGVhZCBvZiB0aGUgZm9ybUdyb3VwIGRpcmVjdGl2ZSAodGVtcGxhdGUtZHJpdmVuIHN0cmF0ZWd5KTpcXG5cXG4gICAgICBcIiArIEV4YW1wbGVzLm5nTW9kZWxHcm91cCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBUZW1wbGF0ZURyaXZlbkVycm9ycztcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkOCA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIG1vZGVsR3JvdXBQcm92aWRlciA9IHtcbiAgICAgICAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBOZ01vZGVsR3JvdXA7IH0pXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBcXEB3aGF0SXREb2VzIENyZWF0ZXMgYW5kIGJpbmRzIGEge1xcQGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZSB0byBhIERPTSBlbGVtZW50LlxuICAgICAqXG4gICAgICogXFxAaG93VG9Vc2VcbiAgICAgKlxuICAgICAqIFRoaXMgZGlyZWN0aXZlIGNhbiBvbmx5IGJlIHVzZWQgYXMgYSBjaGlsZCBvZiB7XFxAbGluayBOZ0Zvcm19IChvciBpbiBvdGhlciB3b3JkcyxcbiAgICAgKiB3aXRoaW4gYDxmb3JtPmAgdGFncykuXG4gICAgICpcbiAgICAgKiBVc2UgdGhpcyBkaXJlY3RpdmUgaWYgeW91J2QgbGlrZSB0byBjcmVhdGUgYSBzdWItZ3JvdXAgd2l0aGluIGEgZm9ybS4gVGhpcyBjYW5cbiAgICAgKiBjb21lIGluIGhhbmR5IGlmIHlvdSB3YW50IHRvIHZhbGlkYXRlIGEgc3ViLWdyb3VwIG9mIHlvdXIgZm9ybSBzZXBhcmF0ZWx5IGZyb21cbiAgICAgKiB0aGUgcmVzdCBvZiB5b3VyIGZvcm0sIG9yIGlmIHNvbWUgdmFsdWVzIGluIHlvdXIgZG9tYWluIG1vZGVsIG1ha2UgbW9yZSBzZW5zZSB0b1xuICAgICAqIGNvbnN1bWUgdG9nZXRoZXIgaW4gYSBuZXN0ZWQgb2JqZWN0LlxuICAgICAqXG4gICAgICogUGFzcyBpbiB0aGUgbmFtZSB5b3UnZCBsaWtlIHRoaXMgc3ViLWdyb3VwIHRvIGhhdmUgYW5kIGl0IHdpbGwgYmVjb21lIHRoZSBrZXlcbiAgICAgKiBmb3IgdGhlIHN1Yi1ncm91cCBpbiB0aGUgZm9ybSdzIGZ1bGwgdmFsdWUuIFlvdSBjYW4gYWxzbyBleHBvcnQgdGhlIGRpcmVjdGl2ZSBpbnRvXG4gICAgICogYSBsb2NhbCB0ZW1wbGF0ZSB2YXJpYWJsZSB1c2luZyBgbmdNb2RlbEdyb3VwYCAoZXg6IGAjbXlHcm91cD1cIm5nTW9kZWxHcm91cFwiYCkuXG4gICAgICpcbiAgICAgKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9uZ01vZGVsR3JvdXAvbmdfbW9kZWxfZ3JvdXBfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAgICpcbiAgICAgKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gICAgICpcbiAgICAgKiAqICoqTmdNb2R1bGUqKjogYEZvcm1zTW9kdWxlYFxuICAgICAqXG4gICAgICogXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIE5nTW9kZWxHcm91cCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQ4KE5nTW9kZWxHcm91cCwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gcGFyZW50XG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAgICAgKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gTmdNb2RlbEdyb3VwKHBhcmVudCwgdmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzKSB7XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzO1xuICAgICAgICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdNb2RlbEdyb3VwLnByb3RvdHlwZS5fY2hlY2tQYXJlbnRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgTmdNb2RlbEdyb3VwKSAmJiAhKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIE5nRm9ybSkpIHtcbiAgICAgICAgICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5tb2RlbEdyb3VwUGFyZW50RXhjZXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE5nTW9kZWxHcm91cC5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdbbmdNb2RlbEdyb3VwXScsIHByb3ZpZGVyczogW21vZGVsR3JvdXBQcm92aWRlcl0sIGV4cG9ydEFzOiAnbmdNb2RlbEdyb3VwJyB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE5nTW9kZWxHcm91cC5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogQ29udHJvbENvbnRhaW5lciwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5Ib3N0IH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5Ta2lwU2VsZiB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgTmdNb2RlbEdyb3VwLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ25hbWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ25nTW9kZWxHcm91cCcsXSB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBOZ01vZGVsR3JvdXA7XG4gICAgfShBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSkpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkNyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIGZvcm1Db250cm9sQmluZGluZyA9IHtcbiAgICAgICAgcHJvdmlkZTogTmdDb250cm9sLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE5nTW9kZWw7IH0pXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBgbmdNb2RlbGAgZm9yY2VzIGFuIGFkZGl0aW9uYWwgY2hhbmdlIGRldGVjdGlvbiBydW4gd2hlbiBpdHMgaW5wdXRzIGNoYW5nZTpcbiAgICAgKiBFLmcuOlxuICAgICAqIGBgYFxuICAgICAqIDxkaXY+e3tteU1vZGVsLnZhbGlkfX08L2Rpdj5cbiAgICAgKiA8aW5wdXQgWyhuZ01vZGVsKV09XCJteVZhbHVlXCIgI215TW9kZWw9XCJuZ01vZGVsXCI+XG4gICAgICogYGBgXG4gICAgICogSS5lLiBgbmdNb2RlbGAgY2FuIGV4cG9ydCBpdHNlbGYgb24gdGhlIGVsZW1lbnQgYW5kIHRoZW4gYmUgdXNlZCBpbiB0aGUgdGVtcGxhdGUuXG4gICAgICogTm9ybWFsbHksIHRoaXMgd291bGQgcmVzdWx0IGluIGV4cHJlc3Npb25zIGJlZm9yZSB0aGUgYGlucHV0YCB0aGF0IHVzZSB0aGUgZXhwb3J0ZWQgZGlyZWN0aXZlXG4gICAgICogdG8gaGF2ZSBhbmQgb2xkIHZhbHVlIGFzIHRoZXkgaGF2ZSBiZWVuXG4gICAgICogZGlydHkgY2hlY2tlZCBiZWZvcmUuIEFzIHRoaXMgaXMgYSB2ZXJ5IGNvbW1vbiBjYXNlIGZvciBgbmdNb2RlbGAsIHdlIGFkZGVkIHRoaXMgc2Vjb25kIGNoYW5nZVxuICAgICAqIGRldGVjdGlvbiBydW4uXG4gICAgICpcbiAgICAgKiBOb3RlczpcbiAgICAgKiAtIHRoaXMgaXMganVzdCBvbmUgZXh0cmEgcnVuIG5vIG1hdHRlciBob3cgbWFueSBgbmdNb2RlbGAgaGF2ZSBiZWVuIGNoYW5nZWQuXG4gICAgICogLSB0aGlzIGlzIGEgZ2VuZXJhbCBwcm9ibGVtIHdoZW4gdXNpbmcgYGV4cG9ydEFzYCBmb3IgZGlyZWN0aXZlcyFcbiAgICAgKi9cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZXNvbHZlZFByb21pc2UkMSA9IFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICAvKipcbiAgICAgKiBcXEB3aGF0SXREb2VzIENyZWF0ZXMgYSB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgZnJvbSBhIGRvbWFpbiBtb2RlbCBhbmQgYmluZHMgaXRcbiAgICAgKiB0byBhIGZvcm0gY29udHJvbCBlbGVtZW50LlxuICAgICAqXG4gICAgICogVGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSB3aWxsIHRyYWNrIHRoZSB2YWx1ZSwgdXNlciBpbnRlcmFjdGlvbiwgYW5kXG4gICAgICogdmFsaWRhdGlvbiBzdGF0dXMgb2YgdGhlIGNvbnRyb2wgYW5kIGtlZXAgdGhlIHZpZXcgc3luY2VkIHdpdGggdGhlIG1vZGVsLiBJZiB1c2VkXG4gICAgICogd2l0aGluIGEgcGFyZW50IGZvcm0sIHRoZSBkaXJlY3RpdmUgd2lsbCBhbHNvIHJlZ2lzdGVyIGl0c2VsZiB3aXRoIHRoZSBmb3JtIGFzIGEgY2hpbGRcbiAgICAgKiBjb250cm9sLlxuICAgICAqXG4gICAgICogXFxAaG93VG9Vc2VcbiAgICAgKlxuICAgICAqIFRoaXMgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIGJ5IGl0c2VsZiBvciBhcyBwYXJ0IG9mIGEgbGFyZ2VyIGZvcm0uIEFsbCB5b3UgbmVlZCBpcyB0aGVcbiAgICAgKiBgbmdNb2RlbGAgc2VsZWN0b3IgdG8gYWN0aXZhdGUgaXQuXG4gICAgICpcbiAgICAgKiBJdCBhY2NlcHRzIGEgZG9tYWluIG1vZGVsIGFzIGFuIG9wdGlvbmFsIHtcXEBsaW5rIFxcQElucHV0fS4gSWYgeW91IGhhdmUgYSBvbmUtd2F5IGJpbmRpbmdcbiAgICAgKiB0byBgbmdNb2RlbGAgd2l0aCBgW11gIHN5bnRheCwgY2hhbmdpbmcgdGhlIHZhbHVlIG9mIHRoZSBkb21haW4gbW9kZWwgaW4gdGhlIGNvbXBvbmVudFxuICAgICAqIGNsYXNzIHdpbGwgc2V0IHRoZSB2YWx1ZSBpbiB0aGUgdmlldy4gSWYgeW91IGhhdmUgYSB0d28td2F5IGJpbmRpbmcgd2l0aCBgWygpXWAgc3ludGF4XG4gICAgICogKGFsc28ga25vd24gYXMgJ2JhbmFuYS1ib3ggc3ludGF4JyksIHRoZSB2YWx1ZSBpbiB0aGUgVUkgd2lsbCBhbHdheXMgYmUgc3luY2VkIGJhY2sgdG9cbiAgICAgKiB0aGUgZG9tYWluIG1vZGVsIGluIHlvdXIgY2xhc3MgYXMgd2VsbC5cbiAgICAgKlxuICAgICAqIElmIHlvdSB3aXNoIHRvIGluc3BlY3QgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGFzc29jaWF0ZWQge1xcQGxpbmsgRm9ybUNvbnRyb2x9IChsaWtlXG4gICAgICogdmFsaWRpdHkgc3RhdGUpLCB5b3UgY2FuIGFsc28gZXhwb3J0IHRoZSBkaXJlY3RpdmUgaW50byBhIGxvY2FsIHRlbXBsYXRlIHZhcmlhYmxlIHVzaW5nXG4gICAgICogYG5nTW9kZWxgIGFzIHRoZSBrZXkgKGV4OiBgI215VmFyPVwibmdNb2RlbFwiYCkuIFlvdSBjYW4gdGhlbiBhY2Nlc3MgdGhlIGNvbnRyb2wgdXNpbmcgdGhlXG4gICAgICogZGlyZWN0aXZlJ3MgYGNvbnRyb2xgIHByb3BlcnR5LCBidXQgbW9zdCBwcm9wZXJ0aWVzIHlvdSdsbCBuZWVkIChsaWtlIGB2YWxpZGAgYW5kIGBkaXJ0eWApXG4gICAgICogd2lsbCBmYWxsIHRocm91Z2ggdG8gdGhlIGNvbnRyb2wgYW55d2F5LCBzbyB5b3UgY2FuIGFjY2VzcyB0aGVtIGRpcmVjdGx5LiBZb3UgY2FuIHNlZSBhXG4gICAgICogZnVsbCBsaXN0IG9mIHByb3BlcnRpZXMgZGlyZWN0bHkgYXZhaWxhYmxlIGluIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZX0uXG4gICAgICpcbiAgICAgKiBUaGUgZm9sbG93aW5nIGlzIGFuIGV4YW1wbGUgb2YgYSBzaW1wbGUgc3RhbmRhbG9uZSBjb250cm9sIHVzaW5nIGBuZ01vZGVsYDpcbiAgICAgKlxuICAgICAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL3NpbXBsZU5nTW9kZWwvc2ltcGxlX25nX21vZGVsX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAqXG4gICAgICogV2hlbiB1c2luZyB0aGUgYG5nTW9kZWxgIHdpdGhpbiBgPGZvcm0+YCB0YWdzLCB5b3UnbGwgYWxzbyBuZWVkIHRvIHN1cHBseSBhIGBuYW1lYCBhdHRyaWJ1dGVcbiAgICAgKiBzbyB0aGF0IHRoZSBjb250cm9sIGNhbiBiZSByZWdpc3RlcmVkIHdpdGggdGhlIHBhcmVudCBmb3JtIHVuZGVyIHRoYXQgbmFtZS5cbiAgICAgKlxuICAgICAqIEl0J3Mgd29ydGggbm90aW5nIHRoYXQgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJlbnQgZm9ybSwgeW91IG9mdGVuIGNhbiBza2lwIG9uZS13YXkgb3JcbiAgICAgKiB0d28td2F5IGJpbmRpbmcgYmVjYXVzZSB0aGUgcGFyZW50IGZvcm0gd2lsbCBzeW5jIHRoZSB2YWx1ZSBmb3IgeW91LiBZb3UgY2FuIGFjY2Vzc1xuICAgICAqIGl0cyBwcm9wZXJ0aWVzIGJ5IGV4cG9ydGluZyBpdCBpbnRvIGEgbG9jYWwgdGVtcGxhdGUgdmFyaWFibGUgdXNpbmcgYG5nRm9ybWAgKGV4OlxuICAgICAqIGAjZj1cIm5nRm9ybVwiYCkuIFRoZW4geW91IGNhbiBwYXNzIGl0IHdoZXJlIGl0IG5lZWRzIHRvIGdvIG9uIHN1Ym1pdC5cbiAgICAgKlxuICAgICAqIElmIHlvdSBkbyBuZWVkIHRvIHBvcHVsYXRlIGluaXRpYWwgdmFsdWVzIGludG8geW91ciBmb3JtLCB1c2luZyBhIG9uZS13YXkgYmluZGluZyBmb3JcbiAgICAgKiBgbmdNb2RlbGAgdGVuZHMgdG8gYmUgc3VmZmljaWVudCBhcyBsb25nIGFzIHlvdSB1c2UgdGhlIGV4cG9ydGVkIGZvcm0ncyB2YWx1ZSByYXRoZXJcbiAgICAgKiB0aGFuIHRoZSBkb21haW4gbW9kZWwncyB2YWx1ZSBvbiBzdWJtaXQuXG4gICAgICpcbiAgICAgKiBUYWtlIGEgbG9vayBhdCBhbiBleGFtcGxlIG9mIHVzaW5nIGBuZ01vZGVsYCB3aXRoaW4gYSBmb3JtOlxuICAgICAqXG4gICAgICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlRm9ybS9zaW1wbGVfZm9ybV9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgKlxuICAgICAqIFRvIHNlZSBgbmdNb2RlbGAgZXhhbXBsZXMgd2l0aCBkaWZmZXJlbnQgZm9ybSBjb250cm9sIHR5cGVzLCBzZWU6XG4gICAgICpcbiAgICAgKiAqIFJhZGlvIGJ1dHRvbnM6IHtcXEBsaW5rIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3J9XG4gICAgICogKiBTZWxlY3RzOiB7XFxAbGluayBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcn1cbiAgICAgKlxuICAgICAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gICAgICpcbiAgICAgKiAqKk5nTW9kdWxlKio6IGBGb3Jtc01vZHVsZWBcbiAgICAgKlxuICAgICAqICBcXEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgTmdNb2RlbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQ3KE5nTW9kZWwsIF9zdXBlcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHBhcmVudFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgICAgICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvcnNcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZUFjY2Vzc29yc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gTmdNb2RlbChwYXJlbnQsIHZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9ycywgdmFsdWVBY2Nlc3NvcnMpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLl9yYXdWYWxpZGF0b3JzID0gdmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVBY2Nlc3NvciA9IHNlbGVjdFZhbHVlQWNjZXNzb3IodGhpcywgdmFsdWVBY2Nlc3NvcnMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNoYW5nZXNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrRm9yRXJyb3JzKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3JlZ2lzdGVyZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0VXBDb250cm9sKCk7XG4gICAgICAgICAgICBpZiAoJ2lzRGlzYWJsZWQnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEaXNhYmxlZChjaGFuZ2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1Byb3BlcnR5VXBkYXRlZChjaGFuZ2VzLCB0aGlzLnZpZXdNb2RlbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVWYWx1ZSh0aGlzLm1vZGVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IHRoaXMubW9kZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7IHRoaXMuZm9ybURpcmVjdGl2ZSAmJiB0aGlzLmZvcm1EaXJlY3RpdmUucmVtb3ZlQ29udHJvbCh0aGlzKTsgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nTW9kZWwucHJvdG90eXBlLCBcImNvbnRyb2xcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2NvbnRyb2w7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdNb2RlbC5wcm90b3R5cGUsIFwicGF0aFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQgPyBjb250cm9sUGF0aCh0aGlzLm5hbWUsIHRoaXMuX3BhcmVudCkgOiBbdGhpcy5uYW1lXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdNb2RlbC5wcm90b3R5cGUsIFwiZm9ybURpcmVjdGl2ZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcGFyZW50ID8gdGhpcy5fcGFyZW50LmZvcm1EaXJlY3RpdmUgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nTW9kZWwucHJvdG90eXBlLCBcInZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcG9zZVZhbGlkYXRvcnModGhpcy5fcmF3VmFsaWRhdG9ycyk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdNb2RlbC5wcm90b3R5cGUsIFwiYXN5bmNWYWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9yYXdBc3luY1ZhbGlkYXRvcnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IG5ld1ZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ01vZGVsLnByb3RvdHlwZS52aWV3VG9Nb2RlbFVwZGF0ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlLmVtaXQobmV3VmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLl9zZXRVcENvbnRyb2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9pc1N0YW5kYWxvbmUoKSA/IHRoaXMuX3NldFVwU3RhbmRhbG9uZSgpIDpcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUuYWRkQ29udHJvbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX3JlZ2lzdGVyZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLl9pc1N0YW5kYWxvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuX3BhcmVudCB8fCAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5zdGFuZGFsb25lKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ01vZGVsLnByb3RvdHlwZS5fc2V0VXBTdGFuZGFsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0VXBDb250cm9sKHRoaXMuX2NvbnRyb2wsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ01vZGVsLnByb3RvdHlwZS5fY2hlY2tGb3JFcnJvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2lzU3RhbmRhbG9uZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tQYXJlbnRUeXBlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jaGVja05hbWUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ01vZGVsLnByb3RvdHlwZS5fY2hlY2tQYXJlbnRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgTmdNb2RlbEdyb3VwKSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMuZm9ybUdyb3VwTmFtZUV4Y2VwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBOZ01vZGVsR3JvdXApICYmICEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgTmdGb3JtKSkge1xuICAgICAgICAgICAgICAgIFRlbXBsYXRlRHJpdmVuRXJyb3JzLm1vZGVsUGFyZW50RXhjZXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUuX2NoZWNrTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLm5hbWUpXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5vcHRpb25zLm5hbWU7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2lzU3RhbmRhbG9uZSgpICYmICF0aGlzLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5taXNzaW5nTmFtZUV4Y2VwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUuX3VwZGF0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmVzb2x2ZWRQcm9taXNlJDEudGhlbihmdW5jdGlvbiAoKSB7IF90aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUsIHsgZW1pdFZpZXdUb01vZGVsQ2hhbmdlOiBmYWxzZSB9KTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNoYW5nZXNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLl91cGRhdGVEaXNhYmxlZCA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZGlzYWJsZWRWYWx1ZSA9IGNoYW5nZXNbJ2lzRGlzYWJsZWQnXS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpc0Rpc2FibGVkID0gZGlzYWJsZWRWYWx1ZSA9PT0gJycgfHwgKGRpc2FibGVkVmFsdWUgJiYgZGlzYWJsZWRWYWx1ZSAhPT0gJ2ZhbHNlJyk7XG4gICAgICAgICAgICByZXNvbHZlZFByb21pc2UkMS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNEaXNhYmxlZCAmJiAhX3RoaXMuY29udHJvbC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb250cm9sLmRpc2FibGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzRGlzYWJsZWQgJiYgX3RoaXMuY29udHJvbC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb250cm9sLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBOZ01vZGVsLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmdNb2RlbF06bm90KFtmb3JtQ29udHJvbE5hbWVdKTpub3QoW2Zvcm1Db250cm9sXSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbZm9ybUNvbnRyb2xCaW5kaW5nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydEFzOiAnbmdNb2RlbCdcbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBOZ01vZGVsLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBDb250cm9sQ29udGFpbmVyLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5Ib3N0IH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMVUVfQUNDRVNTT1IsXSB9LF0gfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgTmdNb2RlbC5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICduYW1lJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCB9LF0sXG4gICAgICAgICAgICAnaXNEaXNhYmxlZCc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnZGlzYWJsZWQnLF0gfSxdLFxuICAgICAgICAgICAgJ21vZGVsJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWyduZ01vZGVsJyxdIH0sXSxcbiAgICAgICAgICAgICdvcHRpb25zJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWyduZ01vZGVsT3B0aW9ucycsXSB9LF0sXG4gICAgICAgICAgICAndXBkYXRlJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PdXRwdXQsIGFyZ3M6IFsnbmdNb2RlbENoYW5nZScsXSB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBOZ01vZGVsO1xuICAgIH0oTmdDb250cm9sKSk7XG5cbiAgICB2YXIgUmVhY3RpdmVFcnJvcnMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBSZWFjdGl2ZUVycm9ycygpIHtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJlYWN0aXZlRXJyb3JzLmNvbnRyb2xQYXJlbnRFeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmb3JtQ29udHJvbE5hbWUgbXVzdCBiZSB1c2VkIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwIGRpcmVjdGl2ZS4gIFlvdSdsbCB3YW50IHRvIGFkZCBhIGZvcm1Hcm91cFxcbiAgICAgICBkaXJlY3RpdmUgYW5kIHBhc3MgaXQgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIGluc3RhbmNlICh5b3UgY2FuIGNyZWF0ZSBvbmUgaW4geW91ciBjbGFzcykuXFxuXFxuICAgICAgRXhhbXBsZTpcXG5cXG4gICAgICBcIiArIEV4YW1wbGVzLmZvcm1Db250cm9sTmFtZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmVhY3RpdmVFcnJvcnMubmdNb2RlbEdyb3VwRXhjZXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZm9ybUNvbnRyb2xOYW1lIGNhbm5vdCBiZSB1c2VkIHdpdGggYW4gbmdNb2RlbEdyb3VwIHBhcmVudC4gSXQgaXMgb25seSBjb21wYXRpYmxlIHdpdGggcGFyZW50c1xcbiAgICAgICB0aGF0IGFsc28gaGF2ZSBhIFxcXCJmb3JtXFxcIiBwcmVmaXg6IGZvcm1Hcm91cE5hbWUsIGZvcm1BcnJheU5hbWUsIG9yIGZvcm1Hcm91cC5cXG5cXG4gICAgICAgT3B0aW9uIDE6ICBVcGRhdGUgdGhlIHBhcmVudCB0byBiZSBmb3JtR3JvdXBOYW1lIChyZWFjdGl2ZSBmb3JtIHN0cmF0ZWd5KVxcblxcbiAgICAgICAgXCIgKyBFeGFtcGxlcy5mb3JtR3JvdXBOYW1lICsgXCJcXG5cXG4gICAgICAgIE9wdGlvbiAyOiBVc2UgbmdNb2RlbCBpbnN0ZWFkIG9mIGZvcm1Db250cm9sTmFtZSAodGVtcGxhdGUtZHJpdmVuIHN0cmF0ZWd5KVxcblxcbiAgICAgICAgXCIgKyBFeGFtcGxlcy5uZ01vZGVsR3JvdXApO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJlYWN0aXZlRXJyb3JzLm1pc3NpbmdGb3JtRXhjZXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZm9ybUdyb3VwIGV4cGVjdHMgYSBGb3JtR3JvdXAgaW5zdGFuY2UuIFBsZWFzZSBwYXNzIG9uZSBpbi5cXG5cXG4gICAgICAgRXhhbXBsZTpcXG5cXG4gICAgICAgXCIgKyBFeGFtcGxlcy5mb3JtQ29udHJvbE5hbWUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJlYWN0aXZlRXJyb3JzLmdyb3VwUGFyZW50RXhjZXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZm9ybUdyb3VwTmFtZSBtdXN0IGJlIHVzZWQgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLiAgWW91J2xsIHdhbnQgdG8gYWRkIGEgZm9ybUdyb3VwXFxuICAgICAgZGlyZWN0aXZlIGFuZCBwYXNzIGl0IGFuIGV4aXN0aW5nIEZvcm1Hcm91cCBpbnN0YW5jZSAoeW91IGNhbiBjcmVhdGUgb25lIGluIHlvdXIgY2xhc3MpLlxcblxcbiAgICAgIEV4YW1wbGU6XFxuXFxuICAgICAgXCIgKyBFeGFtcGxlcy5mb3JtR3JvdXBOYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSZWFjdGl2ZUVycm9ycy5hcnJheVBhcmVudEV4Y2VwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImZvcm1BcnJheU5hbWUgbXVzdCBiZSB1c2VkIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwIGRpcmVjdGl2ZS4gIFlvdSdsbCB3YW50IHRvIGFkZCBhIGZvcm1Hcm91cFxcbiAgICAgICBkaXJlY3RpdmUgYW5kIHBhc3MgaXQgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIGluc3RhbmNlICh5b3UgY2FuIGNyZWF0ZSBvbmUgaW4geW91ciBjbGFzcykuXFxuXFxuICAgICAgICBFeGFtcGxlOlxcblxcbiAgICAgICAgXCIgKyBFeGFtcGxlcy5mb3JtQXJyYXlOYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSZWFjdGl2ZUVycm9ycy5kaXNhYmxlZEF0dHJXYXJuaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiXFxuICAgICAgSXQgbG9va3MgbGlrZSB5b3UncmUgdXNpbmcgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSB3aXRoIGEgcmVhY3RpdmUgZm9ybSBkaXJlY3RpdmUuIElmIHlvdSBzZXQgZGlzYWJsZWQgdG8gdHJ1ZVxcbiAgICAgIHdoZW4geW91IHNldCB1cCB0aGlzIGNvbnRyb2wgaW4geW91ciBjb21wb25lbnQgY2xhc3MsIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgd2lsbCBhY3R1YWxseSBiZSBzZXQgaW4gdGhlIERPTSBmb3JcXG4gICAgICB5b3UuIFdlIHJlY29tbWVuZCB1c2luZyB0aGlzIGFwcHJvYWNoIHRvIGF2b2lkICdjaGFuZ2VkIGFmdGVyIGNoZWNrZWQnIGVycm9ycy5cXG4gICAgICAgXFxuICAgICAgRXhhbXBsZTogXFxuICAgICAgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xcbiAgICAgICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCh7dmFsdWU6ICdOYW5jeScsIGRpc2FibGVkOiB0cnVlfSwgVmFsaWRhdG9ycy5yZXF1aXJlZCksXFxuICAgICAgICBsYXN0OiBuZXcgRm9ybUNvbnRyb2woJ0RyZXcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxcbiAgICAgIH0pO1xcbiAgICBcIik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSZWFjdGl2ZUVycm9ycztcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkOSA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIGZvcm1Db250cm9sQmluZGluZyQxID0ge1xuICAgICAgICBwcm92aWRlOiBOZ0NvbnRyb2wsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gRm9ybUNvbnRyb2xEaXJlY3RpdmU7IH0pXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBcXEB3aGF0SXREb2VzIFN5bmNzIGEgc3RhbmRhbG9uZSB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgdG8gYSBmb3JtIGNvbnRyb2wgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEluIG90aGVyIHdvcmRzLCB0aGlzIGRpcmVjdGl2ZSBlbnN1cmVzIHRoYXQgYW55IHZhbHVlcyB3cml0dGVuIHRvIHRoZSB7XFxAbGluayBGb3JtQ29udHJvbH1cbiAgICAgKiBpbnN0YW5jZSBwcm9ncmFtbWF0aWNhbGx5IHdpbGwgYmUgd3JpdHRlbiB0byB0aGUgRE9NIGVsZW1lbnQgKG1vZGVsIC0+IHZpZXcpLiBDb252ZXJzZWx5LFxuICAgICAqIGFueSB2YWx1ZXMgd3JpdHRlbiB0byB0aGUgRE9NIGVsZW1lbnQgdGhyb3VnaCB1c2VyIGlucHV0IHdpbGwgYmUgcmVmbGVjdGVkIGluIHRoZVxuICAgICAqIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSAodmlldyAtPiBtb2RlbCkuXG4gICAgICpcbiAgICAgKiBcXEBob3dUb1VzZVxuICAgICAqXG4gICAgICogVXNlIHRoaXMgZGlyZWN0aXZlIGlmIHlvdSdkIGxpa2UgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgYSB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgZGlyZWN0bHkuXG4gICAgICogU2ltcGx5IGNyZWF0ZSBhIHtcXEBsaW5rIEZvcm1Db250cm9sfSwgc2F2ZSBpdCB0byB5b3VyIGNvbXBvbmVudCBjbGFzcywgYW5kIHBhc3MgaXQgaW50byB0aGVcbiAgICAgKiB7XFxAbGluayBGb3JtQ29udHJvbERpcmVjdGl2ZX0uXG4gICAgICpcbiAgICAgKiBUaGlzIGRpcmVjdGl2ZSBpcyBkZXNpZ25lZCB0byBiZSB1c2VkIGFzIGEgc3RhbmRhbG9uZSBjb250cm9sLiAgVW5saWtlIHtcXEBsaW5rIEZvcm1Db250cm9sTmFtZX0sXG4gICAgICogaXQgZG9lcyBub3QgcmVxdWlyZSB0aGF0IHlvdXIge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlIGJlIHBhcnQgb2YgYW55IHBhcmVudFxuICAgICAqIHtcXEBsaW5rIEZvcm1Hcm91cH0sIGFuZCBpdCB3b24ndCBiZSByZWdpc3RlcmVkIHRvIGFueSB7XFxAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9IHRoYXRcbiAgICAgKiBleGlzdHMgYWJvdmUgaXQuXG4gICAgICpcbiAgICAgKiAqKkdldCB0aGUgdmFsdWUqKjogdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgYWx3YXlzIHN5bmNlZCBhbmQgYXZhaWxhYmxlIG9uIHRoZVxuICAgICAqIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZS4gU2VlIGEgZnVsbCBsaXN0IG9mIGF2YWlsYWJsZSBwcm9wZXJ0aWVzIGluXG4gICAgICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sfS5cbiAgICAgKlxuICAgICAqICoqU2V0IHRoZSB2YWx1ZSoqOiBZb3UgY2FuIHBhc3MgaW4gYW4gaW5pdGlhbCB2YWx1ZSB3aGVuIGluc3RhbnRpYXRpbmcgdGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfSxcbiAgICAgKiBvciB5b3UgY2FuIHNldCBpdCBwcm9ncmFtbWF0aWNhbGx5IGxhdGVyIHVzaW5nIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5zZXRWYWx1ZX0gb3JcbiAgICAgKiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wucGF0Y2hWYWx1ZX0uXG4gICAgICpcbiAgICAgKiAqKkxpc3RlbiB0byB2YWx1ZSoqOiBJZiB5b3Ugd2FudCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wsIHlvdSBjYW5cbiAgICAgKiBzdWJzY3JpYmUgdG8gdGhlIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC52YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvIGxpc3RlbiB0b1xuICAgICAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5zdGF0dXNDaGFuZ2VzfSB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB2YWxpZGF0aW9uIHN0YXR1cyBpc1xuICAgICAqIHJlLWNhbGN1bGF0ZWQuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAqXG4gICAgICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlRm9ybUNvbnRyb2wvc2ltcGxlX2Zvcm1fY29udHJvbF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgKlxuICAgICAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAgICAgKlxuICAgICAqICogKipOZ01vZHVsZSoqOiBgUmVhY3RpdmVGb3Jtc01vZHVsZWBcbiAgICAgKlxuICAgICAqICBcXEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgRm9ybUNvbnRyb2xEaXJlY3RpdmUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkOShGb3JtQ29udHJvbERpcmVjdGl2ZSwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAgICAgKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yc1xuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlQWNjZXNzb3JzXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBGb3JtQ29udHJvbERpcmVjdGl2ZSh2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnMsIHZhbHVlQWNjZXNzb3JzKSB7XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgdGhpcy5fcmF3VmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMgfHwgW107XG4gICAgICAgICAgICB0aGlzLl9yYXdBc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnMgfHwgW107XG4gICAgICAgICAgICB0aGlzLnZhbHVlQWNjZXNzb3IgPSBzZWxlY3RWYWx1ZUFjY2Vzc29yKHRoaXMsIHZhbHVlQWNjZXNzb3JzKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUNvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcImlzRGlzYWJsZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHsgUmVhY3RpdmVFcnJvcnMuZGlzYWJsZWRBdHRyV2FybmluZygpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0NvbnRyb2xDaGFuZ2VkKGNoYW5nZXMpKSB7XG4gICAgICAgICAgICAgICAgc2V0VXBDb250cm9sKHRoaXMuZm9ybSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbC5kaXNhYmxlZCAmJiB0aGlzLnZhbHVlQWNjZXNzb3Iuc2V0RGlzYWJsZWRTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlQWNjZXNzb3Iuc2V0RGlzYWJsZWRTdGF0ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzUHJvcGVydHlVcGRhdGVkKGNoYW5nZXMsIHRoaXMudmlld01vZGVsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zZXRWYWx1ZSh0aGlzLm1vZGVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IHRoaXMubW9kZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwicGF0aFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUNvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcG9zZVZhbGlkYXRvcnModGhpcy5fcmF3VmFsaWRhdG9ycyk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUNvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcImFzeW5jVmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUNvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcImNvbnRyb2xcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZm9ybTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IG5ld1ZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUudmlld1RvTW9kZWxVcGRhdGUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmlld01vZGVsID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KG5ld1ZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLl9pc0NvbnRyb2xDaGFuZ2VkID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCdmb3JtJyk7XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1Db250cm9sRGlyZWN0aXZlLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbeyBzZWxlY3RvcjogJ1tmb3JtQ29udHJvbF0nLCBwcm92aWRlcnM6IFtmb3JtQ29udHJvbEJpbmRpbmckMV0sIGV4cG9ydEFzOiAnbmdGb3JtJyB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIEZvcm1Db250cm9sRGlyZWN0aXZlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMVUVfQUNDRVNTT1IsXSB9LF0gfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgRm9ybUNvbnRyb2xEaXJlY3RpdmUucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnZm9ybSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnZm9ybUNvbnRyb2wnLF0gfSxdLFxuICAgICAgICAgICAgJ21vZGVsJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWyduZ01vZGVsJyxdIH0sXSxcbiAgICAgICAgICAgICd1cGRhdGUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk91dHB1dCwgYXJnczogWyduZ01vZGVsQ2hhbmdlJyxdIH0sXSxcbiAgICAgICAgICAgICdpc0Rpc2FibGVkJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWydkaXNhYmxlZCcsXSB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBGb3JtQ29udHJvbERpcmVjdGl2ZTtcbiAgICB9KE5nQ29udHJvbCkpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkMTEgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBmb3JtRGlyZWN0aXZlUHJvdmlkZXIkMSA9IHtcbiAgICAgICAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBGb3JtR3JvdXBEaXJlY3RpdmU7IH0pXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBcXEB3aGF0SXREb2VzIEJpbmRzIGFuIGV4aXN0aW5nIHtcXEBsaW5rIEZvcm1Hcm91cH0gdG8gYSBET00gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFxcQGhvd1RvVXNlXG4gICAgICpcbiAgICAgKiBUaGlzIGRpcmVjdGl2ZSBhY2NlcHRzIGFuIGV4aXN0aW5nIHtcXEBsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UuIEl0IHdpbGwgdGhlbiB1c2UgdGhpc1xuICAgICAqIHtcXEBsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UgdG8gbWF0Y2ggYW55IGNoaWxkIHtcXEBsaW5rIEZvcm1Db250cm9sfSwge1xcQGxpbmsgRm9ybUdyb3VwfSxcbiAgICAgKiBhbmQge1xcQGxpbmsgRm9ybUFycmF5fSBpbnN0YW5jZXMgdG8gY2hpbGQge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfSwge1xcQGxpbmsgRm9ybUdyb3VwTmFtZX0sXG4gICAgICogYW5kIHtcXEBsaW5rIEZvcm1BcnJheU5hbWV9IGRpcmVjdGl2ZXMuXG4gICAgICpcbiAgICAgKiAqKlNldCB2YWx1ZSoqOiBZb3UgY2FuIHNldCB0aGUgZm9ybSdzIGluaXRpYWwgdmFsdWUgd2hlbiBpbnN0YW50aWF0aW5nIHRoZVxuICAgICAqIHtcXEBsaW5rIEZvcm1Hcm91cH0sIG9yIHlvdSBjYW4gc2V0IGl0IHByb2dyYW1tYXRpY2FsbHkgbGF0ZXIgdXNpbmcgdGhlIHtcXEBsaW5rIEZvcm1Hcm91cH0nc1xuICAgICAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5zZXRWYWx1ZX0gb3Ige1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnBhdGNoVmFsdWV9IG1ldGhvZHMuXG4gICAgICpcbiAgICAgKiAqKkxpc3RlbiB0byB2YWx1ZSoqOiBJZiB5b3Ugd2FudCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgdmFsdWUgb2YgdGhlIGZvcm0sIHlvdSBjYW4gc3Vic2NyaWJlXG4gICAgICogdG8gdGhlIHtcXEBsaW5rIEZvcm1Hcm91cH0ncyB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wudmFsdWVDaGFuZ2VzfSBldmVudC4gIFlvdSBjYW4gYWxzbyBsaXN0ZW4gdG9cbiAgICAgKiBpdHMge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnN0YXR1c0NoYW5nZXN9IGV2ZW50IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHZhbGlkYXRpb24gc3RhdHVzIGlzXG4gICAgICogcmUtY2FsY3VsYXRlZC5cbiAgICAgKlxuICAgICAqIEZ1cnRoZXJtb3JlLCB5b3UgY2FuIGxpc3RlbiB0byB0aGUgZGlyZWN0aXZlJ3MgYG5nU3VibWl0YCBldmVudCB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB1c2VyIGhhc1xuICAgICAqIHRyaWdnZXJlZCBhIGZvcm0gc3VibWlzc2lvbi4gVGhlIGBuZ1N1Ym1pdGAgZXZlbnQgd2lsbCBiZSBlbWl0dGVkIHdpdGggdGhlIG9yaWdpbmFsIGZvcm1cbiAgICAgKiBzdWJtaXNzaW9uIGV2ZW50LlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqIEluIHRoaXMgZXhhbXBsZSwgd2UgY3JlYXRlIGZvcm0gY29udHJvbHMgZm9yIGZpcnN0IG5hbWUgYW5kIGxhc3QgbmFtZS5cbiAgICAgKlxuICAgICAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL3NpbXBsZUZvcm1Hcm91cC9zaW1wbGVfZm9ybV9ncm91cF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgKlxuICAgICAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gICAgICpcbiAgICAgKiAqKk5nTW9kdWxlKio6IHtcXEBsaW5rIFJlYWN0aXZlRm9ybXNNb2R1bGV9XG4gICAgICpcbiAgICAgKiAgXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIEZvcm1Hcm91cERpcmVjdGl2ZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQxMShGb3JtR3JvdXBEaXJlY3RpdmUsIF9zdXBlcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IF92YWxpZGF0b3JzXG4gICAgICAgICAqIEBwYXJhbSB7P30gX2FzeW5jVmFsaWRhdG9yc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gRm9ybUdyb3VwRGlyZWN0aXZlKF92YWxpZGF0b3JzLCBfYXN5bmNWYWxpZGF0b3JzKSB7XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRvcnMgPSBfdmFsaWRhdG9ycztcbiAgICAgICAgICAgIHRoaXMuX2FzeW5jVmFsaWRhdG9ycyA9IF9hc3luY1ZhbGlkYXRvcnM7XG4gICAgICAgICAgICB0aGlzLl9zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5mb3JtID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMubmdTdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGVja0Zvcm1QcmVzZW50KCk7XG4gICAgICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZm9ybScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVmFsaWRhdG9ycygpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbVZhbHVlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlUmVnaXN0cmF0aW9ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJzdWJtaXR0ZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N1Ym1pdHRlZDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcImZvcm1EaXJlY3RpdmVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmZvcm07IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5hZGRDb250cm9sID0gZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY3RybCA9IHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpO1xuICAgICAgICAgICAgc2V0VXBDb250cm9sKGN0cmwsIGRpcik7XG4gICAgICAgICAgICBjdHJsLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmVzLnB1c2goZGlyKTtcbiAgICAgICAgICAgIHJldHVybiBjdHJsO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuZ2V0Q29udHJvbCA9IGZ1bmN0aW9uIChkaXIpIHsgcmV0dXJuICh0aGlzLmZvcm0uZ2V0KGRpci5wYXRoKSk7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5yZW1vdmVDb250cm9sID0gZnVuY3Rpb24gKGRpcikgeyBMaXN0V3JhcHBlci5yZW1vdmUodGhpcy5kaXJlY3RpdmVzLCBkaXIpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuYWRkRm9ybUdyb3VwID0gZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY3RybCA9IHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpO1xuICAgICAgICAgICAgc2V0VXBGb3JtQ29udGFpbmVyKGN0cmwsIGRpcik7XG4gICAgICAgICAgICBjdHJsLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUucmVtb3ZlRm9ybUdyb3VwID0gZnVuY3Rpb24gKGRpcikgeyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuZ2V0Rm9ybUdyb3VwID0gZnVuY3Rpb24gKGRpcikgeyByZXR1cm4gKHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLmFkZEZvcm1BcnJheSA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGN0cmwgPSB0aGlzLmZvcm0uZ2V0KGRpci5wYXRoKTtcbiAgICAgICAgICAgIHNldFVwRm9ybUNvbnRhaW5lcihjdHJsLCBkaXIpO1xuICAgICAgICAgICAgY3RybC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLnJlbW92ZUZvcm1BcnJheSA9IGZ1bmN0aW9uIChkaXIpIHsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLmdldEZvcm1BcnJheSA9IGZ1bmN0aW9uIChkaXIpIHsgcmV0dXJuICh0aGlzLmZvcm0uZ2V0KGRpci5wYXRoKSk7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLnVwZGF0ZU1vZGVsID0gZnVuY3Rpb24gKGRpciwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGN0cmwgPSAodGhpcy5mb3JtLmdldChkaXIucGF0aCkpO1xuICAgICAgICAgICAgY3RybC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99ICRldmVudFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5nU3VibWl0LmVtaXQoJGV2ZW50KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLm9uUmVzZXQgPSBmdW5jdGlvbiAoKSB7IHRoaXMucmVzZXRGb3JtKCk7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez89fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5yZXNldEZvcm0gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7IHZhbHVlID0gdW5kZWZpbmVkOyB9XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5fc3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5fdXBkYXRlRG9tVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmVzLmZvckVhY2goZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG5ld0N0cmwgPSBfdGhpcy5mb3JtLmdldChkaXIucGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKGRpci5fY29udHJvbCAhPT0gbmV3Q3RybCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhblVwQ29udHJvbChkaXIuX2NvbnRyb2wsIGRpcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdDdHJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXBDb250cm9sKG5ld0N0cmwsIGRpcik7XG4gICAgICAgICAgICAgICAgICAgIGRpci5fY29udHJvbCA9IG5ld0N0cmw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmZvcm0uX3VwZGF0ZVRyZWVWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5fdXBkYXRlUmVnaXN0cmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmZvcm0uX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl91cGRhdGVEb21WYWx1ZSgpOyB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vbGRGb3JtKVxuICAgICAgICAgICAgICAgIHRoaXMuX29sZEZvcm0uX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgICAgICB0aGlzLl9vbGRGb3JtID0gdGhpcy5mb3JtO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuX3VwZGF0ZVZhbGlkYXRvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBzeW5jID0gY29tcG9zZVZhbGlkYXRvcnModGhpcy5fdmFsaWRhdG9ycyk7XG4gICAgICAgICAgICB0aGlzLmZvcm0udmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlKFt0aGlzLmZvcm0udmFsaWRhdG9yLCBzeW5jXSk7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBhc3luYyA9IGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModGhpcy5fYXN5bmNWYWxpZGF0b3JzKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hc3luY1ZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZUFzeW5jKFt0aGlzLmZvcm0uYXN5bmNWYWxpZGF0b3IsIGFzeW5jXSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5fY2hlY2tGb3JtUHJlc2VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICAgICAgUmVhY3RpdmVFcnJvcnMubWlzc2luZ0Zvcm1FeGNlcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdbZm9ybUdyb3VwXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtmb3JtRGlyZWN0aXZlUHJvdmlkZXIkMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICcoc3VibWl0KSc6ICdvblN1Ym1pdCgkZXZlbnQpJywgJyhyZXNldCknOiAnb25SZXNldCgpJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0QXM6ICduZ0Zvcm0nXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnZm9ybSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnZm9ybUdyb3VwJyxdIH0sXSxcbiAgICAgICAgICAgICduZ1N1Ym1pdCc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3V0cHV0IH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEZvcm1Hcm91cERpcmVjdGl2ZTtcbiAgICB9KENvbnRyb2xDb250YWluZXIpKTtcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDEyID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZm9ybUdyb3VwTmFtZVByb3ZpZGVyID0ge1xuICAgICAgICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIEZvcm1Hcm91cE5hbWU7IH0pXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBcXEB3aGF0SXREb2VzIFN5bmNzIGEgbmVzdGVkIHtcXEBsaW5rIEZvcm1Hcm91cH0gdG8gYSBET00gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFxcQGhvd1RvVXNlXG4gICAgICpcbiAgICAgKiBUaGlzIGRpcmVjdGl2ZSBjYW4gb25seSBiZSB1c2VkIHdpdGggYSBwYXJlbnQge1xcQGxpbmsgRm9ybUdyb3VwRGlyZWN0aXZlfSAoc2VsZWN0b3I6XG4gICAgICogYFtmb3JtR3JvdXBdYCkuXG4gICAgICpcbiAgICAgKiBJdCBhY2NlcHRzIHRoZSBzdHJpbmcgbmFtZSBvZiB0aGUgbmVzdGVkIHtcXEBsaW5rIEZvcm1Hcm91cH0geW91IHdhbnQgdG8gbGluaywgYW5kXG4gICAgICogd2lsbCBsb29rIGZvciBhIHtcXEBsaW5rIEZvcm1Hcm91cH0gcmVnaXN0ZXJlZCB3aXRoIHRoYXQgbmFtZSBpbiB0aGUgcGFyZW50XG4gICAgICoge1xcQGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZSB5b3UgcGFzc2VkIGludG8ge1xcQGxpbmsgRm9ybUdyb3VwRGlyZWN0aXZlfS5cbiAgICAgKlxuICAgICAqIE5lc3RlZCBmb3JtIGdyb3VwcyBjYW4gY29tZSBpbiBoYW5keSB3aGVuIHlvdSB3YW50IHRvIHZhbGlkYXRlIGEgc3ViLWdyb3VwIG9mIGFcbiAgICAgKiBmb3JtIHNlcGFyYXRlbHkgZnJvbSB0aGUgcmVzdCBvciB3aGVuIHlvdSdkIGxpa2UgdG8gZ3JvdXAgdGhlIHZhbHVlcyBvZiBjZXJ0YWluXG4gICAgICogY29udHJvbHMgaW50byB0aGVpciBvd24gbmVzdGVkIG9iamVjdC5cbiAgICAgKlxuICAgICAqICoqQWNjZXNzIHRoZSBncm91cCoqOiBZb3UgY2FuIGFjY2VzcyB0aGUgYXNzb2NpYXRlZCB7XFxAbGluayBGb3JtR3JvdXB9IHVzaW5nIHRoZVxuICAgICAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5nZXR9IG1ldGhvZC4gRXg6IGB0aGlzLmZvcm0uZ2V0KCduYW1lJylgLlxuICAgICAqXG4gICAgICogWW91IGNhbiBhbHNvIGFjY2VzcyBpbmRpdmlkdWFsIGNvbnRyb2xzIHdpdGhpbiB0aGUgZ3JvdXAgdXNpbmcgZG90IHN5bnRheC5cbiAgICAgKiBFeDogYHRoaXMuZm9ybS5nZXQoJ25hbWUuZmlyc3QnKWBcbiAgICAgKlxuICAgICAqICoqR2V0IHRoZSB2YWx1ZSoqOiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyBhbHdheXMgc3luY2VkIGFuZCBhdmFpbGFibGUgb24gdGhlXG4gICAgICoge1xcQGxpbmsgRm9ybUdyb3VwfS4gU2VlIGEgZnVsbCBsaXN0IG9mIGF2YWlsYWJsZSBwcm9wZXJ0aWVzIGluIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0uXG4gICAgICpcbiAgICAgKiAqKlNldCB0aGUgdmFsdWUqKjogWW91IGNhbiBzZXQgYW4gaW5pdGlhbCB2YWx1ZSBmb3IgZWFjaCBjaGlsZCBjb250cm9sIHdoZW4gaW5zdGFudGlhdGluZ1xuICAgICAqIHRoZSB7XFxAbGluayBGb3JtR3JvdXB9LCBvciB5b3UgY2FuIHNldCBpdCBwcm9ncmFtbWF0aWNhbGx5IGxhdGVyIHVzaW5nXG4gICAgICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnNldFZhbHVlfSBvciB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wucGF0Y2hWYWx1ZX0uXG4gICAgICpcbiAgICAgKiAqKkxpc3RlbiB0byB2YWx1ZSoqOiBJZiB5b3Ugd2FudCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgdmFsdWUgb2YgdGhlIGdyb3VwLCB5b3UgY2FuXG4gICAgICogc3Vic2NyaWJlIHRvIHRoZSB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wudmFsdWVDaGFuZ2VzfSBldmVudC4gIFlvdSBjYW4gYWxzbyBsaXN0ZW4gdG9cbiAgICAgKiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuc3RhdHVzQ2hhbmdlc30gdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdmFsaWRhdGlvbiBzdGF0dXMgaXNcbiAgICAgKiByZS1jYWxjdWxhdGVkLlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL25lc3RlZEZvcm1Hcm91cC9uZXN0ZWRfZm9ybV9ncm91cF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgKlxuICAgICAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAgICAgKlxuICAgICAqICogKipOZ01vZHVsZSoqOiBgUmVhY3RpdmVGb3Jtc01vZHVsZWBcbiAgICAgKlxuICAgICAqIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBGb3JtR3JvdXBOYW1lID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDEyKEZvcm1Hcm91cE5hbWUsIF9zdXBlcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHBhcmVudFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgICAgICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvcnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEZvcm1Hcm91cE5hbWUocGFyZW50LCB2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnMpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgdGhpcy5fdmFsaWRhdG9ycyA9IHZhbGlkYXRvcnM7XG4gICAgICAgICAgICB0aGlzLl9hc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBOYW1lLnByb3RvdHlwZS5fY2hlY2tQYXJlbnRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF9oYXNJbnZhbGlkUGFyZW50KHRoaXMuX3BhcmVudCkpIHtcbiAgICAgICAgICAgICAgICBSZWFjdGl2ZUVycm9ycy5ncm91cFBhcmVudEV4Y2VwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtR3JvdXBOYW1lLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbeyBzZWxlY3RvcjogJ1tmb3JtR3JvdXBOYW1lXScsIHByb3ZpZGVyczogW2Zvcm1Hcm91cE5hbWVQcm92aWRlcl0gfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBGb3JtR3JvdXBOYW1lLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBDb250cm9sQ29udGFpbmVyLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5Ib3N0IH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5Ta2lwU2VsZiB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgRm9ybUdyb3VwTmFtZS5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICduYW1lJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWydmb3JtR3JvdXBOYW1lJyxdIH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEZvcm1Hcm91cE5hbWU7XG4gICAgfShBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSkpO1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIGZvcm1BcnJheU5hbWVQcm92aWRlciA9IHtcbiAgICAgICAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBGb3JtQXJyYXlOYW1lOyB9KVxuICAgIH07XG4gICAgLyoqXG4gICAgICogXFxAd2hhdEl0RG9lcyBTeW5jcyBhIG5lc3RlZCB7XFxAbGluayBGb3JtQXJyYXl9IHRvIGEgRE9NIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBcXEBob3dUb1VzZVxuICAgICAqXG4gICAgICogVGhpcyBkaXJlY3RpdmUgaXMgZGVzaWduZWQgdG8gYmUgdXNlZCB3aXRoIGEgcGFyZW50IHtcXEBsaW5rIEZvcm1Hcm91cERpcmVjdGl2ZX0gKHNlbGVjdG9yOlxuICAgICAqIGBbZm9ybUdyb3VwXWApLlxuICAgICAqXG4gICAgICogSXQgYWNjZXB0cyB0aGUgc3RyaW5nIG5hbWUgb2YgdGhlIG5lc3RlZCB7XFxAbGluayBGb3JtQXJyYXl9IHlvdSB3YW50IHRvIGxpbmssIGFuZFxuICAgICAqIHdpbGwgbG9vayBmb3IgYSB7XFxAbGluayBGb3JtQXJyYXl9IHJlZ2lzdGVyZWQgd2l0aCB0aGF0IG5hbWUgaW4gdGhlIHBhcmVudFxuICAgICAqIHtcXEBsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UgeW91IHBhc3NlZCBpbnRvIHtcXEBsaW5rIEZvcm1Hcm91cERpcmVjdGl2ZX0uXG4gICAgICpcbiAgICAgKiBOZXN0ZWQgZm9ybSBhcnJheXMgY2FuIGNvbWUgaW4gaGFuZHkgd2hlbiB5b3UgaGF2ZSBhIGdyb3VwIG9mIGZvcm0gY29udHJvbHMgYnV0XG4gICAgICogeW91J3JlIG5vdCBzdXJlIGhvdyBtYW55IHRoZXJlIHdpbGwgYmUuIEZvcm0gYXJyYXlzIGFsbG93IHlvdSB0byBjcmVhdGUgbmV3XG4gICAgICogZm9ybSBjb250cm9scyBkeW5hbWljYWxseS5cbiAgICAgKlxuICAgICAqICoqQWNjZXNzIHRoZSBhcnJheSoqOiBZb3UgY2FuIGFjY2VzcyB0aGUgYXNzb2NpYXRlZCB7XFxAbGluayBGb3JtQXJyYXl9IHVzaW5nIHRoZVxuICAgICAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5nZXR9IG1ldGhvZCBvbiB0aGUgcGFyZW50IHtcXEBsaW5rIEZvcm1Hcm91cH0uXG4gICAgICogRXg6IGB0aGlzLmZvcm0uZ2V0KCdjaXRpZXMnKWAuXG4gICAgICpcbiAgICAgKiAqKkdldCB0aGUgdmFsdWUqKjogdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgYWx3YXlzIHN5bmNlZCBhbmQgYXZhaWxhYmxlIG9uIHRoZVxuICAgICAqIHtcXEBsaW5rIEZvcm1BcnJheX0uIFNlZSBhIGZ1bGwgbGlzdCBvZiBhdmFpbGFibGUgcHJvcGVydGllcyBpbiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2x9LlxuICAgICAqXG4gICAgICogKipTZXQgdGhlIHZhbHVlKio6IFlvdSBjYW4gc2V0IGFuIGluaXRpYWwgdmFsdWUgZm9yIGVhY2ggY2hpbGQgY29udHJvbCB3aGVuIGluc3RhbnRpYXRpbmdcbiAgICAgKiB0aGUge1xcQGxpbmsgRm9ybUFycmF5fSwgb3IgeW91IGNhbiBzZXQgdGhlIHZhbHVlIHByb2dyYW1tYXRpY2FsbHkgbGF0ZXIgdXNpbmcgdGhlXG4gICAgICoge1xcQGxpbmsgRm9ybUFycmF5fSdzIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5zZXRWYWx1ZX0gb3Ige1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnBhdGNoVmFsdWV9XG4gICAgICogbWV0aG9kcy5cbiAgICAgKlxuICAgICAqICoqTGlzdGVuIHRvIHZhbHVlKio6IElmIHlvdSB3YW50IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSB2YWx1ZSBvZiB0aGUgYXJyYXksIHlvdSBjYW5cbiAgICAgKiBzdWJzY3JpYmUgdG8gdGhlIHtcXEBsaW5rIEZvcm1BcnJheX0ncyB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wudmFsdWVDaGFuZ2VzfSBldmVudC4gIFlvdSBjYW4gYWxzb1xuICAgICAqIGxpc3RlbiB0byBpdHMge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnN0YXR1c0NoYW5nZXN9IGV2ZW50IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHZhbGlkYXRpb25cbiAgICAgKiBzdGF0dXMgaXMgcmUtY2FsY3VsYXRlZC5cbiAgICAgKlxuICAgICAqICoqQWRkIG5ldyBjb250cm9scyoqOiBZb3UgY2FuIGFkZCBuZXcgY29udHJvbHMgdG8gdGhlIHtcXEBsaW5rIEZvcm1BcnJheX0gZHluYW1pY2FsbHkgYnlcbiAgICAgKiBjYWxsaW5nIGl0cyB7XFxAbGluayBGb3JtQXJyYXkucHVzaH0gbWV0aG9kLlxuICAgICAqICBFeDogYHRoaXMuZm9ybS5nZXQoJ2NpdGllcycpLnB1c2gobmV3IEZvcm1Db250cm9sKCkpO2BcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlXG4gICAgICpcbiAgICAgKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9uZXN0ZWRGb3JtQXJyYXkvbmVzdGVkX2Zvcm1fYXJyYXlfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAgICpcbiAgICAgKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gICAgICpcbiAgICAgKiAqICoqTmdNb2R1bGUqKjogYFJlYWN0aXZlRm9ybXNNb2R1bGVgXG4gICAgICpcbiAgICAgKiBcXEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgRm9ybUFycmF5TmFtZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQxMihGb3JtQXJyYXlOYW1lLCBfc3VwZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBwYXJlbnRcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICAgICAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBGb3JtQXJyYXlOYW1lKHBhcmVudCwgdmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzKSB7XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzO1xuICAgICAgICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5TmFtZS5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGVja1BhcmVudFR5cGUoKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5hZGRGb3JtQXJyYXkodGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5TmFtZS5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlbW92ZUZvcm1BcnJheSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1BcnJheU5hbWUucHJvdG90eXBlLCBcImNvbnRyb2xcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZm9ybURpcmVjdGl2ZS5nZXRGb3JtQXJyYXkodGhpcyk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUFycmF5TmFtZS5wcm90b3R5cGUsIFwiZm9ybURpcmVjdGl2ZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQgPyAodGhpcy5fcGFyZW50LmZvcm1EaXJlY3RpdmUpIDogbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUFycmF5TmFtZS5wcm90b3R5cGUsIFwicGF0aFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udHJvbFBhdGgodGhpcy5uYW1lLCB0aGlzLl9wYXJlbnQpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1BcnJheU5hbWUucHJvdG90eXBlLCBcInZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcG9zZVZhbGlkYXRvcnModGhpcy5fdmFsaWRhdG9ycyk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUFycmF5TmFtZS5wcm90b3R5cGUsIFwiYXN5bmNWYWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModGhpcy5fYXN5bmNWYWxpZGF0b3JzKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5TmFtZS5wcm90b3R5cGUuX2NoZWNrUGFyZW50VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfaGFzSW52YWxpZFBhcmVudCh0aGlzLl9wYXJlbnQpKSB7XG4gICAgICAgICAgICAgICAgUmVhY3RpdmVFcnJvcnMuYXJyYXlQYXJlbnRFeGNlcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybUFycmF5TmFtZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdbZm9ybUFycmF5TmFtZV0nLCBwcm92aWRlcnM6IFtmb3JtQXJyYXlOYW1lUHJvdmlkZXJdIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgRm9ybUFycmF5TmFtZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogQ29udHJvbENvbnRhaW5lciwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSG9zdCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2tpcFNlbGYgfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIEZvcm1BcnJheU5hbWUucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnbmFtZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnZm9ybUFycmF5TmFtZScsXSB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBGb3JtQXJyYXlOYW1lO1xuICAgIH0oQ29udHJvbENvbnRhaW5lcikpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gcGFyZW50XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaGFzSW52YWxpZFBhcmVudChwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuICEocGFyZW50IGluc3RhbmNlb2YgRm9ybUdyb3VwTmFtZSkgJiYgIShwYXJlbnQgaW5zdGFuY2VvZiBGb3JtR3JvdXBEaXJlY3RpdmUpICYmXG4gICAgICAgICAgICAhKHBhcmVudCBpbnN0YW5jZW9mIEZvcm1BcnJheU5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDEwID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udHJvbE5hbWVCaW5kaW5nID0ge1xuICAgICAgICBwcm92aWRlOiBOZ0NvbnRyb2wsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gRm9ybUNvbnRyb2xOYW1lOyB9KVxuICAgIH07XG4gICAgLyoqXG4gICAgICogXFxAd2hhdEl0RG9lcyBTeW5jcyBhIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbiBhbiBleGlzdGluZyB7XFxAbGluayBGb3JtR3JvdXB9IHRvIGEgZm9ybSBjb250cm9sXG4gICAgICogZWxlbWVudCBieSBuYW1lLlxuICAgICAqXG4gICAgICogSW4gb3RoZXIgd29yZHMsIHRoaXMgZGlyZWN0aXZlIGVuc3VyZXMgdGhhdCBhbnkgdmFsdWVzIHdyaXR0ZW4gdG8gdGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfVxuICAgICAqIGluc3RhbmNlIHByb2dyYW1tYXRpY2FsbHkgd2lsbCBiZSB3cml0dGVuIHRvIHRoZSBET00gZWxlbWVudCAobW9kZWwgLT4gdmlldykuIENvbnZlcnNlbHksXG4gICAgICogYW55IHZhbHVlcyB3cml0dGVuIHRvIHRoZSBET00gZWxlbWVudCB0aHJvdWdoIHVzZXIgaW5wdXQgd2lsbCBiZSByZWZsZWN0ZWQgaW4gdGhlXG4gICAgICoge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlICh2aWV3IC0+IG1vZGVsKS5cbiAgICAgKlxuICAgICAqIFxcQGhvd1RvVXNlXG4gICAgICpcbiAgICAgKiBUaGlzIGRpcmVjdGl2ZSBpcyBkZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggYSBwYXJlbnQge1xcQGxpbmsgRm9ybUdyb3VwRGlyZWN0aXZlfSAoc2VsZWN0b3I6XG4gICAgICogYFtmb3JtR3JvdXBdYCkuXG4gICAgICpcbiAgICAgKiBJdCBhY2NlcHRzIHRoZSBzdHJpbmcgbmFtZSBvZiB0aGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlIHlvdSB3YW50IHRvXG4gICAgICogbGluaywgYW5kIHdpbGwgbG9vayBmb3IgYSB7XFxAbGluayBGb3JtQ29udHJvbH0gcmVnaXN0ZXJlZCB3aXRoIHRoYXQgbmFtZSBpbiB0aGVcbiAgICAgKiBjbG9zZXN0IHtcXEBsaW5rIEZvcm1Hcm91cH0gb3Ige1xcQGxpbmsgRm9ybUFycmF5fSBhYm92ZSBpdC5cbiAgICAgKlxuICAgICAqICoqQWNjZXNzIHRoZSBjb250cm9sKio6IFlvdSBjYW4gYWNjZXNzIHRoZSB7XFxAbGluayBGb3JtQ29udHJvbH0gYXNzb2NpYXRlZCB3aXRoXG4gICAgICogdGhpcyBkaXJlY3RpdmUgYnkgdXNpbmcgdGhlIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5nZXR9IG1ldGhvZC5cbiAgICAgKiBFeDogYHRoaXMuZm9ybS5nZXQoJ2ZpcnN0Jyk7YFxuICAgICAqXG4gICAgICogKipHZXQgdmFsdWUqKjogdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgYWx3YXlzIHN5bmNlZCBhbmQgYXZhaWxhYmxlIG9uIHRoZSB7XFxAbGluayBGb3JtQ29udHJvbH0uXG4gICAgICogU2VlIGEgZnVsbCBsaXN0IG9mIGF2YWlsYWJsZSBwcm9wZXJ0aWVzIGluIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0uXG4gICAgICpcbiAgICAgKiAgKipTZXQgdmFsdWUqKjogWW91IGNhbiBzZXQgYW4gaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIGNvbnRyb2wgd2hlbiBpbnN0YW50aWF0aW5nIHRoZVxuICAgICAqICB7XFxAbGluayBGb3JtQ29udHJvbH0sIG9yIHlvdSBjYW4gc2V0IGl0IHByb2dyYW1tYXRpY2FsbHkgbGF0ZXIgdXNpbmdcbiAgICAgKiAge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnNldFZhbHVlfSBvciB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wucGF0Y2hWYWx1ZX0uXG4gICAgICpcbiAgICAgKiAqKkxpc3RlbiB0byB2YWx1ZSoqOiBJZiB5b3Ugd2FudCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wsIHlvdSBjYW5cbiAgICAgKiBzdWJzY3JpYmUgdG8gdGhlIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC52YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvIGxpc3RlbiB0b1xuICAgICAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5zdGF0dXNDaGFuZ2VzfSB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB2YWxpZGF0aW9uIHN0YXR1cyBpc1xuICAgICAqIHJlLWNhbGN1bGF0ZWQuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAqXG4gICAgICogSW4gdGhpcyBleGFtcGxlLCB3ZSBjcmVhdGUgZm9ybSBjb250cm9scyBmb3IgZmlyc3QgbmFtZSBhbmQgbGFzdCBuYW1lLlxuICAgICAqXG4gICAgICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlRm9ybUdyb3VwL3NpbXBsZV9mb3JtX2dyb3VwX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAqXG4gICAgICogVG8gc2VlIGBmb3JtQ29udHJvbE5hbWVgIGV4YW1wbGVzIHdpdGggZGlmZmVyZW50IGZvcm0gY29udHJvbCB0eXBlcywgc2VlOlxuICAgICAqXG4gICAgICogKiBSYWRpbyBidXR0b25zOiB7XFxAbGluayBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yfVxuICAgICAqICogU2VsZWN0czoge1xcQGxpbmsgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3J9XG4gICAgICpcbiAgICAgKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICAgICAqXG4gICAgICogKipOZ01vZHVsZSoqOiB7XFxAbGluayBSZWFjdGl2ZUZvcm1zTW9kdWxlfVxuICAgICAqXG4gICAgICogIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBGb3JtQ29udHJvbE5hbWUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkMTAoRm9ybUNvbnRyb2xOYW1lLCBfc3VwZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBwYXJlbnRcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICAgICAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVBY2Nlc3NvcnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEZvcm1Db250cm9sTmFtZShwYXJlbnQsIHZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9ycywgdmFsdWVBY2Nlc3NvcnMpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fYWRkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgdGhpcy5fcmF3VmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMgfHwgW107XG4gICAgICAgICAgICB0aGlzLl9yYXdBc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnMgfHwgW107XG4gICAgICAgICAgICB0aGlzLnZhbHVlQWNjZXNzb3IgPSBzZWxlY3RWYWx1ZUFjY2Vzc29yKHRoaXMsIHZhbHVlQWNjZXNzb3JzKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZSwgXCJpc0Rpc2FibGVkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7IFJlYWN0aXZlRXJyb3JzLmRpc2FibGVkQXR0cldhcm5pbmcoKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNoYW5nZXNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9hZGRlZClcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRVcENvbnRyb2woKTtcbiAgICAgICAgICAgIGlmIChpc1Byb3BlcnR5VXBkYXRlZChjaGFuZ2VzLCB0aGlzLnZpZXdNb2RlbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IHRoaXMubW9kZWw7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnVwZGF0ZU1vZGVsKHRoaXMsIHRoaXMubW9kZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlbW92ZUNvbnRyb2wodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IG5ld1ZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLnZpZXdUb01vZGVsVXBkYXRlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUuZW1pdChuZXdWYWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLCBcInBhdGhcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnRyb2xQYXRoKHRoaXMubmFtZSwgdGhpcy5fcGFyZW50KTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLCBcImZvcm1EaXJlY3RpdmVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3BhcmVudCA/IHRoaXMuX3BhcmVudC5mb3JtRGlyZWN0aXZlIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLCBcInZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcG9zZVZhbGlkYXRvcnModGhpcy5fcmF3VmFsaWRhdG9ycyk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZSwgXCJhc3luY1ZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUsIFwiY29udHJvbFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY29udHJvbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZS5fY2hlY2tQYXJlbnRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgRm9ybUdyb3VwTmFtZSkgJiZcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgIFJlYWN0aXZlRXJyb3JzLm5nTW9kZWxHcm91cEV4Y2VwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBGb3JtR3JvdXBOYW1lKSAmJiAhKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIEZvcm1Hcm91cERpcmVjdGl2ZSkgJiZcbiAgICAgICAgICAgICAgICAhKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIEZvcm1BcnJheU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgUmVhY3RpdmVFcnJvcnMuY29udHJvbFBhcmVudEV4Y2VwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUuX3NldFVwQ29udHJvbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrUGFyZW50VHlwZSgpO1xuICAgICAgICAgICAgdGhpcy5fY29udHJvbCA9IHRoaXMuZm9ybURpcmVjdGl2ZS5hZGRDb250cm9sKHRoaXMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbC5kaXNhYmxlZCAmJiB0aGlzLnZhbHVlQWNjZXNzb3Iuc2V0RGlzYWJsZWRTdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVBY2Nlc3Nvci5zZXREaXNhYmxlZFN0YXRlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYWRkZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBGb3JtQ29udHJvbE5hbWUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnW2Zvcm1Db250cm9sTmFtZV0nLCBwcm92aWRlcnM6IFtjb250cm9sTmFtZUJpbmRpbmddIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgRm9ybUNvbnRyb2xOYW1lLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBDb250cm9sQ29udGFpbmVyLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5Ib3N0IH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5Ta2lwU2VsZiB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX1ZBTFVFX0FDQ0VTU09SLF0gfSxdIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIEZvcm1Db250cm9sTmFtZS5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICduYW1lJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWydmb3JtQ29udHJvbE5hbWUnLF0gfSxdLFxuICAgICAgICAgICAgJ21vZGVsJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWyduZ01vZGVsJyxdIH0sXSxcbiAgICAgICAgICAgICd1cGRhdGUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk91dHB1dCwgYXJnczogWyduZ01vZGVsQ2hhbmdlJyxdIH0sXSxcbiAgICAgICAgICAgICdpc0Rpc2FibGVkJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWydkaXNhYmxlZCcsXSB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBGb3JtQ29udHJvbE5hbWU7XG4gICAgfShOZ0NvbnRyb2wpKTtcblxuICAgIHZhciBfX2V4dGVuZHMkMTMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBSRVFVSVJFRF9WQUxJREFUT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gUmVxdWlyZWRWYWxpZGF0b3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gQ0hFQ0tCT1hfUkVRVUlSRURfVkFMSURBVE9SID0ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQSBEaXJlY3RpdmUgdGhhdCBhZGRzIHRoZSBgcmVxdWlyZWRgIHZhbGlkYXRvciB0byBhbnkgY29udHJvbHMgbWFya2VkIHdpdGggdGhlXG4gICAgICogYHJlcXVpcmVkYCBhdHRyaWJ1dGUsIHZpYSB0aGUge1xcQGxpbmsgTkdfVkFMSURBVE9SU30gYmluZGluZy5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiA8aW5wdXQgbmFtZT1cImZ1bGxOYW1lXCIgbmdNb2RlbCByZXF1aXJlZD5cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBSZXF1aXJlZFZhbGlkYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFJlcXVpcmVkVmFsaWRhdG9yKCkge1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXF1aXJlZFZhbGlkYXRvci5wcm90b3R5cGUsIFwicmVxdWlyZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3JlcXVpcmVkOyB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlcXVpcmVkID0gdmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gZmFsc2UgJiYgXCJcIiArIHZhbHVlICE9PSAnZmFsc2UnO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vbkNoYW5nZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSZXF1aXJlZFZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWlyZWQgPyBWYWxpZGF0b3JzLnJlcXVpcmVkKGMpIDogbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJlcXVpcmVkVmFsaWRhdG9yLnByb3RvdHlwZS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMuX29uQ2hhbmdlID0gZm47IH07XG4gICAgICAgIFJlcXVpcmVkVmFsaWRhdG9yLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICc6bm90KFt0eXBlPWNoZWNrYm94XSlbcmVxdWlyZWRdW2Zvcm1Db250cm9sTmFtZV0sOm5vdChbdHlwZT1jaGVja2JveF0pW3JlcXVpcmVkXVtmb3JtQ29udHJvbF0sOm5vdChbdHlwZT1jaGVja2JveF0pW3JlcXVpcmVkXVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtSRVFVSVJFRF9WQUxJREFUT1JdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnW2F0dHIucmVxdWlyZWRdJzogJ3JlcXVpcmVkID8gXCJcIiA6IG51bGwnIH1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBSZXF1aXJlZFZhbGlkYXRvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgICAgICBSZXF1aXJlZFZhbGlkYXRvci5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICdyZXF1aXJlZCc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQgfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUmVxdWlyZWRWYWxpZGF0b3I7XG4gICAgfSgpKTtcbiAgICAvKipcbiAgICAgKiBBIERpcmVjdGl2ZSB0aGF0IGFkZHMgdGhlIGByZXF1aXJlZGAgdmFsaWRhdG9yIHRvIGNoZWNrYm94IGNvbnRyb2xzIG1hcmtlZCB3aXRoIHRoZVxuICAgICAqIGByZXF1aXJlZGAgYXR0cmlidXRlLCB2aWEgdGhlIHtcXEBsaW5rIE5HX1ZBTElEQVRPUlN9IGJpbmRpbmcuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhY3RpdmVcIiBuZ01vZGVsIHJlcXVpcmVkPlxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogXFxAZXhwZXJpbWVudGFsXG4gICAgICovXG4gICAgdmFyIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkMTMoQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvciwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvcigpIHtcbiAgICAgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVpcmVkID8gVmFsaWRhdG9ycy5yZXF1aXJlZFRydWUoYykgOiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFt0eXBlPWNoZWNrYm94XVtyZXF1aXJlZF1bZm9ybUNvbnRyb2xOYW1lXSxpbnB1dFt0eXBlPWNoZWNrYm94XVtyZXF1aXJlZF1bZm9ybUNvbnRyb2xdLGlucHV0W3R5cGU9Y2hlY2tib3hdW3JlcXVpcmVkXVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtDSEVDS0JPWF9SRVFVSVJFRF9WQUxJREFUT1JdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnW2F0dHIucmVxdWlyZWRdJzogJ3JlcXVpcmVkID8gXCJcIiA6IG51bGwnIH1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgICAgIHJldHVybiBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yO1xuICAgIH0oUmVxdWlyZWRWYWxpZGF0b3IpKTtcbiAgICAvKipcbiAgICAgKiBQcm92aWRlciB3aGljaCBhZGRzIHtAbGluayBNaW5MZW5ndGhWYWxpZGF0b3J9IHRvIHtAbGluayBOR19WQUxJREFUT1JTfS5cbiAgICAgKlxuICAgICAqICMjIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiB7QGV4YW1wbGUgY29tbW9uL2Zvcm1zL3RzL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy50cyByZWdpb249J21pbid9XG4gICAgICovXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gTUlOX0xFTkdUSF9WQUxJREFUT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gTWluTGVuZ3RoVmFsaWRhdG9yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEEgZGlyZWN0aXZlIHdoaWNoIGluc3RhbGxzIHRoZSB7XFxAbGluayBNaW5MZW5ndGhWYWxpZGF0b3J9IGZvciBhbnkgYGZvcm1Db250cm9sTmFtZWAsXG4gICAgICogYGZvcm1Db250cm9sYCwgb3IgY29udHJvbCB3aXRoIGBuZ01vZGVsYCB0aGF0IGFsc28gaGFzIGEgYG1pbmxlbmd0aGAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIE1pbkxlbmd0aFZhbGlkYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIE1pbkxlbmd0aFZhbGlkYXRvcigpIHtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBNaW5MZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGlmICgnbWlubGVuZ3RoJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29uQ2hhbmdlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBNaW5MZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1pbmxlbmd0aCA9PSBudWxsID8gbnVsbCA6IHRoaXMuX3ZhbGlkYXRvcihjKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE1pbkxlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLl9vbkNoYW5nZSA9IGZuOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE1pbkxlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUuX2NyZWF0ZVZhbGlkYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRvciA9IFZhbGlkYXRvcnMubWluTGVuZ3RoKHBhcnNlSW50KHRoaXMubWlubGVuZ3RoLCAxMCkpO1xuICAgICAgICB9O1xuICAgICAgICBNaW5MZW5ndGhWYWxpZGF0b3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ1ttaW5sZW5ndGhdW2Zvcm1Db250cm9sTmFtZV0sW21pbmxlbmd0aF1bZm9ybUNvbnRyb2xdLFttaW5sZW5ndGhdW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW01JTl9MRU5HVEhfVkFMSURBVE9SXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJ1thdHRyLm1pbmxlbmd0aF0nOiAnbWlubGVuZ3RoID8gbWlubGVuZ3RoIDogbnVsbCcgfVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE1pbkxlbmd0aFZhbGlkYXRvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgICAgICBNaW5MZW5ndGhWYWxpZGF0b3IucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnbWlubGVuZ3RoJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBNaW5MZW5ndGhWYWxpZGF0b3I7XG4gICAgfSgpKTtcbiAgICAvKipcbiAgICAgKiBQcm92aWRlciB3aGljaCBhZGRzIHtAbGluayBNYXhMZW5ndGhWYWxpZGF0b3J9IHRvIHtAbGluayBOR19WQUxJREFUT1JTfS5cbiAgICAgKlxuICAgICAqICMjIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiB7QGV4YW1wbGUgY29tbW9uL2Zvcm1zL3RzL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy50cyByZWdpb249J21heCd9XG4gICAgICovXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gTUFYX0xFTkdUSF9WQUxJREFUT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gTWF4TGVuZ3RoVmFsaWRhdG9yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEEgZGlyZWN0aXZlIHdoaWNoIGluc3RhbGxzIHRoZSB7XFxAbGluayBNYXhMZW5ndGhWYWxpZGF0b3J9IGZvciBhbnkgYGZvcm1Db250cm9sTmFtZSxcbiAgICAgKiBgZm9ybUNvbnRyb2xgLFxuICAgICAqIG9yIGNvbnRyb2wgd2l0aCBgbmdNb2RlbGAgdGhhdCBhbHNvIGhhcyBhIGBtYXhsZW5ndGhgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBNYXhMZW5ndGhWYWxpZGF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBNYXhMZW5ndGhWYWxpZGF0b3IoKSB7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTWF4TGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICBpZiAoJ21heGxlbmd0aCcgaW4gY2hhbmdlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vbkNoYW5nZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTWF4TGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXhsZW5ndGggIT0gbnVsbCA/IHRoaXMuX3ZhbGlkYXRvcihjKSA6IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBNYXhMZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBNYXhMZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLl9jcmVhdGVWYWxpZGF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0b3IgPSBWYWxpZGF0b3JzLm1heExlbmd0aChwYXJzZUludCh0aGlzLm1heGxlbmd0aCwgMTApKTtcbiAgICAgICAgfTtcbiAgICAgICAgTWF4TGVuZ3RoVmFsaWRhdG9yLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdbbWF4bGVuZ3RoXVtmb3JtQ29udHJvbE5hbWVdLFttYXhsZW5ndGhdW2Zvcm1Db250cm9sXSxbbWF4bGVuZ3RoXVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtNQVhfTEVOR1RIX1ZBTElEQVRPUl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICdbYXR0ci5tYXhsZW5ndGhdJzogJ21heGxlbmd0aCA/IG1heGxlbmd0aCA6IG51bGwnIH1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBNYXhMZW5ndGhWYWxpZGF0b3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICAgICAgTWF4TGVuZ3RoVmFsaWRhdG9yLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ21heGxlbmd0aCc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQgfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gTWF4TGVuZ3RoVmFsaWRhdG9yO1xuICAgIH0oKSk7XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gUEFUVEVSTl9WQUxJREFUT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gUGF0dGVyblZhbGlkYXRvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIERpcmVjdGl2ZSB0aGF0IGFkZHMgdGhlIGBwYXR0ZXJuYCB2YWxpZGF0b3IgdG8gYW55IGNvbnRyb2xzIG1hcmtlZCB3aXRoIHRoZVxuICAgICAqIGBwYXR0ZXJuYCBhdHRyaWJ1dGUsIHZpYSB0aGUge1xcQGxpbmsgTkdfVkFMSURBVE9SU30gYmluZGluZy4gVXNlcyBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgKiBhcyB0aGUgcmVnZXggdG8gdmFsaWRhdGUgQ29udHJvbCB2YWx1ZSBhZ2FpbnN0LiAgRm9sbG93cyBwYXR0ZXJuIGF0dHJpYnV0ZVxuICAgICAqIHNlbWFudGljczsgaS5lLiByZWdleCBtdXN0IG1hdGNoIGVudGlyZSBDb250cm9sIHZhbHVlLlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIDxpbnB1dCBbbmFtZV09XCJmdWxsTmFtZVwiIHBhdHRlcm49XCJbYS16QS1aIF0qXCIgbmdNb2RlbD5cbiAgICAgKiBgYGBcbiAgICAgKiBcXEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgUGF0dGVyblZhbGlkYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFBhdHRlcm5WYWxpZGF0b3IoKSB7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUGF0dGVyblZhbGlkYXRvci5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICAgICAgaWYgKCdwYXR0ZXJuJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29uQ2hhbmdlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBQYXR0ZXJuVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uIChjKSB7IHJldHVybiB0aGlzLl92YWxpZGF0b3IoYyk7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBQYXR0ZXJuVmFsaWRhdG9yLnByb3RvdHlwZS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMuX29uQ2hhbmdlID0gZm47IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUGF0dGVyblZhbGlkYXRvci5wcm90b3R5cGUuX2NyZWF0ZVZhbGlkYXRvciA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fdmFsaWRhdG9yID0gVmFsaWRhdG9ycy5wYXR0ZXJuKHRoaXMucGF0dGVybik7IH07XG4gICAgICAgIFBhdHRlcm5WYWxpZGF0b3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ1twYXR0ZXJuXVtmb3JtQ29udHJvbE5hbWVdLFtwYXR0ZXJuXVtmb3JtQ29udHJvbF0sW3BhdHRlcm5dW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW1BBVFRFUk5fVkFMSURBVE9SXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJ1thdHRyLnBhdHRlcm5dJzogJ3BhdHRlcm4gPyBwYXR0ZXJuIDogbnVsbCcgfVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIFBhdHRlcm5WYWxpZGF0b3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICAgICAgUGF0dGVyblZhbGlkYXRvci5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICdwYXR0ZXJuJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBQYXR0ZXJuVmFsaWRhdG9yO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBcXEB3aGF0SXREb2VzIENyZWF0ZXMgYW4ge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sfSBmcm9tIGEgdXNlci1zcGVjaWZpZWQgY29uZmlndXJhdGlvbi5cbiAgICAgKlxuICAgICAqIEl0IGlzIGVzc2VudGlhbGx5IHN5bnRhY3RpYyBzdWdhciB0aGF0IHNob3J0ZW5zIHRoZSBgbmV3IEZvcm1Hcm91cCgpYCxcbiAgICAgKiBgbmV3IEZvcm1Db250cm9sKClgLCBhbmQgYG5ldyBGb3JtQXJyYXkoKWAgYm9pbGVycGxhdGUgdGhhdCBjYW4gYnVpbGQgdXAgaW4gbGFyZ2VyXG4gICAgICogZm9ybXMuXG4gICAgICpcbiAgICAgKiBcXEBob3dUb1VzZVxuICAgICAqXG4gICAgICogVG8gdXNlLCBpbmplY3QgYEZvcm1CdWlsZGVyYCBpbnRvIHlvdXIgY29tcG9uZW50IGNsYXNzLiBZb3UgY2FuIHRoZW4gY2FsbCBpdHMgbWV0aG9kc1xuICAgICAqIGRpcmVjdGx5LlxuICAgICAqXG4gICAgICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvZm9ybUJ1aWxkZXIvZm9ybV9idWlsZGVyX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAqXG4gICAgICogICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAgICAgKlxuICAgICAqICAqICoqTmdNb2R1bGUqKjoge1xcQGxpbmsgUmVhY3RpdmVGb3Jtc01vZHVsZX1cbiAgICAgKlxuICAgICAqIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBGb3JtQnVpbGRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIEZvcm1CdWlsZGVyKCkge1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3QgYSBuZXcge1xcQGxpbmsgRm9ybUdyb3VwfSB3aXRoIHRoZSBnaXZlbiBtYXAgb2YgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogVmFsaWQga2V5cyBmb3IgdGhlIGBleHRyYWAgcGFyYW1ldGVyIG1hcCBhcmUgYHZhbGlkYXRvcmAgYW5kIGBhc3luY1ZhbGlkYXRvcmAuXG4gICAgICAgICAqXG4gICAgICAgICAqIFNlZSB0aGUge1xcQGxpbmsgRm9ybUdyb3VwfSBjb25zdHJ1Y3RvciBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xzQ29uZmlnXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IGV4dHJhXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQnVpbGRlci5wcm90b3R5cGUuZ3JvdXAgPSBmdW5jdGlvbiAoY29udHJvbHNDb25maWcsIGV4dHJhKSB7XG4gICAgICAgICAgICBpZiAoZXh0cmEgPT09IHZvaWQgMCkgeyBleHRyYSA9IG51bGw7IH1cbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNvbnRyb2xzID0gdGhpcy5fcmVkdWNlQ29udHJvbHMoY29udHJvbHNDb25maWcpO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdmFsaWRhdG9yID0gaXNQcmVzZW50KGV4dHJhKSA/IGV4dHJhWyd2YWxpZGF0b3InXSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBhc3luY1ZhbGlkYXRvciA9IGlzUHJlc2VudChleHRyYSkgPyBleHRyYVsnYXN5bmNWYWxpZGF0b3InXSA6IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZvcm1Hcm91cChjb250cm9scywgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3QgYSBuZXcge1xcQGxpbmsgRm9ybUNvbnRyb2x9IHdpdGggdGhlIGdpdmVuIGBmb3JtU3RhdGVgLGB2YWxpZGF0b3JgLCBhbmRcbiAgICAgICAgICogYGFzeW5jVmFsaWRhdG9yYC5cbiAgICAgICAgICpcbiAgICAgICAgICogYGZvcm1TdGF0ZWAgY2FuIGVpdGhlciBiZSBhIHN0YW5kYWxvbmUgdmFsdWUgZm9yIHRoZSBmb3JtIGNvbnRyb2wgb3IgYW4gb2JqZWN0XG4gICAgICAgICAqIHRoYXQgY29udGFpbnMgYm90aCBhIHZhbHVlIGFuZCBhIGRpc2FibGVkIHN0YXR1cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHs/fSBmb3JtU3RhdGVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gdmFsaWRhdG9yXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IGFzeW5jVmFsaWRhdG9yXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQnVpbGRlci5wcm90b3R5cGUuY29udHJvbCA9IGZ1bmN0aW9uIChmb3JtU3RhdGUsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IgPT09IHZvaWQgMCkgeyB2YWxpZGF0b3IgPSBudWxsOyB9XG4gICAgICAgICAgICBpZiAoYXN5bmNWYWxpZGF0b3IgPT09IHZvaWQgMCkgeyBhc3luY1ZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgRm9ybUNvbnRyb2woZm9ybVN0YXRlLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdCBhIHtcXEBsaW5rIEZvcm1BcnJheX0gZnJvbSB0aGUgZ2l2ZW4gYGNvbnRyb2xzQ29uZmlnYCBhcnJheSBvZlxuICAgICAgICAgKiBjb25maWd1cmF0aW9uLCB3aXRoIHRoZSBnaXZlbiBvcHRpb25hbCBgdmFsaWRhdG9yYCBhbmQgYGFzeW5jVmFsaWRhdG9yYC5cbiAgICAgICAgICogQHBhcmFtIHs/fSBjb250cm9sc0NvbmZpZ1xuICAgICAgICAgKiBAcGFyYW0gez89fSB2YWxpZGF0b3JcbiAgICAgICAgICogQHBhcmFtIHs/PX0gYXN5bmNWYWxpZGF0b3JcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1CdWlsZGVyLnByb3RvdHlwZS5hcnJheSA9IGZ1bmN0aW9uIChjb250cm9sc0NvbmZpZywgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IgPT09IHZvaWQgMCkgeyB2YWxpZGF0b3IgPSBudWxsOyB9XG4gICAgICAgICAgICBpZiAoYXN5bmNWYWxpZGF0b3IgPT09IHZvaWQgMCkgeyBhc3luY1ZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNvbnRyb2xzID0gY29udHJvbHNDb25maWcubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBfdGhpcy5fY3JlYXRlQ29udHJvbChjKTsgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZvcm1BcnJheShjb250cm9scywgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xzQ29uZmlnXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQnVpbGRlci5wcm90b3R5cGUuX3JlZHVjZUNvbnRyb2xzID0gZnVuY3Rpb24gKGNvbnRyb2xzQ29uZmlnKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udHJvbHMgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbnRyb2xzQ29uZmlnKS5mb3JFYWNoKGZ1bmN0aW9uIChjb250cm9sTmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xzW2NvbnRyb2xOYW1lXSA9IF90aGlzLl9jcmVhdGVDb250cm9sKGNvbnRyb2xzQ29uZmlnW2NvbnRyb2xOYW1lXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9scztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbENvbmZpZ1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUJ1aWxkZXIucHJvdG90eXBlLl9jcmVhdGVDb250cm9sID0gZnVuY3Rpb24gKGNvbnRyb2xDb25maWcpIHtcbiAgICAgICAgICAgIGlmIChjb250cm9sQ29uZmlnIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wgfHwgY29udHJvbENvbmZpZyBpbnN0YW5jZW9mIEZvcm1Hcm91cCB8fFxuICAgICAgICAgICAgICAgIGNvbnRyb2xDb25maWcgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udHJvbENvbmZpZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY29udHJvbENvbmZpZykpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWx1ZSA9IGNvbnRyb2xDb25maWdbMF07XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdmFsaWRhdG9yID0gY29udHJvbENvbmZpZy5sZW5ndGggPiAxID8gY29udHJvbENvbmZpZ1sxXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gYXN5bmNWYWxpZGF0b3IgPSBjb250cm9sQ29uZmlnLmxlbmd0aCA+IDIgPyBjb250cm9sQ29uZmlnWzJdIDogbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sKHZhbHVlLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1CdWlsZGVyLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0YWJsZSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgRm9ybUJ1aWxkZXIuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICAgICAgcmV0dXJuIEZvcm1CdWlsZGVyO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gVkVSU0lPTiA9IG5ldyBfYW5ndWxhcl9jb3JlLlZlcnNpb24oJzIuNC44Jyk7XG5cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBTSEFSRURfRk9STV9ESVJFQ1RJVkVTID0gW1xuICAgICAgICBOZ1NlbGVjdE9wdGlvbixcbiAgICAgICAgTmdTZWxlY3RNdWx0aXBsZU9wdGlvbixcbiAgICAgICAgRGVmYXVsdFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIE51bWJlclZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFJhbmdlVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIE5nQ29udHJvbFN0YXR1cyxcbiAgICAgICAgTmdDb250cm9sU3RhdHVzR3JvdXAsXG4gICAgICAgIFJlcXVpcmVkVmFsaWRhdG9yLFxuICAgICAgICBNaW5MZW5ndGhWYWxpZGF0b3IsXG4gICAgICAgIE1heExlbmd0aFZhbGlkYXRvcixcbiAgICAgICAgUGF0dGVyblZhbGlkYXRvcixcbiAgICAgICAgQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvcixcbiAgICBdO1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIFRFTVBMQVRFX0RSSVZFTl9ESVJFQ1RJVkVTID0gW05nTW9kZWwsIE5nTW9kZWxHcm91cCwgTmdGb3JtXTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBSRUFDVElWRV9EUklWRU5fRElSRUNUSVZFUyA9IFtGb3JtQ29udHJvbERpcmVjdGl2ZSwgRm9ybUdyb3VwRGlyZWN0aXZlLCBGb3JtQ29udHJvbE5hbWUsIEZvcm1Hcm91cE5hbWUsIEZvcm1BcnJheU5hbWVdO1xuICAgIC8qKlxuICAgICAqIEludGVybmFsIG1vZHVsZSB1c2VkIGZvciBzaGFyaW5nIGRpcmVjdGl2ZXMgYmV0d2VlbiBGb3Jtc01vZHVsZSBhbmQgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICAgICAqL1xuICAgIHZhciBJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZSgpIHtcbiAgICAgICAgfVxuICAgICAgICBJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuTmdNb2R1bGUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFNIQVJFRF9GT1JNX0RJUkVDVElWRVMsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBTSEFSRURfRk9STV9ESVJFQ1RJVkVTLFxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIEludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICAgICAgcmV0dXJuIEludGVybmFsRm9ybXNTaGFyZWRNb2R1bGU7XG4gICAgfSgpKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBuZyBtb2R1bGUgZm9yIGZvcm1zLlxuICAgICAqIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBGb3Jtc01vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIEZvcm1zTW9kdWxlKCkge1xuICAgICAgICB9XG4gICAgICAgIEZvcm1zTW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuTmdNb2R1bGUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFRFTVBMQVRFX0RSSVZFTl9ESVJFQ1RJVkVTLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbUmFkaW9Db250cm9sUmVnaXN0cnldLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogW0ludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUsIFRFTVBMQVRFX0RSSVZFTl9ESVJFQ1RJVkVTXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIEZvcm1zTW9kdWxlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgICAgIHJldHVybiBGb3Jtc01vZHVsZTtcbiAgICB9KCkpO1xuICAgIC8qKlxuICAgICAqIFRoZSBuZyBtb2R1bGUgZm9yIHJlYWN0aXZlIGZvcm1zLlxuICAgICAqIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBSZWFjdGl2ZUZvcm1zTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gUmVhY3RpdmVGb3Jtc01vZHVsZSgpIHtcbiAgICAgICAgfVxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuTmdNb2R1bGUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtSRUFDVElWRV9EUklWRU5fRElSRUNUSVZFU10sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtGb3JtQnVpbGRlciwgUmFkaW9Db250cm9sUmVnaXN0cnldLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogW0ludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUsIFJFQUNUSVZFX0RSSVZFTl9ESVJFQ1RJVkVTXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICAgICAgcmV0dXJuIFJlYWN0aXZlRm9ybXNNb2R1bGU7XG4gICAgfSgpKTtcblxuICAgIGV4cG9ydHMuQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlID0gQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlO1xuICAgIGV4cG9ydHMuQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUgPSBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZTtcbiAgICBleHBvcnRzLkNoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IgPSBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yO1xuICAgIGV4cG9ydHMuQ29udHJvbENvbnRhaW5lciA9IENvbnRyb2xDb250YWluZXI7XG4gICAgZXhwb3J0cy5OR19WQUxVRV9BQ0NFU1NPUiA9IE5HX1ZBTFVFX0FDQ0VTU09SO1xuICAgIGV4cG9ydHMuRGVmYXVsdFZhbHVlQWNjZXNzb3IgPSBEZWZhdWx0VmFsdWVBY2Nlc3NvcjtcbiAgICBleHBvcnRzLk5nQ29udHJvbCA9IE5nQ29udHJvbDtcbiAgICBleHBvcnRzLk5nQ29udHJvbFN0YXR1cyA9IE5nQ29udHJvbFN0YXR1cztcbiAgICBleHBvcnRzLk5nQ29udHJvbFN0YXR1c0dyb3VwID0gTmdDb250cm9sU3RhdHVzR3JvdXA7XG4gICAgZXhwb3J0cy5OZ0Zvcm0gPSBOZ0Zvcm07XG4gICAgZXhwb3J0cy5OZ01vZGVsID0gTmdNb2RlbDtcbiAgICBleHBvcnRzLk5nTW9kZWxHcm91cCA9IE5nTW9kZWxHcm91cDtcbiAgICBleHBvcnRzLlJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IgPSBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yO1xuICAgIGV4cG9ydHMuRm9ybUNvbnRyb2xEaXJlY3RpdmUgPSBGb3JtQ29udHJvbERpcmVjdGl2ZTtcbiAgICBleHBvcnRzLkZvcm1Db250cm9sTmFtZSA9IEZvcm1Db250cm9sTmFtZTtcbiAgICBleHBvcnRzLkZvcm1Hcm91cERpcmVjdGl2ZSA9IEZvcm1Hcm91cERpcmVjdGl2ZTtcbiAgICBleHBvcnRzLkZvcm1BcnJheU5hbWUgPSBGb3JtQXJyYXlOYW1lO1xuICAgIGV4cG9ydHMuRm9ybUdyb3VwTmFtZSA9IEZvcm1Hcm91cE5hbWU7XG4gICAgZXhwb3J0cy5OZ1NlbGVjdE9wdGlvbiA9IE5nU2VsZWN0T3B0aW9uO1xuICAgIGV4cG9ydHMuU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IgPSBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgICBleHBvcnRzLlNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IgPSBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yO1xuICAgIGV4cG9ydHMuQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvciA9IENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3I7XG4gICAgZXhwb3J0cy5NYXhMZW5ndGhWYWxpZGF0b3IgPSBNYXhMZW5ndGhWYWxpZGF0b3I7XG4gICAgZXhwb3J0cy5NaW5MZW5ndGhWYWxpZGF0b3IgPSBNaW5MZW5ndGhWYWxpZGF0b3I7XG4gICAgZXhwb3J0cy5QYXR0ZXJuVmFsaWRhdG9yID0gUGF0dGVyblZhbGlkYXRvcjtcbiAgICBleHBvcnRzLlJlcXVpcmVkVmFsaWRhdG9yID0gUmVxdWlyZWRWYWxpZGF0b3I7XG4gICAgZXhwb3J0cy5Gb3JtQnVpbGRlciA9IEZvcm1CdWlsZGVyO1xuICAgIGV4cG9ydHMuQWJzdHJhY3RDb250cm9sID0gQWJzdHJhY3RDb250cm9sO1xuICAgIGV4cG9ydHMuRm9ybUFycmF5ID0gRm9ybUFycmF5O1xuICAgIGV4cG9ydHMuRm9ybUNvbnRyb2wgPSBGb3JtQ29udHJvbDtcbiAgICBleHBvcnRzLkZvcm1Hcm91cCA9IEZvcm1Hcm91cDtcbiAgICBleHBvcnRzLk5HX0FTWU5DX1ZBTElEQVRPUlMgPSBOR19BU1lOQ19WQUxJREFUT1JTO1xuICAgIGV4cG9ydHMuTkdfVkFMSURBVE9SUyA9IE5HX1ZBTElEQVRPUlM7XG4gICAgZXhwb3J0cy5WYWxpZGF0b3JzID0gVmFsaWRhdG9ycztcbiAgICBleHBvcnRzLlZFUlNJT04gPSBWRVJTSU9OO1xuICAgIGV4cG9ydHMuRm9ybXNNb2R1bGUgPSBGb3Jtc01vZHVsZTtcbiAgICBleHBvcnRzLlJlYWN0aXZlRm9ybXNNb2R1bGUgPSBSZWFjdGl2ZUZvcm1zTW9kdWxlO1xuXG59KSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L0Bhbmd1bGFyL2Zvcm1zL2J1bmRsZXMvZm9ybXMudW1kLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBwbGF0Zm9ybV9icm93c2VyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJyk7XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIGNvbXBpbGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb21waWxlcicpO1xudmFyIEJST1dTRVJfU0FOSVRJWkFUSU9OX1BST1ZJREVSUyA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkJST1dTRVJfU0FOSVRJWkFUSU9OX1BST1ZJREVSUywgU2hhcmVkU3R5bGVzSG9zdCA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLlNoYXJlZFN0eWxlc0hvc3QsIERvbVNoYXJlZFN0eWxlc0hvc3QgPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5Eb21TaGFyZWRTdHlsZXNIb3N0LCBEb21Sb290UmVuZGVyZXIgPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5Eb21Sb290UmVuZGVyZXIsIERvbUV2ZW50c1BsdWdpbiA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkRvbUV2ZW50c1BsdWdpbiwgS2V5RXZlbnRzUGx1Z2luID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uS2V5RXZlbnRzUGx1Z2luLCBEb21BZGFwdGVyID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uRG9tQWRhcHRlciwgc2V0Um9vdERvbUFkYXB0ZXIgPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5zZXRSb290RG9tQWRhcHRlciwgZ2V0RE9NID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uZ2V0RE9NLCBIYW1tZXJHZXN0dXJlc1BsdWdpbiA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkhhbW1lckdlc3R1cmVzUGx1Z2luO1xuZXhwb3J0cy5CUk9XU0VSX1NBTklUSVpBVElPTl9QUk9WSURFUlMgPSBCUk9XU0VSX1NBTklUSVpBVElPTl9QUk9WSURFUlM7XG5leHBvcnRzLlNoYXJlZFN0eWxlc0hvc3QgPSBTaGFyZWRTdHlsZXNIb3N0O1xuZXhwb3J0cy5Eb21TaGFyZWRTdHlsZXNIb3N0ID0gRG9tU2hhcmVkU3R5bGVzSG9zdDtcbmV4cG9ydHMuRG9tUm9vdFJlbmRlcmVyID0gRG9tUm9vdFJlbmRlcmVyO1xuZXhwb3J0cy5Eb21FdmVudHNQbHVnaW4gPSBEb21FdmVudHNQbHVnaW47XG5leHBvcnRzLktleUV2ZW50c1BsdWdpbiA9IEtleUV2ZW50c1BsdWdpbjtcbmV4cG9ydHMuRG9tQWRhcHRlciA9IERvbUFkYXB0ZXI7XG5leHBvcnRzLnNldFJvb3REb21BZGFwdGVyID0gc2V0Um9vdERvbUFkYXB0ZXI7XG5leHBvcnRzLkhhbW1lckdlc3R1cmVzUGx1Z2luID0gSGFtbWVyR2VzdHVyZXNQbHVnaW47XG52YXIgVmlld1V0aWxzID0gY29yZV8xLl9fY29yZV9wcml2YXRlX18uVmlld1V0aWxzLCBBbmltYXRpb25LZXlmcmFtZSA9IGNvcmVfMS5fX2NvcmVfcHJpdmF0ZV9fLkFuaW1hdGlvbktleWZyYW1lLCBBbmltYXRpb25QbGF5ZXIgPSBjb3JlXzEuX19jb3JlX3ByaXZhdGVfXy5BbmltYXRpb25QbGF5ZXIsIEFuaW1hdGlvblN0eWxlcyA9IGNvcmVfMS5fX2NvcmVfcHJpdmF0ZV9fLkFuaW1hdGlvblN0eWxlcywgUmVuZGVyRGVidWdJbmZvID0gY29yZV8xLl9fY29yZV9wcml2YXRlX18uUmVuZGVyRGVidWdJbmZvO1xuZXhwb3J0cy5WaWV3VXRpbHMgPSBWaWV3VXRpbHM7XG5leHBvcnRzLkFuaW1hdGlvbktleWZyYW1lID0gQW5pbWF0aW9uS2V5ZnJhbWU7XG5leHBvcnRzLkFuaW1hdGlvblBsYXllciA9IEFuaW1hdGlvblBsYXllcjtcbmV4cG9ydHMuQW5pbWF0aW9uU3R5bGVzID0gQW5pbWF0aW9uU3R5bGVzO1xuZXhwb3J0cy5SZW5kZXJEZWJ1Z0luZm8gPSBSZW5kZXJEZWJ1Z0luZm87XG52YXIgU2VsZWN0b3JNYXRjaGVyID0gY29tcGlsZXJfMS5fX2NvbXBpbGVyX3ByaXZhdGVfXy5TZWxlY3Rvck1hdGNoZXIsIENzc1NlbGVjdG9yID0gY29tcGlsZXJfMS5fX2NvbXBpbGVyX3ByaXZhdGVfXy5Dc3NTZWxlY3RvcjtcbmV4cG9ydHMuU2VsZWN0b3JNYXRjaGVyID0gU2VsZWN0b3JNYXRjaGVyO1xuZXhwb3J0cy5Dc3NTZWxlY3RvciA9IENzc1NlbGVjdG9yO1xudmFyIF9fZW1wdHkgPSBudWxsO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gX19lbXB0eTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX18uanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRW51bUtleXNQaXBlIH0gZnJvbSAnLi4vcGlwZXMvZW51bS5rZXlzLnBpcGUnO1xyXG5pbXBvcnQgeyBTYWZlUGlwZSB9IGZyb20gJy4uL3BpcGVzL3NhZmUuaHRtbC5waXBlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbRW51bUtleXNQaXBlLCBTYWZlUGlwZV0sXHJcbiAgZXhwb3J0czogW0VudW1LZXlzUGlwZSwgU2FmZVBpcGVdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbW9uTW9kdWxlIHtcclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tbW9uL2NvbW1vbi5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb3VudGVyJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NvdW50ZXIuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ291bnRlckNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgY3VycmVudENvdW50ID0gMDtcclxuXHJcbiAgICBwdWJsaWMgaW5jcmVtZW50Q291bnRlcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRDb3VudCsrO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmZXRjaGRhdGEnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmV0Y2hkYXRhLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIEZldGNoRGF0YUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaG9tZS5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzU3NTAwNTkvc2VsZWN0LWJhc2VkLW9uLWVudW0taW4tYW5ndWxhcjJcclxuQFBpcGUoe25hbWU6ICdrZXlzJ30pXHJcbmV4cG9ydCBjbGFzcyBFbnVtS2V5c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0odmFsdWUsIGFyZ3M6c3RyaW5nW10pIDogYW55IHtcclxuICAgIGxldCBrZXlzID0gW107XHJcbiAgICBmb3IgKHZhciBlbnVtTWVtYmVyIGluIHZhbHVlKSB7XHJcbiAgICAgIHZhciBpc1ZhbHVlUHJvcGVydHkgPSBwYXJzZUludChlbnVtTWVtYmVyLCAxMCkgPj0gMFxyXG4gICAgICBpZiAoaXNWYWx1ZVByb3BlcnR5KSB7XHJcbiAgICAgICAga2V5cy5wdXNoKHtrZXk6IGVudW1NZW1iZXIsIHZhbHVlOiB2YWx1ZVtlbnVtTWVtYmVyXX0pOyAgICAgICBcclxuICAgICAgfSBcclxuICAgIH1cclxuICAgIHJldHVybiBrZXlzO1xyXG4gIH1cclxuICBcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9waXBlcy9lbnVtLmtleXMucGlwZS50cyIsImltcG9ydCB7UGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlSHRtbCwgU2FmZVN0eWxlLCBTYWZlU2NyaXB0LCBTYWZlVXJsLCBTYWZlUmVzb3VyY2VVcmx9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuLy9odHRwczovL2ZvcnVtLmlvbmljZnJhbWV3b3JrLmNvbS90L2luc2VydGluZy1odG1sLXZpYS1hbmd1bGFyLTItdXNlLW9mLWRvbXNhbml0aXphdGlvbnNlcnZpY2UtYnlwYXNzc2VjdXJpdHl0cnVzdGh0bWwvNjI1NjIvMlxyXG5AUGlwZSh7XHJcblx0bmFtZTogJ3NhZmUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYWZlUGlwZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IFNhZmVIdG1sIHwgU2FmZVN0eWxlIHwgU2FmZVNjcmlwdCB8IFNhZmVVcmwgfCBTYWZlUmVzb3VyY2VVcmwge1xyXG5cdFx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRcdGNhc2UgJ2h0bWwnOlxyXG5cdFx0XHRcdHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodmFsdWUpO1xyXG5cdFx0XHRjYXNlICdzdHlsZSc6XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsdWUpO1xyXG5cdFx0XHRjYXNlICdzY3JpcHQnOlxyXG5cdFx0XHRcdHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFNjcmlwdCh2YWx1ZSk7XHJcblx0XHRcdGNhc2UgJ3VybCc6XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKHZhbHVlKTtcclxuXHRcdFx0Y2FzZSAncmVzb3VyY2VVcmwnOlxyXG5cdFx0XHRcdHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHZhbHVlKTtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBieXBhc3Mgc2VjdXJpdHkgZm9yIGludmFsaWQgdHlwZTogJHt0eXBlfWApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvcGlwZXMvc2FmZS5odG1sLnBpcGUudHMiLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlLCBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtWaWRlb1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuL3ZpZGVvLnZhbGlkYXRpb24uc2VydmljZSc7XHJcbi8vaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge0lWaWRlb30gZnJvbSAnLi92aWRlby1kZXRhaWxzLmludGVyZmFjZXMnO1xyXG5pbXBvcnQge1ZpZGVvT3JpZ2luRW51bX0gZnJvbSAnLi92aWRlby1kZXRhaWxzLmVudW1zJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHsgb0VtYmVkIH0gZnJvbSAnLi4vdmlkZW8tb2VtYmVkL3ZpZGVvLW9lbWJlZC5pbnRlcmZhY2VzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFZpZGVvU2VydmljZSBpbXBsZW1lbnRzIElWaWRlb1NlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSB2aWRlb0FwaVVybCA6IHN0cmluZyA9ICcvYXBpL3ZpZGVvcyc7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkgXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0VmlkZW9zKCkgOiBPYnNlcnZhYmxlPElWaWRlbz5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnZpZGVvQXBpVXJsKVxyXG4gICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpICA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRWaWRlbyhpZDogc3RyaW5nKSA6IE9ic2VydmFibGU8SVZpZGVvPiBcclxuICAgIHtcclxuICAgICAgICBpZiAoaWQgPT0gbnVsbCB8fCBpZCA9PSBcIjBcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudmlkZW9BcGlVcmwgKyBcIi9FbXB0eVwiKVxyXG4gICAgICAgICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kbyhyZXMgPT4gY29uc29sZS5sb2coJ1JldHJpZXZlZCB2aWRlbzogJyArIEpTT04uc3RyaW5naWZ5KHJlcykpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy52aWRlb0FwaVVybCArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5kbyhyZXMgPT4gY29uc29sZS5sb2coJ1JldHJpZXZlZCB2aWRlbzogJyArIEpTT04uc3RyaW5naWZ5KHJlcykpKTtcclxuICAgICAgICAgICAgLy8gLmNhdGNoKHRoaXMuaGFuZGxlR2V0VmlkZW9FcnJvcik7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIGNyZWF0ZVZpZGVvKGRhdGE6IElWaWRlbykgOiBPYnNlcnZhYmxlPElWaWRlbz4ge1xyXG4gICAgICAgIC8vIGlmICghVmlkZW9WYWxpZGF0aW9uU2VydmljZS52YWxpZGF0ZVZpZGVvKGRhdGEpKVxyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIganNvbmVkID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlcnZpY2UsIGNyZWF0ZSB2aWRlby5WaWRlbyBqc29uOiAnICsganNvbmVkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3ZpZGVvcy9wb3N0dmlkZW8nLCBqc29uZWQsXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWaWRlbyhkYXRhOiBJVmlkZW8pIDogT2JzZXJ2YWJsZTxJVmlkZW8+IHtcclxuICAgICAgICAvLyBpZiAoIVZpZGVvVmFsaWRhdGlvblNlcnZpY2UudmFsaWRhdGVWaWRlbyhkYXRhKSlcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGpzb25lZCA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXJ2aWNlLCBjcmVhdGUgdmlkZW8uVmlkZW8ganNvbjogJyArIGpzb25lZCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KCcvYXBpL3ZpZGVvcy9lZGl0dmlkZW8nLCBqc29uZWQsXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vdmFyIHNvdXJjZSA9IFJ4Lk9ic2VydmFibGUuZnJvbShhcnJheSkuZmxhdE1hcCh4ID0+IFJ4Lk9ic2VydmFibGUuZnJvbSh4KS5maWx0ZXIoeiA9PiB6PjEpKTtcclxuICAgIC8vIGdldFZpZGVvcygpIDogT2JzZXJ2YWJsZTxJVmlkZW8+XHJcbiAgICBcclxuICAgIC8vIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2FwaS92aWRlbycpXHJcbiAgICAvLyAgICAgICAgIC5tYXA8SVZpZGVvW10+KChyZXM6IFJlc3BvbnNlKSAgPT4gcmVzLmpzb24oKSlcclxuICAgIC8vICAgICAgICAgLmZsYXRNYXAodmlkcyA9PiAgT2JzZXJ2YWJsZS5mcm9tKHZpZHMsIF8gPT4gXylcclxuICAgIC8vICAgICAgICAgLy8gLm1hcDxJVmlkZW8+KHYxID0+IHtcclxuICAgIC8vICAgICAgICAgLy8gIC8vICAgdjEuaWQgPSB2MS5faWQ7XHJcbiAgICAvLyAgICAgICAgIC8vICAgICByZXR1cm4gdjE7XHJcbiAgICAvLyAgICAgICAgIC8vIH0pXHJcbiAgICAvLyAgICAgICAgIClcclxuICAgIC8vICAgICAgICAuZmlsdGVyKFZpZGVvVmFsaWRhdGlvblNlcnZpY2UudmFsaWRhdGVWaWRlbylcclxuICAgIC8vICAgICAgICAgICAgICAvL3tcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9yKGxldCB2aWRlbyBvZiB2aWRzKVxyXG4gICAgLy8gICAgICAgICAgICAgICAvLyAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAvLyAgICAgIHZpZGVvLmlkID0gdmlkZW8uX2lkO1xyXG4gICAgLy8gICAgICAgICAgICAgICAvLyAgfVxyXG4gICAgLy8gICAgICAgICAgICAgIC8vICAgcmV0dXJuIHZpZHM7XHJcbiAgICAvLyAgICAgICAgICAgICAvL30pXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyAgICAgICAgIC5kbyhyZXMgPT4gY29uc29sZS5sb2coJ0FsbDogJyArIEpTT04uc3RyaW5naWZ5KHJlcykpKVxyXG4gICAgLy8gICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVHZXRWaWRlb3NFcnJvcik7XHJcbiAgICAvLyAgICAgLy8gLmZsYXRNYXBUbzxJVmlkZW8+KHZpZEFyciA9PiBPYnNlcnZhYmxlLmZyb21BcnJheSh2aWRBcnIpXHJcbiAgICAvLyAgICAgLy8gLy9PYnNlcnZhYmxlLm1hcDxJVmlkZW8+KHQgPT4gT2JzZXJ2YWJsZS5mcm9tQXJyYXkodmlkQXJyKSlcclxuICAgIC8vICAgICAvLyAuZmlsdGVyKHZpZCA9PiB0aGlzLnZhbGlkYXRlVmlkZW8odmlkKSk7XHJcblxyXG4gICAgLy8gICAgIC8vICAgICByZXMuanNvbigpXHJcbiAgICAvLyAgICAgLy8gICAgIC5tYXAocmVzSnNvbiA9PiBPYnNlcnZhYmxlLmZyb20ocmVzKVxyXG4gICAgLy8gICAgIC8vICAgICAgICAgLm1hcCh4ID0+IE9ic2VydmFibGVcclxuICAgIC8vICAgICAvLyAgICAgICAgICAgICAuZnJvbSh4KVxyXG4gICAgLy8gICAgIC8vICAgICAgICAgICAgIC5maWx0ZXI8SVZpZGVvPih6ID0+IHRoaXMudmFsaWRhdGVWaWRlbyh6KSlcclxuICAgIC8vICAgICAvLyAgICAgICAgICAgICAubWFwPElWaWRlbz4odmlkID0+IHZpZC5qc29uKSk7XHJcblxyXG4gICAgLy8gICAgIC8vIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICAvLyBoYW5kbGVHZXRWaWRlb3NFcnJvcihlcnJvcjogUmVzcG9uc2UpXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgY29uc29sZS5lcnJvciAoZXJyb3IpO1xyXG4gICAgLy8gICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yIHx8ICdTZXJ2ZXIgZXJyb3Igb2NjdXJyZWQgd2hlbiByZXRyaWV2aW5nIGxpc3Qgb2YgdmlkZW9zJyk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0VmlkZW8oaWQ6IHN0cmluZykgOiBPYnNlcnZhYmxlPElWaWRlbz4gXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hcGkvdmlkZW8vJyArIGlkKVxyXG4gICAgLy8gICAgICAgICAubWFwPElWaWRlbz4oKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAvLyAgICAgICAgIC8vIC5tYXAodmlkZW8gPT4ge1xyXG4gICAgLy8gICAgICAgICAvLyAgICAgdmlkZW8uaWQgPSB2aWRlby5faWQ7XHJcbiAgICAvLyAgICAgICAgIC8vICAgICByZXR1cm4gdmlkZW87XHJcbiAgICAvLyAgICAgICAgIC8vIH0pXHJcbiAgICAvLyAgICAgICAgICAuZG8ocmVzID0+IGNvbnNvbGUubG9nKCdSZXRyaWV2ZWQgdmlkZW86ICcgKyBKU09OLnN0cmluZ2lmeShyZXMpKSlcclxuICAgIC8vICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUdldFZpZGVvRXJyb3IpO1xyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICAvLyBwcml2YXRlIGhhbmRsZUdldFZpZGVvRXJyb3IoZXJyb3I6IFJlc3BvbnNlKVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgLy8gICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSB8fCAnU2VydmVyIGVycm9yIG9jY3VycmVkIHdoZW4gcmV0cmlldmluZyB2aWRlbyBkZXRhaWxzJyk7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGdldEVtcHR5VmlkZW8oKSB7XHJcbiAgICAvLyAgICAgdmFyIHJlc3VsdDogSVZpZGVvID0ge1xyXG4gICAgLy8gICAgICAgIC8vIF9pZDogJycsXHJcbiAgICAvLyAgICAgICAgIGlkOiAnJyxcclxuICAgIC8vICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgLy8gICAgICAgICB1cmw6ICcnLFxyXG4gICAgLy8gICAgICAgICBsb2NhbFVybDogJycsXHJcbiAgICAvLyAgICAgICAgIGNvZGU6ICcnLFxyXG4gICAgLy8gICAgICAgICBtZWRpYVR5cGU6ICcnLFxyXG4gICAgLy8gICAgICAgICB2aWRlb0xlbmd0aDogMCxcclxuICAgIC8vICAgICAgICAgdmlkZW9PcmlnaW46IFZpZGVvT3JpZ2luRW51bS5Zb3VUdWJlLFxyXG4gICAgLy8gICAgICAgICB0YWdzOiBbXSxcclxuICAgIC8vICAgICAgICAgcmF0aW5nOiAwLFxyXG4gICAgLy8gICAgICAgICB3YXRjaGVkQ291bnQ6IDBcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAvLyB9XHJcblxyXG4gICBcclxuXHJcbiAgICAvLyB2YWxpZGF0ZVZpZGVvKGVudGl0eTogSVZpZGVvKTogYm9vbGVhbiB7XHJcbiAgICAvLyAgICAgbGV0IHJlc3VsdDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAvLyAgICAgLy9ub24tZW1wdHkgZmllbGRzIHZhbGlkYXRpb25cclxuICAgICAgICBcclxuICAgIC8vICAgICBpZiAoIWVudGl0eS5pZClcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZGF0aW9uOiBpZCBpcyBlbXB0eSBmb3IgdmlkZW8nKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZW50aXR5KTtcclxuICAgIC8vICAgICAgICAgcmVzdWx0PWZhbHNlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZiAoIWVudGl0eS50aXRsZSkvLyB8fCAhZW50aXR5LnVybCB8fCAhZW50aXR5LnZpZGVvTGVuZ3RoKSB7XHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygndmFsaWRhdGlvbjogdGl0bGUgaXMgZW1wdHkgZm9yIHZpZGVvOiAnICsgZW50aXR5KTtcclxuICAgIC8vICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvL3JhdGluZyBtdXN0IGJlIGFuIGludGVnZXIgYmV0d2VlbiAwIGFuZCA1XHJcbiAgICAvLyAgICAgaWYgKCFlbnRpdHkgfHwgZW50aXR5LnJhdGluZyA8IDAgfHwgZW50aXR5LnJhdGluZyA+IDUpIHtcclxuICAgIC8vICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZGF0aW9uOiB3cm9uZyByYXRpbmcgZm9yIHZpZGVvOiAnICsgZW50aXR5KTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gcmVjb2duaXplVmlkZW9CeVVybCh1cmw6IHN0cmluZykgOiBWaWRlb09yaWdpbkVudW1cclxuICAgIC8vIHtcclxuICAgIC8vICAgICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTgzMDM4Ny9ob3ctdG8tZmluZC1hbGwteW91dHViZS12aWRlby1pZHMtaW4tYS1zdHJpbmctdXNpbmctYS1yZWdleC81ODMxMTkxIzU4MzExOTFcclxuICAgIC8vICAgICBsZXQgeXRVcmxSZWdFeHA6IFJlZ0V4cCA9IC9odHRwcz86XFwvXFwvKD86WzAtOUEtWi1dK1xcLik/KD86eW91dHVcXC5iZVxcL3x5b3V0dWJlKD86LW5vY29va2llKT9cXC5jb21cXFMqP1teXFx3XFxzLV0pKFtcXHctXXsxMX0pKD89W15cXHctXXwkKSg/IVs/PSYrJVxcdy4tXSooPzpbJ1wiXVtePD5dKj58PFxcL2E+KSlbPz0mKyVcXHcuLV0qL2lnO1xyXG5cclxuICAgIC8vICAgICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTMyODY3ODUvZ2V0LXZpZGVvLWlkLWZyb20tdmltZW8tdXJsXHJcbiAgICAvLyAgICAgbGV0IHZtVXJsUmVnRXhwOiBSZWdFeHAgPSAvaHR0cHM/OlxcL1xcLyg/Ond3d1xcLnxwbGF5ZXJcXC4pP3ZpbWVvLmNvbVxcLyg/OmNoYW5uZWxzXFwvKD86XFx3K1xcLyk/fGdyb3Vwc1xcLyhbXlxcL10qKVxcL3ZpZGVvc1xcL3xhbGJ1bVxcLyhcXGQrKVxcL3ZpZGVvXFwvfHZpZGVvXFwvfCkoXFxkKykoPzokfFxcL3xcXD8pLztcclxuICAgICAgICBcclxuICAgIC8vICAgICAvLyN0b2RvXHJcbiAgICAvLyAgICAgbGV0IGNoOVVybFJlZ0V4cDogUmVnRXhwID0gL2h0dHA/LztcclxuICAgICAgICBcclxuICAgIC8vICAgICBpZiAodXJsLm1hdGNoKHl0VXJsUmVnRXhwKSlcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBWaWRlb09yaWdpbkVudW0uWW91VHViZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKHVybC5tYXRjaCh2bVVybFJlZ0V4cCkpXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gVmlkZW9PcmlnaW5FbnVtLlZpbWVvOyAgICAgICAgICAgIFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZiAodXJsLm1hdGNoKGNoOVVybFJlZ0V4cCkpe1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gVmlkZW9PcmlnaW5FbnVtLkNoYW5uZWw5O1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gVmlkZW9PcmlnaW5FbnVtLlVua25vd247ICAgICAgICBcclxuICAgIC8vIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIElWaWRlb1NlcnZpY2Vcclxue1xyXG4gICAgR2V0VmlkZW9zKCkgOiBPYnNlcnZhYmxlPElWaWRlbz47XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC92aWRlb3MvdmlkZW8tZGV0YWlscy92aWRlby1kZXRhaWxzLnNlcnZpY2UudHMiLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vL2ltcG9ydCB7Q29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtJVmlkZW99IGZyb20gJy4vdmlkZW8tZGV0YWlscy5pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtWaWRlb09yaWdpbkVudW19IGZyb20gJy4vdmlkZW8tZGV0YWlscy5lbnVtcyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmlkZW9WYWxpZGF0aW9uU2VydmljZSB7XHJcblxyXG4gICAgc3RhdGljIHZhbGlkYXRlVmlkZW8oZW50aXR5OiBJVmlkZW8pOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gaWYgKCFlbnRpdHkuaWQpIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRpb246IGlkIGlzIGVtcHR5IGZvciB2aWRlbzogJyArIGVudGl0eSk7XHJcbiAgICAgICAgLy8gICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIC8vIGlmICghZW50aXR5LnRpdGxlKSB7XHJcblxyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygndmFsaWRhdGlvbjogdGl0bGUgaXMgZW1wdHkgZm9yIHZpZGVvOiAnICsgZW50aXR5KTtcclxuICAgICAgICAvLyAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChWaWRlb1ZhbGlkYXRpb25TZXJ2aWNlLnJlY29nbml6ZVZpZGVvQnlVcmwoZW50aXR5LnVybCkgPT0gVmlkZW9PcmlnaW5FbnVtLlVua25vd24pIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRpb246IHVybCBvZiB0aGUgdmlkZW8gaXMgaW5jb3JyZWN0OiAnICsgZW50aXR5LnVybCk7XHJcbiAgICAgICAgLy8gICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gLy9yYXRpbmcgbXVzdCBiZSBhbiBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgNVxyXG4gICAgICAgIC8vIGlmICghZW50aXR5IHx8IGVudGl0eS5yYXRpbmcgPCAwIHx8IGVudGl0eS5yYXRpbmcgPiA1KSB7XHJcbiAgICAgICAgLy8gICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygndmFsaWRhdGlvbjogd3JvbmcgcmF0aW5nIGZvciB2aWRlbzogJyArIGVudGl0eSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgLy8gc3RhdGljIHJhdGluZ1ZhbGlkYXRvcihjb250cm9sOiBDb250cm9sKTogeyBbczogc3RyaW5nXTogYm9vbGVhbiB9IHtcclxuICAgIC8vICAgICBsZXQgcmF0aW5nVmFsdWU6IG51bWJlciA9IGNvbnRyb2wudmFsdWU7XHJcbiAgICAvLyAgICAgaWYgKHJhdGluZ1ZhbHVlIDwgMCB8fCByYXRpbmdWYWx1ZSA+IDUpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHsgcmF0aW5nT3V0T2ZCb3VuZHM6IHRydWUgfTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc3RhdGljIHVybFZhbGlkYXRvcihjb250cm9sOiBDb250cm9sKTogeyBbczogc3RyaW5nXTogYm9vbGVhbiB9IHtcclxuICAgIC8vICAgICBsZXQgcmVzdWx0OiB7IFtzOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuXHJcbiAgICAvLyAgICAgLy9vbmx5IHJlY29nbml6ZWQgVXJscyBhcmUgYWxsb3dlZFxyXG4gICAgLy8gICAgIGxldCB1cmw6IHN0cmluZyA9IGNvbnRyb2wudmFsdWU7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2luIHVybFZhbGlkYXRvcicpO1xyXG4gICAgLy8gICAgIGlmICghdXJsKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdubyB1cmwgcHJvdmlkZWQnKTtcclxuICAgIC8vICAgICAgICAgcmVzdWx0ID0geyBlbXB0eVVybDogdHJ1ZSB9O1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgbGV0IHNlcnZpY2UgPSB0aGlzOyAgICAgICAgICAgIFxyXG5cclxuICAgIC8vICAgICAgICAgaWYgKFZpZGVvVmFsaWRhdGlvblNlcnZpY2UucmVjb2duaXplVmlkZW9CeVVybCh1cmwpID09IFZpZGVvT3JpZ2luRW51bS5Vbmtub3duKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5yZWNvZ25pemVkIHVybCBmb3JtYXQnKTtcclxuICAgIC8vICAgICAgICAgICAgIHJlc3VsdCA9IHsgaW52YWxpZFVybDogdHJ1ZSB9O1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vd2h5IHRoaXMgaGFzIHRvIGJlIHN0YXRpYz9cclxuICAgIHN0YXRpYyByZWNvZ25pemVWaWRlb0J5VXJsKHVybDogc3RyaW5nKTogVmlkZW9PcmlnaW5FbnVtIHtcclxuICAgICAgICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTgzMDM4Ny9ob3ctdG8tZmluZC1hbGwteW91dHViZS12aWRlby1pZHMtaW4tYS1zdHJpbmctdXNpbmctYS1yZWdleC81ODMxMTkxIzU4MzExOTFcclxuICAgICAgICBsZXQgeXRVcmxSZWdFeHA6IFJlZ0V4cCA9IC8oaHR0cHM/OlxcL1xcLyk/KD86WzAtOUEtWi1dK1xcLik/KD86eW91dHVcXC5iZVxcL3x5b3V0dWJlKD86LW5vY29va2llKT9cXC5jb21cXFMqP1teXFx3XFxzLV0pKFtcXHctXXsxMX0pKD89W15cXHctXXwkKSg/IVs/PSYrJVxcdy4tXSooPzpbJ1wiXVtePD5dKj58PFxcL2E+KSlbPz0mKyVcXHcuLV0qL2lnO1xyXG5cclxuICAgICAgICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTMyODY3ODUvZ2V0LXZpZGVvLWlkLWZyb20tdmltZW8tdXJsXHJcbiAgICAgICAgbGV0IHZtVXJsUmVnRXhwOiBSZWdFeHAgPSAvKGh0dHBzPzpcXC9cXC8pPyg/Ond3d1xcLnxwbGF5ZXJcXC4pP3ZpbWVvLmNvbVxcLyg/OmNoYW5uZWxzXFwvKD86XFx3K1xcLyk/fGdyb3Vwc1xcLyhbXlxcL10qKVxcL3ZpZGVvc1xcL3xhbGJ1bVxcLyhcXGQrKVxcL3ZpZGVvXFwvfHZpZGVvXFwvfCkoXFxkKykoPzokfFxcL3xcXD8pLztcclxuXHJcbiAgICAgICAgLy8jdG9kb1xyXG4gICAgICAgIC8vbGV0IGNoOVVybFJlZ0V4cDogUmVnRXhwID0gL2h0dHA/LztcclxuXHJcbiAgICAgICAgaWYgKHVybCAmJiB1cmwubWF0Y2goeXRVcmxSZWdFeHApKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5b3V0dWJlIHVybCBtYXRjaGVkJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBWaWRlb09yaWdpbkVudW0uWW91VHViZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVybCAmJiB1cmwubWF0Y2godm1VcmxSZWdFeHApKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2aW1lbyB1cmwgbWF0Y2hlZCcpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gVmlkZW9PcmlnaW5FbnVtLlZpbWVvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAodXJsLm1hdGNoKGNoOVVybFJlZ0V4cCkpIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2NoYW5uZWw5IHVybCBtYXRjaGVkJyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIHJldHVybiBWaWRlb09yaWdpbi5DaGFubmVsOTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIFZpZGVvT3JpZ2luRW51bS5Vbmtub3duO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby1kZXRhaWxzL3ZpZGVvLnZhbGlkYXRpb24uc2VydmljZS50cyIsImltcG9ydCB7IG9FbWJlZCB9IGZyb20gJy4vdmlkZW8tb2VtYmVkLmludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIG9FbWJlZFZpbWVvIGltcGxlbWVudHMgb0VtYmVkIHtcclxuICAgIHR5cGU6IGFueTtcclxuICAgIHZlcnNpb246IGFueTtcclxuICAgIHByb3ZpZGVyX25hbWU6IGFueTtcclxuICAgIHByb3ZpZGVyX3VybDogYW55O1xyXG4gICAgdGl0bGU6IGFueTtcclxuICAgIGF1dGhvcl9uYW1lOiBhbnk7XHJcbiAgICBhdXRob3JfdXJsOiBhbnk7XHJcbiAgICBpc19wbHVzOiBhbnk7XHJcbiAgICBodG1sOiBhbnk7XHJcbiAgICB3aWR0aDogYW55O1xyXG4gICAgaGVpZ2h0OiBhbnk7XHJcbiAgICBkdXJhdGlvbjogYW55O1xyXG4gICAgZGVzY3JpcHRpb246IGFueTtcclxuICAgIHRodW1ibmFpbF91cmw6IGFueTtcclxuICAgIHRodW1ibmFpbF93aWR0aDogYW55O1xyXG4gICAgdGh1bWJuYWlsX2hlaWdodDogYW55O1xyXG4gICAgdGh1bWJuYWlsX3VybF93aXRoX3BsYXlfYnV0dG9uOiBhbnk7XHJcbiAgICB1cGxvYWRfZGF0ZTogYW55O1xyXG4gICAgdmlkZW9faWQ6IGFueTtcclxuICAgIHVyaTogYW55O1xyXG4gICAgXHJcbiAgICBwdWJsaWMgcHJvdmlkZXJOYW1lIDogc3RyaW5nID0gXCJWaW1lb1wiO1xyXG5cclxuICAgIHB1YmxpYyBtYXRjaFByb3ZpZGVyQnlVcmwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgLy9odHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEzMjg2Nzg1L2dldC12aWRlby1pZC1mcm9tLXZpbWVvLXVybFxyXG4gICAgICAgIGxldCB2bVVybFJlZ0V4cDogUmVnRXhwID0gL2h0dHBzPzpcXC9cXC8oPzp3d3dcXC58cGxheWVyXFwuKT92aW1lby5jb21cXC8oPzpjaGFubmVsc1xcLyg/OlxcdytcXC8pP3xncm91cHNcXC8oW15cXC9dKilcXC92aWRlb3NcXC98YWxidW1cXC8oXFxkKylcXC92aWRlb1xcL3x2aWRlb1xcL3wpKFxcZCspKD86JHxcXC98XFw/KS87XHJcblxyXG4gICAgICAgIHJldHVybiB1cmwubWF0Y2godm1VcmxSZWdFeHApP3RydWU6ZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbnRlbnRVcmwodXJsOiBzdHJpbmcpIDogc3RyaW5ne1xyXG4gICAgICAgIHZhciBvRW1iZWRCYXNlVXJsID0gXCJodHRwczovL3ZpbWVvLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPVwiO1xyXG4gICAgICAgIHZhciBmaW5hbFVybCA9IG9FbWJlZEJhc2VVcmwgKyB1cmw7XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsVXJsO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby1vZW1iZWQvb2VtYmVkLXZpbWVvLnRzIiwiaW1wb3J0IHsgb0VtYmVkIH0gZnJvbSAnLi92aWRlby1vZW1iZWQuaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3Mgb0VtYmVkWW91VHViZSBpbXBsZW1lbnRzIG9FbWJlZCB7XHJcbiAgICB0eXBlOiBhbnk7XHJcbiAgICB2ZXJzaW9uOiBhbnk7XHJcbiAgICBwcm92aWRlcl9uYW1lOiBhbnk7XHJcbiAgICBwcm92aWRlcl91cmw6IGFueTtcclxuICAgIHRpdGxlOiBhbnk7XHJcbiAgICBhdXRob3JfbmFtZTogYW55O1xyXG4gICAgYXV0aG9yX3VybDogYW55O1xyXG4gICAgaXNfcGx1czogYW55O1xyXG4gICAgaHRtbDogYW55O1xyXG4gICAgd2lkdGg6IGFueTtcclxuICAgIGhlaWdodDogYW55O1xyXG4gICAgZHVyYXRpb246IGFueTtcclxuICAgIGRlc2NyaXB0aW9uOiBhbnk7XHJcbiAgICB0aHVtYm5haWxfdXJsOiBhbnk7XHJcbiAgICB0aHVtYm5haWxfd2lkdGg6IGFueTtcclxuICAgIHRodW1ibmFpbF9oZWlnaHQ6IGFueTtcclxuICAgIHRodW1ibmFpbF91cmxfd2l0aF9wbGF5X2J1dHRvbjogYW55O1xyXG4gICAgdXBsb2FkX2RhdGU6IGFueTtcclxuICAgIHZpZGVvX2lkOiBhbnk7XHJcbiAgICB1cmk6IGFueTtcclxuXHJcbiAgICBwdWJsaWMgcHJvdmlkZXJOYW1lID0gXCJZb3VUdWJlXCI7XHJcblxyXG4gICAgcHVibGljIG1hdGNoUHJvdmlkZXJCeVVybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTgzMDM4Ny9ob3ctdG8tZmluZC1hbGwteW91dHViZS12aWRlby1pZHMtaW4tYS1zdHJpbmctdXNpbmctYS1yZWdleC81ODMxMTkxIzU4MzExOTFcclxuICAgICAgICBsZXQgeXRVcmxSZWdFeHA6IFJlZ0V4cCA9IC9odHRwcz86XFwvXFwvKD86WzAtOUEtWi1dK1xcLik/KD86eW91dHVcXC5iZVxcL3x5b3V0dWJlKD86LW5vY29va2llKT9cXC5jb21cXFMqP1teXFx3XFxzLV0pKFtcXHctXXsxMX0pKD89W15cXHctXXwkKSg/IVs/PSYrJVxcdy4tXSooPzpbJ1wiXVtePD5dKj58PFxcL2E+KSlbPz0mKyVcXHcuLV0qL2lnO1xyXG5cclxuICAgICAgICByZXR1cm4gKHVybC5tYXRjaCh5dFVybFJlZ0V4cCkpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb250ZW50VXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgb0VtYmVkQmFzZVVybCA9IFwiaHR0cDovL3d3dy55b3V0dWJlLmNvbS9vZW1iZWQ/dXJsPVwiO1xyXG4gICAgICAgIHZhciBmaW5hbFVybCA9IG9FbWJlZEJhc2VVcmwgKyB1cmw7XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsVXJsO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby1vZW1iZWQvb2VtYmVkLXlvdXR1YmUudHMiLCJleHBvcnQgKiBmcm9tICcuLi92aWRlby1saXN0L3ZpZGVvLWxpc3QuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi4vdmlkZW8tZGV0YWlscy92aWRlby1kZXRhaWxzLmNvbXBvbmVudCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby92aWRlb3MuY29tcG9uZW50cy50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFZpZGVvRGV0YWlsc0NvbXBvbmVudCwgVmlkZW9MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi92aWRlby92aWRlb3MuY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJ3ZpZGVvLWxpc3QnLCBjb21wb25lbnQ6IFZpZGVvTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAndmlkZW8tZGV0YWlscycsIGNvbXBvbmVudDogVmlkZW9EZXRhaWxzQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICd2aWRlby1kZXRhaWxzLzppZCcsIGNvbXBvbmVudDogVmlkZW9EZXRhaWxzQ29tcG9uZW50IH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICAgICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgICAgICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG4gICAgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVmlkZW9zUm91dGluZ01vZHVsZSB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC92aWRlb3MvdmlkZW9zLXJvdXRpbmcubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgVmlkZW9MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi92aWRlby1saXN0L3ZpZGVvLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmlkZW9EZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi92aWRlby1kZXRhaWxzL3ZpZGVvLWRldGFpbHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmlkZW9zUm91dGluZ01vZHVsZSB9IGZyb20gJy4vdmlkZW9zLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgVmlkZW9TZXJ2aWNlLCBvRW1iZWRTZXJ2aWNlIH0gZnJvbSAnLi92aWRlby92aWRlby5zZXJ2aWNlcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSxcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgVmlkZW9zUm91dGluZ01vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZVxyXG4gICAgXVxyXG4gICAgLFxyXG5kZWNsYXJhdGlvbnM6IFtcclxuICAgIFZpZGVvTGlzdENvbXBvbmVudCxcclxuICAgIFZpZGVvRGV0YWlsc0NvbXBvbmVudFxyXG5dLFxyXG5wcm92aWRlcnM6IFtWaWRlb1NlcnZpY2UsIG9FbWJlZFNlcnZpY2VdXHJcbi8vLCAgICAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaWRlb3NNb2R1bGUge1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlb3MubW9kdWxlLnRzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXHJcXG4gICAgLmJvZHktY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaSAuZ2x5cGhpY29uIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdiBtZW51IGl0ZW1zICovXFxyXFxubGkubGluay1hY3RpdmUgYSxcXHJcXG5saS5saW5rLWFjdGl2ZSBhOmhvdmVyLFxcclxcbmxpLmxpbmstYWN0aXZlIGE6Zm9jdXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE4OUM3O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIEtlZXAgdGhlIG5hdiBtZW51IGluZGVwZW5kZW50IG9mIHNjcm9sbGluZyBhbmQgb24gdG9wIG9mIG90aGVyIGl0ZW1zICovXFxyXFxuLm1haW4tbmF2IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXFxyXFxuICAgIC5tYWluLW5hdiB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gICAgICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXItaGVhZGVyIHtcXHJcXG4gICAgICAgIGZsb2F0OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xcclxcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciB1bCB7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIGxpIHtcXHJcXG4gICAgICAgIGZsb2F0OiBub25lO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICAgICAgbWFyZ2luOiA2cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciBsaSBhIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIGEge1xcclxcbiAgICAgICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J2NvbnRhaW5lci1mbHVpZCc+XFxyXFxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tMyc+XFxyXFxuICAgICAgICAgICAgPG5hdi1tZW51PjwvbmF2LW1lbnU+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS05IGJvZHktY29udGVudCc+XFxyXFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkNvdW50ZXI8L2gxPlxcclxcblxcclxcbjxwPlRoaXMgaXMgYSBzaW1wbGUgZXhhbXBsZSBvZiBhbiBBbmd1bGFyIDIgY29tcG9uZW50LjwvcD5cXHJcXG5cXHJcXG48cD5DdXJyZW50IGNvdW50OiA8c3Ryb25nPnt7IGN1cnJlbnRDb3VudCB9fTwvc3Ryb25nPjwvcD5cXHJcXG5cXHJcXG48YnV0dG9uIChjbGljayk9XFxcImluY3JlbWVudENvdW50ZXIoKVxcXCI+SW5jcmVtZW50PC9idXR0b24+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5WaWRlb3MgU2FtcGxlPC9oMT5cXHJcXG5cXHJcXG48cD5UaGlzIGNvbXBvbmVudCBzaG93cyBhIHNpbXBsZSBmZXRjaGluZyBvZiBXZWIgQVBJIGRhdGEuPC9wPlxcclxcblxcclxcbjxwICpuZ0lmPVxcXCIhdmlkZW9zXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPlxcclxcblxcclxcbjx0YWJsZSBjbGFzcz0ndGFibGUnICpuZ0lmPVxcXCJ2aWRlb3NcXFwiPlxcclxcbiAgICA8dGhlYWQ+XFxyXFxuICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgPHRoPkNyZWF0ZWQ8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5DYXRlZ29yeTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHZpZGVvIG9mIHZpZGVvc1xcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPnt7IHZpZGVvLmNyZWF0ZWREYXRlIH19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+e3sgdmlkZW8uY2F0ZWdvcnkgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyB2aWRlby5uYW1lIH19PC90ZD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGJvZHk+XFxyXFxuPC90YWJsZT5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5IZWxsbywgd29ybGQhPC9oMT5cXHJcXG48cD5XZWxjb21lIHRvIHlvdXIgbmV3IHNpbmdsZS1wYWdlIGFwcGxpY2F0aW9uLCBidWlsdCB3aXRoOjwvcD5cXHJcXG48dWw+XFxyXFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL2dldC5hc3AubmV0Lyc+QVNQLk5FVCBDb3JlPC9hPiBhbmQgPGEgaHJlZj0naHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS82N2VmOHNiZC5hc3B4Jz5DIzwvYT4gZm9yIGNyb3NzLXBsYXRmb3JtIHNlcnZlci1zaWRlIGNvZGU8L2xpPlxcclxcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9hbmd1bGFyLmlvLyc+QW5ndWxhciAyPC9hPiBhbmQgPGEgaHJlZj0naHR0cDovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvJz5UeXBlU2NyaXB0PC9hPiBmb3IgY2xpZW50LXNpZGUgY29kZTwvbGk+XFxyXFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL3dlYnBhY2suZ2l0aHViLmlvLyc+V2VicGFjazwvYT4gZm9yIGJ1aWxkaW5nIGFuZCBidW5kbGluZyBjbGllbnQtc2lkZSByZXNvdXJjZXM8L2xpPlxcclxcbiAgICA8bGk+PGEgaHJlZj0naHR0cDovL2dldGJvb3RzdHJhcC5jb20vJz5Cb290c3RyYXA8L2E+IGZvciBsYXlvdXQgYW5kIHN0eWxpbmc8L2xpPlxcclxcbjwvdWw+XFxyXFxuPHA+VG8gaGVscCB5b3UgZ2V0IHN0YXJ0ZWQsIHdlJ3ZlIGFsc28gc2V0IHVwOjwvcD5cXHJcXG48dWw+XFxyXFxuICAgIDxsaT48c3Ryb25nPkNsaWVudC1zaWRlIG5hdmlnYXRpb248L3N0cm9uZz4uIEZvciBleGFtcGxlLCBjbGljayA8ZW0+Q291bnRlcjwvZW0+IHRoZW4gPGVtPkJhY2s8L2VtPiB0byByZXR1cm4gaGVyZS48L2xpPlxcclxcbiAgICA8bGk+PHN0cm9uZz5TZXJ2ZXItc2lkZSBwcmVyZW5kZXJpbmc8L3N0cm9uZz4uIEZvciBmYXN0ZXIgaW5pdGlhbCBsb2FkaW5nIGFuZCBpbXByb3ZlZCBTRU8sIHlvdXIgQW5ndWxhciAyIGFwcCBpcyBwcmVyZW5kZXJlZCBvbiB0aGUgc2VydmVyLiBUaGUgcmVzdWx0aW5nIEhUTUwgaXMgdGhlbiB0cmFuc2ZlcnJlZCB0byB0aGUgYnJvd3NlciB3aGVyZSBhIGNsaWVudC1zaWRlIGNvcHkgb2YgdGhlIGFwcCB0YWtlcyBvdmVyLjwvbGk+XFxyXFxuICAgIDxsaT48c3Ryb25nPldlYnBhY2sgZGV2IG1pZGRsZXdhcmU8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHRoZXJlJ3Mgbm8gbmVlZCB0byBydW4gdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wuIFlvdXIgY2xpZW50LXNpZGUgcmVzb3VyY2VzIGFyZSBkeW5hbWljYWxseSBidWlsdCBvbiBkZW1hbmQuIFVwZGF0ZXMgYXJlIGF2YWlsYWJsZSBhcyBzb29uIGFzIHlvdSBtb2RpZnkgYW55IGZpbGUuPC9saT5cXHJcXG4gICAgPGxpPjxzdHJvbmc+SG90IG1vZHVsZSByZXBsYWNlbWVudDwvc3Ryb25nPi4gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgeW91IGRvbid0IGV2ZW4gbmVlZCB0byByZWxvYWQgdGhlIHBhZ2UgYWZ0ZXIgbWFraW5nIG1vc3QgY2hhbmdlcy4gV2l0aGluIHNlY29uZHMgb2Ygc2F2aW5nIGNoYW5nZXMgdG8gZmlsZXMsIHlvdXIgQW5ndWxhciAyIGFwcCB3aWxsIGJlIHJlYnVpbHQgYW5kIGEgbmV3IGluc3RhbmNlIGluamVjdGVkIGlzIGludG8gdGhlIHBhZ2UuPC9saT5cXHJcXG4gICAgPGxpPjxzdHJvbmc+RWZmaWNpZW50IHByb2R1Y3Rpb24gYnVpbGRzPC9zdHJvbmc+LiBJbiBwcm9kdWN0aW9uIG1vZGUsIGRldmVsb3BtZW50LXRpbWUgZmVhdHVyZXMgYXJlIGRpc2FibGVkLCBhbmQgdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wgcHJvZHVjZXMgbWluaWZpZWQgc3RhdGljIENTUyBhbmQgSmF2YVNjcmlwdCBmaWxlcy48L2xpPlxcclxcbjwvdWw+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J21haW4tbmF2Jz5cXHJcXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1oZWFkZXInPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+RG90TmV0VmlkZW9zQ29yZTwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJz48L3NwYW4+IEhvbWVcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvY291bnRlciddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1lZHVjYXRpb24nPjwvc3Bhbj4gQ291bnRlclxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9mZXRjaC1kYXRhJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gRmV0Y2ggZGF0YVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy92aWRlby1saXN0J11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWZpbG0nPjwvc3Bhbj4gVmlkZW9zXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgzPlZpZGVvIERldGFpbHM8L2gzPlxcclxcbjxkaXYgKm5nSWY9XFxcInZpZGVvXFxcIj5cXHJcXG48Zm9ybSAjZm9ybT1cXFwibmdGb3JtXFxcIiBub3ZhbGlkYXRlIChzdWJtaXQpPVxcXCJvblN1Ym1pdChmb3JtKVxcXCIgPiAgICBcXHJcXG4gICAgPGZpZWxkc2V0IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInZpZGVvVGl0bGVcXFwiPlRpdGxlOiA8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJ2aWRlby50aXRsZVxcXCIgbmFtZT1cXFwidmlkZW8udGl0bGVcXFwiIHBsYWNlaG9sZGVyPVxcXCJUaXRsZVxcXCIgaWQ9XFxcInZpZGVvVGl0bGVcXFwiIC8+ICAgICAgICBcXHJcXG4gICAgPC9maWVsZHNldD5cXHJcXG4gICAgPGZpZWxkc2V0IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInZpZGVvVXJsXFxcIj5Vcmw6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbbmdNb2RlbF09XFxcInZpZGVvLnVybFxcXCIgKG5nTW9kZWxDaGFuZ2UpPVxcXCJ2YWxpZGF0ZVZpZGVvVXJsKCRldmVudClcXFwiIG5hbWU9XFxcInZpZGVvLnVybFxcXCIgcGxhY2Vob2xkZXI9XFxcIlVybFxcXCIgaWQ9XFxcInZpZGVvVXJsXFxcIiAvPlxcclxcbiAgICA8L2ZpZWxkc2V0PiAgICBcXHJcXG4gICAgPGZpZWxkc2V0IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInZpZGVvT3JpZ2luXFxcIj5PcmlnaW46PC9sYWJlbD5cXHJcXG4gICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwidmlkZW8udmlkZW9PcmlnaW5cXFwiIG5hbWU9XFxcInZpZGVvLnZpZGVvT3JpZ2luXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBvcmlnaW4gb2YgdmlkZW9PcmlnaW5zIHwga2V5c1xcXCIgW3ZhbHVlXT1cXFwib3JpZ2luLmtleVxcXCI+e3tvcmlnaW4udmFsdWV9fTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICA8L2ZpZWxkc2V0PlxcclxcbiAgICA8ZmllbGRzZXQgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsPlRodW1ibmFpbCBJbWFnZTo8L2xhYmVsPlxcclxcbiAgICAgICAgPGltZyBbc3JjXSA9IFxcXCJ2aWRlby50aHVtYlVybFxcXCIgLz5cXHJcXG4gICAgPC9maWVsZHNldD5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPk9rPC9idXR0b24+XFxyXFxuICAgIHt7IGZvcm0udmFsdWUgfCBqc29ufX1cXHJcXG4gICAge3sgdmlkZW8gfCBqc29uIH19XFxyXFxuPC9mb3JtPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCIgW2lubmVySHRtbF09XFxcInByZXZpZXc/Lmh0bWwgfCBzYWZlOiAnaHRtbCdcXFwiPlxcclxcblxcclxcbiAgICA8aHIgLz5cXHJcXG4gICAgPCEtLTxkaXYgKm5nSWY9XFxcImRpc3BsYXlNb2RlID09PSAnd2F0Y2gnXFxcIj5cXHJcXG4gICAgICAgIDx2aWRlby13YXRjaCBbdmlkZW9dPVxcXCJ2aWRlb0RldGFpbHNcXFwiPlxcclxcbiAgICAgICAgPC92aWRlby13YXRjaD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgKm5nSWY9XFxcImRpc3BsYXlNb2RlICE9PSAnd2F0Y2gnXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XFxcInZpZGVvRm9ybVxcXCIgaWQ9XFxcInZpZGVvLWRldGFpbHMtYWRkXFxcIiAqbmdJZj1cXFwidmlkZW9EZXRhaWxzXFxcIiAobmdTdWJtaXQpPVxcXCJzYXZlVmlkZW8odmlkZW9Gb3JtLnZhbHVlKVxcXCI+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPlJhdGluZzogPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJyYXRpbmdcXFwiIFsobmdNb2RlbCldPVxcXCJ2aWRlb0RldGFpbHMucmF0aW5nXFxcIiBuZ0NvbnRyb2w9XFxcInJhdGluZ1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcIiF2aWRlb0Zvcm0uY29udHJvbHMucmF0aW5nPy52YWxpZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFRoZSByYXRpbmcgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDUhXFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XFxyXFxuICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPnVybDogPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJ1cmxcXFwiIFsobmdNb2RlbCldPVxcXCJ2aWRlb0RldGFpbHMudXJsXFxcIiBuZ0NvbnRyb2w9XFxcInVybFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPHVsICpuZ0lmPVxcXCIhdmlkZW9Gb3JtLmNvbnRyb2xzLnVybD8udmFsaWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgVGhlIFVSTCBpcyBpbnZhbGlkLiBQb3NzaWJsZSBpc3N1ZXM6PGJyIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcInZpZGVvRm9ybS5jb250cm9scy51cmw/LmVtcHR5VXJsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgVVJMIGNhbm5vdCBiZSBlbXB0eVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwidmlkZW9Gb3JtLmNvbnRyb2xzLnVybD8uaW52YWxpZFVybFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFVSTCBmb3JtYXQgd2FzIG5vdCByZWNvZ25pemVkIGJ5IHRoZSBzeXN0ZW0uXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XFxyXFxuICAgICAgICAgICAgPGZpZWxkc2V0PlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJWaWRlb09yaWdpblxcXCI+U291cmNlOjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInZpZGVvRGV0YWlscy52aWRlb09yaWdpblxcXCIgbmdDb250cm9sPVxcXCJ2aWRlb09yaWdpblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgb3JpZ2luIG9mIHZpZGVvT3JpZ2lucyB8IGtleXNcXFwiIFt2YWx1ZV09XFxcIm9yaWdpbi5rZXlcXFwiPnt7b3JpZ2luLnZhbHVlfX08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxcclxcblxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwidWkgYnV0dG9uXFxcIj5TdWJtaXQ8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+LS0+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby1kZXRhaWxzL3ZpZGVvLWRldGFpbHMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiICpuZ0lmPVxcXCJ2aWRlb3NcXFwiPlxcclxcbiAgICA8IS0tKGNsaWNrKT1cXFwib25WaWRlb1NlbGVjdGVkKHZpZGVvKVxcXCItLT5cXHJcXG5cXHJcXG4gICAgPGgxPiBIZWxsbyBmcm9tIHZpZGVvLWxpc3QgY29tcG9uZW50IDwvaDE+XFxyXFxuICAgIDx1bD5cXHJcXG4gICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCB2aWRlbyBvZiB2aWRlb3MgfCBhc3luY1xcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLTxkaXYgKm5nSWY9XFxcInZpZGVvLlVybFxcXCI+LS0+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImltZy10aHVtYm5haWxcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvdmlkZW8tZGV0YWlscy8nLCB2aWRlby5pZF1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVxcXCJ2aWRlby50aHVtYlVybFxcXCIgIC8+IDxiciAvPiBcXHJcXG4gICAgICAgICAgICAgICAge3t2aWRlby50aXRsZX19IDxiciAvPiAoe3t2aWRlby5pZH19KVxcclxcbiAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgIDwhLS08L2Rpdj4tLT5cXHJcXG48L2xpPlxcclxcblxcclxcblxcclxcbjwvdWw+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy92aWRlby1kZXRhaWxzLycsIDBdXFxcIj5BZGRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtM1xcXCIgKm5nRm9yPVxcXCIgbGV0IHZpZGVvIG9mIHZpZGVvcyBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRodW1ibmFpbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwICpuZ0lmPVxcXCIhdmlkZW9zXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPi0tPlxcclxcblxcclxcbiAgICA8IS0tPHRhYmxlIGNsYXNzPSd0YWJsZSc+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q3JlYXRlZDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DYXRlZ29yeTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVkaXQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCB2aWRlbyBvZiB2aWRlb3NcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdmlkZW8uY3JlYXRlZERhdGUgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdmlkZW8uY2F0ZWdvcnkgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdmlkZW8ubmFtZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBbcm91dGVyTGlua109XFxcIlsnL3ZpZGVvLWRldGFpbHMnLCB2aWRlby5uYW1lXVxcXCI+RGV0YWlscyA8L2E+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPC90YWJsZT4tLT5cXHJcXG5cXHJcXG5cXHJcXG4gICAgPCEtLTxpbWcgKm5nSWY9XFxcInZpZGVvLnRodW1iVXJsXFxcIiBbc3JjXT1cXFwidmlkZW8udGh1bWJVcmxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcHRpb25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGgzPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXSA9IFxcXCJbJ1ZpZGVvJywge21vZGU6ICd3YXRjaCcsIGlkOiB2aWRlby5faWR9XVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAge3t2aWRlby50aXRsZX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cD5MZW5ndGg6IHt7dmlkZW8ubGVuZ3RofX08L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cD5XYXRjaGVkOiB7e3ZpZGVvLndhdGNoZWRDb3VudH19PC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHA+UmF0aW5nOiB7e3ZpZGVvLnJhdGluZ319PC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHA+PGEgW2hyZWZdPVxcXCJ2aWRlby5sb2NhbFVybFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIj5XYXRjaDwvYT4gPGEgW2hyZWZdPVxcXCJ2aWRlby51cmxcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XFxcImJ1dHRvblxcXCI+V2F0Y2g8L2E+PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXHJcXG4gICAgPCEtLTwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+LS0+XFxyXFxuPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby1saXN0L3ZpZGVvLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBBbiBleGVjdXRpb24gY29udGV4dCBhbmQgYSBkYXRhIHN0cnVjdHVyZSB0byBvcmRlciB0YXNrcyBhbmQgc2NoZWR1bGUgdGhlaXJcbiAqIGV4ZWN1dGlvbi4gUHJvdmlkZXMgYSBub3Rpb24gb2YgKHBvdGVudGlhbGx5IHZpcnR1YWwpIHRpbWUsIHRocm91Z2ggdGhlXG4gKiBgbm93KClgIGdldHRlciBtZXRob2QuXG4gKlxuICogRWFjaCB1bml0IG9mIHdvcmsgaW4gYSBTY2hlZHVsZXIgaXMgY2FsbGVkIGFuIHtAbGluayBBY3Rpb259LlxuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBTY2hlZHVsZXIge1xuICogICBub3coKTogbnVtYmVyO1xuICogICBzY2hlZHVsZSh3b3JrLCBkZWxheT8sIHN0YXRlPyk6IFN1YnNjcmlwdGlvbjtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBjbGFzcyBTY2hlZHVsZXJcbiAqL1xudmFyIFNjaGVkdWxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2NoZWR1bGVyKFNjaGVkdWxlckFjdGlvbiwgbm93KSB7XG4gICAgICAgIGlmIChub3cgPT09IHZvaWQgMCkgeyBub3cgPSBTY2hlZHVsZXIubm93OyB9XG4gICAgICAgIHRoaXMuU2NoZWR1bGVyQWN0aW9uID0gU2NoZWR1bGVyQWN0aW9uO1xuICAgICAgICB0aGlzLm5vdyA9IG5vdztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2NoZWR1bGVzIGEgZnVuY3Rpb24sIGB3b3JrYCwgZm9yIGV4ZWN1dGlvbi4gTWF5IGhhcHBlbiBhdCBzb21lIHBvaW50IGluXG4gICAgICogdGhlIGZ1dHVyZSwgYWNjb3JkaW5nIHRvIHRoZSBgZGVsYXlgIHBhcmFtZXRlciwgaWYgc3BlY2lmaWVkLiBNYXkgYmUgcGFzc2VkXG4gICAgICogc29tZSBjb250ZXh0IG9iamVjdCwgYHN0YXRlYCwgd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGB3b3JrYCBmdW5jdGlvbi5cbiAgICAgKlxuICAgICAqIFRoZSBnaXZlbiBhcmd1bWVudHMgd2lsbCBiZSBwcm9jZXNzZWQgYW4gc3RvcmVkIGFzIGFuIEFjdGlvbiBvYmplY3QgaW4gYVxuICAgICAqIHF1ZXVlIG9mIGFjdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKHN0YXRlOiA/VCk6ID9TdWJzY3JpcHRpb259IHdvcmsgQSBmdW5jdGlvbiByZXByZXNlbnRpbmcgYVxuICAgICAqIHRhc2ssIG9yIHNvbWUgdW5pdCBvZiB3b3JrIHRvIGJlIGV4ZWN1dGVkIGJ5IHRoZSBTY2hlZHVsZXIuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWxheV0gVGltZSB0byB3YWl0IGJlZm9yZSBleGVjdXRpbmcgdGhlIHdvcmssIHdoZXJlIHRoZVxuICAgICAqIHRpbWUgdW5pdCBpcyBpbXBsaWNpdCBhbmQgZGVmaW5lZCBieSB0aGUgU2NoZWR1bGVyIGl0c2VsZi5cbiAgICAgKiBAcGFyYW0ge1R9IFtzdGF0ZV0gU29tZSBjb250ZXh0dWFsIGRhdGEgdGhhdCB0aGUgYHdvcmtgIGZ1bmN0aW9uIHVzZXMgd2hlblxuICAgICAqIGNhbGxlZCBieSB0aGUgU2NoZWR1bGVyLlxuICAgICAqIEByZXR1cm4ge1N1YnNjcmlwdGlvbn0gQSBzdWJzY3JpcHRpb24gaW4gb3JkZXIgdG8gYmUgYWJsZSB0byB1bnN1YnNjcmliZVxuICAgICAqIHRoZSBzY2hlZHVsZWQgd29yay5cbiAgICAgKi9cbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHdvcmssIGRlbGF5LCBzdGF0ZSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLlNjaGVkdWxlckFjdGlvbih0aGlzLCB3b3JrKS5zY2hlZHVsZShzdGF0ZSwgZGVsYXkpO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLm5vdyA9IERhdGUubm93ID8gRGF0ZS5ub3cgOiBmdW5jdGlvbiAoKSB7IHJldHVybiArbmV3IERhdGUoKTsgfTtcbiAgICByZXR1cm4gU2NoZWR1bGVyO1xufSgpKTtcbmV4cG9ydHMuU2NoZWR1bGVyID0gU2NoZWR1bGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2NoZWR1bGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yeGpzL1NjaGVkdWxlci5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vLi4vT2JzZXJ2YWJsZScpO1xudmFyIGNhdGNoXzEgPSByZXF1aXJlKCcuLi8uLi9vcGVyYXRvci9jYXRjaCcpO1xuT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUucHJvdG90eXBlLmNhdGNoID0gY2F0Y2hfMS5fY2F0Y2g7XG5PYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5wcm90b3R5cGUuX2NhdGNoID0gY2F0Y2hfMS5fY2F0Y2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYXRjaC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4uLy4uL09ic2VydmFibGUnKTtcbnZhciBkZWJvdW5jZVRpbWVfMSA9IHJlcXVpcmUoJy4uLy4uL29wZXJhdG9yL2RlYm91bmNlVGltZScpO1xuT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUucHJvdG90eXBlLmRlYm91bmNlVGltZSA9IGRlYm91bmNlVGltZV8xLmRlYm91bmNlVGltZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlYm91bmNlVGltZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9hZGQvb3BlcmF0b3IvZGVib3VuY2VUaW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi8uLi9PYnNlcnZhYmxlJyk7XG52YXIgZGlzdGluY3RVbnRpbENoYW5nZWRfMSA9IHJlcXVpcmUoJy4uLy4uL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkJyk7XG5PYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZGlzdGluY3RVbnRpbENoYW5nZWQgPSBkaXN0aW5jdFVudGlsQ2hhbmdlZF8xLmRpc3RpbmN0VW50aWxDaGFuZ2VkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlzdGluY3RVbnRpbENoYW5nZWQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvYWRkL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi8uLi9PYnNlcnZhYmxlJyk7XG52YXIgZG9fMSA9IHJlcXVpcmUoJy4uLy4uL29wZXJhdG9yL2RvJyk7XG5PYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZG8gPSBkb18xLl9kbztcbk9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnByb3RvdHlwZS5fZG8gPSBkb18xLl9kbztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRvLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yeGpzL2FkZC9vcGVyYXRvci9kby5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vLi4vT2JzZXJ2YWJsZScpO1xudmFyIHN3aXRjaE1hcF8xID0gcmVxdWlyZSgnLi4vLi4vb3BlcmF0b3Ivc3dpdGNoTWFwJyk7XG5PYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3dpdGNoTWFwID0gc3dpdGNoTWFwXzEuc3dpdGNoTWFwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dpdGNoTWFwLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZSgnLi4vU3Vic2NyaWJlcicpO1xudmFyIGFzeW5jXzEgPSByZXF1aXJlKCcuLi9zY2hlZHVsZXIvYXN5bmMnKTtcbi8qKlxuICogRW1pdHMgYSB2YWx1ZSBmcm9tIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBvbmx5IGFmdGVyIGEgcGFydGljdWxhciB0aW1lIHNwYW5cbiAqIGhhcyBwYXNzZWQgd2l0aG91dCBhbm90aGVyIHNvdXJjZSBlbWlzc2lvbi5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+SXQncyBsaWtlIHtAbGluayBkZWxheX0sIGJ1dCBwYXNzZXMgb25seSB0aGUgbW9zdFxuICogcmVjZW50IHZhbHVlIGZyb20gZWFjaCBidXJzdCBvZiBlbWlzc2lvbnMuPC9zcGFuPlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvZGVib3VuY2VUaW1lLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIGBkZWJvdW5jZVRpbWVgIGRlbGF5cyB2YWx1ZXMgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUsIGJ1dCBkcm9wc1xuICogcHJldmlvdXMgcGVuZGluZyBkZWxheWVkIGVtaXNzaW9ucyBpZiBhIG5ldyB2YWx1ZSBhcnJpdmVzIG9uIHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUuIFRoaXMgb3BlcmF0b3Iga2VlcHMgdHJhY2sgb2YgdGhlIG1vc3QgcmVjZW50IHZhbHVlIGZyb20gdGhlXG4gKiBzb3VyY2UgT2JzZXJ2YWJsZSwgYW5kIGVtaXRzIHRoYXQgb25seSB3aGVuIGBkdWVUaW1lYCBlbm91Z2ggdGltZSBoYXMgcGFzc2VkXG4gKiB3aXRob3V0IGFueSBvdGhlciB2YWx1ZSBhcHBlYXJpbmcgb24gdGhlIHNvdXJjZSBPYnNlcnZhYmxlLiBJZiBhIG5ldyB2YWx1ZVxuICogYXBwZWFycyBiZWZvcmUgYGR1ZVRpbWVgIHNpbGVuY2Ugb2NjdXJzLCB0aGUgcHJldmlvdXMgdmFsdWUgd2lsbCBiZSBkcm9wcGVkXG4gKiBhbmQgd2lsbCBub3QgYmUgZW1pdHRlZCBvbiB0aGUgb3V0cHV0IE9ic2VydmFibGUuXG4gKlxuICogVGhpcyBpcyBhIHJhdGUtbGltaXRpbmcgb3BlcmF0b3IsIGJlY2F1c2UgaXQgaXMgaW1wb3NzaWJsZSBmb3IgbW9yZSB0aGFuIG9uZVxuICogdmFsdWUgdG8gYmUgZW1pdHRlZCBpbiBhbnkgdGltZSB3aW5kb3cgb2YgZHVyYXRpb24gYGR1ZVRpbWVgLCBidXQgaXQgaXMgYWxzb1xuICogYSBkZWxheS1saWtlIG9wZXJhdG9yIHNpbmNlIG91dHB1dCBlbWlzc2lvbnMgZG8gbm90IG9jY3VyIGF0IHRoZSBzYW1lIHRpbWUgYXNcbiAqIHRoZXkgZGlkIG9uIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS4gT3B0aW9uYWxseSB0YWtlcyBhIHtAbGluayBJU2NoZWR1bGVyfSBmb3JcbiAqIG1hbmFnaW5nIHRpbWVycy5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5FbWl0IHRoZSBtb3N0IHJlY2VudCBjbGljayBhZnRlciBhIGJ1cnN0IG9mIGNsaWNrczwvY2FwdGlvbj5cbiAqIHZhciBjbGlja3MgPSBSeC5PYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiB2YXIgcmVzdWx0ID0gY2xpY2tzLmRlYm91bmNlVGltZSgxMDAwKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgYXVkaXRUaW1lfVxuICogQHNlZSB7QGxpbmsgZGVib3VuY2V9XG4gKiBAc2VlIHtAbGluayBkZWxheX1cbiAqIEBzZWUge0BsaW5rIHNhbXBsZVRpbWV9XG4gKiBAc2VlIHtAbGluayB0aHJvdHRsZVRpbWV9XG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGR1ZVRpbWUgVGhlIHRpbWVvdXQgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIChvciB0aGUgdGltZVxuICogdW5pdCBkZXRlcm1pbmVkIGludGVybmFsbHkgYnkgdGhlIG9wdGlvbmFsIGBzY2hlZHVsZXJgKSBmb3IgdGhlIHdpbmRvdyBvZlxuICogdGltZSByZXF1aXJlZCB0byB3YWl0IGZvciBlbWlzc2lvbiBzaWxlbmNlIGJlZm9yZSBlbWl0dGluZyB0aGUgbW9zdCByZWNlbnRcbiAqIHNvdXJjZSB2YWx1ZS5cbiAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyPWFzeW5jXSBUaGUge0BsaW5rIElTY2hlZHVsZXJ9IHRvIHVzZSBmb3JcbiAqIG1hbmFnaW5nIHRoZSB0aW1lcnMgdGhhdCBoYW5kbGUgdGhlIHRpbWVvdXQgZm9yIGVhY2ggdmFsdWUuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbiBPYnNlcnZhYmxlIHRoYXQgZGVsYXlzIHRoZSBlbWlzc2lvbnMgb2YgdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZSBieSB0aGUgc3BlY2lmaWVkIGBkdWVUaW1lYCwgYW5kIG1heSBkcm9wIHNvbWUgdmFsdWVzIGlmIHRoZXkgb2NjdXJcbiAqIHRvbyBmcmVxdWVudGx5LlxuICogQG1ldGhvZCBkZWJvdW5jZVRpbWVcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlVGltZShkdWVUaW1lLCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoc2NoZWR1bGVyID09PSB2b2lkIDApIHsgc2NoZWR1bGVyID0gYXN5bmNfMS5hc3luYzsgfVxuICAgIHJldHVybiB0aGlzLmxpZnQobmV3IERlYm91bmNlVGltZU9wZXJhdG9yKGR1ZVRpbWUsIHNjaGVkdWxlcikpO1xufVxuZXhwb3J0cy5kZWJvdW5jZVRpbWUgPSBkZWJvdW5jZVRpbWU7XG52YXIgRGVib3VuY2VUaW1lT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlYm91bmNlVGltZU9wZXJhdG9yKGR1ZVRpbWUsIHNjaGVkdWxlcikge1xuICAgICAgICB0aGlzLmR1ZVRpbWUgPSBkdWVUaW1lO1xuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICB9XG4gICAgRGVib3VuY2VUaW1lT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBEZWJvdW5jZVRpbWVTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMuZHVlVGltZSwgdGhpcy5zY2hlZHVsZXIpKTtcbiAgICB9O1xuICAgIHJldHVybiBEZWJvdW5jZVRpbWVPcGVyYXRvcjtcbn0oKSk7XG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xudmFyIERlYm91bmNlVGltZVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEZWJvdW5jZVRpbWVTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERlYm91bmNlVGltZVN1YnNjcmliZXIoZGVzdGluYXRpb24sIGR1ZVRpbWUsIHNjaGVkdWxlcikge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbik7XG4gICAgICAgIHRoaXMuZHVlVGltZSA9IGR1ZVRpbWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICB0aGlzLmRlYm91bmNlZFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdFZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5oYXNWYWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBEZWJvdW5jZVRpbWVTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNsZWFyRGVib3VuY2UoKTtcbiAgICAgICAgdGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5oYXNWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMuZGVib3VuY2VkU3Vic2NyaXB0aW9uID0gdGhpcy5zY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2hOZXh0LCB0aGlzLmR1ZVRpbWUsIHRoaXMpKTtcbiAgICB9O1xuICAgIERlYm91bmNlVGltZVN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZWJvdW5jZWROZXh0KCk7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9O1xuICAgIERlYm91bmNlVGltZVN1YnNjcmliZXIucHJvdG90eXBlLmRlYm91bmNlZE5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJEZWJvdW5jZSgpO1xuICAgICAgICBpZiAodGhpcy5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHRoaXMubGFzdFZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMubGFzdFZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGVib3VuY2VUaW1lU3Vic2NyaWJlci5wcm90b3R5cGUuY2xlYXJEZWJvdW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRlYm91bmNlZFN1YnNjcmlwdGlvbiA9IHRoaXMuZGVib3VuY2VkU3Vic2NyaXB0aW9uO1xuICAgICAgICBpZiAoZGVib3VuY2VkU3Vic2NyaXB0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShkZWJvdW5jZWRTdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgZGVib3VuY2VkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLmRlYm91bmNlZFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBEZWJvdW5jZVRpbWVTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuZnVuY3Rpb24gZGlzcGF0Y2hOZXh0KHN1YnNjcmliZXIpIHtcbiAgICBzdWJzY3JpYmVyLmRlYm91bmNlZE5leHQoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlYm91bmNlVGltZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9vcGVyYXRvci9kZWJvdW5jZVRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZSgnLi4vU3Vic2NyaWJlcicpO1xudmFyIHRyeUNhdGNoXzEgPSByZXF1aXJlKCcuLi91dGlsL3RyeUNhdGNoJyk7XG52YXIgZXJyb3JPYmplY3RfMSA9IHJlcXVpcmUoJy4uL3V0aWwvZXJyb3JPYmplY3QnKTtcbi8qIHRzbGludDplbmFibGU6bWF4LWxpbmUtbGVuZ3RoICovXG4vKipcbiAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGFsbCBpdGVtcyBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSB0aGF0IGFyZSBkaXN0aW5jdCBieSBjb21wYXJpc29uIGZyb20gdGhlIHByZXZpb3VzIGl0ZW0uXG4gKlxuICogSWYgYSBjb21wYXJhdG9yIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB0aGVuIGl0IHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGl0ZW0gdG8gdGVzdCBmb3Igd2hldGhlciBvciBub3QgdGhhdCB2YWx1ZSBzaG91bGQgYmUgZW1pdHRlZC5cbiAqXG4gKiBJZiBhIGNvbXBhcmF0b3IgZnVuY3Rpb24gaXMgbm90IHByb3ZpZGVkLCBhbiBlcXVhbGl0eSBjaGVjayBpcyB1c2VkIGJ5IGRlZmF1bHQuXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+QSBzaW1wbGUgZXhhbXBsZSB3aXRoIG51bWJlcnM8L2NhcHRpb24+XG4gKiBPYnNlcnZhYmxlLm9mKDEsIDEsIDIsIDIsIDIsIDEsIDEsIDIsIDMsIDMsIDQpXG4gKiAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gKiAgIC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7IC8vIDEsIDIsIDEsIDIsIDMsIDRcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5BbiBleGFtcGxlIHVzaW5nIGEgY29tcGFyZSBmdW5jdGlvbjwvY2FwdGlvbj5cbiAqIGludGVyZmFjZSBQZXJzb24ge1xuICogICAgYWdlOiBudW1iZXIsXG4gKiAgICBuYW1lOiBzdHJpbmdcbiAqIH1cbiAqXG4gKiBPYnNlcnZhYmxlLm9mPFBlcnNvbj4oXG4gKiAgICAgeyBhZ2U6IDQsIG5hbWU6ICdGb28nfSxcbiAqICAgICB7IGFnZTogNywgbmFtZTogJ0Jhcid9LFxuICogICAgIHsgYWdlOiA1LCBuYW1lOiAnRm9vJ30pXG4gKiAgICAgeyBhZ2U6IDYsIG5hbWU6ICdGb28nfSlcbiAqICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKHA6IFBlcnNvbiwgcTogUGVyc29uKSA9PiBwLm5hbWUgPT09IHEubmFtZSlcbiAqICAgICAuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIC8vIGRpc3BsYXlzOlxuICogLy8geyBhZ2U6IDQsIG5hbWU6ICdGb28nIH1cbiAqIC8vIHsgYWdlOiA3LCBuYW1lOiAnQmFyJyB9XG4gKiAvLyB7IGFnZTogNSwgbmFtZTogJ0ZvbycgfVxuICpcbiAqIEBzZWUge0BsaW5rIGRpc3RpbmN0fVxuICogQHNlZSB7QGxpbmsgZGlzdGluY3RVbnRpbEtleUNoYW5nZWR9XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2NvbXBhcmVdIE9wdGlvbmFsIGNvbXBhcmlzb24gZnVuY3Rpb24gY2FsbGVkIHRvIHRlc3QgaWYgYW4gaXRlbSBpcyBkaXN0aW5jdCBmcm9tIHRoZSBwcmV2aW91cyBpdGVtIGluIHRoZSBzb3VyY2UuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgaXRlbXMgZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUgd2l0aCBkaXN0aW5jdCB2YWx1ZXMuXG4gKiBAbWV0aG9kIGRpc3RpbmN0VW50aWxDaGFuZ2VkXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5mdW5jdGlvbiBkaXN0aW5jdFVudGlsQ2hhbmdlZChjb21wYXJlLCBrZXlTZWxlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLmxpZnQobmV3IERpc3RpbmN0VW50aWxDaGFuZ2VkT3BlcmF0b3IoY29tcGFyZSwga2V5U2VsZWN0b3IpKTtcbn1cbmV4cG9ydHMuZGlzdGluY3RVbnRpbENoYW5nZWQgPSBkaXN0aW5jdFVudGlsQ2hhbmdlZDtcbnZhciBEaXN0aW5jdFVudGlsQ2hhbmdlZE9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEaXN0aW5jdFVudGlsQ2hhbmdlZE9wZXJhdG9yKGNvbXBhcmUsIGtleVNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuY29tcGFyZSA9IGNvbXBhcmU7XG4gICAgICAgIHRoaXMua2V5U2VsZWN0b3IgPSBrZXlTZWxlY3RvcjtcbiAgICB9XG4gICAgRGlzdGluY3RVbnRpbENoYW5nZWRPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IERpc3RpbmN0VW50aWxDaGFuZ2VkU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmNvbXBhcmUsIHRoaXMua2V5U2VsZWN0b3IpKTtcbiAgICB9O1xuICAgIHJldHVybiBEaXN0aW5jdFVudGlsQ2hhbmdlZE9wZXJhdG9yO1xufSgpKTtcbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG52YXIgRGlzdGluY3RVbnRpbENoYW5nZWRTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGlzdGluY3RVbnRpbENoYW5nZWRTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERpc3RpbmN0VW50aWxDaGFuZ2VkU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgY29tcGFyZSwga2V5U2VsZWN0b3IpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pO1xuICAgICAgICB0aGlzLmtleVNlbGVjdG9yID0ga2V5U2VsZWN0b3I7XG4gICAgICAgIHRoaXMuaGFzS2V5ID0gZmFsc2U7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcGFyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5jb21wYXJlID0gY29tcGFyZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBEaXN0aW5jdFVudGlsQ2hhbmdlZFN1YnNjcmliZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICByZXR1cm4geCA9PT0geTtcbiAgICB9O1xuICAgIERpc3RpbmN0VW50aWxDaGFuZ2VkU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGtleVNlbGVjdG9yID0gdGhpcy5rZXlTZWxlY3RvcjtcbiAgICAgICAgdmFyIGtleSA9IHZhbHVlO1xuICAgICAgICBpZiAoa2V5U2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGtleSA9IHRyeUNhdGNoXzEudHJ5Q2F0Y2godGhpcy5rZXlTZWxlY3RvcikodmFsdWUpO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gZXJyb3JPYmplY3RfMS5lcnJvck9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycm9yT2JqZWN0XzEuZXJyb3JPYmplY3QuZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5oYXNLZXkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRyeUNhdGNoXzEudHJ5Q2F0Y2godGhpcy5jb21wYXJlKSh0aGlzLmtleSwga2V5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqZWN0XzEuZXJyb3JPYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnJvck9iamVjdF8xLmVycm9yT2JqZWN0LmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYXNLZXkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCb29sZWFuKHJlc3VsdCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBEaXN0aW5jdFVudGlsQ2hhbmdlZFN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaXN0aW5jdFVudGlsQ2hhbmdlZC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZC5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKCcuLi9TdWJzY3JpYmVyJyk7XG4vKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuLyoqXG4gKiBQZXJmb3JtIGEgc2lkZSBlZmZlY3QgZm9yIGV2ZXJ5IGVtaXNzaW9uIG9uIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSwgYnV0IHJldHVyblxuICogYW4gT2JzZXJ2YWJsZSB0aGF0IGlzIGlkZW50aWNhbCB0byB0aGUgc291cmNlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5JbnRlcmNlcHRzIGVhY2ggZW1pc3Npb24gb24gdGhlIHNvdXJjZSBhbmQgcnVucyBhXG4gKiBmdW5jdGlvbiwgYnV0IHJldHVybnMgYW4gb3V0cHV0IHdoaWNoIGlzIGlkZW50aWNhbCB0byB0aGUgc291cmNlLjwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL2RvLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIFJldHVybnMgYSBtaXJyb3JlZCBPYnNlcnZhYmxlIG9mIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSwgYnV0IG1vZGlmaWVkIHNvIHRoYXRcbiAqIHRoZSBwcm92aWRlZCBPYnNlcnZlciBpcyBjYWxsZWQgdG8gcGVyZm9ybSBhIHNpZGUgZWZmZWN0IGZvciBldmVyeSB2YWx1ZSxcbiAqIGVycm9yLCBhbmQgY29tcGxldGlvbiBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UuIEFueSBlcnJvcnMgdGhhdCBhcmUgdGhyb3duIGluXG4gKiB0aGUgYWZvcmVtZW50aW9uZWQgT2JzZXJ2ZXIgb3IgaGFuZGxlcnMgYXJlIHNhZmVseSBzZW50IGRvd24gdGhlIGVycm9yIHBhdGhcbiAqIG9mIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS5cbiAqXG4gKiBUaGlzIG9wZXJhdG9yIGlzIHVzZWZ1bCBmb3IgZGVidWdnaW5nIHlvdXIgT2JzZXJ2YWJsZXMgZm9yIHRoZSBjb3JyZWN0IHZhbHVlc1xuICogb3IgcGVyZm9ybWluZyBvdGhlciBzaWRlIGVmZmVjdHMuXG4gKlxuICogTm90ZTogdGhpcyBpcyBkaWZmZXJlbnQgdG8gYSBgc3Vic2NyaWJlYCBvbiB0aGUgT2JzZXJ2YWJsZS4gSWYgdGhlIE9ic2VydmFibGVcbiAqIHJldHVybmVkIGJ5IGBkb2AgaXMgbm90IHN1YnNjcmliZWQsIHRoZSBzaWRlIGVmZmVjdHMgc3BlY2lmaWVkIGJ5IHRoZVxuICogT2JzZXJ2ZXIgd2lsbCBuZXZlciBoYXBwZW4uIGBkb2AgdGhlcmVmb3JlIHNpbXBseSBzcGllcyBvbiBleGlzdGluZ1xuICogZXhlY3V0aW9uLCBpdCBkb2VzIG5vdCB0cmlnZ2VyIGFuIGV4ZWN1dGlvbiB0byBoYXBwZW4gbGlrZSBgc3Vic2NyaWJlYCBkb2VzLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk1hcCBldmVyeSBldmVyeSBjbGljayB0byB0aGUgY2xpZW50WCBwb3NpdGlvbiBvZiB0aGF0IGNsaWNrLCB3aGlsZSBhbHNvIGxvZ2dpbmcgdGhlIGNsaWNrIGV2ZW50PC9jYXB0aW9uPlxuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciBwb3NpdGlvbnMgPSBjbGlja3NcbiAqICAgLmRvKGV2ID0+IGNvbnNvbGUubG9nKGV2KSlcbiAqICAgLm1hcChldiA9PiBldi5jbGllbnRYKTtcbiAqIHBvc2l0aW9ucy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgbWFwfVxuICogQHNlZSB7QGxpbmsgc3Vic2NyaWJlfVxuICpcbiAqIEBwYXJhbSB7T2JzZXJ2ZXJ8ZnVuY3Rpb259IFtuZXh0T3JPYnNlcnZlcl0gQSBub3JtYWwgT2JzZXJ2ZXIgb2JqZWN0IG9yIGFcbiAqIGNhbGxiYWNrIGZvciBgbmV4dGAuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZXJyb3JdIENhbGxiYWNrIGZvciBlcnJvcnMgaW4gdGhlIHNvdXJjZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjb21wbGV0ZV0gQ2FsbGJhY2sgZm9yIHRoZSBjb21wbGV0aW9uIG9mIHRoZSBzb3VyY2UuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbiBPYnNlcnZhYmxlIGlkZW50aWNhbCB0byB0aGUgc291cmNlLCBidXQgcnVucyB0aGVcbiAqIHNwZWNpZmllZCBPYnNlcnZlciBvciBjYWxsYmFjayhzKSBmb3IgZWFjaCBpdGVtLlxuICogQG1ldGhvZCBkb1xuICogQG5hbWUgZG9cbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmZ1bmN0aW9uIF9kbyhuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgcmV0dXJuIHRoaXMubGlmdChuZXcgRG9PcGVyYXRvcihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKSk7XG59XG5leHBvcnRzLl9kbyA9IF9kbztcbnZhciBEb09wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEb09wZXJhdG9yKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5uZXh0T3JPYnNlcnZlciA9IG5leHRPck9ic2VydmVyO1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICB9XG4gICAgRG9PcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IERvU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLm5leHRPck9ic2VydmVyLCB0aGlzLmVycm9yLCB0aGlzLmNvbXBsZXRlKSk7XG4gICAgfTtcbiAgICByZXR1cm4gRG9PcGVyYXRvcjtcbn0oKSk7XG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xudmFyIERvU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERvU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEb1N1YnNjcmliZXIoZGVzdGluYXRpb24sIG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pO1xuICAgICAgICB2YXIgc2FmZVN1YnNjcmliZXIgPSBuZXcgU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgIHNhZmVTdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRkKHNhZmVTdWJzY3JpYmVyKTtcbiAgICAgICAgdGhpcy5zYWZlU3Vic2NyaWJlciA9IHNhZmVTdWJzY3JpYmVyO1xuICAgIH1cbiAgICBEb1N1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBzYWZlU3Vic2NyaWJlciA9IHRoaXMuc2FmZVN1YnNjcmliZXI7XG4gICAgICAgIHNhZmVTdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICBpZiAoc2FmZVN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3duKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKHNhZmVTdWJzY3JpYmVyLnN5bmNFcnJvclZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERvU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB2YXIgc2FmZVN1YnNjcmliZXIgPSB0aGlzLnNhZmVTdWJzY3JpYmVyO1xuICAgICAgICBzYWZlU3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICBpZiAoc2FmZVN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3duKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKHNhZmVTdWJzY3JpYmVyLnN5bmNFcnJvclZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRG9TdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzYWZlU3Vic2NyaWJlciA9IHRoaXMuc2FmZVN1YnNjcmliZXI7XG4gICAgICAgIHNhZmVTdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIGlmIChzYWZlU3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3Ioc2FmZVN1YnNjcmliZXIuc3luY0Vycm9yVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRG9TdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZG8uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvb3BlcmF0b3IvZG8uanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgT3V0ZXJTdWJzY3JpYmVyXzEgPSByZXF1aXJlKCcuLi9PdXRlclN1YnNjcmliZXInKTtcbnZhciBzdWJzY3JpYmVUb1Jlc3VsdF8xID0gcmVxdWlyZSgnLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdCcpO1xuLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbi8qKlxuICogUHJvamVjdHMgZWFjaCBzb3VyY2UgdmFsdWUgdG8gYW4gT2JzZXJ2YWJsZSB3aGljaCBpcyBtZXJnZWQgaW4gdGhlIG91dHB1dFxuICogT2JzZXJ2YWJsZSwgZW1pdHRpbmcgdmFsdWVzIG9ubHkgZnJvbSB0aGUgbW9zdCByZWNlbnRseSBwcm9qZWN0ZWQgT2JzZXJ2YWJsZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+TWFwcyBlYWNoIHZhbHVlIHRvIGFuIE9ic2VydmFibGUsIHRoZW4gZmxhdHRlbnMgYWxsIG9mXG4gKiB0aGVzZSBpbm5lciBPYnNlcnZhYmxlcyB1c2luZyB7QGxpbmsgc3dpdGNofS48L3NwYW4+XG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9zd2l0Y2hNYXAucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgaXRlbXMgYmFzZWQgb24gYXBwbHlpbmcgYSBmdW5jdGlvbiB0aGF0IHlvdVxuICogc3VwcGx5IHRvIGVhY2ggaXRlbSBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSwgd2hlcmUgdGhhdCBmdW5jdGlvblxuICogcmV0dXJucyBhbiAoc28tY2FsbGVkIFwiaW5uZXJcIikgT2JzZXJ2YWJsZS4gRWFjaCB0aW1lIGl0IG9ic2VydmVzIG9uZSBvZiB0aGVzZVxuICogaW5uZXIgT2JzZXJ2YWJsZXMsIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZSBiZWdpbnMgZW1pdHRpbmcgdGhlIGl0ZW1zIGVtaXR0ZWQgYnlcbiAqIHRoYXQgaW5uZXIgT2JzZXJ2YWJsZS4gV2hlbiBhIG5ldyBpbm5lciBPYnNlcnZhYmxlIGlzIGVtaXR0ZWQsIGBzd2l0Y2hNYXBgXG4gKiBzdG9wcyBlbWl0dGluZyBpdGVtcyBmcm9tIHRoZSBlYXJsaWVyLWVtaXR0ZWQgaW5uZXIgT2JzZXJ2YWJsZSBhbmQgYmVnaW5zXG4gKiBlbWl0dGluZyBpdGVtcyBmcm9tIHRoZSBuZXcgb25lLiBJdCBjb250aW51ZXMgdG8gYmVoYXZlIGxpa2UgdGhpcyBmb3JcbiAqIHN1YnNlcXVlbnQgaW5uZXIgT2JzZXJ2YWJsZXMuXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+UmVydW4gYW4gaW50ZXJ2YWwgT2JzZXJ2YWJsZSBvbiBldmVyeSBjbGljayBldmVudDwvY2FwdGlvbj5cbiAqIHZhciBjbGlja3MgPSBSeC5PYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiB2YXIgcmVzdWx0ID0gY2xpY2tzLnN3aXRjaE1hcCgoZXYpID0+IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCkpO1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAc2VlIHtAbGluayBjb25jYXRNYXB9XG4gKiBAc2VlIHtAbGluayBleGhhdXN0TWFwfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VNYXB9XG4gKiBAc2VlIHtAbGluayBzd2l0Y2h9XG4gKiBAc2VlIHtAbGluayBzd2l0Y2hNYXBUb31cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHZhbHVlOiBULCA/aW5kZXg6IG51bWJlcik6IE9ic2VydmFibGVJbnB1dH0gcHJvamVjdCBBIGZ1bmN0aW9uXG4gKiB0aGF0LCB3aGVuIGFwcGxpZWQgdG8gYW4gaXRlbSBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSwgcmV0dXJucyBhblxuICogT2JzZXJ2YWJsZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24ob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogSSwgb3V0ZXJJbmRleDogbnVtYmVyLCBpbm5lckluZGV4OiBudW1iZXIpOiBhbnl9IFtyZXN1bHRTZWxlY3Rvcl1cbiAqIEEgZnVuY3Rpb24gdG8gcHJvZHVjZSB0aGUgdmFsdWUgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlIGJhc2VkIG9uIHRoZSB2YWx1ZXNcbiAqIGFuZCB0aGUgaW5kaWNlcyBvZiB0aGUgc291cmNlIChvdXRlcikgZW1pc3Npb24gYW5kIHRoZSBpbm5lciBPYnNlcnZhYmxlXG4gKiBlbWlzc2lvbi4gVGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiBhcmU6XG4gKiAtIGBvdXRlclZhbHVlYDogdGhlIHZhbHVlIHRoYXQgY2FtZSBmcm9tIHRoZSBzb3VyY2VcbiAqIC0gYGlubmVyVmFsdWVgOiB0aGUgdmFsdWUgdGhhdCBjYW1lIGZyb20gdGhlIHByb2plY3RlZCBPYnNlcnZhYmxlXG4gKiAtIGBvdXRlckluZGV4YDogdGhlIFwiaW5kZXhcIiBvZiB0aGUgdmFsdWUgdGhhdCBjYW1lIGZyb20gdGhlIHNvdXJjZVxuICogLSBgaW5uZXJJbmRleGA6IHRoZSBcImluZGV4XCIgb2YgdGhlIHZhbHVlIGZyb20gdGhlIHByb2plY3RlZCBPYnNlcnZhYmxlXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIHJlc3VsdCBvZiBhcHBseWluZyB0aGVcbiAqIHByb2plY3Rpb24gZnVuY3Rpb24gKGFuZCB0aGUgb3B0aW9uYWwgYHJlc3VsdFNlbGVjdG9yYCkgdG8gZWFjaCBpdGVtIGVtaXR0ZWRcbiAqIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBhbmQgdGFraW5nIG9ubHkgdGhlIHZhbHVlcyBmcm9tIHRoZSBtb3N0IHJlY2VudGx5XG4gKiBwcm9qZWN0ZWQgaW5uZXIgT2JzZXJ2YWJsZS5cbiAqIEBtZXRob2Qgc3dpdGNoTWFwXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5mdW5jdGlvbiBzd2l0Y2hNYXAocHJvamVjdCwgcmVzdWx0U2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5saWZ0KG5ldyBTd2l0Y2hNYXBPcGVyYXRvcihwcm9qZWN0LCByZXN1bHRTZWxlY3RvcikpO1xufVxuZXhwb3J0cy5zd2l0Y2hNYXAgPSBzd2l0Y2hNYXA7XG52YXIgU3dpdGNoTWFwT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN3aXRjaE1hcE9wZXJhdG9yKHByb2plY3QsIHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMucmVzdWx0U2VsZWN0b3IgPSByZXN1bHRTZWxlY3RvcjtcbiAgICB9XG4gICAgU3dpdGNoTWFwT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBTd2l0Y2hNYXBTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMucHJvamVjdCwgdGhpcy5yZXN1bHRTZWxlY3RvcikpO1xuICAgIH07XG4gICAgcmV0dXJuIFN3aXRjaE1hcE9wZXJhdG9yO1xufSgpKTtcbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG52YXIgU3dpdGNoTWFwU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN3aXRjaE1hcFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3dpdGNoTWFwU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcHJvamVjdCwgcmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnJlc3VsdFNlbGVjdG9yID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIH1cbiAgICBTd2l0Y2hNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4Kys7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnByb2plY3QodmFsdWUsIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lubmVyU3ViKHJlc3VsdCwgdmFsdWUsIGluZGV4KTtcbiAgICB9O1xuICAgIFN3aXRjaE1hcFN1YnNjcmliZXIucHJvdG90eXBlLl9pbm5lclN1YiA9IGZ1bmN0aW9uIChyZXN1bHQsIHZhbHVlLCBpbmRleCkge1xuICAgICAgICB2YXIgaW5uZXJTdWJzY3JpcHRpb24gPSB0aGlzLmlubmVyU3Vic2NyaXB0aW9uO1xuICAgICAgICBpZiAoaW5uZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGlubmVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGQodGhpcy5pbm5lclN1YnNjcmlwdGlvbiA9IHN1YnNjcmliZVRvUmVzdWx0XzEuc3Vic2NyaWJlVG9SZXN1bHQodGhpcywgcmVzdWx0LCB2YWx1ZSwgaW5kZXgpKTtcbiAgICB9O1xuICAgIFN3aXRjaE1hcFN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlubmVyU3Vic2NyaXB0aW9uID0gdGhpcy5pbm5lclN1YnNjcmlwdGlvbjtcbiAgICAgICAgaWYgKCFpbm5lclN1YnNjcmlwdGlvbiB8fCBpbm5lclN1YnNjcmlwdGlvbi5jbG9zZWQpIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuX2NvbXBsZXRlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN3aXRjaE1hcFN1YnNjcmliZXIucHJvdG90eXBlLl91bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbm5lclN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfTtcbiAgICBTd2l0Y2hNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlDb21wbGV0ZSA9IGZ1bmN0aW9uIChpbm5lclN1Yikge1xuICAgICAgICB0aGlzLnJlbW92ZShpbm5lclN1Yik7XG4gICAgICAgIHRoaXMuaW5uZXJTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuX2NvbXBsZXRlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN3aXRjaE1hcFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCwgaW5uZXJTdWIpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyeU5vdGlmeU5leHQob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoaW5uZXJWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN3aXRjaE1hcFN1YnNjcmliZXIucHJvdG90eXBlLl90cnlOb3RpZnlOZXh0ID0gZnVuY3Rpb24gKG91dGVyVmFsdWUsIGlubmVyVmFsdWUsIG91dGVySW5kZXgsIGlubmVySW5kZXgpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucmVzdWx0U2VsZWN0b3Iob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChyZXN1bHQpO1xuICAgIH07XG4gICAgcmV0dXJuIFN3aXRjaE1hcFN1YnNjcmliZXI7XG59KE91dGVyU3Vic2NyaWJlcl8xLk91dGVyU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dpdGNoTWFwLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yeGpzL29wZXJhdG9yL3N3aXRjaE1hcC5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgcm9vdF8xID0gcmVxdWlyZSgnLi4vdXRpbC9yb290Jyk7XG4vKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuLyoqXG4gKiBDb252ZXJ0cyBhbiBPYnNlcnZhYmxlIHNlcXVlbmNlIHRvIGEgRVMyMDE1IGNvbXBsaWFudCBwcm9taXNlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBVc2luZyBub3JtYWwgRVMyMDE1XG4gKiBsZXQgc291cmNlID0gUnguT2JzZXJ2YWJsZVxuICogICAuanVzdCg0MilcbiAqICAgLnRvUHJvbWlzZSgpO1xuICpcbiAqIHNvdXJjZS50aGVuKCh2YWx1ZSkgPT4gY29uc29sZS5sb2coJ1ZhbHVlOiAlcycsIHZhbHVlKSk7XG4gKiAvLyA9PiBWYWx1ZTogNDJcbiAqXG4gKiAvLyBSZWplY3RlZCBQcm9taXNlXG4gKiAvLyBVc2luZyBub3JtYWwgRVMyMDE1XG4gKiBsZXQgc291cmNlID0gUnguT2JzZXJ2YWJsZVxuICogICAudGhyb3cobmV3IEVycm9yKCd3b29wcycpKVxuICogICAudG9Qcm9taXNlKCk7XG4gKlxuICogc291cmNlXG4gKiAgIC50aGVuKCh2YWx1ZSkgPT4gY29uc29sZS5sb2coJ1ZhbHVlOiAlcycsIHZhbHVlKSlcbiAqICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJXMnLCBlcnIpKTtcbiAqIC8vID0+IEVycm9yOiBFcnJvcjogd29vcHNcbiAqXG4gKiAvLyBTZXR0aW5nIHZpYSB0aGUgY29uZmlnXG4gKiBSeC5jb25maWcuUHJvbWlzZSA9IFJTVlAuUHJvbWlzZTtcbiAqXG4gKiBsZXQgc291cmNlID0gUnguT2JzZXJ2YWJsZVxuICogICAub2YoNDIpXG4gKiAgIC50b1Byb21pc2UoKTtcbiAqXG4gKiBzb3VyY2UudGhlbigodmFsdWUpID0+IGNvbnNvbGUubG9nKCdWYWx1ZTogJXMnLCB2YWx1ZSkpO1xuICogLy8gPT4gVmFsdWU6IDQyXG4gKlxuICogLy8gU2V0dGluZyB2aWEgdGhlIG1ldGhvZFxuICogbGV0IHNvdXJjZSA9IFJ4Lk9ic2VydmFibGVcbiAqICAgLmp1c3QoNDIpXG4gKiAgIC50b1Byb21pc2UoUlNWUC5Qcm9taXNlKTtcbiAqXG4gKiBzb3VyY2UudGhlbigodmFsdWUpID0+IGNvbnNvbGUubG9nKCdWYWx1ZTogJXMnLCB2YWx1ZSkpO1xuICogLy8gPT4gVmFsdWU6IDQyXG4gKlxuICogQHBhcmFtIFByb21pc2VDdG9yIHByb21pc2UgVGhlIGNvbnN0cnVjdG9yIG9mIHRoZSBwcm9taXNlLiBJZiBub3QgcHJvdmlkZWQsXG4gKiBpdCB3aWxsIGxvb2sgZm9yIGEgY29uc3RydWN0b3IgZmlyc3QgaW4gUnguY29uZmlnLlByb21pc2UgdGhlbiBmYWxsIGJhY2sgdG9cbiAqIHRoZSBuYXRpdmUgUHJvbWlzZSBjb25zdHJ1Y3RvciBpZiBhdmFpbGFibGUuXG4gKiBAcmV0dXJuIHtQcm9taXNlPFQ+fSBBbiBFUzIwMTUgY29tcGF0aWJsZSBwcm9taXNlIHdpdGggdGhlIGxhc3QgdmFsdWUgZnJvbVxuICogdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gKiBAbWV0aG9kIHRvUHJvbWlzZVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZnVuY3Rpb24gdG9Qcm9taXNlKFByb21pc2VDdG9yKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAoIVByb21pc2VDdG9yKSB7XG4gICAgICAgIGlmIChyb290XzEucm9vdC5SeCAmJiByb290XzEucm9vdC5SeC5jb25maWcgJiYgcm9vdF8xLnJvb3QuUnguY29uZmlnLlByb21pc2UpIHtcbiAgICAgICAgICAgIFByb21pc2VDdG9yID0gcm9vdF8xLnJvb3QuUnguY29uZmlnLlByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocm9vdF8xLnJvb3QuUHJvbWlzZSkge1xuICAgICAgICAgICAgUHJvbWlzZUN0b3IgPSByb290XzEucm9vdC5Qcm9taXNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghUHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBQcm9taXNlIGltcGwgZm91bmQnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlQ3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgX3RoaXMuc3Vic2NyaWJlKGZ1bmN0aW9uICh4KSB7IHJldHVybiB2YWx1ZSA9IHg7IH0sIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIHJlamVjdChlcnIpOyB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiByZXNvbHZlKHZhbHVlKTsgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLnRvUHJvbWlzZSA9IHRvUHJvbWlzZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvUHJvbWlzZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9vcGVyYXRvci90b1Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKCcuLi9TdWJzY3JpcHRpb24nKTtcbi8qKlxuICogQSB1bml0IG9mIHdvcmsgdG8gYmUgZXhlY3V0ZWQgaW4gYSB7QGxpbmsgU2NoZWR1bGVyfS4gQW4gYWN0aW9uIGlzIHR5cGljYWxseVxuICogY3JlYXRlZCBmcm9tIHdpdGhpbiBhIFNjaGVkdWxlciBhbmQgYW4gUnhKUyB1c2VyIGRvZXMgbm90IG5lZWQgdG8gY29uY2VyblxuICogdGhlbXNlbHZlcyBhYm91dCBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGFuIEFjdGlvbi5cbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgQWN0aW9uPFQ+IGV4dGVuZHMgU3Vic2NyaXB0aW9uIHtcbiAqICAgbmV3IChzY2hlZHVsZXI6IFNjaGVkdWxlciwgd29yazogKHN0YXRlPzogVCkgPT4gdm9pZCk7XG4gKiAgIHNjaGVkdWxlKHN0YXRlPzogVCwgZGVsYXk6IG51bWJlciA9IDApOiBTdWJzY3JpcHRpb247XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAY2xhc3MgQWN0aW9uPFQ+XG4gKi9cbnZhciBBY3Rpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2NoZWR1bGVzIHRoaXMgYWN0aW9uIG9uIGl0cyBwYXJlbnQgU2NoZWR1bGVyIGZvciBleGVjdXRpb24uIE1heSBiZSBwYXNzZWRcbiAgICAgKiBzb21lIGNvbnRleHQgb2JqZWN0LCBgc3RhdGVgLiBNYXkgaGFwcGVuIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZSxcbiAgICAgKiBhY2NvcmRpbmcgdG8gdGhlIGBkZWxheWAgcGFyYW1ldGVyLCBpZiBzcGVjaWZpZWQuXG4gICAgICogQHBhcmFtIHtUfSBbc3RhdGVdIFNvbWUgY29udGV4dHVhbCBkYXRhIHRoYXQgdGhlIGB3b3JrYCBmdW5jdGlvbiB1c2VzIHdoZW5cbiAgICAgKiBjYWxsZWQgYnkgdGhlIFNjaGVkdWxlci5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5XSBUaW1lIHRvIHdhaXQgYmVmb3JlIGV4ZWN1dGluZyB0aGUgd29yaywgd2hlcmUgdGhlXG4gICAgICogdGltZSB1bml0IGlzIGltcGxpY2l0IGFuZCBkZWZpbmVkIGJ5IHRoZSBTY2hlZHVsZXIuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBBY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gQWN0aW9uO1xufShTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24pKTtcbmV4cG9ydHMuQWN0aW9uID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWN0aW9uLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yeGpzL3NjaGVkdWxlci9BY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgcm9vdF8xID0gcmVxdWlyZSgnLi4vdXRpbC9yb290Jyk7XG52YXIgQWN0aW9uXzEgPSByZXF1aXJlKCcuL0FjdGlvbicpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbnZhciBBc3luY0FjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFzeW5jQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzeW5jQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIHdvcmspO1xuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgdGhpcy53b3JrID0gd29yaztcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWx3YXlzIHJlcGxhY2UgdGhlIGN1cnJlbnQgc3RhdGUgd2l0aCB0aGUgbmV3IHN0YXRlLlxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIC8vIFNldCB0aGUgcGVuZGluZyBmbGFnIGluZGljYXRpbmcgdGhhdCB0aGlzIGFjdGlvbiBoYXMgYmVlbiBzY2hlZHVsZWQsIG9yXG4gICAgICAgIC8vIGhhcyByZWN1cnNpdmVseSByZXNjaGVkdWxlZCBpdHNlbGYuXG4gICAgICAgIHRoaXMucGVuZGluZyA9IHRydWU7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gSW1wb3J0YW50IGltcGxlbWVudGF0aW9uIG5vdGU6XG4gICAgICAgIC8vXG4gICAgICAgIC8vIEFjdGlvbnMgb25seSBleGVjdXRlIG9uY2UgYnkgZGVmYXVsdCwgdW5sZXNzIHJlc2NoZWR1bGVkIGZyb20gd2l0aGluIHRoZVxuICAgICAgICAvLyBzY2hlZHVsZWQgY2FsbGJhY2suIFRoaXMgYWxsb3dzIHVzIHRvIGltcGxlbWVudCBzaW5nbGUgYW5kIHJlcGVhdFxuICAgICAgICAvLyBhY3Rpb25zIHZpYSB0aGUgc2FtZSBjb2RlIHBhdGgsIHdpdGhvdXQgYWRkaW5nIEFQSSBzdXJmYWNlIGFyZWEsIGFzIHdlbGxcbiAgICAgICAgLy8gYXMgbWltaWMgdHJhZGl0aW9uYWwgcmVjdXJzaW9uIGJ1dCBhY3Jvc3MgYXN5bmNocm9ub3VzIGJvdW5kYXJpZXMuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEhvd2V2ZXIsIEpTIHJ1bnRpbWVzIGFuZCB0aW1lcnMgZGlzdGluZ3Vpc2ggYmV0d2VlbiBpbnRlcnZhbHMgYWNoaWV2ZWQgYnlcbiAgICAgICAgLy8gc2VyaWFsIGBzZXRUaW1lb3V0YCBjYWxscyB2cy4gYSBzaW5nbGUgYHNldEludGVydmFsYCBjYWxsLiBBbiBpbnRlcnZhbCBvZlxuICAgICAgICAvLyBzZXJpYWwgYHNldFRpbWVvdXRgIGNhbGxzIGNhbiBiZSBpbmRpdmlkdWFsbHkgZGVsYXllZCwgd2hpY2ggZGVsYXlzXG4gICAgICAgIC8vIHNjaGVkdWxpbmcgdGhlIG5leHQgYHNldFRpbWVvdXRgLCBhbmQgc28gb24uIGBzZXRJbnRlcnZhbGAgYXR0ZW1wdHMgdG9cbiAgICAgICAgLy8gZ3VhcmFudGVlIHRoZSBpbnRlcnZhbCBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgbW9yZSBwcmVjaXNlbHkgdG8gdGhlXG4gICAgICAgIC8vIGludGVydmFsIHBlcmlvZCwgcmVnYXJkbGVzcyBvZiBsb2FkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGVyZWZvcmUsIHdlIHVzZSBgc2V0SW50ZXJ2YWxgIHRvIHNjaGVkdWxlIHNpbmdsZSBhbmQgcmVwZWF0IGFjdGlvbnMuXG4gICAgICAgIC8vIElmIHRoZSBhY3Rpb24gcmVzY2hlZHVsZXMgaXRzZWxmIHdpdGggdGhlIHNhbWUgZGVsYXksIHRoZSBpbnRlcnZhbCBpcyBub3RcbiAgICAgICAgLy8gY2FuY2VsZWQuIElmIHRoZSBhY3Rpb24gZG9lc24ndCByZXNjaGVkdWxlLCBvciByZXNjaGVkdWxlcyB3aXRoIGFcbiAgICAgICAgLy8gZGlmZmVyZW50IGRlbGF5LCB0aGUgaW50ZXJ2YWwgd2lsbCBiZSBjYW5jZWxlZCBhZnRlciBzY2hlZHVsZWQgY2FsbGJhY2tcbiAgICAgICAgLy8gZXhlY3V0aW9uLlxuICAgICAgICAvL1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMucmVjeWNsZUFzeW5jSWQoc2NoZWR1bGVyLCBpZCwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICAgICAgLy8gSWYgdGhpcyBhY3Rpb24gaGFzIGFscmVhZHkgYW4gYXN5bmMgSWQsIGRvbid0IHJlcXVlc3QgYSBuZXcgb25lLlxuICAgICAgICB0aGlzLmlkID0gdGhpcy5pZCB8fCB0aGlzLnJlcXVlc3RBc3luY0lkKHNjaGVkdWxlciwgdGhpcy5pZCwgZGVsYXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5yZXF1ZXN0QXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgcmV0dXJuIHJvb3RfMS5yb290LnNldEludGVydmFsKHNjaGVkdWxlci5mbHVzaC5iaW5kKHNjaGVkdWxlciwgdGhpcyksIGRlbGF5KTtcbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5yZWN5Y2xlQXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgLy8gSWYgdGhpcyBhY3Rpb24gaXMgcmVzY2hlZHVsZWQgd2l0aCB0aGUgc2FtZSBkZWxheSB0aW1lLCBkb24ndCBjbGVhciB0aGUgaW50ZXJ2YWwgaWQuXG4gICAgICAgIGlmIChkZWxheSAhPT0gbnVsbCAmJiB0aGlzLmRlbGF5ID09PSBkZWxheSkge1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgaWYgdGhlIGFjdGlvbidzIGRlbGF5IHRpbWUgaXMgZGlmZmVyZW50IGZyb20gdGhlIGN1cnJlbnQgZGVsYXksXG4gICAgICAgIC8vIGNsZWFyIHRoZSBpbnRlcnZhbCBpZFxuICAgICAgICByZXR1cm4gcm9vdF8xLnJvb3QuY2xlYXJJbnRlcnZhbChpZCkgJiYgdW5kZWZpbmVkIHx8IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEltbWVkaWF0ZWx5IGV4ZWN1dGVzIHRoaXMgYWN0aW9uIGFuZCB0aGUgYHdvcmtgIGl0IGNvbnRhaW5zLlxuICAgICAqIEByZXR1cm4ge2FueX1cbiAgICAgKi9cbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdleGVjdXRpbmcgYSBjYW5jZWxsZWQgYWN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBlcnJvciA9IHRoaXMuX2V4ZWN1dGUoc3RhdGUsIGRlbGF5KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nID09PSBmYWxzZSAmJiB0aGlzLmlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIERlcXVldWUgaWYgdGhlIGFjdGlvbiBkaWRuJ3QgcmVzY2hlZHVsZSBpdHNlbGYuIERvbid0IGNhbGxcbiAgICAgICAgICAgIC8vIHVuc3Vic2NyaWJlKCksIGJlY2F1c2UgdGhlIGFjdGlvbiBjb3VsZCByZXNjaGVkdWxlIGxhdGVyLlxuICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGU6XG4gICAgICAgICAgICAvLyBgYGBcbiAgICAgICAgICAgIC8vIHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiBkb1dvcmsoY291bnRlcikge1xuICAgICAgICAgICAgLy8gICAvKiAuLi4gSSdtIGEgYnVzeSB3b3JrZXIgYmVlIC4uLiAqL1xuICAgICAgICAgICAgLy8gICB2YXIgb3JpZ2luYWxBY3Rpb24gPSB0aGlzO1xuICAgICAgICAgICAgLy8gICAvKiB3YWl0IDEwMG1zIGJlZm9yZSByZXNjaGVkdWxpbmcgdGhlIGFjdGlvbiAqL1xuICAgICAgICAgICAgLy8gICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vICAgICBvcmlnaW5hbEFjdGlvbi5zY2hlZHVsZShjb3VudGVyICsgMSk7XG4gICAgICAgICAgICAvLyAgIH0sIDEwMCk7XG4gICAgICAgICAgICAvLyB9LCAxMDAwKTtcbiAgICAgICAgICAgIC8vIGBgYFxuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMucmVjeWNsZUFzeW5jSWQodGhpcy5zY2hlZHVsZXIsIHRoaXMuaWQsIG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuX2V4ZWN1dGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIHZhciBlcnJvcmVkID0gZmFsc2U7XG4gICAgICAgIHZhciBlcnJvclZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy53b3JrKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3JlZCA9IHRydWU7XG4gICAgICAgICAgICBlcnJvclZhbHVlID0gISFlICYmIGUgfHwgbmV3IEVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3JWYWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLl91bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZDtcbiAgICAgICAgdmFyIHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVyO1xuICAgICAgICB2YXIgYWN0aW9ucyA9IHNjaGVkdWxlci5hY3Rpb25zO1xuICAgICAgICB2YXIgaW5kZXggPSBhY3Rpb25zLmluZGV4T2YodGhpcyk7XG4gICAgICAgIHRoaXMud29yayA9IG51bGw7XG4gICAgICAgIHRoaXMuZGVsYXkgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gbnVsbDtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgYWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZChzY2hlZHVsZXIsIGlkLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFzeW5jQWN0aW9uO1xufShBY3Rpb25fMS5BY3Rpb24pKTtcbmV4cG9ydHMuQXN5bmNBY3Rpb24gPSBBc3luY0FjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFzeW5jQWN0aW9uLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yeGpzL3NjaGVkdWxlci9Bc3luY0FjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBTY2hlZHVsZXJfMSA9IHJlcXVpcmUoJy4uL1NjaGVkdWxlcicpO1xudmFyIEFzeW5jU2NoZWR1bGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXN5bmNTY2hlZHVsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXN5bmNTY2hlZHVsZXIoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgZmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSBTY2hlZHVsZXIgaXMgY3VycmVudGx5IGV4ZWN1dGluZyBhIGJhdGNoIG9mXG4gICAgICAgICAqIHF1ZXVlZCBhY3Rpb25zLlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBpbnRlcm5hbCBJRCB1c2VkIHRvIHRyYWNrIHRoZSBsYXRlc3QgYXN5bmNocm9ub3VzIHRhc2sgc3VjaCBhcyB0aG9zZVxuICAgICAgICAgKiBjb21pbmcgZnJvbSBgc2V0VGltZW91dGAsIGBzZXRJbnRlcnZhbGAsIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgLCBhbmRcbiAgICAgICAgICogb3RoZXJzLlxuICAgICAgICAgKiBAdHlwZSB7YW55fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zY2hlZHVsZWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIEFzeW5jU2NoZWR1bGVyLnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSB0aGlzLmFjdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChlcnJvciA9IGFjdGlvbi5leGVjdXRlKGFjdGlvbi5zdGF0ZSwgYWN0aW9uLmRlbGF5KSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChhY3Rpb24gPSBhY3Rpb25zLnNoaWZ0KCkpOyAvLyBleGhhdXN0IHRoZSBzY2hlZHVsZXIgcXVldWVcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB3aGlsZSAoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFzeW5jU2NoZWR1bGVyO1xufShTY2hlZHVsZXJfMS5TY2hlZHVsZXIpKTtcbmV4cG9ydHMuQXN5bmNTY2hlZHVsZXIgPSBBc3luY1NjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFzeW5jU2NoZWR1bGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yeGpzL3NjaGVkdWxlci9Bc3luY1NjaGVkdWxlci5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQXN5bmNBY3Rpb25fMSA9IHJlcXVpcmUoJy4vQXN5bmNBY3Rpb24nKTtcbnZhciBBc3luY1NjaGVkdWxlcl8xID0gcmVxdWlyZSgnLi9Bc3luY1NjaGVkdWxlcicpO1xuLyoqXG4gKlxuICogQXN5bmMgU2NoZWR1bGVyXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPlNjaGVkdWxlIHRhc2sgYXMgaWYgeW91IHVzZWQgc2V0VGltZW91dCh0YXNrLCBkdXJhdGlvbik8L3NwYW4+XG4gKlxuICogYGFzeW5jYCBzY2hlZHVsZXIgc2NoZWR1bGVzIHRhc2tzIGFzeW5jaHJvbm91c2x5LCBieSBwdXR0aW5nIHRoZW0gb24gdGhlIEphdmFTY3JpcHRcbiAqIGV2ZW50IGxvb3AgcXVldWUuIEl0IGlzIGJlc3QgdXNlZCB0byBkZWxheSB0YXNrcyBpbiB0aW1lIG9yIHRvIHNjaGVkdWxlIHRhc2tzIHJlcGVhdGluZ1xuICogaW4gaW50ZXJ2YWxzLlxuICpcbiAqIElmIHlvdSBqdXN0IHdhbnQgdG8gXCJkZWZlclwiIHRhc2ssIHRoYXQgaXMgdG8gcGVyZm9ybSBpdCByaWdodCBhZnRlciBjdXJyZW50bHlcbiAqIGV4ZWN1dGluZyBzeW5jaHJvbm91cyBjb2RlIGVuZHMgKGNvbW1vbmx5IGFjaGlldmVkIGJ5IGBzZXRUaW1lb3V0KGRlZmVycmVkVGFzaywgMClgKSxcbiAqIGJldHRlciBjaG9pY2Ugd2lsbCBiZSB0aGUge0BsaW5rIGFzYXB9IHNjaGVkdWxlci5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Vc2UgYXN5bmMgc2NoZWR1bGVyIHRvIGRlbGF5IHRhc2s8L2NhcHRpb24+XG4gKiBjb25zdCB0YXNrID0gKCkgPT4gY29uc29sZS5sb2coJ2l0IHdvcmtzIScpO1xuICpcbiAqIFJ4LlNjaGVkdWxlci5hc3luYy5zY2hlZHVsZSh0YXNrLCAyMDAwKTtcbiAqXG4gKiAvLyBBZnRlciAyIHNlY29uZHMgbG9nczpcbiAqIC8vIFwiaXQgd29ya3MhXCJcbiAqXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+VXNlIGFzeW5jIHNjaGVkdWxlciB0byByZXBlYXQgdGFzayBpbiBpbnRlcnZhbHM8L2NhcHRpb24+XG4gKiBmdW5jdGlvbiB0YXNrKHN0YXRlKSB7XG4gKiAgIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAqICAgdGhpcy5zY2hlZHVsZShzdGF0ZSArIDEsIDEwMDApOyAvLyBgdGhpc2AgcmVmZXJlbmNlcyBjdXJyZW50bHkgZXhlY3V0aW5nIEFjdGlvbixcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGljaCB3ZSByZXNjaGVkdWxlIHdpdGggbmV3IHN0YXRlIGFuZCBkZWxheVxuICogfVxuICpcbiAqIFJ4LlNjaGVkdWxlci5hc3luYy5zY2hlZHVsZSh0YXNrLCAzMDAwLCAwKTtcbiAqXG4gKiAvLyBMb2dzOlxuICogLy8gMCBhZnRlciAzc1xuICogLy8gMSBhZnRlciA0c1xuICogLy8gMiBhZnRlciA1c1xuICogLy8gMyBhZnRlciA2c1xuICpcbiAqIEBzdGF0aWMgdHJ1ZVxuICogQG5hbWUgYXN5bmNcbiAqIEBvd25lciBTY2hlZHVsZXJcbiAqL1xuZXhwb3J0cy5hc3luYyA9IG5ldyBBc3luY1NjaGVkdWxlcl8xLkFzeW5jU2NoZWR1bGVyKEFzeW5jQWN0aW9uXzEuQXN5bmNBY3Rpb24pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXN5bmMuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvc2NoZWR1bGVyL2FzeW5jLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBTZW1WZXI7XG5cbi8vIFRoZSBkZWJ1ZyBmdW5jdGlvbiBpcyBleGNsdWRlZCBlbnRpcmVseSBmcm9tIHRoZSBtaW5pZmllZCB2ZXJzaW9uLlxuLyogbm9taW4gKi8gdmFyIGRlYnVnO1xuLyogbm9taW4gKi8gaWYgKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJlxuICAgIC8qIG5vbWluICovIHByb2Nlc3MuZW52ICYmXG4gICAgLyogbm9taW4gKi8gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyAmJlxuICAgIC8qIG5vbWluICovIC9cXGJzZW12ZXJcXGIvaS50ZXN0KHByb2Nlc3MuZW52Lk5PREVfREVCVUcpKVxuICAvKiBub21pbiAqLyBkZWJ1ZyA9IGZ1bmN0aW9uKCkge1xuICAgIC8qIG5vbWluICovIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAvKiBub21pbiAqLyBhcmdzLnVuc2hpZnQoJ1NFTVZFUicpO1xuICAgIC8qIG5vbWluICovIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIC8qIG5vbWluICovIH07XG4vKiBub21pbiAqLyBlbHNlXG4gIC8qIG5vbWluICovIGRlYnVnID0gZnVuY3Rpb24oKSB7fTtcblxuLy8gTm90ZTogdGhpcyBpcyB0aGUgc2VtdmVyLm9yZyB2ZXJzaW9uIG9mIHRoZSBzcGVjIHRoYXQgaXQgaW1wbGVtZW50c1xuLy8gTm90IG5lY2Vzc2FyaWx5IHRoZSBwYWNrYWdlIHZlcnNpb24gb2YgdGhpcyBjb2RlLlxuZXhwb3J0cy5TRU1WRVJfU1BFQ19WRVJTSU9OID0gJzIuMC4wJztcblxudmFyIE1BWF9MRU5HVEggPSAyNTY7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8vIFRoZSBhY3R1YWwgcmVnZXhwcyBnbyBvbiBleHBvcnRzLnJlXG52YXIgcmUgPSBleHBvcnRzLnJlID0gW107XG52YXIgc3JjID0gZXhwb3J0cy5zcmMgPSBbXTtcbnZhciBSID0gMDtcblxuLy8gVGhlIGZvbGxvd2luZyBSZWd1bGFyIEV4cHJlc3Npb25zIGNhbiBiZSB1c2VkIGZvciB0b2tlbml6aW5nLFxuLy8gdmFsaWRhdGluZywgYW5kIHBhcnNpbmcgU2VtVmVyIHZlcnNpb24gc3RyaW5ncy5cblxuLy8gIyMgTnVtZXJpYyBJZGVudGlmaWVyXG4vLyBBIHNpbmdsZSBgMGAsIG9yIGEgbm9uLXplcm8gZGlnaXQgZm9sbG93ZWQgYnkgemVybyBvciBtb3JlIGRpZ2l0cy5cblxudmFyIE5VTUVSSUNJREVOVElGSUVSID0gUisrO1xuc3JjW05VTUVSSUNJREVOVElGSUVSXSA9ICcwfFsxLTldXFxcXGQqJztcbnZhciBOVU1FUklDSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdID0gJ1swLTldKyc7XG5cblxuLy8gIyMgTm9uLW51bWVyaWMgSWRlbnRpZmllclxuLy8gWmVybyBvciBtb3JlIGRpZ2l0cywgZm9sbG93ZWQgYnkgYSBsZXR0ZXIgb3IgaHlwaGVuLCBhbmQgdGhlbiB6ZXJvIG9yXG4vLyBtb3JlIGxldHRlcnMsIGRpZ2l0cywgb3IgaHlwaGVucy5cblxudmFyIE5PTk5VTUVSSUNJREVOVElGSUVSID0gUisrO1xuc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSA9ICdcXFxcZCpbYS16QS1aLV1bYS16QS1aMC05LV0qJztcblxuXG4vLyAjIyBNYWluIFZlcnNpb25cbi8vIFRocmVlIGRvdC1zZXBhcmF0ZWQgbnVtZXJpYyBpZGVudGlmaWVycy5cblxudmFyIE1BSU5WRVJTSU9OID0gUisrO1xuc3JjW01BSU5WRVJTSU9OXSA9ICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG52YXIgTUFJTlZFUlNJT05MT09TRSA9IFIrKztcbnNyY1tNQUlOVkVSU0lPTkxPT1NFXSA9ICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpJztcblxuLy8gIyMgUHJlLXJlbGVhc2UgVmVyc2lvbiBJZGVudGlmaWVyXG4vLyBBIG51bWVyaWMgaWRlbnRpZmllciwgb3IgYSBub24tbnVtZXJpYyBpZGVudGlmaWVyLlxuXG52YXIgUFJFUkVMRUFTRUlERU5USUZJRVIgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUlERU5USUZJRVJdID0gJyg/OicgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfCcgKyBzcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG52YXIgUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSA9ICcoPzonICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd8JyArIHNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cblxuLy8gIyMgUHJlLXJlbGVhc2UgVmVyc2lvblxuLy8gSHlwaGVuLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBkb3Qtc2VwYXJhdGVkIHByZS1yZWxlYXNlIHZlcnNpb25cbi8vIGlkZW50aWZpZXJzLlxuXG52YXIgUFJFUkVMRUFTRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFXSA9ICcoPzotKCcgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJdICtcbiAgICAgICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJdICsgJykqKSknO1xuXG52YXIgUFJFUkVMRUFTRUxPT1NFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VMT09TRV0gPSAnKD86LT8oJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSArXG4gICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gKyAnKSopKSc7XG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhIElkZW50aWZpZXJcbi8vIEFueSBjb21iaW5hdGlvbiBvZiBkaWdpdHMsIGxldHRlcnMsIG9yIGh5cGhlbnMuXG5cbnZhciBCVUlMRElERU5USUZJRVIgPSBSKys7XG5zcmNbQlVJTERJREVOVElGSUVSXSA9ICdbMC05QS1aYS16LV0rJztcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGFcbi8vIFBsdXMgc2lnbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgcGVyaW9kLXNlcGFyYXRlZCBidWlsZCBtZXRhZGF0YVxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBCVUlMRCA9IFIrKztcbnNyY1tCVUlMRF0gPSAnKD86XFxcXCsoJyArIHNyY1tCVUlMRElERU5USUZJRVJdICtcbiAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW0JVSUxESURFTlRJRklFUl0gKyAnKSopKSc7XG5cblxuLy8gIyMgRnVsbCBWZXJzaW9uIFN0cmluZ1xuLy8gQSBtYWluIHZlcnNpb24sIGZvbGxvd2VkIG9wdGlvbmFsbHkgYnkgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uIGFuZFxuLy8gYnVpbGQgbWV0YWRhdGEuXG5cbi8vIE5vdGUgdGhhdCB0aGUgb25seSBtYWpvciwgbWlub3IsIHBhdGNoLCBhbmQgcHJlLXJlbGVhc2Ugc2VjdGlvbnMgb2Zcbi8vIHRoZSB2ZXJzaW9uIHN0cmluZyBhcmUgY2FwdHVyaW5nIGdyb3Vwcy4gIFRoZSBidWlsZCBtZXRhZGF0YSBpcyBub3QgYVxuLy8gY2FwdHVyaW5nIGdyb3VwLCBiZWNhdXNlIGl0IHNob3VsZCBub3QgZXZlciBiZSB1c2VkIGluIHZlcnNpb25cbi8vIGNvbXBhcmlzb24uXG5cbnZhciBGVUxMID0gUisrO1xudmFyIEZVTExQTEFJTiA9ICd2PycgKyBzcmNbTUFJTlZFUlNJT05dICtcbiAgICAgICAgICAgICAgICBzcmNbUFJFUkVMRUFTRV0gKyAnPycgK1xuICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPyc7XG5cbnNyY1tGVUxMXSA9ICdeJyArIEZVTExQTEFJTiArICckJztcblxuLy8gbGlrZSBmdWxsLCBidXQgYWxsb3dzIHYxLjIuMyBhbmQgPTEuMi4zLCB3aGljaCBwZW9wbGUgZG8gc29tZXRpbWVzLlxuLy8gYWxzbywgMS4wLjBhbHBoYTEgKHByZXJlbGVhc2Ugd2l0aG91dCB0aGUgaHlwaGVuKSB3aGljaCBpcyBwcmV0dHlcbi8vIGNvbW1vbiBpbiB0aGUgbnBtIHJlZ2lzdHJ5LlxudmFyIExPT1NFUExBSU4gPSAnW3Y9XFxcXHNdKicgKyBzcmNbTUFJTlZFUlNJT05MT09TRV0gK1xuICAgICAgICAgICAgICAgICBzcmNbUFJFUkVMRUFTRUxPT1NFXSArICc/JyArXG4gICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPyc7XG5cbnZhciBMT09TRSA9IFIrKztcbnNyY1tMT09TRV0gPSAnXicgKyBMT09TRVBMQUlOICsgJyQnO1xuXG52YXIgR1RMVCA9IFIrKztcbnNyY1tHVExUXSA9ICcoKD86PHw+KT89PyknO1xuXG4vLyBTb21ldGhpbmcgbGlrZSBcIjIuKlwiIG9yIFwiMS4yLnhcIi5cbi8vIE5vdGUgdGhhdCBcIngueFwiIGlzIGEgdmFsaWQgeFJhbmdlIGlkZW50aWZlciwgbWVhbmluZyBcImFueSB2ZXJzaW9uXCJcbi8vIE9ubHkgdGhlIGZpcnN0IGl0ZW0gaXMgc3RyaWN0bHkgcmVxdWlyZWQuXG52YXIgWFJBTkdFSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gPSBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnfHh8WHxcXFxcKic7XG52YXIgWFJBTkdFSURFTlRJRklFUiA9IFIrKztcbnNyY1tYUkFOR0VJREVOVElGSUVSXSA9IHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnfHh8WHxcXFxcKic7XG5cbnZhciBYUkFOR0VQTEFJTiA9IFIrKztcbnNyY1tYUkFOR0VQTEFJTl0gPSAnW3Y9XFxcXHNdKignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzonICsgc3JjW1BSRVJFTEVBU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JyArXG4gICAgICAgICAgICAgICAgICAgJyk/KT8nO1xuXG52YXIgWFJBTkdFUExBSU5MT09TRSA9IFIrKztcbnNyY1tYUkFOR0VQTEFJTkxPT1NFXSA9ICdbdj1cXFxcc10qKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OicgKyBzcmNbUFJFUkVMRUFTRUxPT1NFXSArICcpPycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKT8pPyc7XG5cbnZhciBYUkFOR0UgPSBSKys7XG5zcmNbWFJBTkdFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyonICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBYUkFOR0VMT09TRSA9IFIrKztcbnNyY1tYUkFOR0VMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gVGlsZGUgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcInJlYXNvbmFibHkgYXQgb3IgZ3JlYXRlciB0aGFuXCJcbnZhciBMT05FVElMREUgPSBSKys7XG5zcmNbTE9ORVRJTERFXSA9ICcoPzp+Pj8pJztcblxudmFyIFRJTERFVFJJTSA9IFIrKztcbnNyY1tUSUxERVRSSU1dID0gJyhcXFxccyopJyArIHNyY1tMT05FVElMREVdICsgJ1xcXFxzKyc7XG5yZVtUSUxERVRSSU1dID0gbmV3IFJlZ0V4cChzcmNbVElMREVUUklNXSwgJ2cnKTtcbnZhciB0aWxkZVRyaW1SZXBsYWNlID0gJyQxfic7XG5cbnZhciBUSUxERSA9IFIrKztcbnNyY1tUSUxERV0gPSAnXicgKyBzcmNbTE9ORVRJTERFXSArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgVElMREVMT09TRSA9IFIrKztcbnNyY1tUSUxERUxPT1NFXSA9ICdeJyArIHNyY1tMT05FVElMREVdICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBDYXJldCByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwiYXQgbGVhc3QgYW5kIGJhY2t3YXJkcyBjb21wYXRpYmxlIHdpdGhcIlxudmFyIExPTkVDQVJFVCA9IFIrKztcbnNyY1tMT05FQ0FSRVRdID0gJyg/OlxcXFxeKSc7XG5cbnZhciBDQVJFVFRSSU0gPSBSKys7XG5zcmNbQ0FSRVRUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbTE9ORUNBUkVUXSArICdcXFxccysnO1xucmVbQ0FSRVRUUklNXSA9IG5ldyBSZWdFeHAoc3JjW0NBUkVUVFJJTV0sICdnJyk7XG52YXIgY2FyZXRUcmltUmVwbGFjZSA9ICckMV4nO1xuXG52YXIgQ0FSRVQgPSBSKys7XG5zcmNbQ0FSRVRdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIENBUkVUTE9PU0UgPSBSKys7XG5zcmNbQ0FSRVRMT09TRV0gPSAnXicgKyBzcmNbTE9ORUNBUkVUXSArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gQSBzaW1wbGUgZ3QvbHQvZXEgdGhpbmcsIG9yIGp1c3QgXCJcIiB0byBpbmRpY2F0ZSBcImFueSB2ZXJzaW9uXCJcbnZhciBDT01QQVJBVE9STE9PU0UgPSBSKys7XG5zcmNbQ09NUEFSQVRPUkxPT1NFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyooJyArIExPT1NFUExBSU4gKyAnKSR8XiQnO1xudmFyIENPTVBBUkFUT1IgPSBSKys7XG5zcmNbQ09NUEFSQVRPUl0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBGVUxMUExBSU4gKyAnKSR8XiQnO1xuXG5cbi8vIEFuIGV4cHJlc3Npb24gdG8gc3RyaXAgYW55IHdoaXRlc3BhY2UgYmV0d2VlbiB0aGUgZ3RsdCBhbmQgdGhlIHRoaW5nXG4vLyBpdCBtb2RpZmllcywgc28gdGhhdCBgPiAxLjIuM2AgPT0+IGA+MS4yLjNgXG52YXIgQ09NUEFSQVRPUlRSSU0gPSBSKys7XG5zcmNbQ09NUEFSQVRPUlRSSU1dID0gJyhcXFxccyopJyArIHNyY1tHVExUXSArXG4gICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKignICsgTE9PU0VQTEFJTiArICd8JyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKSc7XG5cbi8vIHRoaXMgb25lIGhhcyB0byB1c2UgdGhlIC9nIGZsYWdcbnJlW0NPTVBBUkFUT1JUUklNXSA9IG5ldyBSZWdFeHAoc3JjW0NPTVBBUkFUT1JUUklNXSwgJ2cnKTtcbnZhciBjb21wYXJhdG9yVHJpbVJlcGxhY2UgPSAnJDEkMiQzJztcblxuXG4vLyBTb21ldGhpbmcgbGlrZSBgMS4yLjMgLSAxLjIuNGBcbi8vIE5vdGUgdGhhdCB0aGVzZSBhbGwgdXNlIHRoZSBsb29zZSBmb3JtLCBiZWNhdXNlIHRoZXknbGwgYmVcbi8vIGNoZWNrZWQgYWdhaW5zdCBlaXRoZXIgdGhlIHN0cmljdCBvciBsb29zZSBjb21wYXJhdG9yIGZvcm1cbi8vIGxhdGVyLlxudmFyIEhZUEhFTlJBTkdFID0gUisrO1xuc3JjW0hZUEhFTlJBTkdFXSA9ICdeXFxcXHMqKCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnXFxcXHMrLVxcXFxzKycgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICdcXFxccyokJztcblxudmFyIEhZUEhFTlJBTkdFTE9PU0UgPSBSKys7XG5zcmNbSFlQSEVOUkFOR0VMT09TRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccystXFxcXHMrJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKiQnO1xuXG4vLyBTdGFyIHJhbmdlcyBiYXNpY2FsbHkganVzdCBhbGxvdyBhbnl0aGluZyBhdCBhbGwuXG52YXIgU1RBUiA9IFIrKztcbnNyY1tTVEFSXSA9ICcoPHw+KT89P1xcXFxzKlxcXFwqJztcblxuLy8gQ29tcGlsZSB0byBhY3R1YWwgcmVnZXhwIG9iamVjdHMuXG4vLyBBbGwgYXJlIGZsYWctZnJlZSwgdW5sZXNzIHRoZXkgd2VyZSBjcmVhdGVkIGFib3ZlIHdpdGggYSBmbGFnLlxuZm9yICh2YXIgaSA9IDA7IGkgPCBSOyBpKyspIHtcbiAgZGVidWcoaSwgc3JjW2ldKTtcbiAgaWYgKCFyZVtpXSlcbiAgICByZVtpXSA9IG5ldyBSZWdFeHAoc3JjW2ldKTtcbn1cblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuZnVuY3Rpb24gcGFyc2UodmVyc2lvbiwgbG9vc2UpIHtcbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpXG4gICAgcmV0dXJuIHZlcnNpb247XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJylcbiAgICByZXR1cm4gbnVsbDtcblxuICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHZhciByID0gbG9vc2UgPyByZVtMT09TRV0gOiByZVtGVUxMXTtcbiAgaWYgKCFyLnRlc3QodmVyc2lvbikpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy52YWxpZCA9IHZhbGlkO1xuZnVuY3Rpb24gdmFsaWQodmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHYgPSBwYXJzZSh2ZXJzaW9uLCBsb29zZSk7XG4gIHJldHVybiB2ID8gdi52ZXJzaW9uIDogbnVsbDtcbn1cblxuXG5leHBvcnRzLmNsZWFuID0gY2xlYW47XG5mdW5jdGlvbiBjbGVhbih2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgcyA9IHBhcnNlKHZlcnNpb24udHJpbSgpLnJlcGxhY2UoL15bPXZdKy8sICcnKSwgbG9vc2UpO1xuICByZXR1cm4gcyA/IHMudmVyc2lvbiA6IG51bGw7XG59XG5cbmV4cG9ydHMuU2VtVmVyID0gU2VtVmVyO1xuXG5mdW5jdGlvbiBTZW1WZXIodmVyc2lvbiwgbG9vc2UpIHtcbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpIHtcbiAgICBpZiAodmVyc2lvbi5sb29zZSA9PT0gbG9vc2UpXG4gICAgICByZXR1cm4gdmVyc2lvbjtcbiAgICBlbHNlXG4gICAgICB2ZXJzaW9uID0gdmVyc2lvbi52ZXJzaW9uO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVmVyc2lvbjogJyArIHZlcnNpb24pO1xuICB9XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2ZXJzaW9uIGlzIGxvbmdlciB0aGFuICcgKyBNQVhfTEVOR1RIICsgJyBjaGFyYWN0ZXJzJylcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG5cbiAgZGVidWcoJ1NlbVZlcicsIHZlcnNpb24sIGxvb3NlKTtcbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuICB2YXIgbSA9IHZlcnNpb24udHJpbSgpLm1hdGNoKGxvb3NlID8gcmVbTE9PU0VdIDogcmVbRlVMTF0pO1xuXG4gIGlmICghbSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKTtcblxuICB0aGlzLnJhdyA9IHZlcnNpb247XG5cbiAgLy8gdGhlc2UgYXJlIGFjdHVhbGx5IG51bWJlcnNcbiAgdGhpcy5tYWpvciA9ICttWzFdO1xuICB0aGlzLm1pbm9yID0gK21bMl07XG4gIHRoaXMucGF0Y2ggPSArbVszXTtcblxuICBpZiAodGhpcy5tYWpvciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5tYWpvciA8IDApXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtYWpvciB2ZXJzaW9uJylcblxuICBpZiAodGhpcy5taW5vciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5taW5vciA8IDApXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtaW5vciB2ZXJzaW9uJylcblxuICBpZiAodGhpcy5wYXRjaCA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5wYXRjaCA8IDApXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBwYXRjaCB2ZXJzaW9uJylcblxuICAvLyBudW1iZXJpZnkgYW55IHByZXJlbGVhc2UgbnVtZXJpYyBpZHNcbiAgaWYgKCFtWzRdKVxuICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICBlbHNlXG4gICAgdGhpcy5wcmVyZWxlYXNlID0gbVs0XS5zcGxpdCgnLicpLm1hcChmdW5jdGlvbihpZCkge1xuICAgICAgaWYgKC9eWzAtOV0rJC8udGVzdChpZCkpIHtcbiAgICAgICAgdmFyIG51bSA9ICtpZDtcbiAgICAgICAgaWYgKG51bSA+PSAwICYmIG51bSA8IE1BWF9TQUZFX0lOVEVHRVIpXG4gICAgICAgICAgcmV0dXJuIG51bTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpZDtcbiAgICB9KTtcblxuICB0aGlzLmJ1aWxkID0gbVs1XSA/IG1bNV0uc3BsaXQoJy4nKSA6IFtdO1xuICB0aGlzLmZvcm1hdCgpO1xufVxuXG5TZW1WZXIucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnZlcnNpb24gPSB0aGlzLm1ham9yICsgJy4nICsgdGhpcy5taW5vciArICcuJyArIHRoaXMucGF0Y2g7XG4gIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHRoaXMudmVyc2lvbiArPSAnLScgKyB0aGlzLnByZXJlbGVhc2Uuam9pbignLicpO1xuICByZXR1cm4gdGhpcy52ZXJzaW9uO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy52ZXJzaW9uO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgZGVidWcoJ1NlbVZlci5jb21wYXJlJywgdGhpcy52ZXJzaW9uLCB0aGlzLmxvb3NlLCBvdGhlcik7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiB0aGlzLmNvbXBhcmVNYWluKG90aGVyKSB8fCB0aGlzLmNvbXBhcmVQcmUob3RoZXIpO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlTWFpbiA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnModGhpcy5tYWpvciwgb3RoZXIubWFqb3IpIHx8XG4gICAgICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5taW5vciwgb3RoZXIubWlub3IpIHx8XG4gICAgICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5wYXRjaCwgb3RoZXIucGF0Y2gpO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlUHJlID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgLy8gTk9UIGhhdmluZyBhIHByZXJlbGVhc2UgaXMgPiBoYXZpbmcgb25lXG4gIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gLTE7XG4gIGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmIG90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAxO1xuICBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIDA7XG5cbiAgdmFyIGkgPSAwO1xuICBkbyB7XG4gICAgdmFyIGEgPSB0aGlzLnByZXJlbGVhc2VbaV07XG4gICAgdmFyIGIgPSBvdGhlci5wcmVyZWxlYXNlW2ldO1xuICAgIGRlYnVnKCdwcmVyZWxlYXNlIGNvbXBhcmUnLCBpLCBhLCBiKTtcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAwO1xuICAgIGVsc2UgaWYgKGIgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGEgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAtMTtcbiAgICBlbHNlIGlmIChhID09PSBiKVxuICAgICAgY29udGludWU7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKTtcbiAgfSB3aGlsZSAoKytpKTtcbn07XG5cbi8vIHByZW1pbm9yIHdpbGwgYnVtcCB0aGUgdmVyc2lvbiB1cCB0byB0aGUgbmV4dCBtaW5vciByZWxlYXNlLCBhbmQgaW1tZWRpYXRlbHlcbi8vIGRvd24gdG8gcHJlLXJlbGVhc2UuIHByZW1ham9yIGFuZCBwcmVwYXRjaCB3b3JrIHRoZSBzYW1lIHdheS5cblNlbVZlci5wcm90b3R5cGUuaW5jID0gZnVuY3Rpb24ocmVsZWFzZSwgaWRlbnRpZmllcikge1xuICBzd2l0Y2ggKHJlbGVhc2UpIHtcbiAgICBjYXNlICdwcmVtYWpvcic6XG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5taW5vciA9IDA7XG4gICAgICB0aGlzLm1ham9yKys7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVtaW5vcic6XG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5taW5vcisrO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlcGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhbHJlYWR5IGEgcHJlcmVsZWFzZSwgaXQgd2lsbCBidW1wIHRvIHRoZSBuZXh0IHZlcnNpb25cbiAgICAgIC8vIGRyb3AgYW55IHByZXJlbGVhc2VzIHRoYXQgbWlnaHQgYWxyZWFkeSBleGlzdCwgc2luY2UgdGhleSBhcmUgbm90XG4gICAgICAvLyByZWxldmFudCBhdCB0aGlzIHBvaW50LlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKTtcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIElmIHRoZSBpbnB1dCBpcyBhIG5vbi1wcmVyZWxlYXNlIHZlcnNpb24sIHRoaXMgYWN0cyB0aGUgc2FtZSBhc1xuICAgIC8vIHByZXBhdGNoLlxuICAgIGNhc2UgJ3ByZXJlbGVhc2UnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdtYWpvcic6XG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1ham9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWFqb3IgdmVyc2lvbi5cbiAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWFqb3IuXG4gICAgICAvLyAxLjAuMC01IGJ1bXBzIHRvIDEuMC4wXG4gICAgICAvLyAxLjEuMCBidW1wcyB0byAyLjAuMFxuICAgICAgaWYgKHRoaXMubWlub3IgIT09IDAgfHwgdGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLm1ham9yKys7XG4gICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaW5vcic6XG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1pbm9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWlub3IgdmVyc2lvbi5cbiAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWlub3IuXG4gICAgICAvLyAxLjIuMC01IGJ1bXBzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMSBidW1wcyB0byAxLjMuMFxuICAgICAgaWYgKHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5taW5vcisrO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3BhdGNoJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgbm90IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiwgaXQgd2lsbCBpbmNyZW1lbnQgdGhlIHBhdGNoLlxuICAgICAgLy8gSWYgaXQgaXMgYSBwcmUtcmVsZWFzZSBpdCB3aWxsIGJ1bXAgdXAgdG8gdGhlIHNhbWUgcGF0Y2ggdmVyc2lvbi5cbiAgICAgIC8vIDEuMi4wLTUgcGF0Y2hlcyB0byAxLjIuMFxuICAgICAgLy8gMS4yLjAgcGF0Y2hlcyB0byAxLjIuMVxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMucGF0Y2grKztcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgLy8gVGhpcyBwcm9iYWJseSBzaG91bGRuJ3QgYmUgdXNlZCBwdWJsaWNseS5cbiAgICAvLyAxLjAuMCBcInByZVwiIHdvdWxkIGJlY29tZSAxLjAuMC0wIHdoaWNoIGlzIHRoZSB3cm9uZyBkaXJlY3Rpb24uXG4gICAgY2FzZSAncHJlJzpcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbMF07XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnByZXJlbGVhc2UubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJlcmVsZWFzZVtpXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZVtpXSsrO1xuICAgICAgICAgICAgaSA9IC0yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gLTEpIC8vIGRpZG4ndCBpbmNyZW1lbnQgYW55dGhpbmdcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UucHVzaCgwKTtcbiAgICAgIH1cbiAgICAgIGlmIChpZGVudGlmaWVyKSB7XG4gICAgICAgIC8vIDEuMi4wLWJldGEuMSBidW1wcyB0byAxLjIuMC1iZXRhLjIsXG4gICAgICAgIC8vIDEuMi4wLWJldGEuZm9vYmx6IG9yIDEuMi4wLWJldGEgYnVtcHMgdG8gMS4yLjAtYmV0YS4wXG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2VbMF0gPT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgICBpZiAoaXNOYU4odGhpcy5wcmVyZWxlYXNlWzFdKSlcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGluY3JlbWVudCBhcmd1bWVudDogJyArIHJlbGVhc2UpO1xuICB9XG4gIHRoaXMuZm9ybWF0KCk7XG4gIHRoaXMucmF3ID0gdGhpcy52ZXJzaW9uO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmV4cG9ydHMuaW5jID0gaW5jO1xuZnVuY3Rpb24gaW5jKHZlcnNpb24sIHJlbGVhc2UsIGxvb3NlLCBpZGVudGlmaWVyKSB7XG4gIGlmICh0eXBlb2YobG9vc2UpID09PSAnc3RyaW5nJykge1xuICAgIGlkZW50aWZpZXIgPSBsb29zZTtcbiAgICBsb29zZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpLmluYyhyZWxlYXNlLCBpZGVudGlmaWVyKS52ZXJzaW9uO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMuZGlmZiA9IGRpZmY7XG5mdW5jdGlvbiBkaWZmKHZlcnNpb24xLCB2ZXJzaW9uMikge1xuICBpZiAoZXEodmVyc2lvbjEsIHZlcnNpb24yKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHZhciB2MSA9IHBhcnNlKHZlcnNpb24xKTtcbiAgICB2YXIgdjIgPSBwYXJzZSh2ZXJzaW9uMik7XG4gICAgaWYgKHYxLnByZXJlbGVhc2UubGVuZ3RoIHx8IHYyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdjEpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgICAgaWYgKHYxW2tleV0gIT09IHYyW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiAncHJlJytrZXk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJ3ByZXJlbGVhc2UnO1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gdjEpIHtcbiAgICAgIGlmIChrZXkgPT09ICdtYWpvcicgfHwga2V5ID09PSAnbWlub3InIHx8IGtleSA9PT0gJ3BhdGNoJykge1xuICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5jb21wYXJlSWRlbnRpZmllcnMgPSBjb21wYXJlSWRlbnRpZmllcnM7XG5cbnZhciBudW1lcmljID0gL15bMC05XSskLztcbmZ1bmN0aW9uIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKSB7XG4gIHZhciBhbnVtID0gbnVtZXJpYy50ZXN0KGEpO1xuICB2YXIgYm51bSA9IG51bWVyaWMudGVzdChiKTtcblxuICBpZiAoYW51bSAmJiBibnVtKSB7XG4gICAgYSA9ICthO1xuICAgIGIgPSArYjtcbiAgfVxuXG4gIHJldHVybiAoYW51bSAmJiAhYm51bSkgPyAtMSA6XG4gICAgICAgICAoYm51bSAmJiAhYW51bSkgPyAxIDpcbiAgICAgICAgIGEgPCBiID8gLTEgOlxuICAgICAgICAgYSA+IGIgPyAxIDpcbiAgICAgICAgIDA7XG59XG5cbmV4cG9ydHMucmNvbXBhcmVJZGVudGlmaWVycyA9IHJjb21wYXJlSWRlbnRpZmllcnM7XG5mdW5jdGlvbiByY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpIHtcbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhiLCBhKTtcbn1cblxuZXhwb3J0cy5tYWpvciA9IG1ham9yO1xuZnVuY3Rpb24gbWFqb3IoYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1ham9yO1xufVxuXG5leHBvcnRzLm1pbm9yID0gbWlub3I7XG5mdW5jdGlvbiBtaW5vcihhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWlub3I7XG59XG5cbmV4cG9ydHMucGF0Y2ggPSBwYXRjaDtcbmZ1bmN0aW9uIHBhdGNoKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5wYXRjaDtcbn1cblxuZXhwb3J0cy5jb21wYXJlID0gY29tcGFyZTtcbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLmNvbXBhcmUoYik7XG59XG5cbmV4cG9ydHMuY29tcGFyZUxvb3NlID0gY29tcGFyZUxvb3NlO1xuZnVuY3Rpb24gY29tcGFyZUxvb3NlKGEsIGIpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgdHJ1ZSk7XG59XG5cbmV4cG9ydHMucmNvbXBhcmUgPSByY29tcGFyZTtcbmZ1bmN0aW9uIHJjb21wYXJlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGIsIGEsIGxvb3NlKTtcbn1cblxuZXhwb3J0cy5zb3J0ID0gc29ydDtcbmZ1bmN0aW9uIHNvcnQobGlzdCwgbG9vc2UpIHtcbiAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pO1xufVxuXG5leHBvcnRzLnJzb3J0ID0gcnNvcnQ7XG5mdW5jdGlvbiByc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5yY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pO1xufVxuXG5leHBvcnRzLmd0ID0gZ3Q7XG5mdW5jdGlvbiBndChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPiAwO1xufVxuXG5leHBvcnRzLmx0ID0gbHQ7XG5mdW5jdGlvbiBsdChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPCAwO1xufVxuXG5leHBvcnRzLmVxID0gZXE7XG5mdW5jdGlvbiBlcShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPT09IDA7XG59XG5cbmV4cG9ydHMubmVxID0gbmVxO1xuZnVuY3Rpb24gbmVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSAhPT0gMDtcbn1cblxuZXhwb3J0cy5ndGUgPSBndGU7XG5mdW5jdGlvbiBndGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID49IDA7XG59XG5cbmV4cG9ydHMubHRlID0gbHRlO1xuZnVuY3Rpb24gbHRlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8PSAwO1xufVxuXG5leHBvcnRzLmNtcCA9IGNtcDtcbmZ1bmN0aW9uIGNtcChhLCBvcCwgYiwgbG9vc2UpIHtcbiAgdmFyIHJldDtcbiAgc3dpdGNoIChvcCkge1xuICAgIGNhc2UgJz09PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgPT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICchPT0nOlxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0JykgYSA9IGEudmVyc2lvbjtcbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIGIgPSBiLnZlcnNpb247XG4gICAgICByZXQgPSBhICE9PSBiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnJzogY2FzZSAnPSc6IGNhc2UgJz09JzogcmV0ID0gZXEoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICchPSc6IHJldCA9IG5lcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJz4nOiByZXQgPSBndChhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJz49JzogcmV0ID0gZ3RlKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPCc6IHJldCA9IGx0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPD0nOiByZXQgPSBsdGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBkZWZhdWx0OiB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG9wZXJhdG9yOiAnICsgb3ApO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydHMuQ29tcGFyYXRvciA9IENvbXBhcmF0b3I7XG5mdW5jdGlvbiBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKSB7XG4gIGlmIChjb21wIGluc3RhbmNlb2YgQ29tcGFyYXRvcikge1xuICAgIGlmIChjb21wLmxvb3NlID09PSBsb29zZSlcbiAgICAgIHJldHVybiBjb21wO1xuICAgIGVsc2VcbiAgICAgIGNvbXAgPSBjb21wLnZhbHVlO1xuICB9XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENvbXBhcmF0b3IpKVxuICAgIHJldHVybiBuZXcgQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG5cbiAgZGVidWcoJ2NvbXBhcmF0b3InLCBjb21wLCBsb29zZSk7XG4gIHRoaXMubG9vc2UgPSBsb29zZTtcbiAgdGhpcy5wYXJzZShjb21wKTtcblxuICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSlcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gIGVsc2VcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5vcGVyYXRvciArIHRoaXMuc2VtdmVyLnZlcnNpb247XG5cbiAgZGVidWcoJ2NvbXAnLCB0aGlzKTtcbn1cblxudmFyIEFOWSA9IHt9O1xuQ29tcGFyYXRvci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbihjb21wKSB7XG4gIHZhciByID0gdGhpcy5sb29zZSA/IHJlW0NPTVBBUkFUT1JMT09TRV0gOiByZVtDT01QQVJBVE9SXTtcbiAgdmFyIG0gPSBjb21wLm1hdGNoKHIpO1xuXG4gIGlmICghbSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNvbXBhcmF0b3I6ICcgKyBjb21wKTtcblxuICB0aGlzLm9wZXJhdG9yID0gbVsxXTtcbiAgaWYgKHRoaXMub3BlcmF0b3IgPT09ICc9JylcbiAgICB0aGlzLm9wZXJhdG9yID0gJyc7XG5cbiAgLy8gaWYgaXQgbGl0ZXJhbGx5IGlzIGp1c3QgJz4nIG9yICcnIHRoZW4gYWxsb3cgYW55dGhpbmcuXG4gIGlmICghbVsyXSlcbiAgICB0aGlzLnNlbXZlciA9IEFOWTtcbiAgZWxzZVxuICAgIHRoaXMuc2VtdmVyID0gbmV3IFNlbVZlcihtWzJdLCB0aGlzLmxvb3NlKTtcbn07XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZhbHVlO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgZGVidWcoJ0NvbXBhcmF0b3IudGVzdCcsIHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHJldHVybiB0cnVlO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpXG4gICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIGNtcCh2ZXJzaW9uLCB0aGlzLm9wZXJhdG9yLCB0aGlzLnNlbXZlciwgdGhpcy5sb29zZSk7XG59O1xuXG5cbmV4cG9ydHMuUmFuZ2UgPSBSYW5nZTtcbmZ1bmN0aW9uIFJhbmdlKHJhbmdlLCBsb29zZSkge1xuICBpZiAoKHJhbmdlIGluc3RhbmNlb2YgUmFuZ2UpICYmIHJhbmdlLmxvb3NlID09PSBsb29zZSlcbiAgICByZXR1cm4gcmFuZ2U7XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJhbmdlKSlcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG5cbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuXG4gIC8vIEZpcnN0LCBzcGxpdCBiYXNlZCBvbiBib29sZWFuIG9yIHx8XG4gIHRoaXMucmF3ID0gcmFuZ2U7XG4gIHRoaXMuc2V0ID0gcmFuZ2Uuc3BsaXQoL1xccypcXHxcXHxcXHMqLykubWFwKGZ1bmN0aW9uKHJhbmdlKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VSYW5nZShyYW5nZS50cmltKCkpO1xuICB9LCB0aGlzKS5maWx0ZXIoZnVuY3Rpb24oYykge1xuICAgIC8vIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHJlbGV2YW50IGZvciB3aGF0ZXZlciByZWFzb25cbiAgICByZXR1cm4gYy5sZW5ndGg7XG4gIH0pO1xuXG4gIGlmICghdGhpcy5zZXQubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBTZW1WZXIgUmFuZ2U6ICcgKyByYW5nZSk7XG4gIH1cblxuICB0aGlzLmZvcm1hdCgpO1xufVxuXG5SYW5nZS5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmFuZ2UgPSB0aGlzLnNldC5tYXAoZnVuY3Rpb24oY29tcHMpIHtcbiAgICByZXR1cm4gY29tcHMuam9pbignICcpLnRyaW0oKTtcbiAgfSkuam9pbignfHwnKS50cmltKCk7XG4gIHJldHVybiB0aGlzLnJhbmdlO1xufTtcblxuUmFuZ2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnJhbmdlO1xufTtcblxuUmFuZ2UucHJvdG90eXBlLnBhcnNlUmFuZ2UgPSBmdW5jdGlvbihyYW5nZSkge1xuICB2YXIgbG9vc2UgPSB0aGlzLmxvb3NlO1xuICByYW5nZSA9IHJhbmdlLnRyaW0oKTtcbiAgZGVidWcoJ3JhbmdlJywgcmFuZ2UsIGxvb3NlKTtcbiAgLy8gYDEuMi4zIC0gMS4yLjRgID0+IGA+PTEuMi4zIDw9MS4yLjRgXG4gIHZhciBociA9IGxvb3NlID8gcmVbSFlQSEVOUkFOR0VMT09TRV0gOiByZVtIWVBIRU5SQU5HRV07XG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShociwgaHlwaGVuUmVwbGFjZSk7XG4gIGRlYnVnKCdoeXBoZW4gcmVwbGFjZScsIHJhbmdlKTtcbiAgLy8gYD4gMS4yLjMgPCAxLjIuNWAgPT4gYD4xLjIuMyA8MS4yLjVgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDT01QQVJBVE9SVFJJTV0sIGNvbXBhcmF0b3JUcmltUmVwbGFjZSk7XG4gIGRlYnVnKCdjb21wYXJhdG9yIHRyaW0nLCByYW5nZSwgcmVbQ09NUEFSQVRPUlRSSU1dKTtcblxuICAvLyBgfiAxLjIuM2AgPT4gYH4xLjIuM2BcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW1RJTERFVFJJTV0sIHRpbGRlVHJpbVJlcGxhY2UpO1xuXG4gIC8vIGBeIDEuMi4zYCA9PiBgXjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbQ0FSRVRUUklNXSwgY2FyZXRUcmltUmVwbGFjZSk7XG5cbiAgLy8gbm9ybWFsaXplIHNwYWNlc1xuICByYW5nZSA9IHJhbmdlLnNwbGl0KC9cXHMrLykuam9pbignICcpO1xuXG4gIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSByYW5nZSBpcyBjb21wbGV0ZWx5IHRyaW1tZWQgYW5kXG4gIC8vIHJlYWR5IHRvIGJlIHNwbGl0IGludG8gY29tcGFyYXRvcnMuXG5cbiAgdmFyIGNvbXBSZSA9IGxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgc2V0ID0gcmFuZ2Uuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBwYXJzZUNvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJykuc3BsaXQoL1xccysvKTtcbiAgaWYgKHRoaXMubG9vc2UpIHtcbiAgICAvLyBpbiBsb29zZSBtb2RlLCB0aHJvdyBvdXQgYW55IHRoYXQgYXJlIG5vdCB2YWxpZCBjb21wYXJhdG9yc1xuICAgIHNldCA9IHNldC5maWx0ZXIoZnVuY3Rpb24oY29tcCkge1xuICAgICAgcmV0dXJuICEhY29tcC5tYXRjaChjb21wUmUpO1xuICAgIH0pO1xuICB9XG4gIHNldCA9IHNldC5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBuZXcgQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pO1xuXG4gIHJldHVybiBzZXQ7XG59O1xuXG4vLyBNb3N0bHkganVzdCBmb3IgdGVzdGluZyBhbmQgbGVnYWN5IEFQSSByZWFzb25zXG5leHBvcnRzLnRvQ29tcGFyYXRvcnMgPSB0b0NvbXBhcmF0b3JzO1xuZnVuY3Rpb24gdG9Db21wYXJhdG9ycyhyYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpLnNldC5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBjb21wLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICByZXR1cm4gYy52YWx1ZTtcbiAgICB9KS5qb2luKCcgJykudHJpbSgpLnNwbGl0KCcgJyk7XG4gIH0pO1xufVxuXG4vLyBjb21wcmlzZWQgb2YgeHJhbmdlcywgdGlsZGVzLCBzdGFycywgYW5kIGd0bHQncyBhdCB0aGlzIHBvaW50LlxuLy8gYWxyZWFkeSByZXBsYWNlZCB0aGUgaHlwaGVuIHJhbmdlc1xuLy8gdHVybiBpbnRvIGEgc2V0IG9mIEpVU1QgY29tcGFyYXRvcnMuXG5mdW5jdGlvbiBwYXJzZUNvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ2NvbXAnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VDYXJldHMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygnY2FyZXQnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VUaWxkZXMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygndGlsZGVzJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlWFJhbmdlcyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCd4cmFuZ2UnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VTdGFycyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCdzdGFycycsIGNvbXApO1xuICByZXR1cm4gY29tcDtcbn1cblxuZnVuY3Rpb24gaXNYKGlkKSB7XG4gIHJldHVybiAhaWQgfHwgaWQudG9Mb3dlckNhc2UoKSA9PT0gJ3gnIHx8IGlkID09PSAnKic7XG59XG5cbi8vIH4sIH4+IC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gfjIsIH4yLngsIH4yLngueCwgfj4yLCB+PjIueCB+PjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gfjIuMCwgfjIuMC54LCB+PjIuMCwgfj4yLjAueCAtLT4gPj0yLjAuMCA8Mi4xLjBcbi8vIH4xLjIsIH4xLjIueCwgfj4xLjIsIH4+MS4yLnggLS0+ID49MS4yLjAgPDEuMy4wXG4vLyB+MS4yLjMsIH4+MS4yLjMgLS0+ID49MS4yLjMgPDEuMy4wXG4vLyB+MS4yLjAsIH4+MS4yLjAgLS0+ID49MS4yLjAgPDEuMy4wXG5mdW5jdGlvbiByZXBsYWNlVGlsZGVzKGNvbXAsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VUaWxkZShjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVRpbGRlKGNvbXAsIGxvb3NlKSB7XG4gIHZhciByID0gbG9vc2UgPyByZVtUSUxERUxPT1NFXSA6IHJlW1RJTERFXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihfLCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCd0aWxkZScsIGNvbXAsIF8sIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgcmV0O1xuXG4gICAgaWYgKGlzWChNKSlcbiAgICAgIHJldCA9ICcnO1xuICAgIGVsc2UgaWYgKGlzWChtKSlcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICBlbHNlIGlmIChpc1gocCkpXG4gICAgICAvLyB+MS4yID09ID49MS4yLjAgPDEuMy4wXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZVRpbGRlIHByJywgcHIpO1xuICAgICAgaWYgKHByLmNoYXJBdCgwKSAhPT0gJy0nKVxuICAgICAgICBwciA9ICctJyArIHByO1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIH0gZWxzZVxuICAgICAgLy8gfjEuMi4zID09ID49MS4yLjMgPDEuMy4wXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuXG4gICAgZGVidWcoJ3RpbGRlIHJldHVybicsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbi8vIF4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyBeMiwgXjIueCwgXjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjIuMCwgXjIuMC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjEuMiwgXjEuMi54IC0tPiA+PTEuMi4wIDwyLjAuMFxuLy8gXjEuMi4zIC0tPiA+PTEuMi4zIDwyLjAuMFxuLy8gXjEuMi4wIC0tPiA+PTEuMi4wIDwyLjAuMFxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0cyhjb21wLCBsb29zZSkge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlQ2FyZXQoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDYXJldChjb21wLCBsb29zZSkge1xuICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBsb29zZSk7XG4gIHZhciByID0gbG9vc2UgPyByZVtDQVJFVExPT1NFXSA6IHJlW0NBUkVUXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihfLCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCdjYXJldCcsIGNvbXAsIF8sIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgcmV0O1xuXG4gICAgaWYgKGlzWChNKSlcbiAgICAgIHJldCA9ICcnO1xuICAgIGVsc2UgaWYgKGlzWChtKSlcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICBlbHNlIGlmIChpc1gocCkpIHtcbiAgICAgIGlmIChNID09PSAnMCcpXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlQ2FyZXQgcHInLCBwcik7XG4gICAgICBpZiAocHIuY2hhckF0KDApICE9PSAnLScpXG4gICAgICAgIHByID0gJy0nICsgcHI7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArIG0gKyAnLicgKyAoK3AgKyAxKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgJyA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Zygnbm8gcHInKTtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJylcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArIG0gKyAnLicgKyAoK3AgKyAxKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfVxuXG4gICAgZGVidWcoJ2NhcmV0IHJldHVybicsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2VzKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdyZXBsYWNlWFJhbmdlcycsIGNvbXAsIGxvb3NlKTtcbiAgcmV0dXJuIGNvbXAuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlWFJhbmdlKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlWFJhbmdlKGNvbXAsIGxvb3NlKSB7XG4gIGNvbXAgPSBjb21wLnRyaW0oKTtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW1hSQU5HRUxPT1NFXSA6IHJlW1hSQU5HRV07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24ocmV0LCBndGx0LCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCd4UmFuZ2UnLCBjb21wLCByZXQsIGd0bHQsIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgeE0gPSBpc1goTSk7XG4gICAgdmFyIHhtID0geE0gfHwgaXNYKG0pO1xuICAgIHZhciB4cCA9IHhtIHx8IGlzWChwKTtcbiAgICB2YXIgYW55WCA9IHhwO1xuXG4gICAgaWYgKGd0bHQgPT09ICc9JyAmJiBhbnlYKVxuICAgICAgZ3RsdCA9ICcnO1xuXG4gICAgaWYgKHhNKSB7XG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nIHx8IGd0bHQgPT09ICc8Jykge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGFsbG93ZWRcbiAgICAgICAgcmV0ID0gJzwwLjAuMCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGZvcmJpZGRlblxuICAgICAgICByZXQgPSAnKic7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChndGx0ICYmIGFueVgpIHtcbiAgICAgIC8vIHJlcGxhY2UgWCB3aXRoIDBcbiAgICAgIGlmICh4bSlcbiAgICAgICAgbSA9IDA7XG4gICAgICBpZiAoeHApXG4gICAgICAgIHAgPSAwO1xuXG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nKSB7XG4gICAgICAgIC8vID4xID0+ID49Mi4wLjBcbiAgICAgICAgLy8gPjEuMiA9PiA+PTEuMy4wXG4gICAgICAgIC8vID4xLjIuMyA9PiA+PSAxLjIuNFxuICAgICAgICBndGx0ID0gJz49JztcbiAgICAgICAgaWYgKHhtKSB7XG4gICAgICAgICAgTSA9ICtNICsgMTtcbiAgICAgICAgICBtID0gMDtcbiAgICAgICAgICBwID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgICAgIG0gPSArbSArIDE7XG4gICAgICAgICAgcCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ3RsdCA9PT0gJzw9Jykge1xuICAgICAgICAvLyA8PTAuNy54IGlzIGFjdHVhbGx5IDwwLjguMCwgc2luY2UgYW55IDAuNy54IHNob3VsZFxuICAgICAgICAvLyBwYXNzLiAgU2ltaWxhcmx5LCA8PTcueCBpcyBhY3R1YWxseSA8OC4wLjAsIGV0Yy5cbiAgICAgICAgZ3RsdCA9ICc8JztcbiAgICAgICAgaWYgKHhtKVxuICAgICAgICAgIE0gPSArTSArIDE7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBtID0gK20gKyAxO1xuICAgICAgfVxuXG4gICAgICByZXQgPSBndGx0ICsgTSArICcuJyArIG0gKyAnLicgKyBwO1xuICAgIH0gZWxzZSBpZiAoeG0pIHtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIH1cblxuICAgIGRlYnVnKCd4UmFuZ2UgcmV0dXJuJywgcmV0KTtcblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG4vLyBCZWNhdXNlICogaXMgQU5ELWVkIHdpdGggZXZlcnl0aGluZyBlbHNlIGluIHRoZSBjb21wYXJhdG9yLFxuLy8gYW5kICcnIG1lYW5zIFwiYW55IHZlcnNpb25cIiwganVzdCByZW1vdmUgdGhlICpzIGVudGlyZWx5LlxuZnVuY3Rpb24gcmVwbGFjZVN0YXJzKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdyZXBsYWNlU3RhcnMnLCBjb21wLCBsb29zZSk7XG4gIC8vIExvb3NlbmVzcyBpcyBpZ25vcmVkIGhlcmUuICBzdGFyIGlzIGFsd2F5cyBhcyBsb29zZSBhcyBpdCBnZXRzIVxuICByZXR1cm4gY29tcC50cmltKCkucmVwbGFjZShyZVtTVEFSXSwgJycpO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCB0byBzdHJpbmcucmVwbGFjZShyZVtIWVBIRU5SQU5HRV0pXG4vLyBNLCBtLCBwYXRjaCwgcHJlcmVsZWFzZSwgYnVpbGRcbi8vIDEuMiAtIDMuNC41ID0+ID49MS4yLjAgPD0zLjQuNVxuLy8gMS4yLjMgLSAzLjQgPT4gPj0xLjIuMCA8My41LjAgQW55IDMuNC54IHdpbGwgZG9cbi8vIDEuMiAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMFxuZnVuY3Rpb24gaHlwaGVuUmVwbGFjZSgkMCxcbiAgICAgICAgICAgICAgICAgICAgICAgZnJvbSwgZk0sIGZtLCBmcCwgZnByLCBmYixcbiAgICAgICAgICAgICAgICAgICAgICAgdG8sIHRNLCB0bSwgdHAsIHRwciwgdGIpIHtcblxuICBpZiAoaXNYKGZNKSlcbiAgICBmcm9tID0gJyc7XG4gIGVsc2UgaWYgKGlzWChmbSkpXG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuMC4wJztcbiAgZWxzZSBpZiAoaXNYKGZwKSlcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4nICsgZm0gKyAnLjAnO1xuICBlbHNlXG4gICAgZnJvbSA9ICc+PScgKyBmcm9tO1xuXG4gIGlmIChpc1godE0pKVxuICAgIHRvID0gJyc7XG4gIGVsc2UgaWYgKGlzWCh0bSkpXG4gICAgdG8gPSAnPCcgKyAoK3RNICsgMSkgKyAnLjAuMCc7XG4gIGVsc2UgaWYgKGlzWCh0cCkpXG4gICAgdG8gPSAnPCcgKyB0TSArICcuJyArICgrdG0gKyAxKSArICcuMCc7XG4gIGVsc2UgaWYgKHRwcilcbiAgICB0byA9ICc8PScgKyB0TSArICcuJyArIHRtICsgJy4nICsgdHAgKyAnLScgKyB0cHI7XG4gIGVsc2VcbiAgICB0byA9ICc8PScgKyB0bztcblxuICByZXR1cm4gKGZyb20gKyAnICcgKyB0bykudHJpbSgpO1xufVxuXG5cbi8vIGlmIEFOWSBvZiB0aGUgc2V0cyBtYXRjaCBBTEwgb2YgaXRzIGNvbXBhcmF0b3JzLCB0aGVuIHBhc3NcblJhbmdlLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBpZiAoIXZlcnNpb24pXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpXG4gICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0ZXN0U2V0KHRoaXMuc2V0W2ldLCB2ZXJzaW9uKSlcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmZ1bmN0aW9uIHRlc3RTZXQoc2V0LCB2ZXJzaW9uKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFzZXRbaV0udGVzdCh2ZXJzaW9uKSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgLy8gRmluZCB0aGUgc2V0IG9mIHZlcnNpb25zIHRoYXQgYXJlIGFsbG93ZWQgdG8gaGF2ZSBwcmVyZWxlYXNlc1xuICAgIC8vIEZvciBleGFtcGxlLCBeMS4yLjMtcHIuMSBkZXN1Z2FycyB0byA+PTEuMi4zLXByLjEgPDIuMC4wXG4gICAgLy8gVGhhdCBzaG91bGQgYWxsb3cgYDEuMi4zLXByLjJgIHRvIHBhc3MuXG4gICAgLy8gSG93ZXZlciwgYDEuMi40LWFscGhhLm5vdHJlYWR5YCBzaG91bGQgTk9UIGJlIGFsbG93ZWQsXG4gICAgLy8gZXZlbiB0aG91Z2ggaXQncyB3aXRoaW4gdGhlIHJhbmdlIHNldCBieSB0aGUgY29tcGFyYXRvcnMuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYnVnKHNldFtpXS5zZW12ZXIpO1xuICAgICAgaWYgKHNldFtpXS5zZW12ZXIgPT09IEFOWSlcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgYWxsb3dlZCA9IHNldFtpXS5zZW12ZXI7XG4gICAgICAgIGlmIChhbGxvd2VkLm1ham9yID09PSB2ZXJzaW9uLm1ham9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLm1pbm9yID09PSB2ZXJzaW9uLm1pbm9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLnBhdGNoID09PSB2ZXJzaW9uLnBhdGNoKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFZlcnNpb24gaGFzIGEgLXByZSwgYnV0IGl0J3Mgbm90IG9uZSBvZiB0aGUgb25lcyB3ZSBsaWtlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnRzLnNhdGlzZmllcyA9IHNhdGlzZmllcztcbmZ1bmN0aW9uIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgdHJ5IHtcbiAgICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gcmFuZ2UudGVzdCh2ZXJzaW9uKTtcbn1cblxuZXhwb3J0cy5tYXhTYXRpc2Z5aW5nID0gbWF4U2F0aXNmeWluZztcbmZ1bmN0aW9uIG1heFNhdGlzZnlpbmcodmVyc2lvbnMsIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gdmVyc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiByY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pWzBdIHx8IG51bGw7XG59XG5cbmV4cG9ydHMubWluU2F0aXNmeWluZyA9IG1pblNhdGlzZnlpbmc7XG5mdW5jdGlvbiBtaW5TYXRpc2Z5aW5nKHZlcnNpb25zLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIHZlcnNpb25zLmZpbHRlcihmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpO1xuICB9KS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pWzBdIHx8IG51bGw7XG59XG5cbmV4cG9ydHMudmFsaWRSYW5nZSA9IHZhbGlkUmFuZ2U7XG5mdW5jdGlvbiB2YWxpZFJhbmdlKHJhbmdlLCBsb29zZSkge1xuICB0cnkge1xuICAgIC8vIFJldHVybiAnKicgaW5zdGVhZCBvZiAnJyBzbyB0aGF0IHRydXRoaW5lc3Mgd29ya3MuXG4gICAgLy8gVGhpcyB3aWxsIHRocm93IGlmIGl0J3MgaW52YWxpZCBhbnl3YXlcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkucmFuZ2UgfHwgJyonO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGxlc3MgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZVxuZXhwb3J0cy5sdHIgPSBsdHI7XG5mdW5jdGlvbiBsdHIodmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPCcsIGxvb3NlKTtcbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlLlxuZXhwb3J0cy5ndHIgPSBndHI7XG5mdW5jdGlvbiBndHIodmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPicsIGxvb3NlKTtcbn1cblxuZXhwb3J0cy5vdXRzaWRlID0gb3V0c2lkZTtcbmZ1bmN0aW9uIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsIGhpbG8sIGxvb3NlKSB7XG4gIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcbiAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB2YXIgZ3RmbiwgbHRlZm4sIGx0Zm4sIGNvbXAsIGVjb21wO1xuICBzd2l0Y2ggKGhpbG8pIHtcbiAgICBjYXNlICc+JzpcbiAgICAgIGd0Zm4gPSBndDtcbiAgICAgIGx0ZWZuID0gbHRlO1xuICAgICAgbHRmbiA9IGx0O1xuICAgICAgY29tcCA9ICc+JztcbiAgICAgIGVjb21wID0gJz49JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJzwnOlxuICAgICAgZ3RmbiA9IGx0O1xuICAgICAgbHRlZm4gPSBndGU7XG4gICAgICBsdGZuID0gZ3Q7XG4gICAgICBjb21wID0gJzwnO1xuICAgICAgZWNvbXAgPSAnPD0nO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3QgcHJvdmlkZSBhIGhpbG8gdmFsIG9mIFwiPFwiIG9yIFwiPlwiJyk7XG4gIH1cblxuICAvLyBJZiBpdCBzYXRpc2lmZXMgdGhlIHJhbmdlIGl0IGlzIG5vdCBvdXRzaWRlXG4gIGlmIChzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEZyb20gbm93IG9uLCB2YXJpYWJsZSB0ZXJtcyBhcmUgYXMgaWYgd2UncmUgaW4gXCJndHJcIiBtb2RlLlxuICAvLyBidXQgbm90ZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgZmxpcHBlZCBmb3IgdGhlIFwibHRyXCIgZnVuY3Rpb24uXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByYW5nZS5zZXQubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgY29tcGFyYXRvcnMgPSByYW5nZS5zZXRbaV07XG5cbiAgICB2YXIgaGlnaCA9IG51bGw7XG4gICAgdmFyIGxvdyA9IG51bGw7XG5cbiAgICBjb21wYXJhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBhcmF0b3IpIHtcbiAgICAgIGlmIChjb21wYXJhdG9yLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICAgIGNvbXBhcmF0b3IgPSBuZXcgQ29tcGFyYXRvcignPj0wLjAuMCcpXG4gICAgICB9XG4gICAgICBoaWdoID0gaGlnaCB8fCBjb21wYXJhdG9yO1xuICAgICAgbG93ID0gbG93IHx8IGNvbXBhcmF0b3I7XG4gICAgICBpZiAoZ3Rmbihjb21wYXJhdG9yLnNlbXZlciwgaGlnaC5zZW12ZXIsIGxvb3NlKSkge1xuICAgICAgICBoaWdoID0gY29tcGFyYXRvcjtcbiAgICAgIH0gZWxzZSBpZiAobHRmbihjb21wYXJhdG9yLnNlbXZlciwgbG93LnNlbXZlciwgbG9vc2UpKSB7XG4gICAgICAgIGxvdyA9IGNvbXBhcmF0b3I7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGUgZWRnZSB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGEgb3BlcmF0b3IgdGhlbiBvdXIgdmVyc2lvblxuICAgIC8vIGlzbid0IG91dHNpZGUgaXRcbiAgICBpZiAoaGlnaC5vcGVyYXRvciA9PT0gY29tcCB8fCBoaWdoLm9wZXJhdG9yID09PSBlY29tcCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBsb3dlc3QgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhbiBvcGVyYXRvciBhbmQgb3VyIHZlcnNpb25cbiAgICAvLyBpcyBsZXNzIHRoYW4gaXQgdGhlbiBpdCBpc24ndCBoaWdoZXIgdGhhbiB0aGUgcmFuZ2VcbiAgICBpZiAoKCFsb3cub3BlcmF0b3IgfHwgbG93Lm9wZXJhdG9yID09PSBjb21wKSAmJlxuICAgICAgICBsdGVmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAobG93Lm9wZXJhdG9yID09PSBlY29tcCAmJiBsdGZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnRzLnByZXJlbGVhc2UgPSBwcmVyZWxlYXNlO1xuZnVuY3Rpb24gcHJlcmVsZWFzZSh2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgcGFyc2VkID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gKHBhcnNlZCAmJiBwYXJzZWQucHJlcmVsZWFzZS5sZW5ndGgpID8gcGFyc2VkLnByZXJlbGVhc2UgOiBudWxsO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3NlbXZlci9zZW12ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxMjcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL29ic2VydmFibGUvZnJvbVByb21pc2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxMjkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL29wZXJhdG9yL2NhdGNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTQxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy91dGlsL3RyeUNhdGNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMjYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL091dGVyU3Vic2NyaWJlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDI4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9TdWJzY3JpcHRpb24uanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgzMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDU3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy91dGlsL2Vycm9yT2JqZWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcclxuaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcGF0Y2gnO1xyXG5pbXBvcnQgJ3pvbmUuanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJSZW5kZXJlciwgUmVuZGVyUmVzdWx0IH0gZnJvbSAnYXNwbmV0LXByZXJlbmRlcmluZyc7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcclxuXHJcbmVuYWJsZVByb2RNb2RlKCk7XHJcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VydmVyUmVuZGVyZXIocGFyYW1zID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW5kZXJSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0Wm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKHtcclxuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICBiYXNlVXJsOiAnLycsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgcHJlYm9vdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzxhcHA+PC9hcHA+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTtcclxuICAgIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHMiXSwic291cmNlUm9vdCI6IiJ9