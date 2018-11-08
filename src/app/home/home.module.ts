import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { EvaluationsModule } from '../evaluations/evaluations.module';
import { RouterModule } from '../../../node_modules/@angular/router';
import { EvaluationModule } from '../evaluation/evaluation.module';
import { ToEvaluteModule } from '../to-evalute/to-evalute.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    EvaluationsModule,
    RouterModule,
    EvaluationModule,
    ToEvaluteModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
