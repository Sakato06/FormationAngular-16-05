import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/class/task';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {

  @Input() task!: Task;
  @Input() index!: number;

  constructor(public todo: TodolistService) { }

  ngOnInit(): void {
  }

  getComplete(): string {
    if (this.task.completed)
      return "fini ";
    else
      return "en cours "
  }

  getVariant(): string {
    if (this.task.completed)
      return "success"
    else
      return "warning"
  }

  getButtonText(): string {
    if (this.task.completed)
      return "Annuler ";
    else
      return "Terminer ";
  }

  toggleComplete(): void {
    this.todo.toggleComplete(this.index);
  }
}
