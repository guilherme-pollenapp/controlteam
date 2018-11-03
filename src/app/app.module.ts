import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { Interceptor } from './services/interceptor';
import { LoginService } from './login/login.service';
import { Global } from './services/global';
import { LoadingModule } from './loading/loading.module';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		NoopAnimationsModule,
		LoadingModule
	],
	providers: [
		LoginService,
		Global,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: Interceptor,
			multi:true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
