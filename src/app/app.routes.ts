import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddOtoComponent } from './components/add-oto/add-oto.component';
import { ShowCarsComponent } from './components/show-cars/show-cars.component'; // Import the new component
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', title: "otocom", component: HomeComponent},
    {path: 'login', title: "otocom - Login", component: LoginComponent},
    {path: 'register', title: "otocom - Register", component: RegisterComponent},
    {path: 'add-oto', title: "otocom - Add Car", component: AddOtoComponent, canActivate: [authGuard]},
    {path: 'show-cars', title: "otocom - Show Cars", component: ShowCarsComponent} // New route
];
