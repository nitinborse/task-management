import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { TaskListViewComponent } from './task-list-view/task-list-view.component';
import { TaskDetailViewComponent } from './task-detail-view/task-detail-view.component';
import { EditTaskComponent } from './edit-task/edit-task.component';



@NgModule({
  declarations: [
    // TaskListViewComponent
  
    TaskDetailViewComponent,
    EditTaskComponent
  ],
  imports: [
    // CommonModule
  ]
})
export class ModulesModule { }
