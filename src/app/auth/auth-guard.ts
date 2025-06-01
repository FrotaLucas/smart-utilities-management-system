// import {  Route, CanActivateChildFn, CanActivateChild } from "@angular/router";
//qual a diferenca entre CanActivateChildFn e CanActivateChild
import { Router, CanActivateChildFn } from "@angular/router";
import { AuthService } from "./auth-service";
import { Inject } from "@angular/core";

//CanActivateChildFn has return type bool
export const AuthGuard: CanActivateChildFn = () => {
    
    const auth = Inject(AuthService);
    const router = Inject(Router);

    if(!auth.getAuthStatus() ){
        router.navigate(['/login']);
        return false;
    }

    return true;

};


