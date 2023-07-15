import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    dataUrl: string = "http://localhost:8000/transaction-api/users";
    transUrl : string = "http://localhost:8000/transaction-api/transactions";

    constructor(private http: HttpClient) {}

    getClients () {
        return this.http.get(this.dataUrl);
    }
    
    addClient (clients:any) {
        return this.http.post(this.dataUrl,clients,{
            headers:new HttpHeaders({
                "Content-Type":"application/json",
                "Accept":"application/json"
            })
        });
    }

    getTransactions () {
        return this.http.get(this.transUrl);
    }
}
