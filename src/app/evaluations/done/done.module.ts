import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoneComponent } from './done.component';
import { ItemEvaluationModule } from '../item-evaluation/item-evaluation.module';

@NgModule({
  imports: [
    CommonModule,
    ItemEvaluationModule
  ],
  declarations: [DoneComponent]
})
export class DoneModule { }
