import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { EvaluationsModule } from '../evaluations/evaluations.module';
import { RouterModule } from '../../../node_modules/@angular/router';
import { EvaluationModule } from '../evaluation/evaluation.module';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    EvaluationsModule,
    RouterModule,
    EvaluationModule,
    LoadingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
