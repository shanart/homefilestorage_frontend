import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

    constructor(private storageService: StorageService,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        console.log(this.parent);

        this.route.queryParamMap.subscribe(
            data => data.get('parent')? this.parent = +data.get('parent'): this.parent = null
        );
        this.files$ = this.storageService.getFiles(this.parent);
        this.folders$ = this.storageService.getFolders(this.parent);
    }
}
