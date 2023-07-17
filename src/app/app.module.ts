import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ClientService } from './client.service';
import { AddUserComponent } from './add-user/add-user.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

@NgModule({
	declarations: [
		AppComponent,
		TopbarComponent,
		UserListComponent,
		UserItemComponent,
		AddUserComponent,
		TransactionListComponent,
  AddTransactionComponent
	],

	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule
	],

	providers: [
		ClientService
	],
	
	bootstrap: [AppComponent]
})

export class AppModule { }
