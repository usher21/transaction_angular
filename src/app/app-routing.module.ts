import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

const routes: Routes = [
	{path:"", component:UserListComponent},
	{path:"clients", component:UserListComponent},
	{path:"add-client", component:AddUserComponent},
	{path:"transactions", component:TransactionListComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
