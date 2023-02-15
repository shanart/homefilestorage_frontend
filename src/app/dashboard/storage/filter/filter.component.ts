import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


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
        "Alphabeticaly",
        "Recent",
        "Oldest",
        "Biggest",
        "Smallest",
    ];

    filterForm: FormGroup = new FormGroup({
        'types': new FormControl(''),
        'ordering': new FormControl(this.ordering[0])
    });

    onSubmit() {
        console.log(this.filterForm.value);
    }

    clear() {
        // this.filterForm.reset();
        this.filterForm = new FormGroup({
            'types': new FormControl(''),
            'ordering': new FormControl(this.ordering[0])
        });
    }
}

