import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { PendingComponent } from "../evaluations/pending/pending.component";
import { HistoricComponent } from "../evaluations/historic/historic.component";
import { DoneComponent } from "../evaluations/done/done.component";
import { EvaluationComponent } from "../evaluation/evaluation.component";
import { EvaluationResolver } from "../evaluation/evaluation.resolver";

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
                path: 'evaluation/:id',
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