import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { User } from 'src/app/class/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm!: FormGroup;

  constructor(public fb: FormBuilder, private router: Router, private userService: UserService) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      team: ['', [Validators.required]],
      skills: this.fb.array([this.createSkills()], [])
    });
  }

  ngOnInit(): void { }

  get teams() {
    return [
      { id: '1', name: 'Team 1' },
      { id: '2', name: 'Team 2' },
      { id: '3', name: 'Team 3' },
      { id: '4', name: 'Team 4' }
    ];
  }

  get skills(): FormArray {
    return <FormArray> this.userForm.get('skills');
  }

  createSkills(): FormControl {
    return this.fb.control('', [Validators.required]);
  }

  addSkills(): void{
    this.skills.push(this.createSkills());
  }

  removeSkills( removedControlIndex :number): void{
    this.skills.removeAt(removedControlIndex);
  }

  onSubmit(userForm: FormGroup): void {
    let skillList: string[] = [];
    for (let csk of this.skills.controls) {
        skillList.push(csk.value);
    }
    this.userService.addUser(
      new User(
        userForm.value.firstName,
        userForm.value.lastName,
        userForm.value.email,
        userForm.value.team,
        skillList
      )
    );
    this.router.navigate(['userlist']);
  }

}
