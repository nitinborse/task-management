import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { ToastrModule } from 'ngx-toastr';  // Import toastr module
import { RouterModule } from '@angular/router';  // Add RouterModule here
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TaskListViewComponent } from './modules/task-list-view/task-list-view.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule  ,
    HttpClientModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
