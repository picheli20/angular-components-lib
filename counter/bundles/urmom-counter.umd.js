(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@urmom/counter', ['exports', '@angular/core'], factory) :
    (factory((global.urmom = global.urmom || {}, global.urmom.counter = {}),global.ng.core));
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
            { type: i0.Component, args: [{
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJtb20tY291bnRlci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0B1cm1vbS9jb3VudGVyL2xpYi9jb3VudGVyLnNlcnZpY2UudHMiLCJuZzovL0B1cm1vbS9jb3VudGVyL2xpYi9jb3VudGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHVybW9tL2NvdW50ZXIvbGliL2NvdW50ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ291bnRlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvdW50ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY291bnRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ291bnRlckNvbXBvbmVudCB7XG4gIGNvdW50ZXIgPSAwO1xuXG4gIGluY3JlYXNlKCkge1xuICAgIHRoaXMuY291bnRlcisrO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb3VudGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ291bnRlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDb3VudGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBDb3VudGVyTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7NkJBSkQ7S0FFQTs7Ozs7O0FDRkE7UUFFQTtZQU1FLFlBQU8sR0FBRyxDQUFDLENBQUM7U0FNYjs7OztRQUpDLG1DQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDaEI7O29CQVZGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLDhGQUF1QztxQkFFeEM7O1FBUUQsdUJBQUM7S0FaRDs7Ozs7O0FDRkE7UUFHQTtTQU04Qjs7b0JBTjdCQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7d0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQUM1Qjs7UUFDNEIsb0JBQUM7S0FOOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==