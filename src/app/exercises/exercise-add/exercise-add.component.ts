import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseService } from '../exercise.service';
import { Exercise } from '../exercise.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercise-add',
  templateUrl: './exercise-add.component.html',
  styleUrls: ['./exercise-add.component.css']
})
export class ExerciseAddComponent implements OnInit {
  exerciseForm: FormGroup;

  constructor(private router: Router, private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exerciseForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null),
      'sets': new FormControl(null, [Validators.required, Validators.max(5),Validators.min(1)]),
      'reps': new FormControl(null, [Validators.required, Validators.min(1)])
    });
  }

  onSave() {
    this.exerciseService.addExercise(
      this.exerciseForm.value
    );
    this.router.navigate(['exercises']);
  }

  onCancel() {
    this.router.navigate(['exercises']);
  }
}
