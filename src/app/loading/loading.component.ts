import { Component, OnInit } from '@angular/core';
import { LoadingService, loadingTypes } from './loading.service';
import { Observable } from '../../../node_modules/rxjs';
import { map } from '../../../node_modules/rxjs/operators';

@Component({
	selector: 'loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

	loading$: Observable<string>;

	constructor(private LoadingService: LoadingService) { }

	ngOnInit() {
		this.loading$ = this.LoadingService
			.getLoading()
			.pipe(map(loadingTypes => {
				return loadingTypes.valueOf()
			}))
	}

}
