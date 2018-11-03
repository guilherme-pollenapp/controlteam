import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Evaluation } from '../evaluations/evaluation';

@Injectable({
	providedIn: 'root'
})
export class EvaluationService {
	base_url = environment.url;

	constructor(private http: HttpClient) { }

	getEvaluation(id: string) {
		return this.http
			.get<Evaluation>(this.base_url + "evaluation/" + id)
	}

	evalutedAnswer(id: string,data:Object, user=localStorage.getItem("id_user")) {
		return this.http
			.put<Evaluation>(this.base_url + "evaluation/" + id+"/user/"+user, data)
	}
}
