import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingModule } from './pending/pending.module';
import { DoneModule } from './done/done.module';
import { HistoricModule } from './historic/historic.module';

@NgModule({
	imports: [
		CommonModule,
		PendingModule,
		DoneModule,
		HistoricModule
	],
	declarations: [],
	exports: []
})
export class EvaluationsModule { }
