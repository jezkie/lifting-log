import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Exercise } from '../exercise.model';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent implements OnInit {
  exercise: Exercise;
  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exercise = this.exerciseService.getExerciseById(+this.route.snapshot.params['id']);
    this.route.params.subscribe(
      (params: Params) => {
        this.exercise = this.exerciseService.getExerciseById(+params['id']);
      }
    )
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
