import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise-add',
  templateUrl: './exercise-add.component.html',
  styleUrls: ['./exercise-add.component.css']
})
export class ExerciseAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSave(){
    this.router.navigate(['exercises']);
  }

  onCancel() {
    this.router.navigate(['exercises']);
  }
}
