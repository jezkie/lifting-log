import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ExerciseService } from '../exercise.service';
import { Exercise } from '../exercise.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercise-edit',
  templateUrl: './exercise-edit.component.html',
  styleUrls: ['./exercise-edit.component.css']
})
export class ExerciseEditComponent implements OnInit {
  exercise: Exercise;
  exerciseForm: FormGroup;
  id: number;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.exercise = this.exerciseService.getExerciseById(this.id);
    this.exerciseForm = new FormGroup({
      'name': new FormControl(this.exercise.name, Validators.required),
      'description': new FormControl(this.exercise.description),
      'sets': new FormControl(this.exercise.sets, [Validators.required, Validators.max(5),Validators.min(1)]),
      'reps': new FormControl(this.exercise.reps, [Validators.required, Validators.min(1)])
    });
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.exercise = this.exerciseService.getExerciseById(this.id);
        this.exerciseForm.setValue({
          'name': this.exercise.name,
          'description': this.exercise.description,
          'sets': this.exercise.sets,
          'reps': this.exercise.reps
        })
      }
    );
  }

  onSave() {
    this.exerciseService.updateExercise(this.id, 
      // new Exercise(
      //   this.exerciseForm.get('name').value,
      //   this.exerciseForm.get('description').value,
      //   this.exerciseForm.get('sets').value,
      //   this.exerciseForm.get('reps').value
      // )
      this.exerciseForm.value
    );
    this.router.navigate(['exercises', this.id]);
  }


}
