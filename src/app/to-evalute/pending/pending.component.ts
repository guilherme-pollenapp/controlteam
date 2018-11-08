import { Component, OnInit } from '@angular/core';
import { ToEvaluteService } from '../to-evalute.service';
import { Evaluation } from 'src/app/evaluations/evaluation';
import { convertData,theme } from "../../utils/date";

@Component({
	selector: 'app-pending',
	templateUrl: './pending.component.html',
	styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

	pending: Evaluation[];
	convert = convertData;
	theme = theme;

	constructor(private service: ToEvaluteService) {
		this.service
			.getPending()
			.subscribe((result: any) => {
				this.pending = result;
				console.log(result);
			})
	}

	ngOnInit() {

	}

}
