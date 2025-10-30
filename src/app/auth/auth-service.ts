import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private isAuthtenticated = new BehaviorSubject<boolean>(false);

    validateCredentials(user: string, password: string): boolean { //nao poderia ser void e ?
        //only for test
        if (user == 'admin@hotmail.com' && password == 'admin') {
            this.isAuthtenticated.next(true);
            return true;
        }

        return false;
    }

    clearCredentials(): boolean {
        this.isAuthtenticated.next(false);
        return false;
    }

    getAuthStatus(): boolean {
        return this.isAuthtenticated.value;
    }
}