(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('super-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['super-lib'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var SuperLibComponent = /** @class */ (function () {
        function SuperLibComponent() {
        }
        return SuperLibComponent;
    }());
    SuperLibComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "super-lib-component",
                    template: "<p>Hello from the librabry</p>"
                },] }
    ];

    var SuperLibModule = /** @class */ (function () {
        function SuperLibModule() {
        }
        return SuperLibModule;
    }());
    SuperLibModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [SuperLibComponent],
                    exports: [SuperLibComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SuperLibComponent = SuperLibComponent;
    exports.SuperLibModule = SuperLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=super-lib.umd.js.map
