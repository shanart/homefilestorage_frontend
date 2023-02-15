import { Component, Input } from '@angular/core';
import { StorageFile, StorageFolder } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
    @Input() files: StorageFile[];
    @Input() folders: StorageFolder[];
}
