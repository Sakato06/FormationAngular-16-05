import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/class/task';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit {

  task!: Task | null;

  constructor(private todo: TodolistService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeId: string | null = this.route.snapshot.paramMap.get("id");
    let id: number = (routeId == null) ? -1 : +routeId;
    if (id != -1)
      this.task = this.todo.getTaskById(id);
    else
      this.task = null;
  }

}
