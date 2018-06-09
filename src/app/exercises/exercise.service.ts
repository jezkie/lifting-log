import { EventEmitter } from "@angular/core";
import { Exercise } from "./exercise.model";

export class ExerciseService {
    private exercises: Exercise[] = [
        new Exercise('Squat', 'Squat', 5, 5),
        new Exercise('Bench Press', 'Bench press', 5, 5)
      ];

    exerciseSelected = new EventEmitter<Exercise>(); 

    constructor(){}

    getExercises() {
        return this.exercises.slice();
    }

    getExerciseById(idx: number) {
        return this.exercises[idx];
    }
    
}