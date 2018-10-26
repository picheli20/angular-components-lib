import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var CounterService = /** @class */ (function () {
    function CounterService() {
    }
    CounterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CounterService.ctorParameters = function () { return []; };
    /** @nocollapse */ CounterService.ngInjectableDef = defineInjectable({ factory: function CounterService_Factory() { return new CounterService(); }, token: CounterService, providedIn: "root" });
    return CounterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
    }
    /**
     * @return {?}
     */
    CounterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CounterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-counter',
                    template: "\n    <p>\n      counter works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    CounterComponent.ctorParameters = function () { return []; };
    return CounterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var CounterModule = /** @class */ (function () {
    function CounterModule() {
    }
    CounterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [CounterComponent],
                    exports: [CounterComponent]
                },] }
    ];
    return CounterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { CounterService, CounterComponent, CounterModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vY291bnRlci9saWIvY291bnRlci5zZXJ2aWNlLnRzIiwibmc6Ly9jb3VudGVyL2xpYi9jb3VudGVyLmNvbXBvbmVudC50cyIsIm5nOi8vY291bnRlci9saWIvY291bnRlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb3VudGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jb3VudGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGNvdW50ZXIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENvdW50ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvdW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvdW50ZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDb3VudGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NvdW50ZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvdW50ZXJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3lCQUpEO0NBRUE7Ozs7OztBQ0ZBO0lBYUU7S0FBaUI7Ozs7SUFFakIsbUNBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLCtDQUlUO2lCQUVGOzs7O0lBUUQsdUJBQUM7Q0FoQkQ7Ozs7OztBQ0ZBO0lBR0E7S0FNOEI7O2dCQU43QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUM1Qjs7SUFDNEIsb0JBQUM7Q0FOOUI7Ozs7Ozs7Ozs7Ozs7OyJ9