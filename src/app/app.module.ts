import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseListComponent } from './exercises/exercise-list/exercise-list.component';
import { ExerciseAddComponent } from './exercises/exercise-add/exercise-add.component';


@NgModule({
  declarations: [
    AppComponent,
    ExercisesComponent,
    ExerciseListComponent,
    ExerciseAddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
