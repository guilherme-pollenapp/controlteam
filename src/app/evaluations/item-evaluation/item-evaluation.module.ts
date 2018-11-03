import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemEvaluationComponent } from './item-evaluation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItemEvaluationComponent],
  exports: [ItemEvaluationComponent]
})
export class ItemEvaluationModule { }
