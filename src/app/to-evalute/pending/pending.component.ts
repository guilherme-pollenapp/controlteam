import { Component, OnInit } from '@angular/core';
import { ToEvaluteService } from '../to-evalute.service';
import { Evaluation } from 'src/app/evaluations/evaluation';
import { convertData, theme } from "../../utils/date";
import { Router } from '@angular/router';
import { Global } from 'src/app/services/global';

@Component({
	selector: 'app-pending',
	templateUrl: './pending.component.html',
	styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

	pending: Evaluation[];
	convert = convertData;
	theme = theme;
	activate: any = {}

	constructor(private service: ToEvaluteService, private router: Router, private global: Global) {
		this.service
			.getPending()
			.subscribe((result: any) => {
				this.pending = result;
			})
	}

	ngOnInit() {

	}

	active(evaluation) {
		this.activate = evaluation
	}

	start() {
		console.log(this.activate)
		this.router.navigate(['home', 'evaluation', this.activate._id, this.activate.evaluted])
	}
}
