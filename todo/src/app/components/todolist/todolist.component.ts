import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TodolistService } from 'src/app/services/todolist.service';
import { Task } from '../../class/task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  list: Task[] = [];
  list$! : Observable<Task[]>;
  subscribe! : Subscription | undefined;

  constructor(public todo: TodolistService) { }

  ngOnInit(): void {
    this.todo.load();
    this.list$ = this.todo.getList();
    this.getList();
  }

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }

  trackByFunction(index: number, item: any): number {
    return item.id;
  }

  get nbTrue(): number {
     return (this.list ? this.list.filter((task) => { return task.completed; }).length : 0);
  }

  get nbTask(): number {
    return (this.list ? this.list.length : 0);
  }

  get percent(): number {
    if (this.nbTask != 0)
      return (this.nbTrue / this.nbTask * 100);
    else
      return (0);
  }

  getList(): void {
    this.subscribe = this.list$.subscribe(val => {
      this.list = val;
    });
  }

}
