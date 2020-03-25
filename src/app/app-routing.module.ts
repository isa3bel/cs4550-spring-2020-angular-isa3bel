import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseViewerComponent } from './components/course-viewer/course-viewer.component';
import { HomeComponent } from './components/home/home.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { QuizComponent } from './components/quiz/quiz.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quizzes', component: QuizzesComponent},
  {path: 'quizzes/:quizId', component: QuizComponent},
  {path: 'courses', component: CourseListComponent},
  {path: 'table/course/:id', component: CourseViewerComponent},
  {path: 'course/:id/module/:mid', component: CourseViewerComponent},
  {path: 'course/:id/module/:mid/lesson/:lid/topics', component: CourseViewerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
