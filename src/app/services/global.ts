import { Injectable } from "../../../node_modules/@angular/core";

@Injectable({ providedIn: 'root'})

export class Global {
        
    constructor(){

    }

    get user(){
        return localStorage.getItem("id_user");
    }

    get nameUser() {
        return localStorage.getItem("name_user");
    }

    get emailUser() {
        return localStorage.getItem("email_user");
    }

    get company() {
        return localStorage.getItem("id_company");
    }

    get nameCompany() {
        return localStorage.getItem("name_company");
    }
    
}