import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components that you want to route to
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  { path: 'Password', component: PasswordComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }