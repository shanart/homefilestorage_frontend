import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardRouterModule } from "./dashboard-routing.module";
import { DashboardComponent } from './dashboard.component';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        DashboardRouterModule
    ]
})
export class DashboardModule { }