(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('counter', ['exports', '@angular/core'], factory) :
    (factory((global.counter = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CounterService = /** @class */ (function () {
        function CounterService() {
        }
        CounterService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CounterService.ctorParameters = function () { return []; };
        /** @nocollapse */ CounterService.ngInjectableDef = i0.defineInjectable({ factory: function CounterService_Factory() { return new CounterService(); }, token: CounterService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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

    exports.CounterService = CounterService;
    exports.CounterComponent = CounterComponent;
    exports.CounterModule = CounterModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NvdW50ZXIvbGliL2NvdW50ZXIuc2VydmljZS50cyIsIm5nOi8vY291bnRlci9saWIvY291bnRlci5jb21wb25lbnQudHMiLCJuZzovL2NvdW50ZXIvbGliL2NvdW50ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ291bnRlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY291bnRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBjb3VudGVyIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDb3VudGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb3VudGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ291bnRlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDb3VudGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBDb3VudGVyTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7NkJBSkQ7S0FFQTs7Ozs7O0FDRkE7UUFhRTtTQUFpQjs7OztRQUVqQixtQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLCtDQUlUO3FCQUVGOzs7O1FBUUQsdUJBQUM7S0FoQkQ7Ozs7OztBQ0ZBO1FBR0E7U0FNOEI7O29CQU43QkMsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO3dCQUNoQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDNUI7O1FBQzRCLG9CQUFDO0tBTjlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=