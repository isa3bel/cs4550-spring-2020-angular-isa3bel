import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'courses', component: CourseListComponent},
  {path: 'course/:id', component: CourseViewerComponent},
  {path: 'course/:id/module/:mid', component: CourseViewerComponent},
  {path: 'course/:id/module/:mid/lesson/:lid', component: CourseViewerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
