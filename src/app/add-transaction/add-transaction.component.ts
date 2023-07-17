import { Component, Input } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Client } from '../Model/Client';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-add-transaction',
    templateUrl: './add-transaction.component.html',
    styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {

    transaction! : FormGroup;

    clientReceivers : Client[] = [];
    clientSenders : Client[] = [];
    receiverHidded : boolean = true;
    senderHidded : boolean = true;
    @Input() phoneReceiver: string = "";
    @Input() phoneSender: string = "";

    constructor(private transactionService: TransactionService, private builder: FormBuilder) {
        this.builder.control({
            type: this.builder.control(''),
            amount: this.builder.control(''),
            receiver: this.builder.control(''),
            sender: this.builder.control('')
        })
    }

    showReceiver () {
        this.receiverHidded = false;
        this.transactionService.getReceiver(this.phoneReceiver).subscribe(
            data => {
                this.clientReceivers = data as Client[];
            },
            err => {
                console.log(err);
            }
        );
    }

    showSender () {
        this.senderHidded = false;
        this.transactionService.getReceiver(this.phoneSender).subscribe(
            data => {
                this.clientSenders = data as Client[];
            },
            err => {
                console.log(err);
            }
        );
    }

    loadReceiverPhone (client: Client) {
        this.phoneReceiver = client.phone;
        this.receiverHidded = true;
    }

    loadSenderPhone (client: Client) {
        this.phoneSender = client.phone;
        this.senderHidded = true;
    }

    onSubmit () {
        console.log(this.transaction.value);
    }
}
