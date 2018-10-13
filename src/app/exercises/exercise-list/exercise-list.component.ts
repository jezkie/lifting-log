import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise.model';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
  exercises: Exercise[];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exercises = this.exerciseService.getExercises();
    this.exerciseService.exercisesChanged.subscribe(
      (exercises: Exercise[])=>{
        this.exercises = exercises;
    });
  }

}
