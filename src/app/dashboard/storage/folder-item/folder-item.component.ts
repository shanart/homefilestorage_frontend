import { Component, Input, OnInit } from '@angular/core';
import { StorageFolder } from '../models';

@Component({
  selector: 'tr[storage_folder_item]',
  templateUrl: './folder-item.component.html',
  styleUrls: ['./folder-item.component.scss']
})
export class FolderItemComponent implements OnInit {
    @Input() folder: StorageFolder;

    ngOnInit() {

    }

    select() {
        
    }
}
