import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Evaluation } from './evaluation';
import { Global } from '../services/global';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class EvaluationService {

	base_url = environment.url;

	constructor(private http: HttpClient,private global:Global) { }

	evaluationPending(): Observable<any> {
		return this.http
		.get<Observable<Evaluation[]>>(this.base_url+"evaluation/pending/"+ this.global.user)
	}

	evaluationDone(): Observable<any> {
		return this.http
			.get<Observable<Evaluation[]>>(this.base_url + "evaluation/done/" + this.global.user)
	}

	evaluationHistoric(): Observable<any> {
		return this.http
			.get<Observable<Evaluation[]>>(this.base_url + "evaluation/historic/" + this.global.user)
	}
}
