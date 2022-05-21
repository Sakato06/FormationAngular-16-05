import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TaskdetailsComponent } from './components/taskdetails/taskdetails.component';
import { TaskformComponent } from './components/taskform/taskform.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'todolist/:id', component: TaskdetailsComponent, canActivate: [AuthGuard] },
  { path: 'userform', component: UserFormComponent, canActivate: [AuthGuard] },
  { path: 'userlist', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'taskform', component: TaskformComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'todolist', component: TodolistComponent, canActivate: [AuthGuard] },
  { path: '404', component: NotfoundComponent} ,
  { path: '', component: TodolistComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
