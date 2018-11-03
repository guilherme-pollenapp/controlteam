import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricComponent } from './historic.component';
import { ItemEvaluationModule } from '../item-evaluation/item-evaluation.module';

@NgModule({
  imports: [
    CommonModule,
    ItemEvaluationModule
  ],
  declarations: [HistoricComponent]
})
export class HistoricModule { }
