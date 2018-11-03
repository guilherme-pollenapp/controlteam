import { Component, OnInit } from '@angular/core';
import { EvaluationService } from '../evaluation.service';
import { Evaluation } from '../evaluation';
import { convertData, theme } from '../../utils/date';

@Component({
	selector: 'app-done',
	templateUrl: './done.component.html',
	styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

	allDone: Evaluation[];
	convert = convertData;
	theme = theme;

	constructor(private EvaluationService: EvaluationService) { }

	ngOnInit() {
		this.EvaluationService.evaluationDone().subscribe((dones: Evaluation[]) => {
			this.allDone = dones;
		})
	}



}
