import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/store/auth.guard';

const routes: Routes = [
    { path: "dashboard", loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule), canActivate: [AuthGuard] },
    { path: "auth", component: AuthComponent },
    { path: '**', redirectTo: 'auth' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
