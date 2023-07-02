import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';



export interface CanComponentCanDeactivate{
     canDeactivate:()=>
        Observable<boolean>|Promise<boolean>|boolean
}
export class CandeactivateService 
implements CanDeactivate<CanComponentCanDeactivate> {

  constructor() { }
  canDeactivate(component: CanComponentCanDeactivate,
     currentRoute: ActivatedRouteSnapshot, 
     currentState: RouterStateSnapshot,
      nextState: RouterStateSnapshot):
       boolean | UrlTree |
        Observable<boolean | UrlTree> | 
        Promise<boolean | UrlTree> {
    
          return component.canDeactivate();
  }
}
