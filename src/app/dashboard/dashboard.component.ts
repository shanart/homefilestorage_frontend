import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    theme: "light" | "dark" = "light";
    constructor(private router: Router) { }

    sign_out() {
        this.router.navigate(['/auth']);
    }

    switch_theme() {
        if (this.theme === "dark") this.theme = "light";
        if (this.theme === "light") this.theme = "dark";
    }
}
