import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class LoadingService {
	loading: Subject<loadingTypes> = new Subject<loadingTypes>();

	getLoading() {
		return this.loading
			.asObservable()
			.pipe(startWith(loadingTypes.STOPPED));
	}

	start(){
		this.loading.next(loadingTypes.LOADING);
	}

	stop(){
		this.loading.next(loadingTypes.STOPPED);
	}
}

export enum loadingTypes {
	LOADING = 'loading',
	STOPPED = 'stopped'
}