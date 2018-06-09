import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseListComponent } from './exercises/exercise-list/exercise-list.component';
import { ExerciseAddComponent } from './exercises/exercise-add/exercise-add.component';
import { ExerciseDetailComponent } from './exercises/exercise-detail/exercise-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { ExerciseService } from './exercises/exercise.service';

@NgModule({
  declarations: [
    AppComponent,
    ExercisesComponent,
    ExerciseListComponent,
    ExerciseAddComponent,
    ExerciseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
