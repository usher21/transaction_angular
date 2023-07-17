import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
	selector: 'app-add-user',
	templateUrl: './add-user.component.html',
	styleUrls: ['./add-user.component.css']
})

export class AddUserComponent {
	clients: FormGroup;

	errorMessages:any = {
		"fullname.required":"le nom est obligatoire",
		"fullname.pattern":"le nom est invalide",
		"email.required":"l'email est obligatoire",
		"email.email":"l'email est invalide",
		"phone.required":"le numero telephone est obligatoire",
		"fullname.minlength":"le nom est trop court",
		"phone.pattern":"le numero telephone est invalide",
	}

	action = "http://localhost:8000/transaction-api/users";
	method = "POST";

	constructor(private formBuilder: FormBuilder,private clientService:ClientService) {
		this.clients = this.formBuilder.group({
			fullname: this.formBuilder.control('', [ Validators.required, Validators.pattern('[a-zA-Z ]+[0-9]*'), Validators.minLength(5)]),
			email: this.formBuilder.control('',[Validators.required,Validators.email]),
			phone: this.formBuilder.control('',[Validators.required,Validators.pattern('(7[76508 ]{1})([0-9]{7})')])
		});
	}
	
	showErrorMessages(errors:any,fieldName=""):string{
		if (errors['pattern']) {
			return this.errorMessages[fieldName+'.pattern'];
		}
		else if(errors['required']){
			return this.errorMessages[fieldName+'.required'];
		}
		else if(errors['minlength']){
			return this.errorMessages[fieldName+'.minlength'];
		}
		else{
			return this.errorMessages[fieldName+'.email'];
		}
	}

	onSubmit(): void {
		this.clientService.addClient(this.clients.value).subscribe(
			data => {
				console.log("client ajouté avec succés", data);
			},
			error=>{
				console.log(error);
			}
		)
		
	}
}
