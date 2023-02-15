import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageFolder } from '../models';

@Component({
  selector: 'tr[storage_folder_item]',
  templateUrl: './folder-item.component.html',
  styleUrls: ['./folder-item.component.scss']
})
export class FolderItemComponent implements OnInit {
    @Input() folder: StorageFolder;
    @Output() getParent: EventEmitter<number> = new EventEmitter<number>();

    ngOnInit() {

    }

    select() {
        
    }

    onGetParent() {
        this.getParent.emit(this.folder.id);
    }
}
