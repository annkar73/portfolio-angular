import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { EduComponent } from './pages/education/education.component';
import { HomeComponent } from './pages/home/home.component';
import { RefComponent } from './pages/references/references.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
    { path: 'projects', component: ProjectsComponent },
    { path: 'education', component: EduComponent },
    { path: 'references', component: RefComponent },
    { path: 'contact', component: ContactComponent}
];
