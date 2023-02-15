import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { StorageFile } from "../storage/models";
import { StorageService } from "../storage/services/storage.service";

@Injectable()
export class StorageFileDataService extends DefaultDataService<StorageFile> {
    constructor(
        http: HttpClient, 
        httpUrlGenerator: HttpUrlGenerator,
        private storageService: StorageService
    ) {
        super('files', http, httpUrlGenerator);
    }

    getAll(): Observable<StorageFile[]> {
        // can replace with http CoursesService
        return this.storageService.getFiles(null);
    }
}
