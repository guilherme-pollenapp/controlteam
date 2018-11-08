import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evaluation } from '../evaluations/evaluation';
import { environment } from 'src/environments/environment';
import { Global } from '../services/global';

@Injectable({
	providedIn: 'root'
})
export class ToEvaluteService {

	url = environment.url;

	constructor(private http: HttpClient, private global: Global) {

	}

	getPending() {
		return this.http
			.get<Observable<Evaluation[]>>(`${this.url}evaluation/evaluter/${this.global.user}/pending`)
	}

	getDone() {
		return this.http
			.get<Observable<Evaluation[]>>(`${this.url}evaluation/evaluter/${this.global.user}/done`)
	}

	getHistoric() {
		return this.http
			.get<Observable<Evaluation[]>>(`${this.url}evaluation/evaluter/${this.global.user}/historic`)
	}
}
