import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

    loginForm: FormGroup = new FormGroup({
        'email': new FormControl('test@test.com', { validators: [Validators.email, Validators.required] }),
        'password': new FormControl('Qwerty123456_', { validators: [Validators.minLength(6), Validators.required] }),
    });

    constructor(private router: Router) { }

    onSubmit() {
        this.router.navigate(['/']);
    }
}
