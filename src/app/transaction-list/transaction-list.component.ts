import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-transaction-list',
	templateUrl: './transaction-list.component.html',
	styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent {
	transactions: any;

	constructor(private apiService: ApiService) {
		this.getTransactions();
	}

	getTransactions () {
		this.apiService.getTransactions().subscribe(
			transaction => {
				this.transactions = transaction
				console.log(this.transactions);
			}
		)
	}
}
