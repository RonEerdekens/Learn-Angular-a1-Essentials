import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  isAddingTask: boolean = false;

  // @Input() name?: string ;
  tasks = dummyTasks;
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id);
  }
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
  onAddTask(taskdata: NewTaskData) {
    this.tasks.push({
      id: Math.random().toString(),
      userId: this.id,
      title: taskdata.title,
      summary: taskdata.summary,
      dueDate: taskdata.date,
    });
    this.isAddingTask = false;
  }
}
