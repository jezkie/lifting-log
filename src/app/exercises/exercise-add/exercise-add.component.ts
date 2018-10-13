import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseService } from '../exercise.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-exercise-add',
  templateUrl: './exercise-add.component.html',
  styleUrls: ['./exercise-add.component.css']
})
export class ExerciseAddComponent implements OnInit {
  name: string;
  desc: string;
  sets: number;
  reps: number;

  constructor(private router: Router, private exerciseService: ExerciseService) { }

  ngOnInit() {
  }

  onSave() {
    this.exerciseService.addExercise(new Exercise(this.name, this.desc, this.sets, this.reps));
    this.router.navigate(['exercises']);
  }

  onCancel() {
    this.router.navigate(['exercises']);
  }
}
