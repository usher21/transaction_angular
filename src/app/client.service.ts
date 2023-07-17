import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Client } from "./Model/Client";

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    userUrl: string = "http://localhost:8000/transaction-api/users";

    constructor(private http: HttpClient) {}

    getClients () : Observable<Client[]> {
        return this.http.get<Client[]>(this.userUrl);
    }
    
    addClient (client : any) {
        return this.http.post(this.userUrl, client, {
            headers:new HttpHeaders({
                "Content-Type":"application/json",
                "Accept":"application/json"
            })
        });
    }
}
