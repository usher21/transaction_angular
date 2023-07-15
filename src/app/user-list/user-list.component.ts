import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
	clients: any

	constructor(private apiservice: ApiService) { }

	ngOnInit(): void {
		this.apiservice.getClients().subscribe(datas => {
			this.clients = datas
		})
	}
}
