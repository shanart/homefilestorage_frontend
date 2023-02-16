import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { noop, tap } from 'rxjs';
import { AppState } from '../app.reducers';
import { AuthService } from './store/auth-http.service';
import { loginAction } from './store/auth.actions';

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

    constructor(
        private router: Router, 
        private auth: AuthService,
        private store: Store<AppState>) { }

    onSubmit() {
        const value = this.loginForm.value;
        this.auth.login(value['email'], value['password']).pipe(
            tap(user => {
                this.store.dispatch(loginAction({user}));
                this.router.navigateByUrl('/dashboard');
            })
        ).subscribe(noop, () => alert('Login Failed'));
    }
}
