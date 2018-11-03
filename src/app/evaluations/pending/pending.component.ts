import { Component, OnInit } from '@angular/core';
import { Evaluation } from '../evaluation';
import { convertData, theme } from '../../utils/date';
import { EvaluationService } from '../evaluation.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-pending',
	templateUrl: './pending.component.html',
	styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

	allPending: Evaluation[];
	activate: Evaluation;
	convert = convertData;

	constructor(private EvaluationService: EvaluationService,private router:Router) { }

	ngOnInit() {
		this.EvaluationService.evaluationPending().subscribe(result => this.allPending = result);
	}

	active(evaluation) {
		this.activate = evaluation;
	}

	start(){
		this.router.navigate(['home','evaluation',this.activate._id]);
	}

	theme = theme;
}
