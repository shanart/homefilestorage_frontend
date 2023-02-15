import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StorageFile, StorageFolder } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
    @Input() files: StorageFile[];
    @Input() folders: StorageFolder[];
    @Output() getParent: EventEmitter<number> = new EventEmitter<number>();

    onGetParent(id: number) {
        this.getParent.emit(id);
    }
}
