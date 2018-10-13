import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExercisesComponent } from "./exercises/exercises.component";
import { ExerciseAddComponent } from "./exercises/exercise-add/exercise-add.component";
import { ExerciseDetailComponent } from "./exercises/exercise-detail/exercise-detail.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/exercises', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'exercises', component: ExercisesComponent, children: [
            { path: 'add', component: ExerciseAddComponent },
            { path: ':id', component: ExerciseDetailComponent },

        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}