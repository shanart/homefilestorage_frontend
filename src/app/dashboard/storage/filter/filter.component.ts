import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
    filetypes = [
        'pdf',
        'txt',
        'png',
        'jpg'
    ];

    ordering = [
        "Recent",
        "Oldest",
        "Biggest",
        "Smallest",
        "Alphabeticaly",
    ]
}
