import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingComponent } from './pending/pending.component';
import { DoneComponent } from './done/done.component';
import { HistoricComponent } from './historic/historic.component';
import { ItemEvaluationModule } from '../evaluations/item-evaluation/item-evaluation.module';

@NgModule({
  imports: [
    CommonModule,
    ItemEvaluationModule
  ],
  declarations: [PendingComponent, DoneComponent, HistoricComponent]
})
export class ToEvaluteModule { }
