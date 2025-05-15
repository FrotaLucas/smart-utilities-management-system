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

export class ReadingService {

    private myApp: string;
    private myApi: string;

    constructor(private http: HttpClient) {
        this.myApp = environment.endpoint;
        this.myApi = "api/readings";
    }

    getReadings(): Observable<Reading[]> {

        return this.http.get<any>(`${this.myApp}${this.myApi}`).pipe(
            map( response => response.properties.readings.items.properties)
        )
    }
}