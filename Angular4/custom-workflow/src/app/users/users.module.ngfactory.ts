/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './users.module';
import * as import2 from '@angular/router';
import * as import3 from './users-routing.module';
import * as import4 from './users.component.ngfactory';
import * as import5 from './users.component';
class UsersModuleInjector extends import0.ɵNgModuleInjector<import1.UsersModule> {
  _RouterModule_0:import2.RouterModule;
  _UsersRoutingModule_1:import3.UsersRoutingModule;
  _UsersModule_2:import1.UsersModule;
  _ROUTES_3:any[];
  constructor(parent:import0.Injector) {
    super(parent,[import4.UsersComponentNgFactory],([] as any[]));
  }
  createInternal():import1.UsersModule {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ɵa,(null as any)),this.parent.get(import2.Router,(null as any)));
    this._UsersRoutingModule_1 = new import3.UsersRoutingModule();
    this._UsersModule_2 = new import1.UsersModule();
        this._ROUTES_3 = [[{
          path: '',
          component: import5.UsersComponent
        }
    ]];
    return this._UsersModule_2;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import3.UsersRoutingModule)) { return this._UsersRoutingModule_1; }
    if ((token === import1.UsersModule)) { return this._UsersModule_2; }
    if ((token === import2.ROUTES)) { return this._ROUTES_3; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const UsersModuleNgFactory:import0.NgModuleFactory<import1.UsersModule> = new import0.NgModuleFactory<any>(UsersModuleInjector,import1.UsersModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRjovV2ViL2RlbW9zL0FuZ3VsYXI0L2N1c3RvbS13b3JrZmxvdy9zcmMvYXBwL3VzZXJzL3VzZXJzLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9GOi9XZWIvZGVtb3MvQW5ndWxhcjQvY3VzdG9tLXdvcmtmbG93L3NyYy9hcHAvdXNlcnMvdXNlcnMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
