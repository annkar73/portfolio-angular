import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EduComponent } from './pages/education/education.component';
import { RefComponent } from './pages/references/references.component';
import { ContactComponent } from './pages/contact/contact.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Standardrutt
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'education', component: EduComponent },
  { path: 'references', component: RefComponent },
  { path: 'contact', component: ContactComponent }
];
