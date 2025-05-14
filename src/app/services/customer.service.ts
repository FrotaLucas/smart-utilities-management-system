import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Customer } from "../interfaces/customer";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

//make sure the CustomerService is available globally in the project
@Injectable({
    providedIn: 'root'
})

export class CustomerService {


    private myApp: string;
    private myApi: string;

    constructor(private http: HttpClient){
        this.myApp = environment.endpoint;
        this.myApi = "api/customers";
    }

   getCustomers(): Observable<Customer[]> {

    return this.http.get<Customer[]>(`${this.myApp}${this.myApi}`);
   }
}