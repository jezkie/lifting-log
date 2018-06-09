import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Exercise } from '../exercise.model';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent implements OnInit {
  exercise: Exercise;
  constructor(private route: ActivatedRoute, private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.exercise = this.exerciseService.getExerciseById(+params['id']);
      }
    )
  }

}
