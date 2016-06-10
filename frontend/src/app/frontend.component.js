"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var _version_info_1 = require('./+version-info');
var router_1 = require('@angular/router');
var FrontendAppComponent = (function () {
    function FrontendAppComponent(_router) {
        this._router = _router;
        this.title = 'seed works successfully';
    }
    FrontendAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frontend-app',
            templateUrl: 'frontend.component.html',
            styleUrls: ['frontend.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.Routes([
            { path: '/version-info', component: _version_info_1.VersionInfoComponent }
        ])
    ], FrontendAppComponent);
    return FrontendAppComponent;
}());
exports.FrontendAppComponent = FrontendAppComponent;
//# sourceMappingURL=frontend.component.js.map