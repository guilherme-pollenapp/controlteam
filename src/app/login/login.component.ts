import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { LoginService } from './login.service';
import { Login } from './login';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	form: FormGroup;

	constructor(fb: FormBuilder,private LoginService:LoginService,private route:Router) {
		this.form = fb.group({
			birth: ['',Validators.required],
			cpf: ['',Validators.required]
		})
	}

	ngOnInit() {
		
	}

	submit(event){
		event.preventDefault();
		let val = this.form.getRawValue() as Login;
		
		this.LoginService.auth(val).subscribe((result:any) => {
			console.log(result);
			localStorage.setItem("user_name",result[0].firstname_user + " " + result[0].lastname_user);
			localStorage.setItem("id_user",result[0].id_user);
			localStorage.setItem("id_company",result[0].id_company);
			localStorage.setItem("name_company",result[0].name_company);

			sessionStorage.setItem("id_token",result[0].token);

			this.route.navigate(['home']);
		},err => {

		})
	}

}
