import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { ToastService } from 'src/app/toast-service.service';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.css']
})
export class TaskListViewComponent implements OnInit {
  getTaskInList: any = [];
  filteredTasks: any = [];
  searchForm!: FormGroup;
  showDeleteModal: boolean = false;
  taskIdToDelete: number | null = null;

  constructor(
    private router: Router, 
    private service: ServiceService, 
    private toastService: ToastService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createSearchForm();
    this.getAllData();
  }

  // Initialize the search form with form controls
  createSearchForm() {
    this.searchForm = this.fb.group({
      searchId: [''],
      searchStatus: ['']
    });
  }

  getAllData() {
    this.service.getAllTasksData().subscribe(
      (response: any) => {
        this.getTaskInList = response;
        this.filteredTasks = this.getTaskInList; // Initialize with all tasks
      },
      (error) => {
        console.error(error);
      }
    );
  }

  viewTask(taskId: number): void {
    this.router.navigate([`/task/${taskId}`]);
  }

  confirmDelete(taskId: number) {
    this.taskIdToDelete = taskId;
    this.showDeleteModal = true;
  }

  closeModal() {
    this.showDeleteModal = false;
    this.taskIdToDelete = null;
  }

  deleteTask() {
    if (this.taskIdToDelete !== null) {
      this.service.deleteTaskData(this.taskIdToDelete).subscribe(
        () => {
          this.getTaskInList = this.getTaskInList.filter((task: { id: number | null; }) => task.id !== this.taskIdToDelete);
          this.closeModal();
          this.toastService.showInfo('Task Deleted!', 'Info');
        },
        (error) => {
          // console.error('Error deleting task:', error);
          this.toastService.showError('Error deleting task!', 'error');
        }
      );
    }
  }

  searchTasks() {
    const searchValues = this.searchForm.value;

    // Filter tasks based on Task ID and Status
    this.filteredTasks = this.getTaskInList.filter((task: any) => {
      const matchesId = searchValues.searchId ? task.id.toString().includes(searchValues.searchId) : true;
      const matchesStatus = searchValues.searchStatus ? (task.completed ? 'Completed' : 'Pending') === searchValues.searchStatus : true;
      return matchesId && matchesStatus;
    });
  }
}
