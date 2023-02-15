import { Component, Input } from '@angular/core';
import { StorageFile } from '../models';

@Component({
  selector: 'tr[storage_file_item]',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
    @Input() file: StorageFile;

    select() {
        
    }
}
