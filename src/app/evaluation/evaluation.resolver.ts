import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { EvaluationService } from "./evaluation.service";
import { Evaluation } from "../evaluations/evaluation";

@Injectable({ providedIn: 'root' })

export class EvaluationResolver implements Resolve<Observable<Evaluation>>{

    constructor(private EvaluationService: EvaluationService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Evaluation>{
        const paramId = route.params.id;

        return this.EvaluationService.getEvaluation(paramId)
    }

}