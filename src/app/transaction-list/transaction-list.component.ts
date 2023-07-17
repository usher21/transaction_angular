import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
	selector: 'app-transaction-list',
	templateUrl: './transaction-list.component.html',
	styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent {
	transactions: any;

	constructor(private transactionService: TransactionService) {
		this.getTransactions();
	}

	getTransactions () {
		this.transactionService.getTransactions().subscribe(
			transaction => {
				this.transactions = transaction
				console.log(this.transactions);
			}
		)
	}
}
