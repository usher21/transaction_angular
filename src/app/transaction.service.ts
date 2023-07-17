import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class TransactionService {

	transUrl: string = "http://localhost:8000/transaction-api/transactions";
	receiverUrl: string = "http://localhost:8000/transaction-api/transactions/";

	constructor(private http: HttpClient) { }

	getTransactions() {
		return this.http.get(this.transUrl);
	}

	getReceiver(phoneReceiver: string) {
		return this.http.get(this.receiverUrl + phoneReceiver);
	}
}
