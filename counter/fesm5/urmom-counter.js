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
        this.counter = 0;
    }
    /**
     * @return {?}
     */
    CounterComponent.prototype.increase = /**
     * @return {?}
     */
    function () {
        this.counter++;
    };
    CounterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-counter',
                    template: "<button (click)=\"increase()\" class=\"counter-button\"> {{ counter }} </button>\n"
                }] }
    ];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJtb20tY291bnRlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHVybW9tL2NvdW50ZXIvbGliL2NvdW50ZXIuc2VydmljZS50cyIsIm5nOi8vQHVybW9tL2NvdW50ZXIvbGliL2NvdW50ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AdXJtb20vY291bnRlci9saWIvY291bnRlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb3VudGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY291bnRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb3VudGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDb3VudGVyQ29tcG9uZW50IHtcbiAgY291bnRlciA9IDA7XG5cbiAgaW5jcmVhc2UoKSB7XG4gICAgdGhpcy5jb3VudGVyKys7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvdW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvdW50ZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDb3VudGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NvdW50ZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvdW50ZXJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3lCQUpEO0NBRUE7Ozs7OztBQ0ZBO0lBRUE7UUFNRSxZQUFPLEdBQUcsQ0FBQyxDQUFDO0tBTWI7Ozs7SUFKQyxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDaEI7O2dCQVZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsOEZBQXVDO2lCQUV4Qzs7SUFRRCx1QkFBQztDQVpEOzs7Ozs7QUNGQTtJQUdBO0tBTThCOztnQkFON0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUNSO29CQUNELFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUNoQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDNUI7O0lBQzRCLG9CQUFDO0NBTjlCOzs7Ozs7Ozs7Ozs7OzsifQ==