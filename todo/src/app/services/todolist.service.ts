import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../class/task';

const initialList: Task[] = [
  new Task(1, "Bosser", false, "Pas facile la vie !!", new Date()),
  new Task(2, "Chiller", true, "*vent* !!", new Date("01/01/2020 09:00")),
  new Task(3, "Manger", true, "Miam !!", new Date("01/10/2022 09:00")),
  new Task(4, "Dormir", false, "ZZZ !!", new Date("06/03/1990 00:00")),
  new Task(5, "ronfler", false, "rrrrr!!", new Date("10/01/2200 13:05"))
]

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  private url: string = "https://vbhmghjmh-default-rtdb.firebaseio.com/";
  private _list = new BehaviorSubject<Task[]>([]);
  readonly list$ = this._list.asObservable();
  private list: Task[] = [];

  constructor(private httpClient: HttpClient) {
  }

  public save(): void {
    this.httpClient.put(this.url+"/task.json", this.list).subscribe();
  }

  load(): void {
    this.httpClient.get(this.url+"/task.json").subscribe(response => {
      this.list = response as Task[];
      this.emiter(this.list);
    });
  }

  public updateList(newList: Task[]): void {
      this.list = Object.assign([], newList);
  }

  public loadList(): void {
    this.updateList(initialList);
    this.emiter(this.list);
  }

  public getList(): Observable<Task[]> {
    return this.list$;
  }

  private emiter(list: Task[]): void {
    this._list.next(Object.assign([], list));
  }

  public getTaskById(id: number): Task | null {
    for (const task of this.list) {
      if (task.id == id)
        return task;
    }
    return null;
  }

  public toggleComplete(index: number) {
    if (index >= 0 && index < this.list.length)
      this.list[index].completed = !this.list[index].completed;
  }

  public addTask(task: Task): void {
    task.id = this.getLastId();
    this.list.push(task);
    this.emiter(this.list);
    this.save();
  }

  removeTask(id: number) {
    this.list.forEach((task : Task, i: number) => {
      if (task.id === id) {
        this.list.splice(i, 1);
      }
      this.emiter(this.list);
      this.save();
    })
  }

  getLastId() {
    return (this.list[this.list.length - 1].id + 1);
  }

}
