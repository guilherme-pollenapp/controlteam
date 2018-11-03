import { Component, OnInit } from '@angular/core';
import { EvaluationService } from '../evaluation.service';
import { Evaluation } from '../evaluation';
import { convertData, theme } from '../../utils/date';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {

  allHistoric:Evaluation[];
  convert = convertData;
  theme = theme;
  activate: Evaluation;

  constructor(private EvaluationService: EvaluationService) { }

  ngOnInit() {
    this.EvaluationService.evaluationHistoric().subscribe((historic:Evaluation[]) => {
      this.allHistoric = historic;
      console.log(historic)
    })
  }

  active(evaluation) {
    this.activate = evaluation;
  }

}
