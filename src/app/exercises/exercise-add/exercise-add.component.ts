import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exercise-add',
  templateUrl: './exercise-add.component.html',
  styleUrls: ['./exercise-add.component.css']
})
export class ExerciseAddComponent implements OnInit {
  @Output() insertEmmiter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSave(){
    this.insertEmmiter.emit('exer-list');
  }

}
