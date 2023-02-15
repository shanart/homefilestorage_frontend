import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StorageComponent } from './storage/storage.component';

const routes: Routes = [
    { path: "", component: DashboardComponent, children: [
        {path: "", component: StorageComponent}
    ]}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRouterModule { }