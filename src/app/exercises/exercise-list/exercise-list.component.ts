import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
  exercises: Exercise[] = [
    new Exercise('Squat', 'Squat', 5, 5),
    new Exercise('Bench Press', 'Bench press', 5, 5)
  ];

  @Output() addButtonEmitter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onClickAddBtn() {
    this.addButtonEmitter.emit('exer-add');
  }

}
