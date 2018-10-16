import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ExerciseService } from "./exercise.service";
import { Injectable } from "@angular/core";

interface Exercise {
    name: string,
    description: string,
    sets: number,
    reps: number
}

@Injectable()
export class ExerciseResolver implements Resolve<Exercise> {

    constructor(private exerciseService: ExerciseService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Exercise> | Promise<Exercise> | Exercise {
        return this.exerciseService.getExerciseById(+route.params['id'])
    }
}