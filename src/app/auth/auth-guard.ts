// import {  Route, CanActivateChildFn, CanActivateChild } from "@angular/router";
//qual a diferenca entre CanActivateChildFn e CanActivateChild
import { Router, CanActivateChildFn } from "@angular/router";
import { AuthService } from "./auth-service";
import { inject } from "@angular/core";

//CanActivateChildFn has return type bool
export const AuthGuard: CanActivateChildFn = () => {
    
    const auth = inject(AuthService);
    const router = inject(Router);

    if(!auth.getAuthStatus() ){
        router.navigate(['/auth/login']);
        return false;
    }

    return true;

};


