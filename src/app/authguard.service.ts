import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentcationService } from './authentcation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivateChild{

  constructor(
    private authService:AuthentcationService,
    private route:Router) { }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   boolean | UrlTree | 
   Observable<boolean | UrlTree> | 
   Promise<boolean | UrlTree> {
     
    return this.canActivate(childRoute,state);
  }



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  boolean | UrlTree |
  Observable<boolean | UrlTree> | 
  Promise<boolean | UrlTree> {
   
      return this.authService.isAuthenticated()
      .then(

          (authenticated:any) => {

                if(authenticated){
                  console.log("User is Authenticated Hence Routing Can be Activated");
                  return true;
                }
                else
                {
                  console.log("User is Logged Off Hence Routing Can be Login Page");
                  this.route.navigate(['/']);
                  return false;

                }
          }

      )


  }


  
}
