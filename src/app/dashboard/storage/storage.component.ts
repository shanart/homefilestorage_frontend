import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageFile } from './models';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {

    files$: Observable<StorageFile[]>;

    constructor(private storageService: StorageService) { }

    ngOnInit(): void {
        this.files$ = this.storageService.getFiles();
    }
}
