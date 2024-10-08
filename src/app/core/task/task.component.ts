import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(): void {
    this.complete.emit(this.task.id);
  }
}
