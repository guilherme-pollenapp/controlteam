import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { HTTP_INTERCEPTORS } from '../../../node_modules/@angular/common/http';
import { LoadingInterceptor } from './loading.interceptor';
import { MatProgressBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [
    LoadingComponent
  ],
  declarations: [LoadingComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
  }]
})
export class LoadingModule { }
