import { Component, OnInit, Input } from '@angular/core';
import { Evaluation } from '../evaluation';

@Component({
  selector: 'evaluation',
  templateUrl: './item-evaluation.component.html',
  styleUrls: ['./item-evaluation.component.css']
})
export class ItemEvaluationComponent implements OnInit {

  @Input() title;
  @Input() date;
  @Input() state = "open";

  private theme = "success";

  constructor() { }

  ngOnInit() {
    if(this.state == "open")
      this.theme = "warning";
    else if(this.state == "closed")
      this.theme = "success"
    else
      this.theme = "danger";
  }

}
