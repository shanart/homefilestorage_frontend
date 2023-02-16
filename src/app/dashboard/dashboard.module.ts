import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardRouterModule } from "./dashboard-routing.module";
import { DashboardComponent } from './dashboard.component';
import { StorageComponent } from './storage/storage.component';
import { ListComponent } from './storage/list/list.component';
import { ItemComponent } from './storage/list/item/item.component';
import { SearchComponent } from './storage/search/search.component';
import { StorageService } from "./storage/services/storage.service";
import { FilterComponent } from './storage/list/filter/filter.component';
import { FolderItemComponent } from './storage/list/folder-item/folder-item.component';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { UploadComponent } from './storage/upload/upload.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
    declarations: [
        DashboardComponent,
        StorageComponent,
        ListComponent,
        ItemComponent,
        SearchComponent,
        FilterComponent,
        FolderItemComponent,
        UploadComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        DashboardRouterModule,
        FontAwesomeModule
    ],
    providers: [
        StorageService
    ]
})
export class DashboardModule { }
