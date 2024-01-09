import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import the FormsModule for two-way data binding
import { AppComponent } from './app.component';
import { PasswordComponent } from './password/password.component';
@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Add the FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }