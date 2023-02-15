import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardRouterModule } from "./dashboard-routing.module";
import { DashboardComponent } from './dashboard.component';
import { StorageComponent } from './storage/storage.component';
import { ListComponent } from './storage/list/list.component';
import { ItemComponent } from './storage/item/item.component';
import { SearchComponent } from './storage/search/search.component';
import { StorageService } from "./storage/services/storage.service";
import { FilterComponent } from './storage/filter/filter.component';
import { FolderItemComponent } from './storage/folder-item/folder-item.component';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        DashboardComponent,
        StorageComponent,
        ListComponent,
        ItemComponent,
        SearchComponent,
        FilterComponent,
        FolderItemComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        DashboardRouterModule
    ],
    providers: [
        StorageService
    ]
})
export class DashboardModule { }