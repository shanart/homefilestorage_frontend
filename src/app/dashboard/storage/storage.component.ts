import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageFile, StorageFolder } from './models';
import { StorageService } from './services/storage.service';

@Component({
    selector: 'app-storage',
    templateUrl: './storage.component.html',
    styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {

    parent: number | null = null;
    files$: Observable<StorageFile[]>;
    folders$: Observable<StorageFolder[]>;
    activatedRoute: ActivatedRoute;

    constructor(private storageService: StorageService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.parent = params['parent']? +params['parent']: null;
            this.files$ = this.storageService.getFiles(this.parent);
            this.folders$ = this.storageService.getFolders(this.parent);
        });
    }

    onGetParent(id) {
        this.files$ = this.storageService.getFiles(id);
        this.folders$ = this.storageService.getFolders(id);
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { parent: id },
            queryParamsHandling: 'merge'
        })
    }
}
