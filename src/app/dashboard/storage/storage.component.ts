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

    parent: Observable<number|null> = null;
    files$: Observable<StorageFile[]>;
    folders$: Observable<StorageFolder[]>;
    activatedRoute: ActivatedRoute;

    constructor(private storageService: StorageService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            console.log(params['parent']);
            if (params['parent'])
                this.parent = params['parent'];
        });

        this.route.queryParamMap.subscribe(
            data => data.get('parent')? this.parent = +data.get('parent'): this.parent = null
        );
        this.files$ = this.storageService.getFiles(this.parent.pipe);
        this.folders$ = this.storageService.getFolders(this.parent);
        this.activatedRoute = this.route;
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
