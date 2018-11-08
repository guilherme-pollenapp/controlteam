import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingComponent } from './pending.component';
import { ItemEvaluationModule } from '../item-evaluation/item-evaluation.module';
import { RouterModule } from '../../../../node_modules/@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ItemEvaluationModule,
    RouterModule
  ],
  declarations: [
    PendingComponent
  ]
})
export class PendingModule { }
