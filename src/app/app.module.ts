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
import { TaskDetailViewComponent } from './modules/task-detail-view/task-detail-view.component';
import { EditTaskComponent } from './modules/edit-task/edit-task.component';
import { HeaderComponent } from './header/header.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskListViewComponent,
    TaskDetailViewComponent,
    EditTaskComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule  ,
    HttpClientModule,
    CommonModule ,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
