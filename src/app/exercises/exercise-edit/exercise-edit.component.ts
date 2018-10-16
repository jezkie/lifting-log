import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { ExerciseService } from '../exercise.service';
import { Exercise } from '../exercise.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-exercise-edit',
  templateUrl: './exercise-edit.component.html',
  styleUrls: ['./exercise-edit.component.css']
})
export class ExerciseEditComponent implements OnInit, CanComponentDeactivate {
  exercise: Exercise;
  exerciseForm: FormGroup;
  id: number;
  changesSaved: boolean;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];

    this.route.data.subscribe(
      (data: Data) => {
        this.exercise = data['exercise'];
        this.exerciseForm = new FormGroup({
          'name': new FormControl(this.exercise.name, Validators.required),
          'description': new FormControl(this.exercise.description),
          'sets': new FormControl(this.exercise.sets, [Validators.required, Validators.max(5),Validators.min(1)]),
          'reps': new FormControl(this.exercise.reps, [Validators.required, Validators.min(1)])
        });
      }
    );

  }

  onSave() {
    this.exerciseService.updateExercise(this.id, this.exerciseForm.value);
    this.changesSaved = true;
    this.router.navigate(['exercises', this.id]);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.exerciseForm.dirty && !this.changesSaved) {
      return confirm('Do you really want to discard the changes?');
    } else {
      return true;
    }
  }
}
