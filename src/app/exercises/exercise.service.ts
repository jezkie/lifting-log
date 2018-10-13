import { EventEmitter } from "@angular/core";
import { Exercise } from "./exercise.model";
import { Subject } from "rxjs/Subject";

export class ExerciseService {
    private exercises: Exercise[] = [
        new Exercise('Squat', 'Squat', 5, 5),
        new Exercise('Bench Press', 'Bench press', 5, 5)
    ];

    exerciseSelected = new EventEmitter<Exercise>();
    exercisesChanged = new Subject<Exercise[]>();

    constructor() { }

    getExercises() {
        return this.exercises.slice();
    }

    getExerciseById(idx: number) {
        return this.exercises[idx];
    }

    addExercise(exercise: Exercise) {
        this.exercises.push(exercise);
        this.exercisesChanged.next(this.exercises.slice())
    }

    updateExercise(idx: number, exercise: Exercise) {
        this.exercises[idx] = exercise;
        this.exercisesChanged.next(this.exercises.slice())
    }

    deleteExercise(idx: number) {
        this.exercises.splice(idx, 1);
        this.exercisesChanged.next(this.exercises.slice())
    }

}