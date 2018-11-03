import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

import { Login } from './login';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	base_url = environment.url;

	constructor(private http: HttpClient) {

	}

	auth(user:Login){
		return this.http
		.post<Login>(this.base_url+"auth",user);
	}

	hasToken(){
		return sessionStorage.getItem("id_token");
	}

	logout(){
		sessionStorage.clear();
		localStorage.clear();
	}
}
