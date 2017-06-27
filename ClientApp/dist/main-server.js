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
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
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
__export(__webpack_require__(12));


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

module.exports = (__webpack_require__(0))(98);

/***/ }),
/* 9 */
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
var Subject_1 = __webpack_require__(14);
__webpack_require__(13);
__webpack_require__(54);
__webpack_require__(55);
__webpack_require__(52);
__webpack_require__(53);
__webpack_require__(51);
var video_services_1 = __webpack_require__(5);
var video_details_enums_1 = __webpack_require__(10);
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
            _this.video.originalTitle = res.title;
            _this.video.originalDescription = res.description;
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
        template: __webpack_require__(48)
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, video_services_1.VideoService, video_services_1.oEmbedService])
], VideoDetailsComponent);
exports.VideoDetailsComponent = VideoDetailsComponent;


/***/ }),
/* 10 */
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
var http_1 = __webpack_require__(3);
//ng2
var core_1 = __webpack_require__(1); //View
var video_services_1 = __webpack_require__(5);
var video_oembed_service_1 = __webpack_require__(12);
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
        template: __webpack_require__(49),
        styles: [__webpack_require__(68)]
    }),
    __metadata("design:paramtypes", [http_1.Http, video_services_1.VideoService, video_oembed_service_1.oEmbedService])
], VideoListComponent);
exports.VideoListComponent = VideoListComponent;


/***/ }),
/* 12 */
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
__webpack_require__(13);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(122);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(27);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(4);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(6);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(8);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
var semver = __webpack_require__(65);
var __core__ = __webpack_require__(1);
var coreVersion = __core__ && __core__.VERSION && __core__.VERSION.full;

// Only patch if you're on Angular >= 2.1.1 and < the next major version (including prerelease)
if (coreVersion && semver.satisfies(coreVersion, '^2.1.1')) {
    var __compiler__ = __webpack_require__(17);
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
     true ? factory(exports, __webpack_require__(1), __webpack_require__(60), __webpack_require__(14), __webpack_require__(2), __webpack_require__(69)) :
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

var platform_browser_1 = __webpack_require__(15);
var core_1 = __webpack_require__(1);
var compiler_1 = __webpack_require__(17);
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
        template: __webpack_require__(43),
        styles: [__webpack_require__(66)]
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
        template: __webpack_require__(44)
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
        template: __webpack_require__(45)
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
        template: __webpack_require__(46)
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
        template: __webpack_require__(47),
        styles: [__webpack_require__(67)]
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
var platform_browser_1 = __webpack_require__(15);
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
var video_details_enums_1 = __webpack_require__(10);
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
__export(__webpack_require__(11));
__export(__webpack_require__(9));


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
var video_list_component_1 = __webpack_require__(11);
var video_details_component_1 = __webpack_require__(9);
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

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n", ""]);

// exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "\tul { padding:0;  margin:20px auto; list-style-type: none;}\r\n  \tli { display:inline; }\r\n  /*      .tn{ \r\n\t   margin:2px 0px;\r\n\t   box-shadow:#999 1px 1px 3px 1px; \r\n\t   cursor: pointer;\r\n        } */\r\n    li { text-decoration: none;}", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-3'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='col-sm-9 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular 2 component.</p>\r\n\r\n<p>Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button (click)=\"incrementCounter()\">Increment</button>\r\n";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<h1>Videos Sample</h1>\r\n\r\n<p>This component shows a simple fetching of Web API data.</p>\r\n\r\n<p *ngIf=\"!videos\"><em>Loading...</em></p>\r\n\r\n<table class='table' *ngIf=\"videos\">\r\n    <thead>\r\n        <tr>\r\n            <th>Created</th>\r\n            <th>Category</th>\r\n            <th>Name</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let video of videos\">\r\n            <td>{{ video.createdDate }}</td>\r\n            <td>{{ video.category }}</td>\r\n            <td>{{ video.name }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<h1>Hello, world!</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\r\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\r\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\r\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\r\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\r\n</ul>\r\n";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/home']\">DotNetVideosCore</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/home']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/counter']\">\r\n                        <span class='glyphicon glyphicon-education'></span> Counter\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/fetch-data']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/video-list']\">\r\n                        <span class='glyphicon glyphicon-film'></span> Videos\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<h3>Video Details</h3>\r\n<div *ngIf=\"video\">\r\n<form #form=\"ngForm\" novalidate (submit)=\"onSubmit(form)\" >    \r\n    <fieldset class=\"form-group\">\r\n        <label for=\"videoTitle\">Title: </label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"video.title\" name=\"video.title\" placeholder=\"Title\" id=\"videoTitle\" />        \r\n    </fieldset>\r\n    <fieldset class=\"form-group\">\r\n        <label for=\"videoTitle\">Description: </label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"video.description\" name=\"video.description\" placeholder=\"Description\" id=\"videoDescription\" />        \r\n    </fieldset>\r\n    <fieldset class=\"form-group\">\r\n        <label for=\"videoUrl\">Url:</label>\r\n        <input type=\"text\" class=\"form-control\" [ngModel]=\"video.url\" (ngModelChange)=\"validateVideoUrl($event)\" name=\"video.url\" placeholder=\"Url\" id=\"videoUrl\" />\r\n    </fieldset>    \r\n    <fieldset class=\"form-group\">\r\n        <label for=\"videoOrigin\">Origin:</label>\r\n       <select class=\"form-control\" [(ngModel)]=\"video.videoOrigin\" name=\"video.videoOrigin\">\r\n                <option *ngFor=\"let origin of videoOrigins | keys\" [value]=\"origin.key\">{{origin.value}}</option>\r\n            </select>\r\n    </fieldset>\r\n    <fieldset class=\"form-group\">\r\n        <label>Thumbnail Image:</label>\r\n        <img [src] = \"video.thumbUrl\" />\r\n    </fieldset>\r\n    <button class=\"btn btn-primary\" type=\"submit\">Ok</button>\r\n    {{ form.value | json}}\r\n    {{ video | json }}\r\n</form>\r\n</div>\r\n<div class=\"container\" [innerHtml]=\"preview?.html | safe: 'html'\">\r\n\r\n    <hr />\r\n    <!--<div *ngIf=\"displayMode === 'watch'\">\r\n        <video-watch [video]=\"videoDetails\">\r\n        </video-watch>\r\n    </div>\r\n    <div *ngIf=\"displayMode !== 'watch'\">\r\n        <form [ngFormModel]=\"videoForm\" id=\"video-details-add\" *ngIf=\"videoDetails\" (ngSubmit)=\"saveVideo(videoForm.value)\">\r\n            \r\n            <fieldset class=\"form-group\">\r\n                <label>Rating: </label>\r\n                <input class=\"form-control\" placeholder=\"rating\" [(ngModel)]=\"videoDetails.rating\" ngControl=\"rating\" />\r\n                <span *ngIf=\"!videoForm.controls.rating?.valid\">\r\n                The rating must be between 0 and 5!\r\n            </span>\r\n            </fieldset>\r\n            <fieldset class=\"form-group\">\r\n                <label>url: </label>\r\n                <input class=\"form-control\" placeholder=\"url\" [(ngModel)]=\"videoDetails.url\" ngControl=\"url\" />\r\n                <ul *ngIf=\"!videoForm.controls.url?.valid\">\r\n                    The URL is invalid. Possible issues:<br />\r\n                    <li *ngIf=\"videoForm.controls.url?.emptyUrl\">\r\n                        The URL cannot be empty\r\n                    </li>\r\n                    <li *ngIf=\"videoForm.controls.url?.invalidUrl\">\r\n                        The URL format was not recognized by the system.\r\n                    </li>\r\n                </ul>\r\n            </fieldset>\r\n            <fieldset>\r\n                <label for=\"VideoOrigin\">Source:</label>\r\n                <select class=\"form-control\" [(ngModel)]=\"videoDetails.videoOrigin\" ngControl=\"videoOrigin\">\r\n                <option *ngFor=\"let origin of videoOrigins | keys\" [value]=\"origin.key\">{{origin.value}}</option>\r\n            </select>\r\n            </fieldset>\r\n\r\n            <button type=\"submit\" class=\"ui button\">Submit</button>\r\n        </form>\r\n    </div>-->\r\n</div>";

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"videos\">\r\n    <!--(click)=\"onVideoSelected(video)\"-->\r\n\r\n    <h1> Hello from video-list component </h1>\r\n\r\n    <div class=\"row\" *ngFor=\"let video of videos | async\">\r\n        <div class=\"col-md-4 col-sm-6\">\r\n            <div class=\"thumbnail\">\r\n                <img [src]=\"video.thumbUrl\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-8 col-sm-6\">\r\n            <h3>{{video.title}}</h3>\r\n            <p><strong>Original Title: </strong>{{video.originalTitle}}</p>\r\n\r\n            <div *ngIf=\"video.description\">\r\n                <p><strong>Original Description: </strong>{{video.originalDescription}}</p>\r\n                <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Play</a>\r\n            </div>\r\n            <div *ngIf=\"!video.description && video.originalDescription\">\r\n                <p><strong>Original Description: </strong>{{video.originalDescription}}</p>\r\n            </div>\r\n            <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Play</a>\r\n                <a [routerLink]=\"['/video-details/', video.id]\" class=\"btn btn-default\" role=\"button\">Edit</a></p>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <a [routerLink]=\"['/video-details/', 0]\">Add\r\n                        </a>\r\n        <!--<div class=\"col-sm-6 col-md-3\" *ngFor=\" let video of videos \">\r\n            <div class=\"thumbnail\">\r\n                <p *ngIf=\"!videos\"><em>Loading...</em></p>-->\r\n\r\n        <!--<table class='table'>\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Created</th>\r\n                            <th>Category</th>\r\n                            <th>Name</th>\r\n                            <th>Edit</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let video of videos\">\r\n                            <td>{{ video.createdDate }}</td>\r\n                            <td>{{ video.category }}</td>\r\n                            <td>{{ video.name }}</td>\r\n                            <td><a [routerLink]=\"['/video-details', video.name]\">Details </a></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>-->\r\n\r\n\r\n        <!--<img *ngIf=\"video.thumbUrl\" [src]=\"video.thumbUrl\" />\r\n                <div class=\"caption\">\r\n                    <h3>\r\n                        <a [routerLink] = \"['Video', {mode: 'watch', id: video._id}]\">\r\n                        {{video.title}}\r\n                        </a>\r\n                        </h3>\r\n                    <p>Length: {{video.length}}</p>\r\n                    <p>Watched: {{video.watchedCount}}</p>\r\n                    <p>Rating: {{video.rating}}</p>\r\n                    <p><a [href]=\"video.localUrl\" class=\"btn btn-primary\" role=\"button\">Watch</a> <a [href]=\"video.url\" class=\"btn btn-default\"\r\n                            role=\"button\">Watch</a></p>\r\n                </div>-->\r\n        <!--</div>\r\n        </div>-->\r\n    </div>\r\n</div>";

/***/ }),
/* 50 */
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(2);
var catch_1 = __webpack_require__(70);
Observable_1.Observable.prototype.catch = catch_1._catch;
Observable_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(2);
var debounceTime_1 = __webpack_require__(56);
Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(2);
var distinctUntilChanged_1 = __webpack_require__(57);
Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(2);
var do_1 = __webpack_require__(58);
Observable_1.Observable.prototype.do = do_1._do;
Observable_1.Observable.prototype._do = do_1._do;
//# sourceMappingURL=do.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(2);
var switchMap_1 = __webpack_require__(59);
Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
//# sourceMappingURL=switchMap.js.map

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
var async_1 = __webpack_require__(64);
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(6);
var tryCatch_1 = __webpack_require__(71);
var errorObject_1 = __webpack_require__(75);
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
/* 58 */
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(72);
var subscribeToResult_1 = __webpack_require__(74);
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(16);
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(73);
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__(16);
var Action_1 = __webpack_require__(61);
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scheduler_1 = __webpack_require__(50);
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AsyncAction_1 = __webpack_require__(62);
var AsyncScheduler_1 = __webpack_require__(63);
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
/* 65 */
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(40);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(41);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(42);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(127);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(129);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(141);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(26);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(28);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(32);

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(57);

/***/ }),
/* 76 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGJiMDE4NWFiMzlhZDBlOTAzYWYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvYnVuZGxlcy9jb3JlLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmFibGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9idW5kbGVzL2h0dHAudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby92aWRlby5zZXJ2aWNlcy50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvU3Vic2NyaWJlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvYnVuZGxlcy9yb3V0ZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby1kZXRhaWxzL3ZpZGVvLWRldGFpbHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvLWRldGFpbHMvdmlkZW8tZGV0YWlscy5lbnVtcy50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby1saXN0L3ZpZGVvLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvLW9lbWJlZC92aWRlby1vZW1iZWQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL21hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL1N1YmplY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvdXRpbC9yb290LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvbXBpbGVyL2J1bmRsZXMvY29tcGlsZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXIyLXVuaXZlcnNhbC1wYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy96b25lLmpzL2Rpc3Qvem9uZS1ub2RlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMvbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9+L0Bhbmd1bGFyL2Zvcm1zL2J1bmRsZXMvZm9ybXMudW1kLmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21tb24vY29tbW9uLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcGlwZXMvZW51bS5rZXlzLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9waXBlcy9zYWZlLmh0bWwucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby1kZXRhaWxzL3ZpZGVvLWRldGFpbHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby1kZXRhaWxzL3ZpZGVvLnZhbGlkYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby1vZW1iZWQvb2VtYmVkLXZpbWVvLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvLW9lbWJlZC9vZW1iZWQteW91dHViZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby92aWRlb3MuY29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlb3Mtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC92aWRlb3MvdmlkZW9zLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC92aWRlb3MvdmlkZW8tZGV0YWlscy92aWRlby1kZXRhaWxzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9+L3J4anMvU2NoZWR1bGVyLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL2FkZC9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvYWRkL29wZXJhdG9yL2RvLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9vcGVyYXRvci9kZWJvdW5jZVRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9vcGVyYXRvci9kby5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvb3BlcmF0b3Ivc3dpdGNoTWFwLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9vcGVyYXRvci90b1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3NjaGVkdWxlci9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3NjaGVkdWxlci9Bc3luY0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvc2NoZWR1bGVyL0FzeW5jU2NoZWR1bGVyLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9zY2hlZHVsZXIvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zZW12ZXIvc2VtdmVyLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzPzk4MTciLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz8zOWE3Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQuY3NzPzU1MjYiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL29ic2VydmFibGUvZnJvbVByb21pc2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9vcGVyYXRvci9jYXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL3V0aWwvdHJ5Q2F0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9PdXRlclN1YnNjcmliZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9TdWJzY3JpcHRpb24uanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy91dGlsL3N1YnNjcmliZVRvUmVzdWx0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvdXRpbC9lcnJvck9iamVjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RCxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDLHNDQUFzQztBQUN0QyxvQ0FBb0M7QUFDcEMsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFD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QyxJQUFJLENBQUMsY0FBSTtZQUN4RixPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDZixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDBiYjAxODVhYjM5YWQwZTkwM2FmIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi92ZW5kb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIuL3ZlbmRvclwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmFibGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9idW5kbGVzL2h0dHAudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg3MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgKiBmcm9tICcuLi92aWRlby1kZXRhaWxzL3ZpZGVvLWRldGFpbHMuc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4uL3ZpZGVvLWRldGFpbHMvdmlkZW8udmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi4vdmlkZW8tb2VtYmVkL3ZpZGVvLW9lbWJlZC5zZXJ2aWNlJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvL3ZpZGVvLnNlcnZpY2VzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvU3Vic2NyaWJlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNjgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvYnVuZGxlcy9yb3V0ZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg5OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVzLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcblxyXG5pbXBvcnQgeyBJVmlkZW8sIG9FbWJlZCB9IGZyb20gJy4uL3ZpZGVvL3ZpZGVvLmludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBWaWRlb1NlcnZpY2UsIG9FbWJlZFNlcnZpY2UgfSBmcm9tICcuLi92aWRlby92aWRlby5zZXJ2aWNlcyc7XHJcblxyXG5pbXBvcnQgeyBWaWRlb09yaWdpbkVudW0gfSBmcm9tICcuL3ZpZGVvLWRldGFpbHMuZW51bXMnO1xyXG5pbXBvcnQgeyBFbnVtS2V5c1BpcGUgfSBmcm9tICcuLi8uLi9waXBlcy9lbnVtLmtleXMucGlwZSc7XHJcbmltcG9ydCB7IFNhZmVQaXBlIH0gZnJvbSAnLi4vLi4vcGlwZXMvc2FmZS5odG1sLnBpcGUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoXHJcbiAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6ICd2aWRlby1kZXRhaWxzJyxcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi92aWRlby1kZXRhaWxzLmNvbXBvbmVudC5odG1sJylcclxuICAgIH0pXHJcbmV4cG9ydCBjbGFzcyBWaWRlb0RldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHByaXZhdGUgdmlkZW86IElWaWRlbztcclxuICAgIHByaXZhdGUgdmlkZW9PcmlnaW5zID0gVmlkZW9PcmlnaW5FbnVtO1xyXG4gICAgcHJpdmF0ZSB2aWRlb1VybCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuICAgIHByaXZhdGUgcHJldmlldzogb0VtYmVkO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSB2aWRlb1NlcnZpY2U6IFZpZGVvU2VydmljZSwgcHJpdmF0ZSBvRW1iZWRTZXJ2aWNlOiBvRW1iZWRTZXJ2aWNlKSB7IH0gXHJcblxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zXHJcbiAgICAgICAgICAgIC5zd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PiB0aGlzLnZpZGVvU2VydmljZS5HZXRWaWRlbyhwYXJhbXNbJ2lkJ10pKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCh2aWRlbzogSVZpZGVvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvID0gdmlkZW87XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdWaWRlbyh2aWRlby51cmwsIHZpZGVvLnZpZGVvT3JpZ2luLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnZpZGVvVXJsXHJcbiAgICAgICAgICAgIC5kZWJvdW5jZVRpbWUoMTAwMClcclxuICAgICAgICAgICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh1cmwgPT4gdGhpcy5wcmV2aWV3VmlkZW8odXJsLCBcIlwiKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vdXNpbmcgU3ViamVjdDxzdHJpbmc+IHRvIGRlYm91bmNlIHVybCB2YWxpZGF0aW9uL3ZpZGVvIHByZXZpZXdcclxuICAgIHZhbGlkYXRlVmlkZW9VcmwoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMudmlkZW9VcmwubmV4dChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlld1ZpZGVvKHVybCA6IHN0cmluZywgcHJvdmlkZXJOYW1lOiBzdHJpbmcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJldmlldyB2aWRlbywgdXJsPSBcIiArIHVybCArIFwiLCBwcm92aWRlcj1cIiArIHByb3ZpZGVyTmFtZSk7XHJcbiAgICAgICAgaWYgKHVybCA9PT0gdW5kZWZpbmVkIHx8IHVybCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmlkZW8udXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMub0VtYmVkU2VydmljZS5jaGVja1ZpZGVvT0VtYmVkKHVybClcclxuICAgICAgICBcclxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlldyA9IHJlcztcclxuICAgICAgICAgICAgdGhpcy52aWRlby50aHVtYlVybCA9IHJlcy50aHVtYm5haWxfdXJsIGFzIHN0cmluZztcclxuICAgICAgICAgICAgdGhpcy52aWRlby5vcmlnaW5hbFRpdGxlID0gcmVzLnRpdGxlIGFzIHN0cmluZztcclxuICAgICAgICAgICAgdGhpcy52aWRlby5vcmlnaW5hbERlc2NyaXB0aW9uID0gcmVzLmRlc2NyaXB0aW9uIGFzIHN0cmluZztcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmV2aWV3KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGZvcm06IE5nRm9ybSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtb2RlbDogJyArIHRoaXMudmlkZW8pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmb3JtOiAnICsgZm9ybS52YWx1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW8uaWQgIT0gbnVsbCAmJiB0aGlzLnZpZGVvLmlkICE9IFwiMFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9TZXJ2aWNlLnVwZGF0ZVZpZGVvKHRoaXMudmlkZW8pLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzZnVsbHkgc2F2ZWQgdmlkZW8gd2l0aCBJRDogJyArIHRoaXMudmlkZW8uaWQpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZygnZXJyb3Igb24gc2F2aW5nIHZpZGVvJykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9TZXJ2aWNlLmNyZWF0ZVZpZGVvKHRoaXMudmlkZW8pLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzZnVsbHkgc2F2ZWQgdmlkZW8gd2l0aCBJRDogJyArIHRoaXMudmlkZW8uaWQpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZygnZXJyb3Igb24gc2F2aW5nIHZpZGVvJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC92aWRlb3MvdmlkZW8tZGV0YWlscy92aWRlby1kZXRhaWxzLmNvbXBvbmVudC50cyIsImVudW0gVmlkZW9PcmlnaW5FbnVtIHtcclxuICAgIFVua25vd24gPSAwLFxyXG4gICAgWW91VHViZSA9IDEsXHJcbiAgICBWaW1lbyxcclxuICAgIENoYW5uZWw5LFxyXG4gICAgXHJcbn1cclxuXHJcbmVudW0gVmlkZW9EaXNwbGF5TW9kZSB7XHJcbiAgQ3JlYXRlLFxyXG4gIFJlYWQsXHJcbiAgQ29tcGFjdFJlYWQsXHJcbiAgRWRpdFxyXG59XHJcblxyXG5cclxuZXhwb3J0IHtWaWRlb09yaWdpbkVudW0sIFZpZGVvRGlzcGxheU1vZGV9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC92aWRlb3MvdmlkZW8tZGV0YWlscy92aWRlby1kZXRhaWxzLmVudW1zLnRzIiwiaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuXHJcblxyXG5pbnRlcmZhY2UgVmlkZW8ge1xyXG4gICAgY3JlYXRlZERhdGU6IHN0cmluZztcclxuICAgIGNhdGVnb3J5OiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG4vL25nMlxyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJzsgLy9WaWV3XHJcbmltcG9ydCB7TmdGb3J9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtWaWRlb1NlcnZpY2V9IGZyb20gJy4uL3ZpZGVvL3ZpZGVvLnNlcnZpY2VzJztcclxuaW1wb3J0IHtvRW1iZWRTZXJ2aWNlfSBmcm9tICcuLi92aWRlby1vZW1iZWQvdmlkZW8tb2VtYmVkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJVmlkZW8gfSBmcm9tICcuLi92aWRlby92aWRlby5pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuLy9pbXBvcnQge1ZpZGVvRGV0YWlsc0NvbXBvbmVudH0gZnJvbSAnLi4vdmlkZW8tZGV0YWlscy92aWRlby1kZXRhaWxzLmNvbXBvbmVudCc7XHJcbkBDb21wb25lbnQoXHJcbiAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6ICd2aWRlby1saXN0JyxcclxuICAgICAgICAvL3Byb3ZpZGVyczogWy4uLiBIVFRQX1BST1ZJREVSUywgVmlkZW9TZXJ2aWNlLCBWaWRlb0RldGFpbHNDb21wb25lbnRdLFxyXG4gICAgICAgIC8vZGlyZWN0aXZlczogW1ZpZGVvRGV0YWlsc0NvbXBvbmVudF0sXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdmlkZW8tbGlzdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgIHN0eWxlczogW3JlcXVpcmUoJy4vdmlkZW8tbGlzdC5jb21wb25lbnQuY3NzJyldXHJcbiAgICB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpZGVvTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHsgXHJcbiAgICAgICAgdGhpcy52aWRlb3MgPSB0aGlzLnZpZGVvU2VydmljZS5HZXRWaWRlb3MoKTtcclxuICAgIH1cclxuICAgIC8vcHVibGljIHZpZGVvczogQXJyYXk8SVZpZGVvPiA9IFtdO1xyXG4gICAgcHVibGljIHNlbGVjdGVkVmlkZW86IElWaWRlbztcclxuICAgIHB1YmxpYyB2aWRlb3M6IE9ic2VydmFibGU8SVZpZGVvPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgdmlkZW9TZXJ2aWNlOiBWaWRlb1NlcnZpY2UsIHByaXZhdGUgb2VtYmVkU2VydmljZTogb0VtYmVkU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0cnVjdG9yKFxyXG4gICAgLy8gICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLy8sXHJcbiAgICAvLyAgIC8vICBwcml2YXRlIF92aWRlb1NlcnZpY2U6IFZpZGVvU2VydmljZVxyXG4gICAgLy8gICAgICkgeyBcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuX3ZpZGVvU2VydmljZS5nZXRWaWRlb3MoKVxyXG4gICAgLy8gICAgICAgICAvLyAuc3Vic2NyaWJlKFxyXG4gICAgLy8gICAgICAgICAvLyByZXMgPT4gdGhpcy52aWRlb3MucHVzaChyZXMpLFxyXG4gICAgLy8gICAgICAgICAvLyBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIC8vICAgICAgICAgLy8gKTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy9mcm9tLWNvZGUgYXBwcm9hY2hcclxuICAgIG9uVmlkZW9TZWxlY3RlZChzZWxlY3Rpb246IElWaWRlbykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWaWRlbyA9IHNlbGVjdGlvbjtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgdmlkZW8gd2l0aCBpZDogJyArIHNlbGVjdGlvbi5pZCk7XHJcbiAgICAgICAvLyB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydWaWRlbycsIHsgbW9kZTogJ3dhdGNoJywgaWQ6IHNlbGVjdGlvbi5pZCB9XSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC92aWRlb3MvdmlkZW8tbGlzdC92aWRlby1saXN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuaW1wb3J0IHsgb0VtYmVkLCBvRW1iZWREaWN0aW9uYXJ5IH0gZnJvbSAnLi4vdmlkZW8tb2VtYmVkL3ZpZGVvLW9lbWJlZC5pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgb0VtYmVkVmltZW8gfSBmcm9tICcuL29lbWJlZC12aW1lbyc7XHJcbmltcG9ydCB7IG9FbWJlZFlvdVR1YmUgfSBmcm9tICcuL29lbWJlZC15b3V0dWJlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIG9FbWJlZFNlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSBwcm92aWRlcnMgOiBvRW1iZWREaWN0aW9uYXJ5ID0ge31cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCApIHtcclxuICAgICAgICB0aGlzLnByb3ZpZGVyc1tcIlZpbWVvXCJdID0gbmV3IG9FbWJlZFZpbWVvKCk7O1xyXG4gICAgICAgIHRoaXMucHJvdmlkZXJzW1wiWW91VHViZVwiXSA9IG5ldyBvRW1iZWRZb3VUdWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjb2duaXplUHJvdmlkZXIodXJsOiBzdHJpbmcpIDogc3RyaW5nIHtcclxuICAgICAgICB2YXIgcHJvdmlkZXJOYW1lID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnByb3ZpZGVycykge1xyXG5cclxuICAgICAgICAgICAgbGV0IG9FbWJlZFByb3ZpZGVyIDogb0VtYmVkID0gdGhpcy5wcm92aWRlcnNba2V5XTtcclxuICAgICAgICAgICAgdmFyIHggPSB0eXBlb2Yob0VtYmVkUHJvdmlkZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9FbWJlZFByb3ZpZGVyLm1hdGNoUHJvdmlkZXJCeVVybCh1cmwpKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHByb3ZpZGVyTmFtZSA9IG9FbWJlZFByb3ZpZGVyLnByb3ZpZGVyTmFtZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm92aWRlck5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcHJvdmlkZXJOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVmlkZW9PRW1iZWQodXJsOiBzdHJpbmcsIHByb3ZpZGVyTmFtZSA9IFwiXCIpOiBPYnNlcnZhYmxlPG9FbWJlZD4ge1xyXG4gICAgICAgIGlmICh1cmwgPT0gXCJcIiB8fCB1cmwgPT0gbnVsbCB8fCB1cmwgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVcmwgY2Fubm90IGJlIGVtcHR5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvdmlkZXJOYW1lID09IFwiXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlck5hbWUgPSB0aGlzLnJlY29nbml6ZVByb3ZpZGVyKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm92aWRlck5hbWUgPT0gXCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiQ291bGRuJ3QgbWF0Y2ggdGhlIHZpZGVvIHByb3ZpZGVyIGJ5IFVSTFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYWxsaW5nIGdldCBjb250ZW50IGJ5IHVybCwgZm9yOiBcIiArIHVybCk7XHJcblxyXG4gICAgICAgIGxldCBvRW1iZWRVcmwgPSB0aGlzLnByb3ZpZGVyc1twcm92aWRlck5hbWVdLmdldENvbnRlbnRVcmwodXJsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQob0VtYmVkVXJsKVxyXG4gICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgICAgLy8gLmRvKHJlcyA9PiByZXMgPT4gY29uc29sZS5sb2coJ1JldHJpZXZlZCBvRW1iZWQgY29udGVudDogJyArIEpTT04uc3RyaW5naWZ5KHJlcykpKTtcclxuXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvLW9lbWJlZC92aWRlby1vZW1iZWQuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEyMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL21hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDI3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9TdWJqZWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL3V0aWwvcm9vdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21waWxlci9idW5kbGVzL2NvbXBpbGVyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBUSElTIElTIFRFTVBPUkFSWSBUTyBQQVRDSCAyLjEuMSsgQ29yZSBidWdzXG4gKi9cbnZhciBzZW12ZXIgPSByZXF1aXJlKCdzZW12ZXInKTtcbnZhciBfX2NvcmVfXyA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbnZhciBjb3JlVmVyc2lvbiA9IF9fY29yZV9fICYmIF9fY29yZV9fLlZFUlNJT04gJiYgX19jb3JlX18uVkVSU0lPTi5mdWxsO1xuXG4vLyBPbmx5IHBhdGNoIGlmIHlvdSdyZSBvbiBBbmd1bGFyID49IDIuMS4xIGFuZCA8IHRoZSBuZXh0IG1ham9yIHZlcnNpb24gKGluY2x1ZGluZyBwcmVyZWxlYXNlKVxuaWYgKGNvcmVWZXJzaW9uICYmIHNlbXZlci5zYXRpc2ZpZXMoY29yZVZlcnNpb24sICdeMi4xLjEnKSkge1xuICAgIHZhciBfX2NvbXBpbGVyX18gPSByZXF1aXJlKCdAYW5ndWxhci9jb21waWxlcicpO1xuICAgIHZhciBfX2NvcmVfcHJpdmF0ZV9fID0gX19jb3JlX18uX19jb3JlX3ByaXZhdGVfXztcblxuICAgIHZhciBwYXRjaCA9IGZhbHNlO1xuICAgIGlmICghX19jb3JlX3ByaXZhdGVfX1snVmlld1V0aWxzJ10pIHtcbiAgICAgICAgcGF0Y2ggPSB0cnVlO1xuICAgICAgICBfX2NvcmVfcHJpdmF0ZV9fWydWaWV3VXRpbHMnXSA9IF9fY29yZV9wcml2YXRlX19bJ3ZpZXdfdXRpbHMnXTtcbiAgICB9XG5cbiAgICBpZiAoIV9fY29tcGlsZXJfXy5fX2NvbXBpbGVyX3ByaXZhdGVfXykge1xuICAgICAgICBwYXRjaCA9IHRydWU7XG4gICAgICAgIF9fY29tcGlsZXJfXy5fX2NvbXBpbGVyX3ByaXZhdGVfXyA9IHtcbiAgICAgICAgICAgIFNlbGVjdG9yTWF0Y2hlcjogX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlcixcbiAgICAgICAgICAgIENzc1NlbGVjdG9yOiBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfX3VuaXZlcnNhbF9fID0gcmVxdWlyZSgnYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fJyk7XG4gICAgaWYgKHBhdGNoKSB7XG4gICAgICAgIF9fdW5pdmVyc2FsX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfX1sndmlld191dGlscyddO1xuICAgICAgICBfX3VuaXZlcnNhbF9fLkNzc1NlbGVjdG9yID0gX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgICAgIF9fdW5pdmVyc2FsX18uU2VsZWN0b3JNYXRjaGVyID0gX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlclxuICAgIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW5ndWxhcjItdW5pdmVyc2FsLXBhdGNoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC9hcHAuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBOYXZNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZldGNoRGF0YUNvbXBvbmVudCB9IGZyb20gJy4vZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb3VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmlkZW9zTW9kdWxlIH0gZnJvbSAnLi92aWRlb3MvdmlkZW9zLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIE5hdk1lbnVDb21wb25lbnQsXHJcbiAgICAgICAgQ291bnRlckNvbXBvbmVudCxcclxuICAgICAgICBGZXRjaERhdGFDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxyXG4gICAgICAgIFZpZGVvc01vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdjb3VudGVyJywgY29tcG9uZW50OiBDb3VudGVyQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2ZldGNoLWRhdGEnLCBjb21wb25lbnQ6IEZldGNoRGF0YUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdob21lJyB9XHJcbiAgICAgICAgXSlcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgzNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3pvbmUuanMvZGlzdC96b25lLW5vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg2OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMvbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDcxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2Mi40LjhcbiAqIChjKSAyMDEwLTIwMTcgR29vZ2xlLCBJbmMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpLCByZXF1aXJlKCdyeGpzL29wZXJhdG9yL3RvUHJvbWlzZScpLCByZXF1aXJlKCdyeGpzL1N1YmplY3QnKSwgcmVxdWlyZSgncnhqcy9PYnNlcnZhYmxlJyksIHJlcXVpcmUoJ3J4anMvb2JzZXJ2YWJsZS9mcm9tUHJvbWlzZScpKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cycsICdAYW5ndWxhci9jb3JlJywgJ3J4anMvb3BlcmF0b3IvdG9Qcm9taXNlJywgJ3J4anMvU3ViamVjdCcsICdyeGpzL09ic2VydmFibGUnLCAncnhqcy9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlJ10sIGZhY3RvcnkpIDpcbiAgICAoZmFjdG9yeSgoZ2xvYmFsLm5nID0gZ2xvYmFsLm5nIHx8IHt9LCBnbG9iYWwubmcuZm9ybXMgPSBnbG9iYWwubmcuZm9ybXMgfHwge30pLGdsb2JhbC5uZy5jb3JlLGdsb2JhbC5SeC5PYnNlcnZhYmxlLnByb3RvdHlwZSxnbG9iYWwuUngsZ2xvYmFsLlJ4LGdsb2JhbC5SeC5PYnNlcnZhYmxlKSk7XG59KHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLF9hbmd1bGFyX2NvcmUscnhqc19vcGVyYXRvcl90b1Byb21pc2Uscnhqc19TdWJqZWN0LHJ4anNfT2JzZXJ2YWJsZSxyeGpzX29ic2VydmFibGVfZnJvbVByb21pc2UpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEJhc2UgY2xhc3MgZm9yIGNvbnRyb2wgZGlyZWN0aXZlcy5cbiAgICAgKlxuICAgICAqIE9ubHkgdXNlZCBpbnRlcm5hbGx5IGluIHRoZSBmb3JtcyBtb2R1bGUuXG4gICAgICpcbiAgICAgKiBcXEBzdGFibGVcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKi9cbiAgICB2YXIgQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlKCkge1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcImNvbnRyb2xcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKCd1bmltcGxlbWVudGVkJyk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnZhbHVlIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInZhbGlkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wudmFsaWQgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiaW52YWxpZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmludmFsaWQgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwicGVuZGluZ1wiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnBlbmRpbmcgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiZXJyb3JzXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuZXJyb3JzIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInByaXN0aW5lXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wucHJpc3RpbmUgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiZGlydHlcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5kaXJ0eSA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ0b3VjaGVkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wudG91Y2hlZCA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ1bnRvdWNoZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC51bnRvdWNoZWQgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiZGlzYWJsZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5kaXNhYmxlZCA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJlbmFibGVkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuZW5hYmxlZCA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJzdGF0dXNDaGFuZ2VzXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuc3RhdHVzQ2hhbmdlcyA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ2YWx1ZUNoYW5nZXNcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwicGF0aFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez89fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHsgdmFsdWUgPSB1bmRlZmluZWQ7IH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2wpXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sLnJlc2V0KHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZXJyb3JDb2RlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHBhdGhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUuaGFzRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3JDb2RlLCBwYXRoKSB7XG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7IHBhdGggPSBudWxsOyB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmhhc0Vycm9yKGVycm9yQ29kZSwgcGF0aCkgOiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZXJyb3JDb2RlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHBhdGhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUuZ2V0RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3JDb2RlLCBwYXRoKSB7XG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7IHBhdGggPSBudWxsOyB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmdldEVycm9yKGVycm9yQ29kZSwgcGF0aCkgOiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQxID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQSBkaXJlY3RpdmUgdGhhdCBjb250YWlucyBtdWx0aXBsZSB7XFxAbGluayBOZ0NvbnRyb2x9cy5cbiAgICAgKlxuICAgICAqIE9ubHkgdXNlZCBieSB0aGUgZm9ybXMgbW9kdWxlLlxuICAgICAqXG4gICAgICogXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIENvbnRyb2xDb250YWluZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkMShDb250cm9sQ29udGFpbmVyLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBDb250cm9sQ29udGFpbmVyKCkge1xuICAgICAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRyb2xDb250YWluZXIucHJvdG90eXBlLCBcImZvcm1EaXJlY3RpdmVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgdGhlIGZvcm0gdG8gd2hpY2ggdGhpcyBjb250YWluZXIgYmVsb25ncy5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250cm9sQ29udGFpbmVyLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IHRoZSBwYXRoIHRvIHRoaXMgY29udGFpbmVyLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIENvbnRyb2xDb250YWluZXI7XG4gICAgfShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUpKTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gb2JqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc1ByZXNlbnQob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogIT0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBvYmpcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzQmxhbmsob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogPT0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBhXG4gICAgICogQHBhcmFtIHs/fSBiXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsb29zZUlkZW50aWNhbChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhID09PSBiIHx8IHR5cGVvZiBhID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgYiA9PT0gJ251bWJlcicgJiYgaXNOYU4oYSkgJiYgaXNOYU4oYik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gb1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNKc09iamVjdChvKSB7XG4gICAgICAgIHJldHVybiBvICE9PSBudWxsICYmICh0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgbyA9PT0gJ29iamVjdCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IG9ialxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNQcmltaXRpdmUob2JqKSB7XG4gICAgICAgIHJldHVybiAhaXNKc09iamVjdChvYmopO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyYXBzIEphdmFzY3JpcHQgT2JqZWN0c1xuICAgICAqL1xuICAgIHZhciBTdHJpbmdNYXBXcmFwcGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gU3RyaW5nTWFwV3JhcHBlcigpIHtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBtMVxuICAgICAgICAgKiBAcGFyYW0gez99IG0yXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTdHJpbmdNYXBXcmFwcGVyLm1lcmdlID0gZnVuY3Rpb24gKG0xLCBtMikge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbSA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKG0xKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgayA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBtW2tdID0gbTFba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IDAsIF9jID0gT2JqZWN0LmtleXMobTIpOyBfYiA8IF9jLmxlbmd0aDsgX2IrKykge1xuICAgICAgICAgICAgICAgIHZhciBrID0gX2NbX2JdO1xuICAgICAgICAgICAgICAgIG1ba10gPSBtMltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBtMVxuICAgICAgICAgKiBAcGFyYW0gez99IG0yXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTdHJpbmdNYXBXcmFwcGVyLmVxdWFscyA9IGZ1bmN0aW9uIChtMSwgbTIpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGsxID0gT2JqZWN0LmtleXMobTEpO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gazIgPSBPYmplY3Qua2V5cyhtMik7XG4gICAgICAgICAgICBpZiAoazEubGVuZ3RoICE9IGsyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIC8qKiBAdHlwZSB7P30gKi8gaSA9IDA7IGkgPCBrMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGtleSA9IGsxW2ldO1xuICAgICAgICAgICAgICAgIGlmIChtMVtrZXldICE9PSBtMltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFN0cmluZ01hcFdyYXBwZXI7XG4gICAgfSgpKTtcbiAgICB2YXIgTGlzdFdyYXBwZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBMaXN0V3JhcHBlcigpIHtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBhcnJcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb25kaXRpb25cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIExpc3RXcmFwcGVyLmZpbmRMYXN0ID0gZnVuY3Rpb24gKGFyciwgY29uZGl0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKHZhciAvKiogQHR5cGUgez99ICovIGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uKGFycltpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycltpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gbGlzdFxuICAgICAgICAgKiBAcGFyYW0gez99IGl0ZW1zXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBMaXN0V3JhcHBlci5yZW1vdmVBbGwgPSBmdW5jdGlvbiAobGlzdCwgaXRlbXMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIC8qKiBAdHlwZSB7P30gKi8gaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGluZGV4ID0gbGlzdC5pbmRleE9mKGl0ZW1zW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBsaXN0XG4gICAgICAgICAqIEBwYXJhbSB7P30gZWxcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIExpc3RXcmFwcGVyLnJlbW92ZSA9IGZ1bmN0aW9uIChsaXN0LCBlbCkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gaW5kZXggPSBsaXN0LmluZGV4T2YoZWwpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGFcbiAgICAgICAgICogQHBhcmFtIHs/fSBiXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBMaXN0V3JhcHBlci5lcXVhbHMgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIC8qKiBAdHlwZSB7P30gKi8gaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFbaV0gIT09IGJbaV0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBsaXN0XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBMaXN0V3JhcHBlci5mbGF0dGVuID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0LnJlZHVjZShmdW5jdGlvbiAoZmxhdCwgaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGZsYXRJdGVtID0gQXJyYXkuaXNBcnJheShpdGVtKSA/IExpc3RXcmFwcGVyLmZsYXR0ZW4oaXRlbSkgOiBpdGVtO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKGZsYXQpKS5jb25jYXQoZmxhdEl0ZW0pO1xuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gTGlzdFdyYXBwZXI7XG4gICAgfSgpKTtcblxuICAgIHZhciAvKiogQHR5cGUgez99ICovIGlzUHJvbWlzZSA9IF9hbmd1bGFyX2NvcmUuX19jb3JlX3ByaXZhdGVfXy5pc1Byb21pc2U7XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gaXNPYnNlcnZhYmxlID0gX2FuZ3VsYXJfY29yZS5fX2NvcmVfcHJpdmF0ZV9fLmlzT2JzZXJ2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzRW1wdHlJbnB1dFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIC8vIHdlIGRvbid0IGNoZWNrIGZvciBzdHJpbmcgaGVyZSBzbyBpdCBhbHNvIHdvcmtzIHdpdGggYXJyYXlzXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvdmlkZXJzIGZvciB2YWxpZGF0b3JzIHRvIGJlIHVzZWQgZm9yIHtAbGluayBGb3JtQ29udHJvbH1zIGluIGEgZm9ybS5cbiAgICAgKlxuICAgICAqIFByb3ZpZGUgdGhpcyB1c2luZyBgbXVsdGk6IHRydWVgIHRvIGFkZCB2YWxpZGF0b3JzLlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqIHtAZXhhbXBsZSBjb3JlL2Zvcm1zL3RzL25nX3ZhbGlkYXRvcnMvbmdfdmFsaWRhdG9ycy50cyByZWdpb249J25nX3ZhbGlkYXRvcnMnfVxuICAgICAqIEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBOR19WQUxJREFUT1JTID0gbmV3IF9hbmd1bGFyX2NvcmUuT3BhcXVlVG9rZW4oJ05nVmFsaWRhdG9ycycpO1xuICAgIC8qKlxuICAgICAqIFByb3ZpZGVycyBmb3IgYXN5bmNocm9ub3VzIHZhbGlkYXRvcnMgdG8gYmUgdXNlZCBmb3Ige0BsaW5rIEZvcm1Db250cm9sfXNcbiAgICAgKiBpbiBhIGZvcm0uXG4gICAgICpcbiAgICAgKiBQcm92aWRlIHRoaXMgdXNpbmcgYG11bHRpOiB0cnVlYCB0byBhZGQgdmFsaWRhdG9ycy5cbiAgICAgKlxuICAgICAqIFNlZSB7QGxpbmsgTkdfVkFMSURBVE9SU30gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgKlxuICAgICAqIEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBOR19BU1lOQ19WQUxJREFUT1JTID0gbmV3IF9hbmd1bGFyX2NvcmUuT3BhcXVlVG9rZW4oJ05nQXN5bmNWYWxpZGF0b3JzJyk7XG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgYSBzZXQgb2YgdmFsaWRhdG9ycyB1c2VkIGJ5IGZvcm0gY29udHJvbHMuXG4gICAgICpcbiAgICAgKiBBIHZhbGlkYXRvciBpcyBhIGZ1bmN0aW9uIHRoYXQgcHJvY2Vzc2VzIGEge1xcQGxpbmsgRm9ybUNvbnRyb2x9IG9yIGNvbGxlY3Rpb24gb2ZcbiAgICAgKiBjb250cm9scyBhbmQgcmV0dXJucyBhIG1hcCBvZiBlcnJvcnMuIEEgbnVsbCBtYXAgbWVhbnMgdGhhdCB2YWxpZGF0aW9uIGhhcyBwYXNzZWQuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHZhciBsb2dpbkNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBWYWxpZGF0b3JzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gVmFsaWRhdG9ycygpIHtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbHMgdG8gaGF2ZSBhIG5vbi1lbXB0eSB2YWx1ZS5cbiAgICAgICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkID0gZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgICAgIHJldHVybiBpc0VtcHR5SW5wdXRWYWx1ZShjb250cm9sLnZhbHVlKSA/IHsgJ3JlcXVpcmVkJzogdHJ1ZSB9IDogbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2wgdmFsdWUgdG8gYmUgdHJ1ZS5cbiAgICAgICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkVHJ1ZSA9IGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbC52YWx1ZSA9PT0gdHJ1ZSA/IG51bGwgOiB7ICdyZXF1aXJlZCc6IHRydWUgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2xzIHRvIGhhdmUgYSB2YWx1ZSBvZiBhIG1pbmltdW0gbGVuZ3RoLlxuICAgICAgICAgKiBAcGFyYW0gez99IG1pbkxlbmd0aFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGggPSBmdW5jdGlvbiAobWluTGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eUlucHV0VmFsdWUoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIGRvbid0IHZhbGlkYXRlIGVtcHR5IHZhbHVlcyB0byBhbGxvdyBvcHRpb25hbCBjb250cm9sc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBsZW5ndGggPSBjb250cm9sLnZhbHVlID8gY29udHJvbC52YWx1ZS5sZW5ndGggOiAwO1xuICAgICAgICAgICAgICAgIHJldHVybiBsZW5ndGggPCBtaW5MZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICB7ICdtaW5sZW5ndGgnOiB7ICdyZXF1aXJlZExlbmd0aCc6IG1pbkxlbmd0aCwgJ2FjdHVhbExlbmd0aCc6IGxlbmd0aCB9IH0gOlxuICAgICAgICAgICAgICAgICAgICBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2xzIHRvIGhhdmUgYSB2YWx1ZSBvZiBhIG1heGltdW0gbGVuZ3RoLlxuICAgICAgICAgKiBAcGFyYW0gez99IG1heExlbmd0aFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGggPSBmdW5jdGlvbiAobWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBsZW5ndGggPSBjb250cm9sLnZhbHVlID8gY29udHJvbC52YWx1ZS5sZW5ndGggOiAwO1xuICAgICAgICAgICAgICAgIHJldHVybiBsZW5ndGggPiBtYXhMZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICB7ICdtYXhsZW5ndGgnOiB7ICdyZXF1aXJlZExlbmd0aCc6IG1heExlbmd0aCwgJ2FjdHVhbExlbmd0aCc6IGxlbmd0aCB9IH0gOlxuICAgICAgICAgICAgICAgICAgICBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGEgY29udHJvbCB0byBtYXRjaCBhIHJlZ2V4IHRvIGl0cyB2YWx1ZS5cbiAgICAgICAgICogQHBhcmFtIHs/fSBwYXR0ZXJuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBWYWxpZGF0b3JzLnBhdHRlcm4gPSBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHJldHVybiBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3I7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZWdleDtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHJlZ2V4U3RyO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJlZ2V4U3RyID0gXCJeXCIgKyBwYXR0ZXJuICsgXCIkXCI7XG4gICAgICAgICAgICAgICAgcmVnZXggPSBuZXcgUmVnRXhwKHJlZ2V4U3RyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlZ2V4U3RyID0gcGF0dGVybi50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHJlZ2V4ID0gcGF0dGVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5SW5wdXRWYWx1ZShjb250cm9sLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gZG9uJ3QgdmFsaWRhdGUgZW1wdHkgdmFsdWVzIHRvIGFsbG93IG9wdGlvbmFsIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHZhbHVlID0gY29udHJvbC52YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVnZXgudGVzdCh2YWx1ZSkgPyBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgeyAncGF0dGVybic6IHsgJ3JlcXVpcmVkUGF0dGVybic6IHJlZ2V4U3RyLCAnYWN0dWFsVmFsdWUnOiB2YWx1ZSB9IH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogTm8tb3AgdmFsaWRhdG9yLlxuICAgICAgICAgKiBAcGFyYW0gez99IGNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvciA9IGZ1bmN0aW9uIChjKSB7IHJldHVybiBudWxsOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29tcG9zZSBtdWx0aXBsZSB2YWxpZGF0b3JzIGludG8gYSBzaW5nbGUgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB1bmlvblxuICAgICAgICAgKiBvZiB0aGUgaW5kaXZpZHVhbCBlcnJvciBtYXBzLlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFZhbGlkYXRvcnMuY29tcG9zZSA9IGZ1bmN0aW9uICh2YWxpZGF0b3JzKSB7XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRvcnMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBwcmVzZW50VmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMuZmlsdGVyKGlzUHJlc2VudCk7XG4gICAgICAgICAgICBpZiAocHJlc2VudFZhbGlkYXRvcnMubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX21lcmdlRXJyb3JzKF9leGVjdXRlVmFsaWRhdG9ycyhjb250cm9sLCBwcmVzZW50VmFsaWRhdG9ycykpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgVmFsaWRhdG9ycy5jb21wb3NlQXN5bmMgPSBmdW5jdGlvbiAodmFsaWRhdG9ycykge1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0b3JzKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcHJlc2VudFZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLmZpbHRlcihpc1ByZXNlbnQpO1xuICAgICAgICAgICAgaWYgKHByZXNlbnRWYWxpZGF0b3JzLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcHJvbWlzZXMgPSBfZXhlY3V0ZUFzeW5jVmFsaWRhdG9ycyhjb250cm9sLCBwcmVzZW50VmFsaWRhdG9ycykubWFwKF9jb252ZXJ0VG9Qcm9taXNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oX21lcmdlRXJyb3JzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBWYWxpZGF0b3JzO1xuICAgIH0oKSk7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBvYmpcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jb252ZXJ0VG9Qcm9taXNlKG9iaikge1xuICAgICAgICByZXR1cm4gaXNQcm9taXNlKG9iaikgPyBvYmogOiByeGpzX29wZXJhdG9yX3RvUHJvbWlzZS50b1Byb21pc2UuY2FsbChvYmopO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9leGVjdXRlVmFsaWRhdG9ycyhjb250cm9sLCB2YWxpZGF0b3JzKSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3JzLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gdihjb250cm9sKTsgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2V4ZWN1dGVBc3luY1ZhbGlkYXRvcnMoY29udHJvbCwgdmFsaWRhdG9ycykge1xuICAgICAgICByZXR1cm4gdmFsaWRhdG9ycy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYoY29udHJvbCk7IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGFycmF5T2ZFcnJvcnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9tZXJnZUVycm9ycyhhcnJheU9mRXJyb3JzKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHJlcyA9IGFycmF5T2ZFcnJvcnMucmVkdWNlKGZ1bmN0aW9uIChyZXMsIGVycm9ycykge1xuICAgICAgICAgICAgcmV0dXJuIGlzUHJlc2VudChlcnJvcnMpID8gU3RyaW5nTWFwV3JhcHBlci5tZXJnZShyZXMsIGVycm9ycykgOiByZXM7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHJlcykubGVuZ3RoID09PSAwID8gbnVsbCA6IHJlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIHByb3ZpZGUgYSB7QGxpbmsgQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZvciBmb3JtIGNvbnRyb2xzLlxuICAgICAqXG4gICAgICogU2VlIHtAbGluayBEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZm9yIGhvdyB0byBpbXBsZW1lbnQgb25lLlxuICAgICAqIEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBOR19WQUxVRV9BQ0NFU1NPUiA9IG5ldyBfYW5ndWxhcl9jb3JlLk9wYXF1ZVRva2VuKCdOZ1ZhbHVlQWNjZXNzb3InKTtcblxuICAgIHZhciAvKiogQHR5cGUgez99ICovIENIRUNLQk9YX1ZBTFVFX0FDQ0VTU09SID0ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgYWNjZXNzb3IgZm9yIHdyaXRpbmcgYSB2YWx1ZSBhbmQgbGlzdGVuaW5nIHRvIGNoYW5nZXMgb24gYSBjaGVja2JveCBpbnB1dCBlbGVtZW50LlxuICAgICAqXG4gICAgICogICMjIyBFeGFtcGxlXG4gICAgICogIGBgYFxuICAgICAqICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlbWVtYmVyTG9naW5cIiBuZ01vZGVsPlxuICAgICAqICBgYGBcbiAgICAgKlxuICAgICAqICBcXEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICAgICAgICAgKiBAcGFyYW0gez99IF9lbGVtZW50UmVmXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yKF9yZW5kZXJlciwgX2VsZW1lbnRSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyID0gX3JlbmRlcmVyO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZiA9IF9lbGVtZW50UmVmO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChfKSB7IH07XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUud3JpdGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NoZWNrZWQnLCB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25Ub3VjaGVkID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMub25Ub3VjaGVkID0gZm47IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnNldERpc2FibGVkU3RhdGUgPSBmdW5jdGlvbiAoaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgICAgIH07XG4gICAgICAgIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W3R5cGU9Y2hlY2tib3hdW2Zvcm1Db250cm9sTmFtZV0saW5wdXRbdHlwZT1jaGVja2JveF1bZm9ybUNvbnRyb2xdLGlucHV0W3R5cGU9Y2hlY2tib3hdW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQuY2hlY2tlZCknLCAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1JdXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5SZW5kZXJlciwgfSxcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5FbGVtZW50UmVmLCB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICByZXR1cm4gQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgICB9KCkpO1xuXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gREVGQVVMVF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gRGVmYXVsdFZhbHVlQWNjZXNzb3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgYWNjZXNzb3IgZm9yIHdyaXRpbmcgYSB2YWx1ZSBhbmQgbGlzdGVuaW5nIHRvIGNoYW5nZXMgdGhhdCBpcyB1c2VkIGJ5IHRoZVxuICAgICAqIHtcXEBsaW5rIE5nTW9kZWx9LCB7XFxAbGluayBGb3JtQ29udHJvbERpcmVjdGl2ZX0sIGFuZCB7XFxAbGluayBGb3JtQ29udHJvbE5hbWV9IGRpcmVjdGl2ZXMuXG4gICAgICpcbiAgICAgKiAgIyMjIEV4YW1wbGVcbiAgICAgKiAgYGBgXG4gICAgICogIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hRdWVyeVwiIG5nTW9kZWw+XG4gICAgICogIGBgYFxuICAgICAqXG4gICAgICogIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBEZWZhdWx0VmFsdWVBY2Nlc3NvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICAgICAgICAgKiBAcGFyYW0gez99IF9lbGVtZW50UmVmXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBEZWZhdWx0VmFsdWVBY2Nlc3NvcihfcmVuZGVyZXIsIF9lbGVtZW50UmVmKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlciA9IF9yZW5kZXJlcjtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYgPSBfZWxlbWVudFJlZjtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoXykgeyB9O1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIERlZmF1bHRWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS53cml0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBub3JtYWxpemVkVmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIG5vcm1hbGl6ZWRWYWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBEZWZhdWx0VmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPbkNoYW5nZSA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBEZWZhdWx0VmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPblRvdWNoZWQgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRGVmYXVsdFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnNldERpc2FibGVkU3RhdGUgPSBmdW5jdGlvbiAoaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgICAgIH07XG4gICAgICAgIERlZmF1bHRWYWx1ZUFjY2Vzc29yLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKVtmb3JtQ29udHJvbE5hbWVdLHRleHRhcmVhW2Zvcm1Db250cm9sTmFtZV0saW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSlbZm9ybUNvbnRyb2xdLHRleHRhcmVhW2Zvcm1Db250cm9sXSxpbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKVtuZ01vZGVsXSx0ZXh0YXJlYVtuZ01vZGVsXSxbbmdEZWZhdWx0Q29udHJvbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogdnNhdmtpbiByZXBsYWNlIHRoZSBhYm92ZSBzZWxlY3RvciB3aXRoIHRoZSBvbmUgYmVsb3cgaXQgb25jZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMzAxMSBpcyBpbXBsZW1lbnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0b3I6ICdbbmdDb250cm9sXSxbbmdNb2RlbF0sW25nRm9ybUNvbnRyb2xdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJyhpbnB1dCknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLCAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbREVGQVVMVF9WQUxVRV9BQ0NFU1NPUl1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBEZWZhdWx0VmFsdWVBY2Nlc3Nvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5SZW5kZXJlciwgfSxcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5FbGVtZW50UmVmLCB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICByZXR1cm4gRGVmYXVsdFZhbHVlQWNjZXNzb3I7XG4gICAgfSgpKTtcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplVmFsaWRhdG9yKHZhbGlkYXRvcikge1xuICAgICAgICBpZiAoKCh2YWxpZGF0b3IpKS52YWxpZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7IHJldHVybiAoKHZhbGlkYXRvcikpLnZhbGlkYXRlKGMpOyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICh2YWxpZGF0b3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBub3JtYWxpemVBc3luY1ZhbGlkYXRvcih2YWxpZGF0b3IpIHtcbiAgICAgICAgaWYgKCgodmFsaWRhdG9yKSkudmFsaWRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYykgeyByZXR1cm4gKCh2YWxpZGF0b3IpKS52YWxpZGF0ZShjKTsgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAodmFsaWRhdG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciAvKiogQHR5cGUgez99ICovIE5VTUJFUl9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gTnVtYmVyVmFsdWVBY2Nlc3NvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgYWNjZXNzb3IgZm9yIHdyaXRpbmcgYSBudW1iZXIgdmFsdWUgYW5kIGxpc3RlbmluZyB0byBjaGFuZ2VzIHRoYXQgaXMgdXNlZCBieSB0aGVcbiAgICAgKiB7XFxAbGluayBOZ01vZGVsfSwge1xcQGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfSBkaXJlY3RpdmVzLlxuICAgICAqXG4gICAgICogICMjIyBFeGFtcGxlXG4gICAgICogIGBgYFxuICAgICAqICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwiYWdlXCI+XG4gICAgICogIGBgYFxuICAgICAqL1xuICAgIHZhciBOdW1iZXJWYWx1ZUFjY2Vzc29yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICAgICAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIE51bWJlclZhbHVlQWNjZXNzb3IoX3JlbmRlcmVyLCBfZWxlbWVudFJlZikge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmID0gX2VsZW1lbnRSZWY7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKF8pIHsgfTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOdW1iZXJWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS53cml0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAvLyBUaGUgdmFsdWUgbmVlZHMgdG8gYmUgbm9ybWFsaXplZCBmb3IgSUU5LCBvdGhlcndpc2UgaXQgaXMgc2V0IHRvICdudWxsJyB3aGVuIG51bGxcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgbm9ybWFsaXplZFZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE51bWJlclZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHsgZm4odmFsdWUgPT0gJycgPyBudWxsIDogcGFyc2VGbG9hdCh2YWx1ZSkpOyB9O1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTnVtYmVyVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPblRvdWNoZWQgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTnVtYmVyVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuc2V0RGlzYWJsZWRTdGF0ZSA9IGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtYmVyVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbdHlwZT1udW1iZXJdW2Zvcm1Db250cm9sTmFtZV0saW5wdXRbdHlwZT1udW1iZXJdW2Zvcm1Db250cm9sXSxpbnB1dFt0eXBlPW51bWJlcl1bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyhpbnB1dCknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcoYmx1ciknOiAnb25Ub3VjaGVkKCknXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbTlVNQkVSX1ZBTFVFX0FDQ0VTU09SXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE51bWJlclZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuUmVuZGVyZXIsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRWxlbWVudFJlZiwgfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgcmV0dXJuIE51bWJlclZhbHVlQWNjZXNzb3I7XG4gICAgfSgpKTtcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDIgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVuaW1wbGVtZW50ZWQoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5pbXBsZW1lbnRlZCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIGJhc2UgY2xhc3MgdGhhdCBhbGwgY29udHJvbCBkaXJlY3RpdmUgZXh0ZW5kLlxuICAgICAqIEl0IGJpbmRzIGEge1xcQGxpbmsgRm9ybUNvbnRyb2x9IG9iamVjdCB0byBhIERPTSBlbGVtZW50LlxuICAgICAqXG4gICAgICogVXNlZCBpbnRlcm5hbGx5IGJ5IEFuZ3VsYXIgZm9ybXMuXG4gICAgICpcbiAgICAgKiBcXEBzdGFibGVcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKi9cbiAgICB2YXIgTmdDb250cm9sID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDIoTmdDb250cm9sLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBOZ0NvbnRyb2woKSB7XG4gICAgICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgIHRoaXMuX3BhcmVudCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy52YWx1ZUFjY2Vzc29yID0gbnVsbDtcbiAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgIHRoaXMuX3Jhd1ZhbGlkYXRvcnMgPSBbXTtcbiAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgIHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ0NvbnRyb2wucHJvdG90eXBlLCBcInZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHVuaW1wbGVtZW50ZWQoKSk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdDb250cm9sLnByb3RvdHlwZSwgXCJhc3luY1ZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHVuaW1wbGVtZW50ZWQoKSk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEBwYXJhbSB7P30gbmV3VmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nQ29udHJvbC5wcm90b3R5cGUudmlld1RvTW9kZWxVcGRhdGUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHsgfTtcbiAgICAgICAgcmV0dXJuIE5nQ29udHJvbDtcbiAgICB9KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSkpO1xuXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gUkFESU9fVkFMVUVfQUNDRVNTT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgY2xhc3MgdXNlZCBieSBBbmd1bGFyIHRvIHVuY2hlY2sgcmFkaW8gYnV0dG9ucyB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLlxuICAgICAqL1xuICAgIHZhciBSYWRpb0NvbnRyb2xSZWdpc3RyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFJhZGlvQ29udHJvbFJlZ2lzdHJ5KCkge1xuICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAgICAgKiBAcGFyYW0gez99IGFjY2Vzc29yXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xSZWdpc3RyeS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGNvbnRyb2wsIGFjY2Vzc29yKSB7XG4gICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMucHVzaChbY29udHJvbCwgYWNjZXNzb3JdKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gYWNjZXNzb3JcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhZGlvQ29udHJvbFJlZ2lzdHJ5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoYWNjZXNzb3IpIHtcbiAgICAgICAgICAgIGZvciAodmFyIC8qKiBAdHlwZSB7P30gKi8gaSA9IHRoaXMuX2FjY2Vzc29ycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hY2Nlc3NvcnNbaV1bMV0gPT09IGFjY2Vzc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGFjY2Vzc29yXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xSZWdpc3RyeS5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKGFjY2Vzc29yKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX2lzU2FtZUdyb3VwKGMsIGFjY2Vzc29yKSAmJiBjWzFdICE9PSBhY2Nlc3Nvcikge1xuICAgICAgICAgICAgICAgICAgICBjWzFdLmZpcmVVbmNoZWNrKGFjY2Vzc29yLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbFBhaXJcbiAgICAgICAgICogQHBhcmFtIHs/fSBhY2Nlc3NvclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sUmVnaXN0cnkucHJvdG90eXBlLl9pc1NhbWVHcm91cCA9IGZ1bmN0aW9uIChjb250cm9sUGFpciwgYWNjZXNzb3IpIHtcbiAgICAgICAgICAgIGlmICghY29udHJvbFBhaXJbMF0uY29udHJvbClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbFBhaXJbMF0uX3BhcmVudCA9PT0gYWNjZXNzb3IuX2NvbnRyb2wuX3BhcmVudCAmJlxuICAgICAgICAgICAgICAgIGNvbnRyb2xQYWlyWzFdLm5hbWUgPT09IGFjY2Vzc29yLm5hbWU7XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQ29udHJvbFJlZ2lzdHJ5LmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0YWJsZSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgUmFkaW9Db250cm9sUmVnaXN0cnkuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICAgICAgcmV0dXJuIFJhZGlvQ29udHJvbFJlZ2lzdHJ5O1xuICAgIH0oKSk7XG4gICAgLyoqXG4gICAgICogXFxAd2hhdEl0RG9lcyBXcml0ZXMgcmFkaW8gY29udHJvbCB2YWx1ZXMgYW5kIGxpc3RlbnMgdG8gcmFkaW8gY29udHJvbCBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogVXNlZCBieSB7XFxAbGluayBOZ01vZGVsfSwge1xcQGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfVxuICAgICAqIHRvIGtlZXAgdGhlIHZpZXcgc3luY2VkIHdpdGggdGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfSBtb2RlbC5cbiAgICAgKlxuICAgICAqIFxcQGhvd1RvVXNlXG4gICAgICpcbiAgICAgKiBJZiB5b3UgaGF2ZSBpbXBvcnRlZCB0aGUge1xcQGxpbmsgRm9ybXNNb2R1bGV9IG9yIHRoZSB7XFxAbGluayBSZWFjdGl2ZUZvcm1zTW9kdWxlfSwgdGhpc1xuICAgICAqIHZhbHVlIGFjY2Vzc29yIHdpbGwgYmUgYWN0aXZlIG9uIGFueSByYWRpbyBjb250cm9sIHRoYXQgaGFzIGEgZm9ybSBkaXJlY3RpdmUuIFlvdSBkb1xuICAgICAqICoqbm90KiogbmVlZCB0byBhZGQgYSBzcGVjaWFsIHNlbGVjdG9yIHRvIGFjdGl2YXRlIGl0LlxuICAgICAqXG4gICAgICogIyMjIEhvdyB0byB1c2UgcmFkaW8gYnV0dG9ucyB3aXRoIGZvcm0gZGlyZWN0aXZlc1xuICAgICAqXG4gICAgICogVG8gdXNlIHJhZGlvIGJ1dHRvbnMgaW4gYSB0ZW1wbGF0ZS1kcml2ZW4gZm9ybSwgeW91J2xsIHdhbnQgdG8gZW5zdXJlIHRoYXQgcmFkaW8gYnV0dG9uc1xuICAgICAqIGluIHRoZSBzYW1lIGdyb3VwIGhhdmUgdGhlIHNhbWUgYG5hbWVgIGF0dHJpYnV0ZS4gIFJhZGlvIGJ1dHRvbnMgd2l0aCBkaWZmZXJlbnQgYG5hbWVgXG4gICAgICogYXR0cmlidXRlcyBkbyBub3QgYWZmZWN0IGVhY2ggb3RoZXIuXG4gICAgICpcbiAgICAgKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9yYWRpb0J1dHRvbnMvcmFkaW9fYnV0dG9uX2V4YW1wbGUudHMgcmVnaW9uPSdUZW1wbGF0ZURyaXZlbid9XG4gICAgICpcbiAgICAgKiBXaGVuIHVzaW5nIHJhZGlvIGJ1dHRvbnMgaW4gYSByZWFjdGl2ZSBmb3JtLCByYWRpbyBidXR0b25zIGluIHRoZSBzYW1lIGdyb3VwIHNob3VsZCBoYXZlIHRoZVxuICAgICAqIHNhbWUgYGZvcm1Db250cm9sTmFtZWAuIFlvdSBjYW4gYWxzbyBhZGQgYSBgbmFtZWAgYXR0cmlidXRlLCBidXQgaXQncyBvcHRpb25hbC5cbiAgICAgKlxuICAgICAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL3JlYWN0aXZlUmFkaW9CdXR0b25zL3JlYWN0aXZlX3JhZGlvX2J1dHRvbl9leGFtcGxlLnRzIHJlZ2lvbj0nUmVhY3RpdmUnfVxuICAgICAqXG4gICAgICogICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAgICAgKlxuICAgICAqICBcXEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICAgICAgICAgKiBAcGFyYW0gez99IF9lbGVtZW50UmVmXG4gICAgICAgICAqIEBwYXJhbSB7P30gX3JlZ2lzdHJ5XG4gICAgICAgICAqIEBwYXJhbSB7P30gX2luamVjdG9yXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yKF9yZW5kZXJlciwgX2VsZW1lbnRSZWYsIF9yZWdpc3RyeSwgX2luamVjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlciA9IF9yZW5kZXJlcjtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYgPSBfZWxlbWVudFJlZjtcbiAgICAgICAgICAgIHRoaXMuX3JlZ2lzdHJ5ID0gX3JlZ2lzdHJ5O1xuICAgICAgICAgICAgdGhpcy5faW5qZWN0b3IgPSBfaW5qZWN0b3I7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRyb2wgPSB0aGlzLl9pbmplY3Rvci5nZXQoTmdDb250cm9sKTtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrTmFtZSgpO1xuICAgICAgICAgICAgdGhpcy5fcmVnaXN0cnkuYWRkKHRoaXMuX2NvbnRyb2wsIHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkgeyB0aGlzLl9yZWdpc3RyeS5yZW1vdmUodGhpcyk7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS53cml0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlID09PSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NoZWNrZWQnLCB0aGlzLl9zdGF0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5fZm4gPSBmbjtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm4oX3RoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgIF90aGlzLl9yZWdpc3RyeS5zZWxlY3QoX3RoaXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLmZpcmVVbmNoZWNrID0gZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMud3JpdGVWYWx1ZSh2YWx1ZSk7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uVG91Y2hlZCA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5zZXREaXNhYmxlZFN0YXRlID0gZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9jaGVja05hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5uYW1lICYmIHRoaXMuZm9ybUNvbnRyb2xOYW1lICYmIHRoaXMubmFtZSAhPT0gdGhpcy5mb3JtQ29udHJvbE5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90aHJvd05hbWVFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLm5hbWUgJiYgdGhpcy5mb3JtQ29udHJvbE5hbWUpXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5mb3JtQ29udHJvbE5hbWU7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX3Rocm93TmFtZUVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgSWYgeW91IGRlZmluZSBib3RoIGEgbmFtZSBhbmQgYSBmb3JtQ29udHJvbE5hbWUgYXR0cmlidXRlIG9uIHlvdXIgcmFkaW8gYnV0dG9uLCB0aGVpciB2YWx1ZXNcXG4gICAgICBtdXN0IG1hdGNoLiBFeDogPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImZvb2RcXFwiIG5hbWU9XFxcImZvb2RcXFwiPlxcbiAgICBcIik7XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W3R5cGU9cmFkaW9dW2Zvcm1Db250cm9sTmFtZV0saW5wdXRbdHlwZT1yYWRpb11bZm9ybUNvbnRyb2xdLGlucHV0W3R5cGU9cmFkaW9dW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCknLCAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbUkFESU9fVkFMVUVfQUNDRVNTT1JdXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5SZW5kZXJlciwgfSxcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5FbGVtZW50UmVmLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBSYWRpb0NvbnRyb2xSZWdpc3RyeSwgfSxcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3RvciwgfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICduYW1lJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCB9LF0sXG4gICAgICAgICAgICAnZm9ybUNvbnRyb2xOYW1lJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCB9LF0sXG4gICAgICAgICAgICAndmFsdWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0IH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3I7XG4gICAgfSgpKTtcblxuICAgIHZhciAvKiogQHR5cGUgez99ICovIFJBTkdFX1ZBTFVFX0FDQ0VTU09SID0ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBSYW5nZVZhbHVlQWNjZXNzb3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIGFjY2Vzc29yIGZvciB3cml0aW5nIGEgcmFuZ2UgdmFsdWUgYW5kIGxpc3RlbmluZyB0byBjaGFuZ2VzIHRoYXQgaXMgdXNlZCBieSB0aGVcbiAgICAgKiB7XFxAbGluayBOZ01vZGVsfSwge1xcQGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfSBkaXJlY3RpdmVzLlxuICAgICAqXG4gICAgICogICMjIyBFeGFtcGxlXG4gICAgICogIGBgYFxuICAgICAqICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgWyhuZ01vZGVsKV09XCJhZ2VcIiA+XG4gICAgICogIGBgYFxuICAgICAqL1xuICAgIHZhciBSYW5nZVZhbHVlQWNjZXNzb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAgICAgICAgICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gUmFuZ2VWYWx1ZUFjY2Vzc29yKF9yZW5kZXJlciwgX2VsZW1lbnRSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyID0gX3JlbmRlcmVyO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZiA9IF9lbGVtZW50UmVmO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChfKSB7IH07XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFuZ2VWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS53cml0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCBwYXJzZUZsb2F0KHZhbHVlKSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYW5nZVZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHsgZm4odmFsdWUgPT0gJycgPyBudWxsIDogcGFyc2VGbG9hdCh2YWx1ZSkpOyB9O1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFuZ2VWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uVG91Y2hlZCA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYW5nZVZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnNldERpc2FibGVkU3RhdGUgPSBmdW5jdGlvbiAoaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgICAgIH07XG4gICAgICAgIFJhbmdlVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbdHlwZT1yYW5nZV1bZm9ybUNvbnRyb2xOYW1lXSxpbnB1dFt0eXBlPXJhbmdlXVtmb3JtQ29udHJvbF0saW5wdXRbdHlwZT1yYW5nZV1bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyhpbnB1dCknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcoYmx1ciknOiAnb25Ub3VjaGVkKCknXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbUkFOR0VfVkFMVUVfQUNDRVNTT1JdXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgUmFuZ2VWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlJlbmRlcmVyLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkVsZW1lbnRSZWYsIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIHJldHVybiBSYW5nZVZhbHVlQWNjZXNzb3I7XG4gICAgfSgpKTtcblxuICAgIHZhciAvKiogQHR5cGUgez99ICovIFNFTEVDVF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBpZFxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9idWlsZFZhbHVlU3RyaW5nKGlkLCB2YWx1ZSkge1xuICAgICAgICBpZiAoaWQgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBcIlwiICsgdmFsdWU7XG4gICAgICAgIGlmICghaXNQcmltaXRpdmUodmFsdWUpKVxuICAgICAgICAgICAgdmFsdWUgPSAnT2JqZWN0JztcbiAgICAgICAgcmV0dXJuIChpZCArIFwiOiBcIiArIHZhbHVlKS5zbGljZSgwLCA1MCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVTdHJpbmdcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9leHRyYWN0SWQodmFsdWVTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlU3RyaW5nLnNwbGl0KCc6JylbMF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFxcQHdoYXRJdERvZXMgV3JpdGVzIHZhbHVlcyBhbmQgbGlzdGVucyB0byBjaGFuZ2VzIG9uIGEgc2VsZWN0IGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBVc2VkIGJ5IHtcXEBsaW5rIE5nTW9kZWx9LCB7XFxAbGluayBGb3JtQ29udHJvbERpcmVjdGl2ZX0sIGFuZCB7XFxAbGluayBGb3JtQ29udHJvbE5hbWV9XG4gICAgICogdG8ga2VlcCB0aGUgdmlldyBzeW5jZWQgd2l0aCB0aGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9IG1vZGVsLlxuICAgICAqXG4gICAgICogXFxAaG93VG9Vc2VcbiAgICAgKlxuICAgICAqIElmIHlvdSBoYXZlIGltcG9ydGVkIHRoZSB7XFxAbGluayBGb3Jtc01vZHVsZX0gb3IgdGhlIHtcXEBsaW5rIFJlYWN0aXZlRm9ybXNNb2R1bGV9LCB0aGlzXG4gICAgICogdmFsdWUgYWNjZXNzb3Igd2lsbCBiZSBhY3RpdmUgb24gYW55IHNlbGVjdCBjb250cm9sIHRoYXQgaGFzIGEgZm9ybSBkaXJlY3RpdmUuIFlvdSBkb1xuICAgICAqICoqbm90KiogbmVlZCB0byBhZGQgYSBzcGVjaWFsIHNlbGVjdG9yIHRvIGFjdGl2YXRlIGl0LlxuICAgICAqXG4gICAgICogIyMjIEhvdyB0byB1c2Ugc2VsZWN0IGNvbnRyb2xzIHdpdGggZm9ybSBkaXJlY3RpdmVzXG4gICAgICpcbiAgICAgKiBUbyB1c2UgYSBzZWxlY3QgaW4gYSB0ZW1wbGF0ZS1kcml2ZW4gZm9ybSwgc2ltcGx5IGFkZCBhbiBgbmdNb2RlbGAgYW5kIGEgYG5hbWVgXG4gICAgICogYXR0cmlidXRlIHRvIHRoZSBtYWluIGA8c2VsZWN0PmAgdGFnLlxuICAgICAqXG4gICAgICogSWYgeW91ciBvcHRpb24gdmFsdWVzIGFyZSBzaW1wbGUgc3RyaW5ncywgeW91IGNhbiBiaW5kIHRvIHRoZSBub3JtYWwgYHZhbHVlYCBwcm9wZXJ0eVxuICAgICAqIG9uIHRoZSBvcHRpb24uICBJZiB5b3VyIG9wdGlvbiB2YWx1ZXMgaGFwcGVuIHRvIGJlIG9iamVjdHMgKGFuZCB5b3UnZCBsaWtlIHRvIHNhdmUgdGhlXG4gICAgICogc2VsZWN0aW9uIGluIHlvdXIgZm9ybSBhcyBhbiBvYmplY3QpLCB1c2UgYG5nVmFsdWVgIGluc3RlYWQ6XG4gICAgICpcbiAgICAgKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9zZWxlY3RDb250cm9sL3NlbGVjdF9jb250cm9sX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAqXG4gICAgICogSW4gcmVhY3RpdmUgZm9ybXMsIHlvdSdsbCBhbHNvIHdhbnQgdG8gYWRkIHlvdXIgZm9ybSBkaXJlY3RpdmUgKGBmb3JtQ29udHJvbE5hbWVgIG9yXG4gICAgICogYGZvcm1Db250cm9sYCkgb24gdGhlIG1haW4gYDxzZWxlY3Q+YCB0YWcuIExpa2UgaW4gdGhlIGZvcm1lciBleGFtcGxlLCB5b3UgaGF2ZSB0aGVcbiAgICAgKiBjaG9pY2Ugb2YgYmluZGluZyB0byB0aGUgIGB2YWx1ZWAgb3IgYG5nVmFsdWVgIHByb3BlcnR5IG9uIHRoZSBzZWxlY3QncyBvcHRpb25zLlxuICAgICAqXG4gICAgICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvcmVhY3RpdmVTZWxlY3RDb250cm9sL3JlYWN0aXZlX3NlbGVjdF9jb250cm9sX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAqXG4gICAgICogTm90ZTogV2UgbGlzdGVuIHRvIHRoZSAnY2hhbmdlJyBldmVudCBiZWNhdXNlICdpbnB1dCcgZXZlbnRzIGFyZW4ndCBmaXJlZFxuICAgICAqIGZvciBzZWxlY3RzIGluIEZpcmVmb3ggYW5kIElFOlxuICAgICAqIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEwMjQzNTBcbiAgICAgKiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy80NjYwMDQ1L1xuICAgICAqXG4gICAgICogKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICAgICAqXG4gICAgICogXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICAgICAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yKF9yZW5kZXJlciwgX2VsZW1lbnRSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyID0gX3JlbmRlcmVyO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZiA9IF9lbGVtZW50UmVmO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9uTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5faWRDb3VudGVyID0gMDtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoXykgeyB9O1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS53cml0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpZCA9IHRoaXMuX2dldE9wdGlvbklkKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChpZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3NlbGVjdGVkSW5kZXgnLCAtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWx1ZVN0cmluZyA9IF9idWlsZFZhbHVlU3RyaW5nKGlkLCB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCB2YWx1ZVN0cmluZyk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPbkNoYW5nZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWVTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy52YWx1ZSA9IHZhbHVlU3RyaW5nO1xuICAgICAgICAgICAgICAgIGZuKF90aGlzLl9nZXRPcHRpb25WYWx1ZSh2YWx1ZVN0cmluZykpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uVG91Y2hlZCA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuc2V0RGlzYWJsZWRTdGF0ZSA9IGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX3JlZ2lzdGVyT3B0aW9uID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHRoaXMuX2lkQ291bnRlcisrKS50b1N0cmluZygpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9nZXRPcHRpb25JZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IEFycmF5LmZyb20odGhpcy5fb3B0aW9uTWFwLmtleXMoKSk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIGlmIChsb29zZUlkZW50aWNhbCh0aGlzLl9vcHRpb25NYXAuZ2V0KGlkKSwgdmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVTdHJpbmdcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fZ2V0T3B0aW9uVmFsdWUgPSBmdW5jdGlvbiAodmFsdWVTdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGlkID0gX2V4dHJhY3RJZCh2YWx1ZVN0cmluZyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9uTWFwLmhhcyhpZCkgPyB0aGlzLl9vcHRpb25NYXAuZ2V0KGlkKSA6IHZhbHVlU3RyaW5nO1xuICAgICAgICB9O1xuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0Om5vdChbbXVsdGlwbGVdKVtmb3JtQ29udHJvbE5hbWVdLHNlbGVjdDpub3QoW211bHRpcGxlXSlbZm9ybUNvbnRyb2xdLHNlbGVjdDpub3QoW211bHRpcGxlXSlbbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLCAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbU0VMRUNUX1ZBTFVFX0FDQ0VTU09SXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlJlbmRlcmVyLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkVsZW1lbnRSZWYsIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIHJldHVybiBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgICB9KCkpO1xuICAgIC8qKlxuICAgICAqIFxcQHdoYXRJdERvZXMgTWFya3MgYDxvcHRpb24+YCBhcyBkeW5hbWljLCBzbyBBbmd1bGFyIGNhbiBiZSBub3RpZmllZCB3aGVuIG9wdGlvbnMgY2hhbmdlLlxuICAgICAqXG4gICAgICogXFxAaG93VG9Vc2VcbiAgICAgKlxuICAgICAqIFNlZSBkb2NzIGZvciB7XFxAbGluayBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZm9yIHVzYWdlIGV4YW1wbGVzLlxuICAgICAqXG4gICAgICogXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIE5nU2VsZWN0T3B0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gX2VsZW1lbnRcbiAgICAgICAgICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAgICAgICAgICogQHBhcmFtIHs/fSBfc2VsZWN0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBOZ1NlbGVjdE9wdGlvbihfZWxlbWVudCwgX3JlbmRlcmVyLCBfc2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50ID0gX2VsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlciA9IF9yZW5kZXJlcjtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdCA9IF9zZWxlY3Q7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0KVxuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLl9zZWxlY3QuX3JlZ2lzdGVyT3B0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nU2VsZWN0T3B0aW9uLnByb3RvdHlwZSwgXCJuZ1ZhbHVlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0ID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3QuX29wdGlvbk1hcC5zZXQodGhpcy5pZCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldEVsZW1lbnRWYWx1ZShfYnVpbGRWYWx1ZVN0cmluZyh0aGlzLmlkLCB2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdC53cml0ZVZhbHVlKHRoaXMuX3NlbGVjdC52YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nU2VsZWN0T3B0aW9uLnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0RWxlbWVudFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ1NlbGVjdE9wdGlvbi5wcm90b3R5cGUuX3NldEVsZW1lbnRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nU2VsZWN0T3B0aW9uLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3QuX29wdGlvbk1hcC5kZWxldGUodGhpcy5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTmdTZWxlY3RPcHRpb24uZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnb3B0aW9uJyB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE5nU2VsZWN0T3B0aW9uLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkVsZW1lbnRSZWYsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuUmVuZGVyZXIsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5Ib3N0IH0sXSB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICBOZ1NlbGVjdE9wdGlvbi5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICduZ1ZhbHVlJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWyduZ1ZhbHVlJyxdIH0sXSxcbiAgICAgICAgICAgICd2YWx1ZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsndmFsdWUnLF0gfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gTmdTZWxlY3RPcHRpb247XG4gICAgfSgpKTtcblxuICAgIHZhciAvKiogQHR5cGUgez99ICovIFNFTEVDVF9NVUxUSVBMRV9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGlkXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2J1aWxkVmFsdWVTdHJpbmckMShpZCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGlkID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gXCJcIiArIHZhbHVlO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHZhbHVlID0gXCInXCIgKyB2YWx1ZSArIFwiJ1wiO1xuICAgICAgICBpZiAoIWlzUHJpbWl0aXZlKHZhbHVlKSlcbiAgICAgICAgICAgIHZhbHVlID0gJ09iamVjdCc7XG4gICAgICAgIHJldHVybiAoaWQgKyBcIjogXCIgKyB2YWx1ZSkuc2xpY2UoMCwgNTApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlU3RyaW5nXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZXh0cmFjdElkJDEodmFsdWVTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlU3RyaW5nLnNwbGl0KCc6JylbMF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBhY2Nlc3NvciBmb3Igd3JpdGluZyBhIHZhbHVlIGFuZCBsaXN0ZW5pbmcgdG8gY2hhbmdlcyBvbiBhIHNlbGVjdCBlbGVtZW50LlxuICAgICAqXG4gICAgICogXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAgICAgICAgICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvcihfcmVuZGVyZXIsIF9lbGVtZW50UmVmKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlciA9IF9yZW5kZXJlcjtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYgPSBfZWxlbWVudFJlZjtcbiAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgIHRoaXMuX29wdGlvbk1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgIHRoaXMuX2lkQ291bnRlciA9IDA7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKF8pIHsgfTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS53cml0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gb3B0aW9uU2VsZWN0ZWRTdGF0ZVNldHRlcjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnZlcnQgdmFsdWVzIHRvIGlkc1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGlkc18xID0gdmFsdWUubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBfdGhpcy5fZ2V0T3B0aW9uSWQodik7IH0pO1xuICAgICAgICAgICAgICAgIG9wdGlvblNlbGVjdGVkU3RhdGVTZXR0ZXIgPSBmdW5jdGlvbiAob3B0LCBvKSB7IG9wdC5fc2V0U2VsZWN0ZWQoaWRzXzEuaW5kZXhPZihvLnRvU3RyaW5nKCkpID4gLTEpOyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uU2VsZWN0ZWRTdGF0ZVNldHRlciA9IGZ1bmN0aW9uIChvcHQsIG8pIHsgb3B0Ll9zZXRTZWxlY3RlZChmYWxzZSk7IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25NYXAuZm9yRWFjaChvcHRpb25TZWxlY3RlZFN0YXRlU2V0dGVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBzZWxlY3RlZCA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChfLmhhc093blByb3BlcnR5KCdzZWxlY3RlZE9wdGlvbnMnKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBvcHRpb25zID0gXy5zZWxlY3RlZE9wdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIC8qKiBAdHlwZSB7P30gKi8gaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBvcHQgPSBvcHRpb25zLml0ZW0oaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWwgPSBfdGhpcy5fZ2V0T3B0aW9uVmFsdWUob3B0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnB1c2godmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gb3B0aW9ucyA9IChfLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciAvKiogQHR5cGUgez99ICovIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gb3B0ID0gb3B0aW9ucy5pdGVtKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHZhbCA9IF90aGlzLl9nZXRPcHRpb25WYWx1ZShvcHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnB1c2godmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy52YWx1ZSA9IHNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIGZuKHNlbGVjdGVkKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uVG91Y2hlZCA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5zZXREaXNhYmxlZFN0YXRlID0gZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX3JlZ2lzdGVyT3B0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpZCA9ICh0aGlzLl9pZENvdW50ZXIrKykudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbk1hcC5zZXQoaWQsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9nZXRPcHRpb25JZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IEFycmF5LmZyb20odGhpcy5fb3B0aW9uTWFwLmtleXMoKSk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIGlmIChsb29zZUlkZW50aWNhbCh0aGlzLl9vcHRpb25NYXAuZ2V0KGlkKS5fdmFsdWUsIHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlU3RyaW5nXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fZ2V0T3B0aW9uVmFsdWUgPSBmdW5jdGlvbiAodmFsdWVTdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGlkID0gX2V4dHJhY3RJZCQxKHZhbHVlU3RyaW5nKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25NYXAuaGFzKGlkKSA/IHRoaXMuX29wdGlvbk1hcC5nZXQoaWQpLl92YWx1ZSA6IHZhbHVlU3RyaW5nO1xuICAgICAgICB9O1xuICAgICAgICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3RbbXVsdGlwbGVdW2Zvcm1Db250cm9sTmFtZV0sc2VsZWN0W211bHRpcGxlXVtmb3JtQ29udHJvbF0sc2VsZWN0W211bHRpcGxlXVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0KScsICcoYmx1ciknOiAnb25Ub3VjaGVkKCknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtTRUxFQ1RfTVVMVElQTEVfVkFMVUVfQUNDRVNTT1JdXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5SZW5kZXJlciwgfSxcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5FbGVtZW50UmVmLCB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICByZXR1cm4gU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgICB9KCkpO1xuICAgIC8qKlxuICAgICAqIE1hcmtzIGA8b3B0aW9uPmAgYXMgZHluYW1pYywgc28gQW5ndWxhciBjYW4gYmUgbm90aWZpZWQgd2hlbiBvcHRpb25zIGNoYW5nZS5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiA8c2VsZWN0IG11bHRpcGxlIG5hbWU9XCJjaXR5XCIgbmdNb2RlbD5cbiAgICAgKiAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGMgb2YgY2l0aWVzXCIgW3ZhbHVlXT1cImNcIj48L29wdGlvbj5cbiAgICAgKiA8L3NlbGVjdD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICB2YXIgTmdTZWxlY3RNdWx0aXBsZU9wdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IF9lbGVtZW50XG4gICAgICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICAgICAqIEBwYXJhbSB7P30gX3NlbGVjdFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gTmdTZWxlY3RNdWx0aXBsZU9wdGlvbihfZWxlbWVudCwgX3JlbmRlcmVyLCBfc2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50ID0gX2VsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlciA9IF9yZW5kZXJlcjtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdCA9IF9zZWxlY3Q7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMuX3NlbGVjdC5fcmVnaXN0ZXJPcHRpb24odGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvdG90eXBlLCBcIm5nVmFsdWVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3QgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0RWxlbWVudFZhbHVlKF9idWlsZFZhbHVlU3RyaW5nJDEodGhpcy5pZCwgdmFsdWUpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRFbGVtZW50VmFsdWUoX2J1aWxkVmFsdWVTdHJpbmckMSh0aGlzLmlkLCB2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2V0RWxlbWVudFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvdG90eXBlLl9zZXRFbGVtZW50VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7P30gc2VsZWN0ZWRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvdG90eXBlLl9zZXRTZWxlY3RlZCA9IGZ1bmN0aW9uIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdC5fb3B0aW9uTWFwLmRlbGV0ZSh0aGlzLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbeyBzZWxlY3RvcjogJ29wdGlvbicgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkVsZW1lbnRSZWYsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuUmVuZGVyZXIsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IsIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkhvc3QgfSxdIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnbmdWYWx1ZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnbmdWYWx1ZScsXSB9LF0sXG4gICAgICAgICAgICAndmFsdWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ3ZhbHVlJyxdIH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE5nU2VsZWN0TXVsdGlwbGVPcHRpb247XG4gICAgfSgpKTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEBwYXJhbSB7P30gcGFyZW50XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb250cm9sUGF0aChuYW1lLCBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5wYXRoLmNvbmNhdChbbmFtZV0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0VXBDb250cm9sKGNvbnRyb2wsIGRpcikge1xuICAgICAgICBpZiAoIWNvbnRyb2wpXG4gICAgICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdDYW5ub3QgZmluZCBjb250cm9sIHdpdGgnKTtcbiAgICAgICAgaWYgKCFkaXIudmFsdWVBY2Nlc3NvcilcbiAgICAgICAgICAgIF90aHJvd0Vycm9yKGRpciwgJ05vIHZhbHVlIGFjY2Vzc29yIGZvciBmb3JtIGNvbnRyb2wgd2l0aCcpO1xuICAgICAgICBjb250cm9sLnZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZShbY29udHJvbC52YWxpZGF0b3IsIGRpci52YWxpZGF0b3JdKTtcbiAgICAgICAgY29udHJvbC5hc3luY1ZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZUFzeW5jKFtjb250cm9sLmFzeW5jVmFsaWRhdG9yLCBkaXIuYXN5bmNWYWxpZGF0b3JdKTtcbiAgICAgICAgZGlyLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZShjb250cm9sLnZhbHVlKTtcbiAgICAgICAgLy8gdmlldyAtPiBtb2RlbFxuICAgICAgICBkaXIudmFsdWVBY2Nlc3Nvci5yZWdpc3Rlck9uQ2hhbmdlKGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgZGlyLnZpZXdUb01vZGVsVXBkYXRlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgICAgIGNvbnRyb2wuc2V0VmFsdWUobmV3VmFsdWUsIHsgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlOiBmYWxzZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRvdWNoZWRcbiAgICAgICAgZGlyLnZhbHVlQWNjZXNzb3IucmVnaXN0ZXJPblRvdWNoZWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7IH0pO1xuICAgICAgICBjb250cm9sLnJlZ2lzdGVyT25DaGFuZ2UoZnVuY3Rpb24gKG5ld1ZhbHVlLCBlbWl0TW9kZWxFdmVudCkge1xuICAgICAgICAgICAgLy8gY29udHJvbCAtPiB2aWV3XG4gICAgICAgICAgICBkaXIudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIC8vIGNvbnRyb2wgLT4gbmdNb2RlbFxuICAgICAgICAgICAgaWYgKGVtaXRNb2RlbEV2ZW50KVxuICAgICAgICAgICAgICAgIGRpci52aWV3VG9Nb2RlbFVwZGF0ZShuZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZGlyLnZhbHVlQWNjZXNzb3Iuc2V0RGlzYWJsZWRTdGF0ZSkge1xuICAgICAgICAgICAgY29udHJvbC5yZWdpc3Rlck9uRGlzYWJsZWRDaGFuZ2UoZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHsgZGlyLnZhbHVlQWNjZXNzb3Iuc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmUtcnVuIHZhbGlkYXRpb24gd2hlbiB2YWxpZGF0b3IgYmluZGluZyBjaGFuZ2VzLCBlLmcuIG1pbmxlbmd0aD0zIC0+IG1pbmxlbmd0aD00XG4gICAgICAgIGRpci5fcmF3VmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIGlmICgoKHZhbGlkYXRvcikpLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UpXG4gICAgICAgICAgICAgICAgKCh2YWxpZGF0b3IpKS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRpci5fcmF3QXN5bmNWYWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgaWYgKCgodmFsaWRhdG9yKSkucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSlcbiAgICAgICAgICAgICAgICAoKHZhbGlkYXRvcikpLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNsZWFuVXBDb250cm9sKGNvbnRyb2wsIGRpcikge1xuICAgICAgICBkaXIudmFsdWVBY2Nlc3Nvci5yZWdpc3Rlck9uQ2hhbmdlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9ub0NvbnRyb2xFcnJvcihkaXIpOyB9KTtcbiAgICAgICAgZGlyLnZhbHVlQWNjZXNzb3IucmVnaXN0ZXJPblRvdWNoZWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX25vQ29udHJvbEVycm9yKGRpcik7IH0pO1xuICAgICAgICBkaXIuX3Jhd1ZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRpci5fcmF3QXN5bmNWYWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRvci5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY29udHJvbClcbiAgICAgICAgICAgIGNvbnRyb2wuX2NsZWFyQ2hhbmdlRm5zKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRVcEZvcm1Db250YWluZXIoY29udHJvbCwgZGlyKSB7XG4gICAgICAgIGlmIChpc0JsYW5rKGNvbnRyb2wpKVxuICAgICAgICAgICAgX3Rocm93RXJyb3IoZGlyLCAnQ2Fubm90IGZpbmQgY29udHJvbCB3aXRoJyk7XG4gICAgICAgIGNvbnRyb2wudmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlKFtjb250cm9sLnZhbGlkYXRvciwgZGlyLnZhbGlkYXRvcl0pO1xuICAgICAgICBjb250cm9sLmFzeW5jVmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlQXN5bmMoW2NvbnRyb2wuYXN5bmNWYWxpZGF0b3IsIGRpci5hc3luY1ZhbGlkYXRvcl0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gX25vQ29udHJvbEVycm9yKGRpcikge1xuICAgICAgICByZXR1cm4gX3Rocm93RXJyb3IoZGlyLCAnVGhlcmUgaXMgbm8gRm9ybUNvbnRyb2wgaW5zdGFuY2UgYXR0YWNoZWQgdG8gZm9ybSBjb250cm9sIGVsZW1lbnQgd2l0aCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAqIEBwYXJhbSB7P30gbWVzc2FnZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gX3Rocm93RXJyb3IoZGlyLCBtZXNzYWdlKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG1lc3NhZ2VFbmQ7XG4gICAgICAgIGlmIChkaXIucGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBtZXNzYWdlRW5kID0gXCJwYXRoOiAnXCIgKyBkaXIucGF0aC5qb2luKCcgLT4gJykgKyBcIidcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXIucGF0aFswXSkge1xuICAgICAgICAgICAgbWVzc2FnZUVuZCA9IFwibmFtZTogJ1wiICsgZGlyLnBhdGggKyBcIidcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2VFbmQgPSAndW5zcGVjaWZpZWQgbmFtZSBhdHRyaWJ1dGUnO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlICsgXCIgXCIgKyBtZXNzYWdlRW5kKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb21wb3NlVmFsaWRhdG9ycyh2YWxpZGF0b3JzKSB7XG4gICAgICAgIHJldHVybiBpc1ByZXNlbnQodmFsaWRhdG9ycykgPyBWYWxpZGF0b3JzLmNvbXBvc2UodmFsaWRhdG9ycy5tYXAobm9ybWFsaXplVmFsaWRhdG9yKSkgOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModmFsaWRhdG9ycykge1xuICAgICAgICByZXR1cm4gaXNQcmVzZW50KHZhbGlkYXRvcnMpID8gVmFsaWRhdG9ycy5jb21wb3NlQXN5bmModmFsaWRhdG9ycy5tYXAobm9ybWFsaXplQXN5bmNWYWxpZGF0b3IpKSA6XG4gICAgICAgICAgICBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gez99IHZpZXdNb2RlbFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdmlld01vZGVsKSB7XG4gICAgICAgIGlmICghY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbW9kZWwnKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY2hhbmdlID0gY2hhbmdlc1snbW9kZWwnXTtcbiAgICAgICAgaWYgKGNoYW5nZS5pc0ZpcnN0Q2hhbmdlKCkpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuICFsb29zZUlkZW50aWNhbCh2aWV3TW9kZWwsIGNoYW5nZS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBCVUlMVElOX0FDQ0VTU09SUyA9IFtcbiAgICAgICAgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgUmFuZ2VWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBOdW1iZXJWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICBdO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVBY2Nlc3NvclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNCdWlsdEluQWNjZXNzb3IodmFsdWVBY2Nlc3Nvcikge1xuICAgICAgICByZXR1cm4gQlVJTFRJTl9BQ0NFU1NPUlMuc29tZShmdW5jdGlvbiAoYSkgeyByZXR1cm4gdmFsdWVBY2Nlc3Nvci5jb25zdHJ1Y3RvciA9PT0gYTsgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZUFjY2Vzc29yc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2VsZWN0VmFsdWVBY2Nlc3NvcihkaXIsIHZhbHVlQWNjZXNzb3JzKSB7XG4gICAgICAgIGlmICghdmFsdWVBY2Nlc3NvcnMpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZGVmYXVsdEFjY2Vzc29yO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBidWlsdGluQWNjZXNzb3I7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGN1c3RvbUFjY2Vzc29yO1xuICAgICAgICB2YWx1ZUFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICBpZiAodi5jb25zdHJ1Y3RvciA9PT0gRGVmYXVsdFZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0QWNjZXNzb3IgPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNCdWlsdEluQWNjZXNzb3IodikpIHtcbiAgICAgICAgICAgICAgICBpZiAoYnVpbHRpbkFjY2Vzc29yKVxuICAgICAgICAgICAgICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdNb3JlIHRoYW4gb25lIGJ1aWx0LWluIHZhbHVlIGFjY2Vzc29yIG1hdGNoZXMgZm9ybSBjb250cm9sIHdpdGgnKTtcbiAgICAgICAgICAgICAgICBidWlsdGluQWNjZXNzb3IgPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1c3RvbUFjY2Vzc29yKVxuICAgICAgICAgICAgICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdNb3JlIHRoYW4gb25lIGN1c3RvbSB2YWx1ZSBhY2Nlc3NvciBtYXRjaGVzIGZvcm0gY29udHJvbCB3aXRoJyk7XG4gICAgICAgICAgICAgICAgY3VzdG9tQWNjZXNzb3IgPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGN1c3RvbUFjY2Vzc29yKVxuICAgICAgICAgICAgcmV0dXJuIGN1c3RvbUFjY2Vzc29yO1xuICAgICAgICBpZiAoYnVpbHRpbkFjY2Vzc29yKVxuICAgICAgICAgICAgcmV0dXJuIGJ1aWx0aW5BY2Nlc3NvcjtcbiAgICAgICAgaWYgKGRlZmF1bHRBY2Nlc3NvcilcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0QWNjZXNzb3I7XG4gICAgICAgIF90aHJvd0Vycm9yKGRpciwgJ05vIHZhbGlkIHZhbHVlIGFjY2Vzc29yIGZvciBmb3JtIGNvbnRyb2wgd2l0aCcpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgYSBiYXNlIGNsYXNzIGZvciBjb2RlIHNoYXJlZCBiZXR3ZWVuIHtcXEBsaW5rIE5nTW9kZWxHcm91cH0gYW5kIHtcXEBsaW5rIEZvcm1Hcm91cE5hbWV9LlxuICAgICAqXG4gICAgICogXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSgpIHtcbiAgICAgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tQYXJlbnRUeXBlKCk7XG4gICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUuYWRkRm9ybUdyb3VwKHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1EaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVtb3ZlRm9ybUdyb3VwKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcImNvbnRyb2xcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgdGhlIHtcXEBsaW5rIEZvcm1Hcm91cH0gYmFja2luZyB0aGlzIGJpbmRpbmcuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZm9ybURpcmVjdGl2ZS5nZXRGb3JtR3JvdXAodGhpcyk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcInBhdGhcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgdGhlIHBhdGggdG8gdGhpcyBjb250cm9sIGdyb3VwLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb250cm9sUGF0aCh0aGlzLm5hbWUsIHRoaXMuX3BhcmVudCk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcImZvcm1EaXJlY3RpdmVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgdGhlIHtcXEBsaW5rIEZvcm19IHRvIHdoaWNoIHRoaXMgZ3JvdXAgYmVsb25ncy5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcGFyZW50ID8gdGhpcy5fcGFyZW50LmZvcm1EaXJlY3RpdmUgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ2YWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbXBvc2VWYWxpZGF0b3JzKHRoaXMuX3ZhbGlkYXRvcnMpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJhc3luY1ZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9hc3luY1ZhbGlkYXRvcnMpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuX2NoZWNrUGFyZW50VHlwZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgcmV0dXJuIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlO1xuICAgIH0oQ29udHJvbENvbnRhaW5lcikpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkMyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIHZhciBBYnN0cmFjdENvbnRyb2xTdGF0dXMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQWJzdHJhY3RDb250cm9sU3RhdHVzKGNkKSB7XG4gICAgICAgICAgICB0aGlzLl9jZCA9IGNkO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xTdGF0dXMucHJvdG90eXBlLCBcIm5nQ2xhc3NVbnRvdWNoZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2NkLmNvbnRyb2wgPyB0aGlzLl9jZC5jb250cm9sLnVudG91Y2hlZCA6IGZhbHNlOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbFN0YXR1cy5wcm90b3R5cGUsIFwibmdDbGFzc1RvdWNoZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2NkLmNvbnRyb2wgPyB0aGlzLl9jZC5jb250cm9sLnRvdWNoZWQgOiBmYWxzZTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xTdGF0dXMucHJvdG90eXBlLCBcIm5nQ2xhc3NQcmlzdGluZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wucHJpc3RpbmUgOiBmYWxzZTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xTdGF0dXMucHJvdG90eXBlLCBcIm5nQ2xhc3NEaXJ0eVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wuZGlydHkgOiBmYWxzZTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xTdGF0dXMucHJvdG90eXBlLCBcIm5nQ2xhc3NWYWxpZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wudmFsaWQgOiBmYWxzZTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xTdGF0dXMucHJvdG90eXBlLCBcIm5nQ2xhc3NJbnZhbGlkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jZC5jb250cm9sID8gdGhpcy5fY2QuY29udHJvbC5pbnZhbGlkIDogZmFsc2U7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sU3RhdHVzLnByb3RvdHlwZSwgXCJuZ0NsYXNzUGVuZGluZ1wiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wucGVuZGluZyA6IGZhbHNlOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIEFic3RyYWN0Q29udHJvbFN0YXR1cztcbiAgICB9KCkpO1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIG5nQ29udHJvbFN0YXR1c0hvc3QgPSB7XG4gICAgICAgICdbY2xhc3MubmctdW50b3VjaGVkXSc6ICduZ0NsYXNzVW50b3VjaGVkJyxcbiAgICAgICAgJ1tjbGFzcy5uZy10b3VjaGVkXSc6ICduZ0NsYXNzVG91Y2hlZCcsXG4gICAgICAgICdbY2xhc3MubmctcHJpc3RpbmVdJzogJ25nQ2xhc3NQcmlzdGluZScsXG4gICAgICAgICdbY2xhc3MubmctZGlydHldJzogJ25nQ2xhc3NEaXJ0eScsXG4gICAgICAgICdbY2xhc3MubmctdmFsaWRdJzogJ25nQ2xhc3NWYWxpZCcsXG4gICAgICAgICdbY2xhc3MubmctaW52YWxpZF0nOiAnbmdDbGFzc0ludmFsaWQnLFxuICAgICAgICAnW2NsYXNzLm5nLXBlbmRpbmddJzogJ25nQ2xhc3NQZW5kaW5nJyxcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpcmVjdGl2ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gQW5ndWxhciBmb3JtIGNvbnRyb2xzIHRoYXQgc2V0cyBDU1MgY2xhc3Nlc1xuICAgICAqIGJhc2VkIG9uIGNvbnRyb2wgc3RhdHVzICh2YWxpZC9pbnZhbGlkL2RpcnR5L2V0YykuXG4gICAgICpcbiAgICAgKiBcXEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgTmdDb250cm9sU3RhdHVzID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDMoTmdDb250cm9sU3RhdHVzLCBfc3VwZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gTmdDb250cm9sU3RhdHVzKGNkKSB7XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBjZCk7XG4gICAgICAgIH1cbiAgICAgICAgTmdDb250cm9sU3RhdHVzLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbeyBzZWxlY3RvcjogJ1tmb3JtQ29udHJvbE5hbWVdLFtuZ01vZGVsXSxbZm9ybUNvbnRyb2xdJywgaG9zdDogbmdDb250cm9sU3RhdHVzSG9zdCB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE5nQ29udHJvbFN0YXR1cy5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogTmdDb250cm9sLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSxdIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIHJldHVybiBOZ0NvbnRyb2xTdGF0dXM7XG4gICAgfShBYnN0cmFjdENvbnRyb2xTdGF0dXMpKTtcbiAgICAvKipcbiAgICAgKiBEaXJlY3RpdmUgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIEFuZ3VsYXIgZm9ybSBncm91cHMgdGhhdCBzZXRzIENTUyBjbGFzc2VzXG4gICAgICogYmFzZWQgb24gY29udHJvbCBzdGF0dXMgKHZhbGlkL2ludmFsaWQvZGlydHkvZXRjKS5cbiAgICAgKlxuICAgICAqIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBOZ0NvbnRyb2xTdGF0dXNHcm91cCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQzKE5nQ29udHJvbFN0YXR1c0dyb3VwLCBfc3VwZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gTmdDb250cm9sU3RhdHVzR3JvdXAoY2QpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGNkKTtcbiAgICAgICAgfVxuICAgICAgICBOZ0NvbnRyb2xTdGF0dXNHcm91cC5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnW2Zvcm1Hcm91cE5hbWVdLFtmb3JtQXJyYXlOYW1lXSxbbmdNb2RlbEdyb3VwXSxbZm9ybUdyb3VwXSxmb3JtOm5vdChbbmdOb0Zvcm1dKSxbbmdGb3JtXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiBuZ0NvbnRyb2xTdGF0dXNIb3N0XG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgTmdDb250cm9sU3RhdHVzR3JvdXAuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LF0gfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgcmV0dXJuIE5nQ29udHJvbFN0YXR1c0dyb3VwO1xuICAgIH0oQWJzdHJhY3RDb250cm9sU3RhdHVzKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQ1ID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXNlIGJ5IGRpcmVjdGl2ZXMgYW5kIGNvbXBvbmVudHMgdG8gZW1pdCBjdXN0b20gRXZlbnRzLlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzXG4gICAgICpcbiAgICAgKiBJbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUsIGBaaXBweWAgYWx0ZXJuYXRpdmVseSBlbWl0cyBgb3BlbmAgYW5kIGBjbG9zZWAgZXZlbnRzIHdoZW4gaXRzXG4gICAgICogdGl0bGUgZ2V0cyBjbGlja2VkOlxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogXFxAQ29tcG9uZW50KHtcbiAgICAgKiAgIHNlbGVjdG9yOiAnemlwcHknLFxuICAgICAqICAgdGVtcGxhdGU6IGBcbiAgICAgKiAgIDxkaXYgY2xhc3M9XCJ6aXBweVwiPlxuICAgICAqICAgICA8ZGl2IChjbGljayk9XCJ0b2dnbGUoKVwiPlRvZ2dsZTwvZGl2PlxuICAgICAqICAgICA8ZGl2IFtoaWRkZW5dPVwiIXZpc2libGVcIj5cbiAgICAgKiAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICogICAgIDwvZGl2PlxuICAgICAqICA8L2Rpdj5gfSlcbiAgICAgKiBleHBvcnQgY2xhc3MgWmlwcHkge1xuICAgICAqICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG4gICAgICogICBcXEBPdXRwdXQoKSBvcGVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgKiAgIFxcQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgKlxuICAgICAqICAgdG9nZ2xlKCkge1xuICAgICAqICAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xuICAgICAqICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICogICAgICAgdGhpcy5vcGVuLmVtaXQobnVsbCk7XG4gICAgICogICAgIH0gZWxzZSB7XG4gICAgICogICAgICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xuICAgICAqICAgICB9XG4gICAgICogICB9XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogVGhlIGV2ZW50cyBwYXlsb2FkIGNhbiBiZSBhY2Nlc3NlZCBieSB0aGUgcGFyYW1ldGVyIGAkZXZlbnRgIG9uIHRoZSBjb21wb25lbnRzIG91dHB1dCBldmVudFxuICAgICAqIGhhbmRsZXI6XG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiA8emlwcHkgKG9wZW4pPVwib25PcGVuKCRldmVudClcIiAoY2xvc2UpPVwib25DbG9zZSgkZXZlbnQpXCI+PC96aXBweT5cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIFVzZXMgUnguT2JzZXJ2YWJsZSBidXQgcHJvdmlkZXMgYW4gYWRhcHRlciB0byBtYWtlIGl0IHdvcmsgYXMgc3BlY2lmaWVkIGhlcmU6XG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL2podXNhaW4vb2JzZXJ2YWJsZS1zcGVjXG4gICAgICpcbiAgICAgKiBPbmNlIGEgcmVmZXJlbmNlIGltcGxlbWVudGF0aW9uIG9mIHRoZSBzcGVjIGlzIGF2YWlsYWJsZSwgc3dpdGNoIHRvIGl0LlxuICAgICAqIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBFdmVudEVtaXR0ZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkNShFdmVudEVtaXR0ZXIsIF9zdXBlcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFtFdmVudEVtaXR0ZXJdLCB3aGljaCBkZXBlbmRpbmcgb24gW2lzQXN5bmNdLFxuICAgICAgICAgKiBkZWxpdmVycyBldmVudHMgc3luY2hyb25vdXNseSBvciBhc3luY2hyb25vdXNseS5cbiAgICAgICAgICogQHBhcmFtIHs/PX0gaXNBc3luY1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gRXZlbnRFbWl0dGVyKGlzQXN5bmMpIHtcbiAgICAgICAgICAgIGlmIChpc0FzeW5jID09PSB2b2lkIDApIHsgaXNBc3luYyA9IGZhbHNlOyB9XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX19pc0FzeW5jID0gaXNBc3luYztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/PX0gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyBfc3VwZXIucHJvdG90eXBlLm5leHQuY2FsbCh0aGlzLCB2YWx1ZSk7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez89fSBnZW5lcmF0b3JPck5leHRcbiAgICAgICAgICogQHBhcmFtIHs/PX0gZXJyb3JcbiAgICAgICAgICogQHBhcmFtIHs/PX0gY29tcGxldGVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKGdlbmVyYXRvck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBzY2hlZHVsZXJGbjtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGVycm9yRm4gPSBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBudWxsOyB9O1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29tcGxldGVGbiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH07XG4gICAgICAgICAgICBpZiAoZ2VuZXJhdG9yT3JOZXh0ICYmIHR5cGVvZiBnZW5lcmF0b3JPck5leHQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgc2NoZWR1bGVyRm4gPSB0aGlzLl9faXNBc3luYyA/IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdlbmVyYXRvck9yTmV4dC5uZXh0KHZhbHVlKTsgfSk7XG4gICAgICAgICAgICAgICAgfSA6IGZ1bmN0aW9uICh2YWx1ZSkgeyBnZW5lcmF0b3JPck5leHQubmV4dCh2YWx1ZSk7IH07XG4gICAgICAgICAgICAgICAgaWYgKGdlbmVyYXRvck9yTmV4dC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBlcnJvckZuID0gdGhpcy5fX2lzQXN5bmMgPyBmdW5jdGlvbiAoZXJyKSB7IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2VuZXJhdG9yT3JOZXh0LmVycm9yKGVycik7IH0pOyB9IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIpIHsgZ2VuZXJhdG9yT3JOZXh0LmVycm9yKGVycik7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChnZW5lcmF0b3JPck5leHQuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVGbiA9IHRoaXMuX19pc0FzeW5jID8gZnVuY3Rpb24gKCkgeyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdlbmVyYXRvck9yTmV4dC5jb21wbGV0ZSgpOyB9KTsgfSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7IGdlbmVyYXRvck9yTmV4dC5jb21wbGV0ZSgpOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlckZuID0gdGhpcy5fX2lzQXN5bmMgPyBmdW5jdGlvbiAodmFsdWUpIHsgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBnZW5lcmF0b3JPck5leHQodmFsdWUpOyB9KTsgfSA6XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh2YWx1ZSkgeyBnZW5lcmF0b3JPck5leHQodmFsdWUpOyB9O1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBlcnJvckZuID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19pc0FzeW5jID8gZnVuY3Rpb24gKGVycikgeyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVycm9yKGVycik7IH0pOyB9IDogZnVuY3Rpb24gKGVycikgeyBlcnJvcihlcnIpOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVGbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9faXNBc3luYyA/IGZ1bmN0aW9uICgpIHsgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wbGV0ZSgpOyB9KTsgfSA6IGZ1bmN0aW9uICgpIHsgY29tcGxldGUoKTsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5zdWJzY3JpYmUuY2FsbCh0aGlzLCBzY2hlZHVsZXJGbiwgZXJyb3JGbiwgY29tcGxldGVGbik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBFdmVudEVtaXR0ZXI7XG4gICAgfShyeGpzX1N1YmplY3QuU3ViamVjdCkpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkNiA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IGEgRm9ybUNvbnRyb2wgaXMgdmFsaWQsIGkuZS4gdGhhdCBubyBlcnJvcnMgZXhpc3QgaW4gdGhlIGlucHV0IHZhbHVlLlxuICAgICAqL1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIFZBTElEID0gJ1ZBTElEJztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgdGhhdCBhIEZvcm1Db250cm9sIGlzIGludmFsaWQsIGkuZS4gdGhhdCBhbiBlcnJvciBleGlzdHMgaW4gdGhlIGlucHV0IHZhbHVlLlxuICAgICAqL1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIElOVkFMSUQgPSAnSU5WQUxJRCc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoYXQgYSBGb3JtQ29udHJvbCBpcyBwZW5kaW5nLCBpLmUuIHRoYXQgYXN5bmMgdmFsaWRhdGlvbiBpcyBvY2N1cnJpbmcgYW5kXG4gICAgICogZXJyb3JzIGFyZSBub3QgeWV0IGF2YWlsYWJsZSBmb3IgdGhlIGlucHV0IHZhbHVlLlxuICAgICAqL1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIFBFTkRJTkcgPSAnUEVORElORyc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoYXQgYSBGb3JtQ29udHJvbCBpcyBkaXNhYmxlZCwgaS5lLiB0aGF0IHRoZSBjb250cm9sIGlzIGV4ZW1wdCBmcm9tIGFuY2VzdG9yXG4gICAgICogY2FsY3VsYXRpb25zIG9mIHZhbGlkaXR5IG9yIHZhbHVlLlxuICAgICAqL1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIERJU0FCTEVEID0gJ0RJU0FCTEVEJztcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgKiBAcGFyYW0gez99IHBhdGhcbiAgICAgKiBAcGFyYW0gez99IGRlbGltaXRlclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2ZpbmQoY29udHJvbCwgcGF0aCwgZGVsaW1pdGVyKSB7XG4gICAgICAgIGlmIChwYXRoID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKCEocGF0aCBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICAgICAgcGF0aCA9ICgocGF0aCkpLnNwbGl0KGRlbGltaXRlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGggaW5zdGFuY2VvZiBBcnJheSAmJiAocGF0aC5sZW5ndGggPT09IDApKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiAoKHBhdGgpKS5yZWR1Y2UoZnVuY3Rpb24gKHYsIG5hbWUpIHtcbiAgICAgICAgICAgIGlmICh2IGluc3RhbmNlb2YgRm9ybUdyb3VwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHYuY29udHJvbHNbbmFtZV0gfHwgbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2IGluc3RhbmNlb2YgRm9ybUFycmF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHYuYXQoLyoqIEB0eXBlIHs/fSAqLyAobmFtZSkpIHx8IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSwgY29udHJvbCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gdG9PYnNlcnZhYmxlKHIpIHtcbiAgICAgICAgcmV0dXJuIGlzUHJvbWlzZShyKSA/IHJ4anNfb2JzZXJ2YWJsZV9mcm9tUHJvbWlzZS5mcm9tUHJvbWlzZShyKSA6IHI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb2VyY2VUb1ZhbGlkYXRvcih2YWxpZGF0b3IpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsaWRhdG9yKSA/IGNvbXBvc2VWYWxpZGF0b3JzKHZhbGlkYXRvcikgOiB2YWxpZGF0b3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNvZXJjZVRvQXN5bmNWYWxpZGF0b3IoYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXN5bmNWYWxpZGF0b3IpID8gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyhhc3luY1ZhbGlkYXRvcikgOiBhc3luY1ZhbGlkYXRvcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogXFxAd2hhdEl0RG9lcyBUaGlzIGlzIHRoZSBiYXNlIGNsYXNzIGZvciB7XFxAbGluayBGb3JtQ29udHJvbH0sIHtcXEBsaW5rIEZvcm1Hcm91cH0sIGFuZFxuICAgICAqIHtcXEBsaW5rIEZvcm1BcnJheX0uXG4gICAgICpcbiAgICAgKiBJdCBwcm92aWRlcyBzb21lIG9mIHRoZSBzaGFyZWQgYmVoYXZpb3IgdGhhdCBhbGwgY29udHJvbHMgYW5kIGdyb3VwcyBvZiBjb250cm9scyBoYXZlLCBsaWtlXG4gICAgICogcnVubmluZyB2YWxpZGF0b3JzLCBjYWxjdWxhdGluZyBzdGF0dXMsIGFuZCByZXNldHRpbmcgc3RhdGUuIEl0IGFsc28gZGVmaW5lcyB0aGUgcHJvcGVydGllc1xuICAgICAqIHRoYXQgYXJlIHNoYXJlZCBiZXR3ZWVuIGFsbCBzdWItY2xhc3NlcywgbGlrZSBgdmFsdWVgLCBgdmFsaWRgLCBhbmQgYGRpcnR5YC4gSXQgc2hvdWxkbid0IGJlXG4gICAgICogaW5zdGFudGlhdGVkIGRpcmVjdGx5LlxuICAgICAqXG4gICAgICogXFxAc3RhYmxlXG4gICAgICogQGFic3RyYWN0XG4gICAgICovXG4gICAgdmFyIEFic3RyYWN0Q29udHJvbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvclxuICAgICAgICAgKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBBYnN0cmFjdENvbnRyb2wodmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IgPSB2YWxpZGF0b3I7XG4gICAgICAgICAgICB0aGlzLmFzeW5jVmFsaWRhdG9yID0gYXN5bmNWYWxpZGF0b3I7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgICAgICB0aGlzLl9wcmlzdGluZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl90b3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9vbkRpc2FibGVkQ2hhbmdlID0gW107XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwicGFyZW50XCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIHBhcmVudCBjb250cm9sLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wYXJlbnQ7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJzdGF0dXNcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgdmFsaWRhdGlvbiBzdGF0dXMgb2YgdGhlIGNvbnRyb2wuIFRoZXJlIGFyZSBmb3VyIHBvc3NpYmxlXG4gICAgICAgICAgICAgKiB2YWxpZGF0aW9uIHN0YXR1c2VzOlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqICogKipWQUxJRCoqOiAgY29udHJvbCBoYXMgcGFzc2VkIGFsbCB2YWxpZGF0aW9uIGNoZWNrc1xuICAgICAgICAgICAgICogKiAqKklOVkFMSUQqKjogY29udHJvbCBoYXMgZmFpbGVkIGF0IGxlYXN0IG9uZSB2YWxpZGF0aW9uIGNoZWNrXG4gICAgICAgICAgICAgKiAqICoqUEVORElORyoqOiBjb250cm9sIGlzIGluIHRoZSBtaWRzdCBvZiBjb25kdWN0aW5nIGEgdmFsaWRhdGlvbiBjaGVja1xuICAgICAgICAgICAgICogKiAqKkRJU0FCTEVEKio6IGNvbnRyb2wgaXMgZXhlbXB0IGZyb20gdmFsaWRhdGlvbiBjaGVja3NcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBUaGVzZSBzdGF0dXNlcyBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLCBzbyBhIGNvbnRyb2wgY2Fubm90IGJlXG4gICAgICAgICAgICAgKiBib3RoIHZhbGlkIEFORCBpbnZhbGlkIG9yIGludmFsaWQgQU5EIGRpc2FibGVkLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXM7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJ2YWxpZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgY29udHJvbCBpcyBgdmFsaWRgIHdoZW4gaXRzIGBzdGF0dXMgPT09IFZBTElEYC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBJbiBvcmRlciB0byBoYXZlIHRoaXMgc3RhdHVzLCB0aGUgY29udHJvbCBtdXN0IGhhdmUgcGFzc2VkIGFsbCBpdHNcbiAgICAgICAgICAgICAqIHZhbGlkYXRpb24gY2hlY2tzLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXMgPT09IFZBTElEOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwiaW52YWxpZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgY29udHJvbCBpcyBgaW52YWxpZGAgd2hlbiBpdHMgYHN0YXR1cyA9PT0gSU5WQUxJRGAuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogSW4gb3JkZXIgdG8gaGF2ZSB0aGlzIHN0YXR1cywgdGhlIGNvbnRyb2wgbXVzdCBoYXZlIGZhaWxlZFxuICAgICAgICAgICAgICogYXQgbGVhc3Qgb25lIG9mIGl0cyB2YWxpZGF0aW9uIGNoZWNrcy5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc3RhdHVzID09PSBJTlZBTElEOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwicGVuZGluZ1wiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgY29udHJvbCBpcyBgcGVuZGluZ2Agd2hlbiBpdHMgYHN0YXR1cyA9PT0gUEVORElOR2AuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogSW4gb3JkZXIgdG8gaGF2ZSB0aGlzIHN0YXR1cywgdGhlIGNvbnRyb2wgbXVzdCBiZSBpbiB0aGVcbiAgICAgICAgICAgICAqIG1pZGRsZSBvZiBjb25kdWN0aW5nIGEgdmFsaWRhdGlvbiBjaGVjay5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc3RhdHVzID09IFBFTkRJTkc7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgY29udHJvbCBpcyBgZGlzYWJsZWRgIHdoZW4gaXRzIGBzdGF0dXMgPT09IERJU0FCTEVEYC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBEaXNhYmxlZCBjb250cm9scyBhcmUgZXhlbXB0IGZyb20gdmFsaWRhdGlvbiBjaGVja3MgYW5kXG4gICAgICAgICAgICAgKiBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgdGhlaXIgYW5jZXN0b3JcbiAgICAgICAgICAgICAqIGNvbnRyb2xzLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXMgPT09IERJU0FCTEVEOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwiZW5hYmxlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgY29udHJvbCBpcyBgZW5hYmxlZGAgYXMgbG9uZyBhcyBpdHMgYHN0YXR1cyAhPT0gRElTQUJMRURgLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEluIG90aGVyIHdvcmRzLCBpdCBoYXMgYSBzdGF0dXMgb2YgYFZBTElEYCwgYElOVkFMSURgLCBvclxuICAgICAgICAgICAgICogYFBFTkRJTkdgLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXMgIT09IERJU0FCTEVEOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwiZXJyb3JzXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmV0dXJucyBhbnkgZXJyb3JzIGdlbmVyYXRlZCBieSBmYWlsaW5nIHZhbGlkYXRpb24uIElmIHRoZXJlXG4gICAgICAgICAgICAgKiBhcmUgbm8gZXJyb3JzLCBpdCB3aWxsIHJldHVybiBudWxsLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9lcnJvcnM7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJwcmlzdGluZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgY29udHJvbCBpcyBgcHJpc3RpbmVgIGlmIHRoZSB1c2VyIGhhcyBub3QgeWV0IGNoYW5nZWRcbiAgICAgICAgICAgICAqIHRoZSB2YWx1ZSBpbiB0aGUgVUkuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogTm90ZSB0aGF0IHByb2dyYW1tYXRpYyBjaGFuZ2VzIHRvIGEgY29udHJvbCdzIHZhbHVlIHdpbGxcbiAgICAgICAgICAgICAqICpub3QqIG1hcmsgaXQgZGlydHkuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3ByaXN0aW5lOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwiZGlydHlcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBIGNvbnRyb2wgaXMgYGRpcnR5YCBpZiB0aGUgdXNlciBoYXMgY2hhbmdlZCB0aGUgdmFsdWVcbiAgICAgICAgICAgICAqIGluIHRoZSBVSS5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBOb3RlIHRoYXQgcHJvZ3JhbW1hdGljIGNoYW5nZXMgdG8gYSBjb250cm9sJ3MgdmFsdWUgd2lsbFxuICAgICAgICAgICAgICogKm5vdCogbWFyayBpdCBkaXJ0eS5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gIXRoaXMucHJpc3RpbmU7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJ0b3VjaGVkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQSBjb250cm9sIGlzIG1hcmtlZCBgdG91Y2hlZGAgb25jZSB0aGUgdXNlciBoYXMgdHJpZ2dlcmVkXG4gICAgICAgICAgICAgKiBhIGBibHVyYCBldmVudCBvbiBpdC5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fdG91Y2hlZDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInVudG91Y2hlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgY29udHJvbCBpcyBgdW50b3VjaGVkYCBpZiB0aGUgdXNlciBoYXMgbm90IHlldCB0cmlnZ2VyZWRcbiAgICAgICAgICAgICAqIGEgYGJsdXJgIGV2ZW50IG9uIGl0LlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAhdGhpcy5fdG91Y2hlZDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInZhbHVlQ2hhbmdlc1wiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVtaXRzIGFuIGV2ZW50IGV2ZXJ5IHRpbWUgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sIGNoYW5nZXMsIGluXG4gICAgICAgICAgICAgKiB0aGUgVUkgb3IgcHJvZ3JhbW1hdGljYWxseS5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fdmFsdWVDaGFuZ2VzOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwic3RhdHVzQ2hhbmdlc1wiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVtaXRzIGFuIGV2ZW50IGV2ZXJ5IHRpbWUgdGhlIHZhbGlkYXRpb24gc3RhdHVzIG9mIHRoZSBjb250cm9sXG4gICAgICAgICAgICAgKiBpcyByZS1jYWxjdWxhdGVkLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXNDaGFuZ2VzOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIHN5bmNocm9ub3VzIHZhbGlkYXRvcnMgdGhhdCBhcmUgYWN0aXZlIG9uIHRoaXMgY29udHJvbC4gIENhbGxpbmdcbiAgICAgICAgICogdGhpcyB3aWxsIG92ZXJ3cml0ZSBhbnkgZXhpc3Rpbmcgc3luYyB2YWxpZGF0b3JzLlxuICAgICAgICAgKiBAcGFyYW0gez99IG5ld1ZhbGlkYXRvclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5zZXRWYWxpZGF0b3JzID0gZnVuY3Rpb24gKG5ld1ZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBjb2VyY2VUb1ZhbGlkYXRvcihuZXdWYWxpZGF0b3IpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgYXN5bmMgdmFsaWRhdG9ycyB0aGF0IGFyZSBhY3RpdmUgb24gdGhpcyBjb250cm9sLiBDYWxsaW5nIHRoaXNcbiAgICAgICAgICogd2lsbCBvdmVyd3JpdGUgYW55IGV4aXN0aW5nIGFzeW5jIHZhbGlkYXRvcnMuXG4gICAgICAgICAqIEBwYXJhbSB7P30gbmV3VmFsaWRhdG9yXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLnNldEFzeW5jVmFsaWRhdG9ycyA9IGZ1bmN0aW9uIChuZXdWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuYXN5bmNWYWxpZGF0b3IgPSBjb2VyY2VUb0FzeW5jVmFsaWRhdG9yKG5ld1ZhbGlkYXRvcik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbXB0aWVzIG91dCB0aGUgc3luYyB2YWxpZGF0b3IgbGlzdC5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuY2xlYXJWYWxpZGF0b3JzID0gZnVuY3Rpb24gKCkgeyB0aGlzLnZhbGlkYXRvciA9IG51bGw7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbXB0aWVzIG91dCB0aGUgYXN5bmMgdmFsaWRhdG9yIGxpc3QuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmNsZWFyQXN5bmNWYWxpZGF0b3JzID0gZnVuY3Rpb24gKCkgeyB0aGlzLmFzeW5jVmFsaWRhdG9yID0gbnVsbDsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1hcmtzIHRoZSBjb250cm9sIGFzIGB0b3VjaGVkYC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyB3aWxsIGFsc28gbWFyayBhbGwgZGlyZWN0IGFuY2VzdG9ycyBhcyBgdG91Y2hlZGAgdG8gbWFpbnRhaW5cbiAgICAgICAgICogdGhlIG1vZGVsLlxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzBcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUubWFya0FzVG91Y2hlZCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG9ubHlTZWxmID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5vbmx5U2VsZjtcbiAgICAgICAgICAgIHRoaXMuX3RvdWNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQubWFya0FzVG91Y2hlZCh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1hcmtzIHRoZSBjb250cm9sIGFzIGB1bnRvdWNoZWRgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB0aGUgY29udHJvbCBoYXMgYW55IGNoaWxkcmVuLCBpdCB3aWxsIGFsc28gbWFyayBhbGwgY2hpbGRyZW4gYXMgYHVudG91Y2hlZGBcbiAgICAgICAgICogdG8gbWFpbnRhaW4gdGhlIG1vZGVsLCBhbmQgcmUtY2FsY3VsYXRlIHRoZSBgdG91Y2hlZGAgc3RhdHVzIG9mIGFsbCBwYXJlbnRcbiAgICAgICAgICogY29udHJvbHMuXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5tYXJrQXNVbnRvdWNoZWQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBvbmx5U2VsZiA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkub25seVNlbGY7XG4gICAgICAgICAgICB0aGlzLl90b3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wpIHsgY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoeyBvbmx5U2VsZjogdHJ1ZSB9KTsgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlVG91Y2hlZCh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1hcmtzIHRoZSBjb250cm9sIGFzIGBkaXJ0eWAuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgd2lsbCBhbHNvIG1hcmsgYWxsIGRpcmVjdCBhbmNlc3RvcnMgYXMgYGRpcnR5YCB0byBtYWludGFpblxuICAgICAgICAgKiB0aGUgbW9kZWwuXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5tYXJrQXNEaXJ0eSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG9ubHlTZWxmID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5vbmx5U2VsZjtcbiAgICAgICAgICAgIHRoaXMuX3ByaXN0aW5lID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5tYXJrQXNEaXJ0eSh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1hcmtzIHRoZSBjb250cm9sIGFzIGBwcmlzdGluZWAuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSBjb250cm9sIGhhcyBhbnkgY2hpbGRyZW4sIGl0IHdpbGwgYWxzbyBtYXJrIGFsbCBjaGlsZHJlbiBhcyBgcHJpc3RpbmVgXG4gICAgICAgICAqIHRvIG1haW50YWluIHRoZSBtb2RlbCwgYW5kIHJlLWNhbGN1bGF0ZSB0aGUgYHByaXN0aW5lYCBzdGF0dXMgb2YgYWxsIHBhcmVudFxuICAgICAgICAgKiBjb250cm9scy5cbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18wXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLm1hcmtBc1ByaXN0aW5lID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgb25seVNlbGYgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLm9ubHlTZWxmO1xuICAgICAgICAgICAgdGhpcy5fcHJpc3RpbmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sKSB7IGNvbnRyb2wubWFya0FzUHJpc3RpbmUoeyBvbmx5U2VsZjogdHJ1ZSB9KTsgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlUHJpc3RpbmUoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXJrcyB0aGUgY29udHJvbCBhcyBgcGVuZGluZ2AuXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5tYXJrQXNQZW5kaW5nID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgb25seVNlbGYgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLm9ubHlTZWxmO1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gUEVORElORztcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm1hcmtBc1BlbmRpbmcoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNhYmxlcyB0aGUgY29udHJvbC4gVGhpcyBtZWFucyB0aGUgY29udHJvbCB3aWxsIGJlIGV4ZW1wdCBmcm9tIHZhbGlkYXRpb24gY2hlY2tzIGFuZFxuICAgICAgICAgKiBleGNsdWRlZCBmcm9tIHRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgYW55IHBhcmVudC4gSXRzIHN0YXR1cyBpcyBgRElTQUJMRURgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB0aGUgY29udHJvbCBoYXMgY2hpbGRyZW4sIGFsbCBjaGlsZHJlbiB3aWxsIGJlIGRpc2FibGVkIHRvIG1haW50YWluIHRoZSBtb2RlbC5cbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18wXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQ7XG4gICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSBESVNBQkxFRDtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9ycyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wpIHsgY29udHJvbC5kaXNhYmxlKHsgb25seVNlbGY6IHRydWUgfSk7IH0pO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICAgIGlmIChlbWl0RXZlbnQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVDaGFuZ2VzLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXR1c0NoYW5nZXMuZW1pdCh0aGlzLl9zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQW5jZXN0b3JzKG9ubHlTZWxmKTtcbiAgICAgICAgICAgIHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UuZm9yRWFjaChmdW5jdGlvbiAoY2hhbmdlRm4pIHsgcmV0dXJuIGNoYW5nZUZuKHRydWUpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuYWJsZXMgdGhlIGNvbnRyb2wuIFRoaXMgbWVhbnMgdGhlIGNvbnRyb2wgd2lsbCBiZSBpbmNsdWRlZCBpbiB2YWxpZGF0aW9uIGNoZWNrcyBhbmRcbiAgICAgICAgICogdGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiBpdHMgcGFyZW50LiBJdHMgc3RhdHVzIGlzIHJlLWNhbGN1bGF0ZWQgYmFzZWQgb24gaXRzIHZhbHVlIGFuZFxuICAgICAgICAgKiBpdHMgdmFsaWRhdG9ycy5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgdGhlIGNvbnRyb2wgaGFzIGNoaWxkcmVuLCBhbGwgY2hpbGRyZW4gd2lsbCBiZSBlbmFibGVkLlxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzBcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgb25seVNlbGYgPSBfYi5vbmx5U2VsZiwgZW1pdEV2ZW50ID0gX2IuZW1pdEV2ZW50O1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gVkFMSUQ7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wpIHsgY29udHJvbC5lbmFibGUoeyBvbmx5U2VsZjogdHJ1ZSB9KTsgfSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVBbmNlc3RvcnMob25seVNlbGYpO1xuICAgICAgICAgICAgdGhpcy5fb25EaXNhYmxlZENoYW5nZS5mb3JFYWNoKGZ1bmN0aW9uIChjaGFuZ2VGbikgeyByZXR1cm4gY2hhbmdlRm4oZmFsc2UpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gb25seVNlbGZcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3VwZGF0ZUFuY2VzdG9ycyA9IGZ1bmN0aW9uIChvbmx5U2VsZikge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlUHJpc3RpbmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVRvdWNoZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gcGFyZW50XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLnNldFBhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQpIHsgdGhpcy5fcGFyZW50ID0gcGFyZW50OyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wuIEFic3RyYWN0IG1ldGhvZCAoaW1wbGVtZW50ZWQgaW4gc3ViLWNsYXNzZXMpLlxuICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXRjaGVzIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbC4gQWJzdHJhY3QgbWV0aG9kIChpbXBsZW1lbnRlZCBpbiBzdWItY2xhc3NlcykuXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUucGF0Y2hWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykgeyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVzZXRzIHRoZSBjb250cm9sLiBBYnN0cmFjdCBtZXRob2QgKGltcGxlbWVudGVkIGluIHN1Yi1jbGFzc2VzKS5cbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlLWNhbGN1bGF0ZXMgdGhlIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgY29udHJvbC5cbiAgICAgICAgICpcbiAgICAgICAgICogQnkgZGVmYXVsdCwgaXQgd2lsbCBhbHNvIHVwZGF0ZSB0aGUgdmFsdWUgYW5kIHZhbGlkaXR5IG9mIGl0cyBhbmNlc3RvcnMuXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgb25seVNlbGYgPSBfYi5vbmx5U2VsZiwgZW1pdEV2ZW50ID0gX2IuZW1pdEV2ZW50O1xuICAgICAgICAgICAgdGhpcy5fc2V0SW5pdGlhbFN0YXR1cygpO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcnMgPSB0aGlzLl9ydW5WYWxpZGF0b3IoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSB0aGlzLl9jYWxjdWxhdGVTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RhdHVzID09PSBWQUxJRCB8fCB0aGlzLl9zdGF0dXMgPT09IFBFTkRJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcnVuQXN5bmNWYWxpZGF0b3IoZW1pdEV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW1pdEV2ZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlQ2hhbmdlcy5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0dXNDaGFuZ2VzLmVtaXQodGhpcy5fc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogb25seVNlbGYsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18wXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl91cGRhdGVUcmVlVmFsaWRpdHkgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBlbWl0RXZlbnQgPSAoX2EgPT09IHZvaWQgMCA/IHsgZW1pdEV2ZW50OiB0cnVlIH0gOiBfYSkuZW1pdEV2ZW50O1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjdHJsKSB7IHJldHVybiBjdHJsLl91cGRhdGVUcmVlVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTsgfSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fc2V0SW5pdGlhbFN0YXR1cyA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fc3RhdHVzID0gdGhpcy5fYWxsQ29udHJvbHNEaXNhYmxlZCgpID8gRElTQUJMRUQgOiBWQUxJRDsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9ydW5WYWxpZGF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IgPyB0aGlzLnZhbGlkYXRvcih0aGlzKSA6IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGVtaXRFdmVudFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fcnVuQXN5bmNWYWxpZGF0b3IgPSBmdW5jdGlvbiAoZW1pdEV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSBQRU5ESU5HO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbEV4aXN0aW5nU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gb2JzID0gdG9PYnNlcnZhYmxlKHRoaXMuYXN5bmNWYWxpZGF0b3IodGhpcykpO1xuICAgICAgICAgICAgICAgIGlmICghKGlzT2JzZXJ2YWJsZShvYnMpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJleHBlY3RlZCB0aGUgZm9sbG93aW5nIHZhbGlkYXRvciB0byByZXR1cm4gUHJvbWlzZSBvciBPYnNlcnZhYmxlOiBcIiArIHRoaXMuYXN5bmNWYWxpZGF0b3IgKyBcIi4gSWYgeW91IGFyZSB1c2luZyBGb3JtQnVpbGRlcjsgZGlkIHlvdSBmb3JnZXQgdG8gYnJhY2UgeW91ciB2YWxpZGF0b3JzIGluIGFuIGFycmF5P1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgb2JzLnN1YnNjcmliZSh7IG5leHQ6IGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIF90aGlzLnNldEVycm9ycyhyZXMsIHsgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7IH0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fY2FuY2VsRXhpc3RpbmdTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGVycm9ycyBvbiBhIGZvcm0gY29udHJvbC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBpcyB1c2VkIHdoZW4gdmFsaWRhdGlvbnMgYXJlIHJ1biBtYW51YWxseSBieSB0aGUgdXNlciwgcmF0aGVyIHRoYW4gYXV0b21hdGljYWxseS5cbiAgICAgICAgICpcbiAgICAgICAgICogQ2FsbGluZyBgc2V0RXJyb3JzYCB3aWxsIGFsc28gdXBkYXRlIHRoZSB2YWxpZGl0eSBvZiB0aGUgcGFyZW50IGNvbnRyb2wuXG4gICAgICAgICAqXG4gICAgICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKiBjb25zdCBsb2dpbiA9IG5ldyBGb3JtQ29udHJvbChcInNvbWVMb2dpblwiKTtcbiAgICAgICAgICogbG9naW4uc2V0RXJyb3JzKHtcbiAgICAgICAgICogICBcIm5vdFVuaXF1ZVwiOiB0cnVlXG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBleHBlY3QobG9naW4udmFsaWQpLnRvRXF1YWwoZmFsc2UpO1xuICAgICAgICAgKiBleHBlY3QobG9naW4uZXJyb3JzKS50b0VxdWFsKHtcIm5vdFVuaXF1ZVwiOiB0cnVlfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIGxvZ2luLnNldFZhbHVlKFwic29tZU90aGVyTG9naW5cIik7XG4gICAgICAgICAqXG4gICAgICAgICAqIGV4cGVjdChsb2dpbi52YWxpZCkudG9FcXVhbCh0cnVlKTtcbiAgICAgICAgICogYGBgXG4gICAgICAgICAqIEBwYXJhbSB7P30gZXJyb3JzXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5zZXRFcnJvcnMgPSBmdW5jdGlvbiAoZXJyb3JzLCBfYSkge1xuICAgICAgICAgICAgdmFyIGVtaXRFdmVudCA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkuZW1pdEV2ZW50O1xuICAgICAgICAgICAgdGhpcy5fZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ29udHJvbHNFcnJvcnMoZW1pdEV2ZW50ICE9PSBmYWxzZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXRyaWV2ZXMgYSBjaGlsZCBjb250cm9sIGdpdmVuIHRoZSBjb250cm9sJ3MgbmFtZSBvciBwYXRoLlxuICAgICAgICAgKlxuICAgICAgICAgKiBQYXRocyBjYW4gYmUgcGFzc2VkIGluIGFzIGFuIGFycmF5IG9yIGEgc3RyaW5nIGRlbGltaXRlZCBieSBhIGRvdC5cbiAgICAgICAgICpcbiAgICAgICAgICogVG8gZ2V0IGEgY29udHJvbCBuZXN0ZWQgd2l0aGluIGEgYHBlcnNvbmAgc3ViLWdyb3VwOlxuICAgICAgICAgKlxuICAgICAgICAgKiAqIGB0aGlzLmZvcm0uZ2V0KCdwZXJzb24ubmFtZScpO2BcbiAgICAgICAgICpcbiAgICAgICAgICogLU9SLVxuICAgICAgICAgKlxuICAgICAgICAgKiAqIGB0aGlzLmZvcm0uZ2V0KFsncGVyc29uJywgJ25hbWUnXSk7YFxuICAgICAgICAgKiBAcGFyYW0gez99IHBhdGhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIF9maW5kKHRoaXMsIHBhdGgsICcuJyk7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbnRyb2wgd2l0aCB0aGUgZ2l2ZW4gcGF0aCBoYXMgdGhlIGVycm9yIHNwZWNpZmllZC4gT3RoZXJ3aXNlXG4gICAgICAgICAqIHJldHVybnMgbnVsbCBvciB1bmRlZmluZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIG5vIHBhdGggaXMgZ2l2ZW4sIGl0IGNoZWNrcyBmb3IgdGhlIGVycm9yIG9uIHRoZSBwcmVzZW50IGNvbnRyb2wuXG4gICAgICAgICAqIEBwYXJhbSB7P30gZXJyb3JDb2RlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHBhdGhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuZ2V0RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3JDb2RlLCBwYXRoKSB7XG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7IHBhdGggPSBudWxsOyB9XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb250cm9sID0gcGF0aCA/IHRoaXMuZ2V0KHBhdGgpIDogdGhpcztcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sICYmIGNvbnRyb2wuX2Vycm9ycyA/IGNvbnRyb2wuX2Vycm9yc1tlcnJvckNvZGVdIDogbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY29udHJvbCB3aXRoIHRoZSBnaXZlbiBwYXRoIGhhcyB0aGUgZXJyb3Igc3BlY2lmaWVkLiBPdGhlcndpc2VcbiAgICAgICAgICogcmV0dXJucyBmYWxzZS5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgbm8gcGF0aCBpcyBnaXZlbiwgaXQgY2hlY2tzIGZvciB0aGUgZXJyb3Igb24gdGhlIHByZXNlbnQgY29udHJvbC5cbiAgICAgICAgICogQHBhcmFtIHs/fSBlcnJvckNvZGVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gcGF0aFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5oYXNFcnJvciA9IGZ1bmN0aW9uIChlcnJvckNvZGUsIHBhdGgpIHtcbiAgICAgICAgICAgIGlmIChwYXRoID09PSB2b2lkIDApIHsgcGF0aCA9IG51bGw7IH1cbiAgICAgICAgICAgIHJldHVybiAhIXRoaXMuZ2V0RXJyb3IoZXJyb3JDb2RlLCBwYXRoKTtcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwicm9vdFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHJpZXZlcyB0aGUgdG9wLWxldmVsIGFuY2VzdG9yIG9mIHRoaXMgY29udHJvbC5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHggPSB0aGlzO1xuICAgICAgICAgICAgICAgIHdoaWxlICh4Ll9wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IHguX3BhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7P30gZW1pdEV2ZW50XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl91cGRhdGVDb250cm9sc0Vycm9ycyA9IGZ1bmN0aW9uIChlbWl0RXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IHRoaXMuX2NhbGN1bGF0ZVN0YXR1cygpO1xuICAgICAgICAgICAgaWYgKGVtaXRFdmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXR1c0NoYW5nZXMuZW1pdCh0aGlzLl9zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlQ29udHJvbHNFcnJvcnMoZW1pdEV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9pbml0T2JzZXJ2YWJsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZUNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB0aGlzLl9zdGF0dXNDaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2NhbGN1bGF0ZVN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9hbGxDb250cm9sc0Rpc2FibGVkKCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIERJU0FCTEVEO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9ycylcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9hbnlDb250cm9sc0hhdmVTdGF0dXMoUEVORElORykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFBFTkRJTkc7XG4gICAgICAgICAgICBpZiAodGhpcy5fYW55Q29udHJvbHNIYXZlU3RhdHVzKElOVkFMSUQpKVxuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgcmV0dXJuIFZBTElEO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl91cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcGFyYW0gez99IGNiXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9mb3JFYWNoQ2hpbGQgPSBmdW5jdGlvbiAoY2IpIHsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbmRpdGlvblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fYW55Q29udHJvbHMgPSBmdW5jdGlvbiAoY29uZGl0aW9uKSB7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2FsbENvbnRyb2xzRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez99IHN0YXR1c1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fYW55Q29udHJvbHNIYXZlU3RhdHVzID0gZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FueUNvbnRyb2xzKGZ1bmN0aW9uIChjb250cm9sKSB7IHJldHVybiBjb250cm9sLnN0YXR1cyA9PT0gc3RhdHVzOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9hbnlDb250cm9sc0RpcnR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FueUNvbnRyb2xzKGZ1bmN0aW9uIChjb250cm9sKSB7IHJldHVybiBjb250cm9sLmRpcnR5OyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9hbnlDb250cm9sc1RvdWNoZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYW55Q29udHJvbHMoZnVuY3Rpb24gKGNvbnRyb2wpIHsgcmV0dXJuIGNvbnRyb2wudG91Y2hlZDsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzBcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3VwZGF0ZVByaXN0aW5lID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgb25seVNlbGYgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLm9ubHlTZWxmO1xuICAgICAgICAgICAgdGhpcy5fcHJpc3RpbmUgPSAhdGhpcy5fYW55Q29udHJvbHNEaXJ0eSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVByaXN0aW5lKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18wXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl91cGRhdGVUb3VjaGVkID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgb25seVNlbGYgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLm9ubHlTZWxmO1xuICAgICAgICAgICAgdGhpcy5fdG91Y2hlZCA9IHRoaXMuX2FueUNvbnRyb2xzVG91Y2hlZCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVRvdWNoZWQoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez99IGZvcm1TdGF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5faXNCb3hlZFZhbHVlID0gZnVuY3Rpb24gKGZvcm1TdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBmb3JtU3RhdGUgPT09ICdvYmplY3QnICYmIGZvcm1TdGF0ZSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGZvcm1TdGF0ZSkubGVuZ3RoID09PSAyICYmICd2YWx1ZScgaW4gZm9ybVN0YXRlICYmICdkaXNhYmxlZCcgaW4gZm9ybVN0YXRlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlID0gZm47IH07XG4gICAgICAgIHJldHVybiBBYnN0cmFjdENvbnRyb2w7XG4gICAgfSgpKTtcbiAgICAvKipcbiAgICAgKiBcXEB3aGF0SXREb2VzIFRyYWNrcyB0aGUgdmFsdWUgYW5kIHZhbGlkYXRpb24gc3RhdHVzIG9mIGFuIGluZGl2aWR1YWwgZm9ybSBjb250cm9sLlxuICAgICAqXG4gICAgICogSXQgaXMgb25lIG9mIHRoZSB0aHJlZSBmdW5kYW1lbnRhbCBidWlsZGluZyBibG9ja3Mgb2YgQW5ndWxhciBmb3JtcywgYWxvbmcgd2l0aFxuICAgICAqIHtcXEBsaW5rIEZvcm1Hcm91cH0gYW5kIHtcXEBsaW5rIEZvcm1BcnJheX0uXG4gICAgICpcbiAgICAgKiBcXEBob3dUb1VzZVxuICAgICAqXG4gICAgICogV2hlbiBpbnN0YW50aWF0aW5nIGEge1xcQGxpbmsgRm9ybUNvbnRyb2x9LCB5b3UgY2FuIHBhc3MgaW4gYW4gaW5pdGlhbCB2YWx1ZSBhcyB0aGVcbiAgICAgKiBmaXJzdCBhcmd1bWVudC4gRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY29uc3QgY3RybCA9IG5ldyBGb3JtQ29udHJvbCgnc29tZSB2YWx1ZScpO1xuICAgICAqIGNvbnNvbGUubG9nKGN0cmwudmFsdWUpOyAgICAgLy8gJ3NvbWUgdmFsdWUnXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIGFsc28gaW5pdGlhbGl6ZSB0aGUgY29udHJvbCB3aXRoIGEgZm9ybSBzdGF0ZSBvYmplY3Qgb24gaW5zdGFudGlhdGlvbixcbiAgICAgKiB3aGljaCBpbmNsdWRlcyBib3RoIHRoZSB2YWx1ZSBhbmQgd2hldGhlciBvciBub3QgdGhlIGNvbnRyb2wgaXMgZGlzYWJsZWQuXG4gICAgICogWW91IGNhbid0IHVzZSB0aGUgdmFsdWUga2V5IHdpdGhvdXQgdGhlIGRpc2FibGVkIGtleTsgYm90aCBhcmUgcmVxdWlyZWRcbiAgICAgKiB0byB1c2UgdGhpcyB3YXkgb2YgaW5pdGlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGNvbnN0IGN0cmwgPSBuZXcgRm9ybUNvbnRyb2woe3ZhbHVlOiAnbi9hJywgZGlzYWJsZWQ6IHRydWV9KTtcbiAgICAgKiBjb25zb2xlLmxvZyhjdHJsLnZhbHVlKTsgICAgIC8vICduL2EnXG4gICAgICogY29uc29sZS5sb2coY3RybC5zdGF0dXMpOyAgIC8vICdESVNBQkxFRCdcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIFRvIGluY2x1ZGUgYSBzeW5jIHZhbGlkYXRvciAob3IgYW4gYXJyYXkgb2Ygc3luYyB2YWxpZGF0b3JzKSB3aXRoIHRoZSBjb250cm9sLFxuICAgICAqIHBhc3MgaXQgaW4gYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gQXN5bmMgdmFsaWRhdG9ycyBhcmUgYWxzbyBzdXBwb3J0ZWQsIGJ1dFxuICAgICAqIGhhdmUgdG8gYmUgcGFzc2VkIGluIHNlcGFyYXRlbHkgYXMgdGhlIHRoaXJkIGFyZy5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY29uc3QgY3RybCA9IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICogY29uc29sZS5sb2coY3RybC52YWx1ZSk7ICAgICAvLyAnJ1xuICAgICAqIGNvbnNvbGUubG9nKGN0cmwuc3RhdHVzKTsgICAvLyAnSU5WQUxJRCdcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIFNlZSBpdHMgc3VwZXJjbGFzcywge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sfSwgZm9yIG1vcmUgcHJvcGVydGllcyBhbmQgbWV0aG9kcy5cbiAgICAgKlxuICAgICAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAgICAgKlxuICAgICAqIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBGb3JtQ29udHJvbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQ2KEZvcm1Db250cm9sLCBfc3VwZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/PX0gZm9ybVN0YXRlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbGlkYXRvclxuICAgICAgICAgKiBAcGFyYW0gez89fSBhc3luY1ZhbGlkYXRvclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gRm9ybUNvbnRyb2woZm9ybVN0YXRlLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKSB7XG4gICAgICAgICAgICBpZiAoZm9ybVN0YXRlID09PSB2b2lkIDApIHsgZm9ybVN0YXRlID0gbnVsbDsgfVxuICAgICAgICAgICAgaWYgKHZhbGlkYXRvciA9PT0gdm9pZCAwKSB7IHZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmIChhc3luY1ZhbGlkYXRvciA9PT0gdm9pZCAwKSB7IGFzeW5jVmFsaWRhdG9yID0gbnVsbDsgfVxuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgY29lcmNlVG9WYWxpZGF0b3IodmFsaWRhdG9yKSwgY29lcmNlVG9Bc3luY1ZhbGlkYXRvcihhc3luY1ZhbGlkYXRvcikpO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX2FwcGx5Rm9ybVN0YXRlKGZvcm1TdGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgICAgIHRoaXMuX2luaXRPYnNlcnZhYmxlcygpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIHZhbHVlIG9mIHRoZSBmb3JtIGNvbnRyb2wgdG8gYHZhbHVlYC5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgYG9ubHlTZWxmYCBpcyBgdHJ1ZWAsIHRoaXMgY2hhbmdlIHdpbGwgb25seSBhZmZlY3QgdGhlIHZhbGlkYXRpb24gb2YgdGhpcyBgRm9ybUNvbnRyb2xgXG4gICAgICAgICAqIGFuZCBub3QgaXRzIHBhcmVudCBjb21wb25lbnQuIFRoaXMgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIGBlbWl0RXZlbnRgIGlzIGB0cnVlYCwgdGhpc1xuICAgICAgICAgKiBjaGFuZ2Ugd2lsbCBjYXVzZSBhIGB2YWx1ZUNoYW5nZXNgIGV2ZW50IG9uIHRoZSBgRm9ybUNvbnRyb2xgIHRvIGJlIGVtaXR0ZWQuIFRoaXMgZGVmYXVsdHNcbiAgICAgICAgICogdG8gdHJ1ZSAoYXMgaXQgZmFsbHMgdGhyb3VnaCB0byBgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eWApLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiBgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlYCBpcyBgdHJ1ZWAsIHRoZSB2aWV3IHdpbGwgYmUgbm90aWZpZWQgYWJvdXQgdGhlIG5ldyB2YWx1ZVxuICAgICAgICAgKiB2aWEgYW4gYG9uQ2hhbmdlYCBldmVudC4gVGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBpZiBgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlYCBpcyBub3RcbiAgICAgICAgICogc3BlY2lmaWVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiBgZW1pdFZpZXdUb01vZGVsQ2hhbmdlYCBpcyBgdHJ1ZWAsIGFuIG5nTW9kZWxDaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCB0byB1cGRhdGUgdGhlXG4gICAgICAgICAqIG1vZGVsLiAgVGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBpZiBgZW1pdFZpZXdUb01vZGVsQ2hhbmdlYCBpcyBub3Qgc3BlY2lmaWVkLlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBfYSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQsIGVtaXRNb2RlbFRvVmlld0NoYW5nZSA9IF9iLmVtaXRNb2RlbFRvVmlld0NoYW5nZSwgZW1pdFZpZXdUb01vZGVsQ2hhbmdlID0gX2IuZW1pdFZpZXdUb01vZGVsQ2hhbmdlO1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vbkNoYW5nZS5sZW5ndGggJiYgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlLmZvckVhY2goZnVuY3Rpb24gKGNoYW5nZUZuKSB7IHJldHVybiBjaGFuZ2VGbihfdGhpcy5fdmFsdWUsIGVtaXRWaWV3VG9Nb2RlbENoYW5nZSAhPT0gZmFsc2UpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiBvbmx5U2VsZiwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXRjaGVzIHRoZSB2YWx1ZSBvZiBhIGNvbnRyb2wuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgZnVuY3Rpb25hbGx5IHRoZSBzYW1lIGFzIHtcXEBsaW5rIEZvcm1Db250cm9sLnNldFZhbHVlfSBhdCB0aGlzIGxldmVsLlxuICAgICAgICAgKiBJdCBleGlzdHMgZm9yIHN5bW1ldHJ5IHdpdGgge1xcQGxpbmsgRm9ybUdyb3VwLnBhdGNoVmFsdWV9IG9uIGBGb3JtR3JvdXBzYCBhbmQgYEZvcm1BcnJheXNgLFxuICAgICAgICAgKiB3aGVyZSBpdCBkb2VzIGJlaGF2ZSBkaWZmZXJlbnRseS5cbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUucGF0Y2hWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVzZXRzIHRoZSBmb3JtIGNvbnRyb2wuIFRoaXMgbWVhbnMgYnkgZGVmYXVsdDpcbiAgICAgICAgICpcbiAgICAgICAgICogKiBpdCBpcyBtYXJrZWQgYXMgYHByaXN0aW5lYFxuICAgICAgICAgKiAqIGl0IGlzIG1hcmtlZCBhcyBgdW50b3VjaGVkYFxuICAgICAgICAgKiAqIHZhbHVlIGlzIHNldCB0byBudWxsXG4gICAgICAgICAqXG4gICAgICAgICAqIFlvdSBjYW4gYWxzbyByZXNldCB0byBhIHNwZWNpZmljIGZvcm0gc3RhdGUgYnkgcGFzc2luZyB0aHJvdWdoIGEgc3RhbmRhbG9uZVxuICAgICAgICAgKiB2YWx1ZSBvciBhIGZvcm0gc3RhdGUgb2JqZWN0IHRoYXQgY29udGFpbnMgYm90aCBhIHZhbHVlIGFuZCBhIGRpc2FibGVkIHN0YXRlXG4gICAgICAgICAqICh0aGVzZSBhcmUgdGhlIG9ubHkgdHdvIHByb3BlcnRpZXMgdGhhdCBjYW5ub3QgYmUgY2FsY3VsYXRlZCkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEV4OlxuICAgICAgICAgKlxuICAgICAgICAgKiBgYGB0c1xuICAgICAgICAgKiB0aGlzLmNvbnRyb2wucmVzZXQoJ05hbmN5Jyk7XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKHRoaXMuY29udHJvbC52YWx1ZSk7ICAvLyAnTmFuY3knXG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKlxuICAgICAgICAgKiBPUlxuICAgICAgICAgKlxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICogdGhpcy5jb250cm9sLnJlc2V0KHt2YWx1ZTogJ05hbmN5JywgZGlzYWJsZWQ6IHRydWV9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogY29uc29sZS5sb2codGhpcy5jb250cm9sLnZhbHVlKTsgIC8vICdOYW5jeSdcbiAgICAgICAgICogY29uc29sZS5sb2codGhpcy5jb250cm9sLnN0YXR1cyk7ICAvLyAnRElTQUJMRUQnXG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKiBAcGFyYW0gez89fSBmb3JtU3RhdGVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18xXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoZm9ybVN0YXRlLCBfYSkge1xuICAgICAgICAgICAgaWYgKGZvcm1TdGF0ZSA9PT0gdm9pZCAwKSB7IGZvcm1TdGF0ZSA9IG51bGw7IH1cbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQ7XG4gICAgICAgICAgICB0aGlzLl9hcHBseUZvcm1TdGF0ZShmb3JtU3RhdGUpO1xuICAgICAgICAgICAgdGhpcy5tYXJrQXNQcmlzdGluZSh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIHRoaXMubWFya0FzVW50b3VjaGVkKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLl92YWx1ZSwgeyBvbmx5U2VsZjogb25seVNlbGYsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sLnByb3RvdHlwZS5fdXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbmRpdGlvblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLl9hbnlDb250cm9scyA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHsgcmV0dXJuIGZhbHNlOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sLnByb3RvdHlwZS5fYWxsQ29udHJvbHNEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciBhIGxpc3RlbmVyIGZvciBjaGFuZ2UgZXZlbnRzLlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUucmVnaXN0ZXJPbkNoYW5nZSA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLl9vbkNoYW5nZS5wdXNoKGZuKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUuX2NsZWFyQ2hhbmdlRm5zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIGEgbGlzdGVuZXIgZm9yIGRpc2FibGVkIGV2ZW50cy5cbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLnJlZ2lzdGVyT25EaXNhYmxlZENoYW5nZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgdGhpcy5fb25EaXNhYmxlZENoYW5nZS5wdXNoKGZuKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2JcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sLnByb3RvdHlwZS5fZm9yRWFjaENoaWxkID0gZnVuY3Rpb24gKGNiKSB7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZvcm1TdGF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLl9hcHBseUZvcm1TdGF0ZSA9IGZ1bmN0aW9uIChmb3JtU3RhdGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0JveGVkVmFsdWUoZm9ybVN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gZm9ybVN0YXRlLnZhbHVlO1xuICAgICAgICAgICAgICAgIGZvcm1TdGF0ZS5kaXNhYmxlZCA/IHRoaXMuZGlzYWJsZSh7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlIH0pIDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmFibGUoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gZm9ybVN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRm9ybUNvbnRyb2w7XG4gICAgfShBYnN0cmFjdENvbnRyb2wpKTtcbiAgICAvKipcbiAgICAgKiBcXEB3aGF0SXREb2VzIFRyYWNrcyB0aGUgdmFsdWUgYW5kIHZhbGlkaXR5IHN0YXRlIG9mIGEgZ3JvdXAgb2Yge1xcQGxpbmsgRm9ybUNvbnRyb2x9XG4gICAgICogaW5zdGFuY2VzLlxuICAgICAqXG4gICAgICogQSBgRm9ybUdyb3VwYCBhZ2dyZWdhdGVzIHRoZSB2YWx1ZXMgb2YgZWFjaCBjaGlsZCB7XFxAbGluayBGb3JtQ29udHJvbH0gaW50byBvbmUgb2JqZWN0LFxuICAgICAqIHdpdGggZWFjaCBjb250cm9sIG5hbWUgYXMgdGhlIGtleS4gIEl0IGNhbGN1bGF0ZXMgaXRzIHN0YXR1cyBieSByZWR1Y2luZyB0aGUgc3RhdHVzZXNcbiAgICAgKiBvZiBpdHMgY2hpbGRyZW4uIEZvciBleGFtcGxlLCBpZiBvbmUgb2YgdGhlIGNvbnRyb2xzIGluIGEgZ3JvdXAgaXMgaW52YWxpZCwgdGhlIGVudGlyZVxuICAgICAqIGdyb3VwIGJlY29tZXMgaW52YWxpZC5cbiAgICAgKlxuICAgICAqIGBGb3JtR3JvdXBgIGlzIG9uZSBvZiB0aGUgdGhyZWUgZnVuZGFtZW50YWwgYnVpbGRpbmcgYmxvY2tzIHVzZWQgdG8gZGVmaW5lIGZvcm1zIGluIEFuZ3VsYXIsXG4gICAgICogYWxvbmcgd2l0aCB7XFxAbGluayBGb3JtQ29udHJvbH0gYW5kIHtcXEBsaW5rIEZvcm1BcnJheX0uXG4gICAgICpcbiAgICAgKiBcXEBob3dUb1VzZVxuICAgICAqXG4gICAgICogV2hlbiBpbnN0YW50aWF0aW5nIGEge1xcQGxpbmsgRm9ybUdyb3VwfSwgcGFzcyBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGQgY29udHJvbHMgYXMgdGhlIGZpcnN0XG4gICAgICogYXJndW1lbnQuIFRoZSBrZXkgZm9yIGVhY2ggY2hpbGQgd2lsbCBiZSB0aGUgbmFtZSB1bmRlciB3aGljaCBpdCBpcyByZWdpc3RlcmVkLlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgKiAgIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woJ05hbmN5JywgVmFsaWRhdG9ycy5taW5MZW5ndGgoMikpLFxuICAgICAqICAgbGFzdDogbmV3IEZvcm1Db250cm9sKCdEcmV3JyksXG4gICAgICogfSk7XG4gICAgICpcbiAgICAgKiBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6ICdOYW5jeScsIGxhc3Q7ICdEcmV3J31cbiAgICAgKiBjb25zb2xlLmxvZyhmb3JtLnN0YXR1cyk7ICAvLyAnVkFMSUQnXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIGFsc28gaW5jbHVkZSBncm91cC1sZXZlbCB2YWxpZGF0b3JzIGFzIHRoZSBzZWNvbmQgYXJnLCBvciBncm91cC1sZXZlbCBhc3luY1xuICAgICAqIHZhbGlkYXRvcnMgYXMgdGhlIHRoaXJkIGFyZy4gVGhlc2UgY29tZSBpbiBoYW5keSB3aGVuIHlvdSB3YW50IHRvIHBlcmZvcm0gdmFsaWRhdGlvblxuICAgICAqIHRoYXQgY29uc2lkZXJzIHRoZSB2YWx1ZSBvZiBtb3JlIHRoYW4gb25lIGNoaWxkIGNvbnRyb2wuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogY29uc3QgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAqICAgcGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5taW5MZW5ndGgoMikpLFxuICAgICAqICAgcGFzc3dvcmRDb25maXJtOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAgICAgKiB9LCBwYXNzd29yZE1hdGNoVmFsaWRhdG9yKTtcbiAgICAgKlxuICAgICAqXG4gICAgICogZnVuY3Rpb24gcGFzc3dvcmRNYXRjaFZhbGlkYXRvcihnOiBGb3JtR3JvdXApIHtcbiAgICAgKiAgICByZXR1cm4gZy5nZXQoJ3Bhc3N3b3JkJykudmFsdWUgPT09IGcuZ2V0KCdwYXNzd29yZENvbmZpcm0nKS52YWx1ZVxuICAgICAqICAgICAgID8gbnVsbCA6IHsnbWlzbWF0Y2gnOiB0cnVlfTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gICAgICpcbiAgICAgKiBcXEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgRm9ybUdyb3VwID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDYoRm9ybUdyb3VwLCBfc3VwZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb250cm9sc1xuICAgICAgICAgKiBAcGFyYW0gez89fSB2YWxpZGF0b3JcbiAgICAgICAgICogQHBhcmFtIHs/PX0gYXN5bmNWYWxpZGF0b3JcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEZvcm1Hcm91cChjb250cm9scywgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcikge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRvciA9PT0gdm9pZCAwKSB7IHZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmIChhc3luY1ZhbGlkYXRvciA9PT0gdm9pZCAwKSB7IGFzeW5jVmFsaWRhdG9yID0gbnVsbDsgfVxuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcik7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzID0gY29udHJvbHM7XG4gICAgICAgICAgICB0aGlzLl9pbml0T2JzZXJ2YWJsZXMoKTtcbiAgICAgICAgICAgIHRoaXMuX3NldFVwQ29udHJvbHMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlcnMgYSBjb250cm9sIHdpdGggdGhlIGdyb3VwJ3MgbGlzdCBvZiBjb250cm9scy5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBtZXRob2QgZG9lcyBub3QgdXBkYXRlIHZhbHVlIG9yIHZhbGlkaXR5IG9mIHRoZSBjb250cm9sLCBzbyBmb3JcbiAgICAgICAgICogbW9zdCBjYXNlcyB5b3UnbGwgd2FudCB0byB1c2Uge1xcQGxpbmsgRm9ybUdyb3VwLmFkZENvbnRyb2x9IGluc3RlYWQuXG4gICAgICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUucmVnaXN0ZXJDb250cm9sID0gZnVuY3Rpb24gKG5hbWUsIGNvbnRyb2wpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2xzW25hbWVdKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzW25hbWVdO1xuICAgICAgICAgICAgdGhpcy5jb250cm9sc1tuYW1lXSA9IGNvbnRyb2w7XG4gICAgICAgICAgICBjb250cm9sLnNldFBhcmVudCh0aGlzKTtcbiAgICAgICAgICAgIGNvbnRyb2wuX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSk7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhIGNvbnRyb2wgdG8gdGhpcyBncm91cC5cbiAgICAgICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5hZGRDb250cm9sID0gZnVuY3Rpb24gKG5hbWUsIGNvbnRyb2wpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDb250cm9sKG5hbWUsIGNvbnRyb2wpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBhIGNvbnRyb2wgZnJvbSB0aGlzIGdyb3VwLlxuICAgICAgICAgKiBAcGFyYW0gez99IG5hbWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUucmVtb3ZlQ29udHJvbCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sc1tuYW1lXSlcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xzW25hbWVdLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZShmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgZGVsZXRlICh0aGlzLmNvbnRyb2xzW25hbWVdKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXBsYWNlIGFuIGV4aXN0aW5nIGNvbnRyb2wuXG4gICAgICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuc2V0Q29udHJvbCA9IGZ1bmN0aW9uIChuYW1lLCBjb250cm9sKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sc1tuYW1lXSlcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xzW25hbWVdLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZShmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgZGVsZXRlICh0aGlzLmNvbnRyb2xzW25hbWVdKTtcbiAgICAgICAgICAgIGlmIChjb250cm9sKVxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDb250cm9sKG5hbWUsIGNvbnRyb2wpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHdoZXRoZXIgdGhlcmUgaXMgYW4gZW5hYmxlZCBjb250cm9sIHdpdGggdGhlIGdpdmVuIG5hbWUgaW4gdGhlIGdyb3VwLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJdCB3aWxsIHJldHVybiBmYWxzZSBmb3IgZGlzYWJsZWQgY29udHJvbHMuIElmIHlvdSdkIGxpa2UgdG8gY2hlY2sgZm9yXG4gICAgICAgICAqIGV4aXN0ZW5jZSBpbiB0aGUgZ3JvdXAgb25seSwgdXNlIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5nZXR9IGluc3RlYWQuXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbE5hbWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoY29udHJvbE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLmhhc093blByb3BlcnR5KGNvbnRyb2xOYW1lKSAmJiB0aGlzLmNvbnRyb2xzW2NvbnRyb2xOYW1lXS5lbmFibGVkO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFNldHMgdGhlIHZhbHVlIG9mIHRoZSB7XFxAbGluayBGb3JtR3JvdXB9LiBJdCBhY2NlcHRzIGFuIG9iamVjdCB0aGF0IG1hdGNoZXNcbiAgICAgICAgICogIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGdyb3VwLCB3aXRoIGNvbnRyb2wgbmFtZXMgYXMga2V5cy5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBtZXRob2QgcGVyZm9ybXMgc3RyaWN0IGNoZWNrcywgc28gaXQgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB5b3UgdHJ5XG4gICAgICAgICAqIHRvIHNldCB0aGUgdmFsdWUgb2YgYSBjb250cm9sIHRoYXQgZG9lc24ndCBleGlzdCBvciBpZiB5b3UgZXhjbHVkZSB0aGVcbiAgICAgICAgICogdmFsdWUgb2YgYSBjb250cm9sLlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIyMjIEV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogIGBgYFxuICAgICAgICAgKiAgY29uc3QgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgICAgKiAgICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCgpLFxuICAgICAgICAgKiAgICAgbGFzdDogbmV3IEZvcm1Db250cm9sKClcbiAgICAgICAgICogIH0pO1xuICAgICAgICAgKiAgY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAgLy8ge2ZpcnN0OiBudWxsLCBsYXN0OiBudWxsfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgZm9ybS5zZXRWYWx1ZSh7Zmlyc3Q6ICdOYW5jeScsIGxhc3Q6ICdEcmV3J30pO1xuICAgICAgICAgKiAgY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAgLy8ge2ZpcnN0OiAnTmFuY3knLCBsYXN0OiAnRHJldyd9XG4gICAgICAgICAqXG4gICAgICAgICAqICBgYGBcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzFcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIF9hKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIG9ubHlTZWxmID0gX2Iub25seVNlbGYsIGVtaXRFdmVudCA9IF9iLmVtaXRFdmVudDtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrQWxsVmFsdWVzUHJlc2VudCh2YWx1ZSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl90aHJvd0lmQ29udHJvbE1pc3NpbmcobmFtZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29udHJvbHNbbmFtZV0uc2V0VmFsdWUodmFsdWVbbmFtZV0sIHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogb25seVNlbGYsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFBhdGNoZXMgdGhlIHZhbHVlIG9mIHRoZSB7XFxAbGluayBGb3JtR3JvdXB9LiBJdCBhY2NlcHRzIGFuIG9iamVjdCB3aXRoIGNvbnRyb2xcbiAgICAgICAgICogIG5hbWVzIGFzIGtleXMsIGFuZCB3aWxsIGRvIGl0cyBiZXN0IHRvIG1hdGNoIHRoZSB2YWx1ZXMgdG8gdGhlIGNvcnJlY3QgY29udHJvbHNcbiAgICAgICAgICogIGluIHRoZSBncm91cC5cbiAgICAgICAgICpcbiAgICAgICAgICogIEl0IGFjY2VwdHMgYm90aCBzdXBlci1zZXRzIGFuZCBzdWItc2V0cyBvZiB0aGUgZ3JvdXAgd2l0aG91dCB0aHJvd2luZyBhbiBlcnJvci5cbiAgICAgICAgICpcbiAgICAgICAgICogICMjIyBFeGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICBgYGBcbiAgICAgICAgICogIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgICogICAgIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICAgICAgICogICAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgpXG4gICAgICAgICAqICB9KTtcbiAgICAgICAgICogIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogbnVsbCwgbGFzdDogbnVsbH1cbiAgICAgICAgICpcbiAgICAgICAgICogIGZvcm0ucGF0Y2hWYWx1ZSh7Zmlyc3Q6ICdOYW5jeSd9KTtcbiAgICAgICAgICogIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogJ05hbmN5JywgbGFzdDogbnVsbH1cbiAgICAgICAgICpcbiAgICAgICAgICogIGBgYFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5wYXRjaFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBfYSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQ7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5jb250cm9sc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb250cm9sc1tuYW1lXS5wYXRjaFZhbHVlKHZhbHVlW25hbWVdLCB7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiBvbmx5U2VsZiwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXNldHMgdGhlIHtcXEBsaW5rIEZvcm1Hcm91cH0uIFRoaXMgbWVhbnMgYnkgZGVmYXVsdDpcbiAgICAgICAgICpcbiAgICAgICAgICogKiBUaGUgZ3JvdXAgYW5kIGFsbCBkZXNjZW5kYW50cyBhcmUgbWFya2VkIGBwcmlzdGluZWBcbiAgICAgICAgICogKiBUaGUgZ3JvdXAgYW5kIGFsbCBkZXNjZW5kYW50cyBhcmUgbWFya2VkIGB1bnRvdWNoZWRgXG4gICAgICAgICAqICogVGhlIHZhbHVlIG9mIGFsbCBkZXNjZW5kYW50cyB3aWxsIGJlIG51bGwgb3IgbnVsbCBtYXBzXG4gICAgICAgICAqXG4gICAgICAgICAqIFlvdSBjYW4gYWxzbyByZXNldCB0byBhIHNwZWNpZmljIGZvcm0gc3RhdGUgYnkgcGFzc2luZyBpbiBhIG1hcCBvZiBzdGF0ZXNcbiAgICAgICAgICogdGhhdCBtYXRjaGVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBmb3JtLCB3aXRoIGNvbnRyb2wgbmFtZXMgYXMga2V5cy4gVGhlIHN0YXRlXG4gICAgICAgICAqIGNhbiBiZSBhIHN0YW5kYWxvbmUgdmFsdWUgb3IgYSBmb3JtIHN0YXRlIG9iamVjdCB3aXRoIGJvdGggYSB2YWx1ZSBhbmQgYSBkaXNhYmxlZFxuICAgICAgICAgKiBzdGF0dXMuXG4gICAgICAgICAqXG4gICAgICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIGBgYHRzXG4gICAgICAgICAqIHRoaXMuZm9ybS5yZXNldCh7Zmlyc3Q6ICduYW1lJywgbGFzdDogJ2xhc3QgbmFtZSd9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogY29uc29sZS5sb2codGhpcy5mb3JtLnZhbHVlKTsgIC8vIHtmaXJzdDogJ25hbWUnLCBsYXN0OiAnbGFzdCBuYW1lJ31cbiAgICAgICAgICogYGBgXG4gICAgICAgICAqXG4gICAgICAgICAqIC0gT1IgLVxuICAgICAgICAgKlxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICogdGhpcy5mb3JtLnJlc2V0KHtcbiAgICAgICAgICogICBmaXJzdDoge3ZhbHVlOiAnbmFtZScsIGRpc2FibGVkOiB0cnVlfSxcbiAgICAgICAgICogICBsYXN0OiAnbGFzdCdcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKHRoaXMuZm9ybS52YWx1ZSk7ICAvLyB7Zmlyc3Q6ICduYW1lJywgbGFzdDogJ2xhc3QgbmFtZSd9XG4gICAgICAgICAqIGNvbnNvbGUubG9nKHRoaXMuZm9ybS5nZXQoJ2ZpcnN0Jykuc3RhdHVzKTsgIC8vICdESVNBQkxFRCdcbiAgICAgICAgICogYGBgXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICh2YWx1ZSwgX2EpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7IHZhbHVlID0ge307IH1cbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQ7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wsIG5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sLnJlc2V0KHZhbHVlW25hbWVdLCB7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IG9ubHlTZWxmLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVByaXN0aW5lKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVG91Y2hlZCh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgdGhlIHtcXEBsaW5rIEZvcm1Hcm91cH0sIGluY2x1ZGluZyBhbnkgZGlzYWJsZWQgY29udHJvbHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHlvdSdkIGxpa2UgdG8gaW5jbHVkZSBhbGwgdmFsdWVzIHJlZ2FyZGxlc3Mgb2YgZGlzYWJsZWQgc3RhdHVzLCB1c2UgdGhpcyBtZXRob2QuXG4gICAgICAgICAqIE90aGVyd2lzZSwgdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgdGhlIGJlc3Qgd2F5IHRvIGdldCB0aGUgdmFsdWUgb2YgdGhlIGdyb3VwLlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5nZXRSYXdWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWR1Y2VDaGlsZHJlbih7fSwgZnVuY3Rpb24gKGFjYywgY29udHJvbCwgbmFtZSkge1xuICAgICAgICAgICAgICAgIGFjY1tuYW1lXSA9IGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCA/IGNvbnRyb2wudmFsdWUgOiAoKGNvbnRyb2wpKS5nZXRSYXdWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5fdGhyb3dJZkNvbnRyb2xNaXNzaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LmtleXModGhpcy5jb250cm9scykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgICBUaGVyZSBhcmUgbm8gZm9ybSBjb250cm9scyByZWdpc3RlcmVkIHdpdGggdGhpcyBncm91cCB5ZXQuICBJZiB5b3UncmUgdXNpbmcgbmdNb2RlbCxcXG4gICAgICAgIHlvdSBtYXkgd2FudCB0byBjaGVjayBuZXh0IHRpY2sgKGUuZy4gdXNlIHNldFRpbWVvdXQpLlxcbiAgICAgIFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5jb250cm9sc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIGZvcm0gY29udHJvbCB3aXRoIG5hbWU6IFwiICsgbmFtZSArIFwiLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2JcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX2ZvckVhY2hDaGlsZCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY29udHJvbHMpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgcmV0dXJuIGNiKF90aGlzLmNvbnRyb2xzW2tdLCBrKTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5fc2V0VXBDb250cm9scyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sLnNldFBhcmVudChfdGhpcyk7XG4gICAgICAgICAgICAgICAgY29udHJvbC5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoX3RoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLl91cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fdmFsdWUgPSB0aGlzLl9yZWR1Y2VWYWx1ZSgpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb25kaXRpb25cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX2FueUNvbnRyb2xzID0gZnVuY3Rpb24gKGNvbmRpdGlvbikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHJlcyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gcmVzIHx8IChfdGhpcy5jb250YWlucyhuYW1lKSAmJiBjb25kaXRpb24oY29udHJvbCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX3JlZHVjZVZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWR1Y2VDaGlsZHJlbih7fSwgZnVuY3Rpb24gKGFjYywgY29udHJvbCwgbmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9sLmVuYWJsZWQgfHwgX3RoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjW25hbWVdID0gY29udHJvbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/fSBpbml0VmFsdWVcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5fcmVkdWNlQ2hpbGRyZW4gPSBmdW5jdGlvbiAoaW5pdFZhbHVlLCBmbikge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcmVzID0gaW5pdFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sLCBuYW1lKSB7IHJlcyA9IGZuKHJlcywgY29udHJvbCwgbmFtZSk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLl9hbGxDb250cm9sc0Rpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKHRoaXMuY29udHJvbHMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBjb250cm9sTmFtZSA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250cm9sc1tjb250cm9sTmFtZV0uZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY29udHJvbHMpLmxlbmd0aCA+IDAgfHwgdGhpcy5kaXNhYmxlZDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX2NoZWNrQWxsVmFsdWVzUHJlc2VudCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBzdXBwbHkgYSB2YWx1ZSBmb3IgZm9ybSBjb250cm9sIHdpdGggbmFtZTogJ1wiICsgbmFtZSArIFwiJy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBGb3JtR3JvdXA7XG4gICAgfShBYnN0cmFjdENvbnRyb2wpKTtcbiAgICAvKipcbiAgICAgKiBcXEB3aGF0SXREb2VzIFRyYWNrcyB0aGUgdmFsdWUgYW5kIHZhbGlkaXR5IHN0YXRlIG9mIGFuIGFycmF5IG9mIHtcXEBsaW5rIEZvcm1Db250cm9sfSxcbiAgICAgKiB7XFxAbGluayBGb3JtR3JvdXB9IG9yIHtcXEBsaW5rIEZvcm1BcnJheX0gaW5zdGFuY2VzLlxuICAgICAqXG4gICAgICogQSBgRm9ybUFycmF5YCBhZ2dyZWdhdGVzIHRoZSB2YWx1ZXMgb2YgZWFjaCBjaGlsZCB7XFxAbGluayBGb3JtQ29udHJvbH0gaW50byBhbiBhcnJheS5cbiAgICAgKiBJdCBjYWxjdWxhdGVzIGl0cyBzdGF0dXMgYnkgcmVkdWNpbmcgdGhlIHN0YXR1c2VzIG9mIGl0cyBjaGlsZHJlbi4gRm9yIGV4YW1wbGUsIGlmIG9uZSBvZlxuICAgICAqIHRoZSBjb250cm9scyBpbiBhIGBGb3JtQXJyYXlgIGlzIGludmFsaWQsIHRoZSBlbnRpcmUgYXJyYXkgYmVjb21lcyBpbnZhbGlkLlxuICAgICAqXG4gICAgICogYEZvcm1BcnJheWAgaXMgb25lIG9mIHRoZSB0aHJlZSBmdW5kYW1lbnRhbCBidWlsZGluZyBibG9ja3MgdXNlZCB0byBkZWZpbmUgZm9ybXMgaW4gQW5ndWxhcixcbiAgICAgKiBhbG9uZyB3aXRoIHtcXEBsaW5rIEZvcm1Db250cm9sfSBhbmQge1xcQGxpbmsgRm9ybUdyb3VwfS5cbiAgICAgKlxuICAgICAqIFxcQGhvd1RvVXNlXG4gICAgICpcbiAgICAgKiBXaGVuIGluc3RhbnRpYXRpbmcgYSB7XFxAbGluayBGb3JtQXJyYXl9LCBwYXNzIGluIGFuIGFycmF5IG9mIGNoaWxkIGNvbnRyb2xzIGFzIHRoZSBmaXJzdFxuICAgICAqIGFyZ3VtZW50LlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIGNvbnN0IGFyciA9IG5ldyBGb3JtQXJyYXkoW1xuICAgICAqICAgbmV3IEZvcm1Db250cm9sKCdOYW5jeScsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAgICAgKiAgIG5ldyBGb3JtQ29udHJvbCgnRHJldycpLFxuICAgICAqIF0pO1xuICAgICAqXG4gICAgICogY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbJ05hbmN5JywgJ0RyZXcnXVxuICAgICAqIGNvbnNvbGUubG9nKGFyci5zdGF0dXMpOyAgLy8gJ1ZBTElEJ1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogWW91IGNhbiBhbHNvIGluY2x1ZGUgYXJyYXktbGV2ZWwgdmFsaWRhdG9ycyBhcyB0aGUgc2Vjb25kIGFyZywgb3IgYXJyYXktbGV2ZWwgYXN5bmNcbiAgICAgKiB2YWxpZGF0b3JzIGFzIHRoZSB0aGlyZCBhcmcuIFRoZXNlIGNvbWUgaW4gaGFuZHkgd2hlbiB5b3Ugd2FudCB0byBwZXJmb3JtIHZhbGlkYXRpb25cbiAgICAgKiB0aGF0IGNvbnNpZGVycyB0aGUgdmFsdWUgb2YgbW9yZSB0aGFuIG9uZSBjaGlsZCBjb250cm9sLlxuICAgICAqXG4gICAgICogIyMjIEFkZGluZyBvciByZW1vdmluZyBjb250cm9sc1xuICAgICAqXG4gICAgICogVG8gY2hhbmdlIHRoZSBjb250cm9scyBpbiB0aGUgYXJyYXksIHVzZSB0aGUgYHB1c2hgLCBgaW5zZXJ0YCwgb3IgYHJlbW92ZUF0YCBtZXRob2RzXG4gICAgICogaW4gYEZvcm1BcnJheWAgaXRzZWxmLiBUaGVzZSBtZXRob2RzIGVuc3VyZSB0aGUgY29udHJvbHMgYXJlIHByb3Blcmx5IHRyYWNrZWQgaW4gdGhlXG4gICAgICogZm9ybSdzIGhpZXJhcmNoeS4gRG8gbm90IG1vZGlmeSB0aGUgYXJyYXkgb2YgYEFic3RyYWN0Q29udHJvbGBzIHVzZWQgdG8gaW5zdGFudGlhdGVcbiAgICAgKiB0aGUgYEZvcm1BcnJheWAgZGlyZWN0bHksIGFzIHRoYXQgd2lsbCByZXN1bHQgaW4gc3RyYW5nZSBhbmQgdW5leHBlY3RlZCBiZWhhdmlvciBzdWNoXG4gICAgICogYXMgYnJva2VuIGNoYW5nZSBkZXRlY3Rpb24uXG4gICAgICpcbiAgICAgKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gICAgICpcbiAgICAgKiBcXEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgRm9ybUFycmF5ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDYoRm9ybUFycmF5LCBfc3VwZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb250cm9sc1xuICAgICAgICAgKiBAcGFyYW0gez89fSB2YWxpZGF0b3JcbiAgICAgICAgICogQHBhcmFtIHs/PX0gYXN5bmNWYWxpZGF0b3JcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEZvcm1BcnJheShjb250cm9scywgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcikge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRvciA9PT0gdm9pZCAwKSB7IHZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmIChhc3luY1ZhbGlkYXRvciA9PT0gdm9pZCAwKSB7IGFzeW5jVmFsaWRhdG9yID0gbnVsbDsgfVxuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcik7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzID0gY29udHJvbHM7XG4gICAgICAgICAgICB0aGlzLl9pbml0T2JzZXJ2YWJsZXMoKTtcbiAgICAgICAgICAgIHRoaXMuX3NldFVwQ29udHJvbHMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0gYXQgdGhlIGdpdmVuIGBpbmRleGAgaW4gdGhlIGFycmF5LlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLmF0ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiB0aGlzLmNvbnRyb2xzW2luZGV4XTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluc2VydCBhIG5ldyB7XFxAbGluayBBYnN0cmFjdENvbnRyb2x9IGF0IHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RlckNvbnRyb2woY29udHJvbCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5zZXJ0IGEgbmV3IHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0gYXQgdGhlIGdpdmVuIGBpbmRleGAgaW4gdGhlIGFycmF5LlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbiAoaW5kZXgsIGNvbnRyb2wpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMuc3BsaWNlKGluZGV4LCAwLCBjb250cm9sKTtcbiAgICAgICAgICAgIHRoaXMuX3JlZ2lzdGVyQ29udHJvbChjb250cm9sKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgdGhlIGNvbnRyb2wgYXQgdGhlIGdpdmVuIGBpbmRleGAgaW4gdGhlIGFycmF5LlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLnJlbW92ZUF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sc1tpbmRleF0pXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sc1tpbmRleF0uX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVwbGFjZSBhbiBleGlzdGluZyBjb250cm9sLlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5zZXRDb250cm9sID0gZnVuY3Rpb24gKGluZGV4LCBjb250cm9sKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sc1tpbmRleF0pXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sc1tpbmRleF0uX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBpZiAoY29udHJvbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHMuc3BsaWNlKGluZGV4LCAwLCBjb250cm9sKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWdpc3RlckNvbnRyb2woY29udHJvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUFycmF5LnByb3RvdHlwZSwgXCJsZW5ndGhcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBMZW5ndGggb2YgdGhlIGNvbnRyb2wgYXJyYXkuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbHMubGVuZ3RoOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUge1xcQGxpbmsgRm9ybUFycmF5fS4gSXQgYWNjZXB0cyBhbiBhcnJheSB0aGF0IG1hdGNoZXNcbiAgICAgICAgICogIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGNvbnRyb2wuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIHBlcmZvcm1zIHN0cmljdCBjaGVja3MsIHNvIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgeW91IHRyeVxuICAgICAgICAgKiB0byBzZXQgdGhlIHZhbHVlIG9mIGEgY29udHJvbCB0aGF0IGRvZXNuJ3QgZXhpc3Qgb3IgaWYgeW91IGV4Y2x1ZGUgdGhlXG4gICAgICAgICAqIHZhbHVlIG9mIGEgY29udHJvbC5cbiAgICAgICAgICpcbiAgICAgICAgICogICMjIyBFeGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICBgYGBcbiAgICAgICAgICogIGNvbnN0IGFyciA9IG5ldyBGb3JtQXJyYXkoW1xuICAgICAgICAgKiAgICAgbmV3IEZvcm1Db250cm9sKCksXG4gICAgICAgICAqICAgICBuZXcgRm9ybUNvbnRyb2woKVxuICAgICAgICAgKiAgXSk7XG4gICAgICAgICAqICBjb25zb2xlLmxvZyhhcnIudmFsdWUpOyAgIC8vIFtudWxsLCBudWxsXVxuICAgICAgICAgKlxuICAgICAgICAgKiAgYXJyLnNldFZhbHVlKFsnTmFuY3knLCAnRHJldyddKTtcbiAgICAgICAgICogIGNvbnNvbGUubG9nKGFyci52YWx1ZSk7ICAgLy8gWydOYW5jeScsICdEcmV3J11cbiAgICAgICAgICogIGBgYFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgX2EpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgb25seVNlbGYgPSBfYi5vbmx5U2VsZiwgZW1pdEV2ZW50ID0gX2IuZW1pdEV2ZW50O1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tBbGxWYWx1ZXNQcmVzZW50KHZhbHVlKTtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKG5ld1ZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl90aHJvd0lmQ29udHJvbE1pc3NpbmcoaW5kZXgpO1xuICAgICAgICAgICAgICAgIF90aGlzLmF0KGluZGV4KS5zZXRWYWx1ZShuZXdWYWx1ZSwgeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiBvbmx5U2VsZiwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgUGF0Y2hlcyB0aGUgdmFsdWUgb2YgdGhlIHtcXEBsaW5rIEZvcm1BcnJheX0uIEl0IGFjY2VwdHMgYW4gYXJyYXkgdGhhdCBtYXRjaGVzIHRoZVxuICAgICAgICAgKiAgc3RydWN0dXJlIG9mIHRoZSBjb250cm9sLCBhbmQgd2lsbCBkbyBpdHMgYmVzdCB0byBtYXRjaCB0aGUgdmFsdWVzIHRvIHRoZSBjb3JyZWN0XG4gICAgICAgICAqICBjb250cm9scyBpbiB0aGUgZ3JvdXAuXG4gICAgICAgICAqXG4gICAgICAgICAqICBJdCBhY2NlcHRzIGJvdGggc3VwZXItc2V0cyBhbmQgc3ViLXNldHMgb2YgdGhlIGFycmF5IHdpdGhvdXQgdGhyb3dpbmcgYW4gZXJyb3IuXG4gICAgICAgICAqXG4gICAgICAgICAqICAjIyMgRXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgYGBgXG4gICAgICAgICAqICBjb25zdCBhcnIgPSBuZXcgRm9ybUFycmF5KFtcbiAgICAgICAgICogICAgIG5ldyBGb3JtQ29udHJvbCgpLFxuICAgICAgICAgKiAgICAgbmV3IEZvcm1Db250cm9sKClcbiAgICAgICAgICogIF0pO1xuICAgICAgICAgKiAgY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbbnVsbCwgbnVsbF1cbiAgICAgICAgICpcbiAgICAgICAgICogIGFyci5wYXRjaFZhbHVlKFsnTmFuY3knXSk7XG4gICAgICAgICAqICBjb25zb2xlLmxvZyhhcnIudmFsdWUpOyAgIC8vIFsnTmFuY3knLCBudWxsXVxuICAgICAgICAgKiAgYGBgXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18xXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLnBhdGNoVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIF9hKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIG9ubHlTZWxmID0gX2Iub25seVNlbGYsIGVtaXRFdmVudCA9IF9iLmVtaXRFdmVudDtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKG5ld1ZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5hdChpbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYXQoaW5kZXgpLnBhdGNoVmFsdWUobmV3VmFsdWUsIHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IG9ubHlTZWxmLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc2V0cyB0aGUge1xcQGxpbmsgRm9ybUFycmF5fS4gVGhpcyBtZWFucyBieSBkZWZhdWx0OlxuICAgICAgICAgKlxuICAgICAgICAgKiAqIFRoZSBhcnJheSBhbmQgYWxsIGRlc2NlbmRhbnRzIGFyZSBtYXJrZWQgYHByaXN0aW5lYFxuICAgICAgICAgKiAqIFRoZSBhcnJheSBhbmQgYWxsIGRlc2NlbmRhbnRzIGFyZSBtYXJrZWQgYHVudG91Y2hlZGBcbiAgICAgICAgICogKiBUaGUgdmFsdWUgb2YgYWxsIGRlc2NlbmRhbnRzIHdpbGwgYmUgbnVsbCBvciBudWxsIG1hcHNcbiAgICAgICAgICpcbiAgICAgICAgICogWW91IGNhbiBhbHNvIHJlc2V0IHRvIGEgc3BlY2lmaWMgZm9ybSBzdGF0ZSBieSBwYXNzaW5nIGluIGFuIGFycmF5IG9mIHN0YXRlc1xuICAgICAgICAgKiB0aGF0IG1hdGNoZXMgdGhlIHN0cnVjdHVyZSBvZiB0aGUgY29udHJvbC4gVGhlIHN0YXRlIGNhbiBiZSBhIHN0YW5kYWxvbmUgdmFsdWVcbiAgICAgICAgICogb3IgYSBmb3JtIHN0YXRlIG9iamVjdCB3aXRoIGJvdGggYSB2YWx1ZSBhbmQgYSBkaXNhYmxlZCBzdGF0dXMuXG4gICAgICAgICAqXG4gICAgICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIGBgYHRzXG4gICAgICAgICAqIHRoaXMuYXJyLnJlc2V0KFsnbmFtZScsICdsYXN0IG5hbWUnXSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKHRoaXMuYXJyLnZhbHVlKTsgIC8vIFsnbmFtZScsICdsYXN0IG5hbWUnXVxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICpcbiAgICAgICAgICogLSBPUiAtXG4gICAgICAgICAqXG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKiB0aGlzLmFyci5yZXNldChbXG4gICAgICAgICAqICAge3ZhbHVlOiAnbmFtZScsIGRpc2FibGVkOiB0cnVlfSxcbiAgICAgICAgICogICAnbGFzdCdcbiAgICAgICAgICogXSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKHRoaXMuYXJyLnZhbHVlKTsgIC8vIFsnbmFtZScsICdsYXN0IG5hbWUnXVxuICAgICAgICAgKiBjb25zb2xlLmxvZyh0aGlzLmFyci5nZXQoMCkuc3RhdHVzKTsgIC8vICdESVNBQkxFRCdcbiAgICAgICAgICogYGBgXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICh2YWx1ZSwgX2EpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7IHZhbHVlID0gW107IH1cbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQ7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC5yZXNldCh2YWx1ZVtpbmRleF0sIHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogb25seVNlbGYsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlUHJpc3RpbmUoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVUb3VjaGVkKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiB0aGUgYXJyYXksIGluY2x1ZGluZyBhbnkgZGlzYWJsZWQgY29udHJvbHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHlvdSdkIGxpa2UgdG8gaW5jbHVkZSBhbGwgdmFsdWVzIHJlZ2FyZGxlc3Mgb2YgZGlzYWJsZWQgc3RhdHVzLCB1c2UgdGhpcyBtZXRob2QuXG4gICAgICAgICAqIE90aGVyd2lzZSwgdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgdGhlIGJlc3Qgd2F5IHRvIGdldCB0aGUgdmFsdWUgb2YgdGhlIGFycmF5LlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5nZXRSYXdWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLm1hcChmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wgPyBjb250cm9sLnZhbHVlIDogKChjb250cm9sKSkuZ2V0UmF3VmFsdWUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5fdGhyb3dJZkNvbnRyb2xNaXNzaW5nID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29udHJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgICBUaGVyZSBhcmUgbm8gZm9ybSBjb250cm9scyByZWdpc3RlcmVkIHdpdGggdGhpcyBhcnJheSB5ZXQuICBJZiB5b3UncmUgdXNpbmcgbmdNb2RlbCxcXG4gICAgICAgIHlvdSBtYXkgd2FudCB0byBjaGVjayBuZXh0IHRpY2sgKGUuZy4gdXNlIHNldFRpbWVvdXQpLlxcbiAgICAgIFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5hdChpbmRleCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBmb3JtIGNvbnRyb2wgYXQgaW5kZXggXCIgKyBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez99IGNiXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLl9mb3JFYWNoQ2hpbGQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMuZm9yRWFjaChmdW5jdGlvbiAoY29udHJvbCwgaW5kZXgpIHsgY2IoY29udHJvbCwgaW5kZXgpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLl91cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuY29udHJvbHMuZmlsdGVyKGZ1bmN0aW9uIChjb250cm9sKSB7IHJldHVybiBjb250cm9sLmVuYWJsZWQgfHwgX3RoaXMuZGlzYWJsZWQ7IH0pXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoY29udHJvbCkgeyByZXR1cm4gY29udHJvbC52YWx1ZTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbmRpdGlvblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5fYW55Q29udHJvbHMgPSBmdW5jdGlvbiAoY29uZGl0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250cm9scy5zb21lKGZ1bmN0aW9uIChjb250cm9sKSB7IHJldHVybiBjb250cm9sLmVuYWJsZWQgJiYgY29uZGl0aW9uKGNvbnRyb2wpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLl9zZXRVcENvbnRyb2xzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCkgeyByZXR1cm4gX3RoaXMuX3JlZ2lzdGVyQ29udHJvbChjb250cm9sKTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLl9jaGVja0FsbFZhbHVlc1ByZXNlbnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCwgaSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVtpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3Qgc3VwcGx5IGEgdmFsdWUgZm9yIGZvcm0gY29udHJvbCBhdCBpbmRleDogXCIgKyBpICsgXCIuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUuX2FsbENvbnRyb2xzRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5jb250cm9sczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udHJvbCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbC5lbmFibGVkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250cm9scy5sZW5ndGggPiAwIHx8IHRoaXMuZGlzYWJsZWQ7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUuX3JlZ2lzdGVyQ29udHJvbCA9IGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICBjb250cm9sLnNldFBhcmVudCh0aGlzKTtcbiAgICAgICAgICAgIGNvbnRyb2wuX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBGb3JtQXJyYXk7XG4gICAgfShBYnN0cmFjdENvbnRyb2wpKTtcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDQgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBmb3JtRGlyZWN0aXZlUHJvdmlkZXIgPSB7XG4gICAgICAgIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gTmdGb3JtOyB9KVxuICAgIH07XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcmVzb2x2ZWRQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIC8qKlxuICAgICAqIFxcQHdoYXRJdERvZXMgQ3JlYXRlcyBhIHRvcC1sZXZlbCB7XFxAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlIGFuZCBiaW5kcyBpdCB0byBhIGZvcm1cbiAgICAgKiB0byB0cmFjayBhZ2dyZWdhdGUgZm9ybSB2YWx1ZSBhbmQgdmFsaWRhdGlvbiBzdGF0dXMuXG4gICAgICpcbiAgICAgKiBcXEBob3dUb1VzZVxuICAgICAqXG4gICAgICogQXMgc29vbiBhcyB5b3UgaW1wb3J0IHRoZSBgRm9ybXNNb2R1bGVgLCB0aGlzIGRpcmVjdGl2ZSBiZWNvbWVzIGFjdGl2ZSBieSBkZWZhdWx0IG9uXG4gICAgICogYWxsIGA8Zm9ybT5gIHRhZ3MuICBZb3UgZG9uJ3QgbmVlZCB0byBhZGQgYSBzcGVjaWFsIHNlbGVjdG9yLlxuICAgICAqXG4gICAgICogWW91IGNhbiBleHBvcnQgdGhlIGRpcmVjdGl2ZSBpbnRvIGEgbG9jYWwgdGVtcGxhdGUgdmFyaWFibGUgdXNpbmcgYG5nRm9ybWAgYXMgdGhlIGtleVxuICAgICAqIChleDogYCNteUZvcm09XCJuZ0Zvcm1cImApLiBUaGlzIGlzIG9wdGlvbmFsLCBidXQgdXNlZnVsLiAgTWFueSBwcm9wZXJ0aWVzIGZyb20gdGhlIHVuZGVybHlpbmdcbiAgICAgKiB7XFxAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlIGFyZSBkdXBsaWNhdGVkIG9uIHRoZSBkaXJlY3RpdmUgaXRzZWxmLCBzbyBhIHJlZmVyZW5jZSB0byBpdFxuICAgICAqIHdpbGwgZ2l2ZSB5b3UgYWNjZXNzIHRvIHRoZSBhZ2dyZWdhdGUgdmFsdWUgYW5kIHZhbGlkaXR5IHN0YXR1cyBvZiB0aGUgZm9ybSwgYXMgd2VsbCBhc1xuICAgICAqIHVzZXIgaW50ZXJhY3Rpb24gcHJvcGVydGllcyBsaWtlIGBkaXJ0eWAgYW5kIGB0b3VjaGVkYC5cbiAgICAgKlxuICAgICAqIFRvIHJlZ2lzdGVyIGNoaWxkIGNvbnRyb2xzIHdpdGggdGhlIGZvcm0sIHlvdSdsbCB3YW50IHRvIHVzZSB7XFxAbGluayBOZ01vZGVsfSB3aXRoIGFcbiAgICAgKiBgbmFtZWAgYXR0cmlidXRlLiAgWW91IGNhbiBhbHNvIHVzZSB7XFxAbGluayBOZ01vZGVsR3JvdXB9IGlmIHlvdSdkIGxpa2UgdG8gY3JlYXRlXG4gICAgICogc3ViLWdyb3VwcyB3aXRoaW4gdGhlIGZvcm0uXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIGxpc3RlbiB0byB0aGUgZGlyZWN0aXZlJ3MgYG5nU3VibWl0YCBldmVudCB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB1c2VyIGhhc1xuICAgICAqIHRyaWdnZXJlZCBhIGZvcm0gc3VibWlzc2lvbi4gVGhlIGBuZ1N1Ym1pdGAgZXZlbnQgd2lsbCBiZSBlbWl0dGVkIHdpdGggdGhlIG9yaWdpbmFsIGZvcm1cbiAgICAgKiBzdWJtaXNzaW9uIGV2ZW50LlxuICAgICAqXG4gICAgICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlRm9ybS9zaW1wbGVfZm9ybV9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgKlxuICAgICAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAgICAgKlxuICAgICAqICogKipOZ01vZHVsZSoqOiBgRm9ybXNNb2R1bGVgXG4gICAgICpcbiAgICAgKiAgXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIE5nRm9ybSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQ0KE5nRm9ybSwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAgICAgKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gTmdGb3JtKHZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9ycykge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubmdTdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB0aGlzLmZvcm0gPVxuICAgICAgICAgICAgICAgIG5ldyBGb3JtR3JvdXAoe30sIGNvbXBvc2VWYWxpZGF0b3JzKHZhbGlkYXRvcnMpLCBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKGFzeW5jVmFsaWRhdG9ycykpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ0Zvcm0ucHJvdG90eXBlLCBcInN1Ym1pdHRlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc3VibWl0dGVkOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nRm9ybS5wcm90b3R5cGUsIFwiZm9ybURpcmVjdGl2ZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ0Zvcm0ucHJvdG90eXBlLCBcImNvbnRyb2xcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZm9ybTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ0Zvcm0ucHJvdG90eXBlLCBcInBhdGhcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nRm9ybS5wcm90b3R5cGUsIFwiY29udHJvbHNcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sczsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5hZGRDb250cm9sID0gZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJlc29sdmVkUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb250YWluZXIgPSBfdGhpcy5fZmluZENvbnRhaW5lcihkaXIucGF0aCk7XG4gICAgICAgICAgICAgICAgZGlyLl9jb250cm9sID0gKGNvbnRhaW5lci5yZWdpc3RlckNvbnRyb2woZGlyLm5hbWUsIGRpci5jb250cm9sKSk7XG4gICAgICAgICAgICAgICAgc2V0VXBDb250cm9sKGRpci5jb250cm9sLCBkaXIpO1xuICAgICAgICAgICAgICAgIGRpci5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5nZXRDb250cm9sID0gZnVuY3Rpb24gKGRpcikgeyByZXR1cm4gKHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLnJlbW92ZUNvbnRyb2wgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNvbnRhaW5lciA9IF90aGlzLl9maW5kQ29udGFpbmVyKGRpci5wYXRoKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDb250cm9sKGRpci5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLmFkZEZvcm1Hcm91cCA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXNvbHZlZFByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udGFpbmVyID0gX3RoaXMuX2ZpbmRDb250YWluZXIoZGlyLnBhdGgpO1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGdyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XG4gICAgICAgICAgICAgICAgc2V0VXBGb3JtQ29udGFpbmVyKGdyb3VwLCBkaXIpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZWdpc3RlckNvbnRyb2woZGlyLm5hbWUsIGdyb3VwKTtcbiAgICAgICAgICAgICAgICBncm91cC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUucmVtb3ZlRm9ybUdyb3VwID0gZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJlc29sdmVkUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb250YWluZXIgPSBfdGhpcy5fZmluZENvbnRhaW5lcihkaXIucGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ29udHJvbChkaXIubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5nZXRGb3JtR3JvdXAgPSBmdW5jdGlvbiAoZGlyKSB7IHJldHVybiAodGhpcy5mb3JtLmdldChkaXIucGF0aCkpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS51cGRhdGVNb2RlbCA9IGZ1bmN0aW9uIChkaXIsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGN0cmwgPSAoX3RoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKTtcbiAgICAgICAgICAgICAgICBjdHJsLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSAkZXZlbnRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5uZ1N1Ym1pdC5lbWl0KCRldmVudCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5vblJlc2V0ID0gZnVuY3Rpb24gKCkgeyB0aGlzLnJlc2V0Rm9ybSgpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/PX0gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUucmVzZXRGb3JtID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyB2YWx1ZSA9IHVuZGVmaW5lZDsgfVxuICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/fSBwYXRoXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLl9maW5kQ29udGFpbmVyID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgICAgIHBhdGgucG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gcGF0aC5sZW5ndGggPyAodGhpcy5mb3JtLmdldChwYXRoKSkgOiB0aGlzLmZvcm07XG4gICAgICAgIH07XG4gICAgICAgIE5nRm9ybS5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybTpub3QoW25nTm9Gb3JtXSk6bm90KFtmb3JtR3JvdXBdKSxuZ0Zvcm0sW25nRm9ybV0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbZm9ybURpcmVjdGl2ZVByb3ZpZGVyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJyhzdWJtaXQpJzogJ29uU3VibWl0KCRldmVudCknLCAnKHJlc2V0KSc6ICdvblJlc2V0KCknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRzOiBbJ25nU3VibWl0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRBczogJ25nRm9ybSdcbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBOZ0Zvcm0uY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIHJldHVybiBOZ0Zvcm07XG4gICAgfShDb250cm9sQ29udGFpbmVyKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gRXhhbXBsZXMgPSB7XG4gICAgICAgIGZvcm1Db250cm9sTmFtZTogXCJcXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cXFwibXlHcm91cFxcXCI+XFxuICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cXFwiZmlyc3ROYW1lXFxcIj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIEluIHlvdXIgY2xhc3M6XFxuXFxuICAgIHRoaXMubXlHcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xcbiAgICAgICBmaXJzdE5hbWU6IG5ldyBGb3JtQ29udHJvbCgpXFxuICAgIH0pO1wiLFxuICAgICAgICBmb3JtR3JvdXBOYW1lOiBcIlxcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVxcXCJteUdyb3VwXFxcIj5cXG4gICAgICAgPGRpdiBmb3JtR3JvdXBOYW1lPVxcXCJwZXJzb25cXFwiPlxcbiAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVxcXCJmaXJzdE5hbWVcXFwiPlxcbiAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIEluIHlvdXIgY2xhc3M6XFxuXFxuICAgIHRoaXMubXlHcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xcbiAgICAgICBwZXJzb246IG5ldyBGb3JtR3JvdXAoeyBmaXJzdE5hbWU6IG5ldyBGb3JtQ29udHJvbCgpIH0pXFxuICAgIH0pO1wiLFxuICAgICAgICBmb3JtQXJyYXlOYW1lOiBcIlxcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVxcXCJteUdyb3VwXFxcIj5cXG4gICAgICA8ZGl2IGZvcm1BcnJheU5hbWU9XFxcImNpdGllc1xcXCI+XFxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cXFwibGV0IGNpdHkgb2YgY2l0eUFycmF5LmNvbnRyb2xzOyBsZXQgaT1pbmRleFxcXCI+XFxuICAgICAgICAgIDxpbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cXFwiaVxcXCI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIEluIHlvdXIgY2xhc3M6XFxuXFxuICAgIHRoaXMuY2l0eUFycmF5ID0gbmV3IEZvcm1BcnJheShbbmV3IEZvcm1Db250cm9sKCdTRicpXSk7XFxuICAgIHRoaXMubXlHcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xcbiAgICAgIGNpdGllczogdGhpcy5jaXR5QXJyYXlcXG4gICAgfSk7XCIsXG4gICAgICAgIG5nTW9kZWxHcm91cDogXCJcXG4gICAgPGZvcm0+XFxuICAgICAgIDxkaXYgbmdNb2RlbEdyb3VwPVxcXCJwZXJzb25cXFwiPlxcbiAgICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcInBlcnNvbi5uYW1lXFxcIiBuYW1lPVxcXCJmaXJzdE5hbWVcXFwiPlxcbiAgICAgICA8L2Rpdj5cXG4gICAgPC9mb3JtPlwiLFxuICAgICAgICBuZ01vZGVsV2l0aEZvcm1Hcm91cDogXCJcXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cXFwibXlHcm91cFxcXCI+XFxuICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XFxcImZpcnN0TmFtZVxcXCI+XFxuICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwic2hvd01vcmVDb250cm9sc1xcXCIgW25nTW9kZWxPcHRpb25zXT1cXFwie3N0YW5kYWxvbmU6IHRydWV9XFxcIj5cXG4gICAgPC9kaXY+XFxuICBcIlxuICAgIH07XG5cbiAgICB2YXIgVGVtcGxhdGVEcml2ZW5FcnJvcnMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBUZW1wbGF0ZURyaXZlbkVycm9ycygpIHtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFRlbXBsYXRlRHJpdmVuRXJyb3JzLm1vZGVsUGFyZW50RXhjZXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgbmdNb2RlbCBjYW5ub3QgYmUgdXNlZCB0byByZWdpc3RlciBmb3JtIGNvbnRyb2xzIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwIGRpcmVjdGl2ZS4gIFRyeSB1c2luZ1xcbiAgICAgIGZvcm1Hcm91cCdzIHBhcnRuZXIgZGlyZWN0aXZlIFxcXCJmb3JtQ29udHJvbE5hbWVcXFwiIGluc3RlYWQuICBFeGFtcGxlOlxcblxcbiAgICAgIFwiICsgRXhhbXBsZXMuZm9ybUNvbnRyb2xOYW1lICsgXCJcXG5cXG4gICAgICBPciwgaWYgeW91J2QgbGlrZSB0byBhdm9pZCByZWdpc3RlcmluZyB0aGlzIGZvcm0gY29udHJvbCwgaW5kaWNhdGUgdGhhdCBpdCdzIHN0YW5kYWxvbmUgaW4gbmdNb2RlbE9wdGlvbnM6XFxuXFxuICAgICAgRXhhbXBsZTpcXG5cXG4gICAgICBcIiArIEV4YW1wbGVzLm5nTW9kZWxXaXRoRm9ybUdyb3VwKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5mb3JtR3JvdXBOYW1lRXhjZXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgbmdNb2RlbCBjYW5ub3QgYmUgdXNlZCB0byByZWdpc3RlciBmb3JtIGNvbnRyb2xzIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwTmFtZSBvciBmb3JtQXJyYXlOYW1lIGRpcmVjdGl2ZS5cXG5cXG4gICAgICBPcHRpb24gMTogVXNlIGZvcm1Db250cm9sTmFtZSBpbnN0ZWFkIG9mIG5nTW9kZWwgKHJlYWN0aXZlIHN0cmF0ZWd5KTpcXG5cXG4gICAgICBcIiArIEV4YW1wbGVzLmZvcm1Hcm91cE5hbWUgKyBcIlxcblxcbiAgICAgIE9wdGlvbiAyOiAgVXBkYXRlIG5nTW9kZWwncyBwYXJlbnQgYmUgbmdNb2RlbEdyb3VwICh0ZW1wbGF0ZS1kcml2ZW4gc3RyYXRlZ3kpOlxcblxcbiAgICAgIFwiICsgRXhhbXBsZXMubmdNb2RlbEdyb3VwKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5taXNzaW5nTmFtZUV4Y2VwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIklmIG5nTW9kZWwgaXMgdXNlZCB3aXRoaW4gYSBmb3JtIHRhZywgZWl0aGVyIHRoZSBuYW1lIGF0dHJpYnV0ZSBtdXN0IGJlIHNldCBvciB0aGUgZm9ybVxcbiAgICAgIGNvbnRyb2wgbXVzdCBiZSBkZWZpbmVkIGFzICdzdGFuZGFsb25lJyBpbiBuZ01vZGVsT3B0aW9ucy5cXG5cXG4gICAgICBFeGFtcGxlIDE6IDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwicGVyc29uLmZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3RcXFwiPlxcbiAgICAgIEV4YW1wbGUgMjogPGlucHV0IFsobmdNb2RlbCldPVxcXCJwZXJzb24uZmlyc3ROYW1lXFxcIiBbbmdNb2RlbE9wdGlvbnNdPVxcXCJ7c3RhbmRhbG9uZTogdHJ1ZX1cXFwiPlwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5tb2RlbEdyb3VwUGFyZW50RXhjZXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgbmdNb2RlbEdyb3VwIGNhbm5vdCBiZSB1c2VkIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwIGRpcmVjdGl2ZS5cXG5cXG4gICAgICBPcHRpb24gMTogVXNlIGZvcm1Hcm91cE5hbWUgaW5zdGVhZCBvZiBuZ01vZGVsR3JvdXAgKHJlYWN0aXZlIHN0cmF0ZWd5KTpcXG5cXG4gICAgICBcIiArIEV4YW1wbGVzLmZvcm1Hcm91cE5hbWUgKyBcIlxcblxcbiAgICAgIE9wdGlvbiAyOiAgVXNlIGEgcmVndWxhciBmb3JtIHRhZyBpbnN0ZWFkIG9mIHRoZSBmb3JtR3JvdXAgZGlyZWN0aXZlICh0ZW1wbGF0ZS1kcml2ZW4gc3RyYXRlZ3kpOlxcblxcbiAgICAgIFwiICsgRXhhbXBsZXMubmdNb2RlbEdyb3VwKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFRlbXBsYXRlRHJpdmVuRXJyb3JzO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQ4ID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbW9kZWxHcm91cFByb3ZpZGVyID0ge1xuICAgICAgICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE5nTW9kZWxHcm91cDsgfSlcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFxcQHdoYXRJdERvZXMgQ3JlYXRlcyBhbmQgYmluZHMgYSB7XFxAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlIHRvIGEgRE9NIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBcXEBob3dUb1VzZVxuICAgICAqXG4gICAgICogVGhpcyBkaXJlY3RpdmUgY2FuIG9ubHkgYmUgdXNlZCBhcyBhIGNoaWxkIG9mIHtcXEBsaW5rIE5nRm9ybX0gKG9yIGluIG90aGVyIHdvcmRzLFxuICAgICAqIHdpdGhpbiBgPGZvcm0+YCB0YWdzKS5cbiAgICAgKlxuICAgICAqIFVzZSB0aGlzIGRpcmVjdGl2ZSBpZiB5b3UnZCBsaWtlIHRvIGNyZWF0ZSBhIHN1Yi1ncm91cCB3aXRoaW4gYSBmb3JtLiBUaGlzIGNhblxuICAgICAqIGNvbWUgaW4gaGFuZHkgaWYgeW91IHdhbnQgdG8gdmFsaWRhdGUgYSBzdWItZ3JvdXAgb2YgeW91ciBmb3JtIHNlcGFyYXRlbHkgZnJvbVxuICAgICAqIHRoZSByZXN0IG9mIHlvdXIgZm9ybSwgb3IgaWYgc29tZSB2YWx1ZXMgaW4geW91ciBkb21haW4gbW9kZWwgbWFrZSBtb3JlIHNlbnNlIHRvXG4gICAgICogY29uc3VtZSB0b2dldGhlciBpbiBhIG5lc3RlZCBvYmplY3QuXG4gICAgICpcbiAgICAgKiBQYXNzIGluIHRoZSBuYW1lIHlvdSdkIGxpa2UgdGhpcyBzdWItZ3JvdXAgdG8gaGF2ZSBhbmQgaXQgd2lsbCBiZWNvbWUgdGhlIGtleVxuICAgICAqIGZvciB0aGUgc3ViLWdyb3VwIGluIHRoZSBmb3JtJ3MgZnVsbCB2YWx1ZS4gWW91IGNhbiBhbHNvIGV4cG9ydCB0aGUgZGlyZWN0aXZlIGludG9cbiAgICAgKiBhIGxvY2FsIHRlbXBsYXRlIHZhcmlhYmxlIHVzaW5nIGBuZ01vZGVsR3JvdXBgIChleDogYCNteUdyb3VwPVwibmdNb2RlbEdyb3VwXCJgKS5cbiAgICAgKlxuICAgICAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL25nTW9kZWxHcm91cC9uZ19tb2RlbF9ncm91cF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgKlxuICAgICAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAgICAgKlxuICAgICAqICogKipOZ01vZHVsZSoqOiBgRm9ybXNNb2R1bGVgXG4gICAgICpcbiAgICAgKiBcXEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgTmdNb2RlbEdyb3VwID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDgoTmdNb2RlbEdyb3VwLCBfc3VwZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBwYXJlbnRcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICAgICAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBOZ01vZGVsR3JvdXAocGFyZW50LCB2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnMpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgdGhpcy5fdmFsaWRhdG9ycyA9IHZhbGlkYXRvcnM7XG4gICAgICAgICAgICB0aGlzLl9hc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ01vZGVsR3JvdXAucHJvdG90eXBlLl9jaGVja1BhcmVudFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBOZ01vZGVsR3JvdXApICYmICEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgTmdGb3JtKSkge1xuICAgICAgICAgICAgICAgIFRlbXBsYXRlRHJpdmVuRXJyb3JzLm1vZGVsR3JvdXBQYXJlbnRFeGNlcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTmdNb2RlbEdyb3VwLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbeyBzZWxlY3RvcjogJ1tuZ01vZGVsR3JvdXBdJywgcHJvdmlkZXJzOiBbbW9kZWxHcm91cFByb3ZpZGVyXSwgZXhwb3J0QXM6ICduZ01vZGVsR3JvdXAnIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgTmdNb2RlbEdyb3VwLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBDb250cm9sQ29udGFpbmVyLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkhvc3QgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNraXBTZWxmIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICBOZ01vZGVsR3JvdXAucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnbmFtZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnbmdNb2RlbEdyb3VwJyxdIH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE5nTW9kZWxHcm91cDtcbiAgICB9KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQ3ID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZm9ybUNvbnRyb2xCaW5kaW5nID0ge1xuICAgICAgICBwcm92aWRlOiBOZ0NvbnRyb2wsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gTmdNb2RlbDsgfSlcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIGBuZ01vZGVsYCBmb3JjZXMgYW4gYWRkaXRpb25hbCBjaGFuZ2UgZGV0ZWN0aW9uIHJ1biB3aGVuIGl0cyBpbnB1dHMgY2hhbmdlOlxuICAgICAqIEUuZy46XG4gICAgICogYGBgXG4gICAgICogPGRpdj57e215TW9kZWwudmFsaWR9fTwvZGl2PlxuICAgICAqIDxpbnB1dCBbKG5nTW9kZWwpXT1cIm15VmFsdWVcIiAjbXlNb2RlbD1cIm5nTW9kZWxcIj5cbiAgICAgKiBgYGBcbiAgICAgKiBJLmUuIGBuZ01vZGVsYCBjYW4gZXhwb3J0IGl0c2VsZiBvbiB0aGUgZWxlbWVudCBhbmQgdGhlbiBiZSB1c2VkIGluIHRoZSB0ZW1wbGF0ZS5cbiAgICAgKiBOb3JtYWxseSwgdGhpcyB3b3VsZCByZXN1bHQgaW4gZXhwcmVzc2lvbnMgYmVmb3JlIHRoZSBgaW5wdXRgIHRoYXQgdXNlIHRoZSBleHBvcnRlZCBkaXJlY3RpdmVcbiAgICAgKiB0byBoYXZlIGFuZCBvbGQgdmFsdWUgYXMgdGhleSBoYXZlIGJlZW5cbiAgICAgKiBkaXJ0eSBjaGVja2VkIGJlZm9yZS4gQXMgdGhpcyBpcyBhIHZlcnkgY29tbW9uIGNhc2UgZm9yIGBuZ01vZGVsYCwgd2UgYWRkZWQgdGhpcyBzZWNvbmQgY2hhbmdlXG4gICAgICogZGV0ZWN0aW9uIHJ1bi5cbiAgICAgKlxuICAgICAqIE5vdGVzOlxuICAgICAqIC0gdGhpcyBpcyBqdXN0IG9uZSBleHRyYSBydW4gbm8gbWF0dGVyIGhvdyBtYW55IGBuZ01vZGVsYCBoYXZlIGJlZW4gY2hhbmdlZC5cbiAgICAgKiAtIHRoaXMgaXMgYSBnZW5lcmFsIHByb2JsZW0gd2hlbiB1c2luZyBgZXhwb3J0QXNgIGZvciBkaXJlY3RpdmVzIVxuICAgICAqL1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIHJlc29sdmVkUHJvbWlzZSQxID0gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIC8qKlxuICAgICAqIFxcQHdoYXRJdERvZXMgQ3JlYXRlcyBhIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSBmcm9tIGEgZG9tYWluIG1vZGVsIGFuZCBiaW5kcyBpdFxuICAgICAqIHRvIGEgZm9ybSBjb250cm9sIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBUaGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlIHdpbGwgdHJhY2sgdGhlIHZhbHVlLCB1c2VyIGludGVyYWN0aW9uLCBhbmRcbiAgICAgKiB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgY29udHJvbCBhbmQga2VlcCB0aGUgdmlldyBzeW5jZWQgd2l0aCB0aGUgbW9kZWwuIElmIHVzZWRcbiAgICAgKiB3aXRoaW4gYSBwYXJlbnQgZm9ybSwgdGhlIGRpcmVjdGl2ZSB3aWxsIGFsc28gcmVnaXN0ZXIgaXRzZWxmIHdpdGggdGhlIGZvcm0gYXMgYSBjaGlsZFxuICAgICAqIGNvbnRyb2wuXG4gICAgICpcbiAgICAgKiBcXEBob3dUb1VzZVxuICAgICAqXG4gICAgICogVGhpcyBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgYnkgaXRzZWxmIG9yIGFzIHBhcnQgb2YgYSBsYXJnZXIgZm9ybS4gQWxsIHlvdSBuZWVkIGlzIHRoZVxuICAgICAqIGBuZ01vZGVsYCBzZWxlY3RvciB0byBhY3RpdmF0ZSBpdC5cbiAgICAgKlxuICAgICAqIEl0IGFjY2VwdHMgYSBkb21haW4gbW9kZWwgYXMgYW4gb3B0aW9uYWwge1xcQGxpbmsgXFxASW5wdXR9LiBJZiB5b3UgaGF2ZSBhIG9uZS13YXkgYmluZGluZ1xuICAgICAqIHRvIGBuZ01vZGVsYCB3aXRoIGBbXWAgc3ludGF4LCBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgdGhlIGRvbWFpbiBtb2RlbCBpbiB0aGUgY29tcG9uZW50XG4gICAgICogY2xhc3Mgd2lsbCBzZXQgdGhlIHZhbHVlIGluIHRoZSB2aWV3LiBJZiB5b3UgaGF2ZSBhIHR3by13YXkgYmluZGluZyB3aXRoIGBbKCldYCBzeW50YXhcbiAgICAgKiAoYWxzbyBrbm93biBhcyAnYmFuYW5hLWJveCBzeW50YXgnKSwgdGhlIHZhbHVlIGluIHRoZSBVSSB3aWxsIGFsd2F5cyBiZSBzeW5jZWQgYmFjayB0b1xuICAgICAqIHRoZSBkb21haW4gbW9kZWwgaW4geW91ciBjbGFzcyBhcyB3ZWxsLlxuICAgICAqXG4gICAgICogSWYgeW91IHdpc2ggdG8gaW5zcGVjdCB0aGUgcHJvcGVydGllcyBvZiB0aGUgYXNzb2NpYXRlZCB7XFxAbGluayBGb3JtQ29udHJvbH0gKGxpa2VcbiAgICAgKiB2YWxpZGl0eSBzdGF0ZSksIHlvdSBjYW4gYWxzbyBleHBvcnQgdGhlIGRpcmVjdGl2ZSBpbnRvIGEgbG9jYWwgdGVtcGxhdGUgdmFyaWFibGUgdXNpbmdcbiAgICAgKiBgbmdNb2RlbGAgYXMgdGhlIGtleSAoZXg6IGAjbXlWYXI9XCJuZ01vZGVsXCJgKS4gWW91IGNhbiB0aGVuIGFjY2VzcyB0aGUgY29udHJvbCB1c2luZyB0aGVcbiAgICAgKiBkaXJlY3RpdmUncyBgY29udHJvbGAgcHJvcGVydHksIGJ1dCBtb3N0IHByb3BlcnRpZXMgeW91J2xsIG5lZWQgKGxpa2UgYHZhbGlkYCBhbmQgYGRpcnR5YClcbiAgICAgKiB3aWxsIGZhbGwgdGhyb3VnaCB0byB0aGUgY29udHJvbCBhbnl3YXksIHNvIHlvdSBjYW4gYWNjZXNzIHRoZW0gZGlyZWN0bHkuIFlvdSBjYW4gc2VlIGFcbiAgICAgKiBmdWxsIGxpc3Qgb2YgcHJvcGVydGllcyBkaXJlY3RseSBhdmFpbGFibGUgaW4ge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlfS5cbiAgICAgKlxuICAgICAqIFRoZSBmb2xsb3dpbmcgaXMgYW4gZXhhbXBsZSBvZiBhIHNpbXBsZSBzdGFuZGFsb25lIGNvbnRyb2wgdXNpbmcgYG5nTW9kZWxgOlxuICAgICAqXG4gICAgICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlTmdNb2RlbC9zaW1wbGVfbmdfbW9kZWxfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAgICpcbiAgICAgKiBXaGVuIHVzaW5nIHRoZSBgbmdNb2RlbGAgd2l0aGluIGA8Zm9ybT5gIHRhZ3MsIHlvdSdsbCBhbHNvIG5lZWQgdG8gc3VwcGx5IGEgYG5hbWVgIGF0dHJpYnV0ZVxuICAgICAqIHNvIHRoYXQgdGhlIGNvbnRyb2wgY2FuIGJlIHJlZ2lzdGVyZWQgd2l0aCB0aGUgcGFyZW50IGZvcm0gdW5kZXIgdGhhdCBuYW1lLlxuICAgICAqXG4gICAgICogSXQncyB3b3J0aCBub3RpbmcgdGhhdCBpbiB0aGUgY29udGV4dCBvZiBhIHBhcmVudCBmb3JtLCB5b3Ugb2Z0ZW4gY2FuIHNraXAgb25lLXdheSBvclxuICAgICAqIHR3by13YXkgYmluZGluZyBiZWNhdXNlIHRoZSBwYXJlbnQgZm9ybSB3aWxsIHN5bmMgdGhlIHZhbHVlIGZvciB5b3UuIFlvdSBjYW4gYWNjZXNzXG4gICAgICogaXRzIHByb3BlcnRpZXMgYnkgZXhwb3J0aW5nIGl0IGludG8gYSBsb2NhbCB0ZW1wbGF0ZSB2YXJpYWJsZSB1c2luZyBgbmdGb3JtYCAoZXg6XG4gICAgICogYCNmPVwibmdGb3JtXCJgKS4gVGhlbiB5b3UgY2FuIHBhc3MgaXQgd2hlcmUgaXQgbmVlZHMgdG8gZ28gb24gc3VibWl0LlxuICAgICAqXG4gICAgICogSWYgeW91IGRvIG5lZWQgdG8gcG9wdWxhdGUgaW5pdGlhbCB2YWx1ZXMgaW50byB5b3VyIGZvcm0sIHVzaW5nIGEgb25lLXdheSBiaW5kaW5nIGZvclxuICAgICAqIGBuZ01vZGVsYCB0ZW5kcyB0byBiZSBzdWZmaWNpZW50IGFzIGxvbmcgYXMgeW91IHVzZSB0aGUgZXhwb3J0ZWQgZm9ybSdzIHZhbHVlIHJhdGhlclxuICAgICAqIHRoYW4gdGhlIGRvbWFpbiBtb2RlbCdzIHZhbHVlIG9uIHN1Ym1pdC5cbiAgICAgKlxuICAgICAqIFRha2UgYSBsb29rIGF0IGFuIGV4YW1wbGUgb2YgdXNpbmcgYG5nTW9kZWxgIHdpdGhpbiBhIGZvcm06XG4gICAgICpcbiAgICAgKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9zaW1wbGVGb3JtL3NpbXBsZV9mb3JtX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAqXG4gICAgICogVG8gc2VlIGBuZ01vZGVsYCBleGFtcGxlcyB3aXRoIGRpZmZlcmVudCBmb3JtIGNvbnRyb2wgdHlwZXMsIHNlZTpcbiAgICAgKlxuICAgICAqICogUmFkaW8gYnV0dG9uczoge1xcQGxpbmsgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcn1cbiAgICAgKiAqIFNlbGVjdHM6IHtcXEBsaW5rIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yfVxuICAgICAqXG4gICAgICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAgICAgKlxuICAgICAqICoqTmdNb2R1bGUqKjogYEZvcm1zTW9kdWxlYFxuICAgICAqXG4gICAgICogIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBOZ01vZGVsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDcoTmdNb2RlbCwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gcGFyZW50XG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAgICAgKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yc1xuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlQWNjZXNzb3JzXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBOZ01vZGVsKHBhcmVudCwgdmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzLCB2YWx1ZUFjY2Vzc29ycykge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9jb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RlcmVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIHRoaXMuX3Jhd1ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy52YWx1ZUFjY2Vzc29yID0gc2VsZWN0VmFsdWVBY2Nlc3Nvcih0aGlzLCB2YWx1ZUFjY2Vzc29ycyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tGb3JFcnJvcnMoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fcmVnaXN0ZXJlZClcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRVcENvbnRyb2woKTtcbiAgICAgICAgICAgIGlmICgnaXNEaXNhYmxlZCcgaW4gY2hhbmdlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURpc2FibGVkKGNoYW5nZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzUHJvcGVydHlVcGRhdGVkKGNoYW5nZXMsIHRoaXMudmlld01vZGVsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlKHRoaXMubW9kZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ01vZGVsLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHsgdGhpcy5mb3JtRGlyZWN0aXZlICYmIHRoaXMuZm9ybURpcmVjdGl2ZS5yZW1vdmVDb250cm9sKHRoaXMpOyB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdNb2RlbC5wcm90b3R5cGUsIFwiY29udHJvbFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY29udHJvbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ01vZGVsLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudCA/IGNvbnRyb2xQYXRoKHRoaXMubmFtZSwgdGhpcy5fcGFyZW50KSA6IFt0aGlzLm5hbWVdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ01vZGVsLnByb3RvdHlwZSwgXCJmb3JtRGlyZWN0aXZlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wYXJlbnQgPyB0aGlzLl9wYXJlbnQuZm9ybURpcmVjdGl2ZSA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdNb2RlbC5wcm90b3R5cGUsIFwidmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl9yYXdWYWxpZGF0b3JzKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ01vZGVsLnByb3RvdHlwZSwgXCJhc3luY1ZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gbmV3VmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLnZpZXdUb01vZGVsVXBkYXRlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUuZW1pdChuZXdWYWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUuX3NldFVwQ29udHJvbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzU3RhbmRhbG9uZSgpID8gdGhpcy5fc2V0VXBTdGFuZGFsb25lKCkgOlxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5hZGRDb250cm9sKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUuX2lzU3RhbmRhbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5fcGFyZW50IHx8ICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLnN0YW5kYWxvbmUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLl9zZXRVcFN0YW5kYWxvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRVcENvbnRyb2wodGhpcy5fY29udHJvbCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLl9jaGVja0ZvckVycm9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faXNTdGFuZGFsb25lKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1BhcmVudFR5cGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NoZWNrTmFtZSgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLl9jaGVja1BhcmVudFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBOZ01vZGVsR3JvdXApICYmXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50IGluc3RhbmNlb2YgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5mb3JtR3JvdXBOYW1lRXhjZXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIE5nTW9kZWxHcm91cCkgJiYgISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBOZ0Zvcm0pKSB7XG4gICAgICAgICAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMubW9kZWxQYXJlbnRFeGNlcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ01vZGVsLnByb3RvdHlwZS5fY2hlY2tOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubmFtZSlcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLm9wdGlvbnMubmFtZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faXNTdGFuZGFsb25lKCkgJiYgIXRoaXMubmFtZSkge1xuICAgICAgICAgICAgICAgIFRlbXBsYXRlRHJpdmVuRXJyb3JzLm1pc3NpbmdOYW1lRXhjZXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ01vZGVsLnByb3RvdHlwZS5fdXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXNvbHZlZFByb21pc2UkMS50aGVuKGZ1bmN0aW9uICgpIHsgX3RoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSwgeyBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U6IGZhbHNlIH0pOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUuX3VwZGF0ZURpc2FibGVkID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBkaXNhYmxlZFZhbHVlID0gY2hhbmdlc1snaXNEaXNhYmxlZCddLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGlzRGlzYWJsZWQgPSBkaXNhYmxlZFZhbHVlID09PSAnJyB8fCAoZGlzYWJsZWRWYWx1ZSAmJiBkaXNhYmxlZFZhbHVlICE9PSAnZmFsc2UnKTtcbiAgICAgICAgICAgIHJlc29sdmVkUHJvbWlzZSQxLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0Rpc2FibGVkICYmICFfdGhpcy5jb250cm9sLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNEaXNhYmxlZCAmJiBfdGhpcy5jb250cm9sLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIE5nTW9kZWwuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ1tuZ01vZGVsXTpub3QoW2Zvcm1Db250cm9sTmFtZV0pOm5vdChbZm9ybUNvbnRyb2xdKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtmb3JtQ29udHJvbEJpbmRpbmddLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0QXM6ICduZ01vZGVsJ1xuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE5nTW9kZWwuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkhvc3QgfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxVRV9BQ0NFU1NPUixdIH0sXSB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICBOZ01vZGVsLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ25hbWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0IH0sXSxcbiAgICAgICAgICAgICdpc0Rpc2FibGVkJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWydkaXNhYmxlZCcsXSB9LF0sXG4gICAgICAgICAgICAnbW9kZWwnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ25nTW9kZWwnLF0gfSxdLFxuICAgICAgICAgICAgJ29wdGlvbnMnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ25nTW9kZWxPcHRpb25zJyxdIH0sXSxcbiAgICAgICAgICAgICd1cGRhdGUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk91dHB1dCwgYXJnczogWyduZ01vZGVsQ2hhbmdlJyxdIH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE5nTW9kZWw7XG4gICAgfShOZ0NvbnRyb2wpKTtcblxuICAgIHZhciBSZWFjdGl2ZUVycm9ycyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFJlYWN0aXZlRXJyb3JzKCkge1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmVhY3RpdmVFcnJvcnMuY29udHJvbFBhcmVudEV4Y2VwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImZvcm1Db250cm9sTmFtZSBtdXN0IGJlIHVzZWQgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLiAgWW91J2xsIHdhbnQgdG8gYWRkIGEgZm9ybUdyb3VwXFxuICAgICAgIGRpcmVjdGl2ZSBhbmQgcGFzcyBpdCBhbiBleGlzdGluZyBGb3JtR3JvdXAgaW5zdGFuY2UgKHlvdSBjYW4gY3JlYXRlIG9uZSBpbiB5b3VyIGNsYXNzKS5cXG5cXG4gICAgICBFeGFtcGxlOlxcblxcbiAgICAgIFwiICsgRXhhbXBsZXMuZm9ybUNvbnRyb2xOYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSZWFjdGl2ZUVycm9ycy5uZ01vZGVsR3JvdXBFeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmb3JtQ29udHJvbE5hbWUgY2Fubm90IGJlIHVzZWQgd2l0aCBhbiBuZ01vZGVsR3JvdXAgcGFyZW50LiBJdCBpcyBvbmx5IGNvbXBhdGlibGUgd2l0aCBwYXJlbnRzXFxuICAgICAgIHRoYXQgYWxzbyBoYXZlIGEgXFxcImZvcm1cXFwiIHByZWZpeDogZm9ybUdyb3VwTmFtZSwgZm9ybUFycmF5TmFtZSwgb3IgZm9ybUdyb3VwLlxcblxcbiAgICAgICBPcHRpb24gMTogIFVwZGF0ZSB0aGUgcGFyZW50IHRvIGJlIGZvcm1Hcm91cE5hbWUgKHJlYWN0aXZlIGZvcm0gc3RyYXRlZ3kpXFxuXFxuICAgICAgICBcIiArIEV4YW1wbGVzLmZvcm1Hcm91cE5hbWUgKyBcIlxcblxcbiAgICAgICAgT3B0aW9uIDI6IFVzZSBuZ01vZGVsIGluc3RlYWQgb2YgZm9ybUNvbnRyb2xOYW1lICh0ZW1wbGF0ZS1kcml2ZW4gc3RyYXRlZ3kpXFxuXFxuICAgICAgICBcIiArIEV4YW1wbGVzLm5nTW9kZWxHcm91cCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmVhY3RpdmVFcnJvcnMubWlzc2luZ0Zvcm1FeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmb3JtR3JvdXAgZXhwZWN0cyBhIEZvcm1Hcm91cCBpbnN0YW5jZS4gUGxlYXNlIHBhc3Mgb25lIGluLlxcblxcbiAgICAgICBFeGFtcGxlOlxcblxcbiAgICAgICBcIiArIEV4YW1wbGVzLmZvcm1Db250cm9sTmFtZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmVhY3RpdmVFcnJvcnMuZ3JvdXBQYXJlbnRFeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmb3JtR3JvdXBOYW1lIG11c3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBZb3UnbGwgd2FudCB0byBhZGQgYSBmb3JtR3JvdXBcXG4gICAgICBkaXJlY3RpdmUgYW5kIHBhc3MgaXQgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIGluc3RhbmNlICh5b3UgY2FuIGNyZWF0ZSBvbmUgaW4geW91ciBjbGFzcykuXFxuXFxuICAgICAgRXhhbXBsZTpcXG5cXG4gICAgICBcIiArIEV4YW1wbGVzLmZvcm1Hcm91cE5hbWUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJlYWN0aXZlRXJyb3JzLmFycmF5UGFyZW50RXhjZXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZm9ybUFycmF5TmFtZSBtdXN0IGJlIHVzZWQgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLiAgWW91J2xsIHdhbnQgdG8gYWRkIGEgZm9ybUdyb3VwXFxuICAgICAgIGRpcmVjdGl2ZSBhbmQgcGFzcyBpdCBhbiBleGlzdGluZyBGb3JtR3JvdXAgaW5zdGFuY2UgKHlvdSBjYW4gY3JlYXRlIG9uZSBpbiB5b3VyIGNsYXNzKS5cXG5cXG4gICAgICAgIEV4YW1wbGU6XFxuXFxuICAgICAgICBcIiArIEV4YW1wbGVzLmZvcm1BcnJheU5hbWUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJlYWN0aXZlRXJyb3JzLmRpc2FibGVkQXR0cldhcm5pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJcXG4gICAgICBJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIHdpdGggYSByZWFjdGl2ZSBmb3JtIGRpcmVjdGl2ZS4gSWYgeW91IHNldCBkaXNhYmxlZCB0byB0cnVlXFxuICAgICAgd2hlbiB5b3Ugc2V0IHVwIHRoaXMgY29udHJvbCBpbiB5b3VyIGNvbXBvbmVudCBjbGFzcywgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSB3aWxsIGFjdHVhbGx5IGJlIHNldCBpbiB0aGUgRE9NIGZvclxcbiAgICAgIHlvdS4gV2UgcmVjb21tZW5kIHVzaW5nIHRoaXMgYXBwcm9hY2ggdG8gYXZvaWQgJ2NoYW5nZWQgYWZ0ZXIgY2hlY2tlZCcgZXJyb3JzLlxcbiAgICAgICBcXG4gICAgICBFeGFtcGxlOiBcXG4gICAgICBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XFxuICAgICAgICBmaXJzdDogbmV3IEZvcm1Db250cm9sKHt2YWx1ZTogJ05hbmN5JywgZGlzYWJsZWQ6IHRydWV9LCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcXG4gICAgICAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgnRHJldycsIFZhbGlkYXRvcnMucmVxdWlyZWQpXFxuICAgICAgfSk7XFxuICAgIFwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFJlYWN0aXZlRXJyb3JzO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQ5ID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZm9ybUNvbnRyb2xCaW5kaW5nJDEgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5nQ29udHJvbCxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBGb3JtQ29udHJvbERpcmVjdGl2ZTsgfSlcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFxcQHdoYXRJdERvZXMgU3luY3MgYSBzdGFuZGFsb25lIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSB0byBhIGZvcm0gY29udHJvbCBlbGVtZW50LlxuICAgICAqXG4gICAgICogSW4gb3RoZXIgd29yZHMsIHRoaXMgZGlyZWN0aXZlIGVuc3VyZXMgdGhhdCBhbnkgdmFsdWVzIHdyaXR0ZW4gdG8gdGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfVxuICAgICAqIGluc3RhbmNlIHByb2dyYW1tYXRpY2FsbHkgd2lsbCBiZSB3cml0dGVuIHRvIHRoZSBET00gZWxlbWVudCAobW9kZWwgLT4gdmlldykuIENvbnZlcnNlbHksXG4gICAgICogYW55IHZhbHVlcyB3cml0dGVuIHRvIHRoZSBET00gZWxlbWVudCB0aHJvdWdoIHVzZXIgaW5wdXQgd2lsbCBiZSByZWZsZWN0ZWQgaW4gdGhlXG4gICAgICoge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlICh2aWV3IC0+IG1vZGVsKS5cbiAgICAgKlxuICAgICAqIFxcQGhvd1RvVXNlXG4gICAgICpcbiAgICAgKiBVc2UgdGhpcyBkaXJlY3RpdmUgaWYgeW91J2QgbGlrZSB0byBjcmVhdGUgYW5kIG1hbmFnZSBhIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSBkaXJlY3RseS5cbiAgICAgKiBTaW1wbHkgY3JlYXRlIGEge1xcQGxpbmsgRm9ybUNvbnRyb2x9LCBzYXZlIGl0IHRvIHlvdXIgY29tcG9uZW50IGNsYXNzLCBhbmQgcGFzcyBpdCBpbnRvIHRoZVxuICAgICAqIHtcXEBsaW5rIEZvcm1Db250cm9sRGlyZWN0aXZlfS5cbiAgICAgKlxuICAgICAqIFRoaXMgZGlyZWN0aXZlIGlzIGRlc2lnbmVkIHRvIGJlIHVzZWQgYXMgYSBzdGFuZGFsb25lIGNvbnRyb2wuICBVbmxpa2Uge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfSxcbiAgICAgKiBpdCBkb2VzIG5vdCByZXF1aXJlIHRoYXQgeW91ciB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgYmUgcGFydCBvZiBhbnkgcGFyZW50XG4gICAgICoge1xcQGxpbmsgRm9ybUdyb3VwfSwgYW5kIGl0IHdvbid0IGJlIHJlZ2lzdGVyZWQgdG8gYW55IHtcXEBsaW5rIEZvcm1Hcm91cERpcmVjdGl2ZX0gdGhhdFxuICAgICAqIGV4aXN0cyBhYm92ZSBpdC5cbiAgICAgKlxuICAgICAqICoqR2V0IHRoZSB2YWx1ZSoqOiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyBhbHdheXMgc3luY2VkIGFuZCBhdmFpbGFibGUgb24gdGhlXG4gICAgICoge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlLiBTZWUgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIHByb3BlcnRpZXMgaW5cbiAgICAgKiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2x9LlxuICAgICAqXG4gICAgICogKipTZXQgdGhlIHZhbHVlKio6IFlvdSBjYW4gcGFzcyBpbiBhbiBpbml0aWFsIHZhbHVlIHdoZW4gaW5zdGFudGlhdGluZyB0aGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9LFxuICAgICAqIG9yIHlvdSBjYW4gc2V0IGl0IHByb2dyYW1tYXRpY2FsbHkgbGF0ZXIgdXNpbmcge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnNldFZhbHVlfSBvclxuICAgICAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5wYXRjaFZhbHVlfS5cbiAgICAgKlxuICAgICAqICoqTGlzdGVuIHRvIHZhbHVlKio6IElmIHlvdSB3YW50IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCwgeW91IGNhblxuICAgICAqIHN1YnNjcmliZSB0byB0aGUge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnZhbHVlQ2hhbmdlc30gZXZlbnQuICBZb3UgY2FuIGFsc28gbGlzdGVuIHRvXG4gICAgICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnN0YXR1c0NoYW5nZXN9IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHZhbGlkYXRpb24gc3RhdHVzIGlzXG4gICAgICogcmUtY2FsY3VsYXRlZC5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlXG4gICAgICpcbiAgICAgKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9zaW1wbGVGb3JtQ29udHJvbC9zaW1wbGVfZm9ybV9jb250cm9sX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAqXG4gICAgICogKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICAgICAqXG4gICAgICogKiAqKk5nTW9kdWxlKio6IGBSZWFjdGl2ZUZvcm1zTW9kdWxlYFxuICAgICAqXG4gICAgICogIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBGb3JtQ29udHJvbERpcmVjdGl2ZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQ5KEZvcm1Db250cm9sRGlyZWN0aXZlLCBfc3VwZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICAgICAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVBY2Nlc3NvcnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEZvcm1Db250cm9sRGlyZWN0aXZlKHZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9ycywgdmFsdWVBY2Nlc3NvcnMpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB0aGlzLl9yYXdWYWxpZGF0b3JzID0gdmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVBY2Nlc3NvciA9IHNlbGVjdFZhbHVlQWNjZXNzb3IodGhpcywgdmFsdWVBY2Nlc3NvcnMpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiaXNEaXNhYmxlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoaXNEaXNhYmxlZCkgeyBSZWFjdGl2ZUVycm9ycy5kaXNhYmxlZEF0dHJXYXJuaW5nKCk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzQ29udHJvbENoYW5nZWQoY2hhbmdlcykpIHtcbiAgICAgICAgICAgICAgICBzZXRVcENvbnRyb2wodGhpcy5mb3JtLCB0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250cm9sLmRpc2FibGVkICYmIHRoaXMudmFsdWVBY2Nlc3Nvci5zZXREaXNhYmxlZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVBY2Nlc3Nvci5zZXREaXNhYmxlZFN0YXRlKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdGhpcy52aWV3TW9kZWwpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKHRoaXMubW9kZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwidmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl9yYXdWYWxpZGF0b3JzKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiYXN5bmNWYWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9yYXdBc3luY1ZhbGlkYXRvcnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiY29udHJvbFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5mb3JtOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gbmV3VmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZS52aWV3VG9Nb2RlbFVwZGF0ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlLmVtaXQobmV3VmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUuX2lzQ29udHJvbENoYW5nZWQgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Zvcm0nKTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybUNvbnRyb2xEaXJlY3RpdmUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnW2Zvcm1Db250cm9sXScsIHByb3ZpZGVyczogW2Zvcm1Db250cm9sQmluZGluZyQxXSwgZXhwb3J0QXM6ICduZ0Zvcm0nIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgRm9ybUNvbnRyb2xEaXJlY3RpdmUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxVRV9BQ0NFU1NPUixdIH0sXSB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICBGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICdmb3JtJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWydmb3JtQ29udHJvbCcsXSB9LF0sXG4gICAgICAgICAgICAnbW9kZWwnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ25nTW9kZWwnLF0gfSxdLFxuICAgICAgICAgICAgJ3VwZGF0ZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3V0cHV0LCBhcmdzOiBbJ25nTW9kZWxDaGFuZ2UnLF0gfSxdLFxuICAgICAgICAgICAgJ2lzRGlzYWJsZWQnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ2Rpc2FibGVkJyxdIH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEZvcm1Db250cm9sRGlyZWN0aXZlO1xuICAgIH0oTmdDb250cm9sKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQxMSA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIGZvcm1EaXJlY3RpdmVQcm92aWRlciQxID0ge1xuICAgICAgICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIEZvcm1Hcm91cERpcmVjdGl2ZTsgfSlcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFxcQHdoYXRJdERvZXMgQmluZHMgYW4gZXhpc3Rpbmcge1xcQGxpbmsgRm9ybUdyb3VwfSB0byBhIERPTSBlbGVtZW50LlxuICAgICAqXG4gICAgICogXFxAaG93VG9Vc2VcbiAgICAgKlxuICAgICAqIFRoaXMgZGlyZWN0aXZlIGFjY2VwdHMgYW4gZXhpc3Rpbmcge1xcQGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZS4gSXQgd2lsbCB0aGVuIHVzZSB0aGlzXG4gICAgICoge1xcQGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZSB0byBtYXRjaCBhbnkgY2hpbGQge1xcQGxpbmsgRm9ybUNvbnRyb2x9LCB7XFxAbGluayBGb3JtR3JvdXB9LFxuICAgICAqIGFuZCB7XFxAbGluayBGb3JtQXJyYXl9IGluc3RhbmNlcyB0byBjaGlsZCB7XFxAbGluayBGb3JtQ29udHJvbE5hbWV9LCB7XFxAbGluayBGb3JtR3JvdXBOYW1lfSxcbiAgICAgKiBhbmQge1xcQGxpbmsgRm9ybUFycmF5TmFtZX0gZGlyZWN0aXZlcy5cbiAgICAgKlxuICAgICAqICoqU2V0IHZhbHVlKio6IFlvdSBjYW4gc2V0IHRoZSBmb3JtJ3MgaW5pdGlhbCB2YWx1ZSB3aGVuIGluc3RhbnRpYXRpbmcgdGhlXG4gICAgICoge1xcQGxpbmsgRm9ybUdyb3VwfSwgb3IgeW91IGNhbiBzZXQgaXQgcHJvZ3JhbW1hdGljYWxseSBsYXRlciB1c2luZyB0aGUge1xcQGxpbmsgRm9ybUdyb3VwfSdzXG4gICAgICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnNldFZhbHVlfSBvciB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wucGF0Y2hWYWx1ZX0gbWV0aG9kcy5cbiAgICAgKlxuICAgICAqICoqTGlzdGVuIHRvIHZhbHVlKio6IElmIHlvdSB3YW50IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSB2YWx1ZSBvZiB0aGUgZm9ybSwgeW91IGNhbiBzdWJzY3JpYmVcbiAgICAgKiB0byB0aGUge1xcQGxpbmsgRm9ybUdyb3VwfSdzIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC52YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvIGxpc3RlbiB0b1xuICAgICAqIGl0cyB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuc3RhdHVzQ2hhbmdlc30gZXZlbnQgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdmFsaWRhdGlvbiBzdGF0dXMgaXNcbiAgICAgKiByZS1jYWxjdWxhdGVkLlxuICAgICAqXG4gICAgICogRnVydGhlcm1vcmUsIHlvdSBjYW4gbGlzdGVuIHRvIHRoZSBkaXJlY3RpdmUncyBgbmdTdWJtaXRgIGV2ZW50IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHVzZXIgaGFzXG4gICAgICogdHJpZ2dlcmVkIGEgZm9ybSBzdWJtaXNzaW9uLiBUaGUgYG5nU3VibWl0YCBldmVudCB3aWxsIGJlIGVtaXR0ZWQgd2l0aCB0aGUgb3JpZ2luYWwgZm9ybVxuICAgICAqIHN1Ym1pc3Npb24gZXZlbnQuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAqXG4gICAgICogSW4gdGhpcyBleGFtcGxlLCB3ZSBjcmVhdGUgZm9ybSBjb250cm9scyBmb3IgZmlyc3QgbmFtZSBhbmQgbGFzdCBuYW1lLlxuICAgICAqXG4gICAgICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlRm9ybUdyb3VwL3NpbXBsZV9mb3JtX2dyb3VwX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAqXG4gICAgICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAgICAgKlxuICAgICAqICoqTmdNb2R1bGUqKjoge1xcQGxpbmsgUmVhY3RpdmVGb3Jtc01vZHVsZX1cbiAgICAgKlxuICAgICAqICBcXEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgRm9ybUdyb3VwRGlyZWN0aXZlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDExKEZvcm1Hcm91cERpcmVjdGl2ZSwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gX3ZhbGlkYXRvcnNcbiAgICAgICAgICogQHBhcmFtIHs/fSBfYXN5bmNWYWxpZGF0b3JzXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBGb3JtR3JvdXBEaXJlY3RpdmUoX3ZhbGlkYXRvcnMsIF9hc3luY1ZhbGlkYXRvcnMpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fdmFsaWRhdG9ycyA9IF92YWxpZGF0b3JzO1xuICAgICAgICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0b3JzID0gX2FzeW5jVmFsaWRhdG9ycztcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmVzID0gW107XG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5uZ1N1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrRm9ybVByZXNlbnQoKTtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdmb3JtJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVWYWxpZGF0b3JzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9tVmFsdWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVSZWdpc3RyYXRpb25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcInN1Ym1pdHRlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc3VibWl0dGVkOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiZm9ybURpcmVjdGl2ZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcImNvbnRyb2xcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZm9ybTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcInBhdGhcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLmFkZENvbnRyb2wgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjdHJsID0gdGhpcy5mb3JtLmdldChkaXIucGF0aCk7XG4gICAgICAgICAgICBzZXRVcENvbnRyb2woY3RybCwgZGlyKTtcbiAgICAgICAgICAgIGN0cmwudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZXMucHVzaChkaXIpO1xuICAgICAgICAgICAgcmV0dXJuIGN0cmw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5nZXRDb250cm9sID0gZnVuY3Rpb24gKGRpcikgeyByZXR1cm4gKHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLnJlbW92ZUNvbnRyb2wgPSBmdW5jdGlvbiAoZGlyKSB7IExpc3RXcmFwcGVyLnJlbW92ZSh0aGlzLmRpcmVjdGl2ZXMsIGRpcik7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5hZGRGb3JtR3JvdXAgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjdHJsID0gdGhpcy5mb3JtLmdldChkaXIucGF0aCk7XG4gICAgICAgICAgICBzZXRVcEZvcm1Db250YWluZXIoY3RybCwgZGlyKTtcbiAgICAgICAgICAgIGN0cmwudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5yZW1vdmVGb3JtR3JvdXAgPSBmdW5jdGlvbiAoZGlyKSB7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5nZXRGb3JtR3JvdXAgPSBmdW5jdGlvbiAoZGlyKSB7IHJldHVybiAodGhpcy5mb3JtLmdldChkaXIucGF0aCkpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuYWRkRm9ybUFycmF5ID0gZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY3RybCA9IHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpO1xuICAgICAgICAgICAgc2V0VXBGb3JtQ29udGFpbmVyKGN0cmwsIGRpcik7XG4gICAgICAgICAgICBjdHJsLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUucmVtb3ZlRm9ybUFycmF5ID0gZnVuY3Rpb24gKGRpcikgeyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuZ2V0Rm9ybUFycmF5ID0gZnVuY3Rpb24gKGRpcikgeyByZXR1cm4gKHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUudXBkYXRlTW9kZWwgPSBmdW5jdGlvbiAoZGlyLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY3RybCA9ICh0aGlzLmZvcm0uZ2V0KGRpci5wYXRoKSk7XG4gICAgICAgICAgICBjdHJsLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gJGV2ZW50XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgdGhpcy5fc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubmdTdWJtaXQuZW1pdCgkZXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUub25SZXNldCA9IGZ1bmN0aW9uICgpIHsgdGhpcy5yZXNldEZvcm0oKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLnJlc2V0Rm9ybSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHsgdmFsdWUgPSB1bmRlZmluZWQ7IH1cbiAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl9zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLl91cGRhdGVEb21WYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbmV3Q3RybCA9IF90aGlzLmZvcm0uZ2V0KGRpci5wYXRoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlyLl9jb250cm9sICE9PSBuZXdDdHJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFuVXBDb250cm9sKGRpci5fY29udHJvbCwgZGlyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0N0cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVcENvbnRyb2wobmV3Q3RybCwgZGlyKTtcbiAgICAgICAgICAgICAgICAgICAgZGlyLl9jb250cm9sID0gbmV3Q3RybDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5fdXBkYXRlVHJlZVZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLl91cGRhdGVSZWdpc3RyYXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuZm9ybS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX3VwZGF0ZURvbVZhbHVlKCk7IH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuX29sZEZvcm0pXG4gICAgICAgICAgICAgICAgdGhpcy5fb2xkRm9ybS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgICAgIHRoaXMuX29sZEZvcm0gPSB0aGlzLmZvcm07XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5fdXBkYXRlVmFsaWRhdG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHN5bmMgPSBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl92YWxpZGF0b3JzKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybS52YWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2UoW3RoaXMuZm9ybS52YWxpZGF0b3IsIHN5bmNdKTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGFzeW5jID0gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9hc3luY1ZhbGlkYXRvcnMpO1xuICAgICAgICAgICAgdGhpcy5mb3JtLmFzeW5jVmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlQXN5bmMoW3RoaXMuZm9ybS5hc3luY1ZhbGlkYXRvciwgYXN5bmNdKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLl9jaGVja0Zvcm1QcmVzZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgICAgICBSZWFjdGl2ZUVycm9ycy5taXNzaW5nRm9ybUV4Y2VwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ1tmb3JtR3JvdXBdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW2Zvcm1EaXJlY3RpdmVQcm92aWRlciQxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJyhzdWJtaXQpJzogJ29uU3VibWl0KCRldmVudCknLCAnKHJlc2V0KSc6ICdvblJlc2V0KCknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRBczogJ25nRm9ybSdcbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICdmb3JtJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWydmb3JtR3JvdXAnLF0gfSxdLFxuICAgICAgICAgICAgJ25nU3VibWl0JzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PdXRwdXQgfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRm9ybUdyb3VwRGlyZWN0aXZlO1xuICAgIH0oQ29udHJvbENvbnRhaW5lcikpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkMTIgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBmb3JtR3JvdXBOYW1lUHJvdmlkZXIgPSB7XG4gICAgICAgIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gRm9ybUdyb3VwTmFtZTsgfSlcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFxcQHdoYXRJdERvZXMgU3luY3MgYSBuZXN0ZWQge1xcQGxpbmsgRm9ybUdyb3VwfSB0byBhIERPTSBlbGVtZW50LlxuICAgICAqXG4gICAgICogXFxAaG93VG9Vc2VcbiAgICAgKlxuICAgICAqIFRoaXMgZGlyZWN0aXZlIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBhIHBhcmVudCB7XFxAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9IChzZWxlY3RvcjpcbiAgICAgKiBgW2Zvcm1Hcm91cF1gKS5cbiAgICAgKlxuICAgICAqIEl0IGFjY2VwdHMgdGhlIHN0cmluZyBuYW1lIG9mIHRoZSBuZXN0ZWQge1xcQGxpbmsgRm9ybUdyb3VwfSB5b3Ugd2FudCB0byBsaW5rLCBhbmRcbiAgICAgKiB3aWxsIGxvb2sgZm9yIGEge1xcQGxpbmsgRm9ybUdyb3VwfSByZWdpc3RlcmVkIHdpdGggdGhhdCBuYW1lIGluIHRoZSBwYXJlbnRcbiAgICAgKiB7XFxAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlIHlvdSBwYXNzZWQgaW50byB7XFxAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9LlxuICAgICAqXG4gICAgICogTmVzdGVkIGZvcm0gZ3JvdXBzIGNhbiBjb21lIGluIGhhbmR5IHdoZW4geW91IHdhbnQgdG8gdmFsaWRhdGUgYSBzdWItZ3JvdXAgb2YgYVxuICAgICAqIGZvcm0gc2VwYXJhdGVseSBmcm9tIHRoZSByZXN0IG9yIHdoZW4geW91J2QgbGlrZSB0byBncm91cCB0aGUgdmFsdWVzIG9mIGNlcnRhaW5cbiAgICAgKiBjb250cm9scyBpbnRvIHRoZWlyIG93biBuZXN0ZWQgb2JqZWN0LlxuICAgICAqXG4gICAgICogKipBY2Nlc3MgdGhlIGdyb3VwKio6IFlvdSBjYW4gYWNjZXNzIHRoZSBhc3NvY2lhdGVkIHtcXEBsaW5rIEZvcm1Hcm91cH0gdXNpbmcgdGhlXG4gICAgICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLmdldH0gbWV0aG9kLiBFeDogYHRoaXMuZm9ybS5nZXQoJ25hbWUnKWAuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIGFsc28gYWNjZXNzIGluZGl2aWR1YWwgY29udHJvbHMgd2l0aGluIHRoZSBncm91cCB1c2luZyBkb3Qgc3ludGF4LlxuICAgICAqIEV4OiBgdGhpcy5mb3JtLmdldCgnbmFtZS5maXJzdCcpYFxuICAgICAqXG4gICAgICogKipHZXQgdGhlIHZhbHVlKio6IHRoZSBgdmFsdWVgIHByb3BlcnR5IGlzIGFsd2F5cyBzeW5jZWQgYW5kIGF2YWlsYWJsZSBvbiB0aGVcbiAgICAgKiB7XFxAbGluayBGb3JtR3JvdXB9LiBTZWUgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIHByb3BlcnRpZXMgaW4ge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sfS5cbiAgICAgKlxuICAgICAqICoqU2V0IHRoZSB2YWx1ZSoqOiBZb3UgY2FuIHNldCBhbiBpbml0aWFsIHZhbHVlIGZvciBlYWNoIGNoaWxkIGNvbnRyb2wgd2hlbiBpbnN0YW50aWF0aW5nXG4gICAgICogdGhlIHtcXEBsaW5rIEZvcm1Hcm91cH0sIG9yIHlvdSBjYW4gc2V0IGl0IHByb2dyYW1tYXRpY2FsbHkgbGF0ZXIgdXNpbmdcbiAgICAgKiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuc2V0VmFsdWV9IG9yIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5wYXRjaFZhbHVlfS5cbiAgICAgKlxuICAgICAqICoqTGlzdGVuIHRvIHZhbHVlKio6IElmIHlvdSB3YW50IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSB2YWx1ZSBvZiB0aGUgZ3JvdXAsIHlvdSBjYW5cbiAgICAgKiBzdWJzY3JpYmUgdG8gdGhlIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC52YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvIGxpc3RlbiB0b1xuICAgICAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5zdGF0dXNDaGFuZ2VzfSB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB2YWxpZGF0aW9uIHN0YXR1cyBpc1xuICAgICAqIHJlLWNhbGN1bGF0ZWQuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAqXG4gICAgICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvbmVzdGVkRm9ybUdyb3VwL25lc3RlZF9mb3JtX2dyb3VwX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAqXG4gICAgICogKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICAgICAqXG4gICAgICogKiAqKk5nTW9kdWxlKio6IGBSZWFjdGl2ZUZvcm1zTW9kdWxlYFxuICAgICAqXG4gICAgICogXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIEZvcm1Hcm91cE5hbWUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkMTIoRm9ybUdyb3VwTmFtZSwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gcGFyZW50XG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAgICAgKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gRm9ybUdyb3VwTmFtZShwYXJlbnQsIHZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9ycykge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0b3JzID0gdmFsaWRhdG9ycztcbiAgICAgICAgICAgIHRoaXMuX2FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cE5hbWUucHJvdG90eXBlLl9jaGVja1BhcmVudFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX2hhc0ludmFsaWRQYXJlbnQodGhpcy5fcGFyZW50KSkge1xuICAgICAgICAgICAgICAgIFJlYWN0aXZlRXJyb3JzLmdyb3VwUGFyZW50RXhjZXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1Hcm91cE5hbWUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnW2Zvcm1Hcm91cE5hbWVdJywgcHJvdmlkZXJzOiBbZm9ybUdyb3VwTmFtZVByb3ZpZGVyXSB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIEZvcm1Hcm91cE5hbWUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkhvc3QgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNraXBTZWxmIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICBGb3JtR3JvdXBOYW1lLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ25hbWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ2Zvcm1Hcm91cE5hbWUnLF0gfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRm9ybUdyb3VwTmFtZTtcbiAgICB9KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlKSk7XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZm9ybUFycmF5TmFtZVByb3ZpZGVyID0ge1xuICAgICAgICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIEZvcm1BcnJheU5hbWU7IH0pXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBcXEB3aGF0SXREb2VzIFN5bmNzIGEgbmVzdGVkIHtcXEBsaW5rIEZvcm1BcnJheX0gdG8gYSBET00gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFxcQGhvd1RvVXNlXG4gICAgICpcbiAgICAgKiBUaGlzIGRpcmVjdGl2ZSBpcyBkZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggYSBwYXJlbnQge1xcQGxpbmsgRm9ybUdyb3VwRGlyZWN0aXZlfSAoc2VsZWN0b3I6XG4gICAgICogYFtmb3JtR3JvdXBdYCkuXG4gICAgICpcbiAgICAgKiBJdCBhY2NlcHRzIHRoZSBzdHJpbmcgbmFtZSBvZiB0aGUgbmVzdGVkIHtcXEBsaW5rIEZvcm1BcnJheX0geW91IHdhbnQgdG8gbGluaywgYW5kXG4gICAgICogd2lsbCBsb29rIGZvciBhIHtcXEBsaW5rIEZvcm1BcnJheX0gcmVnaXN0ZXJlZCB3aXRoIHRoYXQgbmFtZSBpbiB0aGUgcGFyZW50XG4gICAgICoge1xcQGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZSB5b3UgcGFzc2VkIGludG8ge1xcQGxpbmsgRm9ybUdyb3VwRGlyZWN0aXZlfS5cbiAgICAgKlxuICAgICAqIE5lc3RlZCBmb3JtIGFycmF5cyBjYW4gY29tZSBpbiBoYW5keSB3aGVuIHlvdSBoYXZlIGEgZ3JvdXAgb2YgZm9ybSBjb250cm9scyBidXRcbiAgICAgKiB5b3UncmUgbm90IHN1cmUgaG93IG1hbnkgdGhlcmUgd2lsbCBiZS4gRm9ybSBhcnJheXMgYWxsb3cgeW91IHRvIGNyZWF0ZSBuZXdcbiAgICAgKiBmb3JtIGNvbnRyb2xzIGR5bmFtaWNhbGx5LlxuICAgICAqXG4gICAgICogKipBY2Nlc3MgdGhlIGFycmF5Kio6IFlvdSBjYW4gYWNjZXNzIHRoZSBhc3NvY2lhdGVkIHtcXEBsaW5rIEZvcm1BcnJheX0gdXNpbmcgdGhlXG4gICAgICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLmdldH0gbWV0aG9kIG9uIHRoZSBwYXJlbnQge1xcQGxpbmsgRm9ybUdyb3VwfS5cbiAgICAgKiBFeDogYHRoaXMuZm9ybS5nZXQoJ2NpdGllcycpYC5cbiAgICAgKlxuICAgICAqICoqR2V0IHRoZSB2YWx1ZSoqOiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyBhbHdheXMgc3luY2VkIGFuZCBhdmFpbGFibGUgb24gdGhlXG4gICAgICoge1xcQGxpbmsgRm9ybUFycmF5fS4gU2VlIGEgZnVsbCBsaXN0IG9mIGF2YWlsYWJsZSBwcm9wZXJ0aWVzIGluIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0uXG4gICAgICpcbiAgICAgKiAqKlNldCB0aGUgdmFsdWUqKjogWW91IGNhbiBzZXQgYW4gaW5pdGlhbCB2YWx1ZSBmb3IgZWFjaCBjaGlsZCBjb250cm9sIHdoZW4gaW5zdGFudGlhdGluZ1xuICAgICAqIHRoZSB7XFxAbGluayBGb3JtQXJyYXl9LCBvciB5b3UgY2FuIHNldCB0aGUgdmFsdWUgcHJvZ3JhbW1hdGljYWxseSBsYXRlciB1c2luZyB0aGVcbiAgICAgKiB7XFxAbGluayBGb3JtQXJyYXl9J3Mge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnNldFZhbHVlfSBvciB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wucGF0Y2hWYWx1ZX1cbiAgICAgKiBtZXRob2RzLlxuICAgICAqXG4gICAgICogKipMaXN0ZW4gdG8gdmFsdWUqKjogSWYgeW91IHdhbnQgdG8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHZhbHVlIG9mIHRoZSBhcnJheSwgeW91IGNhblxuICAgICAqIHN1YnNjcmliZSB0byB0aGUge1xcQGxpbmsgRm9ybUFycmF5fSdzIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC52YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvXG4gICAgICogbGlzdGVuIHRvIGl0cyB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuc3RhdHVzQ2hhbmdlc30gZXZlbnQgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdmFsaWRhdGlvblxuICAgICAqIHN0YXR1cyBpcyByZS1jYWxjdWxhdGVkLlxuICAgICAqXG4gICAgICogKipBZGQgbmV3IGNvbnRyb2xzKio6IFlvdSBjYW4gYWRkIG5ldyBjb250cm9scyB0byB0aGUge1xcQGxpbmsgRm9ybUFycmF5fSBkeW5hbWljYWxseSBieVxuICAgICAqIGNhbGxpbmcgaXRzIHtcXEBsaW5rIEZvcm1BcnJheS5wdXNofSBtZXRob2QuXG4gICAgICogIEV4OiBgdGhpcy5mb3JtLmdldCgnY2l0aWVzJykucHVzaChuZXcgRm9ybUNvbnRyb2woKSk7YFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL25lc3RlZEZvcm1BcnJheS9uZXN0ZWRfZm9ybV9hcnJheV9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgKlxuICAgICAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAgICAgKlxuICAgICAqICogKipOZ01vZHVsZSoqOiBgUmVhY3RpdmVGb3Jtc01vZHVsZWBcbiAgICAgKlxuICAgICAqIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBGb3JtQXJyYXlOYW1lID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDEyKEZvcm1BcnJheU5hbWUsIF9zdXBlcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHBhcmVudFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgICAgICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvcnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEZvcm1BcnJheU5hbWUocGFyZW50LCB2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnMpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgdGhpcy5fdmFsaWRhdG9ycyA9IHZhbGlkYXRvcnM7XG4gICAgICAgICAgICB0aGlzLl9hc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXlOYW1lLnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrUGFyZW50VHlwZSgpO1xuICAgICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLmFkZEZvcm1BcnJheSh0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXlOYW1lLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1EaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVtb3ZlRm9ybUFycmF5KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUFycmF5TmFtZS5wcm90b3R5cGUsIFwiY29udHJvbFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5mb3JtRGlyZWN0aXZlLmdldEZvcm1BcnJheSh0aGlzKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQXJyYXlOYW1lLnByb3RvdHlwZSwgXCJmb3JtRGlyZWN0aXZlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudCA/ICh0aGlzLl9wYXJlbnQuZm9ybURpcmVjdGl2ZSkgOiBudWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQXJyYXlOYW1lLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb250cm9sUGF0aCh0aGlzLm5hbWUsIHRoaXMuX3BhcmVudCk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUFycmF5TmFtZS5wcm90b3R5cGUsIFwidmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl92YWxpZGF0b3JzKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQXJyYXlOYW1lLnByb3RvdHlwZSwgXCJhc3luY1ZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9hc3luY1ZhbGlkYXRvcnMpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXlOYW1lLnByb3RvdHlwZS5fY2hlY2tQYXJlbnRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF9oYXNJbnZhbGlkUGFyZW50KHRoaXMuX3BhcmVudCkpIHtcbiAgICAgICAgICAgICAgICBSZWFjdGl2ZUVycm9ycy5hcnJheVBhcmVudEV4Y2VwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtQXJyYXlOYW1lLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbeyBzZWxlY3RvcjogJ1tmb3JtQXJyYXlOYW1lXScsIHByb3ZpZGVyczogW2Zvcm1BcnJheU5hbWVQcm92aWRlcl0gfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBGb3JtQXJyYXlOYW1lLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBDb250cm9sQ29udGFpbmVyLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5Ib3N0IH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5Ta2lwU2VsZiB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgRm9ybUFycmF5TmFtZS5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICduYW1lJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWydmb3JtQXJyYXlOYW1lJyxdIH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEZvcm1BcnJheU5hbWU7XG4gICAgfShDb250cm9sQ29udGFpbmVyKSk7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBwYXJlbnRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9oYXNJbnZhbGlkUGFyZW50KHBhcmVudCkge1xuICAgICAgICByZXR1cm4gIShwYXJlbnQgaW5zdGFuY2VvZiBGb3JtR3JvdXBOYW1lKSAmJiAhKHBhcmVudCBpbnN0YW5jZW9mIEZvcm1Hcm91cERpcmVjdGl2ZSkgJiZcbiAgICAgICAgICAgICEocGFyZW50IGluc3RhbmNlb2YgRm9ybUFycmF5TmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkMTAgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb250cm9sTmFtZUJpbmRpbmcgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5nQ29udHJvbCxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBGb3JtQ29udHJvbE5hbWU7IH0pXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBcXEB3aGF0SXREb2VzIFN5bmNzIGEge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluIGFuIGV4aXN0aW5nIHtcXEBsaW5rIEZvcm1Hcm91cH0gdG8gYSBmb3JtIGNvbnRyb2xcbiAgICAgKiBlbGVtZW50IGJ5IG5hbWUuXG4gICAgICpcbiAgICAgKiBJbiBvdGhlciB3b3JkcywgdGhpcyBkaXJlY3RpdmUgZW5zdXJlcyB0aGF0IGFueSB2YWx1ZXMgd3JpdHRlbiB0byB0aGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9XG4gICAgICogaW5zdGFuY2UgcHJvZ3JhbW1hdGljYWxseSB3aWxsIGJlIHdyaXR0ZW4gdG8gdGhlIERPTSBlbGVtZW50IChtb2RlbCAtPiB2aWV3KS4gQ29udmVyc2VseSxcbiAgICAgKiBhbnkgdmFsdWVzIHdyaXR0ZW4gdG8gdGhlIERPTSBlbGVtZW50IHRocm91Z2ggdXNlciBpbnB1dCB3aWxsIGJlIHJlZmxlY3RlZCBpbiB0aGVcbiAgICAgKiB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgKHZpZXcgLT4gbW9kZWwpLlxuICAgICAqXG4gICAgICogXFxAaG93VG9Vc2VcbiAgICAgKlxuICAgICAqIFRoaXMgZGlyZWN0aXZlIGlzIGRlc2lnbmVkIHRvIGJlIHVzZWQgd2l0aCBhIHBhcmVudCB7XFxAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9IChzZWxlY3RvcjpcbiAgICAgKiBgW2Zvcm1Hcm91cF1gKS5cbiAgICAgKlxuICAgICAqIEl0IGFjY2VwdHMgdGhlIHN0cmluZyBuYW1lIG9mIHRoZSB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgeW91IHdhbnQgdG9cbiAgICAgKiBsaW5rLCBhbmQgd2lsbCBsb29rIGZvciBhIHtcXEBsaW5rIEZvcm1Db250cm9sfSByZWdpc3RlcmVkIHdpdGggdGhhdCBuYW1lIGluIHRoZVxuICAgICAqIGNsb3Nlc3Qge1xcQGxpbmsgRm9ybUdyb3VwfSBvciB7XFxAbGluayBGb3JtQXJyYXl9IGFib3ZlIGl0LlxuICAgICAqXG4gICAgICogKipBY2Nlc3MgdGhlIGNvbnRyb2wqKjogWW91IGNhbiBhY2Nlc3MgdGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfSBhc3NvY2lhdGVkIHdpdGhcbiAgICAgKiB0aGlzIGRpcmVjdGl2ZSBieSB1c2luZyB0aGUge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLmdldH0gbWV0aG9kLlxuICAgICAqIEV4OiBgdGhpcy5mb3JtLmdldCgnZmlyc3QnKTtgXG4gICAgICpcbiAgICAgKiAqKkdldCB2YWx1ZSoqOiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyBhbHdheXMgc3luY2VkIGFuZCBhdmFpbGFibGUgb24gdGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfS5cbiAgICAgKiBTZWUgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIHByb3BlcnRpZXMgaW4ge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sfS5cbiAgICAgKlxuICAgICAqICAqKlNldCB2YWx1ZSoqOiBZb3UgY2FuIHNldCBhbiBpbml0aWFsIHZhbHVlIGZvciB0aGUgY29udHJvbCB3aGVuIGluc3RhbnRpYXRpbmcgdGhlXG4gICAgICogIHtcXEBsaW5rIEZvcm1Db250cm9sfSwgb3IgeW91IGNhbiBzZXQgaXQgcHJvZ3JhbW1hdGljYWxseSBsYXRlciB1c2luZ1xuICAgICAqICB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuc2V0VmFsdWV9IG9yIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5wYXRjaFZhbHVlfS5cbiAgICAgKlxuICAgICAqICoqTGlzdGVuIHRvIHZhbHVlKio6IElmIHlvdSB3YW50IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCwgeW91IGNhblxuICAgICAqIHN1YnNjcmliZSB0byB0aGUge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnZhbHVlQ2hhbmdlc30gZXZlbnQuICBZb3UgY2FuIGFsc28gbGlzdGVuIHRvXG4gICAgICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnN0YXR1c0NoYW5nZXN9IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHZhbGlkYXRpb24gc3RhdHVzIGlzXG4gICAgICogcmUtY2FsY3VsYXRlZC5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlXG4gICAgICpcbiAgICAgKiBJbiB0aGlzIGV4YW1wbGUsIHdlIGNyZWF0ZSBmb3JtIGNvbnRyb2xzIGZvciBmaXJzdCBuYW1lIGFuZCBsYXN0IG5hbWUuXG4gICAgICpcbiAgICAgKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9zaW1wbGVGb3JtR3JvdXAvc2ltcGxlX2Zvcm1fZ3JvdXBfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAgICpcbiAgICAgKiBUbyBzZWUgYGZvcm1Db250cm9sTmFtZWAgZXhhbXBsZXMgd2l0aCBkaWZmZXJlbnQgZm9ybSBjb250cm9sIHR5cGVzLCBzZWU6XG4gICAgICpcbiAgICAgKiAqIFJhZGlvIGJ1dHRvbnM6IHtcXEBsaW5rIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3J9XG4gICAgICogKiBTZWxlY3RzOiB7XFxAbGluayBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcn1cbiAgICAgKlxuICAgICAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gICAgICpcbiAgICAgKiAqKk5nTW9kdWxlKio6IHtcXEBsaW5rIFJlYWN0aXZlRm9ybXNNb2R1bGV9XG4gICAgICpcbiAgICAgKiAgXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIEZvcm1Db250cm9sTmFtZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQxMChGb3JtQ29udHJvbE5hbWUsIF9zdXBlcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHBhcmVudFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgICAgICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvcnNcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZUFjY2Vzc29yc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gRm9ybUNvbnRyb2xOYW1lKHBhcmVudCwgdmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzLCB2YWx1ZUFjY2Vzc29ycykge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9hZGRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLl9yYXdWYWxpZGF0b3JzID0gdmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVBY2Nlc3NvciA9IHNlbGVjdFZhbHVlQWNjZXNzb3IodGhpcywgdmFsdWVBY2Nlc3NvcnMpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLCBcImlzRGlzYWJsZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHsgUmVhY3RpdmVFcnJvcnMuZGlzYWJsZWRBdHRyV2FybmluZygpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2FkZGVkKVxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFVwQ29udHJvbCgpO1xuICAgICAgICAgICAgaWYgKGlzUHJvcGVydHlVcGRhdGVkKGNoYW5nZXMsIHRoaXMudmlld01vZGVsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUudXBkYXRlTW9kZWwodGhpcywgdGhpcy5tb2RlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1EaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVtb3ZlQ29udHJvbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gbmV3VmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUudmlld1RvTW9kZWxVcGRhdGUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmlld01vZGVsID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KG5ld1ZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUsIFwicGF0aFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udHJvbFBhdGgodGhpcy5uYW1lLCB0aGlzLl9wYXJlbnQpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUsIFwiZm9ybURpcmVjdGl2ZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcGFyZW50ID8gdGhpcy5fcGFyZW50LmZvcm1EaXJlY3RpdmUgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUsIFwidmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl9yYXdWYWxpZGF0b3JzKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLCBcImFzeW5jVmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jb250cm9sOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLl9jaGVja1BhcmVudFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBGb3JtR3JvdXBOYW1lKSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgUmVhY3RpdmVFcnJvcnMubmdNb2RlbEdyb3VwRXhjZXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIEZvcm1Hcm91cE5hbWUpICYmICEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgRm9ybUdyb3VwRGlyZWN0aXZlKSAmJlxuICAgICAgICAgICAgICAgICEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgRm9ybUFycmF5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICBSZWFjdGl2ZUVycm9ycy5jb250cm9sUGFyZW50RXhjZXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZS5fc2V0VXBDb250cm9sID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tQYXJlbnRUeXBlKCk7XG4gICAgICAgICAgICB0aGlzLl9jb250cm9sID0gdGhpcy5mb3JtRGlyZWN0aXZlLmFkZENvbnRyb2wodGhpcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sLmRpc2FibGVkICYmIHRoaXMudmFsdWVBY2Nlc3Nvci5zZXREaXNhYmxlZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9hZGRlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1Db250cm9sTmFtZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdbZm9ybUNvbnRyb2xOYW1lXScsIHByb3ZpZGVyczogW2NvbnRyb2xOYW1lQmluZGluZ10gfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBGb3JtQ29udHJvbE5hbWUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkhvc3QgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNraXBTZWxmIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMVUVfQUNDRVNTT1IsXSB9LF0gfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgRm9ybUNvbnRyb2xOYW1lLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ25hbWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ2Zvcm1Db250cm9sTmFtZScsXSB9LF0sXG4gICAgICAgICAgICAnbW9kZWwnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ25nTW9kZWwnLF0gfSxdLFxuICAgICAgICAgICAgJ3VwZGF0ZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3V0cHV0LCBhcmdzOiBbJ25nTW9kZWxDaGFuZ2UnLF0gfSxdLFxuICAgICAgICAgICAgJ2lzRGlzYWJsZWQnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ2Rpc2FibGVkJyxdIH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEZvcm1Db250cm9sTmFtZTtcbiAgICB9KE5nQ29udHJvbCkpO1xuXG4gICAgdmFyIF9fZXh0ZW5kcyQxMyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIFJFUVVJUkVEX1ZBTElEQVRPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBSZXF1aXJlZFZhbGlkYXRvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBDSEVDS0JPWF9SRVFVSVJFRF9WQUxJREFUT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIERpcmVjdGl2ZSB0aGF0IGFkZHMgdGhlIGByZXF1aXJlZGAgdmFsaWRhdG9yIHRvIGFueSBjb250cm9scyBtYXJrZWQgd2l0aCB0aGVcbiAgICAgKiBgcmVxdWlyZWRgIGF0dHJpYnV0ZSwgdmlhIHRoZSB7XFxAbGluayBOR19WQUxJREFUT1JTfSBiaW5kaW5nLlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIDxpbnB1dCBuYW1lPVwiZnVsbE5hbWVcIiBuZ01vZGVsIHJlcXVpcmVkPlxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIFJlcXVpcmVkVmFsaWRhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gUmVxdWlyZWRWYWxpZGF0b3IoKSB7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlcXVpcmVkVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJyZXF1aXJlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVxdWlyZWQgPSB2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSBmYWxzZSAmJiBcIlwiICsgdmFsdWUgIT09ICdmYWxzZSc7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29uQ2hhbmdlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJlcXVpcmVkVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1aXJlZCA/IFZhbGlkYXRvcnMucmVxdWlyZWQoYykgOiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmVxdWlyZWRWYWxpZGF0b3IucHJvdG90eXBlLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfTtcbiAgICAgICAgUmVxdWlyZWRWYWxpZGF0b3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJzpub3QoW3R5cGU9Y2hlY2tib3hdKVtyZXF1aXJlZF1bZm9ybUNvbnRyb2xOYW1lXSw6bm90KFt0eXBlPWNoZWNrYm94XSlbcmVxdWlyZWRdW2Zvcm1Db250cm9sXSw6bm90KFt0eXBlPWNoZWNrYm94XSlbcmVxdWlyZWRdW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW1JFUVVJUkVEX1ZBTElEQVRPUl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICdbYXR0ci5yZXF1aXJlZF0nOiAncmVxdWlyZWQgPyBcIlwiIDogbnVsbCcgfVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIFJlcXVpcmVkVmFsaWRhdG9yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgICAgIFJlcXVpcmVkVmFsaWRhdG9yLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ3JlcXVpcmVkJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSZXF1aXJlZFZhbGlkYXRvcjtcbiAgICB9KCkpO1xuICAgIC8qKlxuICAgICAqIEEgRGlyZWN0aXZlIHRoYXQgYWRkcyB0aGUgYHJlcXVpcmVkYCB2YWxpZGF0b3IgdG8gY2hlY2tib3ggY29udHJvbHMgbWFya2VkIHdpdGggdGhlXG4gICAgICogYHJlcXVpcmVkYCBhdHRyaWJ1dGUsIHZpYSB0aGUge1xcQGxpbmsgTkdfVkFMSURBVE9SU30gYmluZGluZy5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImFjdGl2ZVwiIG5nTW9kZWwgcmVxdWlyZWQ+XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBcXEBleHBlcmltZW50YWxcbiAgICAgKi9cbiAgICB2YXIgQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQxMyhDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yKCkge1xuICAgICAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWlyZWQgPyBWYWxpZGF0b3JzLnJlcXVpcmVkVHJ1ZShjKSA6IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W3R5cGU9Y2hlY2tib3hdW3JlcXVpcmVkXVtmb3JtQ29udHJvbE5hbWVdLGlucHV0W3R5cGU9Y2hlY2tib3hdW3JlcXVpcmVkXVtmb3JtQ29udHJvbF0saW5wdXRbdHlwZT1jaGVja2JveF1bcmVxdWlyZWRdW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW0NIRUNLQk9YX1JFUVVJUkVEX1ZBTElEQVRPUl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICdbYXR0ci5yZXF1aXJlZF0nOiAncmVxdWlyZWQgPyBcIlwiIDogbnVsbCcgfVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICAgICAgcmV0dXJuIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3I7XG4gICAgfShSZXF1aXJlZFZhbGlkYXRvcikpO1xuICAgIC8qKlxuICAgICAqIFByb3ZpZGVyIHdoaWNoIGFkZHMge0BsaW5rIE1pbkxlbmd0aFZhbGlkYXRvcn0gdG8ge0BsaW5rIE5HX1ZBTElEQVRPUlN9LlxuICAgICAqXG4gICAgICogIyMgRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIHtAZXhhbXBsZSBjb21tb24vZm9ybXMvdHMvdmFsaWRhdG9ycy92YWxpZGF0b3JzLnRzIHJlZ2lvbj0nbWluJ31cbiAgICAgKi9cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBNSU5fTEVOR1RIX1ZBTElEQVRPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBNaW5MZW5ndGhWYWxpZGF0b3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQSBkaXJlY3RpdmUgd2hpY2ggaW5zdGFsbHMgdGhlIHtcXEBsaW5rIE1pbkxlbmd0aFZhbGlkYXRvcn0gZm9yIGFueSBgZm9ybUNvbnRyb2xOYW1lYCxcbiAgICAgKiBgZm9ybUNvbnRyb2xgLCBvciBjb250cm9sIHdpdGggYG5nTW9kZWxgIHRoYXQgYWxzbyBoYXMgYSBgbWlubGVuZ3RoYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBcXEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgTWluTGVuZ3RoVmFsaWRhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gTWluTGVuZ3RoVmFsaWRhdG9yKCkge1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNoYW5nZXNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE1pbkxlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICAgICAgaWYgKCdtaW5sZW5ndGgnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fb25DaGFuZ2UpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE1pbkxlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWlubGVuZ3RoID09IG51bGwgPyBudWxsIDogdGhpcy5fdmFsaWRhdG9yKGMpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTWluTGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMuX29uQ2hhbmdlID0gZm47IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTWluTGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS5fY3JlYXRlVmFsaWRhdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fdmFsaWRhdG9yID0gVmFsaWRhdG9ycy5taW5MZW5ndGgocGFyc2VJbnQodGhpcy5taW5sZW5ndGgsIDEwKSk7XG4gICAgICAgIH07XG4gICAgICAgIE1pbkxlbmd0aFZhbGlkYXRvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnW21pbmxlbmd0aF1bZm9ybUNvbnRyb2xOYW1lXSxbbWlubGVuZ3RoXVtmb3JtQ29udHJvbF0sW21pbmxlbmd0aF1bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbTUlOX0xFTkdUSF9WQUxJREFUT1JdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnW2F0dHIubWlubGVuZ3RoXSc6ICdtaW5sZW5ndGggPyBtaW5sZW5ndGggOiBudWxsJyB9XG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgTWluTGVuZ3RoVmFsaWRhdG9yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgICAgIE1pbkxlbmd0aFZhbGlkYXRvci5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICdtaW5sZW5ndGgnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0IH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE1pbkxlbmd0aFZhbGlkYXRvcjtcbiAgICB9KCkpO1xuICAgIC8qKlxuICAgICAqIFByb3ZpZGVyIHdoaWNoIGFkZHMge0BsaW5rIE1heExlbmd0aFZhbGlkYXRvcn0gdG8ge0BsaW5rIE5HX1ZBTElEQVRPUlN9LlxuICAgICAqXG4gICAgICogIyMgRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIHtAZXhhbXBsZSBjb21tb24vZm9ybXMvdHMvdmFsaWRhdG9ycy92YWxpZGF0b3JzLnRzIHJlZ2lvbj0nbWF4J31cbiAgICAgKi9cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBNQVhfTEVOR1RIX1ZBTElEQVRPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBNYXhMZW5ndGhWYWxpZGF0b3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQSBkaXJlY3RpdmUgd2hpY2ggaW5zdGFsbHMgdGhlIHtcXEBsaW5rIE1heExlbmd0aFZhbGlkYXRvcn0gZm9yIGFueSBgZm9ybUNvbnRyb2xOYW1lLFxuICAgICAqIGBmb3JtQ29udHJvbGAsXG4gICAgICogb3IgY29udHJvbCB3aXRoIGBuZ01vZGVsYCB0aGF0IGFsc28gaGFzIGEgYG1heGxlbmd0aGAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIE1heExlbmd0aFZhbGlkYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIE1heExlbmd0aFZhbGlkYXRvcigpIHtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBNYXhMZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGlmICgnbWF4bGVuZ3RoJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29uQ2hhbmdlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBNYXhMZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1heGxlbmd0aCAhPSBudWxsID8gdGhpcy5fdmFsaWRhdG9yKGMpIDogbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE1heExlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLl9vbkNoYW5nZSA9IGZuOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE1heExlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUuX2NyZWF0ZVZhbGlkYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRvciA9IFZhbGlkYXRvcnMubWF4TGVuZ3RoKHBhcnNlSW50KHRoaXMubWF4bGVuZ3RoLCAxMCkpO1xuICAgICAgICB9O1xuICAgICAgICBNYXhMZW5ndGhWYWxpZGF0b3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ1ttYXhsZW5ndGhdW2Zvcm1Db250cm9sTmFtZV0sW21heGxlbmd0aF1bZm9ybUNvbnRyb2xdLFttYXhsZW5ndGhdW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW01BWF9MRU5HVEhfVkFMSURBVE9SXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJ1thdHRyLm1heGxlbmd0aF0nOiAnbWF4bGVuZ3RoID8gbWF4bGVuZ3RoIDogbnVsbCcgfVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE1heExlbmd0aFZhbGlkYXRvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgICAgICBNYXhMZW5ndGhWYWxpZGF0b3IucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnbWF4bGVuZ3RoJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBNYXhMZW5ndGhWYWxpZGF0b3I7XG4gICAgfSgpKTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBQQVRURVJOX1ZBTElEQVRPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBQYXR0ZXJuVmFsaWRhdG9yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEEgRGlyZWN0aXZlIHRoYXQgYWRkcyB0aGUgYHBhdHRlcm5gIHZhbGlkYXRvciB0byBhbnkgY29udHJvbHMgbWFya2VkIHdpdGggdGhlXG4gICAgICogYHBhdHRlcm5gIGF0dHJpYnV0ZSwgdmlhIHRoZSB7XFxAbGluayBOR19WQUxJREFUT1JTfSBiaW5kaW5nLiBVc2VzIGF0dHJpYnV0ZSB2YWx1ZVxuICAgICAqIGFzIHRoZSByZWdleCB0byB2YWxpZGF0ZSBDb250cm9sIHZhbHVlIGFnYWluc3QuICBGb2xsb3dzIHBhdHRlcm4gYXR0cmlidXRlXG4gICAgICogc2VtYW50aWNzOyBpLmUuIHJlZ2V4IG11c3QgbWF0Y2ggZW50aXJlIENvbnRyb2wgdmFsdWUuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogPGlucHV0IFtuYW1lXT1cImZ1bGxOYW1lXCIgcGF0dGVybj1cIlthLXpBLVogXSpcIiBuZ01vZGVsPlxuICAgICAqIGBgYFxuICAgICAqIFxcQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBQYXR0ZXJuVmFsaWRhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gUGF0dGVyblZhbGlkYXRvcigpIHtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBQYXR0ZXJuVmFsaWRhdG9yLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICBpZiAoJ3BhdHRlcm4nIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fb25DaGFuZ2UpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFBhdHRlcm5WYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKGMpIHsgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvcihjKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFBhdHRlcm5WYWxpZGF0b3IucHJvdG90eXBlLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBQYXR0ZXJuVmFsaWRhdG9yLnByb3RvdHlwZS5fY3JlYXRlVmFsaWRhdG9yID0gZnVuY3Rpb24gKCkgeyB0aGlzLl92YWxpZGF0b3IgPSBWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5wYXR0ZXJuKTsgfTtcbiAgICAgICAgUGF0dGVyblZhbGlkYXRvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnW3BhdHRlcm5dW2Zvcm1Db250cm9sTmFtZV0sW3BhdHRlcm5dW2Zvcm1Db250cm9sXSxbcGF0dGVybl1bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbUEFUVEVSTl9WQUxJREFUT1JdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnW2F0dHIucGF0dGVybl0nOiAncGF0dGVybiA/IHBhdHRlcm4gOiBudWxsJyB9XG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgUGF0dGVyblZhbGlkYXRvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgICAgICBQYXR0ZXJuVmFsaWRhdG9yLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ3BhdHRlcm4nOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0IH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFBhdHRlcm5WYWxpZGF0b3I7XG4gICAgfSgpKTtcblxuICAgIC8qKlxuICAgICAqIFxcQHdoYXRJdERvZXMgQ3JlYXRlcyBhbiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2x9IGZyb20gYSB1c2VyLXNwZWNpZmllZCBjb25maWd1cmF0aW9uLlxuICAgICAqXG4gICAgICogSXQgaXMgZXNzZW50aWFsbHkgc3ludGFjdGljIHN1Z2FyIHRoYXQgc2hvcnRlbnMgdGhlIGBuZXcgRm9ybUdyb3VwKClgLFxuICAgICAqIGBuZXcgRm9ybUNvbnRyb2woKWAsIGFuZCBgbmV3IEZvcm1BcnJheSgpYCBib2lsZXJwbGF0ZSB0aGF0IGNhbiBidWlsZCB1cCBpbiBsYXJnZXJcbiAgICAgKiBmb3Jtcy5cbiAgICAgKlxuICAgICAqIFxcQGhvd1RvVXNlXG4gICAgICpcbiAgICAgKiBUbyB1c2UsIGluamVjdCBgRm9ybUJ1aWxkZXJgIGludG8geW91ciBjb21wb25lbnQgY2xhc3MuIFlvdSBjYW4gdGhlbiBjYWxsIGl0cyBtZXRob2RzXG4gICAgICogZGlyZWN0bHkuXG4gICAgICpcbiAgICAgKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9mb3JtQnVpbGRlci9mb3JtX2J1aWxkZXJfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAgICpcbiAgICAgKiAgKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICAgICAqXG4gICAgICogICogKipOZ01vZHVsZSoqOiB7XFxAbGluayBSZWFjdGl2ZUZvcm1zTW9kdWxlfVxuICAgICAqXG4gICAgICogXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIEZvcm1CdWlsZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gRm9ybUJ1aWxkZXIoKSB7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdCBhIG5ldyB7XFxAbGluayBGb3JtR3JvdXB9IHdpdGggdGhlIGdpdmVuIG1hcCBvZiBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBWYWxpZCBrZXlzIGZvciB0aGUgYGV4dHJhYCBwYXJhbWV0ZXIgbWFwIGFyZSBgdmFsaWRhdG9yYCBhbmQgYGFzeW5jVmFsaWRhdG9yYC5cbiAgICAgICAgICpcbiAgICAgICAgICogU2VlIHRoZSB7XFxAbGluayBGb3JtR3JvdXB9IGNvbnN0cnVjdG9yIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbHNDb25maWdcbiAgICAgICAgICogQHBhcmFtIHs/PX0gZXh0cmFcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1CdWlsZGVyLnByb3RvdHlwZS5ncm91cCA9IGZ1bmN0aW9uIChjb250cm9sc0NvbmZpZywgZXh0cmEpIHtcbiAgICAgICAgICAgIGlmIChleHRyYSA9PT0gdm9pZCAwKSB7IGV4dHJhID0gbnVsbDsgfVxuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udHJvbHMgPSB0aGlzLl9yZWR1Y2VDb250cm9scyhjb250cm9sc0NvbmZpZyk7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWxpZGF0b3IgPSBpc1ByZXNlbnQoZXh0cmEpID8gZXh0cmFbJ3ZhbGlkYXRvciddIDogbnVsbDtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGFzeW5jVmFsaWRhdG9yID0gaXNQcmVzZW50KGV4dHJhKSA/IGV4dHJhWydhc3luY1ZhbGlkYXRvciddIDogbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKGNvbnRyb2xzLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdCBhIG5ldyB7XFxAbGluayBGb3JtQ29udHJvbH0gd2l0aCB0aGUgZ2l2ZW4gYGZvcm1TdGF0ZWAsYHZhbGlkYXRvcmAsIGFuZFxuICAgICAgICAgKiBgYXN5bmNWYWxpZGF0b3JgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBgZm9ybVN0YXRlYCBjYW4gZWl0aGVyIGJlIGEgc3RhbmRhbG9uZSB2YWx1ZSBmb3IgdGhlIGZvcm0gY29udHJvbCBvciBhbiBvYmplY3RcbiAgICAgICAgICogdGhhdCBjb250YWlucyBib3RoIGEgdmFsdWUgYW5kIGEgZGlzYWJsZWQgc3RhdHVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZvcm1TdGF0ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSB2YWxpZGF0b3JcbiAgICAgICAgICogQHBhcmFtIHs/PX0gYXN5bmNWYWxpZGF0b3JcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1CdWlsZGVyLnByb3RvdHlwZS5jb250cm9sID0gZnVuY3Rpb24gKGZvcm1TdGF0ZSwgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcikge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRvciA9PT0gdm9pZCAwKSB7IHZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmIChhc3luY1ZhbGlkYXRvciA9PT0gdm9pZCAwKSB7IGFzeW5jVmFsaWRhdG9yID0gbnVsbDsgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGb3JtQ29udHJvbChmb3JtU3RhdGUsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0IGEge1xcQGxpbmsgRm9ybUFycmF5fSBmcm9tIHRoZSBnaXZlbiBgY29udHJvbHNDb25maWdgIGFycmF5IG9mXG4gICAgICAgICAqIGNvbmZpZ3VyYXRpb24sIHdpdGggdGhlIGdpdmVuIG9wdGlvbmFsIGB2YWxpZGF0b3JgIGFuZCBgYXN5bmNWYWxpZGF0b3JgLlxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xzQ29uZmlnXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbGlkYXRvclxuICAgICAgICAgKiBAcGFyYW0gez89fSBhc3luY1ZhbGlkYXRvclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUJ1aWxkZXIucHJvdG90eXBlLmFycmF5ID0gZnVuY3Rpb24gKGNvbnRyb2xzQ29uZmlnLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRvciA9PT0gdm9pZCAwKSB7IHZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmIChhc3luY1ZhbGlkYXRvciA9PT0gdm9pZCAwKSB7IGFzeW5jVmFsaWRhdG9yID0gbnVsbDsgfVxuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udHJvbHMgPSBjb250cm9sc0NvbmZpZy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIF90aGlzLl9jcmVhdGVDb250cm9sKGMpOyB9KTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRm9ybUFycmF5KGNvbnRyb2xzLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbHNDb25maWdcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1CdWlsZGVyLnByb3RvdHlwZS5fcmVkdWNlQ29udHJvbHMgPSBmdW5jdGlvbiAoY29udHJvbHNDb25maWcpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb250cm9scyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29udHJvbHNDb25maWcpLmZvckVhY2goZnVuY3Rpb24gKGNvbnRyb2xOYW1lKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbHNbY29udHJvbE5hbWVdID0gX3RoaXMuX2NyZWF0ZUNvbnRyb2woY29udHJvbHNDb25maWdbY29udHJvbE5hbWVdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xzO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb250cm9sQ29uZmlnXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQnVpbGRlci5wcm90b3R5cGUuX2NyZWF0ZUNvbnRyb2wgPSBmdW5jdGlvbiAoY29udHJvbENvbmZpZykge1xuICAgICAgICAgICAgaWYgKGNvbnRyb2xDb25maWcgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCB8fCBjb250cm9sQ29uZmlnIGluc3RhbmNlb2YgRm9ybUdyb3VwIHx8XG4gICAgICAgICAgICAgICAgY29udHJvbENvbmZpZyBpbnN0YW5jZW9mIEZvcm1BcnJheSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sQ29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb250cm9sQ29uZmlnKSkge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHZhbHVlID0gY29udHJvbENvbmZpZ1swXTtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWxpZGF0b3IgPSBjb250cm9sQ29uZmlnLmxlbmd0aCA+IDEgPyBjb250cm9sQ29uZmlnWzFdIDogbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBhc3luY1ZhbGlkYXRvciA9IGNvbnRyb2xDb25maWcubGVuZ3RoID4gMiA/IGNvbnRyb2xDb25maWdbMl0gOiBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wodmFsdWUsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybUJ1aWxkZXIuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3RhYmxlIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBGb3JtQnVpbGRlci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgICAgICByZXR1cm4gRm9ybUJ1aWxkZXI7XG4gICAgfSgpKTtcblxuICAgIC8qKlxuICAgICAqIEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBWRVJTSU9OID0gbmV3IF9hbmd1bGFyX2NvcmUuVmVyc2lvbignMi40LjgnKTtcblxuICAgIHZhciAvKiogQHR5cGUgez99ICovIFNIQVJFRF9GT1JNX0RJUkVDVElWRVMgPSBbXG4gICAgICAgIE5nU2VsZWN0T3B0aW9uLFxuICAgICAgICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLFxuICAgICAgICBEZWZhdWx0VmFsdWVBY2Nlc3NvcixcbiAgICAgICAgTnVtYmVyVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgUmFuZ2VWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgTmdDb250cm9sU3RhdHVzLFxuICAgICAgICBOZ0NvbnRyb2xTdGF0dXNHcm91cCxcbiAgICAgICAgUmVxdWlyZWRWYWxpZGF0b3IsXG4gICAgICAgIE1pbkxlbmd0aFZhbGlkYXRvcixcbiAgICAgICAgTWF4TGVuZ3RoVmFsaWRhdG9yLFxuICAgICAgICBQYXR0ZXJuVmFsaWRhdG9yLFxuICAgICAgICBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLFxuICAgIF07XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gVEVNUExBVEVfRFJJVkVOX0RJUkVDVElWRVMgPSBbTmdNb2RlbCwgTmdNb2RlbEdyb3VwLCBOZ0Zvcm1dO1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIFJFQUNUSVZFX0RSSVZFTl9ESVJFQ1RJVkVTID0gW0Zvcm1Db250cm9sRGlyZWN0aXZlLCBGb3JtR3JvdXBEaXJlY3RpdmUsIEZvcm1Db250cm9sTmFtZSwgRm9ybUdyb3VwTmFtZSwgRm9ybUFycmF5TmFtZV07XG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgbW9kdWxlIHVzZWQgZm9yIHNoYXJpbmcgZGlyZWN0aXZlcyBiZXR3ZWVuIEZvcm1zTW9kdWxlIGFuZCBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gICAgICovXG4gICAgdmFyIEludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlKCkge1xuICAgICAgICB9XG4gICAgICAgIEludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5OZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogU0hBUkVEX0ZPUk1fRElSRUNUSVZFUyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IFNIQVJFRF9GT1JNX0RJUkVDVElWRVMsXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgICAgICByZXR1cm4gSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZTtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG5nIG1vZHVsZSBmb3IgZm9ybXMuXG4gICAgICogXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIEZvcm1zTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gRm9ybXNNb2R1bGUoKSB7XG4gICAgICAgIH1cbiAgICAgICAgRm9ybXNNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5OZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogVEVNUExBVEVfRFJJVkVOX0RJUkVDVElWRVMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtSYWRpb0NvbnRyb2xSZWdpc3RyeV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBbSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZSwgVEVNUExBVEVfRFJJVkVOX0RJUkVDVElWRVNdXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgRm9ybXNNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICAgICAgcmV0dXJuIEZvcm1zTW9kdWxlO1xuICAgIH0oKSk7XG4gICAgLyoqXG4gICAgICogVGhlIG5nIG1vZHVsZSBmb3IgcmVhY3RpdmUgZm9ybXMuXG4gICAgICogXFxAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIFJlYWN0aXZlRm9ybXNNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBSZWFjdGl2ZUZvcm1zTW9kdWxlKCkge1xuICAgICAgICB9XG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5OZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW1JFQUNUSVZFX0RSSVZFTl9ESVJFQ1RJVkVTXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW0Zvcm1CdWlsZGVyLCBSYWRpb0NvbnRyb2xSZWdpc3RyeV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBbSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZSwgUkVBQ1RJVkVfRFJJVkVOX0RJUkVDVElWRVNdXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgICAgICByZXR1cm4gUmVhY3RpdmVGb3Jtc01vZHVsZTtcbiAgICB9KCkpO1xuXG4gICAgZXhwb3J0cy5BYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUgPSBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmU7XG4gICAgZXhwb3J0cy5BYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSA9IEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlO1xuICAgIGV4cG9ydHMuQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvciA9IENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3I7XG4gICAgZXhwb3J0cy5Db250cm9sQ29udGFpbmVyID0gQ29udHJvbENvbnRhaW5lcjtcbiAgICBleHBvcnRzLk5HX1ZBTFVFX0FDQ0VTU09SID0gTkdfVkFMVUVfQUNDRVNTT1I7XG4gICAgZXhwb3J0cy5EZWZhdWx0VmFsdWVBY2Nlc3NvciA9IERlZmF1bHRWYWx1ZUFjY2Vzc29yO1xuICAgIGV4cG9ydHMuTmdDb250cm9sID0gTmdDb250cm9sO1xuICAgIGV4cG9ydHMuTmdDb250cm9sU3RhdHVzID0gTmdDb250cm9sU3RhdHVzO1xuICAgIGV4cG9ydHMuTmdDb250cm9sU3RhdHVzR3JvdXAgPSBOZ0NvbnRyb2xTdGF0dXNHcm91cDtcbiAgICBleHBvcnRzLk5nRm9ybSA9IE5nRm9ybTtcbiAgICBleHBvcnRzLk5nTW9kZWwgPSBOZ01vZGVsO1xuICAgIGV4cG9ydHMuTmdNb2RlbEdyb3VwID0gTmdNb2RlbEdyb3VwO1xuICAgIGV4cG9ydHMuUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvciA9IFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3I7XG4gICAgZXhwb3J0cy5Gb3JtQ29udHJvbERpcmVjdGl2ZSA9IEZvcm1Db250cm9sRGlyZWN0aXZlO1xuICAgIGV4cG9ydHMuRm9ybUNvbnRyb2xOYW1lID0gRm9ybUNvbnRyb2xOYW1lO1xuICAgIGV4cG9ydHMuRm9ybUdyb3VwRGlyZWN0aXZlID0gRm9ybUdyb3VwRGlyZWN0aXZlO1xuICAgIGV4cG9ydHMuRm9ybUFycmF5TmFtZSA9IEZvcm1BcnJheU5hbWU7XG4gICAgZXhwb3J0cy5Gb3JtR3JvdXBOYW1lID0gRm9ybUdyb3VwTmFtZTtcbiAgICBleHBvcnRzLk5nU2VsZWN0T3B0aW9uID0gTmdTZWxlY3RPcHRpb247XG4gICAgZXhwb3J0cy5TZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvciA9IFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yO1xuICAgIGV4cG9ydHMuU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvciA9IFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3I7XG4gICAgZXhwb3J0cy5DaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yID0gQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvcjtcbiAgICBleHBvcnRzLk1heExlbmd0aFZhbGlkYXRvciA9IE1heExlbmd0aFZhbGlkYXRvcjtcbiAgICBleHBvcnRzLk1pbkxlbmd0aFZhbGlkYXRvciA9IE1pbkxlbmd0aFZhbGlkYXRvcjtcbiAgICBleHBvcnRzLlBhdHRlcm5WYWxpZGF0b3IgPSBQYXR0ZXJuVmFsaWRhdG9yO1xuICAgIGV4cG9ydHMuUmVxdWlyZWRWYWxpZGF0b3IgPSBSZXF1aXJlZFZhbGlkYXRvcjtcbiAgICBleHBvcnRzLkZvcm1CdWlsZGVyID0gRm9ybUJ1aWxkZXI7XG4gICAgZXhwb3J0cy5BYnN0cmFjdENvbnRyb2wgPSBBYnN0cmFjdENvbnRyb2w7XG4gICAgZXhwb3J0cy5Gb3JtQXJyYXkgPSBGb3JtQXJyYXk7XG4gICAgZXhwb3J0cy5Gb3JtQ29udHJvbCA9IEZvcm1Db250cm9sO1xuICAgIGV4cG9ydHMuRm9ybUdyb3VwID0gRm9ybUdyb3VwO1xuICAgIGV4cG9ydHMuTkdfQVNZTkNfVkFMSURBVE9SUyA9IE5HX0FTWU5DX1ZBTElEQVRPUlM7XG4gICAgZXhwb3J0cy5OR19WQUxJREFUT1JTID0gTkdfVkFMSURBVE9SUztcbiAgICBleHBvcnRzLlZhbGlkYXRvcnMgPSBWYWxpZGF0b3JzO1xuICAgIGV4cG9ydHMuVkVSU0lPTiA9IFZFUlNJT047XG4gICAgZXhwb3J0cy5Gb3Jtc01vZHVsZSA9IEZvcm1zTW9kdWxlO1xuICAgIGV4cG9ydHMuUmVhY3RpdmVGb3Jtc01vZHVsZSA9IFJlYWN0aXZlRm9ybXNNb2R1bGU7XG5cbn0pKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vQGFuZ3VsYXIvZm9ybXMvYnVuZGxlcy9mb3Jtcy51bWQuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIHBsYXRmb3JtX2Jyb3dzZXJfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInKTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG52YXIgY29tcGlsZXJfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvbXBpbGVyJyk7XG52YXIgQlJPV1NFUl9TQU5JVElaQVRJT05fUFJPVklERVJTID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uQlJPV1NFUl9TQU5JVElaQVRJT05fUFJPVklERVJTLCBTaGFyZWRTdHlsZXNIb3N0ID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uU2hhcmVkU3R5bGVzSG9zdCwgRG9tU2hhcmVkU3R5bGVzSG9zdCA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkRvbVNoYXJlZFN0eWxlc0hvc3QsIERvbVJvb3RSZW5kZXJlciA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkRvbVJvb3RSZW5kZXJlciwgRG9tRXZlbnRzUGx1Z2luID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uRG9tRXZlbnRzUGx1Z2luLCBLZXlFdmVudHNQbHVnaW4gPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5LZXlFdmVudHNQbHVnaW4sIERvbUFkYXB0ZXIgPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5Eb21BZGFwdGVyLCBzZXRSb290RG9tQWRhcHRlciA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLnNldFJvb3REb21BZGFwdGVyLCBnZXRET00gPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5nZXRET00sIEhhbW1lckdlc3R1cmVzUGx1Z2luID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uSGFtbWVyR2VzdHVyZXNQbHVnaW47XG5leHBvcnRzLkJST1dTRVJfU0FOSVRJWkFUSU9OX1BST1ZJREVSUyA9IEJST1dTRVJfU0FOSVRJWkFUSU9OX1BST1ZJREVSUztcbmV4cG9ydHMuU2hhcmVkU3R5bGVzSG9zdCA9IFNoYXJlZFN0eWxlc0hvc3Q7XG5leHBvcnRzLkRvbVNoYXJlZFN0eWxlc0hvc3QgPSBEb21TaGFyZWRTdHlsZXNIb3N0O1xuZXhwb3J0cy5Eb21Sb290UmVuZGVyZXIgPSBEb21Sb290UmVuZGVyZXI7XG5leHBvcnRzLkRvbUV2ZW50c1BsdWdpbiA9IERvbUV2ZW50c1BsdWdpbjtcbmV4cG9ydHMuS2V5RXZlbnRzUGx1Z2luID0gS2V5RXZlbnRzUGx1Z2luO1xuZXhwb3J0cy5Eb21BZGFwdGVyID0gRG9tQWRhcHRlcjtcbmV4cG9ydHMuc2V0Um9vdERvbUFkYXB0ZXIgPSBzZXRSb290RG9tQWRhcHRlcjtcbmV4cG9ydHMuSGFtbWVyR2VzdHVyZXNQbHVnaW4gPSBIYW1tZXJHZXN0dXJlc1BsdWdpbjtcbnZhciBWaWV3VXRpbHMgPSBjb3JlXzEuX19jb3JlX3ByaXZhdGVfXy5WaWV3VXRpbHMsIEFuaW1hdGlvbktleWZyYW1lID0gY29yZV8xLl9fY29yZV9wcml2YXRlX18uQW5pbWF0aW9uS2V5ZnJhbWUsIEFuaW1hdGlvblBsYXllciA9IGNvcmVfMS5fX2NvcmVfcHJpdmF0ZV9fLkFuaW1hdGlvblBsYXllciwgQW5pbWF0aW9uU3R5bGVzID0gY29yZV8xLl9fY29yZV9wcml2YXRlX18uQW5pbWF0aW9uU3R5bGVzLCBSZW5kZXJEZWJ1Z0luZm8gPSBjb3JlXzEuX19jb3JlX3ByaXZhdGVfXy5SZW5kZXJEZWJ1Z0luZm87XG5leHBvcnRzLlZpZXdVdGlscyA9IFZpZXdVdGlscztcbmV4cG9ydHMuQW5pbWF0aW9uS2V5ZnJhbWUgPSBBbmltYXRpb25LZXlmcmFtZTtcbmV4cG9ydHMuQW5pbWF0aW9uUGxheWVyID0gQW5pbWF0aW9uUGxheWVyO1xuZXhwb3J0cy5BbmltYXRpb25TdHlsZXMgPSBBbmltYXRpb25TdHlsZXM7XG5leHBvcnRzLlJlbmRlckRlYnVnSW5mbyA9IFJlbmRlckRlYnVnSW5mbztcbnZhciBTZWxlY3Rvck1hdGNoZXIgPSBjb21waWxlcl8xLl9fY29tcGlsZXJfcHJpdmF0ZV9fLlNlbGVjdG9yTWF0Y2hlciwgQ3NzU2VsZWN0b3IgPSBjb21waWxlcl8xLl9fY29tcGlsZXJfcHJpdmF0ZV9fLkNzc1NlbGVjdG9yO1xuZXhwb3J0cy5TZWxlY3Rvck1hdGNoZXIgPSBTZWxlY3Rvck1hdGNoZXI7XG5leHBvcnRzLkNzc1NlbGVjdG9yID0gQ3NzU2VsZWN0b3I7XG52YXIgX19lbXB0eSA9IG51bGw7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBfX2VtcHR5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfXy5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvYXBwL2FwcC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFbnVtS2V5c1BpcGUgfSBmcm9tICcuLi9waXBlcy9lbnVtLmtleXMucGlwZSc7XHJcbmltcG9ydCB7IFNhZmVQaXBlIH0gZnJvbSAnLi4vcGlwZXMvc2FmZS5odG1sLnBpcGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtFbnVtS2V5c1BpcGUsIFNhZmVQaXBlXSxcclxuICBleHBvcnRzOiBbRW51bUtleXNQaXBlLCBTYWZlUGlwZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tb25Nb2R1bGUge1xyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21tb24vY29tbW9uLm1vZHVsZS50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvdW50ZXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY291bnRlci5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudGVyQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBjdXJyZW50Q291bnQgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBpbmNyZW1lbnRDb3VudGVyKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudENvdW50Kys7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZldGNoZGF0YScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmV0Y2hEYXRhQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwKSB7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaG9tZScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdk1lbnVDb21wb25lbnQge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNTc1MDA1OS9zZWxlY3QtYmFzZWQtb24tZW51bS1pbi1hbmd1bGFyMlxyXG5AUGlwZSh7bmFtZTogJ2tleXMnfSlcclxuZXhwb3J0IGNsYXNzIEVudW1LZXlzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSh2YWx1ZSwgYXJnczpzdHJpbmdbXSkgOiBhbnkge1xyXG4gICAgbGV0IGtleXMgPSBbXTtcclxuICAgIGZvciAodmFyIGVudW1NZW1iZXIgaW4gdmFsdWUpIHtcclxuICAgICAgdmFyIGlzVmFsdWVQcm9wZXJ0eSA9IHBhcnNlSW50KGVudW1NZW1iZXIsIDEwKSA+PSAwXHJcbiAgICAgIGlmIChpc1ZhbHVlUHJvcGVydHkpIHtcclxuICAgICAgICBrZXlzLnB1c2goe2tleTogZW51bU1lbWJlciwgdmFsdWU6IHZhbHVlW2VudW1NZW1iZXJdfSk7ICAgICAgIFxyXG4gICAgICB9IFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleXM7XHJcbiAgfVxyXG4gIFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3BpcGVzL2VudW0ua2V5cy5waXBlLnRzIiwiaW1wb3J0IHtQaXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXIsIFNhZmVIdG1sLCBTYWZlU3R5bGUsIFNhZmVTY3JpcHQsIFNhZmVVcmwsIFNhZmVSZXNvdXJjZVVybH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG4vL2h0dHBzOi8vZm9ydW0uaW9uaWNmcmFtZXdvcmsuY29tL3QvaW5zZXJ0aW5nLWh0bWwtdmlhLWFuZ3VsYXItMi11c2Utb2YtZG9tc2FuaXRpemF0aW9uc2VydmljZS1ieXBhc3NzZWN1cml0eXRydXN0aHRtbC82MjU2Mi8yXHJcbkBQaXBlKHtcclxuXHRuYW1lOiAnc2FmZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNhZmVQaXBlIHtcclxuXHJcblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgdHlwZTogc3RyaW5nKTogU2FmZUh0bWwgfCBTYWZlU3R5bGUgfCBTYWZlU2NyaXB0IHwgU2FmZVVybCB8IFNhZmVSZXNvdXJjZVVybCB7XHJcblx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0Y2FzZSAnaHRtbCc6XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XHJcblx0XHRcdGNhc2UgJ3N0eWxlJzpcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWx1ZSk7XHJcblx0XHRcdGNhc2UgJ3NjcmlwdCc6XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U2NyaXB0KHZhbHVlKTtcclxuXHRcdFx0Y2FzZSAndXJsJzpcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodmFsdWUpO1xyXG5cdFx0XHRjYXNlICdyZXNvdXJjZVVybCc6XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodmFsdWUpO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGJ5cGFzcyBzZWN1cml0eSBmb3IgaW52YWxpZCB0eXBlOiAke3R5cGV9YCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9waXBlcy9zYWZlLmh0bWwucGlwZS50cyIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge1ZpZGVvVmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4vdmlkZW8udmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuLy9pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7SVZpZGVvfSBmcm9tICcuL3ZpZGVvLWRldGFpbHMuaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7VmlkZW9PcmlnaW5FbnVtfSBmcm9tICcuL3ZpZGVvLWRldGFpbHMuZW51bXMnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBvRW1iZWQgfSBmcm9tICcuLi92aWRlby1vZW1iZWQvdmlkZW8tb2VtYmVkLmludGVyZmFjZXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmlkZW9TZXJ2aWNlIGltcGxlbWVudHMgSVZpZGVvU2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIHZpZGVvQXBpVXJsIDogc3RyaW5nID0gJy9hcGkvdmlkZW9zJztcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSBcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBHZXRWaWRlb3MoKSA6IE9ic2VydmFibGU8SVZpZGVvPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudmlkZW9BcGlVcmwpXHJcbiAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldFZpZGVvKGlkOiBzdHJpbmcpIDogT2JzZXJ2YWJsZTxJVmlkZW8+IFxyXG4gICAge1xyXG4gICAgICAgIGlmIChpZCA9PSBudWxsIHx8IGlkID09IFwiMFwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy52aWRlb0FwaVVybCArIFwiL0VtcHR5XCIpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSkgICAgICAgICAgICBcclxuICAgICAgICAgICAgLmRvKHJlcyA9PiBjb25zb2xlLmxvZygnUmV0cmlldmVkIHZpZGVvOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnZpZGVvQXBpVXJsICsgXCIvXCIgKyBpZClcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmRvKHJlcyA9PiBjb25zb2xlLmxvZygnUmV0cmlldmVkIHZpZGVvOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzKSkpO1xyXG4gICAgICAgICAgICAvLyAuY2F0Y2godGhpcy5oYW5kbGVHZXRWaWRlb0Vycm9yKTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgY3JlYXRlVmlkZW8oZGF0YTogSVZpZGVvKSA6IE9ic2VydmFibGU8SVZpZGVvPiB7XHJcbiAgICAgICAgLy8gaWYgKCFWaWRlb1ZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlVmlkZW8oZGF0YSkpXHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBqc29uZWQgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2VydmljZSwgY3JlYXRlIHZpZGVvLlZpZGVvIGpzb246ICcgKyBqc29uZWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvdmlkZW9zL3Bvc3R2aWRlbycsIGpzb25lZCxcclxuICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZpZGVvKGRhdGE6IElWaWRlbykgOiBPYnNlcnZhYmxlPElWaWRlbz4ge1xyXG4gICAgICAgIC8vIGlmICghVmlkZW9WYWxpZGF0aW9uU2VydmljZS52YWxpZGF0ZVZpZGVvKGRhdGEpKVxyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIganNvbmVkID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlcnZpY2UsIGNyZWF0ZSB2aWRlby5WaWRlbyBqc29uOiAnICsganNvbmVkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoJy9hcGkvdmlkZW9zL2VkaXR2aWRlbycsIGpzb25lZCxcclxuICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy92YXIgc291cmNlID0gUnguT2JzZXJ2YWJsZS5mcm9tKGFycmF5KS5mbGF0TWFwKHggPT4gUnguT2JzZXJ2YWJsZS5mcm9tKHgpLmZpbHRlcih6ID0+IHo+MSkpO1xyXG4gICAgLy8gZ2V0VmlkZW9zKCkgOiBPYnNlcnZhYmxlPElWaWRlbz5cclxuICAgIFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL3ZpZGVvJylcclxuICAgIC8vICAgICAgICAgLm1hcDxJVmlkZW9bXT4oKHJlczogUmVzcG9uc2UpICA9PiByZXMuanNvbigpKVxyXG4gICAgLy8gICAgICAgICAuZmxhdE1hcCh2aWRzID0+ICBPYnNlcnZhYmxlLmZyb20odmlkcywgXyA9PiBfKVxyXG4gICAgLy8gICAgICAgICAvLyAubWFwPElWaWRlbz4odjEgPT4ge1xyXG4gICAgLy8gICAgICAgICAvLyAgLy8gICB2MS5pZCA9IHYxLl9pZDtcclxuICAgIC8vICAgICAgICAgLy8gICAgIHJldHVybiB2MTtcclxuICAgIC8vICAgICAgICAgLy8gfSlcclxuICAgIC8vICAgICAgICAgKVxyXG4gICAgLy8gICAgICAgIC5maWx0ZXIoVmlkZW9WYWxpZGF0aW9uU2VydmljZS52YWxpZGF0ZVZpZGVvKVxyXG4gICAgLy8gICAgICAgICAgICAgIC8ve1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9mb3IobGV0IHZpZGVvIG9mIHZpZHMpXHJcbiAgICAvLyAgICAgICAgICAgICAgIC8vICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgIC8vICAgICAgdmlkZW8uaWQgPSB2aWRlby5faWQ7XHJcbiAgICAvLyAgICAgICAgICAgICAgIC8vICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgLy8gICByZXR1cm4gdmlkcztcclxuICAgIC8vICAgICAgICAgICAgIC8vfSlcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vICAgICAgICAgLmRvKHJlcyA9PiBjb25zb2xlLmxvZygnQWxsOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzKSkpXHJcbiAgICAvLyAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUdldFZpZGVvc0Vycm9yKTtcclxuICAgIC8vICAgICAvLyAuZmxhdE1hcFRvPElWaWRlbz4odmlkQXJyID0+IE9ic2VydmFibGUuZnJvbUFycmF5KHZpZEFycilcclxuICAgIC8vICAgICAvLyAvL09ic2VydmFibGUubWFwPElWaWRlbz4odCA9PiBPYnNlcnZhYmxlLmZyb21BcnJheSh2aWRBcnIpKVxyXG4gICAgLy8gICAgIC8vIC5maWx0ZXIodmlkID0+IHRoaXMudmFsaWRhdGVWaWRlbyh2aWQpKTtcclxuXHJcbiAgICAvLyAgICAgLy8gICAgIHJlcy5qc29uKClcclxuICAgIC8vICAgICAvLyAgICAgLm1hcChyZXNKc29uID0+IE9ic2VydmFibGUuZnJvbShyZXMpXHJcbiAgICAvLyAgICAgLy8gICAgICAgICAubWFwKHggPT4gT2JzZXJ2YWJsZVxyXG4gICAgLy8gICAgIC8vICAgICAgICAgICAgIC5mcm9tKHgpXHJcbiAgICAvLyAgICAgLy8gICAgICAgICAgICAgLmZpbHRlcjxJVmlkZW8+KHogPT4gdGhpcy52YWxpZGF0ZVZpZGVvKHopKVxyXG4gICAgLy8gICAgIC8vICAgICAgICAgICAgIC5tYXA8SVZpZGVvPih2aWQgPT4gdmlkLmpzb24pKTtcclxuXHJcbiAgICAvLyAgICAgLy8gfSk7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC8vIGhhbmRsZUdldFZpZGVvc0Vycm9yKGVycm9yOiBSZXNwb25zZSlcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBjb25zb2xlLmVycm9yIChlcnJvcik7XHJcbiAgICAvLyAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IgfHwgJ1NlcnZlciBlcnJvciBvY2N1cnJlZCB3aGVuIHJldHJpZXZpbmcgbGlzdCBvZiB2aWRlb3MnKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBnZXRWaWRlbyhpZDogc3RyaW5nKSA6IE9ic2VydmFibGU8SVZpZGVvPiBcclxuICAgIC8vIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2FwaS92aWRlby8nICsgaWQpXHJcbiAgICAvLyAgICAgICAgIC5tYXA8SVZpZGVvPigocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgIC8vICAgICAgICAgLy8gLm1hcCh2aWRlbyA9PiB7XHJcbiAgICAvLyAgICAgICAgIC8vICAgICB2aWRlby5pZCA9IHZpZGVvLl9pZDtcclxuICAgIC8vICAgICAgICAgLy8gICAgIHJldHVybiB2aWRlbztcclxuICAgIC8vICAgICAgICAgLy8gfSlcclxuICAgIC8vICAgICAgICAgIC5kbyhyZXMgPT4gY29uc29sZS5sb2coJ1JldHJpZXZlZCB2aWRlbzogJyArIEpTT04uc3RyaW5naWZ5KHJlcykpKVxyXG4gICAgLy8gICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlR2V0VmlkZW9FcnJvcik7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC8vIHByaXZhdGUgaGFuZGxlR2V0VmlkZW9FcnJvcihlcnJvcjogUmVzcG9uc2UpXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAvLyAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpIHx8ICdTZXJ2ZXIgZXJyb3Igb2NjdXJyZWQgd2hlbiByZXRyaWV2aW5nIHZpZGVvIGRldGFpbHMnKTtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0RW1wdHlWaWRlbygpIHtcclxuICAgIC8vICAgICB2YXIgcmVzdWx0OiBJVmlkZW8gPSB7XHJcbiAgICAvLyAgICAgICAgLy8gX2lkOiAnJyxcclxuICAgIC8vICAgICAgICAgaWQ6ICcnLFxyXG4gICAgLy8gICAgICAgICB0aXRsZTogJycsXHJcbiAgICAvLyAgICAgICAgIHVybDogJycsXHJcbiAgICAvLyAgICAgICAgIGxvY2FsVXJsOiAnJyxcclxuICAgIC8vICAgICAgICAgY29kZTogJycsXHJcbiAgICAvLyAgICAgICAgIG1lZGlhVHlwZTogJycsXHJcbiAgICAvLyAgICAgICAgIHZpZGVvTGVuZ3RoOiAwLFxyXG4gICAgLy8gICAgICAgICB2aWRlb09yaWdpbjogVmlkZW9PcmlnaW5FbnVtLllvdVR1YmUsXHJcbiAgICAvLyAgICAgICAgIHRhZ3M6IFtdLFxyXG4gICAgLy8gICAgICAgICByYXRpbmc6IDAsXHJcbiAgICAvLyAgICAgICAgIHdhdGNoZWRDb3VudDogMFxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIC8vIH1cclxuXHJcbiAgIFxyXG5cclxuICAgIC8vIHZhbGlkYXRlVmlkZW8oZW50aXR5OiBJVmlkZW8pOiBib29sZWFuIHtcclxuICAgIC8vICAgICBsZXQgcmVzdWx0OiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8vICAgICAvL25vbi1lbXB0eSBmaWVsZHMgdmFsaWRhdGlvblxyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIGlmICghZW50aXR5LmlkKVxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRpb246IGlkIGlzIGVtcHR5IGZvciB2aWRlbycpO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlbnRpdHkpO1xyXG4gICAgLy8gICAgICAgICByZXN1bHQ9ZmFsc2U7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmICghZW50aXR5LnRpdGxlKS8vIHx8ICFlbnRpdHkudXJsIHx8ICFlbnRpdHkudmlkZW9MZW5ndGgpIHtcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZGF0aW9uOiB0aXRsZSBpcyBlbXB0eSBmb3IgdmlkZW86ICcgKyBlbnRpdHkpO1xyXG4gICAgLy8gICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC8vcmF0aW5nIG11c3QgYmUgYW4gaW50ZWdlciBiZXR3ZWVuIDAgYW5kIDVcclxuICAgIC8vICAgICBpZiAoIWVudGl0eSB8fCBlbnRpdHkucmF0aW5nIDwgMCB8fCBlbnRpdHkucmF0aW5nID4gNSkge1xyXG4gICAgLy8gICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRpb246IHdyb25nIHJhdGluZyBmb3IgdmlkZW86ICcgKyBlbnRpdHkpO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyByZWNvZ25pemVWaWRlb0J5VXJsKHVybDogc3RyaW5nKSA6IFZpZGVvT3JpZ2luRW51bVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIC8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81ODMwMzg3L2hvdy10by1maW5kLWFsbC15b3V0dWJlLXZpZGVvLWlkcy1pbi1hLXN0cmluZy11c2luZy1hLXJlZ2V4LzU4MzExOTEjNTgzMTE5MVxyXG4gICAgLy8gICAgIGxldCB5dFVybFJlZ0V4cDogUmVnRXhwID0gL2h0dHBzPzpcXC9cXC8oPzpbMC05QS1aLV0rXFwuKT8oPzp5b3V0dVxcLmJlXFwvfHlvdXR1YmUoPzotbm9jb29raWUpP1xcLmNvbVxcUyo/W15cXHdcXHMtXSkoW1xcdy1dezExfSkoPz1bXlxcdy1dfCQpKD8hWz89JislXFx3Li1dKig/OlsnXCJdW148Pl0qPnw8XFwvYT4pKVs/PSYrJVxcdy4tXSovaWc7XHJcblxyXG4gICAgLy8gICAgIC8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMzI4Njc4NS9nZXQtdmlkZW8taWQtZnJvbS12aW1lby11cmxcclxuICAgIC8vICAgICBsZXQgdm1VcmxSZWdFeHA6IFJlZ0V4cCA9IC9odHRwcz86XFwvXFwvKD86d3d3XFwufHBsYXllclxcLik/dmltZW8uY29tXFwvKD86Y2hhbm5lbHNcXC8oPzpcXHcrXFwvKT98Z3JvdXBzXFwvKFteXFwvXSopXFwvdmlkZW9zXFwvfGFsYnVtXFwvKFxcZCspXFwvdmlkZW9cXC98dmlkZW9cXC98KShcXGQrKSg/OiR8XFwvfFxcPykvO1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIC8vI3RvZG9cclxuICAgIC8vICAgICBsZXQgY2g5VXJsUmVnRXhwOiBSZWdFeHAgPSAvaHR0cD8vO1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIGlmICh1cmwubWF0Y2goeXRVcmxSZWdFeHApKVxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIFZpZGVvT3JpZ2luRW51bS5Zb3VUdWJlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZiAodXJsLm1hdGNoKHZtVXJsUmVnRXhwKSlcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBWaWRlb09yaWdpbkVudW0uVmltZW87ICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmICh1cmwubWF0Y2goY2g5VXJsUmVnRXhwKSl7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBWaWRlb09yaWdpbkVudW0uQ2hhbm5lbDk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBWaWRlb09yaWdpbkVudW0uVW5rbm93bjsgICAgICAgIFxyXG4gICAgLy8gfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgSVZpZGVvU2VydmljZVxyXG57XHJcbiAgICBHZXRWaWRlb3MoKSA6IE9ic2VydmFibGU8SVZpZGVvPjtcclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby1kZXRhaWxzL3ZpZGVvLWRldGFpbHMuc2VydmljZS50cyIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vaW1wb3J0IHtDb250cm9sfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0lWaWRlb30gZnJvbSAnLi92aWRlby1kZXRhaWxzLmludGVyZmFjZXMnO1xyXG5pbXBvcnQge1ZpZGVvT3JpZ2luRW51bX0gZnJvbSAnLi92aWRlby1kZXRhaWxzLmVudW1zJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWaWRlb1ZhbGlkYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgICBzdGF0aWMgdmFsaWRhdGVWaWRlbyhlbnRpdHk6IElWaWRlbyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBpZiAoIWVudGl0eS5pZCkge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygndmFsaWRhdGlvbjogaWQgaXMgZW1wdHkgZm9yIHZpZGVvOiAnICsgZW50aXR5KTtcclxuICAgICAgICAvLyAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgLy8gaWYgKCFlbnRpdHkudGl0bGUpIHtcclxuXHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCd2YWxpZGF0aW9uOiB0aXRsZSBpcyBlbXB0eSBmb3IgdmlkZW86ICcgKyBlbnRpdHkpO1xyXG4gICAgICAgIC8vICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKFZpZGVvVmFsaWRhdGlvblNlcnZpY2UucmVjb2duaXplVmlkZW9CeVVybChlbnRpdHkudXJsKSA9PSBWaWRlb09yaWdpbkVudW0uVW5rbm93bikge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygndmFsaWRhdGlvbjogdXJsIG9mIHRoZSB2aWRlbyBpcyBpbmNvcnJlY3Q6ICcgKyBlbnRpdHkudXJsKTtcclxuICAgICAgICAvLyAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAvL3JhdGluZyBtdXN0IGJlIGFuIGludGVnZXIgYmV0d2VlbiAwIGFuZCA1XHJcbiAgICAgICAgLy8gaWYgKCFlbnRpdHkgfHwgZW50aXR5LnJhdGluZyA8IDAgfHwgZW50aXR5LnJhdGluZyA+IDUpIHtcclxuICAgICAgICAvLyAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCd2YWxpZGF0aW9uOiB3cm9uZyByYXRpbmcgZm9yIHZpZGVvOiAnICsgZW50aXR5KTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICAvLyBzdGF0aWMgcmF0aW5nVmFsaWRhdG9yKGNvbnRyb2w6IENvbnRyb2wpOiB7IFtzOiBzdHJpbmddOiBib29sZWFuIH0ge1xyXG4gICAgLy8gICAgIGxldCByYXRpbmdWYWx1ZTogbnVtYmVyID0gY29udHJvbC52YWx1ZTtcclxuICAgIC8vICAgICBpZiAocmF0aW5nVmFsdWUgPCAwIHx8IHJhdGluZ1ZhbHVlID4gNSkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4geyByYXRpbmdPdXRPZkJvdW5kczogdHJ1ZSB9O1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzdGF0aWMgdXJsVmFsaWRhdG9yKGNvbnRyb2w6IENvbnRyb2wpOiB7IFtzOiBzdHJpbmddOiBib29sZWFuIH0ge1xyXG4gICAgLy8gICAgIGxldCByZXN1bHQ6IHsgW3M6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG5cclxuICAgIC8vICAgICAvL29ubHkgcmVjb2duaXplZCBVcmxzIGFyZSBhbGxvd2VkXHJcbiAgICAvLyAgICAgbGV0IHVybDogc3RyaW5nID0gY29udHJvbC52YWx1ZTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnaW4gdXJsVmFsaWRhdG9yJyk7XHJcbiAgICAvLyAgICAgaWYgKCF1cmwpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ25vIHVybCBwcm92aWRlZCcpO1xyXG4gICAgLy8gICAgICAgICByZXN1bHQgPSB7IGVtcHR5VXJsOiB0cnVlIH07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBsZXQgc2VydmljZSA9IHRoaXM7ICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gICAgICAgICBpZiAoVmlkZW9WYWxpZGF0aW9uU2VydmljZS5yZWNvZ25pemVWaWRlb0J5VXJsKHVybCkgPT0gVmlkZW9PcmlnaW5FbnVtLlVua25vd24pIHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bnJlY29nbml6ZWQgdXJsIGZvcm1hdCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgcmVzdWx0ID0geyBpbnZhbGlkVXJsOiB0cnVlIH07XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgLy93aHkgdGhpcyBoYXMgdG8gYmUgc3RhdGljP1xyXG4gICAgc3RhdGljIHJlY29nbml6ZVZpZGVvQnlVcmwodXJsOiBzdHJpbmcpOiBWaWRlb09yaWdpbkVudW0ge1xyXG4gICAgICAgIC8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81ODMwMzg3L2hvdy10by1maW5kLWFsbC15b3V0dWJlLXZpZGVvLWlkcy1pbi1hLXN0cmluZy11c2luZy1hLXJlZ2V4LzU4MzExOTEjNTgzMTE5MVxyXG4gICAgICAgIGxldCB5dFVybFJlZ0V4cDogUmVnRXhwID0gLyhodHRwcz86XFwvXFwvKT8oPzpbMC05QS1aLV0rXFwuKT8oPzp5b3V0dVxcLmJlXFwvfHlvdXR1YmUoPzotbm9jb29raWUpP1xcLmNvbVxcUyo/W15cXHdcXHMtXSkoW1xcdy1dezExfSkoPz1bXlxcdy1dfCQpKD8hWz89JislXFx3Li1dKig/OlsnXCJdW148Pl0qPnw8XFwvYT4pKVs/PSYrJVxcdy4tXSovaWc7XHJcblxyXG4gICAgICAgIC8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMzI4Njc4NS9nZXQtdmlkZW8taWQtZnJvbS12aW1lby11cmxcclxuICAgICAgICBsZXQgdm1VcmxSZWdFeHA6IFJlZ0V4cCA9IC8oaHR0cHM/OlxcL1xcLyk/KD86d3d3XFwufHBsYXllclxcLik/dmltZW8uY29tXFwvKD86Y2hhbm5lbHNcXC8oPzpcXHcrXFwvKT98Z3JvdXBzXFwvKFteXFwvXSopXFwvdmlkZW9zXFwvfGFsYnVtXFwvKFxcZCspXFwvdmlkZW9cXC98dmlkZW9cXC98KShcXGQrKSg/OiR8XFwvfFxcPykvO1xyXG5cclxuICAgICAgICAvLyN0b2RvXHJcbiAgICAgICAgLy9sZXQgY2g5VXJsUmVnRXhwOiBSZWdFeHAgPSAvaHR0cD8vO1xyXG5cclxuICAgICAgICBpZiAodXJsICYmIHVybC5tYXRjaCh5dFVybFJlZ0V4cCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3lvdXR1YmUgdXJsIG1hdGNoZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuIFZpZGVvT3JpZ2luRW51bS5Zb3VUdWJlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXJsICYmIHVybC5tYXRjaCh2bVVybFJlZ0V4cCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZpbWVvIHVybCBtYXRjaGVkJyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBWaWRlb09yaWdpbkVudW0uVmltZW87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmICh1cmwubWF0Y2goY2g5VXJsUmVnRXhwKSkge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnY2hhbm5lbDkgdXJsIG1hdGNoZWQnKTsgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgcmV0dXJuIFZpZGVvT3JpZ2luLkNoYW5uZWw5O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4gVmlkZW9PcmlnaW5FbnVtLlVua25vd247XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvLWRldGFpbHMvdmlkZW8udmFsaWRhdGlvbi5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgb0VtYmVkIH0gZnJvbSAnLi92aWRlby1vZW1iZWQuaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3Mgb0VtYmVkVmltZW8gaW1wbGVtZW50cyBvRW1iZWQge1xyXG4gICAgdHlwZTogYW55O1xyXG4gICAgdmVyc2lvbjogYW55O1xyXG4gICAgcHJvdmlkZXJfbmFtZTogYW55O1xyXG4gICAgcHJvdmlkZXJfdXJsOiBhbnk7XHJcbiAgICB0aXRsZTogYW55O1xyXG4gICAgYXV0aG9yX25hbWU6IGFueTtcclxuICAgIGF1dGhvcl91cmw6IGFueTtcclxuICAgIGlzX3BsdXM6IGFueTtcclxuICAgIGh0bWw6IGFueTtcclxuICAgIHdpZHRoOiBhbnk7XHJcbiAgICBoZWlnaHQ6IGFueTtcclxuICAgIGR1cmF0aW9uOiBhbnk7XHJcbiAgICBkZXNjcmlwdGlvbjogYW55O1xyXG4gICAgdGh1bWJuYWlsX3VybDogYW55O1xyXG4gICAgdGh1bWJuYWlsX3dpZHRoOiBhbnk7XHJcbiAgICB0aHVtYm5haWxfaGVpZ2h0OiBhbnk7XHJcbiAgICB0aHVtYm5haWxfdXJsX3dpdGhfcGxheV9idXR0b246IGFueTtcclxuICAgIHVwbG9hZF9kYXRlOiBhbnk7XHJcbiAgICB2aWRlb19pZDogYW55O1xyXG4gICAgdXJpOiBhbnk7XHJcbiAgICBcclxuICAgIHB1YmxpYyBwcm92aWRlck5hbWUgOiBzdHJpbmcgPSBcIlZpbWVvXCI7XHJcblxyXG4gICAgcHVibGljIG1hdGNoUHJvdmlkZXJCeVVybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTMyODY3ODUvZ2V0LXZpZGVvLWlkLWZyb20tdmltZW8tdXJsXHJcbiAgICAgICAgbGV0IHZtVXJsUmVnRXhwOiBSZWdFeHAgPSAvaHR0cHM/OlxcL1xcLyg/Ond3d1xcLnxwbGF5ZXJcXC4pP3ZpbWVvLmNvbVxcLyg/OmNoYW5uZWxzXFwvKD86XFx3K1xcLyk/fGdyb3Vwc1xcLyhbXlxcL10qKVxcL3ZpZGVvc1xcL3xhbGJ1bVxcLyhcXGQrKVxcL3ZpZGVvXFwvfHZpZGVvXFwvfCkoXFxkKykoPzokfFxcL3xcXD8pLztcclxuXHJcbiAgICAgICAgcmV0dXJuIHVybC5tYXRjaCh2bVVybFJlZ0V4cCk/dHJ1ZTpmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29udGVudFVybCh1cmw6IHN0cmluZykgOiBzdHJpbmd7XHJcbiAgICAgICAgdmFyIG9FbWJlZEJhc2VVcmwgPSBcImh0dHBzOi8vdmltZW8uY29tL2FwaS9vZW1iZWQuanNvbj91cmw9XCI7XHJcbiAgICAgICAgdmFyIGZpbmFsVXJsID0gb0VtYmVkQmFzZVVybCArIHVybDtcclxuICAgICAgICByZXR1cm4gZmluYWxVcmw7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvLW9lbWJlZC9vZW1iZWQtdmltZW8udHMiLCJpbXBvcnQgeyBvRW1iZWQgfSBmcm9tICcuL3ZpZGVvLW9lbWJlZC5pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBvRW1iZWRZb3VUdWJlIGltcGxlbWVudHMgb0VtYmVkIHtcclxuICAgIHR5cGU6IGFueTtcclxuICAgIHZlcnNpb246IGFueTtcclxuICAgIHByb3ZpZGVyX25hbWU6IGFueTtcclxuICAgIHByb3ZpZGVyX3VybDogYW55O1xyXG4gICAgdGl0bGU6IGFueTtcclxuICAgIGF1dGhvcl9uYW1lOiBhbnk7XHJcbiAgICBhdXRob3JfdXJsOiBhbnk7XHJcbiAgICBpc19wbHVzOiBhbnk7XHJcbiAgICBodG1sOiBhbnk7XHJcbiAgICB3aWR0aDogYW55O1xyXG4gICAgaGVpZ2h0OiBhbnk7XHJcbiAgICBkdXJhdGlvbjogYW55O1xyXG4gICAgZGVzY3JpcHRpb246IGFueTtcclxuICAgIHRodW1ibmFpbF91cmw6IGFueTtcclxuICAgIHRodW1ibmFpbF93aWR0aDogYW55O1xyXG4gICAgdGh1bWJuYWlsX2hlaWdodDogYW55O1xyXG4gICAgdGh1bWJuYWlsX3VybF93aXRoX3BsYXlfYnV0dG9uOiBhbnk7XHJcbiAgICB1cGxvYWRfZGF0ZTogYW55O1xyXG4gICAgdmlkZW9faWQ6IGFueTtcclxuICAgIHVyaTogYW55O1xyXG5cclxuICAgIHB1YmxpYyBwcm92aWRlck5hbWUgPSBcIllvdVR1YmVcIjtcclxuXHJcbiAgICBwdWJsaWMgbWF0Y2hQcm92aWRlckJ5VXJsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIC8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81ODMwMzg3L2hvdy10by1maW5kLWFsbC15b3V0dWJlLXZpZGVvLWlkcy1pbi1hLXN0cmluZy11c2luZy1hLXJlZ2V4LzU4MzExOTEjNTgzMTE5MVxyXG4gICAgICAgIGxldCB5dFVybFJlZ0V4cDogUmVnRXhwID0gL2h0dHBzPzpcXC9cXC8oPzpbMC05QS1aLV0rXFwuKT8oPzp5b3V0dVxcLmJlXFwvfHlvdXR1YmUoPzotbm9jb29raWUpP1xcLmNvbVxcUyo/W15cXHdcXHMtXSkoW1xcdy1dezExfSkoPz1bXlxcdy1dfCQpKD8hWz89JislXFx3Li1dKig/OlsnXCJdW148Pl0qPnw8XFwvYT4pKVs/PSYrJVxcdy4tXSovaWc7XHJcblxyXG4gICAgICAgIHJldHVybiAodXJsLm1hdGNoKHl0VXJsUmVnRXhwKSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbnRlbnRVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciBvRW1iZWRCYXNlVXJsID0gXCJodHRwOi8vd3d3LnlvdXR1YmUuY29tL29lbWJlZD91cmw9XCI7XHJcbiAgICAgICAgdmFyIGZpbmFsVXJsID0gb0VtYmVkQmFzZVVybCArIHVybDtcclxuICAgICAgICByZXR1cm4gZmluYWxVcmw7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvLW9lbWJlZC9vZW1iZWQteW91dHViZS50cyIsImV4cG9ydCAqIGZyb20gJy4uL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuLi92aWRlby1kZXRhaWxzL3ZpZGVvLWRldGFpbHMuY29tcG9uZW50JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvL3ZpZGVvcy5jb21wb25lbnRzLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgVmlkZW9EZXRhaWxzQ29tcG9uZW50LCBWaWRlb0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3ZpZGVvL3ZpZGVvcy5jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiAndmlkZW8tbGlzdCcsIGNvbXBvbmVudDogVmlkZW9MaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICd2aWRlby1kZXRhaWxzJywgY29tcG9uZW50OiBWaWRlb0RldGFpbHNDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ3ZpZGVvLWRldGFpbHMvOmlkJywgY29tcG9uZW50OiBWaWRlb0RldGFpbHNDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgICAgICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gICAgICAgIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbiAgICBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWRlb3NSb3V0aW5nTW9kdWxlIHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlb3Mtcm91dGluZy5tb2R1bGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBWaWRlb0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWaWRlb0RldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3ZpZGVvLWRldGFpbHMvdmlkZW8tZGV0YWlscy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWaWRlb3NSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi92aWRlb3Mtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBWaWRlb1NlcnZpY2UsIG9FbWJlZFNlcnZpY2UgfSBmcm9tICcuL3ZpZGVvL3ZpZGVvLnNlcnZpY2VzJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgVW5pdmVyc2FsTW9kdWxlLFxyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBWaWRlb3NSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlXHJcbiAgICBdXHJcbiAgICAsXHJcbmRlY2xhcmF0aW9uczogW1xyXG4gICAgVmlkZW9MaXN0Q29tcG9uZW50LFxyXG4gICAgVmlkZW9EZXRhaWxzQ29tcG9uZW50XHJcbl0sXHJcbnByb3ZpZGVyczogW1ZpZGVvU2VydmljZSwgb0VtYmVkU2VydmljZV1cclxuLy8sICAgICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFZpZGVvc01vZHVsZSB7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvcy5tb2R1bGUudHMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xcclxcbiAgICAuYm9keS1jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImxpIC5nbHlwaGljb24ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIEhpZ2hsaWdodGluZyBydWxlcyBmb3IgbmF2IG1lbnUgaXRlbXMgKi9cXHJcXG5saS5saW5rLWFjdGl2ZSBhLFxcclxcbmxpLmxpbmstYWN0aXZlIGE6aG92ZXIsXFxyXFxubGkubGluay1hY3RpdmUgYTpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTg5Qzc7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogS2VlcCB0aGUgbmF2IG1lbnUgaW5kZXBlbmRlbnQgb2Ygc2Nyb2xsaW5nIGFuZCBvbiB0b3Agb2Ygb3RoZXIgaXRlbXMgKi9cXHJcXG4ubWFpbi1uYXYge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCBjb252ZXJ0IHRoZSBuYXYgbWVudSB0byBhIHZlcnRpY2FsIHNpZGViYXIgKi9cXHJcXG4gICAgLm1haW4tbmF2IHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDIwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXIge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhci1oZWFkZXIge1xcclxcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhci1jb2xsYXBzZSB7XFxyXFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIHVsIHtcXHJcXG4gICAgICAgIGZsb2F0OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXIgbGkge1xcclxcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDZweDtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIGxpIGEge1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXIgYSB7XFxyXFxuICAgICAgICAvKiBJZiBhIG1lbnUgaXRlbSdzIHRleHQgaXMgdG9vIGxvbmcsIHRydW5jYXRlIGl0ICovXFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHR1bCB7IHBhZGRpbmc6MDsgIG1hcmdpbjoyMHB4IGF1dG87IGxpc3Qtc3R5bGUtdHlwZTogbm9uZTt9XFxyXFxuICBcXHRsaSB7IGRpc3BsYXk6aW5saW5lOyB9XFxyXFxuICAvKiAgICAgIC50bnsgXFxyXFxuXFx0ICAgbWFyZ2luOjJweCAwcHg7XFxyXFxuXFx0ICAgYm94LXNoYWRvdzojOTk5IDFweCAxcHggM3B4IDFweDsgXFxyXFxuXFx0ICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgfSAqL1xcclxcbiAgICBsaSB7IHRleHQtZGVjb3JhdGlvbjogbm9uZTt9XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby1saXN0L3ZpZGVvLWxpc3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J2NvbnRhaW5lci1mbHVpZCc+XFxyXFxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tMyc+XFxyXFxuICAgICAgICAgICAgPG5hdi1tZW51PjwvbmF2LW1lbnU+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS05IGJvZHktY29udGVudCc+XFxyXFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkNvdW50ZXI8L2gxPlxcclxcblxcclxcbjxwPlRoaXMgaXMgYSBzaW1wbGUgZXhhbXBsZSBvZiBhbiBBbmd1bGFyIDIgY29tcG9uZW50LjwvcD5cXHJcXG5cXHJcXG48cD5DdXJyZW50IGNvdW50OiA8c3Ryb25nPnt7IGN1cnJlbnRDb3VudCB9fTwvc3Ryb25nPjwvcD5cXHJcXG5cXHJcXG48YnV0dG9uIChjbGljayk9XFxcImluY3JlbWVudENvdW50ZXIoKVxcXCI+SW5jcmVtZW50PC9idXR0b24+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5WaWRlb3MgU2FtcGxlPC9oMT5cXHJcXG5cXHJcXG48cD5UaGlzIGNvbXBvbmVudCBzaG93cyBhIHNpbXBsZSBmZXRjaGluZyBvZiBXZWIgQVBJIGRhdGEuPC9wPlxcclxcblxcclxcbjxwICpuZ0lmPVxcXCIhdmlkZW9zXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPlxcclxcblxcclxcbjx0YWJsZSBjbGFzcz0ndGFibGUnICpuZ0lmPVxcXCJ2aWRlb3NcXFwiPlxcclxcbiAgICA8dGhlYWQ+XFxyXFxuICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgPHRoPkNyZWF0ZWQ8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5DYXRlZ29yeTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHZpZGVvIG9mIHZpZGVvc1xcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPnt7IHZpZGVvLmNyZWF0ZWREYXRlIH19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+e3sgdmlkZW8uY2F0ZWdvcnkgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyB2aWRlby5uYW1lIH19PC90ZD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGJvZHk+XFxyXFxuPC90YWJsZT5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5IZWxsbywgd29ybGQhPC9oMT5cXHJcXG48cD5XZWxjb21lIHRvIHlvdXIgbmV3IHNpbmdsZS1wYWdlIGFwcGxpY2F0aW9uLCBidWlsdCB3aXRoOjwvcD5cXHJcXG48dWw+XFxyXFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL2dldC5hc3AubmV0Lyc+QVNQLk5FVCBDb3JlPC9hPiBhbmQgPGEgaHJlZj0naHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS82N2VmOHNiZC5hc3B4Jz5DIzwvYT4gZm9yIGNyb3NzLXBsYXRmb3JtIHNlcnZlci1zaWRlIGNvZGU8L2xpPlxcclxcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9hbmd1bGFyLmlvLyc+QW5ndWxhciAyPC9hPiBhbmQgPGEgaHJlZj0naHR0cDovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvJz5UeXBlU2NyaXB0PC9hPiBmb3IgY2xpZW50LXNpZGUgY29kZTwvbGk+XFxyXFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL3dlYnBhY2suZ2l0aHViLmlvLyc+V2VicGFjazwvYT4gZm9yIGJ1aWxkaW5nIGFuZCBidW5kbGluZyBjbGllbnQtc2lkZSByZXNvdXJjZXM8L2xpPlxcclxcbiAgICA8bGk+PGEgaHJlZj0naHR0cDovL2dldGJvb3RzdHJhcC5jb20vJz5Cb290c3RyYXA8L2E+IGZvciBsYXlvdXQgYW5kIHN0eWxpbmc8L2xpPlxcclxcbjwvdWw+XFxyXFxuPHA+VG8gaGVscCB5b3UgZ2V0IHN0YXJ0ZWQsIHdlJ3ZlIGFsc28gc2V0IHVwOjwvcD5cXHJcXG48dWw+XFxyXFxuICAgIDxsaT48c3Ryb25nPkNsaWVudC1zaWRlIG5hdmlnYXRpb248L3N0cm9uZz4uIEZvciBleGFtcGxlLCBjbGljayA8ZW0+Q291bnRlcjwvZW0+IHRoZW4gPGVtPkJhY2s8L2VtPiB0byByZXR1cm4gaGVyZS48L2xpPlxcclxcbiAgICA8bGk+PHN0cm9uZz5TZXJ2ZXItc2lkZSBwcmVyZW5kZXJpbmc8L3N0cm9uZz4uIEZvciBmYXN0ZXIgaW5pdGlhbCBsb2FkaW5nIGFuZCBpbXByb3ZlZCBTRU8sIHlvdXIgQW5ndWxhciAyIGFwcCBpcyBwcmVyZW5kZXJlZCBvbiB0aGUgc2VydmVyLiBUaGUgcmVzdWx0aW5nIEhUTUwgaXMgdGhlbiB0cmFuc2ZlcnJlZCB0byB0aGUgYnJvd3NlciB3aGVyZSBhIGNsaWVudC1zaWRlIGNvcHkgb2YgdGhlIGFwcCB0YWtlcyBvdmVyLjwvbGk+XFxyXFxuICAgIDxsaT48c3Ryb25nPldlYnBhY2sgZGV2IG1pZGRsZXdhcmU8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHRoZXJlJ3Mgbm8gbmVlZCB0byBydW4gdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wuIFlvdXIgY2xpZW50LXNpZGUgcmVzb3VyY2VzIGFyZSBkeW5hbWljYWxseSBidWlsdCBvbiBkZW1hbmQuIFVwZGF0ZXMgYXJlIGF2YWlsYWJsZSBhcyBzb29uIGFzIHlvdSBtb2RpZnkgYW55IGZpbGUuPC9saT5cXHJcXG4gICAgPGxpPjxzdHJvbmc+SG90IG1vZHVsZSByZXBsYWNlbWVudDwvc3Ryb25nPi4gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgeW91IGRvbid0IGV2ZW4gbmVlZCB0byByZWxvYWQgdGhlIHBhZ2UgYWZ0ZXIgbWFraW5nIG1vc3QgY2hhbmdlcy4gV2l0aGluIHNlY29uZHMgb2Ygc2F2aW5nIGNoYW5nZXMgdG8gZmlsZXMsIHlvdXIgQW5ndWxhciAyIGFwcCB3aWxsIGJlIHJlYnVpbHQgYW5kIGEgbmV3IGluc3RhbmNlIGluamVjdGVkIGlzIGludG8gdGhlIHBhZ2UuPC9saT5cXHJcXG4gICAgPGxpPjxzdHJvbmc+RWZmaWNpZW50IHByb2R1Y3Rpb24gYnVpbGRzPC9zdHJvbmc+LiBJbiBwcm9kdWN0aW9uIG1vZGUsIGRldmVsb3BtZW50LXRpbWUgZmVhdHVyZXMgYXJlIGRpc2FibGVkLCBhbmQgdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wgcHJvZHVjZXMgbWluaWZpZWQgc3RhdGljIENTUyBhbmQgSmF2YVNjcmlwdCBmaWxlcy48L2xpPlxcclxcbjwvdWw+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J21haW4tbmF2Jz5cXHJcXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1oZWFkZXInPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+RG90TmV0VmlkZW9zQ29yZTwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJz48L3NwYW4+IEhvbWVcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvY291bnRlciddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1lZHVjYXRpb24nPjwvc3Bhbj4gQ291bnRlclxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9mZXRjaC1kYXRhJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gRmV0Y2ggZGF0YVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy92aWRlby1saXN0J11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWZpbG0nPjwvc3Bhbj4gVmlkZW9zXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgzPlZpZGVvIERldGFpbHM8L2gzPlxcclxcbjxkaXYgKm5nSWY9XFxcInZpZGVvXFxcIj5cXHJcXG48Zm9ybSAjZm9ybT1cXFwibmdGb3JtXFxcIiBub3ZhbGlkYXRlIChzdWJtaXQpPVxcXCJvblN1Ym1pdChmb3JtKVxcXCIgPiAgICBcXHJcXG4gICAgPGZpZWxkc2V0IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInZpZGVvVGl0bGVcXFwiPlRpdGxlOiA8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJ2aWRlby50aXRsZVxcXCIgbmFtZT1cXFwidmlkZW8udGl0bGVcXFwiIHBsYWNlaG9sZGVyPVxcXCJUaXRsZVxcXCIgaWQ9XFxcInZpZGVvVGl0bGVcXFwiIC8+ICAgICAgICBcXHJcXG4gICAgPC9maWVsZHNldD5cXHJcXG4gICAgPGZpZWxkc2V0IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInZpZGVvVGl0bGVcXFwiPkRlc2NyaXB0aW9uOiA8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJ2aWRlby5kZXNjcmlwdGlvblxcXCIgbmFtZT1cXFwidmlkZW8uZGVzY3JpcHRpb25cXFwiIHBsYWNlaG9sZGVyPVxcXCJEZXNjcmlwdGlvblxcXCIgaWQ9XFxcInZpZGVvRGVzY3JpcHRpb25cXFwiIC8+ICAgICAgICBcXHJcXG4gICAgPC9maWVsZHNldD5cXHJcXG4gICAgPGZpZWxkc2V0IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInZpZGVvVXJsXFxcIj5Vcmw6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbbmdNb2RlbF09XFxcInZpZGVvLnVybFxcXCIgKG5nTW9kZWxDaGFuZ2UpPVxcXCJ2YWxpZGF0ZVZpZGVvVXJsKCRldmVudClcXFwiIG5hbWU9XFxcInZpZGVvLnVybFxcXCIgcGxhY2Vob2xkZXI9XFxcIlVybFxcXCIgaWQ9XFxcInZpZGVvVXJsXFxcIiAvPlxcclxcbiAgICA8L2ZpZWxkc2V0PiAgICBcXHJcXG4gICAgPGZpZWxkc2V0IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInZpZGVvT3JpZ2luXFxcIj5PcmlnaW46PC9sYWJlbD5cXHJcXG4gICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwidmlkZW8udmlkZW9PcmlnaW5cXFwiIG5hbWU9XFxcInZpZGVvLnZpZGVvT3JpZ2luXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBvcmlnaW4gb2YgdmlkZW9PcmlnaW5zIHwga2V5c1xcXCIgW3ZhbHVlXT1cXFwib3JpZ2luLmtleVxcXCI+e3tvcmlnaW4udmFsdWV9fTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICA8L2ZpZWxkc2V0PlxcclxcbiAgICA8ZmllbGRzZXQgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsPlRodW1ibmFpbCBJbWFnZTo8L2xhYmVsPlxcclxcbiAgICAgICAgPGltZyBbc3JjXSA9IFxcXCJ2aWRlby50aHVtYlVybFxcXCIgLz5cXHJcXG4gICAgPC9maWVsZHNldD5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPk9rPC9idXR0b24+XFxyXFxuICAgIHt7IGZvcm0udmFsdWUgfCBqc29ufX1cXHJcXG4gICAge3sgdmlkZW8gfCBqc29uIH19XFxyXFxuPC9mb3JtPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCIgW2lubmVySHRtbF09XFxcInByZXZpZXc/Lmh0bWwgfCBzYWZlOiAnaHRtbCdcXFwiPlxcclxcblxcclxcbiAgICA8aHIgLz5cXHJcXG4gICAgPCEtLTxkaXYgKm5nSWY9XFxcImRpc3BsYXlNb2RlID09PSAnd2F0Y2gnXFxcIj5cXHJcXG4gICAgICAgIDx2aWRlby13YXRjaCBbdmlkZW9dPVxcXCJ2aWRlb0RldGFpbHNcXFwiPlxcclxcbiAgICAgICAgPC92aWRlby13YXRjaD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgKm5nSWY9XFxcImRpc3BsYXlNb2RlICE9PSAnd2F0Y2gnXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XFxcInZpZGVvRm9ybVxcXCIgaWQ9XFxcInZpZGVvLWRldGFpbHMtYWRkXFxcIiAqbmdJZj1cXFwidmlkZW9EZXRhaWxzXFxcIiAobmdTdWJtaXQpPVxcXCJzYXZlVmlkZW8odmlkZW9Gb3JtLnZhbHVlKVxcXCI+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPlJhdGluZzogPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJyYXRpbmdcXFwiIFsobmdNb2RlbCldPVxcXCJ2aWRlb0RldGFpbHMucmF0aW5nXFxcIiBuZ0NvbnRyb2w9XFxcInJhdGluZ1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcIiF2aWRlb0Zvcm0uY29udHJvbHMucmF0aW5nPy52YWxpZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFRoZSByYXRpbmcgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDUhXFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XFxyXFxuICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPnVybDogPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJ1cmxcXFwiIFsobmdNb2RlbCldPVxcXCJ2aWRlb0RldGFpbHMudXJsXFxcIiBuZ0NvbnRyb2w9XFxcInVybFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPHVsICpuZ0lmPVxcXCIhdmlkZW9Gb3JtLmNvbnRyb2xzLnVybD8udmFsaWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgVGhlIFVSTCBpcyBpbnZhbGlkLiBQb3NzaWJsZSBpc3N1ZXM6PGJyIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcInZpZGVvRm9ybS5jb250cm9scy51cmw/LmVtcHR5VXJsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgVVJMIGNhbm5vdCBiZSBlbXB0eVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwidmlkZW9Gb3JtLmNvbnRyb2xzLnVybD8uaW52YWxpZFVybFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFVSTCBmb3JtYXQgd2FzIG5vdCByZWNvZ25pemVkIGJ5IHRoZSBzeXN0ZW0uXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XFxyXFxuICAgICAgICAgICAgPGZpZWxkc2V0PlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJWaWRlb09yaWdpblxcXCI+U291cmNlOjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInZpZGVvRGV0YWlscy52aWRlb09yaWdpblxcXCIgbmdDb250cm9sPVxcXCJ2aWRlb09yaWdpblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgb3JpZ2luIG9mIHZpZGVvT3JpZ2lucyB8IGtleXNcXFwiIFt2YWx1ZV09XFxcIm9yaWdpbi5rZXlcXFwiPnt7b3JpZ2luLnZhbHVlfX08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxcclxcblxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwidWkgYnV0dG9uXFxcIj5TdWJtaXQ8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+LS0+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL3ZpZGVvcy92aWRlby1kZXRhaWxzL3ZpZGVvLWRldGFpbHMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiICpuZ0lmPVxcXCJ2aWRlb3NcXFwiPlxcclxcbiAgICA8IS0tKGNsaWNrKT1cXFwib25WaWRlb1NlbGVjdGVkKHZpZGVvKVxcXCItLT5cXHJcXG5cXHJcXG4gICAgPGgxPiBIZWxsbyBmcm9tIHZpZGVvLWxpc3QgY29tcG9uZW50IDwvaDE+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nRm9yPVxcXCJsZXQgdmlkZW8gb2YgdmlkZW9zIHwgYXN5bmNcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTQgY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRodW1ibmFpbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XFxcInZpZGVvLnRodW1iVXJsXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgPGgzPnt7dmlkZW8udGl0bGV9fTwvaDM+XFxyXFxuICAgICAgICAgICAgPHA+PHN0cm9uZz5PcmlnaW5hbCBUaXRsZTogPC9zdHJvbmc+e3t2aWRlby5vcmlnaW5hbFRpdGxlfX08L3A+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwidmlkZW8uZGVzY3JpcHRpb25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPk9yaWdpbmFsIERlc2NyaXB0aW9uOiA8L3N0cm9uZz57e3ZpZGVvLm9yaWdpbmFsRGVzY3JpcHRpb259fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPHA+PGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIj5QbGF5PC9hPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIiF2aWRlby5kZXNjcmlwdGlvbiAmJiB2aWRlby5vcmlnaW5hbERlc2NyaXB0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5PcmlnaW5hbCBEZXNjcmlwdGlvbjogPC9zdHJvbmc+e3t2aWRlby5vcmlnaW5hbERlc2NyaXB0aW9ufX08L3A+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPHA+PGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIj5QbGF5PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3ZpZGVvLWRldGFpbHMvJywgdmlkZW8uaWRdXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiByb2xlPVxcXCJidXR0b25cXFwiPkVkaXQ8L2E+PC9wPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy92aWRlby1kZXRhaWxzLycsIDBdXFxcIj5BZGRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTNcXFwiICpuZ0Zvcj1cXFwiIGxldCB2aWRlbyBvZiB2aWRlb3MgXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aHVtYm5haWxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cCAqbmdJZj1cXFwiIXZpZGVvc1xcXCI+PGVtPkxvYWRpbmcuLi48L2VtPjwvcD4tLT5cXHJcXG5cXHJcXG4gICAgICAgIDwhLS08dGFibGUgY2xhc3M9J3RhYmxlJz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DcmVhdGVkPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNhdGVnb3J5PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RWRpdDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHZpZGVvIG9mIHZpZGVvc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB2aWRlby5jcmVhdGVkRGF0ZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB2aWRlby5jYXRlZ29yeSB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB2aWRlby5uYW1lIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvdmlkZW8tZGV0YWlscycsIHZpZGVvLm5hbWVdXFxcIj5EZXRhaWxzIDwvYT48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPi0tPlxcclxcblxcclxcblxcclxcbiAgICAgICAgPCEtLTxpbWcgKm5nSWY9XFxcInZpZGVvLnRodW1iVXJsXFxcIiBbc3JjXT1cXFwidmlkZW8udGh1bWJVcmxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcHRpb25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGgzPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXSA9IFxcXCJbJ1ZpZGVvJywge21vZGU6ICd3YXRjaCcsIGlkOiB2aWRlby5faWR9XVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAge3t2aWRlby50aXRsZX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cD5MZW5ndGg6IHt7dmlkZW8ubGVuZ3RofX08L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cD5XYXRjaGVkOiB7e3ZpZGVvLndhdGNoZWRDb3VudH19PC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHA+UmF0aW5nOiB7e3ZpZGVvLnJhdGluZ319PC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHA+PGEgW2hyZWZdPVxcXCJ2aWRlby5sb2NhbFVybFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIj5XYXRjaDwvYT4gPGEgW2hyZWZdPVxcXCJ2aWRlby51cmxcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XFxcImJ1dHRvblxcXCI+V2F0Y2g8L2E+PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXHJcXG4gICAgICAgIDwhLS08L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2Pi0tPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvdmlkZW9zL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIEFuIGV4ZWN1dGlvbiBjb250ZXh0IGFuZCBhIGRhdGEgc3RydWN0dXJlIHRvIG9yZGVyIHRhc2tzIGFuZCBzY2hlZHVsZSB0aGVpclxuICogZXhlY3V0aW9uLiBQcm92aWRlcyBhIG5vdGlvbiBvZiAocG90ZW50aWFsbHkgdmlydHVhbCkgdGltZSwgdGhyb3VnaCB0aGVcbiAqIGBub3coKWAgZ2V0dGVyIG1ldGhvZC5cbiAqXG4gKiBFYWNoIHVuaXQgb2Ygd29yayBpbiBhIFNjaGVkdWxlciBpcyBjYWxsZWQgYW4ge0BsaW5rIEFjdGlvbn0uXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIFNjaGVkdWxlciB7XG4gKiAgIG5vdygpOiBudW1iZXI7XG4gKiAgIHNjaGVkdWxlKHdvcmssIGRlbGF5Pywgc3RhdGU/KTogU3Vic2NyaXB0aW9uO1xuICogfVxuICogYGBgXG4gKlxuICogQGNsYXNzIFNjaGVkdWxlclxuICovXG52YXIgU2NoZWR1bGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY2hlZHVsZXIoU2NoZWR1bGVyQWN0aW9uLCBub3cpIHtcbiAgICAgICAgaWYgKG5vdyA9PT0gdm9pZCAwKSB7IG5vdyA9IFNjaGVkdWxlci5ub3c7IH1cbiAgICAgICAgdGhpcy5TY2hlZHVsZXJBY3Rpb24gPSBTY2hlZHVsZXJBY3Rpb247XG4gICAgICAgIHRoaXMubm93ID0gbm93O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZXMgYSBmdW5jdGlvbiwgYHdvcmtgLCBmb3IgZXhlY3V0aW9uLiBNYXkgaGFwcGVuIGF0IHNvbWUgcG9pbnQgaW5cbiAgICAgKiB0aGUgZnV0dXJlLCBhY2NvcmRpbmcgdG8gdGhlIGBkZWxheWAgcGFyYW1ldGVyLCBpZiBzcGVjaWZpZWQuIE1heSBiZSBwYXNzZWRcbiAgICAgKiBzb21lIGNvbnRleHQgb2JqZWN0LCBgc3RhdGVgLCB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgYHdvcmtgIGZ1bmN0aW9uLlxuICAgICAqXG4gICAgICogVGhlIGdpdmVuIGFyZ3VtZW50cyB3aWxsIGJlIHByb2Nlc3NlZCBhbiBzdG9yZWQgYXMgYW4gQWN0aW9uIG9iamVjdCBpbiBhXG4gICAgICogcXVldWUgb2YgYWN0aW9ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RhdGU6ID9UKTogP1N1YnNjcmlwdGlvbn0gd29yayBBIGZ1bmN0aW9uIHJlcHJlc2VudGluZyBhXG4gICAgICogdGFzaywgb3Igc29tZSB1bml0IG9mIHdvcmsgdG8gYmUgZXhlY3V0ZWQgYnkgdGhlIFNjaGVkdWxlci5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5XSBUaW1lIHRvIHdhaXQgYmVmb3JlIGV4ZWN1dGluZyB0aGUgd29yaywgd2hlcmUgdGhlXG4gICAgICogdGltZSB1bml0IGlzIGltcGxpY2l0IGFuZCBkZWZpbmVkIGJ5IHRoZSBTY2hlZHVsZXIgaXRzZWxmLlxuICAgICAqIEBwYXJhbSB7VH0gW3N0YXRlXSBTb21lIGNvbnRleHR1YWwgZGF0YSB0aGF0IHRoZSBgd29ya2AgZnVuY3Rpb24gdXNlcyB3aGVuXG4gICAgICogY2FsbGVkIGJ5IHRoZSBTY2hlZHVsZXIuXG4gICAgICogQHJldHVybiB7U3Vic2NyaXB0aW9ufSBBIHN1YnNjcmlwdGlvbiBpbiBvcmRlciB0byBiZSBhYmxlIHRvIHVuc3Vic2NyaWJlXG4gICAgICogdGhlIHNjaGVkdWxlZCB3b3JrLlxuICAgICAqL1xuICAgIFNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAod29yaywgZGVsYXksIHN0YXRlKSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuU2NoZWR1bGVyQWN0aW9uKHRoaXMsIHdvcmspLnNjaGVkdWxlKHN0YXRlLCBkZWxheSk7XG4gICAgfTtcbiAgICBTY2hlZHVsZXIubm93ID0gRGF0ZS5ub3cgPyBEYXRlLm5vdyA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICtuZXcgRGF0ZSgpOyB9O1xuICAgIHJldHVybiBTY2hlZHVsZXI7XG59KCkpO1xuZXhwb3J0cy5TY2hlZHVsZXIgPSBTY2hlZHVsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TY2hlZHVsZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvU2NoZWR1bGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi8uLi9PYnNlcnZhYmxlJyk7XG52YXIgY2F0Y2hfMSA9IHJlcXVpcmUoJy4uLy4uL29wZXJhdG9yL2NhdGNoJyk7XG5PYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5wcm90b3R5cGUuY2F0Y2ggPSBjYXRjaF8xLl9jYXRjaDtcbk9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnByb3RvdHlwZS5fY2F0Y2ggPSBjYXRjaF8xLl9jYXRjaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhdGNoLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yeGpzL2FkZC9vcGVyYXRvci9jYXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vLi4vT2JzZXJ2YWJsZScpO1xudmFyIGRlYm91bmNlVGltZV8xID0gcmVxdWlyZSgnLi4vLi4vb3BlcmF0b3IvZGVib3VuY2VUaW1lJyk7XG5PYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZGVib3VuY2VUaW1lID0gZGVib3VuY2VUaW1lXzEuZGVib3VuY2VUaW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVib3VuY2VUaW1lLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4uLy4uL09ic2VydmFibGUnKTtcbnZhciBkaXN0aW5jdFVudGlsQ2hhbmdlZF8xID0gcmVxdWlyZSgnLi4vLi4vb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQnKTtcbk9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnByb3RvdHlwZS5kaXN0aW5jdFVudGlsQ2hhbmdlZCA9IGRpc3RpbmN0VW50aWxDaGFuZ2VkXzEuZGlzdGluY3RVbnRpbENoYW5nZWQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaXN0aW5jdFVudGlsQ2hhbmdlZC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4uLy4uL09ic2VydmFibGUnKTtcbnZhciBkb18xID0gcmVxdWlyZSgnLi4vLi4vb3BlcmF0b3IvZG8nKTtcbk9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnByb3RvdHlwZS5kbyA9IGRvXzEuX2RvO1xuT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUucHJvdG90eXBlLl9kbyA9IGRvXzEuX2RvO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZG8uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvYWRkL29wZXJhdG9yL2RvLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi8uLi9PYnNlcnZhYmxlJyk7XG52YXIgc3dpdGNoTWFwXzEgPSByZXF1aXJlKCcuLi8uLi9vcGVyYXRvci9zd2l0Y2hNYXAnKTtcbk9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnByb3RvdHlwZS5zd2l0Y2hNYXAgPSBzd2l0Y2hNYXBfMS5zd2l0Y2hNYXA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zd2l0Y2hNYXAuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcC5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKCcuLi9TdWJzY3JpYmVyJyk7XG52YXIgYXN5bmNfMSA9IHJlcXVpcmUoJy4uL3NjaGVkdWxlci9hc3luYycpO1xuLyoqXG4gKiBFbWl0cyBhIHZhbHVlIGZyb20gdGhlIHNvdXJjZSBPYnNlcnZhYmxlIG9ubHkgYWZ0ZXIgYSBwYXJ0aWN1bGFyIHRpbWUgc3BhblxuICogaGFzIHBhc3NlZCB3aXRob3V0IGFub3RoZXIgc291cmNlIGVtaXNzaW9uLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5JdCdzIGxpa2Uge0BsaW5rIGRlbGF5fSwgYnV0IHBhc3NlcyBvbmx5IHRoZSBtb3N0XG4gKiByZWNlbnQgdmFsdWUgZnJvbSBlYWNoIGJ1cnN0IG9mIGVtaXNzaW9ucy48L3NwYW4+XG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9kZWJvdW5jZVRpbWUucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogYGRlYm91bmNlVGltZWAgZGVsYXlzIHZhbHVlcyBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSwgYnV0IGRyb3BzXG4gKiBwcmV2aW91cyBwZW5kaW5nIGRlbGF5ZWQgZW1pc3Npb25zIGlmIGEgbmV3IHZhbHVlIGFycml2ZXMgb24gdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZS4gVGhpcyBvcGVyYXRvciBrZWVwcyB0cmFjayBvZiB0aGUgbW9zdCByZWNlbnQgdmFsdWUgZnJvbSB0aGVcbiAqIHNvdXJjZSBPYnNlcnZhYmxlLCBhbmQgZW1pdHMgdGhhdCBvbmx5IHdoZW4gYGR1ZVRpbWVgIGVub3VnaCB0aW1lIGhhcyBwYXNzZWRcbiAqIHdpdGhvdXQgYW55IG90aGVyIHZhbHVlIGFwcGVhcmluZyBvbiB0aGUgc291cmNlIE9ic2VydmFibGUuIElmIGEgbmV3IHZhbHVlXG4gKiBhcHBlYXJzIGJlZm9yZSBgZHVlVGltZWAgc2lsZW5jZSBvY2N1cnMsIHRoZSBwcmV2aW91cyB2YWx1ZSB3aWxsIGJlIGRyb3BwZWRcbiAqIGFuZCB3aWxsIG5vdCBiZSBlbWl0dGVkIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS5cbiAqXG4gKiBUaGlzIGlzIGEgcmF0ZS1saW1pdGluZyBvcGVyYXRvciwgYmVjYXVzZSBpdCBpcyBpbXBvc3NpYmxlIGZvciBtb3JlIHRoYW4gb25lXG4gKiB2YWx1ZSB0byBiZSBlbWl0dGVkIGluIGFueSB0aW1lIHdpbmRvdyBvZiBkdXJhdGlvbiBgZHVlVGltZWAsIGJ1dCBpdCBpcyBhbHNvXG4gKiBhIGRlbGF5LWxpa2Ugb3BlcmF0b3Igc2luY2Ugb3V0cHV0IGVtaXNzaW9ucyBkbyBub3Qgb2NjdXIgYXQgdGhlIHNhbWUgdGltZSBhc1xuICogdGhleSBkaWQgb24gdGhlIHNvdXJjZSBPYnNlcnZhYmxlLiBPcHRpb25hbGx5IHRha2VzIGEge0BsaW5rIElTY2hlZHVsZXJ9IGZvclxuICogbWFuYWdpbmcgdGltZXJzLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkVtaXQgdGhlIG1vc3QgcmVjZW50IGNsaWNrIGFmdGVyIGEgYnVyc3Qgb2YgY2xpY2tzPC9jYXB0aW9uPlxuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciByZXN1bHQgPSBjbGlja3MuZGVib3VuY2VUaW1lKDEwMDApO1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAc2VlIHtAbGluayBhdWRpdFRpbWV9XG4gKiBAc2VlIHtAbGluayBkZWJvdW5jZX1cbiAqIEBzZWUge0BsaW5rIGRlbGF5fVxuICogQHNlZSB7QGxpbmsgc2FtcGxlVGltZX1cbiAqIEBzZWUge0BsaW5rIHRocm90dGxlVGltZX1cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gZHVlVGltZSBUaGUgdGltZW91dCBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgKG9yIHRoZSB0aW1lXG4gKiB1bml0IGRldGVybWluZWQgaW50ZXJuYWxseSBieSB0aGUgb3B0aW9uYWwgYHNjaGVkdWxlcmApIGZvciB0aGUgd2luZG93IG9mXG4gKiB0aW1lIHJlcXVpcmVkIHRvIHdhaXQgZm9yIGVtaXNzaW9uIHNpbGVuY2UgYmVmb3JlIGVtaXR0aW5nIHRoZSBtb3N0IHJlY2VudFxuICogc291cmNlIHZhbHVlLlxuICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXI9YXN5bmNdIFRoZSB7QGxpbmsgSVNjaGVkdWxlcn0gdG8gdXNlIGZvclxuICogbWFuYWdpbmcgdGhlIHRpbWVycyB0aGF0IGhhbmRsZSB0aGUgdGltZW91dCBmb3IgZWFjaCB2YWx1ZS5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgdGhhdCBkZWxheXMgdGhlIGVtaXNzaW9ucyBvZiB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlIGJ5IHRoZSBzcGVjaWZpZWQgYGR1ZVRpbWVgLCBhbmQgbWF5IGRyb3Agc29tZSB2YWx1ZXMgaWYgdGhleSBvY2N1clxuICogdG9vIGZyZXF1ZW50bHkuXG4gKiBAbWV0aG9kIGRlYm91bmNlVGltZVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2VUaW1lKGR1ZVRpbWUsIHNjaGVkdWxlcikge1xuICAgIGlmIChzY2hlZHVsZXIgPT09IHZvaWQgMCkgeyBzY2hlZHVsZXIgPSBhc3luY18xLmFzeW5jOyB9XG4gICAgcmV0dXJuIHRoaXMubGlmdChuZXcgRGVib3VuY2VUaW1lT3BlcmF0b3IoZHVlVGltZSwgc2NoZWR1bGVyKSk7XG59XG5leHBvcnRzLmRlYm91bmNlVGltZSA9IGRlYm91bmNlVGltZTtcbnZhciBEZWJvdW5jZVRpbWVPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVib3VuY2VUaW1lT3BlcmF0b3IoZHVlVGltZSwgc2NoZWR1bGVyKSB7XG4gICAgICAgIHRoaXMuZHVlVGltZSA9IGR1ZVRpbWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgIH1cbiAgICBEZWJvdW5jZVRpbWVPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IERlYm91bmNlVGltZVN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5kdWVUaW1lLCB0aGlzLnNjaGVkdWxlcikpO1xuICAgIH07XG4gICAgcmV0dXJuIERlYm91bmNlVGltZU9wZXJhdG9yO1xufSgpKTtcbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG52YXIgRGVib3VuY2VUaW1lU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERlYm91bmNlVGltZVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGVib3VuY2VUaW1lU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgZHVlVGltZSwgc2NoZWR1bGVyKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgdGhpcy5kdWVUaW1lID0gZHVlVGltZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIHRoaXMuZGVib3VuY2VkU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0VmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLmhhc1ZhbHVlID0gZmFsc2U7XG4gICAgfVxuICAgIERlYm91bmNlVGltZVN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJEZWJvdW5jZSgpO1xuICAgICAgICB0aGlzLmxhc3RWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmhhc1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hZGQodGhpcy5kZWJvdW5jZWRTdWJzY3JpcHRpb24gPSB0aGlzLnNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaE5leHQsIHRoaXMuZHVlVGltZSwgdGhpcykpO1xuICAgIH07XG4gICAgRGVib3VuY2VUaW1lU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlYm91bmNlZE5leHQoKTtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH07XG4gICAgRGVib3VuY2VUaW1lU3Vic2NyaWJlci5wcm90b3R5cGUuZGVib3VuY2VkTmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jbGVhckRlYm91bmNlKCk7XG4gICAgICAgIGlmICh0aGlzLmhhc1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodGhpcy5sYXN0VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5sYXN0VmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5oYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEZWJvdW5jZVRpbWVTdWJzY3JpYmVyLnByb3RvdHlwZS5jbGVhckRlYm91bmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGVib3VuY2VkU3Vic2NyaXB0aW9uID0gdGhpcy5kZWJvdW5jZWRTdWJzY3JpcHRpb247XG4gICAgICAgIGlmIChkZWJvdW5jZWRTdWJzY3JpcHRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGRlYm91bmNlZFN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICBkZWJvdW5jZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHRoaXMuZGVib3VuY2VkU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIERlYm91bmNlVGltZVN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG5mdW5jdGlvbiBkaXNwYXRjaE5leHQoc3Vic2NyaWJlcikge1xuICAgIHN1YnNjcmliZXIuZGVib3VuY2VkTmV4dCgpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVib3VuY2VUaW1lLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yeGpzL29wZXJhdG9yL2RlYm91bmNlVGltZS5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKCcuLi9TdWJzY3JpYmVyJyk7XG52YXIgdHJ5Q2F0Y2hfMSA9IHJlcXVpcmUoJy4uL3V0aWwvdHJ5Q2F0Y2gnKTtcbnZhciBlcnJvck9iamVjdF8xID0gcmVxdWlyZSgnLi4vdXRpbC9lcnJvck9iamVjdCcpO1xuLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbi8qKlxuICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgYWxsIGl0ZW1zIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIHRoYXQgYXJlIGRpc3RpbmN0IGJ5IGNvbXBhcmlzb24gZnJvbSB0aGUgcHJldmlvdXMgaXRlbS5cbiAqXG4gKiBJZiBhIGNvbXBhcmF0b3IgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIHRoZW4gaXQgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2ggaXRlbSB0byB0ZXN0IGZvciB3aGV0aGVyIG9yIG5vdCB0aGF0IHZhbHVlIHNob3VsZCBiZSBlbWl0dGVkLlxuICpcbiAqIElmIGEgY29tcGFyYXRvciBmdW5jdGlvbiBpcyBub3QgcHJvdmlkZWQsIGFuIGVxdWFsaXR5IGNoZWNrIGlzIHVzZWQgYnkgZGVmYXVsdC5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5BIHNpbXBsZSBleGFtcGxlIHdpdGggbnVtYmVyczwvY2FwdGlvbj5cbiAqIE9ic2VydmFibGUub2YoMSwgMSwgMiwgMiwgMiwgMSwgMSwgMiwgMywgMywgNClcbiAqICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAqICAgLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTsgLy8gMSwgMiwgMSwgMiwgMywgNFxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkFuIGV4YW1wbGUgdXNpbmcgYSBjb21wYXJlIGZ1bmN0aW9uPC9jYXB0aW9uPlxuICogaW50ZXJmYWNlIFBlcnNvbiB7XG4gKiAgICBhZ2U6IG51bWJlcixcbiAqICAgIG5hbWU6IHN0cmluZ1xuICogfVxuICpcbiAqIE9ic2VydmFibGUub2Y8UGVyc29uPihcbiAqICAgICB7IGFnZTogNCwgbmFtZTogJ0Zvbyd9LFxuICogICAgIHsgYWdlOiA3LCBuYW1lOiAnQmFyJ30sXG4gKiAgICAgeyBhZ2U6IDUsIG5hbWU6ICdGb28nfSlcbiAqICAgICB7IGFnZTogNiwgbmFtZTogJ0Zvbyd9KVxuICogICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgocDogUGVyc29uLCBxOiBQZXJzb24pID0+IHAubmFtZSA9PT0gcS5uYW1lKVxuICogICAgIC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogLy8gZGlzcGxheXM6XG4gKiAvLyB7IGFnZTogNCwgbmFtZTogJ0ZvbycgfVxuICogLy8geyBhZ2U6IDcsIG5hbWU6ICdCYXInIH1cbiAqIC8vIHsgYWdlOiA1LCBuYW1lOiAnRm9vJyB9XG4gKlxuICogQHNlZSB7QGxpbmsgZGlzdGluY3R9XG4gKiBAc2VlIHtAbGluayBkaXN0aW5jdFVudGlsS2V5Q2hhbmdlZH1cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY29tcGFyZV0gT3B0aW9uYWwgY29tcGFyaXNvbiBmdW5jdGlvbiBjYWxsZWQgdG8gdGVzdCBpZiBhbiBpdGVtIGlzIGRpc3RpbmN0IGZyb20gdGhlIHByZXZpb3VzIGl0ZW0gaW4gdGhlIHNvdXJjZS5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBpdGVtcyBmcm9tIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSB3aXRoIGRpc3RpbmN0IHZhbHVlcy5cbiAqIEBtZXRob2QgZGlzdGluY3RVbnRpbENoYW5nZWRcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmZ1bmN0aW9uIGRpc3RpbmN0VW50aWxDaGFuZ2VkKGNvbXBhcmUsIGtleVNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMubGlmdChuZXcgRGlzdGluY3RVbnRpbENoYW5nZWRPcGVyYXRvcihjb21wYXJlLCBrZXlTZWxlY3RvcikpO1xufVxuZXhwb3J0cy5kaXN0aW5jdFVudGlsQ2hhbmdlZCA9IGRpc3RpbmN0VW50aWxDaGFuZ2VkO1xudmFyIERpc3RpbmN0VW50aWxDaGFuZ2VkT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERpc3RpbmN0VW50aWxDaGFuZ2VkT3BlcmF0b3IoY29tcGFyZSwga2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5jb21wYXJlID0gY29tcGFyZTtcbiAgICAgICAgdGhpcy5rZXlTZWxlY3RvciA9IGtleVNlbGVjdG9yO1xuICAgIH1cbiAgICBEaXN0aW5jdFVudGlsQ2hhbmdlZE9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgRGlzdGluY3RVbnRpbENoYW5nZWRTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMuY29tcGFyZSwgdGhpcy5rZXlTZWxlY3RvcikpO1xuICAgIH07XG4gICAgcmV0dXJuIERpc3RpbmN0VW50aWxDaGFuZ2VkT3BlcmF0b3I7XG59KCkpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbnZhciBEaXN0aW5jdFVudGlsQ2hhbmdlZFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEaXN0aW5jdFVudGlsQ2hhbmdlZFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGlzdGluY3RVbnRpbENoYW5nZWRTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBjb21wYXJlLCBrZXlTZWxlY3Rvcikge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbik7XG4gICAgICAgIHRoaXMua2V5U2VsZWN0b3IgPSBrZXlTZWxlY3RvcjtcbiAgICAgICAgdGhpcy5oYXNLZXkgPSBmYWxzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wYXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBhcmUgPSBjb21wYXJlO1xuICAgICAgICB9XG4gICAgfVxuICAgIERpc3RpbmN0VW50aWxDaGFuZ2VkU3Vic2NyaWJlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHJldHVybiB4ID09PSB5O1xuICAgIH07XG4gICAgRGlzdGluY3RVbnRpbENoYW5nZWRTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIga2V5U2VsZWN0b3IgPSB0aGlzLmtleVNlbGVjdG9yO1xuICAgICAgICB2YXIga2V5ID0gdmFsdWU7XG4gICAgICAgIGlmIChrZXlTZWxlY3Rvcikge1xuICAgICAgICAgICAga2V5ID0gdHJ5Q2F0Y2hfMS50cnlDYXRjaCh0aGlzLmtleVNlbGVjdG9yKSh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBlcnJvck9iamVjdF8xLmVycm9yT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyb3JPYmplY3RfMS5lcnJvck9iamVjdC5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmhhc0tleSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdHJ5Q2F0Y2hfMS50cnlDYXRjaCh0aGlzLmNvbXBhcmUpKHRoaXMua2V5LCBrZXkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmplY3RfMS5lcnJvck9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycm9yT2JqZWN0XzEuZXJyb3JPYmplY3QuZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhc0tleSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJvb2xlYW4ocmVzdWx0KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIERpc3RpbmN0VW50aWxDaGFuZ2VkU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpc3RpbmN0VW50aWxDaGFuZ2VkLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yeGpzL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoJy4uL1N1YnNjcmliZXInKTtcbi8qIHRzbGludDplbmFibGU6bWF4LWxpbmUtbGVuZ3RoICovXG4vKipcbiAqIFBlcmZvcm0gYSBzaWRlIGVmZmVjdCBmb3IgZXZlcnkgZW1pc3Npb24gb24gdGhlIHNvdXJjZSBPYnNlcnZhYmxlLCBidXQgcmV0dXJuXG4gKiBhbiBPYnNlcnZhYmxlIHRoYXQgaXMgaWRlbnRpY2FsIHRvIHRoZSBzb3VyY2UuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkludGVyY2VwdHMgZWFjaCBlbWlzc2lvbiBvbiB0aGUgc291cmNlIGFuZCBydW5zIGFcbiAqIGZ1bmN0aW9uLCBidXQgcmV0dXJucyBhbiBvdXRwdXQgd2hpY2ggaXMgaWRlbnRpY2FsIHRvIHRoZSBzb3VyY2UuPC9zcGFuPlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvZG8ucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogUmV0dXJucyBhIG1pcnJvcmVkIE9ic2VydmFibGUgb2YgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLCBidXQgbW9kaWZpZWQgc28gdGhhdFxuICogdGhlIHByb3ZpZGVkIE9ic2VydmVyIGlzIGNhbGxlZCB0byBwZXJmb3JtIGEgc2lkZSBlZmZlY3QgZm9yIGV2ZXJ5IHZhbHVlLFxuICogZXJyb3IsIGFuZCBjb21wbGV0aW9uIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZS4gQW55IGVycm9ycyB0aGF0IGFyZSB0aHJvd24gaW5cbiAqIHRoZSBhZm9yZW1lbnRpb25lZCBPYnNlcnZlciBvciBoYW5kbGVycyBhcmUgc2FmZWx5IHNlbnQgZG93biB0aGUgZXJyb3IgcGF0aFxuICogb2YgdGhlIG91dHB1dCBPYnNlcnZhYmxlLlxuICpcbiAqIFRoaXMgb3BlcmF0b3IgaXMgdXNlZnVsIGZvciBkZWJ1Z2dpbmcgeW91ciBPYnNlcnZhYmxlcyBmb3IgdGhlIGNvcnJlY3QgdmFsdWVzXG4gKiBvciBwZXJmb3JtaW5nIG90aGVyIHNpZGUgZWZmZWN0cy5cbiAqXG4gKiBOb3RlOiB0aGlzIGlzIGRpZmZlcmVudCB0byBhIGBzdWJzY3JpYmVgIG9uIHRoZSBPYnNlcnZhYmxlLiBJZiB0aGUgT2JzZXJ2YWJsZVxuICogcmV0dXJuZWQgYnkgYGRvYCBpcyBub3Qgc3Vic2NyaWJlZCwgdGhlIHNpZGUgZWZmZWN0cyBzcGVjaWZpZWQgYnkgdGhlXG4gKiBPYnNlcnZlciB3aWxsIG5ldmVyIGhhcHBlbi4gYGRvYCB0aGVyZWZvcmUgc2ltcGx5IHNwaWVzIG9uIGV4aXN0aW5nXG4gKiBleGVjdXRpb24sIGl0IGRvZXMgbm90IHRyaWdnZXIgYW4gZXhlY3V0aW9uIHRvIGhhcHBlbiBsaWtlIGBzdWJzY3JpYmVgIGRvZXMuXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+TWFwIGV2ZXJ5IGV2ZXJ5IGNsaWNrIHRvIHRoZSBjbGllbnRYIHBvc2l0aW9uIG9mIHRoYXQgY2xpY2ssIHdoaWxlIGFsc28gbG9nZ2luZyB0aGUgY2xpY2sgZXZlbnQ8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIHBvc2l0aW9ucyA9IGNsaWNrc1xuICogICAuZG8oZXYgPT4gY29uc29sZS5sb2coZXYpKVxuICogICAubWFwKGV2ID0+IGV2LmNsaWVudFgpO1xuICogcG9zaXRpb25zLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAc2VlIHtAbGluayBtYXB9XG4gKiBAc2VlIHtAbGluayBzdWJzY3JpYmV9XG4gKlxuICogQHBhcmFtIHtPYnNlcnZlcnxmdW5jdGlvbn0gW25leHRPck9ic2VydmVyXSBBIG5vcm1hbCBPYnNlcnZlciBvYmplY3Qgb3IgYVxuICogY2FsbGJhY2sgZm9yIGBuZXh0YC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtlcnJvcl0gQ2FsbGJhY2sgZm9yIGVycm9ycyBpbiB0aGUgc291cmNlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2NvbXBsZXRlXSBDYWxsYmFjayBmb3IgdGhlIGNvbXBsZXRpb24gb2YgdGhlIHNvdXJjZS5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgaWRlbnRpY2FsIHRvIHRoZSBzb3VyY2UsIGJ1dCBydW5zIHRoZVxuICogc3BlY2lmaWVkIE9ic2VydmVyIG9yIGNhbGxiYWNrKHMpIGZvciBlYWNoIGl0ZW0uXG4gKiBAbWV0aG9kIGRvXG4gKiBAbmFtZSBkb1xuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZnVuY3Rpb24gX2RvKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcbiAgICByZXR1cm4gdGhpcy5saWZ0KG5ldyBEb09wZXJhdG9yKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpKTtcbn1cbmV4cG9ydHMuX2RvID0gX2RvO1xudmFyIERvT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERvT3BlcmF0b3IobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB0aGlzLm5leHRPck9ic2VydmVyID0gbmV4dE9yT2JzZXJ2ZXI7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgIH1cbiAgICBEb09wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgRG9TdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMubmV4dE9yT2JzZXJ2ZXIsIHRoaXMuZXJyb3IsIHRoaXMuY29tcGxldGUpKTtcbiAgICB9O1xuICAgIHJldHVybiBEb09wZXJhdG9yO1xufSgpKTtcbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG52YXIgRG9TdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRG9TdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERvU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgbmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbik7XG4gICAgICAgIHZhciBzYWZlU3Vic2NyaWJlciA9IG5ldyBTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICAgICAgc2FmZVN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hZGQoc2FmZVN1YnNjcmliZXIpO1xuICAgICAgICB0aGlzLnNhZmVTdWJzY3JpYmVyID0gc2FmZVN1YnNjcmliZXI7XG4gICAgfVxuICAgIERvU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHNhZmVTdWJzY3JpYmVyID0gdGhpcy5zYWZlU3Vic2NyaWJlcjtcbiAgICAgICAgc2FmZVN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgIGlmIChzYWZlU3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3Ioc2FmZVN1YnNjcmliZXIuc3luY0Vycm9yVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRG9TdWJzY3JpYmVyLnByb3RvdHlwZS5fZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHZhciBzYWZlU3Vic2NyaWJlciA9IHRoaXMuc2FmZVN1YnNjcmliZXI7XG4gICAgICAgIHNhZmVTdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgIGlmIChzYWZlU3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3Ioc2FmZVN1YnNjcmliZXIuc3luY0Vycm9yVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEb1N1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNhZmVTdWJzY3JpYmVyID0gdGhpcy5zYWZlU3Vic2NyaWJlcjtcbiAgICAgICAgc2FmZVN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgaWYgKHNhZmVTdWJzY3JpYmVyLnN5bmNFcnJvclRocm93bikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihzYWZlU3Vic2NyaWJlci5zeW5jRXJyb3JWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBEb1N1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kby5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9vcGVyYXRvci9kby5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBPdXRlclN1YnNjcmliZXJfMSA9IHJlcXVpcmUoJy4uL091dGVyU3Vic2NyaWJlcicpO1xudmFyIHN1YnNjcmliZVRvUmVzdWx0XzEgPSByZXF1aXJlKCcuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0Jyk7XG4vKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuLyoqXG4gKiBQcm9qZWN0cyBlYWNoIHNvdXJjZSB2YWx1ZSB0byBhbiBPYnNlcnZhYmxlIHdoaWNoIGlzIG1lcmdlZCBpbiB0aGUgb3V0cHV0XG4gKiBPYnNlcnZhYmxlLCBlbWl0dGluZyB2YWx1ZXMgb25seSBmcm9tIHRoZSBtb3N0IHJlY2VudGx5IHByb2plY3RlZCBPYnNlcnZhYmxlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5NYXBzIGVhY2ggdmFsdWUgdG8gYW4gT2JzZXJ2YWJsZSwgdGhlbiBmbGF0dGVucyBhbGwgb2ZcbiAqIHRoZXNlIGlubmVyIE9ic2VydmFibGVzIHVzaW5nIHtAbGluayBzd2l0Y2h9Ljwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL3N3aXRjaE1hcC5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBpdGVtcyBiYXNlZCBvbiBhcHBseWluZyBhIGZ1bmN0aW9uIHRoYXQgeW91XG4gKiBzdXBwbHkgdG8gZWFjaCBpdGVtIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLCB3aGVyZSB0aGF0IGZ1bmN0aW9uXG4gKiByZXR1cm5zIGFuIChzby1jYWxsZWQgXCJpbm5lclwiKSBPYnNlcnZhYmxlLiBFYWNoIHRpbWUgaXQgb2JzZXJ2ZXMgb25lIG9mIHRoZXNlXG4gKiBpbm5lciBPYnNlcnZhYmxlcywgdGhlIG91dHB1dCBPYnNlcnZhYmxlIGJlZ2lucyBlbWl0dGluZyB0aGUgaXRlbXMgZW1pdHRlZCBieVxuICogdGhhdCBpbm5lciBPYnNlcnZhYmxlLiBXaGVuIGEgbmV3IGlubmVyIE9ic2VydmFibGUgaXMgZW1pdHRlZCwgYHN3aXRjaE1hcGBcbiAqIHN0b3BzIGVtaXR0aW5nIGl0ZW1zIGZyb20gdGhlIGVhcmxpZXItZW1pdHRlZCBpbm5lciBPYnNlcnZhYmxlIGFuZCBiZWdpbnNcbiAqIGVtaXR0aW5nIGl0ZW1zIGZyb20gdGhlIG5ldyBvbmUuIEl0IGNvbnRpbnVlcyB0byBiZWhhdmUgbGlrZSB0aGlzIGZvclxuICogc3Vic2VxdWVudCBpbm5lciBPYnNlcnZhYmxlcy5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5SZXJ1biBhbiBpbnRlcnZhbCBPYnNlcnZhYmxlIG9uIGV2ZXJ5IGNsaWNrIGV2ZW50PC9jYXB0aW9uPlxuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciByZXN1bHQgPSBjbGlja3Muc3dpdGNoTWFwKChldikgPT4gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKSk7XG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIEBzZWUge0BsaW5rIGNvbmNhdE1hcH1cbiAqIEBzZWUge0BsaW5rIGV4aGF1c3RNYXB9XG4gKiBAc2VlIHtAbGluayBtZXJnZU1hcH1cbiAqIEBzZWUge0BsaW5rIHN3aXRjaH1cbiAqIEBzZWUge0BsaW5rIHN3aXRjaE1hcFRvfVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24odmFsdWU6IFQsID9pbmRleDogbnVtYmVyKTogT2JzZXJ2YWJsZUlucHV0fSBwcm9qZWN0IEEgZnVuY3Rpb25cbiAqIHRoYXQsIHdoZW4gYXBwbGllZCB0byBhbiBpdGVtIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLCByZXR1cm5zIGFuXG4gKiBPYnNlcnZhYmxlLlxuICogQHBhcmFtIHtmdW5jdGlvbihvdXRlclZhbHVlOiBULCBpbm5lclZhbHVlOiBJLCBvdXRlckluZGV4OiBudW1iZXIsIGlubmVySW5kZXg6IG51bWJlcik6IGFueX0gW3Jlc3VsdFNlbGVjdG9yXVxuICogQSBmdW5jdGlvbiB0byBwcm9kdWNlIHRoZSB2YWx1ZSBvbiB0aGUgb3V0cHV0IE9ic2VydmFibGUgYmFzZWQgb24gdGhlIHZhbHVlc1xuICogYW5kIHRoZSBpbmRpY2VzIG9mIHRoZSBzb3VyY2UgKG91dGVyKSBlbWlzc2lvbiBhbmQgdGhlIGlubmVyIE9ic2VydmFibGVcbiAqIGVtaXNzaW9uLiBUaGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uIGFyZTpcbiAqIC0gYG91dGVyVmFsdWVgOiB0aGUgdmFsdWUgdGhhdCBjYW1lIGZyb20gdGhlIHNvdXJjZVxuICogLSBgaW5uZXJWYWx1ZWA6IHRoZSB2YWx1ZSB0aGF0IGNhbWUgZnJvbSB0aGUgcHJvamVjdGVkIE9ic2VydmFibGVcbiAqIC0gYG91dGVySW5kZXhgOiB0aGUgXCJpbmRleFwiIG9mIHRoZSB2YWx1ZSB0aGF0IGNhbWUgZnJvbSB0aGUgc291cmNlXG4gKiAtIGBpbm5lckluZGV4YDogdGhlIFwiaW5kZXhcIiBvZiB0aGUgdmFsdWUgZnJvbSB0aGUgcHJvamVjdGVkIE9ic2VydmFibGVcbiAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgcmVzdWx0IG9mIGFwcGx5aW5nIHRoZVxuICogcHJvamVjdGlvbiBmdW5jdGlvbiAoYW5kIHRoZSBvcHRpb25hbCBgcmVzdWx0U2VsZWN0b3JgKSB0byBlYWNoIGl0ZW0gZW1pdHRlZFxuICogYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGFuZCB0YWtpbmcgb25seSB0aGUgdmFsdWVzIGZyb20gdGhlIG1vc3QgcmVjZW50bHlcbiAqIHByb2plY3RlZCBpbm5lciBPYnNlcnZhYmxlLlxuICogQG1ldGhvZCBzd2l0Y2hNYXBcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmZ1bmN0aW9uIHN3aXRjaE1hcChwcm9qZWN0LCByZXN1bHRTZWxlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLmxpZnQobmV3IFN3aXRjaE1hcE9wZXJhdG9yKHByb2plY3QsIHJlc3VsdFNlbGVjdG9yKSk7XG59XG5leHBvcnRzLnN3aXRjaE1hcCA9IHN3aXRjaE1hcDtcbnZhciBTd2l0Y2hNYXBPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3dpdGNoTWFwT3BlcmF0b3IocHJvamVjdCwgcmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5yZXN1bHRTZWxlY3RvciA9IHJlc3VsdFNlbGVjdG9yO1xuICAgIH1cbiAgICBTd2l0Y2hNYXBPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IFN3aXRjaE1hcFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcm9qZWN0LCB0aGlzLnJlc3VsdFNlbGVjdG9yKSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3dpdGNoTWFwT3BlcmF0b3I7XG59KCkpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbnZhciBTd2l0Y2hNYXBTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3dpdGNoTWFwU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTd2l0Y2hNYXBTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBwcm9qZWN0LCByZXN1bHRTZWxlY3Rvcikge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbik7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMucmVzdWx0U2VsZWN0b3IgPSByZXN1bHRTZWxlY3RvcjtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgfVxuICAgIFN3aXRjaE1hcFN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXgrKztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucHJvamVjdCh2YWx1ZSwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5uZXJTdWIocmVzdWx0LCB2YWx1ZSwgaW5kZXgpO1xuICAgIH07XG4gICAgU3dpdGNoTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX2lubmVyU3ViID0gZnVuY3Rpb24gKHJlc3VsdCwgdmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHZhciBpbm5lclN1YnNjcmlwdGlvbiA9IHRoaXMuaW5uZXJTdWJzY3JpcHRpb247XG4gICAgICAgIGlmIChpbm5lclN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgaW5uZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZCh0aGlzLmlubmVyU3Vic2NyaXB0aW9uID0gc3Vic2NyaWJlVG9SZXN1bHRfMS5zdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCByZXN1bHQsIHZhbHVlLCBpbmRleCkpO1xuICAgIH07XG4gICAgU3dpdGNoTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5uZXJTdWJzY3JpcHRpb24gPSB0aGlzLmlubmVyU3Vic2NyaXB0aW9uO1xuICAgICAgICBpZiAoIWlubmVyU3Vic2NyaXB0aW9uIHx8IGlubmVyU3Vic2NyaXB0aW9uLmNsb3NlZCkge1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5fY29tcGxldGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3dpdGNoTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlubmVyU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9O1xuICAgIFN3aXRjaE1hcFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKGlubmVyU3ViKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKGlubmVyU3ViKTtcbiAgICAgICAgdGhpcy5pbm5lclN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5fY29tcGxldGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3dpdGNoTWFwU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5TmV4dCA9IGZ1bmN0aW9uIChvdXRlclZhbHVlLCBpbm5lclZhbHVlLCBvdXRlckluZGV4LCBpbm5lckluZGV4LCBpbm5lclN1Yikge1xuICAgICAgICBpZiAodGhpcy5yZXN1bHRTZWxlY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5fdHJ5Tm90aWZ5TmV4dChvdXRlclZhbHVlLCBpbm5lclZhbHVlLCBvdXRlckluZGV4LCBpbm5lckluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChpbm5lclZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3dpdGNoTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX3RyeU5vdGlmeU5leHQgPSBmdW5jdGlvbiAob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5yZXN1bHRTZWxlY3RvcihvdXRlclZhbHVlLCBpbm5lclZhbHVlLCBvdXRlckluZGV4LCBpbm5lckluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHJlc3VsdCk7XG4gICAgfTtcbiAgICByZXR1cm4gU3dpdGNoTWFwU3Vic2NyaWJlcjtcbn0oT3V0ZXJTdWJzY3JpYmVyXzEuT3V0ZXJTdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zd2l0Y2hNYXAuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvb3BlcmF0b3Ivc3dpdGNoTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciByb290XzEgPSByZXF1aXJlKCcuLi91dGlsL3Jvb3QnKTtcbi8qIHRzbGludDplbmFibGU6bWF4LWxpbmUtbGVuZ3RoICovXG4vKipcbiAqIENvbnZlcnRzIGFuIE9ic2VydmFibGUgc2VxdWVuY2UgdG8gYSBFUzIwMTUgY29tcGxpYW50IHByb21pc2UuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFVzaW5nIG5vcm1hbCBFUzIwMTVcbiAqIGxldCBzb3VyY2UgPSBSeC5PYnNlcnZhYmxlXG4gKiAgIC5qdXN0KDQyKVxuICogICAudG9Qcm9taXNlKCk7XG4gKlxuICogc291cmNlLnRoZW4oKHZhbHVlKSA9PiBjb25zb2xlLmxvZygnVmFsdWU6ICVzJywgdmFsdWUpKTtcbiAqIC8vID0+IFZhbHVlOiA0MlxuICpcbiAqIC8vIFJlamVjdGVkIFByb21pc2VcbiAqIC8vIFVzaW5nIG5vcm1hbCBFUzIwMTVcbiAqIGxldCBzb3VyY2UgPSBSeC5PYnNlcnZhYmxlXG4gKiAgIC50aHJvdyhuZXcgRXJyb3IoJ3dvb3BzJykpXG4gKiAgIC50b1Byb21pc2UoKTtcbiAqXG4gKiBzb3VyY2VcbiAqICAgLnRoZW4oKHZhbHVlKSA9PiBjb25zb2xlLmxvZygnVmFsdWU6ICVzJywgdmFsdWUpKVxuICogICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAlcycsIGVycikpO1xuICogLy8gPT4gRXJyb3I6IEVycm9yOiB3b29wc1xuICpcbiAqIC8vIFNldHRpbmcgdmlhIHRoZSBjb25maWdcbiAqIFJ4LmNvbmZpZy5Qcm9taXNlID0gUlNWUC5Qcm9taXNlO1xuICpcbiAqIGxldCBzb3VyY2UgPSBSeC5PYnNlcnZhYmxlXG4gKiAgIC5vZig0MilcbiAqICAgLnRvUHJvbWlzZSgpO1xuICpcbiAqIHNvdXJjZS50aGVuKCh2YWx1ZSkgPT4gY29uc29sZS5sb2coJ1ZhbHVlOiAlcycsIHZhbHVlKSk7XG4gKiAvLyA9PiBWYWx1ZTogNDJcbiAqXG4gKiAvLyBTZXR0aW5nIHZpYSB0aGUgbWV0aG9kXG4gKiBsZXQgc291cmNlID0gUnguT2JzZXJ2YWJsZVxuICogICAuanVzdCg0MilcbiAqICAgLnRvUHJvbWlzZShSU1ZQLlByb21pc2UpO1xuICpcbiAqIHNvdXJjZS50aGVuKCh2YWx1ZSkgPT4gY29uc29sZS5sb2coJ1ZhbHVlOiAlcycsIHZhbHVlKSk7XG4gKiAvLyA9PiBWYWx1ZTogNDJcbiAqXG4gKiBAcGFyYW0gUHJvbWlzZUN0b3IgcHJvbWlzZSBUaGUgY29uc3RydWN0b3Igb2YgdGhlIHByb21pc2UuIElmIG5vdCBwcm92aWRlZCxcbiAqIGl0IHdpbGwgbG9vayBmb3IgYSBjb25zdHJ1Y3RvciBmaXJzdCBpbiBSeC5jb25maWcuUHJvbWlzZSB0aGVuIGZhbGwgYmFjayB0b1xuICogdGhlIG5hdGl2ZSBQcm9taXNlIGNvbnN0cnVjdG9yIGlmIGF2YWlsYWJsZS5cbiAqIEByZXR1cm4ge1Byb21pc2U8VD59IEFuIEVTMjAxNSBjb21wYXRpYmxlIHByb21pc2Ugd2l0aCB0aGUgbGFzdCB2YWx1ZSBmcm9tXG4gKiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAqIEBtZXRob2QgdG9Qcm9taXNlXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5mdW5jdGlvbiB0b1Byb21pc2UoUHJvbWlzZUN0b3IpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGlmICghUHJvbWlzZUN0b3IpIHtcbiAgICAgICAgaWYgKHJvb3RfMS5yb290LlJ4ICYmIHJvb3RfMS5yb290LlJ4LmNvbmZpZyAmJiByb290XzEucm9vdC5SeC5jb25maWcuUHJvbWlzZSkge1xuICAgICAgICAgICAgUHJvbWlzZUN0b3IgPSByb290XzEucm9vdC5SeC5jb25maWcuUHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyb290XzEucm9vdC5Qcm9taXNlKSB7XG4gICAgICAgICAgICBQcm9taXNlQ3RvciA9IHJvb3RfMS5yb290LlByb21pc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFQcm9taXNlQ3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIFByb21pc2UgaW1wbCBmb3VuZCcpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHZhbHVlID0geDsgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gcmVqZWN0KGVycik7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUodmFsdWUpOyB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMudG9Qcm9taXNlID0gdG9Qcm9taXNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG9Qcm9taXNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yeGpzL29wZXJhdG9yL3RvUHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoJy4uL1N1YnNjcmlwdGlvbicpO1xuLyoqXG4gKiBBIHVuaXQgb2Ygd29yayB0byBiZSBleGVjdXRlZCBpbiBhIHtAbGluayBTY2hlZHVsZXJ9LiBBbiBhY3Rpb24gaXMgdHlwaWNhbGx5XG4gKiBjcmVhdGVkIGZyb20gd2l0aGluIGEgU2NoZWR1bGVyIGFuZCBhbiBSeEpTIHVzZXIgZG9lcyBub3QgbmVlZCB0byBjb25jZXJuXG4gKiB0aGVtc2VsdmVzIGFib3V0IGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgYW4gQWN0aW9uLlxuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBBY3Rpb248VD4gZXh0ZW5kcyBTdWJzY3JpcHRpb24ge1xuICogICBuZXcgKHNjaGVkdWxlcjogU2NoZWR1bGVyLCB3b3JrOiAoc3RhdGU/OiBUKSA9PiB2b2lkKTtcbiAqICAgc2NoZWR1bGUoc3RhdGU/OiBULCBkZWxheTogbnVtYmVyID0gMCk6IFN1YnNjcmlwdGlvbjtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBjbGFzcyBBY3Rpb248VD5cbiAqL1xudmFyIEFjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBY3Rpb24oc2NoZWR1bGVyLCB3b3JrKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZXMgdGhpcyBhY3Rpb24gb24gaXRzIHBhcmVudCBTY2hlZHVsZXIgZm9yIGV4ZWN1dGlvbi4gTWF5IGJlIHBhc3NlZFxuICAgICAqIHNvbWUgY29udGV4dCBvYmplY3QsIGBzdGF0ZWAuIE1heSBoYXBwZW4gYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlLFxuICAgICAqIGFjY29yZGluZyB0byB0aGUgYGRlbGF5YCBwYXJhbWV0ZXIsIGlmIHNwZWNpZmllZC5cbiAgICAgKiBAcGFyYW0ge1R9IFtzdGF0ZV0gU29tZSBjb250ZXh0dWFsIGRhdGEgdGhhdCB0aGUgYHdvcmtgIGZ1bmN0aW9uIHVzZXMgd2hlblxuICAgICAqIGNhbGxlZCBieSB0aGUgU2NoZWR1bGVyLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXldIFRpbWUgdG8gd2FpdCBiZWZvcmUgZXhlY3V0aW5nIHRoZSB3b3JrLCB3aGVyZSB0aGVcbiAgICAgKiB0aW1lIHVuaXQgaXMgaW1wbGljaXQgYW5kIGRlZmluZWQgYnkgdGhlIFNjaGVkdWxlci5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIEFjdGlvbi5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBBY3Rpb247XG59KFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbikpO1xuZXhwb3J0cy5BY3Rpb24gPSBBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BY3Rpb24uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvc2NoZWR1bGVyL0FjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciByb290XzEgPSByZXF1aXJlKCcuLi91dGlsL3Jvb3QnKTtcbnZhciBBY3Rpb25fMSA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xudmFyIEFzeW5jQWN0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXN5bmNBY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXN5bmNBY3Rpb24oc2NoZWR1bGVyLCB3b3JrKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIHNjaGVkdWxlciwgd29yayk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICB0aGlzLndvcmsgPSB3b3JrO1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICAvLyBBbHdheXMgcmVwbGFjZSB0aGUgY3VycmVudCBzdGF0ZSB3aXRoIHRoZSBuZXcgc3RhdGUuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgLy8gU2V0IHRoZSBwZW5kaW5nIGZsYWcgaW5kaWNhdGluZyB0aGF0IHRoaXMgYWN0aW9uIGhhcyBiZWVuIHNjaGVkdWxlZCwgb3JcbiAgICAgICAgLy8gaGFzIHJlY3Vyc2l2ZWx5IHJlc2NoZWR1bGVkIGl0c2VsZi5cbiAgICAgICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZDtcbiAgICAgICAgdmFyIHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVyO1xuICAgICAgICAvL1xuICAgICAgICAvLyBJbXBvcnRhbnQgaW1wbGVtZW50YXRpb24gbm90ZTpcbiAgICAgICAgLy9cbiAgICAgICAgLy8gQWN0aW9ucyBvbmx5IGV4ZWN1dGUgb25jZSBieSBkZWZhdWx0LCB1bmxlc3MgcmVzY2hlZHVsZWQgZnJvbSB3aXRoaW4gdGhlXG4gICAgICAgIC8vIHNjaGVkdWxlZCBjYWxsYmFjay4gVGhpcyBhbGxvd3MgdXMgdG8gaW1wbGVtZW50IHNpbmdsZSBhbmQgcmVwZWF0XG4gICAgICAgIC8vIGFjdGlvbnMgdmlhIHRoZSBzYW1lIGNvZGUgcGF0aCwgd2l0aG91dCBhZGRpbmcgQVBJIHN1cmZhY2UgYXJlYSwgYXMgd2VsbFxuICAgICAgICAvLyBhcyBtaW1pYyB0cmFkaXRpb25hbCByZWN1cnNpb24gYnV0IGFjcm9zcyBhc3luY2hyb25vdXMgYm91bmRhcmllcy5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gSG93ZXZlciwgSlMgcnVudGltZXMgYW5kIHRpbWVycyBkaXN0aW5ndWlzaCBiZXR3ZWVuIGludGVydmFscyBhY2hpZXZlZCBieVxuICAgICAgICAvLyBzZXJpYWwgYHNldFRpbWVvdXRgIGNhbGxzIHZzLiBhIHNpbmdsZSBgc2V0SW50ZXJ2YWxgIGNhbGwuIEFuIGludGVydmFsIG9mXG4gICAgICAgIC8vIHNlcmlhbCBgc2V0VGltZW91dGAgY2FsbHMgY2FuIGJlIGluZGl2aWR1YWxseSBkZWxheWVkLCB3aGljaCBkZWxheXNcbiAgICAgICAgLy8gc2NoZWR1bGluZyB0aGUgbmV4dCBgc2V0VGltZW91dGAsIGFuZCBzbyBvbi4gYHNldEludGVydmFsYCBhdHRlbXB0cyB0b1xuICAgICAgICAvLyBndWFyYW50ZWUgdGhlIGludGVydmFsIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCBtb3JlIHByZWNpc2VseSB0byB0aGVcbiAgICAgICAgLy8gaW50ZXJ2YWwgcGVyaW9kLCByZWdhcmRsZXNzIG9mIGxvYWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRoZXJlZm9yZSwgd2UgdXNlIGBzZXRJbnRlcnZhbGAgdG8gc2NoZWR1bGUgc2luZ2xlIGFuZCByZXBlYXQgYWN0aW9ucy5cbiAgICAgICAgLy8gSWYgdGhlIGFjdGlvbiByZXNjaGVkdWxlcyBpdHNlbGYgd2l0aCB0aGUgc2FtZSBkZWxheSwgdGhlIGludGVydmFsIGlzIG5vdFxuICAgICAgICAvLyBjYW5jZWxlZC4gSWYgdGhlIGFjdGlvbiBkb2Vzbid0IHJlc2NoZWR1bGUsIG9yIHJlc2NoZWR1bGVzIHdpdGggYVxuICAgICAgICAvLyBkaWZmZXJlbnQgZGVsYXksIHRoZSBpbnRlcnZhbCB3aWxsIGJlIGNhbmNlbGVkIGFmdGVyIHNjaGVkdWxlZCBjYWxsYmFja1xuICAgICAgICAvLyBleGVjdXRpb24uXG4gICAgICAgIC8vXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZChzY2hlZHVsZXIsIGlkLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICAvLyBJZiB0aGlzIGFjdGlvbiBoYXMgYWxyZWFkeSBhbiBhc3luYyBJZCwgZG9uJ3QgcmVxdWVzdCBhIG5ldyBvbmUuXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmlkIHx8IHRoaXMucmVxdWVzdEFzeW5jSWQoc2NoZWR1bGVyLCB0aGlzLmlkLCBkZWxheSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLnJlcXVlc3RBc3luY0lkID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaWQsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICByZXR1cm4gcm9vdF8xLnJvb3Quc2V0SW50ZXJ2YWwoc2NoZWR1bGVyLmZsdXNoLmJpbmQoc2NoZWR1bGVyLCB0aGlzKSwgZGVsYXkpO1xuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLnJlY3ljbGVBc3luY0lkID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaWQsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICAvLyBJZiB0aGlzIGFjdGlvbiBpcyByZXNjaGVkdWxlZCB3aXRoIHRoZSBzYW1lIGRlbGF5IHRpbWUsIGRvbid0IGNsZWFyIHRoZSBpbnRlcnZhbCBpZC5cbiAgICAgICAgaWYgKGRlbGF5ICE9PSBudWxsICYmIHRoaXMuZGVsYXkgPT09IGRlbGF5KSB7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgYWN0aW9uJ3MgZGVsYXkgdGltZSBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgY3VycmVudCBkZWxheSxcbiAgICAgICAgLy8gY2xlYXIgdGhlIGludGVydmFsIGlkXG4gICAgICAgIHJldHVybiByb290XzEucm9vdC5jbGVhckludGVydmFsKGlkKSAmJiB1bmRlZmluZWQgfHwgdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW1tZWRpYXRlbHkgZXhlY3V0ZXMgdGhpcyBhY3Rpb24gYW5kIHRoZSBgd29ya2AgaXQgY29udGFpbnMuXG4gICAgICogQHJldHVybiB7YW55fVxuICAgICAqL1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ2V4ZWN1dGluZyBhIGNhbmNlbGxlZCBhY3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9yID0gdGhpcy5fZXhlY3V0ZShzdGF0ZSwgZGVsYXkpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnBlbmRpbmcgPT09IGZhbHNlICYmIHRoaXMuaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gRGVxdWV1ZSBpZiB0aGUgYWN0aW9uIGRpZG4ndCByZXNjaGVkdWxlIGl0c2VsZi4gRG9uJ3QgY2FsbFxuICAgICAgICAgICAgLy8gdW5zdWJzY3JpYmUoKSwgYmVjYXVzZSB0aGUgYWN0aW9uIGNvdWxkIHJlc2NoZWR1bGUgbGF0ZXIuXG4gICAgICAgICAgICAvLyBGb3IgZXhhbXBsZTpcbiAgICAgICAgICAgIC8vIGBgYFxuICAgICAgICAgICAgLy8gc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uIGRvV29yayhjb3VudGVyKSB7XG4gICAgICAgICAgICAvLyAgIC8qIC4uLiBJJ20gYSBidXN5IHdvcmtlciBiZWUgLi4uICovXG4gICAgICAgICAgICAvLyAgIHZhciBvcmlnaW5hbEFjdGlvbiA9IHRoaXM7XG4gICAgICAgICAgICAvLyAgIC8qIHdhaXQgMTAwbXMgYmVmb3JlIHJlc2NoZWR1bGluZyB0aGUgYWN0aW9uICovXG4gICAgICAgICAgICAvLyAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gICAgIG9yaWdpbmFsQWN0aW9uLnNjaGVkdWxlKGNvdW50ZXIgKyAxKTtcbiAgICAgICAgICAgIC8vICAgfSwgMTAwKTtcbiAgICAgICAgICAgIC8vIH0sIDEwMDApO1xuICAgICAgICAgICAgLy8gYGBgXG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZCh0aGlzLnNjaGVkdWxlciwgdGhpcy5pZCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5fZXhlY3V0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgdmFyIGVycm9yZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9yVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLndvcmsoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGVycm9yVmFsdWUgPSAhIWUgJiYgZSB8fCBuZXcgRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvclZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkO1xuICAgICAgICB2YXIgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgICAgIHZhciBhY3Rpb25zID0gc2NoZWR1bGVyLmFjdGlvbnM7XG4gICAgICAgIHZhciBpbmRleCA9IGFjdGlvbnMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgdGhpcy53b3JrID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZWxheSA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBudWxsO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBhY3Rpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHNjaGVkdWxlciwgaWQsIG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQXN5bmNBY3Rpb247XG59KEFjdGlvbl8xLkFjdGlvbikpO1xuZXhwb3J0cy5Bc3luY0FjdGlvbiA9IEFzeW5jQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXN5bmNBY3Rpb24uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvc2NoZWR1bGVyL0FzeW5jQWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIFNjaGVkdWxlcl8xID0gcmVxdWlyZSgnLi4vU2NoZWR1bGVyJyk7XG52YXIgQXN5bmNTY2hlZHVsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBc3luY1NjaGVkdWxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBc3luY1NjaGVkdWxlcigpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBmbGFnIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIFNjaGVkdWxlciBpcyBjdXJyZW50bHkgZXhlY3V0aW5nIGEgYmF0Y2ggb2ZcbiAgICAgICAgICogcXVldWVkIGFjdGlvbnMuXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGludGVybmFsIElEIHVzZWQgdG8gdHJhY2sgdGhlIGxhdGVzdCBhc3luY2hyb25vdXMgdGFzayBzdWNoIGFzIHRob3NlXG4gICAgICAgICAqIGNvbWluZyBmcm9tIGBzZXRUaW1lb3V0YCwgYHNldEludGVydmFsYCwgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAsIGFuZFxuICAgICAgICAgKiBvdGhlcnMuXG4gICAgICAgICAqIEB0eXBlIHthbnl9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNjaGVkdWxlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgQXN5bmNTY2hlZHVsZXIucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKGVycm9yID0gYWN0aW9uLmV4ZWN1dGUoYWN0aW9uLnN0YXRlLCBhY3Rpb24uZGVsYXkpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSk7IC8vIGV4aGF1c3QgdGhlIHNjaGVkdWxlciBxdWV1ZVxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHdoaWxlIChhY3Rpb24gPSBhY3Rpb25zLnNoaWZ0KCkpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQXN5bmNTY2hlZHVsZXI7XG59KFNjaGVkdWxlcl8xLlNjaGVkdWxlcikpO1xuZXhwb3J0cy5Bc3luY1NjaGVkdWxlciA9IEFzeW5jU2NoZWR1bGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXN5bmNTY2hlZHVsZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvc2NoZWR1bGVyL0FzeW5jU2NoZWR1bGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBBc3luY0FjdGlvbl8xID0gcmVxdWlyZSgnLi9Bc3luY0FjdGlvbicpO1xudmFyIEFzeW5jU2NoZWR1bGVyXzEgPSByZXF1aXJlKCcuL0FzeW5jU2NoZWR1bGVyJyk7XG4vKipcbiAqXG4gKiBBc3luYyBTY2hlZHVsZXJcbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+U2NoZWR1bGUgdGFzayBhcyBpZiB5b3UgdXNlZCBzZXRUaW1lb3V0KHRhc2ssIGR1cmF0aW9uKTwvc3Bhbj5cbiAqXG4gKiBgYXN5bmNgIHNjaGVkdWxlciBzY2hlZHVsZXMgdGFza3MgYXN5bmNocm9ub3VzbHksIGJ5IHB1dHRpbmcgdGhlbSBvbiB0aGUgSmF2YVNjcmlwdFxuICogZXZlbnQgbG9vcCBxdWV1ZS4gSXQgaXMgYmVzdCB1c2VkIHRvIGRlbGF5IHRhc2tzIGluIHRpbWUgb3IgdG8gc2NoZWR1bGUgdGFza3MgcmVwZWF0aW5nXG4gKiBpbiBpbnRlcnZhbHMuXG4gKlxuICogSWYgeW91IGp1c3Qgd2FudCB0byBcImRlZmVyXCIgdGFzaywgdGhhdCBpcyB0byBwZXJmb3JtIGl0IHJpZ2h0IGFmdGVyIGN1cnJlbnRseVxuICogZXhlY3V0aW5nIHN5bmNocm9ub3VzIGNvZGUgZW5kcyAoY29tbW9ubHkgYWNoaWV2ZWQgYnkgYHNldFRpbWVvdXQoZGVmZXJyZWRUYXNrLCAwKWApLFxuICogYmV0dGVyIGNob2ljZSB3aWxsIGJlIHRoZSB7QGxpbmsgYXNhcH0gc2NoZWR1bGVyLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlVzZSBhc3luYyBzY2hlZHVsZXIgdG8gZGVsYXkgdGFzazwvY2FwdGlvbj5cbiAqIGNvbnN0IHRhc2sgPSAoKSA9PiBjb25zb2xlLmxvZygnaXQgd29ya3MhJyk7XG4gKlxuICogUnguU2NoZWR1bGVyLmFzeW5jLnNjaGVkdWxlKHRhc2ssIDIwMDApO1xuICpcbiAqIC8vIEFmdGVyIDIgc2Vjb25kcyBsb2dzOlxuICogLy8gXCJpdCB3b3JrcyFcIlxuICpcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Vc2UgYXN5bmMgc2NoZWR1bGVyIHRvIHJlcGVhdCB0YXNrIGluIGludGVydmFsczwvY2FwdGlvbj5cbiAqIGZ1bmN0aW9uIHRhc2soc3RhdGUpIHtcbiAqICAgY29uc29sZS5sb2coc3RhdGUpO1xuICogICB0aGlzLnNjaGVkdWxlKHN0YXRlICsgMSwgMTAwMCk7IC8vIGB0aGlzYCByZWZlcmVuY2VzIGN1cnJlbnRseSBleGVjdXRpbmcgQWN0aW9uLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoaWNoIHdlIHJlc2NoZWR1bGUgd2l0aCBuZXcgc3RhdGUgYW5kIGRlbGF5XG4gKiB9XG4gKlxuICogUnguU2NoZWR1bGVyLmFzeW5jLnNjaGVkdWxlKHRhc2ssIDMwMDAsIDApO1xuICpcbiAqIC8vIExvZ3M6XG4gKiAvLyAwIGFmdGVyIDNzXG4gKiAvLyAxIGFmdGVyIDRzXG4gKiAvLyAyIGFmdGVyIDVzXG4gKiAvLyAzIGFmdGVyIDZzXG4gKlxuICogQHN0YXRpYyB0cnVlXG4gKiBAbmFtZSBhc3luY1xuICogQG93bmVyIFNjaGVkdWxlclxuICovXG5leHBvcnRzLmFzeW5jID0gbmV3IEFzeW5jU2NoZWR1bGVyXzEuQXN5bmNTY2hlZHVsZXIoQXN5bmNBY3Rpb25fMS5Bc3luY0FjdGlvbik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3luYy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9zY2hlZHVsZXIvYXN5bmMuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFNlbVZlcjtcblxuLy8gVGhlIGRlYnVnIGZ1bmN0aW9uIGlzIGV4Y2x1ZGVkIGVudGlyZWx5IGZyb20gdGhlIG1pbmlmaWVkIHZlcnNpb24uXG4vKiBub21pbiAqLyB2YXIgZGVidWc7XG4vKiBub21pbiAqLyBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmXG4gICAgLyogbm9taW4gKi8gcHJvY2Vzcy5lbnYgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudi5OT0RFX0RFQlVHICYmXG4gICAgLyogbm9taW4gKi8gL1xcYnNlbXZlclxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRykpXG4gIC8qIG5vbWluICovIGRlYnVnID0gZnVuY3Rpb24oKSB7XG4gICAgLyogbm9taW4gKi8gdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIC8qIG5vbWluICovIGFyZ3MudW5zaGlmdCgnU0VNVkVSJyk7XG4gICAgLyogbm9taW4gKi8gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgLyogbm9taW4gKi8gfTtcbi8qIG5vbWluICovIGVsc2VcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHt9O1xuXG4vLyBOb3RlOiB0aGlzIGlzIHRoZSBzZW12ZXIub3JnIHZlcnNpb24gb2YgdGhlIHNwZWMgdGhhdCBpdCBpbXBsZW1lbnRzXG4vLyBOb3QgbmVjZXNzYXJpbHkgdGhlIHBhY2thZ2UgdmVyc2lvbiBvZiB0aGlzIGNvZGUuXG5leHBvcnRzLlNFTVZFUl9TUEVDX1ZFUlNJT04gPSAnMi4wLjAnO1xuXG52YXIgTUFYX0xFTkdUSCA9IDI1NjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgOTAwNzE5OTI1NDc0MDk5MTtcblxuLy8gVGhlIGFjdHVhbCByZWdleHBzIGdvIG9uIGV4cG9ydHMucmVcbnZhciByZSA9IGV4cG9ydHMucmUgPSBbXTtcbnZhciBzcmMgPSBleHBvcnRzLnNyYyA9IFtdO1xudmFyIFIgPSAwO1xuXG4vLyBUaGUgZm9sbG93aW5nIFJlZ3VsYXIgRXhwcmVzc2lvbnMgY2FuIGJlIHVzZWQgZm9yIHRva2VuaXppbmcsXG4vLyB2YWxpZGF0aW5nLCBhbmQgcGFyc2luZyBTZW1WZXIgdmVyc2lvbiBzdHJpbmdzLlxuXG4vLyAjIyBOdW1lcmljIElkZW50aWZpZXJcbi8vIEEgc2luZ2xlIGAwYCwgb3IgYSBub24temVybyBkaWdpdCBmb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgZGlnaXRzLlxuXG52YXIgTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJdID0gJzB8WzEtOV1cXFxcZConO1xudmFyIE5VTUVSSUNJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gPSAnWzAtOV0rJztcblxuXG4vLyAjIyBOb24tbnVtZXJpYyBJZGVudGlmaWVyXG4vLyBaZXJvIG9yIG1vcmUgZGlnaXRzLCBmb2xsb3dlZCBieSBhIGxldHRlciBvciBoeXBoZW4sIGFuZCB0aGVuIHplcm8gb3Jcbi8vIG1vcmUgbGV0dGVycywgZGlnaXRzLCBvciBoeXBoZW5zLlxuXG52YXIgTk9OTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdID0gJ1xcXFxkKlthLXpBLVotXVthLXpBLVowLTktXSonO1xuXG5cbi8vICMjIE1haW4gVmVyc2lvblxuLy8gVGhyZWUgZG90LXNlcGFyYXRlZCBudW1lcmljIGlkZW50aWZpZXJzLlxuXG52YXIgTUFJTlZFUlNJT04gPSBSKys7XG5zcmNbTUFJTlZFUlNJT05dID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBNQUlOVkVSU0lPTkxPT1NFID0gUisrO1xuc3JjW01BSU5WRVJTSU9OTE9PU0VdID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJyknO1xuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uIElkZW50aWZpZXJcbi8vIEEgbnVtZXJpYyBpZGVudGlmaWVyLCBvciBhIG5vbi1udW1lcmljIGlkZW50aWZpZXIuXG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUiA9IFIrKztcbnNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd8JyArIHNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdID0gJyg/OicgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uXG4vLyBIeXBoZW4sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGRvdC1zZXBhcmF0ZWQgcHJlLXJlbGVhc2UgdmVyc2lvblxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBQUkVSRUxFQVNFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VdID0gJyg/Oi0oJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gKyAnKSopKSc7XG5cbnZhciBQUkVSRUxFQVNFTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUxPT1NFXSA9ICcoPzotPygnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSArICcpKikpJztcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGEgSWRlbnRpZmllclxuLy8gQW55IGNvbWJpbmF0aW9uIG9mIGRpZ2l0cywgbGV0dGVycywgb3IgaHlwaGVucy5cblxudmFyIEJVSUxESURFTlRJRklFUiA9IFIrKztcbnNyY1tCVUlMRElERU5USUZJRVJdID0gJ1swLTlBLVphLXotXSsnO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YVxuLy8gUGx1cyBzaWduLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBwZXJpb2Qtc2VwYXJhdGVkIGJ1aWxkIG1ldGFkYXRhXG4vLyBpZGVudGlmaWVycy5cblxudmFyIEJVSUxEID0gUisrO1xuc3JjW0JVSUxEXSA9ICcoPzpcXFxcKygnICsgc3JjW0JVSUxESURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbQlVJTERJREVOVElGSUVSXSArICcpKikpJztcblxuXG4vLyAjIyBGdWxsIFZlcnNpb24gU3RyaW5nXG4vLyBBIG1haW4gdmVyc2lvbiwgZm9sbG93ZWQgb3B0aW9uYWxseSBieSBhIHByZS1yZWxlYXNlIHZlcnNpb24gYW5kXG4vLyBidWlsZCBtZXRhZGF0YS5cblxuLy8gTm90ZSB0aGF0IHRoZSBvbmx5IG1ham9yLCBtaW5vciwgcGF0Y2gsIGFuZCBwcmUtcmVsZWFzZSBzZWN0aW9ucyBvZlxuLy8gdGhlIHZlcnNpb24gc3RyaW5nIGFyZSBjYXB0dXJpbmcgZ3JvdXBzLiAgVGhlIGJ1aWxkIG1ldGFkYXRhIGlzIG5vdCBhXG4vLyBjYXB0dXJpbmcgZ3JvdXAsIGJlY2F1c2UgaXQgc2hvdWxkIG5vdCBldmVyIGJlIHVzZWQgaW4gdmVyc2lvblxuLy8gY29tcGFyaXNvbi5cblxudmFyIEZVTEwgPSBSKys7XG52YXIgRlVMTFBMQUlOID0gJ3Y/JyArIHNyY1tNQUlOVkVSU0lPTl0gK1xuICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFXSArICc/JyArXG4gICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/Jztcblxuc3JjW0ZVTExdID0gJ14nICsgRlVMTFBMQUlOICsgJyQnO1xuXG4vLyBsaWtlIGZ1bGwsIGJ1dCBhbGxvd3MgdjEuMi4zIGFuZCA9MS4yLjMsIHdoaWNoIHBlb3BsZSBkbyBzb21ldGltZXMuXG4vLyBhbHNvLCAxLjAuMGFscGhhMSAocHJlcmVsZWFzZSB3aXRob3V0IHRoZSBoeXBoZW4pIHdoaWNoIGlzIHByZXR0eVxuLy8gY29tbW9uIGluIHRoZSBucG0gcmVnaXN0cnkuXG52YXIgTE9PU0VQTEFJTiA9ICdbdj1cXFxcc10qJyArIHNyY1tNQUlOVkVSU0lPTkxPT1NFXSArXG4gICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JztcblxudmFyIExPT1NFID0gUisrO1xuc3JjW0xPT1NFXSA9ICdeJyArIExPT1NFUExBSU4gKyAnJCc7XG5cbnZhciBHVExUID0gUisrO1xuc3JjW0dUTFRdID0gJygoPzo8fD4pPz0/KSc7XG5cbi8vIFNvbWV0aGluZyBsaWtlIFwiMi4qXCIgb3IgXCIxLjIueFwiLlxuLy8gTm90ZSB0aGF0IFwieC54XCIgaXMgYSB2YWxpZCB4UmFuZ2UgaWRlbnRpZmVyLCBtZWFuaW5nIFwiYW55IHZlcnNpb25cIlxuLy8gT25seSB0aGUgZmlyc3QgaXRlbSBpcyBzdHJpY3RseSByZXF1aXJlZC5cbnZhciBYUkFOR0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSA9IHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICd8eHxYfFxcXFwqJztcbnZhciBYUkFOR0VJREVOVElGSUVSID0gUisrO1xuc3JjW1hSQU5HRUlERU5USUZJRVJdID0gc3JjW05VTUVSSUNJREVOVElGSUVSXSArICd8eHxYfFxcXFwqJztcblxudmFyIFhSQU5HRVBMQUlOID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOXSA9ICdbdj1cXFxcc10qKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OicgKyBzcmNbUFJFUkVMRUFTRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAnKT8pPyc7XG5cbnZhciBYUkFOR0VQTEFJTkxPT1NFID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOTE9PU0VdID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRSA9IFIrKztcbnNyY1tYUkFOR0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFhSQU5HRUxPT1NFID0gUisrO1xuc3JjW1hSQU5HRUxPT1NFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyonICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBUaWxkZSByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwicmVhc29uYWJseSBhdCBvciBncmVhdGVyIHRoYW5cIlxudmFyIExPTkVUSUxERSA9IFIrKztcbnNyY1tMT05FVElMREVdID0gJyg/On4+PyknO1xuXG52YXIgVElMREVUUklNID0gUisrO1xuc3JjW1RJTERFVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVUSUxERV0gKyAnXFxcXHMrJztcbnJlW1RJTERFVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tUSUxERVRSSU1dLCAnZycpO1xudmFyIHRpbGRlVHJpbVJlcGxhY2UgPSAnJDF+JztcblxudmFyIFRJTERFID0gUisrO1xuc3JjW1RJTERFXSA9ICdeJyArIHNyY1tMT05FVElMREVdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBUSUxERUxPT1NFID0gUisrO1xuc3JjW1RJTERFTE9PU0VdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIENhcmV0IHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJhdCBsZWFzdCBhbmQgYmFja3dhcmRzIGNvbXBhdGlibGUgd2l0aFwiXG52YXIgTE9ORUNBUkVUID0gUisrO1xuc3JjW0xPTkVDQVJFVF0gPSAnKD86XFxcXF4pJztcblxudmFyIENBUkVUVFJJTSA9IFIrKztcbnNyY1tDQVJFVFRSSU1dID0gJyhcXFxccyopJyArIHNyY1tMT05FQ0FSRVRdICsgJ1xcXFxzKyc7XG5yZVtDQVJFVFRSSU1dID0gbmV3IFJlZ0V4cChzcmNbQ0FSRVRUUklNXSwgJ2cnKTtcbnZhciBjYXJldFRyaW1SZXBsYWNlID0gJyQxXic7XG5cbnZhciBDQVJFVCA9IFIrKztcbnNyY1tDQVJFVF0gPSAnXicgKyBzcmNbTE9ORUNBUkVUXSArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgQ0FSRVRMT09TRSA9IFIrKztcbnNyY1tDQVJFVExPT1NFXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBBIHNpbXBsZSBndC9sdC9lcSB0aGluZywgb3IganVzdCBcIlwiIHRvIGluZGljYXRlIFwiYW55IHZlcnNpb25cIlxudmFyIENPTVBBUkFUT1JMT09TRSA9IFIrKztcbnNyY1tDT01QQVJBVE9STE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgTE9PU0VQTEFJTiArICcpJHxeJCc7XG52YXIgQ09NUEFSQVRPUiA9IFIrKztcbnNyY1tDT01QQVJBVE9SXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyooJyArIEZVTExQTEFJTiArICcpJHxeJCc7XG5cblxuLy8gQW4gZXhwcmVzc2lvbiB0byBzdHJpcCBhbnkgd2hpdGVzcGFjZSBiZXR3ZWVuIHRoZSBndGx0IGFuZCB0aGUgdGhpbmdcbi8vIGl0IG1vZGlmaWVzLCBzbyB0aGF0IGA+IDEuMi4zYCA9PT4gYD4xLjIuM2BcbnZhciBDT01QQVJBVE9SVFJJTSA9IFIrKztcbnNyY1tDT01QQVJBVE9SVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0dUTFRdICtcbiAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJ3wnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJztcblxuLy8gdGhpcyBvbmUgaGFzIHRvIHVzZSB0aGUgL2cgZmxhZ1xucmVbQ09NUEFSQVRPUlRSSU1dID0gbmV3IFJlZ0V4cChzcmNbQ09NUEFSQVRPUlRSSU1dLCAnZycpO1xudmFyIGNvbXBhcmF0b3JUcmltUmVwbGFjZSA9ICckMSQyJDMnO1xuXG5cbi8vIFNvbWV0aGluZyBsaWtlIGAxLjIuMyAtIDEuMi40YFxuLy8gTm90ZSB0aGF0IHRoZXNlIGFsbCB1c2UgdGhlIGxvb3NlIGZvcm0sIGJlY2F1c2UgdGhleSdsbCBiZVxuLy8gY2hlY2tlZCBhZ2FpbnN0IGVpdGhlciB0aGUgc3RyaWN0IG9yIGxvb3NlIGNvbXBhcmF0b3IgZm9ybVxuLy8gbGF0ZXIuXG52YXIgSFlQSEVOUkFOR0UgPSBSKys7XG5zcmNbSFlQSEVOUkFOR0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICdcXFxccystXFxcXHMrJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKiQnO1xuXG52YXIgSFlQSEVOUkFOR0VMT09TRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRUxPT1NFXSA9ICdeXFxcXHMqKCcgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbi8vIFN0YXIgcmFuZ2VzIGJhc2ljYWxseSBqdXN0IGFsbG93IGFueXRoaW5nIGF0IGFsbC5cbnZhciBTVEFSID0gUisrO1xuc3JjW1NUQVJdID0gJyg8fD4pPz0/XFxcXHMqXFxcXConO1xuXG4vLyBDb21waWxlIHRvIGFjdHVhbCByZWdleHAgb2JqZWN0cy5cbi8vIEFsbCBhcmUgZmxhZy1mcmVlLCB1bmxlc3MgdGhleSB3ZXJlIGNyZWF0ZWQgYWJvdmUgd2l0aCBhIGZsYWcuXG5mb3IgKHZhciBpID0gMDsgaSA8IFI7IGkrKykge1xuICBkZWJ1ZyhpLCBzcmNbaV0pO1xuICBpZiAoIXJlW2ldKVxuICAgIHJlW2ldID0gbmV3IFJlZ0V4cChzcmNbaV0pO1xufVxuXG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5mdW5jdGlvbiBwYXJzZSh2ZXJzaW9uLCBsb29zZSkge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcilcbiAgICByZXR1cm4gdmVyc2lvbjtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKVxuICAgIHJldHVybiBudWxsO1xuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdmFyIHIgPSBsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdO1xuICBpZiAoIXIudGVzdCh2ZXJzaW9uKSlcbiAgICByZXR1cm4gbnVsbDtcblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnRzLnZhbGlkID0gdmFsaWQ7XG5mdW5jdGlvbiB2YWxpZCh2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgdiA9IHBhcnNlKHZlcnNpb24sIGxvb3NlKTtcbiAgcmV0dXJuIHYgPyB2LnZlcnNpb24gOiBudWxsO1xufVxuXG5cbmV4cG9ydHMuY2xlYW4gPSBjbGVhbjtcbmZ1bmN0aW9uIGNsZWFuKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBzID0gcGFyc2UodmVyc2lvbi50cmltKCkucmVwbGFjZSgvXls9dl0rLywgJycpLCBsb29zZSk7XG4gIHJldHVybiBzID8gcy52ZXJzaW9uIDogbnVsbDtcbn1cblxuZXhwb3J0cy5TZW1WZXIgPSBTZW1WZXI7XG5cbmZ1bmN0aW9uIFNlbVZlcih2ZXJzaW9uLCBsb29zZSkge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgIGlmICh2ZXJzaW9uLmxvb3NlID09PSBsb29zZSlcbiAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgIGVsc2VcbiAgICAgIHZlcnNpb24gPSB2ZXJzaW9uLnZlcnNpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG4gIH1cblxuICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZlcnNpb24gaXMgbG9uZ2VyIHRoYW4gJyArIE1BWF9MRU5HVEggKyAnIGNoYXJhY3RlcnMnKVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcblxuICBkZWJ1ZygnU2VtVmVyJywgdmVyc2lvbiwgbG9vc2UpO1xuICB0aGlzLmxvb3NlID0gbG9vc2U7XG4gIHZhciBtID0gdmVyc2lvbi50cmltKCkubWF0Y2gobG9vc2UgPyByZVtMT09TRV0gOiByZVtGVUxMXSk7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVmVyc2lvbjogJyArIHZlcnNpb24pO1xuXG4gIHRoaXMucmF3ID0gdmVyc2lvbjtcblxuICAvLyB0aGVzZSBhcmUgYWN0dWFsbHkgbnVtYmVyc1xuICB0aGlzLm1ham9yID0gK21bMV07XG4gIHRoaXMubWlub3IgPSArbVsyXTtcbiAgdGhpcy5wYXRjaCA9ICttWzNdO1xuXG4gIGlmICh0aGlzLm1ham9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1ham9yIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1ham9yIHZlcnNpb24nKVxuXG4gIGlmICh0aGlzLm1pbm9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1pbm9yIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1pbm9yIHZlcnNpb24nKVxuXG4gIGlmICh0aGlzLnBhdGNoID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLnBhdGNoIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHBhdGNoIHZlcnNpb24nKVxuXG4gIC8vIG51bWJlcmlmeSBhbnkgcHJlcmVsZWFzZSBudW1lcmljIGlkc1xuICBpZiAoIW1bNF0pXG4gICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gIGVsc2VcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBtWzRdLnNwbGl0KCcuJykubWFwKGZ1bmN0aW9uKGlkKSB7XG4gICAgICBpZiAoL15bMC05XSskLy50ZXN0KGlkKSkge1xuICAgICAgICB2YXIgbnVtID0gK2lkO1xuICAgICAgICBpZiAobnVtID49IDAgJiYgbnVtIDwgTUFYX1NBRkVfSU5URUdFUilcbiAgICAgICAgICByZXR1cm4gbnVtO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlkO1xuICAgIH0pO1xuXG4gIHRoaXMuYnVpbGQgPSBtWzVdID8gbVs1XS5zcGxpdCgnLicpIDogW107XG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblNlbVZlci5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudmVyc2lvbiA9IHRoaXMubWFqb3IgKyAnLicgKyB0aGlzLm1pbm9yICsgJy4nICsgdGhpcy5wYXRjaDtcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgdGhpcy52ZXJzaW9uICs9ICctJyArIHRoaXMucHJlcmVsZWFzZS5qb2luKCcuJyk7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBkZWJ1ZygnU2VtVmVyLmNvbXBhcmUnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9vc2UsIG90aGVyKTtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZU1haW4ob3RoZXIpIHx8IHRoaXMuY29tcGFyZVByZShvdGhlcik7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVNYWluID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1ham9yLCBvdGhlci5tYWpvcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1pbm9yLCBvdGhlci5taW5vcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLnBhdGNoLCBvdGhlci5wYXRjaCk7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVQcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICAvLyBOT1QgaGF2aW5nIGEgcHJlcmVsZWFzZSBpcyA+IGhhdmluZyBvbmVcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAtMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIDE7XG4gIGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMDtcblxuICB2YXIgaSA9IDA7XG4gIGRvIHtcbiAgICB2YXIgYSA9IHRoaXMucHJlcmVsZWFzZVtpXTtcbiAgICB2YXIgYiA9IG90aGVyLnByZXJlbGVhc2VbaV07XG4gICAgZGVidWcoJ3ByZXJlbGVhc2UgY29tcGFyZScsIGksIGEsIGIpO1xuICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDA7XG4gICAgZWxzZSBpZiAoYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIC0xO1xuICAgIGVsc2UgaWYgKGEgPT09IGIpXG4gICAgICBjb250aW51ZTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpO1xuICB9IHdoaWxlICgrK2kpO1xufTtcblxuLy8gcHJlbWlub3Igd2lsbCBidW1wIHRoZSB2ZXJzaW9uIHVwIHRvIHRoZSBuZXh0IG1pbm9yIHJlbGVhc2UsIGFuZCBpbW1lZGlhdGVseVxuLy8gZG93biB0byBwcmUtcmVsZWFzZS4gcHJlbWFqb3IgYW5kIHByZXBhdGNoIHdvcmsgdGhlIHNhbWUgd2F5LlxuU2VtVmVyLnByb3RvdHlwZS5pbmMgPSBmdW5jdGlvbihyZWxlYXNlLCBpZGVudGlmaWVyKSB7XG4gIHN3aXRjaCAocmVsZWFzZSkge1xuICAgIGNhc2UgJ3ByZW1ham9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZW1pbm9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIGFscmVhZHkgYSBwcmVyZWxlYXNlLCBpdCB3aWxsIGJ1bXAgdG8gdGhlIG5leHQgdmVyc2lvblxuICAgICAgLy8gZHJvcCBhbnkgcHJlcmVsZWFzZXMgdGhhdCBtaWdodCBhbHJlYWR5IGV4aXN0LCBzaW5jZSB0aGV5IGFyZSBub3RcbiAgICAgIC8vIHJlbGV2YW50IGF0IHRoaXMgcG9pbnQuXG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgLy8gSWYgdGhlIGlucHV0IGlzIGEgbm9uLXByZXJlbGVhc2UgdmVyc2lvbiwgdGhpcyBhY3RzIHRoZSBzYW1lIGFzXG4gICAgLy8gcHJlcGF0Y2guXG4gICAgY2FzZSAncHJlcmVsZWFzZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ21ham9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWFqb3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtYWpvciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtYWpvci5cbiAgICAgIC8vIDEuMC4wLTUgYnVtcHMgdG8gMS4wLjBcbiAgICAgIC8vIDEuMS4wIGJ1bXBzIHRvIDIuMC4wXG4gICAgICBpZiAodGhpcy5taW5vciAhPT0gMCB8fCB0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21pbm9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWlub3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtaW5vciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtaW5vci5cbiAgICAgIC8vIDEuMi4wLTUgYnVtcHMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4xIGJ1bXBzIHRvIDEuMy4wXG4gICAgICBpZiAodGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBub3QgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uLCBpdCB3aWxsIGluY3JlbWVudCB0aGUgcGF0Y2guXG4gICAgICAvLyBJZiBpdCBpcyBhIHByZS1yZWxlYXNlIGl0IHdpbGwgYnVtcCB1cCB0byB0aGUgc2FtZSBwYXRjaCB2ZXJzaW9uLlxuICAgICAgLy8gMS4yLjAtNSBwYXRjaGVzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMCBwYXRjaGVzIHRvIDEuMi4xXG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wYXRjaCsrO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICAvLyBUaGlzIHByb2JhYmx5IHNob3VsZG4ndCBiZSB1c2VkIHB1YmxpY2x5LlxuICAgIC8vIDEuMC4wIFwicHJlXCIgd291bGQgYmVjb21lIDEuMC4wLTAgd2hpY2ggaXMgdGhlIHdyb25nIGRpcmVjdGlvbi5cbiAgICBjYXNlICdwcmUnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFswXTtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgaSA9IHRoaXMucHJlcmVsZWFzZS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVyZWxlYXNlW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlW2ldKys7XG4gICAgICAgICAgICBpID0gLTI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpID09PSAtMSkgLy8gZGlkbid0IGluY3JlbWVudCBhbnl0aGluZ1xuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZS5wdXNoKDApO1xuICAgICAgfVxuICAgICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgLy8gMS4yLjAtYmV0YS4xIGJ1bXBzIHRvIDEuMi4wLWJldGEuMixcbiAgICAgICAgLy8gMS4yLjAtYmV0YS5mb29ibHogb3IgMS4yLjAtYmV0YSBidW1wcyB0byAxLjIuMC1iZXRhLjBcbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZVswXSA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgIGlmIChpc05hTih0aGlzLnByZXJlbGVhc2VbMV0pKVxuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW5jcmVtZW50IGFyZ3VtZW50OiAnICsgcmVsZWFzZSk7XG4gIH1cbiAgdGhpcy5mb3JtYXQoKTtcbiAgdGhpcy5yYXcgPSB0aGlzLnZlcnNpb247XG4gIHJldHVybiB0aGlzO1xufTtcblxuZXhwb3J0cy5pbmMgPSBpbmM7XG5mdW5jdGlvbiBpbmModmVyc2lvbiwgcmVsZWFzZSwgbG9vc2UsIGlkZW50aWZpZXIpIHtcbiAgaWYgKHR5cGVvZihsb29zZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgaWRlbnRpZmllciA9IGxvb3NlO1xuICAgIGxvb3NlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSkuaW5jKHJlbGVhc2UsIGlkZW50aWZpZXIpLnZlcnNpb247XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy5kaWZmID0gZGlmZjtcbmZ1bmN0aW9uIGRpZmYodmVyc2lvbjEsIHZlcnNpb24yKSB7XG4gIGlmIChlcSh2ZXJzaW9uMSwgdmVyc2lvbjIpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHYxID0gcGFyc2UodmVyc2lvbjEpO1xuICAgIHZhciB2MiA9IHBhcnNlKHZlcnNpb24yKTtcbiAgICBpZiAodjEucHJlcmVsZWFzZS5sZW5ndGggfHwgdjIucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuICdwcmUnK2tleTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAncHJlcmVsZWFzZSc7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLmNvbXBhcmVJZGVudGlmaWVycyA9IGNvbXBhcmVJZGVudGlmaWVycztcblxudmFyIG51bWVyaWMgPSAvXlswLTldKyQvO1xuZnVuY3Rpb24gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpIHtcbiAgdmFyIGFudW0gPSBudW1lcmljLnRlc3QoYSk7XG4gIHZhciBibnVtID0gbnVtZXJpYy50ZXN0KGIpO1xuXG4gIGlmIChhbnVtICYmIGJudW0pIHtcbiAgICBhID0gK2E7XG4gICAgYiA9ICtiO1xuICB9XG5cbiAgcmV0dXJuIChhbnVtICYmICFibnVtKSA/IC0xIDpcbiAgICAgICAgIChibnVtICYmICFhbnVtKSA/IDEgOlxuICAgICAgICAgYSA8IGIgPyAtMSA6XG4gICAgICAgICBhID4gYiA/IDEgOlxuICAgICAgICAgMDtcbn1cblxuZXhwb3J0cy5yY29tcGFyZUlkZW50aWZpZXJzID0gcmNvbXBhcmVJZGVudGlmaWVycztcbmZ1bmN0aW9uIHJjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGIsIGEpO1xufVxuXG5leHBvcnRzLm1ham9yID0gbWFqb3I7XG5mdW5jdGlvbiBtYWpvcihhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWFqb3I7XG59XG5cbmV4cG9ydHMubWlub3IgPSBtaW5vcjtcbmZ1bmN0aW9uIG1pbm9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5taW5vcjtcbn1cblxuZXhwb3J0cy5wYXRjaCA9IHBhdGNoO1xuZnVuY3Rpb24gcGF0Y2goYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLnBhdGNoO1xufVxuXG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuZnVuY3Rpb24gY29tcGFyZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkuY29tcGFyZShiKTtcbn1cblxuZXhwb3J0cy5jb21wYXJlTG9vc2UgPSBjb21wYXJlTG9vc2U7XG5mdW5jdGlvbiBjb21wYXJlTG9vc2UoYSwgYikge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCB0cnVlKTtcbn1cblxuZXhwb3J0cy5yY29tcGFyZSA9IHJjb21wYXJlO1xuZnVuY3Rpb24gcmNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYiwgYSwgbG9vc2UpO1xufVxuXG5leHBvcnRzLnNvcnQgPSBzb3J0O1xuZnVuY3Rpb24gc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMucnNvcnQgPSByc29ydDtcbmZ1bmN0aW9uIHJzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLnJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMuZ3QgPSBndDtcbmZ1bmN0aW9uIGd0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+IDA7XG59XG5cbmV4cG9ydHMubHQgPSBsdDtcbmZ1bmN0aW9uIGx0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8IDA7XG59XG5cbmV4cG9ydHMuZXEgPSBlcTtcbmZ1bmN0aW9uIGVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA9PT0gMDtcbn1cblxuZXhwb3J0cy5uZXEgPSBuZXE7XG5mdW5jdGlvbiBuZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpICE9PSAwO1xufVxuXG5leHBvcnRzLmd0ZSA9IGd0ZTtcbmZ1bmN0aW9uIGd0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPj0gMDtcbn1cblxuZXhwb3J0cy5sdGUgPSBsdGU7XG5mdW5jdGlvbiBsdGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDw9IDA7XG59XG5cbmV4cG9ydHMuY21wID0gY21wO1xuZnVuY3Rpb24gY21wKGEsIG9wLCBiLCBsb29zZSkge1xuICB2YXIgcmV0O1xuICBzd2l0Y2ggKG9wKSB7XG4gICAgY2FzZSAnPT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSA9PT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyE9PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgIT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcnOiBjYXNlICc9JzogY2FzZSAnPT0nOiByZXQgPSBlcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJyE9JzogcmV0ID0gbmVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPic6IHJldCA9IGd0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPj0nOiByZXQgPSBndGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8JzogcmV0ID0gbHQoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8PSc6IHJldCA9IGx0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgb3BlcmF0b3I6ICcgKyBvcCk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0cy5Db21wYXJhdG9yID0gQ29tcGFyYXRvcjtcbmZ1bmN0aW9uIENvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgaWYgKGNvbXAubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgZWxzZVxuICAgICAgY29tcCA9IGNvbXAudmFsdWU7XG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpXG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcblxuICBkZWJ1ZygnY29tcGFyYXRvcicsIGNvbXAsIGxvb3NlKTtcbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuICB0aGlzLnBhcnNlKGNvbXApO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgZWxzZVxuICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wZXJhdG9yICsgdGhpcy5zZW12ZXIudmVyc2lvbjtcblxuICBkZWJ1ZygnY29tcCcsIHRoaXMpO1xufVxuXG52YXIgQU5ZID0ge307XG5Db21wYXJhdG9yLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGNvbXApIHtcbiAgdmFyIHIgPSB0aGlzLmxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgbSA9IGNvbXAubWF0Y2gocik7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY29tcGFyYXRvcjogJyArIGNvbXApO1xuXG4gIHRoaXMub3BlcmF0b3IgPSBtWzFdO1xuICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJz0nKVxuICAgIHRoaXMub3BlcmF0b3IgPSAnJztcblxuICAvLyBpZiBpdCBsaXRlcmFsbHkgaXMganVzdCAnPicgb3IgJycgdGhlbiBhbGxvdyBhbnl0aGluZy5cbiAgaWYgKCFtWzJdKVxuICAgIHRoaXMuc2VtdmVyID0gQU5ZO1xuICBlbHNlXG4gICAgdGhpcy5zZW12ZXIgPSBuZXcgU2VtVmVyKG1bMl0sIHRoaXMubG9vc2UpO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBkZWJ1ZygnQ29tcGFyYXRvci50ZXN0JywgdmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY21wKHZlcnNpb24sIHRoaXMub3BlcmF0b3IsIHRoaXMuc2VtdmVyLCB0aGlzLmxvb3NlKTtcbn07XG5cblxuZXhwb3J0cy5SYW5nZSA9IFJhbmdlO1xuZnVuY3Rpb24gUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIGlmICgocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkgJiYgcmFuZ2UubG9vc2UgPT09IGxvb3NlKVxuICAgIHJldHVybiByYW5nZTtcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmFuZ2UpKVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB0aGlzLmxvb3NlID0gbG9vc2U7XG5cbiAgLy8gRmlyc3QsIHNwbGl0IGJhc2VkIG9uIGJvb2xlYW4gb3IgfHxcbiAgdGhpcy5yYXcgPSByYW5nZTtcbiAgdGhpcy5zZXQgPSByYW5nZS5zcGxpdCgvXFxzKlxcfFxcfFxccyovKS5tYXAoZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVJhbmdlKHJhbmdlLnRyaW0oKSk7XG4gIH0sIHRoaXMpLmZpbHRlcihmdW5jdGlvbihjKSB7XG4gICAgLy8gdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgcmVsZXZhbnQgZm9yIHdoYXRldmVyIHJlYXNvblxuICAgIHJldHVybiBjLmxlbmd0aDtcbiAgfSk7XG5cbiAgaWYgKCF0aGlzLnNldC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFNlbVZlciBSYW5nZTogJyArIHJhbmdlKTtcbiAgfVxuXG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblJhbmdlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yYW5nZSA9IHRoaXMuc2V0Lm1hcChmdW5jdGlvbihjb21wcykge1xuICAgIHJldHVybiBjb21wcy5qb2luKCcgJykudHJpbSgpO1xuICB9KS5qb2luKCd8fCcpLnRyaW0oKTtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUucGFyc2VSYW5nZSA9IGZ1bmN0aW9uKHJhbmdlKSB7XG4gIHZhciBsb29zZSA9IHRoaXMubG9vc2U7XG4gIHJhbmdlID0gcmFuZ2UudHJpbSgpO1xuICBkZWJ1ZygncmFuZ2UnLCByYW5nZSwgbG9vc2UpO1xuICAvLyBgMS4yLjMgLSAxLjIuNGAgPT4gYD49MS4yLjMgPD0xLjIuNGBcbiAgdmFyIGhyID0gbG9vc2UgPyByZVtIWVBIRU5SQU5HRUxPT1NFXSA6IHJlW0hZUEhFTlJBTkdFXTtcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKGhyLCBoeXBoZW5SZXBsYWNlKTtcbiAgZGVidWcoJ2h5cGhlbiByZXBsYWNlJywgcmFuZ2UpO1xuICAvLyBgPiAxLjIuMyA8IDEuMi41YCA9PiBgPjEuMi4zIDwxLjIuNWBcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NPTVBBUkFUT1JUUklNXSwgY29tcGFyYXRvclRyaW1SZXBsYWNlKTtcbiAgZGVidWcoJ2NvbXBhcmF0b3IgdHJpbScsIHJhbmdlLCByZVtDT01QQVJBVE9SVFJJTV0pO1xuXG4gIC8vIGB+IDEuMi4zYCA9PiBgfjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSk7XG5cbiAgLy8gYF4gMS4yLjNgID0+IGBeMS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDQVJFVFRSSU1dLCBjYXJldFRyaW1SZXBsYWNlKTtcblxuICAvLyBub3JtYWxpemUgc3BhY2VzXG4gIHJhbmdlID0gcmFuZ2Uuc3BsaXQoL1xccysvKS5qb2luKCcgJyk7XG5cbiAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgdHJpbW1lZCBhbmRcbiAgLy8gcmVhZHkgdG8gYmUgc3BsaXQgaW50byBjb21wYXJhdG9ycy5cblxuICB2YXIgY29tcFJlID0gbG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBzZXQgPSByYW5nZS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKS5zcGxpdCgvXFxzKy8pO1xuICBpZiAodGhpcy5sb29zZSkge1xuICAgIC8vIGluIGxvb3NlIG1vZGUsIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHZhbGlkIGNvbXBhcmF0b3JzXG4gICAgc2V0ID0gc2V0LmZpbHRlcihmdW5jdGlvbihjb21wKSB7XG4gICAgICByZXR1cm4gISFjb21wLm1hdGNoKGNvbXBSZSk7XG4gICAgfSk7XG4gIH1cbiAgc2V0ID0gc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNldDtcbn07XG5cbi8vIE1vc3RseSBqdXN0IGZvciB0ZXN0aW5nIGFuZCBsZWdhY3kgQVBJIHJlYXNvbnNcbmV4cG9ydHMudG9Db21wYXJhdG9ycyA9IHRvQ29tcGFyYXRvcnM7XG5mdW5jdGlvbiB0b0NvbXBhcmF0b3JzKHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkuc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIGNvbXAubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgIHJldHVybiBjLnZhbHVlO1xuICAgIH0pLmpvaW4oJyAnKS50cmltKCkuc3BsaXQoJyAnKTtcbiAgfSk7XG59XG5cbi8vIGNvbXByaXNlZCBvZiB4cmFuZ2VzLCB0aWxkZXMsIHN0YXJzLCBhbmQgZ3RsdCdzIGF0IHRoaXMgcG9pbnQuXG4vLyBhbHJlYWR5IHJlcGxhY2VkIHRoZSBoeXBoZW4gcmFuZ2VzXG4vLyB0dXJuIGludG8gYSBzZXQgb2YgSlVTVCBjb21wYXJhdG9ycy5cbmZ1bmN0aW9uIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSkge1xuICBkZWJ1ZygnY29tcCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZUNhcmV0cyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCd0aWxkZXMnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VYUmFuZ2VzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3hyYW5nZScsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVN0YXJzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3N0YXJzJywgY29tcCk7XG4gIHJldHVybiBjb21wO1xufVxuXG5mdW5jdGlvbiBpc1goaWQpIHtcbiAgcmV0dXJuICFpZCB8fCBpZC50b0xvd2VyQ2FzZSgpID09PSAneCcgfHwgaWQgPT09ICcqJztcbn1cblxuLy8gfiwgfj4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyB+MiwgfjIueCwgfjIueC54LCB+PjIsIH4+Mi54IH4+Mi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyB+Mi4wLCB+Mi4wLngsIH4+Mi4wLCB+PjIuMC54IC0tPiA+PTIuMC4wIDwyLjEuMFxuLy8gfjEuMiwgfjEuMi54LCB+PjEuMiwgfj4xLjIueCAtLT4gPj0xLjIuMCA8MS4zLjBcbi8vIH4xLjIuMywgfj4xLjIuMyAtLT4gPj0xLjIuMyA8MS4zLjBcbi8vIH4xLjIuMCwgfj4xLjIuMCAtLT4gPj0xLjIuMCA8MS4zLjBcbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZXMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVRpbGRlKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpIHtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW1RJTERFTE9PU0VdIDogcmVbVElMREVdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3RpbGRlJywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSlcbiAgICAgIC8vIH4xLjIgPT0gPj0xLjIuMCA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlVGlsZGUgcHInLCBwcik7XG4gICAgICBpZiAocHIuY2hhckF0KDApICE9PSAnLScpXG4gICAgICAgIHByID0gJy0nICsgcHI7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfSBlbHNlXG4gICAgICAvLyB+MS4yLjMgPT0gPj0xLjIuMyA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG5cbiAgICBkZWJ1ZygndGlsZGUgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gXiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIF4yLCBeMi54LCBeMi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMi4wLCBeMi4wLnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMS4yLCBeMS4yLnggLS0+ID49MS4yLjAgPDIuMC4wXG4vLyBeMS4yLjMgLS0+ID49MS4yLjMgPDIuMC4wXG4vLyBeMS4yLjAgLS0+ID49MS4yLjAgPDIuMC4wXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXRzKGNvbXAsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VDYXJldChjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXAsIGxvb3NlKTtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW0NBUkVUTE9PU0VdIDogcmVbQ0FSRVRdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ2NhcmV0JywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSkge1xuICAgICAgaWYgKE0gPT09ICcwJylcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VDYXJldCBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJylcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdubyBwcicpO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygnY2FyZXQgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZXMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VYUmFuZ2VzJywgY29tcCwgbG9vc2UpO1xuICByZXR1cm4gY29tcC5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpIHtcbiAgY29tcCA9IGNvbXAudHJpbSgpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbWFJBTkdFTE9PU0VdIDogcmVbWFJBTkdFXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihyZXQsIGd0bHQsIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3hSYW5nZScsIGNvbXAsIHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpO1xuICAgIHZhciB4TSA9IGlzWChNKTtcbiAgICB2YXIgeG0gPSB4TSB8fCBpc1gobSk7XG4gICAgdmFyIHhwID0geG0gfHwgaXNYKHApO1xuICAgIHZhciBhbnlYID0geHA7XG5cbiAgICBpZiAoZ3RsdCA9PT0gJz0nICYmIGFueVgpXG4gICAgICBndGx0ID0gJyc7XG5cbiAgICBpZiAoeE0pIHtcbiAgICAgIGlmIChndGx0ID09PSAnPicgfHwgZ3RsdCA9PT0gJzwnKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgYWxsb3dlZFxuICAgICAgICByZXQgPSAnPDAuMC4wJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgZm9yYmlkZGVuXG4gICAgICAgIHJldCA9ICcqJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGd0bHQgJiYgYW55WCkge1xuICAgICAgLy8gcmVwbGFjZSBYIHdpdGggMFxuICAgICAgaWYgKHhtKVxuICAgICAgICBtID0gMDtcbiAgICAgIGlmICh4cClcbiAgICAgICAgcCA9IDA7XG5cbiAgICAgIGlmIChndGx0ID09PSAnPicpIHtcbiAgICAgICAgLy8gPjEgPT4gPj0yLjAuMFxuICAgICAgICAvLyA+MS4yID0+ID49MS4zLjBcbiAgICAgICAgLy8gPjEuMi4zID0+ID49IDEuMi40XG4gICAgICAgIGd0bHQgPSAnPj0nO1xuICAgICAgICBpZiAoeG0pIHtcbiAgICAgICAgICBNID0gK00gKyAxO1xuICAgICAgICAgIG0gPSAwO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICAgICAgbSA9ICttICsgMTtcbiAgICAgICAgICBwID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChndGx0ID09PSAnPD0nKSB7XG4gICAgICAgIC8vIDw9MC43LnggaXMgYWN0dWFsbHkgPDAuOC4wLCBzaW5jZSBhbnkgMC43Lnggc2hvdWxkXG4gICAgICAgIC8vIHBhc3MuICBTaW1pbGFybHksIDw9Ny54IGlzIGFjdHVhbGx5IDw4LjAuMCwgZXRjLlxuICAgICAgICBndGx0ID0gJzwnO1xuICAgICAgICBpZiAoeG0pXG4gICAgICAgICAgTSA9ICtNICsgMTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG0gPSArbSArIDE7XG4gICAgICB9XG5cbiAgICAgIHJldCA9IGd0bHQgKyBNICsgJy4nICsgbSArICcuJyArIHA7XG4gICAgfSBlbHNlIGlmICh4bSkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfVxuXG4gICAgZGVidWcoJ3hSYW5nZSByZXR1cm4nLCByZXQpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbi8vIEJlY2F1c2UgKiBpcyBBTkQtZWQgd2l0aCBldmVyeXRoaW5nIGVsc2UgaW4gdGhlIGNvbXBhcmF0b3IsXG4vLyBhbmQgJycgbWVhbnMgXCJhbnkgdmVyc2lvblwiLCBqdXN0IHJlbW92ZSB0aGUgKnMgZW50aXJlbHkuXG5mdW5jdGlvbiByZXBsYWNlU3RhcnMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VTdGFycycsIGNvbXAsIGxvb3NlKTtcbiAgLy8gTG9vc2VuZXNzIGlzIGlnbm9yZWQgaGVyZS4gIHN0YXIgaXMgYWx3YXlzIGFzIGxvb3NlIGFzIGl0IGdldHMhXG4gIHJldHVybiBjb21wLnRyaW0oKS5yZXBsYWNlKHJlW1NUQVJdLCAnJyk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIHRvIHN0cmluZy5yZXBsYWNlKHJlW0hZUEhFTlJBTkdFXSlcbi8vIE0sIG0sIHBhdGNoLCBwcmVyZWxlYXNlLCBidWlsZFxuLy8gMS4yIC0gMy40LjUgPT4gPj0xLjIuMCA8PTMuNC41XG4vLyAxLjIuMyAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMCBBbnkgMy40Lnggd2lsbCBkb1xuLy8gMS4yIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wXG5mdW5jdGlvbiBoeXBoZW5SZXBsYWNlKCQwLFxuICAgICAgICAgICAgICAgICAgICAgICBmcm9tLCBmTSwgZm0sIGZwLCBmcHIsIGZiLFxuICAgICAgICAgICAgICAgICAgICAgICB0bywgdE0sIHRtLCB0cCwgdHByLCB0Yikge1xuXG4gIGlmIChpc1goZk0pKVxuICAgIGZyb20gPSAnJztcbiAgZWxzZSBpZiAoaXNYKGZtKSlcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1goZnApKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLicgKyBmbSArICcuMCc7XG4gIGVsc2VcbiAgICBmcm9tID0gJz49JyArIGZyb207XG5cbiAgaWYgKGlzWCh0TSkpXG4gICAgdG8gPSAnJztcbiAgZWxzZSBpZiAoaXNYKHRtKSlcbiAgICB0byA9ICc8JyArICgrdE0gKyAxKSArICcuMC4wJztcbiAgZWxzZSBpZiAoaXNYKHRwKSlcbiAgICB0byA9ICc8JyArIHRNICsgJy4nICsgKCt0bSArIDEpICsgJy4wJztcbiAgZWxzZSBpZiAodHByKVxuICAgIHRvID0gJzw9JyArIHRNICsgJy4nICsgdG0gKyAnLicgKyB0cCArICctJyArIHRwcjtcbiAgZWxzZVxuICAgIHRvID0gJzw9JyArIHRvO1xuXG4gIHJldHVybiAoZnJvbSArICcgJyArIHRvKS50cmltKCk7XG59XG5cblxuLy8gaWYgQU5ZIG9mIHRoZSBzZXRzIG1hdGNoIEFMTCBvZiBpdHMgY29tcGFyYXRvcnMsIHRoZW4gcGFzc1xuUmFuZ2UucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIGlmICghdmVyc2lvbilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRlc3RTZXQodGhpcy5zZXRbaV0sIHZlcnNpb24pKVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZnVuY3Rpb24gdGVzdFNldChzZXQsIHZlcnNpb24pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXNldFtpXS50ZXN0KHZlcnNpb24pKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHZlcnNpb24ucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAvLyBGaW5kIHRoZSBzZXQgb2YgdmVyc2lvbnMgdGhhdCBhcmUgYWxsb3dlZCB0byBoYXZlIHByZXJlbGVhc2VzXG4gICAgLy8gRm9yIGV4YW1wbGUsIF4xLjIuMy1wci4xIGRlc3VnYXJzIHRvID49MS4yLjMtcHIuMSA8Mi4wLjBcbiAgICAvLyBUaGF0IHNob3VsZCBhbGxvdyBgMS4yLjMtcHIuMmAgdG8gcGFzcy5cbiAgICAvLyBIb3dldmVyLCBgMS4yLjQtYWxwaGEubm90cmVhZHlgIHNob3VsZCBOT1QgYmUgYWxsb3dlZCxcbiAgICAvLyBldmVuIHRob3VnaCBpdCdzIHdpdGhpbiB0aGUgcmFuZ2Ugc2V0IGJ5IHRoZSBjb21wYXJhdG9ycy5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoc2V0W2ldLnNlbXZlcik7XG4gICAgICBpZiAoc2V0W2ldLnNlbXZlciA9PT0gQU5ZKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKHNldFtpXS5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBhbGxvd2VkID0gc2V0W2ldLnNlbXZlcjtcbiAgICAgICAgaWYgKGFsbG93ZWQubWFqb3IgPT09IHZlcnNpb24ubWFqb3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQubWlub3IgPT09IHZlcnNpb24ubWlub3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQucGF0Y2ggPT09IHZlcnNpb24ucGF0Y2gpXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVmVyc2lvbiBoYXMgYSAtcHJlLCBidXQgaXQncyBub3Qgb25lIG9mIHRoZSBvbmVzIHdlIGxpa2UuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMuc2F0aXNmaWVzID0gc2F0aXNmaWVzO1xuZnVuY3Rpb24gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICB0cnkge1xuICAgIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiByYW5nZS50ZXN0KHZlcnNpb24pO1xufVxuXG5leHBvcnRzLm1heFNhdGlzZnlpbmcgPSBtYXhTYXRpc2Z5aW5nO1xuZnVuY3Rpb24gbWF4U2F0aXNmeWluZyh2ZXJzaW9ucywgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiB2ZXJzaW9ucy5maWx0ZXIoZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKTtcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIHJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSlbMF0gfHwgbnVsbDtcbn1cblxuZXhwb3J0cy5taW5TYXRpc2Z5aW5nID0gbWluU2F0aXNmeWluZztcbmZ1bmN0aW9uIG1pblNhdGlzZnlpbmcodmVyc2lvbnMsIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gdmVyc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSlbMF0gfHwgbnVsbDtcbn1cblxuZXhwb3J0cy52YWxpZFJhbmdlID0gdmFsaWRSYW5nZTtcbmZ1bmN0aW9uIHZhbGlkUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgLy8gUmV0dXJuICcqJyBpbnN0ZWFkIG9mICcnIHNvIHRoYXQgdHJ1dGhpbmVzcyB3b3Jrcy5cbiAgICAvLyBUaGlzIHdpbGwgdGhyb3cgaWYgaXQncyBpbnZhbGlkIGFueXdheVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKS5yYW5nZSB8fCAnKic7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgbGVzcyB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlXG5leHBvcnRzLmx0ciA9IGx0cjtcbmZ1bmN0aW9uIGx0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc8JywgbG9vc2UpO1xufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2UuXG5leHBvcnRzLmd0ciA9IGd0cjtcbmZ1bmN0aW9uIGd0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc+JywgbG9vc2UpO1xufVxuXG5leHBvcnRzLm91dHNpZGUgPSBvdXRzaWRlO1xuZnVuY3Rpb24gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgaGlsbywgbG9vc2UpIHtcbiAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuXG4gIHZhciBndGZuLCBsdGVmbiwgbHRmbiwgY29tcCwgZWNvbXA7XG4gIHN3aXRjaCAoaGlsbykge1xuICAgIGNhc2UgJz4nOlxuICAgICAgZ3RmbiA9IGd0O1xuICAgICAgbHRlZm4gPSBsdGU7XG4gICAgICBsdGZuID0gbHQ7XG4gICAgICBjb21wID0gJz4nO1xuICAgICAgZWNvbXAgPSAnPj0nO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnPCc6XG4gICAgICBndGZuID0gbHQ7XG4gICAgICBsdGVmbiA9IGd0ZTtcbiAgICAgIGx0Zm4gPSBndDtcbiAgICAgIGNvbXAgPSAnPCc7XG4gICAgICBlY29tcCA9ICc8PSc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBwcm92aWRlIGEgaGlsbyB2YWwgb2YgXCI8XCIgb3IgXCI+XCInKTtcbiAgfVxuXG4gIC8vIElmIGl0IHNhdGlzaWZlcyB0aGUgcmFuZ2UgaXQgaXMgbm90IG91dHNpZGVcbiAgaWYgKHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRnJvbSBub3cgb24sIHZhcmlhYmxlIHRlcm1zIGFyZSBhcyBpZiB3ZSdyZSBpbiBcImd0clwiIG1vZGUuXG4gIC8vIGJ1dCBub3RlIHRoYXQgZXZlcnl0aGluZyBpcyBmbGlwcGVkIGZvciB0aGUgXCJsdHJcIiBmdW5jdGlvbi5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXTtcblxuICAgIHZhciBoaWdoID0gbnVsbDtcbiAgICB2YXIgbG93ID0gbnVsbDtcblxuICAgIGNvbXBhcmF0b3JzLmZvckVhY2goZnVuY3Rpb24oY29tcGFyYXRvcikge1xuICAgICAgaWYgKGNvbXBhcmF0b3Iuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgICAgY29tcGFyYXRvciA9IG5ldyBDb21wYXJhdG9yKCc+PTAuMC4wJylcbiAgICAgIH1cbiAgICAgIGhpZ2ggPSBoaWdoIHx8IGNvbXBhcmF0b3I7XG4gICAgICBsb3cgPSBsb3cgfHwgY29tcGFyYXRvcjtcbiAgICAgIGlmIChndGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBoaWdoLnNlbXZlciwgbG9vc2UpKSB7XG4gICAgICAgIGhpZ2ggPSBjb21wYXJhdG9yO1xuICAgICAgfSBlbHNlIGlmIChsdGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBsb3cuc2VtdmVyLCBsb29zZSkpIHtcbiAgICAgICAgbG93ID0gY29tcGFyYXRvcjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIElmIHRoZSBlZGdlIHZlcnNpb24gY29tcGFyYXRvciBoYXMgYSBvcGVyYXRvciB0aGVuIG91ciB2ZXJzaW9uXG4gICAgLy8gaXNuJ3Qgb3V0c2lkZSBpdFxuICAgIGlmIChoaWdoLm9wZXJhdG9yID09PSBjb21wIHx8IGhpZ2gub3BlcmF0b3IgPT09IGVjb21wKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGxvd2VzdCB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGFuIG9wZXJhdG9yIGFuZCBvdXIgdmVyc2lvblxuICAgIC8vIGlzIGxlc3MgdGhhbiBpdCB0aGVuIGl0IGlzbid0IGhpZ2hlciB0aGFuIHRoZSByYW5nZVxuICAgIGlmICgoIWxvdy5vcGVyYXRvciB8fCBsb3cub3BlcmF0b3IgPT09IGNvbXApICYmXG4gICAgICAgIGx0ZWZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChsb3cub3BlcmF0b3IgPT09IGVjb21wICYmIGx0Zm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMucHJlcmVsZWFzZSA9IHByZXJlbGVhc2U7XG5mdW5jdGlvbiBwcmVyZWxlYXNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBwYXJzZWQgPSBwYXJzZSh2ZXJzaW9uLCBsb29zZSk7XG4gIHJldHVybiAocGFyc2VkICYmIHBhcnNlZC5wcmVyZWxlYXNlLmxlbmd0aCkgPyBwYXJzZWQucHJlcmVsZWFzZSA6IG51bGw7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2VtdmVyL3NlbXZlci5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi92aWRlby1saXN0LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC92aWRlb3MvdmlkZW8tbGlzdC92aWRlby1saXN0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEyNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvb2JzZXJ2YWJsZS9mcm9tUHJvbWlzZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEyOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvb3BlcmF0b3IvY2F0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxNDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL3V0aWwvdHJ5Q2F0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgyNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvT3V0ZXJTdWJzY3JpYmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMjgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL1N1YnNjcmlwdGlvbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDMyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy91dGlsL3N1YnNjcmliZVRvUmVzdWx0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNTcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL3V0aWwvZXJyb3JPYmplY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xyXG5pbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wYXRjaCc7XHJcbmltcG9ydCAnem9uZS5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclJlbmRlcmVyLCBSZW5kZXJSZXN1bHQgfSBmcm9tICdhc3BuZXQtcHJlcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xyXG5cclxuZW5hYmxlUHJvZE1vZGUoKTtcclxuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybU5vZGVEeW5hbWljKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcihwYXJhbXMgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlclJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xyXG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50OiAnPGFwcD48L2FwcD4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIElmIGFueSBlcnJvciBvY2N1cnMgd2hpbGUgcmVuZGVyaW5nIHRoZSBtb2R1bGUsIHJlamVjdCB0aGUgd2hvbGUgb3BlcmF0aW9uXHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Rab25lLnJ1bjxQcm9taXNlPHN0cmluZz4+KCgpID0+IHBsYXRmb3JtLnNlcmlhbGl6ZU1vZHVsZShBcHBNb2R1bGUpKS50aGVuKGh0bWwgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcclxuICAgICAgICB9LCByZWplY3QpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyJdLCJzb3VyY2VSb290IjoiIn0=