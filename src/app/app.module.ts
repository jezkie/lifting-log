import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseListComponent } from './exercises/exercise-list/exercise-list.component';
import { ExerciseAddComponent } from './exercises/exercise-add/exercise-add.component';
import { ExerciseDetailComponent } from './exercises/exercise-detail/exercise-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { ExerciseService } from './exercises/exercise.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercisesComponent,
    ExerciseListComponent,
    ExerciseAddComponent,
    ExerciseDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
