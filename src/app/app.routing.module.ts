import { NgModule } from "../../node_modules/@angular/core";
import { RouterModule, Routes } from "../../node_modules/@angular/router";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        loadChildren: "./home/home.module#HomeModule"
    },
    {
        path: '*',
        loadChildren: "./home/home.module#HomeModule"
    }
];
 
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule{

}