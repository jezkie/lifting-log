import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExercisesComponent } from "./exercises/exercises.component";
import { ExerciseAddComponent } from "./exercises/exercise-add/exercise-add.component";
import { ExerciseDetailComponent } from "./exercises/exercise-detail/exercise-detail.component";
import { LoginComponent } from "./login/login.component";
import { ExerciseEditComponent } from "./exercises/exercise-edit/exercise-edit.component";
import { ExerciseResolver } from "./exercises/exercise-resolver.service";
import { CanDeactivateGuard } from "./exercises/exercise-edit/can-deactivate-guard.service";

const appRoutes: Routes = [
    { path: '', redirectTo: '/exercises', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'exercises', component: ExercisesComponent, children: [
            { path: 'add', component: ExerciseAddComponent },
            { path: ':id', component: ExerciseDetailComponent, resolve: { exercise: ExerciseResolver } },
            { path: ':id/edit', component: ExerciseEditComponent, resolve: { exercise: ExerciseResolver }, canDeactivate: [CanDeactivateGuard] }
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