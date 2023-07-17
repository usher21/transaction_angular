import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../Model/Client';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
	clients!: Client[];

	constructor(private clientService: ClientService) { }

	ngOnInit(): void {
		this.clientService.getClients().subscribe((data) => {
			this.clients = data;
		})
	}
}
