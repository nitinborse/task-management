import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TaskListViewComponent } from './modules/task-list-view/task-list-view.component';
import { TaskDetailViewComponent } from './modules/task-detail-view/task-detail-view.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'tasks', component: TaskListViewComponent },
  { path: 'task/:id', component: TaskDetailViewComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
