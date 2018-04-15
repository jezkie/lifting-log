import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  @Output() addClickedEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addButtonClicked(view: string) {
    this.addClickedEmitter.emit(view)
  }
}
