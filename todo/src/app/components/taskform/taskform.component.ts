import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TodolistService } from 'src/app/services/todolist.service';
import { Task } from 'src/app/class/task';

@Component({
  selector: 'apptask-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {

  constructor(public todolistService: TodolistService, public router: Router) {}

  ngOnInit(): void {}

  onSubmit(userform: NgForm): void {
    this.todolistService.addTask(new Task(0, userform.value.name, (userform.value.completed == 0) ? false : true, "new task", new Date));
    this.router.navigate(['todolist']);
  }
}
