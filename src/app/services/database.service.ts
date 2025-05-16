import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Reading } from "../interfaces/reading";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import { map } from "rxjs";

@Injectable(
    {
        providedIn: 'root'
    }
)

export class DatabaseService {

    private myApp: string;
    private myApi: string;

    constructor(private http: HttpClient) {
        this.myApp = environment.endpoint;
        this.myApi = "api/setUpDB";
    }


    deleteDatabase(): Observable<void> {
        return this.http.delete<void>(`${this.myApp}${this.myApi}`);
    }



}