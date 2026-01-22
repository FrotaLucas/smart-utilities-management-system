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

    // getReadings(): Observable<Reading[]> {

    //     return this.http.get<any>(`${this.myApp}${this.myApi}`).pipe(
    //         map(response => response.properties.readings.items.properties)
    //     )
    // }

    getReadings(): Observable<Reading[]> {
        return this.http.get<Reading[]>(`${this.myApp}${this.myApi}`);
    }

    // deleteReading(uuid: string): Observable<void> {
    //     return this.http.delete<void>(`${this.myApp}${this.myApi}/${uuid}`);
    // }

    deleteReading(uuid: string) : Observable<string> {
        return this.http.delete<string>(`${this.myApp}${this.myApi}/${uuid}`);  
    }


    // updateReading(reading: Reading): Observable<void> {
    //     return this.http.put<void>(`${this.myApp}${this.myApi}`, reading);
    // }

    updateReading(reading : Reading): Observable<Reading> {
        return this.http.put<Reading>(`${this.myApp}${this.myApi}`, reading);
    }

    addReading(reading: Reading): Observable<Reading> {
        return this.http.post<any>(`${this.myApp}${this.myApi}`, reading).pipe(
            map(response => response.properties.reading.properties)
        )
    }

    getReading(uuid: string): Observable<Reading> {

        return this.http.get<any>(`${this.myApp}${this.myApi}/${uuid}`).pipe(
            map(response => response.properties.reading.properties)
        )
    }
}