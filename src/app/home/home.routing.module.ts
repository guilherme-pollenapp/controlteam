import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { PendingComponent } from "../evaluations/pending/pending.component";
import { HistoricComponent } from "../evaluations/historic/historic.component";
import { DoneComponent } from "../evaluations/done/done.component";

import { EvaluationComponent } from "../evaluation/evaluation.component";
import { EvaluationResolver } from "../evaluation/evaluation.resolver";

import { DoneComponent as toEvaluteDoneComponent } from "../to-evalute/done/done.component";
import { PendingComponent as toEvalutePendgindComponent } from "../to-evalute/pending/pending.component";
import { HistoricComponent as toEvaluteHistoricComponent } from "../to-evalute/historic/historic.component";

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: PendingComponent
            },
            {
                path: 'historic',
                component: HistoricComponent,
            },
            {
                path: 'done',
                component: DoneComponent
            },
            {
                path: 'pending',
                component: PendingComponent
            },
            {
                path: 'toevalute/historic',
                component: toEvaluteHistoricComponent,
            },
            {
                path: 'toevalute/done',
                component: toEvaluteDoneComponent
            },
            {
                path: 'toevalute/pending',
                component: toEvalutePendgindComponent
            },
            {
                path: 'evaluation/:id',
                component: EvaluationComponent,
                resolve: {
                    evaluation: EvaluationResolver
                }
            },
            {
                path: 'evaluation/:id/:user',
                component: EvaluationComponent,
                resolve: {
                    evaluation: EvaluationResolver
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {

}