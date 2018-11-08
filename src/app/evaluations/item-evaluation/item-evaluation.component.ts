import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'evaluation',
  templateUrl: './item-evaluation.component.html',
  styleUrls: ['./item-evaluation.component.css']
})
export class ItemEvaluationComponent implements OnInit {

  @Input() title;
  @Input() date;
  @Input() user = null;
  @Input() state = "open";

  theme = "success";

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
