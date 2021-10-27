import { Component, NgModule } from '@angular/core';

class SuperLibComponent {
}
SuperLibComponent.decorators = [
    { type: Component, args: [{
                selector: "super-lib-component",
                template: "<p>Hello from the librabry</p>"
            },] }
];

class SuperLibModule {
}
SuperLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SuperLibComponent],
                exports: [SuperLibComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { SuperLibComponent, SuperLibModule };
//# sourceMappingURL=super-lib.js.map
