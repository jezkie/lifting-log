import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExercisesComponent } from "./exercises/exercises.component";
import { ExerciseAddComponent } from "./exercises/exercise-add/exercise-add.component";
import { ExerciseDetailComponent } from "./exercises/exercise-detail/exercise-detail.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/exercises', pathMatch: 'full' },
    { path: 'exercises', component: ExercisesComponent, children: [
            { path: ':id', component: ExerciseDetailComponent }
        ]
    },
    { path: 'add', component: ExerciseAddComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}